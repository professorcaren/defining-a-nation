(function (root) {
  // ─────────────────────────────────────────────────────────────
  //  UNLEASHED: CONGRESS AND THE MASS MOVEMENT, 1920–1942
  //  Rules only (no text, no DOM). Shared by the game page and by
  //  dev-notes/simulate.js, so the simulator plays the real rules.
  //
  //  Two numbers carry across the three campaigns:
  //    pressure: what the movement has cost the Raj (banked; the score)
  //    fracture: how much of the field rivals have taken from Congress
  //  Inside a campaign, each Escalate adds momentum (unbanked pressure)
  //  and risks losing control. Call it off to bank the momentum.
  // ─────────────────────────────────────────────────────────────

  // Tuned by simulation (dev-notes/simulate.js, 40,000 games per strategy).
  const RULES = {
    startFracture: 10,
    fractureDrag: 0.5,        // at fracture 100, each escalation yields half as much
    collapseKeep: 0.4,        // share of momentum banked when control is lost
    disciplineBonus: 0.06,    // risk cut in the campaign that follows a collapse
    minRisk: 0.01,
    pressureThreshold: 90,    // at or above: the British are leaving
    fractureThreshold: 45,    // at or above: rivals hold a veto at Simla (any one collapse gets you here)
    campaigns: [
      { id: "non_cooperation", years: "1920–22", steps: 7, gain: 10, baseRisk: 0.05, riskStep: 0.06, callOffFracture: 8, collapseFracture: 18 },
      { id: "civil_disobedience", years: "1930–34", steps: 8, gain: 12, baseRisk: 0.04, riskStep: 0.05, callOffFracture: 8, collapseFracture: 18 },
      // Quit India: high risk from the first step, but even a crushed rising costs the Raj dearly.
      { id: "quit_india", years: "1942", steps: 6, gain: 20, baseRisk: 0.10, riskStep: 0.10, callOffFracture: 10, collapseFracture: 26, collapseKeep: 0.6 }
    ]
  };

  function newGame() {
    return { campaign: 0, step: 0, momentum: 0, pressure: 0, fracture: RULES.startFracture, disciplined: false, log: [], over: false };
  }

  const clampFracture = f => Math.max(0, Math.min(100, f));

  // Chance that the next escalation loses control.
  function risk(s) {
    const c = RULES.campaigns[s.campaign];
    const r = c.baseRisk + c.riskStep * s.step - (s.disciplined ? RULES.disciplineBonus : 0);
    return Math.max(RULES.minRisk, Math.min(0.95, r));
  }

  // Pressure the next escalation adds if it holds.
  function yieldNow(s) {
    return RULES.campaigns[s.campaign].gain * (1 - RULES.fractureDrag * s.fracture / 100);
  }

  // A campaign may set its own collapseKeep (Quit India was crushed, but it still cost the Raj).
  const keepShare = c => (c.collapseKeep != null ? c.collapseKeep : RULES.collapseKeep);

  function endCampaign(s, outcome) {
    const c = RULES.campaigns[s.campaign];
    const collapsed = outcome === "collapse";
    const banked = collapsed ? s.momentum * keepShare(c) : s.momentum;
    s.pressure += banked;
    s.fracture = clampFracture(s.fracture + (collapsed ? c.collapseFracture : c.callOffFracture));
    s.log.push({ campaign: c.id, outcome, steps: s.step, banked });
    s.disciplined = collapsed;   // a collapse makes the next campaign more disciplined
    s.momentum = 0;
    s.step = 0;
    s.campaign += 1;
    if (s.campaign >= RULES.campaigns.length) s.over = true;
    return outcome;
  }

  // Returns "held", "collapse", or "complete" (last step held; campaign runs its course).
  function escalate(s, rand) {
    if ((rand || Math.random)() < risk(s)) return endCampaign(s, "collapse");
    s.momentum += yieldNow(s);
    s.step += 1;
    if (s.step >= RULES.campaigns[s.campaign].steps) return endCampaign(s, "complete");
    return "held";
  }

  function callOff(s) { return endCampaign(s, "called_off"); }

  function ending(s) {
    const p = s.pressure >= RULES.pressureThreshold, f = s.fracture >= RULES.fractureThreshold;
    if (p && !f) return "united_independence";   // British leaving, Congress speaks for most of India
    if (p && f) return "divided_independence";   // British leaving, rivals hold a veto (roughly what happened)
    if (!p && !f) return "intact_but_ruled";     // movement intact, Britain sees no reason to go
    return "weak_and_divided";
  }

  const api = { RULES, newGame, risk, yieldNow, keepShare, escalate, callOff, ending };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  else root.UNLEASHED = api;
})(typeof window !== "undefined" ? window : this);
