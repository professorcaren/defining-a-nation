(function () {
  const OPENING_VIGNETTE = {
    pages: [
      {
        title: "Calcutta, July 1905",
        text: "You are **Surendranath Banerjee**, and the rumor has finally hardened into fact.\n\nThe telegram from your contacts in the Viceroy's office arrived this morning, hand-delivered by a student courier who bicycled through the monsoon rain: Lord Curzon will partition Bengal. The announcement comes in October. Seventy-eight million people split along a line drawn in a London office.\n\nYou set the telegram on your desk beside this morning's edition of *The Bengalee* — your newspaper, your voice — and stare at the rain streaking the window of your College Square office.\n\nYou have spent thirty years building a political career on constitutional methods. Petitions. Deputations. Reasoned argument in the language the British understand. You were the second Indian to pass the Indian Civil Service examination — and the first to be dismissed from it, for the crime of being too capable.\n\nThat dismissal taught you something: the system will bend, but only if you push from inside.",
        button: "Continue"
      },
      {
        title: "The Coalition",
        text: "The problem is not the Partition itself. The problem is what it will do to your coalition.\n\nYou have spent years holding together an impossible alliance — people who agree on almost nothing except that Bengal should not be carved up by imperial fiat. And now, the carving is coming.\n\n**The Congress Moderates** — Gokhale in Pune, Naoroji in London, the petition-writers and deputation-senders. They are your base, your legitimacy. If they lose faith in constitutional methods, you have no platform.\n\n**The Radical Nationalists** — Aurobindo Ghose, who writes of spiritual revolution. Bipin Chandra Pal, who fills College Square with thundering speeches. Tilak in Bombay, who says *Swaraj is my birthright*. They think your petitions are a waste of ink. But if they split from Congress, the movement fractures.\n\n**The Students** — young, furious, idealistic. They will man the boycott lines, burn foreign cloth, march through the streets. They are the foot soldiers of swadeshi. But they are also volatile, easily radicalized, and their enthusiasm can tip into violence.",
        button: "Continue"
      },
      {
        title: "The Difficult Allies",
        text: "And then there are the relationships that require the most delicate handling:\n\n**The Muslim Leaders** — Nawab Salimullah of Dacca sees opportunity in the Partition. A Muslim-majority province means political weight, patronage, recognition. The emerging Muslim League will formalize this interest. You cannot afford to let the communal divide harden into permanent opposition — but you also cannot pretend the diverging interests don't exist.\n\n**The Merchants** — Bengali traders, mill owners, the bazaar guilds. They fund everything. They buy the swadeshi cloth, they underwrite the protest rallies, they keep your newspaper afloat. But they need stability. They need markets. Push too hard, and they will withdraw their support.\n\n**The British Officials** — the Viceroy's office, the district magistrates, the police commissioners. You need them to believe that constitutional protest is worth receiving. That petitions deserve answers. The moment they dismiss you as irrelevant, your entire strategy collapses.",
        button: "Continue"
      },
      {
        title: "The Impossible Task",
        text: "Here is the truth that keeps you awake at night: **you can only tend one relationship at a time.**\n\nEvery hour you spend reassuring the merchants is an hour the students drift toward Aurobindo's secret societies. Every meeting with the British is ammunition for the radicals who call you a collaborator. Every gesture toward the Muslim leaders risks alienating the Hindu nationalists.\n\nAnd every crisis — every arrest, every riot, every bomb — strains relationships you have spent years building.\n\nThe Partition will arrive in October. Between now and 1908, you will face eighteen crises drawn from history. Each one will strain your coalition. Each one will demand a choice.\n\nYour world is a web of relationships, and it is about to be tested to breaking point.\n\nThe question is not whether some threads will fray.\n\nThe question is whether any will snap.",
        button: "Continue"
      },
      {
        title: "How to Play",
        text: "You will see a **network diagram** showing your six relationships. Each starts at 60 out of 100.\n\n**Every turn:**\n- A historical **event** appears, straining one or two relationships\n- You choose **one faction to tend** — to reassure, to meet, to support\n- The tended relationship strengthens, but **all others you neglect will decay**\n- Some choices create **bonus effects** on a second relationship\n\n**You lose** if any relationship drops to zero — that faction breaks with you, and your coalition collapses.\n\n**You win** if you survive all eighteen events with every relationship intact.\n\nYour final score is the sum of all six relationships. Can you hold the web together?\n\n*Every event in this game is drawn from real history. The dilemmas Banerjee faced — balancing moderates against radicals, Hindus against Muslims, British cooperation against Indian dignity — defined the trajectory of Indian nationalism.*",
        button: "Begin Game"
      }
    ]
  };

  const EVENT_CARDS = [
    {
      id: "partition_announced",
      date: "October 1905",
      title: "Partition Announced",
      narration: "The proclamation is published in the *Gazette of India*. Bengal is to be divided: a Muslim-majority east with its capital at Dacca, and a Hindu-majority west centered on Calcutta. Lord Curzon calls it administrative necessity.\n\nYou know better. You have read the confidential dispatches that speak of \"diluting\" Bengali Hindu influence. You have seen how the line was drawn to split your political base in two.\n\nThe Congress moderates want you to draft a formal petition. The radicals want to burn British cloth in the streets. Both are watching to see what you do first.\n\nThe Partition is not merely a map redrawn. It is a challenge to everything you have built.",
      historicalContext: "The Partition of Bengal was announced on July 19, 1905 and took effect on October 16, 1905. Curzon framed it as administrative reform, but internal British documents reveal the intent to weaken Bengali Hindu political influence. The day of Partition was observed as a day of mourning across Bengal.",
      strains: [
        { node: "british", amount: 10, reason: "The Partition proves petitions were ignored" },
        { node: "radicals", amount: 12, reason: "Radicals see this as proof that moderation fails" }
      ],
      tendBonus: {
        moderates: { target: "radicals", amount: 5, reason: "Moderates' petition calms some radical fury" },
        radicals: { target: "students", amount: 5, reason: "Radical solidarity energizes student volunteers" },
        students: { target: "radicals", amount: 4, reason: "Student rallies validate radical critique" }
      }
    },
    {
      id: "raksha_bandhan",
      date: "October 1905",
      title: "Raksha Bandhan Unity March",
      narration: "Rabindranath Tagore has called for a day of mourning and unity. On the day the Partition takes effect, tens of thousands bathe in the Ganges and march through Calcutta singing *Amar Sonar Bangla*. Hindus and Muslims tie yellow threads — *rakhis* — on each other's wrists, vowing brotherhood.\n\nIt is a masterstroke of cultural protest. Even the police constables seem uncertain whether to intervene. But the British see it as sedition wrapped in sentiment, and Muslim leaders in the east view the Hindu symbolism with growing unease.\n\nYou march at the front, torn between exhilaration and anxiety. The unity is real — but is it durable?",
      historicalContext: "Tagore organized the Raksha Bandhan observance on October 16, 1905, the day the Partition took effect. The ceremony of tying rakhis across Hindu-Muslim lines was a powerful symbol of unity, though some Muslim leaders viewed it as imposing Hindu ritual frameworks on a political movement.",
      strains: [
        { node: "british", amount: 10, reason: "Officials view the march as organized sedition" },
        { node: "muslims", amount: 8, reason: "Hindu-coded symbolism alienates some Muslim leaders" }
      ],
      tendBonus: {
        muslims: { target: "moderates", amount: 5, reason: "Outreach to Muslims reassures moderate allies" },
        british: { target: "merchants", amount: 4, reason: "Engaging the British calms merchant anxiety" },
        students: { target: "radicals", amount: 4, reason: "Student enthusiasm validates radical energy" }
      }
    },
    {
      id: "carlyle_circular",
      date: "November 1905",
      title: "The Carlyle Circular",
      narration: "The government issues the Carlyle Circular: any student participating in political meetings will lose their scholarship. Schools that harbor activists will lose their grants.\n\nThe effect is immediate and electric. Instead of silencing the students, it radicalizes them. Expelled students become full-time agitators. The Anti-Circular Society forms overnight, turning campuses into command centers for the boycott.\n\nPrincipals beg you to intervene. Parents write anxious letters. The British congratulate themselves on firm action while the movement doubles in size.\n\nYou realize with a sinking feeling that the government has just manufactured an army of volunteers.",
      historicalContext: "The Carlyle Circular of 1905 threatened to withdraw grants and scholarships from schools whose students participated in political activities. Rather than suppressing student activism, it created the Anti-Circular Society and pushed students into full-time political organizing.",
      strains: [
        { node: "students", amount: 14, reason: "Students feel betrayed by the education system" },
        { node: "british", amount: 8, reason: "Officials see student unrest as your failure to control" }
      ],
      tendBonus: {
        students: { target: "moderates", amount: 5, reason: "Supporting students shows moderates have backbone" },
        british: { target: "merchants", amount: 4, reason: "British engagement signals stability" },
        moderates: { target: "students", amount: 4, reason: "Moderate support reassures anxious students" }
      }
    },
    {
      id: "swadeshi_bonfires",
      date: "December 1905",
      title: "Swadeshi Bonfires",
      narration: "The boycott has found its ritual: bonfires of British cloth. In College Square, in the bazaars of north Calcutta, in towns across Bengal, crowds gather to feed Manchester textiles into the flames.\n\nThe symbolism is powerful. The economics are complicated. Bengali merchants who stockpiled British goods are watching their inventory burn. Mill owners scramble to meet demand for swadeshi cloth, but quality is uneven and prices are high.\n\nThe merchants come to you, caught between patriotism and ruin. They support the cause — but they need the boycott to have limits. The radicals, meanwhile, want the bonfires to spread to every district.\n\nYou stand between the flames and the ledger books, trying to hold both worlds together.",
      historicalContext: "Swadeshi bonfires of British cloth became a central ritual of the boycott movement. While symbolically powerful, they created real economic hardship for merchants who had invested in British goods. The tension between symbolic politics and economic reality was a persistent challenge for movement leaders.",
      strains: [
        { node: "merchants", amount: 12, reason: "Merchants lose inventory and face economic pressure" },
        { node: "british", amount: 9, reason: "Officials see the bonfires as dangerous provocation" }
      ],
      tendBonus: {
        merchants: { target: "moderates", amount: 5, reason: "Protecting merchants reassures moderate base" },
        radicals: { target: "students", amount: 5, reason: "Radical approval fires up student volunteers" },
        students: { target: "radicals", amount: 4, reason: "Student enthusiasm validates the radical cause" }
      }
    },
    {
      id: "barisal_crackdown",
      date: "April 1906",
      title: "Barisal Conference Crackdown",
      narration: "You organize a Provincial Conference at Barisal to demonstrate that the movement can be disciplined, constitutional, orderly. Delegates arrive from across Bengal. Speeches are planned. Resolutions are drafted.\n\nThen the police charge the procession.\n\nMagistrate Emerson bans the cry of *Bande Mataram*. When delegates refuse to stop singing, lathis fall. You are arrested, manhandled, fined. Moderate leaders who preached patience are dragged through the streets.\n\nStanding in the magistrate's court, your clothes torn, you realize something has changed. Not in the movement — in you. The constitutional path you have defended for thirty years has just been answered with a policeman's stick.\n\nBut you cannot say this aloud. Not yet. Not if you want to hold the moderates together.",
      historicalContext: "The Barisal Conference of April 1906 was violently dispersed by police under Magistrate Emerson. Banerjee himself was arrested and fined. The crackdown deeply embarrassed moderate leaders who had argued that working within the system could produce results.",
      strains: [
        { node: "moderates", amount: 13, reason: "Moderates are humiliated — petitions met with lathis" },
        { node: "british", amount: 10, reason: "Your arrest makes the British dismiss you as troublesome" }
      ],
      tendBonus: {
        moderates: { target: "british", amount: 4, reason: "Rallying moderates shows you can still channel dissent" },
        radicals: { target: "students", amount: 5, reason: "Radical sympathy after Barisal energizes students" },
        merchants: { target: "moderates", amount: 4, reason: "Merchant support steadies the moderate faction" }
      }
    },
    {
      id: "muslim_league_founded",
      date: "December 1906",
      title: "Muslim League Founded",
      narration: "At Ahsan Manzil, the grand palace of Nawab Salimullah in Dacca, delegates gather to found the All-India Muslim League. The speeches praise the Partition as a triumph for Muslim political representation. Loyalist addresses thank the Raj for creating a Muslim-majority province.\n\nIn Calcutta, your Hindu colleagues read the news as proof of divide-and-rule. They want you to denounce the League. But you know Salimullah — you have shared tea with him, discussed education policy, exchanged polite letters about civic improvement.\n\nThe League is not your enemy. But it is now an organized counterweight to Congress, and the radicals see it as a British tool. The space for Hindu-Muslim cooperation is narrowing with every passing week.",
      historicalContext: "The All-India Muslim League was founded on December 30, 1906 at Dacca. While it initially focused on protecting Muslim interests within the colonial framework, its formation marked a new phase of organized communal politics that would reshape Indian nationalism permanently.",
      strains: [
        { node: "muslims", amount: 12, reason: "Muslim leaders formalize their separate political path" },
        { node: "radicals", amount: 10, reason: "Radicals see the League as proof of British manipulation" }
      ],
      tendBonus: {
        muslims: { target: "british", amount: 4, reason: "Muslim engagement shows balanced statesmanship" },
        moderates: { target: "muslims", amount: 5, reason: "Moderate outreach keeps Muslim dialogue alive" },
        radicals: { target: "students", amount: 4, reason: "Radical energy channels into student organizing" }
      }
    },
    {
      id: "anti_circular_expulsions",
      date: "January 1907",
      title: "Anti-Circular Society Expulsions",
      narration: "The government makes good on its threats. Dozens of students are formally expelled. Scholarships are revoked. Families that depend on education as a path out of poverty watch their children's futures dissolve.\n\nThe expelled students don't go home. They set up a parallel education network — the National Education Movement — with volunteer teachers and makeshift classrooms. Some drift toward Aurobindo's inner circle, where the curriculum includes more than literature.\n\nThe moderates in Congress are horrified. They want education reform, not education revolution. But how can they condemn young people who were punished for singing patriotic songs?\n\nYou visit a makeshift school in a rented hall near Amherst Street. The students look at you with a mix of hope and challenge: *What are you going to do about this?*",
      historicalContext: "The enforcement of the Carlyle Circular led to mass expulsions and the creation of the National Education Movement, which established alternative schools outside government control. This radicalized a generation of students and created lasting institutions of nationalist education.",
      strains: [
        { node: "students", amount: 12, reason: "Students feel abandoned by the system" },
        { node: "moderates", amount: 9, reason: "Moderates are caught between sympathy and caution" }
      ],
      tendBonus: {
        students: { target: "radicals", amount: 5, reason: "Student solidarity builds radical alliance" },
        moderates: { target: "students", amount: 5, reason: "Moderate support eases student alienation" },
        merchants: { target: "moderates", amount: 4, reason: "Merchant funding for schools reassures moderates" }
      }
    },
    {
      id: "boycott_picket_violence",
      date: "March 1907",
      title: "Boycott Picket Violence",
      narration: "The swadeshi picket lines have turned ugly. In Mymensingh, a merchant who refused to stop selling British cloth had his shop set ablaze. In Comilla, student picketers beat a Muslim trader who resisted the boycott. In Calcutta, the lines between persuasion and intimidation have blurred.\n\nThe merchants are furious. They signed on to a voluntary boycott, not mob enforcement. The students insist that any merchant selling British cloth is a traitor to the nation.\n\nYou stand at the intersection of economic interest and nationalist fervor. The boycott is the movement's most powerful weapon — but if it becomes coercive, it will drive away the very people who fund the cause.",
      historicalContext: "As the swadeshi boycott intensified, incidents of picket violence and coercion against merchants — particularly Muslim traders — increased. This created tensions between the economic and moral dimensions of the movement and contributed to communal friction.",
      strains: [
        { node: "merchants", amount: 13, reason: "Merchants face intimidation and property damage" },
        { node: "students", amount: 9, reason: "Students are blamed for the violence" }
      ],
      tendBonus: {
        merchants: { target: "british", amount: 4, reason: "Calming merchants reassures British about order" },
        students: { target: "moderates", amount: 4, reason: "Disciplining students reassures moderates" },
        moderates: { target: "merchants", amount: 5, reason: "Moderate mediation protects merchant interests" }
      }
    },
    {
      id: "press_censorship",
      date: "May 1907",
      title: "Press Censorship Threats",
      narration: "The government warns that newspapers publishing \"seditious\" material will be shut down. The threat is aimed at the radical press — Aurobindo's *Bande Mataram*, Brahmabandhab Upadhyay's *Sandhya* — but your own *Bengalee* is also under scrutiny.\n\nThe radicals dare the government to act. Censorship, they argue, will prove that the British fear the truth. The moderates want you to self-censor — to tone down the rhetoric before the government uses press closures as a pretext for wider repression.\n\nBut you know the press is the movement's nervous system. Without it, you cannot coordinate, cannot argue, cannot reach the public. Every word you publish is now a calculation: how much truth can the Raj tolerate?",
      historicalContext: "Press censorship was a recurring tool of colonial control. The Newspapers (Incitement to Offences) Act of 1908 eventually gave the government sweeping powers to seize printing presses. The threat of censorship forced nationalist editors into constant calculations about risk.",
      strains: [
        { node: "radicals", amount: 11, reason: "Radicals see censorship as proof of British tyranny" },
        { node: "moderates", amount: 9, reason: "Moderates fear the crackdown will engulf everyone" }
      ],
      tendBonus: {
        radicals: { target: "students", amount: 5, reason: "Defending radical press inspires students" },
        moderates: { target: "british", amount: 5, reason: "Moderate restraint reassures British officials" },
        british: { target: "merchants", amount: 4, reason: "British engagement signals continued stability" }
      }
    },
    {
      id: "surat_split",
      date: "December 1907",
      title: "Surat Congress Split",
      narration: "The Indian National Congress meets at Surat, and it breaks apart.\n\nThe dispute is over the presidency, but it is really about everything: methods, goals, the meaning of the movement itself. Tilak's supporters hurl chairs. Moderates are shouted down. A shoe flies through the air. The session dissolves in chaos.\n\nYou leave the pandal shaken. You have spent your career arguing that Congress is the vehicle for Indian self-governance — a parliament-in-waiting, a demonstration that Indians can govern through debate and resolution. Now it looks like a brawl.\n\nThe radicals celebrate their independence from \"timid\" moderates. The moderates mourn the loss of unity. And you stand in the wreckage, wondering whether the house you helped build has just burned down.",
      historicalContext: "The Surat Split of December 1907 formally divided Congress into Moderate and Extremist factions. The immediate cause was a dispute over the presidency, but deeper disagreements about methods — petitions vs. direct action, constitutional reform vs. swaraj — made the split inevitable.",
      strains: [
        { node: "radicals", amount: 14, reason: "Radicals break from your Congress — they see no point" },
        { node: "moderates", amount: 11, reason: "Moderates despair at the collapse of unity" }
      ],
      tendBonus: {
        moderates: { target: "british", amount: 5, reason: "Rallying moderates shows you still command a coalition" },
        radicals: { target: "students", amount: 5, reason: "Engaging radicals keeps some bridge intact" },
        merchants: { target: "moderates", amount: 4, reason: "Merchant support steadies the moderate base" }
      }
    },
    {
      id: "muzaffarpur_bombing",
      date: "April 1908",
      title: "Muzaffarpur Bombing",
      narration: "A bomb explodes at Muzaffarpur, aimed at Magistrate Kingsford. It hits the wrong carriage. Two British women are killed — Mrs. and Miss Kennedy, who had nothing to do with the Partition or the movement.\n\nThe news travels faster than the telegraph. In London, parliamentarians demand swift justice. In Calcutta, moderates are horrified. Radicals privately argue that the violence was inevitable — that thirty years of petitions produced nothing, so what did you expect?\n\nYou publish an immediate condemnation in *The Bengalee*. But you know the damage is done. Every constitutional argument you have ever made has just been undermined by two young men with a bomb.\n\nThe question now is whether you can prevent the government's response from destroying everyone — guilty and innocent alike.",
      historicalContext: "Khudiram Bose and Prafulla Chaki threw a bomb at what they believed was Magistrate Kingsford's carriage on April 30, 1908. The victims were actually Mrs. and Miss Kennedy. The bombing triggered massive police raids and the Alipore Conspiracy Case, which swept up dozens of nationalists.",
      strains: [
        { node: "radicals", amount: 13, reason: "Radicals face guilt by association and police raids" },
        { node: "british", amount: 15, reason: "The bombing destroys remaining British trust in you" }
      ],
      tendBonus: {
        british: { target: "moderates", amount: 5, reason: "Engaging British helps protect moderate leaders" },
        moderates: { target: "merchants", amount: 4, reason: "Moderate stability reassures merchant funders" },
        merchants: { target: "british", amount: 4, reason: "Merchant order signals your continued relevance" }
      }
    },
    {
      id: "alipore_trial",
      date: "May 1908",
      title: "Alipore Conspiracy Trial",
      narration: "Police raids sweep across Calcutta. The Alipore Conspiracy Case unfolds: dozens arrested, a cache of explosives discovered, revolutionary literature seized. Aurobindo Ghose himself is in the dock.\n\nThe trial becomes political theater. The prosecution wants to crush the radical movement. The defense — led by the brilliant Chittaranjan Das — turns the courtroom into a stage for nationalist argument. Students pack the galleries.\n\nYou watch from a careful distance, knowing that every visit to the courthouse is noted by the CID. The moderates want you to publicly distance yourself. The students want you to support the accused. The British want you to prove your loyalty.\n\nEvery move is watched. Every silence is interpreted.",
      historicalContext: "The Alipore Conspiracy Case (1908-1909) was one of the most significant political trials in colonial India. Aurobindo Ghose was eventually acquitted, largely through C.R. Das's defense. The trial paradoxically increased public sympathy for the accused and turned Aurobindo into a national figure.",
      strains: [
        { node: "students", amount: 11, reason: "Students are swept up in raids and feel persecuted" },
        { node: "radicals", amount: 10, reason: "The trial threatens to destroy the radical movement" }
      ],
      tendBonus: {
        radicals: { target: "students", amount: 5, reason: "Supporting radicals reassures frightened students" },
        students: { target: "moderates", amount: 4, reason: "Protecting students shows moderates care" },
        moderates: { target: "british", amount: 5, reason: "Moderate restraint demonstrates political maturity" }
      }
    },
    {
      id: "tilak_arrested",
      date: "June 1908",
      title: "Tilak Arrested",
      narration: "Bal Gangadhar Tilak is convicted of sedition for articles in *Kesari* and sentenced to six years' transportation to Mandalay. The news detonates across India.\n\nIn Bombay, mill workers walk out in a spontaneous general strike — the first of its kind. In Calcutta, students and radicals call for hartals. Moderate leaders plead for calm while privately wondering if the government has gone too far.\n\nThe merchants are nervous. A general strike means closed shops, lost revenue, disrupted supply chains. They came to you because you promised that constitutional protest would not threaten their livelihoods.\n\nTilak's imprisonment has made him a martyr. And martyrs are harder to argue with than living politicians.",
      historicalContext: "Tilak was sentenced to six years in Mandalay prison in July 1908. His conviction triggered a six-day general strike in Bombay — the first political mass strike in Indian history — and was widely seen as evidence that the British would use the law to crush any effective opposition.",
      strains: [
        { node: "radicals", amount: 12, reason: "Tilak's arrest proves the British will crush dissent" },
        { node: "merchants", amount: 10, reason: "Strike threats frighten merchant supporters" }
      ],
      tendBonus: {
        merchants: { target: "moderates", amount: 5, reason: "Protecting merchants steadies the moderate coalition" },
        radicals: { target: "students", amount: 5, reason: "Radical solidarity energizes student action" },
        moderates: { target: "british", amount: 4, reason: "Moderate calm reassures British officials" }
      }
    },
    {
      id: "rural_unrest",
      date: "July 1908",
      title: "Rural Unrest Spreads",
      narration: "The movement has jumped the city walls. In the eastern districts — the Muslim-majority areas that the Partition was supposed to pacify — peasant unrest is spreading. Tenant farmers refuse to pay rents to Hindu zamindars, framing economic grievance in communal language.\n\nThe *Red Pamphlet* circulates in the villages, urging Muslims to boycott Hindu traders. Swadeshi organizers who venture into the countryside are sometimes met with stones.\n\nThe merchants in Calcutta hear the reports and draw their own conclusions: if the rural economy destabilizes, it will hit their supply chains. The Muslim leaders, meanwhile, are caught between sympathy for peasant grievances and alarm at the violence.\n\nYour urban coalition was fragile enough. Now the countryside is on fire.",
      historicalContext: "By 1907-1908, rural unrest in eastern Bengal took on communal dimensions, with Muslim peasants clashing with Hindu landlords. The so-called 'Red Pamphlet' (Lal Ishtahar) urged Muslims to resist Hindu economic dominance, complicating the nationalist narrative of Hindu-Muslim unity.",
      strains: [
        { node: "merchants", amount: 11, reason: "Rural instability threatens trade and supply chains" },
        { node: "muslims", amount: 10, reason: "Communal framing hardens Muslim-Hindu divisions" }
      ],
      tendBonus: {
        muslims: { target: "moderates", amount: 5, reason: "Muslim outreach demonstrates inclusive leadership" },
        merchants: { target: "british", amount: 4, reason: "Merchant stability signals continued governance" },
        moderates: { target: "muslims", amount: 5, reason: "Moderate mediation keeps dialogue alive" }
      }
    },
    {
      id: "mill_workers_strike",
      date: "August 1908",
      title: "Mill Workers Strike",
      narration: "The Bombay strikes have inspired action in Calcutta. Jute mill workers in Howrah walk out, demanding better wages and shorter hours. The strikers wave swadeshi banners, but their demands are economic, not nationalist.\n\nThe students rush to support them, seeing workers' solidarity as the next stage of the movement. But the merchants — many of whom own the mills — are appalled. They funded a boycott of British goods, not a revolution against Indian capital.\n\nYou are asked to mediate. The workers trust you because of your newspaper. The mill owners trust you because of your moderation. Both sides expect you to support them.\n\nIt is perhaps the cruelest dilemma yet: the movement has grown beyond boycotts into class conflict, and your coalition was never built to handle that.",
      historicalContext: "Labor unrest in Calcutta's jute mills and Bombay's cotton mills became increasingly tied to the nationalist movement in 1908. The convergence of labor and nationalist politics created new tensions within the movement, particularly between working-class supporters and merchant-class funders.",
      strains: [
        { node: "merchants", amount: 13, reason: "Merchants face strikes in their own factories" },
        { node: "students", amount: 9, reason: "Students are caught between workers and their funders" }
      ],
      tendBonus: {
        merchants: { target: "british", amount: 4, reason: "Merchant stability reassures British about order" },
        students: { target: "radicals", amount: 5, reason: "Student labor activism aligns with radical vision" },
        moderates: { target: "merchants", amount: 5, reason: "Moderate mediation protects merchant interests" }
      }
    },
    {
      id: "morley_minto_rumors",
      date: "September 1908",
      title: "Morley-Minto Reforms Rumored",
      narration: "Rumors reach Calcutta that London is drafting constitutional reforms. Secretary of State Morley and Viceroy Minto are said to be planning expanded Indian representation in legislative councils — but with **separate electorates** for Muslims.\n\nThe radicals are disgusted. Reform, they say, is a trap — a way to co-opt moderates while dividing Hindus from Muslims. The Muslim leaders see separate electorates as recognition of their distinct political interests.\n\nYou are caught in the middle, as always. The reforms could validate your lifetime of constitutional argument — proof that petitions and deputations can produce change. But separate electorates would institutionalize the communal divide that the Partition has already deepened.\n\nDo you embrace reform on these terms? Or does accepting them mean accepting partition by another name?",
      historicalContext: "The Morley-Minto Reforms of 1909 expanded Indian representation in legislative councils but introduced separate electorates for Muslims — a provision that would shape Indian politics until Partition in 1947. Moderates saw the reforms as progress; radicals saw them as divide-and-rule formalized into law.",
      strains: [
        { node: "radicals", amount: 11, reason: "Radicals see reforms as a British trap" },
        { node: "muslims", amount: 9, reason: "Separate electorates create new communal tensions" }
      ],
      tendBonus: {
        moderates: { target: "british", amount: 5, reason: "Moderate engagement with reforms preserves the dialogue" },
        muslims: { target: "moderates", amount: 5, reason: "Muslim dialogue shows reform can be inclusive" },
        british: { target: "moderates", amount: 4, reason: "British engagement validates the constitutional path" }
      }
    },
    {
      id: "jamalpur_riots",
      date: "October 1908",
      title: "Communal Riots in Jamalpur",
      narration: "The communal fracture has become a communal explosion. In Jamalpur and Comilla, Hindu-Muslim riots erupt. Swadeshi volunteers defending Hindu shops clash with Muslim tenants. Temples and mosques are damaged. The police, overwhelmed, fire into crowds.\n\nThe unity of 1905 — the rakhis, the marches, the vows of brotherhood — feels like ancient history. Both communities now have organized political bodies, separate newspapers, competing narratives of victimhood.\n\nYou receive delegations from both sides. Each accuses you of favoring the other. The merchants want order at any cost. The students want to defend \"their\" neighborhoods.\n\nYou wonder, not for the first time, whether the Partition has already won — whether the line on the map has become a line in people's hearts.",
      historicalContext: "Communal riots in eastern Bengal in 1907-1908 shattered the Hindu-Muslim unity that characterized the early swadeshi movement. The violence was partly driven by economic tensions between Hindu landlords and Muslim tenants, which the Partition's communal framing had intensified.",
      strains: [
        { node: "muslims", amount: 13, reason: "Riots destroy the remaining trust between communities" },
        { node: "students", amount: 10, reason: "Students are drawn into communal violence" }
      ],
      tendBonus: {
        muslims: { target: "merchants", amount: 4, reason: "Communal peace helps restore market stability" },
        students: { target: "moderates", amount: 4, reason: "Disciplining students reassures moderate leaders" },
        moderates: { target: "muslims", amount: 5, reason: "Moderate peace efforts rebuild fragile trust" }
      }
    },
    {
      id: "london_petition_rejected",
      date: "November 1908",
      title: "London Petition Rejected",
      narration: "Your deputation to London has returned empty-handed. The petition — months of careful drafting, pages of constitutional argument, signatures from across Bengal — has been received, acknowledged, and filed. The Secretary of State expressed \"sympathy\" but offered nothing.\n\nThis is the moment you have dreaded for thirty years. The moment when the system you believed in — petitions, deputations, reasoned argument — demonstrates its final inadequacy.\n\nThe moderates look to you with desperate eyes: *What now?* The radicals don't bother to say *we told you so* — their silence is louder than any speech.\n\nThe British have shown you the limits of their tolerance. The question is whether you can find a new way forward without abandoning everything you've built.\n\nHistory is watching. December 1908 approaches.",
      historicalContext: "Multiple petitions and deputations to London were politely received and effectively ignored throughout the Partition crisis. The failure of constitutional methods to produce results was a central argument used by radicals to discredit moderate leadership and push for direct action.",
      strains: [
        { node: "moderates", amount: 14, reason: "The petition's failure strikes at the heart of moderate strategy" },
        { node: "british", amount: 11, reason: "London's rejection proves petitions are futile theater" }
      ],
      tendBonus: {
        moderates: { target: "merchants", amount: 5, reason: "Rallying moderates steadies merchant confidence" },
        british: { target: "moderates", amount: 5, reason: "Continued engagement keeps the constitutional door ajar" },
        radicals: { target: "students", amount: 4, reason: "Radical solidarity gives students renewed purpose" }
      }
    }
  ];

  const DEFEAT_NARRATIONS = {
    moderates: {
      title: "The Moderates Break",
      narration: "Gokhale's letter arrives from Pune, formal and final: \"The Congress can no longer associate itself with your leadership. The failure to produce results through constitutional methods has exhausted our patience and our credibility.\"\n\nThe petition-writers, the deputation-senders, the men who believed in working within the system — they have walked away. Not to the radicals, but to silence. They return to their law practices, their professorships, their private lives.\n\nWithout the moderates, you have no platform. No organizational base. No claim to represent constitutional India. The radicals fill the vacuum with fire and fury, but they cannot build what the moderates provided: a credible alternative to colonial rule.\n\nYour coalition has shattered at its center.",
      reflection: [
        "The moderates were Banerjee's base — the organized, institutional core of Congress. What happens to a political movement when its institutional center collapses?",
        "Consider how colonial governments could undermine moderate leaders by refusing to reward constitutional methods. Was this a deliberate strategy, or a structural feature of imperial governance?",
        "How does this connect to debates about 'working within the system' vs. 'outside pressure' in other social movements you've studied?"
      ]
    },
    radicals: {
      title: "The Radicals Split",
      narration: "Aurobindo's farewell editorial appears in *Bande Mataram*: \"We depart not from India, but from the illusion that India can be freed by men who dine with her captors.\"\n\nThe radical nationalists — Aurobindo, Pal, Tilak's followers — have not merely left your coalition. They have declared war on it. Your meetings are disrupted. Your speeches are heckled. Students who once respected you now wave *Bande Mataram* and call you a British stooge.\n\nThe split is total. Congress is now two parties pretending to be one, and the pretense is failing. The energy, the youth, the moral urgency — all of it flows to the radicals. You are left with process and procedure, and no one is listening.\n\nThe movement will continue. But it will continue without you.",
      reflection: [
        "The Surat Split of 1907 was a defining moment in Indian nationalism. How did the tension between moderates and radicals reflect deeper disagreements about methods, goals, and the nature of political change?",
        "When movements split, who benefits? Consider how the British responded to the fracture between moderates and radicals.",
        "How does the radical critique of moderation — that working within the system legitimizes it — appear in other historical contexts?"
      ]
    },
    students: {
      title: "The Students Abandon You",
      narration: "The College Square committees no longer send you their minutes. The Anti-Circular Society has stopped publishing your speeches. When you walk past the university, students who once cheered now look away.\n\nThey haven't become radicals — not all of them. Many have simply given up on politics entirely, retreating into their studies or their families' businesses. The movement has lost its foot soldiers, its energy, its future.\n\nThe ones who remain active have drifted into Aurobindo's secret circles, where the talk is of bombs and spiritual transformation, not petitions and constitutional reform. You cannot reach them there.\n\nA movement without young people is a movement without a future. You have kept the structure intact, but the spirit has left the building.",
      reflection: [
        "Student movements often serve as the 'energy source' of broader political movements. What happens when that energy is lost?",
        "The Carlyle Circular tried to suppress student activism through institutional pressure. How did institutional responses to student activism shape the movement's trajectory?",
        "Consider how generational divides — between Banerjee's generation and the students — mapped onto strategic disagreements about methods and goals."
      ]
    },
    muslims: {
      title: "The Muslim Leaders Harden",
      narration: "Nawab Salimullah no longer takes your calls. The Muslim League's newspaper publishes a formal statement: Hindu Congress leaders have consistently failed to address Muslim concerns, and the League can no longer participate in joint political action.\n\nThe communal divide, which the Partition opened and the movement failed to close, has hardened into a wall. Separate electorates. Separate political organizations. Separate futures.\n\nYou remember the rakhis of 1905 — Hindus and Muslims tying threads on each other's wrists, vowing unity. Three years later, that unity is a memory. The threads have frayed, and what remains is suspicion, competition, and the slow crystallization of two political nations from one.\n\nThe Partition has won. Not on the map — that can be redrawn. But in people's hearts.",
      reflection: [
        "The Hindu-Muslim unity of 1905 collapsed within three years. What structural factors — beyond personal choices — made this unity fragile?",
        "How did the British policy of 'separate electorates' institutionalize communal divisions? Was this inevitable, or could different political choices have prevented it?",
        "Consider how the communal divide of 1906-1908 foreshadowed the larger Partition of 1947. What patterns do you see?"
      ]
    },
    merchants: {
      title: "The Merchants Withdraw",
      narration: "The letter from the Bengali Chamber of Commerce is polite, businesslike, and devastating: \"Our members can no longer sustain the economic disruptions associated with the current political agitation. We regret that financial support for Congress activities must be suspended.\"\n\nThe merchants have not turned against the cause. They have turned against the chaos. Boycott violence, strikes, supply chain disruptions, communal riots — the cost of resistance has exceeded what they can bear.\n\nWithout merchant funding, your newspaper cannot publish. Without merchant networks, boycott goods cannot be distributed. Without merchant respectability, your movement loses its claim to represent all of Bengal.\n\nYou have kept the radicals and students in the streets, but you have lost the people who pay for the ink.",
      reflection: [
        "Economic elites play a crucial role in political movements — funding, legitimacy, organizational infrastructure. What happens when they withdraw?",
        "The tension between revolutionary disruption and economic stability is a recurring theme in social movements. How did the swadeshi movement navigate — or fail to navigate — this tension?",
        "Consider how merchant withdrawal might have been prevented. What would it have required from the movement's leadership?"
      ]
    },
    british: {
      title: "The British Dismiss You",
      narration: "The Viceroy's secretary sends a curt note: future petitions from the Bengal Provincial Conference will be \"acknowledged but not referred.\" The district magistrates have been instructed to deal with \"established local authorities\" rather than \"self-appointed political spokesmen.\"\n\nThe door is closed. Not with a dramatic gesture — the British are too shrewd for that — but with bureaucratic indifference. Your petitions will be filed. Your deputations will be received. But nothing will come of them.\n\nYou have spent thirty years building a relationship with the Raj based on the premise that they would listen. They have listened, nodded, and chosen not to hear.\n\nThe radicals' question rings in your ears: *What was the point?*\n\nAnd for the first time, you have no answer.",
      reflection: [
        "Banerjee's entire political strategy depended on the British being willing to engage with constitutional protest. What happens when the interlocutor stops listening?",
        "Consider how colonial power operated through both force and performed legitimacy. How did the British decision to ignore petitions affect the broader political landscape?",
        "How does this dynamic — movements that depend on their opponent's willingness to negotiate — appear in other contexts you've studied?"
      ]
    }
  };

  const VICTORY_NARRATION = {
    title: "Coalition Intact — December 1908",
    narration: "The year closes with Bengal still uneasy. Protests have not vanished. The Partition line still stands. But so does your coalition.\n\nThe moderates are bruised but functioning. The radicals are furious but still talking to you — barely. The students are restless but have not abandoned the constitutional path entirely. The merchants are nervous but still funding the movement. The Muslim leaders are wary but have not closed the door. And the British, though they trust you less than ever, still receive your petitions.\n\nNone of this feels like victory. It feels like survival. Like holding six strings taut while the wind tries to snap each one.\n\nBut survival, in this crisis, is the achievement. You have held together a coalition that every force in Indian politics is trying to pull apart. The Partition will be annulled in 1911 — though you cannot know that yet. What you know is that the movement endures, and that endurance is its own kind of power.\n\nHistory will remember the Bengal Partition crisis as a turning point: the moment Indian nationalism became a mass movement, the moment constitutional and radical methods competed for the soul of the freedom struggle, the moment Hindu-Muslim politics took the form that would shape the subcontinent's future.\n\nYou were at the center of all of it. And you held.",
    reflection: [
      "You survived — but at what cost? Consider which relationships were strongest and weakest at the end. What does this tell you about the trade-offs of coalition politics?",
      "The historical Partition was annulled in 1911. Based on your experience, why might maintaining it have become politically impossible?",
      "How did the tensions you navigated — moderate vs. radical, Hindu vs. Muslim, economic stability vs. political disruption — shape the trajectory of Indian nationalism after 1908?",
      "Banerjee's method was to hold everyone together through personal relationships and institutional loyalty. What are the strengths and limits of this approach to politics?"
    ]
  };

  const GLOSSARY = [
    { term: "Surendranath Banerjee", description: "Moderate Congress leader (1848–1925), editor of The Bengalee, known as 'Rashtraguru' (Teacher of the Nation). He championed constitutional methods and coalition-building during the Partition crisis." },
    { term: "Gokhale", description: "Gopal Krishna Gokhale (1866–1915), moderate Congress leader from Pune who advocated gradual reform through constitutional means. A key ally of Banerjee." },
    { term: "Aurobindo Ghose", description: "Aurobindo Ghose (1872–1950), radical nationalist who edited Bande Mataram and later became a spiritual philosopher. Acquitted in the Alipore Conspiracy Case." },
    { term: "Bipin Chandra Pal", description: "Bipin Chandra Pal (1858–1932), fiery orator and radical nationalist who, along with Tilak and Aurobindo, formed the 'Lal-Bal-Pal' triumvirate of the extremist faction." },
    { term: "Tilak", description: "Bal Gangadhar Tilak (1856–1920), Maharashtra-based nationalist leader who declared 'Swaraj is my birthright.' Sentenced to six years in Mandalay in 1908 for sedition." },
    { term: "Nawab Salimullah", description: "Nawab Sir Salimullah of Dacca (1871–1915), who hosted the founding of the All-India Muslim League at his palace, Ahsan Manzil, in December 1906." },
    { term: "swadeshi", description: "From Sanskrit for 'of one's own country.' The movement to boycott British goods and promote Indian-made products, central to the anti-Partition agitation." },
    { term: "Bande Mataram", description: "'Hail to the Motherland' — a Bengali hymn by Bankim Chandra Chattopadhyay that became the rallying cry of the nationalist movement." },
    { term: "Muslim League", description: "The All-India Muslim League, founded in 1906 at Dacca to protect Muslim political interests. It later became a major force in the movement for Pakistan." },
    { term: "Surat Split", description: "The fracture of the Indian National Congress in December 1907 into Moderate and Extremist factions, triggered by disputes over leadership and methods." },
    { term: "Carlyle Circular", description: "Government order threatening to withdraw scholarships and grants from schools whose students participated in political activities." },
    { term: "Morley-Minto Reforms", description: "Constitutional reforms of 1909 that expanded Indian representation in legislative councils but introduced separate electorates for Muslims." },
    { term: "rakhi", description: "A sacred thread tied around the wrist as a symbol of protection and brotherhood. Used during the Partition protest to symbolize Hindu-Muslim unity." },
    { term: "bhadralok", description: "The educated Bengali Hindu elite — the social class that formed the backbone of both the moderate and radical nationalist movements." },
    { term: "zamindar", description: "A landlord in the colonial revenue system, often Hindu, who collected rents from predominantly Muslim tenants in eastern Bengal." },
    { term: "Swaraj", description: "'Self-rule' — the demand for Indian self-governance that became the central goal of the nationalist movement." },
    { term: "hartal", description: "A form of protest involving the closure of shops and businesses, used as a political tool during the swadeshi movement." },
    { term: "CID", description: "The Criminal Investigation Department, British India's intelligence branch charged with monitoring nationalist activity." }
  ].sort((a, b) => b.term.length - a.term.length);

  const NODE_DEFINITIONS = [
    { id: "moderates", label: "Congress Moderates", shortLabel: "Moderates", color: "#d4a843" },
    { id: "radicals", label: "Radical Nationalists", shortLabel: "Radicals", color: "#c0392b" },
    { id: "students", label: "Students", shortLabel: "Students", color: "#e87d2f" },
    { id: "muslims", label: "Muslim Leaders", shortLabel: "Muslims", color: "#2d8a5e" },
    { id: "merchants", label: "Merchants", shortLabel: "Merchants", color: "#8b5e3c" },
    { id: "british", label: "British Officials", shortLabel: "British", color: "#4a6fa5" }
  ];

  window.OPENING_VIGNETTE = OPENING_VIGNETTE;
  window.EVENT_CARDS = EVENT_CARDS;
  window.DEFEAT_NARRATIONS = DEFEAT_NARRATIONS;
  window.VICTORY_NARRATION = VICTORY_NARRATION;
  window.GLOSSARY = GLOSSARY;
  window.NODE_DEFINITIONS = NODE_DEFINITIONS;
})();
