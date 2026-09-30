(function () {
  // ─────────────────────────────────────────────────────────────
  //  UNLEASHED: CONGRESS AND THE MASS MOVEMENT, 1920–1942
  //  Text only. The numbers live in rules.js; campaign ids and the
  //  number of steps per campaign must match RULES.campaigns there.
  //
  //  Each step is one decision. `text` sets out what is proposed,
  //  `label` is the Escalate button, and `held` is what the player
  //  reads if the escalation holds. The first step of each campaign
  //  is the launch and cannot be declined.
  // ─────────────────────────────────────────────────────────────

  const OPENING_VIGNETTE = {
    pages: [
      {
        title: "Nagpur, 1920",
        text: "You sit on the **Congress** Working Committee. After the massacre at Amritsar, **Gandhi** has persuaded the party to try something it has never tried: a campaign carried out by millions of ordinary Indians instead of petitions drafted by lawyers.\n\nOver the next twenty-two years you will run three such campaigns. Each one can hurt the Raj. Each one can also get away from you.",
        button: "Continue"
      },
      {
        title: "One More Step, or Stop",
        text: "Every turn brings a dispatch and a choice.\n\n**Escalate** builds momentum against the Raj. It also raises the chance that the next step slips out of your control. The gauge shows that chance.\n\n**Call it off** turns the momentum you have built into lasting **Pressure** on the British. Your allies will feel betrayed.\n\nIf a step gets away from you, the campaign collapses. You keep less than half of what you built, and the leadership goes to prison.",
        button: "Continue"
      },
      {
        title: "What You Carry to Simla",
        text: "Two numbers follow you from one campaign to the next.\n\n**Pressure** is what the movement has cost the British. Without enough of it, they have no reason to leave.\n\n**Fracture** is the ground Congress has lost to its rivals: the **Muslim League**, the **Hindu Mahasabha**, and **Ambedkar**. It rises whenever a campaign ends, and it rises much faster when the leaders are in prison. The more fractured the field, the fewer people follow your next call.\n\nIn 1945 you take both numbers to **Simla**.",
        button: "Begin"
      }
    ]
  };

  const CAMPAIGNS = [
    {
      id: "non_cooperation",
      title: "Non-Cooperation",
      years: "1920–22",
      intro: "Gandhi proposes that Indians stop cooperating with the government that rules them: give back its titles, leave its schools and courts, stop buying its cloth. He promises **swaraj** within a year.",
      steps: [
        {
          date: "September 1920",
          title: "A New Method",
          telegraph: "SPECIAL CONGRESS MEETS AT CALCUTTA — GANDHI PROPOSES NON-COOPERATION — STOP",
          text: "At a special session in Calcutta, Gandhi asks Congress to adopt non-cooperation. Older leaders doubt that the country will follow. He has already returned his own medals to the Viceroy.",
          label: "Launch Non-Cooperation",
          held: "Titles and honors are handed back across the country. Motilal Nehru and C. R. Das, two of the best-paid lawyers in India, give up their practices."
        },
        {
          date: "November 1920",
          title: "Schools, Courts, Councils",
          telegraph: "CONGRESS URGES BOYCOTT OF COUNCIL ELECTIONS — STOP",
          text: "The first elections under the new reforms are weeks away. You can ask voters to stay home, lawyers to leave the courts, and students to walk out of government schools.",
          label: "Boycott the elections and the schools",
          held: "Most voters stay away from the polls. Students leave government colleges by the thousand, and national colleges open to take them in."
        },
        {
          date: "December 1920",
          title: "A Party for the Villages",
          telegraph: "NAGPUR SESSION — CONGRESS TO REORGANIZE — STOP",
          text: "At Nagpur the party can remake itself: provincial branches drawn along language lines, a fifteen-member Working Committee, and membership fees low enough for the poor. It would no longer be a club for lawyers.",
          label: "Open Congress to the masses",
          held: "Congress now reaches down to the villages. **Jinnah**, who distrusts mass politics of any kind, walks out of the party."
        },
        {
          date: "July 1921",
          title: "Bonfires and Khadi",
          telegraph: "FOREIGN CLOTH BURNED IN BOMBAY — STOP",
          text: "Gandhi wants every Indian to spin and to wear **khadi**, and he wants foreign cloth burned in public. The crowds at the bonfires are large, and they are not all Congress volunteers.",
          label: "Burn the foreign cloth",
          held: "Imports of British cloth fall sharply. The white homespun cap becomes the uniform of the movement."
        },
        {
          date: "Autumn 1921",
          title: "The Liquor Shops",
          telegraph: "PICKETS CLOSE LIQUOR SHOPS IN MADRAS PRESIDENCY — STOP",
          text: "Volunteers, many from the **Khilafat** movement, want to picket liquor shops. The excise tax on liquor is one of the provincial governments' main sources of revenue. Pickets and shopkeepers are already coming to blows.",
          label: "Picket the liquor shops",
          held: "In the south, one provincial government loses a fifth of its annual revenue. Non-cooperation is now costing the Raj money."
        },
        {
          date: "November 1921",
          title: "The Prince of Wales",
          telegraph: "PRINCE OF WALES LANDS AT BOMBAY — CONGRESS CALLS HARTAL — STOP",
          text: "The Prince of Wales is touring India. You can greet him with a **hartal**: shuttered shops and empty streets in every city he visits. Volunteers cannot police every neighborhood.",
          label: "Call a hartal against the Prince",
          held: "In most cities the Prince rides through silent streets. In Bombay the hartal turns into three days of rioting, and Gandhi fasts until it stops. By January some thirty thousand Congress workers are in jail."
        },
        {
          date: "February 1922",
          title: "No Taxes",
          telegraph: "GANDHI GIVES VICEROY SEVEN DAYS — BARDOLI TO REFUSE TAXES — STOP",
          text: "Congress leaders want the last step: open civil disobedience, beginning with a refusal to pay taxes in the district of Bardoli. If it spreads, the government cannot govern. Gandhi has written to the Viceroy.",
          label: "Refuse the taxes",
          held: "Bardoli refuses its taxes, and district after district follows. The government is governing on paper only."
        }
      ],
      callOff: {
        title: "You Suspend the Campaign",
        text: "You tell the country to stop and turn to spinning and village work. What you have built is secure, but your allies are furious. Subhas Bose calls it \"nothing short of a national calamity.\" Nehru believes Congress \"had the British at their knees.\" The Khilafat leaders, who staked their credibility on the alliance, feel betrayed."
      },
      collapse: {
        title: "Fire at the Police Station",
        text: "In a small town a crowd surrounds the police station and sets it on fire. Twenty-two policemen die. (In February 1922 the town was **Chauri Chaura**.)\n\n\"God spoke clearly,\" Gandhi says. There is not yet \"that non-violent and truthful atmosphere which alone can justify mass civil disobedience.\" The campaign is over. The British arrest him for sedition, and most of what you built is lost."
      },
      complete: {
        title: "The Campaign Runs Its Course",
        text: "You pushed Non-Cooperation as far as it could go, and it held. The British arrest Gandhi, and the campaign winds down with its gains intact."
      },
      aftermath: "**In the years that follow.** The Khilafat alliance falls apart, and riots between Hindus and Muslims become common. The Hindu Mahasabha revives, and the **RSS** is founded in 1925. Jinnah, outside Congress, begins building an alternative to it. In 1930 **Iqbal** tells the Muslim League that Muslims need a state of their own in the northwest."
    },
    {
      id: "civil_disobedience",
      title: "Civil Disobedience",
      years: "1930–34",
      intro: "The Depression has wrecked the countryside. Congress has declared complete independence as its goal. Gandhi looks for a law that every Indian, of any caste or religion, has a reason to break.",
      steps: [
        {
          date: "January 1930",
          title: "Eleven Demands",
          telegraph: "CONGRESS DECLARES FOR COMPLETE INDEPENDENCE — STOP",
          text: "On January 26 Indians across the country take a pledge of independence. Gandhi sends the Viceroy, Lord Irwin, eleven demands, among them abolition of the salt tax and protection for Indian textiles. Irwin does not answer them.",
          label: "Launch Civil Disobedience",
          held: "Congress committees everywhere begin enrolling volunteers. The government waits to see what Gandhi will do."
        },
        {
          date: "March 1930",
          title: "The March to the Sea",
          telegraph: "GANDHI LEAVES AHMEDABAD ON FOOT FOR DANDI — STOP",
          text: "Gandhi proposes to walk 240 miles to the sea at Dandi and make salt in defiance of the government monopoly. Nehru admits that salt is \"too eccentric for his fancy.\"",
          label: "March to Dandi",
          held: "The march takes more than three weeks, and the crowds grow in every village. At Dandi, Gandhi picks up a handful of salty mud. Even Irwin concedes that the choice has \"a unifying effect.\""
        },
        {
          date: "April 1930",
          title: "Salt Everywhere",
          telegraph: "SALT LAW BROKEN ALONG THE COAST — STOP",
          text: "Now the whole country can break the law Gandhi broke: make salt, sell it, buy it. You would be asking millions of people to commit a crime on the same day.",
          label: "Break the salt law nationwide",
          held: "Salt is made and sold in the open from Bombay to Bengal. At Peshawar, two platoons of Garhwali soldiers refuse to fire on a crowd."
        },
        {
          date: "May 1930",
          title: "Women at the Shops",
          telegraph: "WOMEN PICKET CLOTH AND LIQUOR SHOPS — STOP",
          text: "Gandhi has been arrested. Thousands of women are ready to leave the seclusion of their homes to picket shops that sell foreign cloth and liquor. Many have never taken part in politics before.",
          label: "Send the women to picket",
          held: "Shop after shop closes. The police do not know how to handle the pickets, and the jails begin to fill with women."
        },
        {
          date: "May 1930",
          title: "Dharasana",
          telegraph: "VOLUNTEERS TO RAID DHARASANA SALT WORKS — STOP",
          text: "Volunteers propose to march on the government salt works at Dharasana. The police will be waiting with steel-tipped clubs. The plan depends on the volunteers not raising a hand.",
          label: "March on the salt works",
          held: "Row after row walks forward and is beaten down. No one strikes back. The American reporter Webb Miller cables the story, and newsreels carry it to cinemas around the world."
        },
        {
          date: "Summer 1930",
          title: "Forests and Village Police",
          telegraph: "FOREST LAWS DEFIED IN MAHARASHTRA — STOP",
          text: "The campaign can move inland, where there is no salt to make. Villagers in Maharashtra want to defy the forest laws, and in eastern India they want to stop paying the *chaukidari* tax that funds the village police.",
          label: "Defy the forest and police taxes",
          held: "The government seizes property for unpaid taxes and finds no one willing to buy it at auction."
        },
        {
          date: "Late 1930",
          title: "Rent and Revenue",
          telegraph: "PEASANTS WITHHOLD LAND REVENUE — STOP",
          text: "Crop prices have collapsed, and peasants cannot pay what they owe. They are asking Congress to back a strike against land revenue. Some will stop paying rent to Indian landlords too, and the **zamindars** may then turn to the British.",
          label: "Back the revenue strike",
          held: "Revenue collection breaks down across several provinces. The landlords are alarmed, and the government is short of money."
        },
        {
          date: "January 1932",
          title: "After London",
          telegraph: "GANDHI RETURNS FROM LONDON EMPTY-HANDED — STOP",
          text: "Gandhi has come back from the Round Table Conference in London with nothing. The peasants of the Gangetic Plain are no longer waiting for Congress to lead. You can resume the campaign and try to stay at its head.",
          label: "Resume civil disobedience",
          held: "The movement's center shifts from Gandhi's ashram to the villages. The government outlaws Congress and arrests its leaders, and the campaign carries on without them."
        }
      ],
      callOff: {
        title: "A Pact with the Viceroy",
        text: "You settle. The government releases its prisoners and lets coastal villagers make salt for their own use, and Gandhi agrees to go to London to negotiate. (In March 1931 this was the Gandhi-Irwin Pact.)\n\nThe salt tax remains, and so does British rule. Nehru and the younger men are dismayed, and Congress leaders coming out of prison ask what the campaign achieved."
      },
      collapse: {
        title: "Martial Law",
        text: "In a mill town, crowds attack the police posts and the law courts and drive the police out. The army declares martial law. (In May 1930 the town was Sholapur.)\n\nThe government outlaws Congress, seizes its offices and funds, and jails its leaders by the tens of thousands. Most of what you built is lost."
      },
      complete: {
        title: "The Campaign Runs Its Course",
        text: "You pushed Civil Disobedience as far as it could go, and it held. With its leaders in prison the campaign slowly winds down, and Congress formally ends it in 1934 with its gains intact."
      },
      aftermath: "**In the years that follow.** Few Muslims joined this campaign. Gandhi's fast forces Ambedkar to give up separate electorates in the **Poona Pact**, and Ambedkar spends the next decade arguing that Congress does not speak for Untouchables. Congress wins the 1937 elections, and its ministries convince Jinnah that Muslims cannot be safe under a Hindu majority. In 1939 the ministries resign over the war, and the League moves into the space they leave. In 1940, at Lahore, it demands **Pakistan**."
    },
    {
      id: "quit_india",
      title: "Quit India",
      years: "1942",
      intro: "Britain is at war and Japan is at the border. Congress has rejected the Cripps offer, which Gandhi is said to have called \"a post-dated check on a crashing bank.\" This time Gandhi is ready to loosen the reins.",
      steps: [
        {
          date: "August 8, 1942",
          title: "Do or Die",
          telegraph: "CONGRESS AT BOMBAY DEMANDS BRITISH WITHDRAWAL — STOP",
          text: "At Bombay the Congress committee is about to vote on a resolution demanding that Britain leave India at once. \"We shall either free India or die in the attempt,\" Gandhi says. The government has its arrest lists ready.",
          label: "Pass the Quit India resolution",
          held: "Before dawn the police arrest Gandhi and every major Congress leader. The movement begins without them."
        },
        {
          date: "August 1942",
          title: "The Cities",
          telegraph: "HARTALS IN BOMBAY, AHMEDABAD, DELHI — MILLS CLOSED — STOP",
          text: "With the leaders gone, the second rank must decide alone. They can call the cities out: hartals, mill strikes, and students in the streets. Nobody is left to tell a crowd when to go home.",
          label: "Call out the cities",
          held: "Mills and colleges close across the country. In Bombay a young Congress worker, Aruna Asaf Ali, raises the flag on the ground where the leaders were to speak."
        },
        {
          date: "August 1942",
          title: "Underground",
          telegraph: "ILLEGAL CONGRESS RADIO HEARD IN BOMBAY — STOP",
          text: "The organizers still at large want to go underground: secret committees, couriers, and an illegal radio station that moves from house to house. Underground work is hard to keep nonviolent, because no one can see who is doing it.",
          label: "Go underground",
          held: "Congress Radio broadcasts news the censors have cut. Socialists who slipped the arrests direct the movement from hiding."
        },
        {
          date: "August 1942",
          title: "The Lines",
          telegraph: "RAIL AND TELEGRAPH LINES CUT IN BIHAR — STOP",
          text: "Crowds are attacking railway stations and post offices. The underground can direct them at the rail and telegraph lines that supply the army facing Japan. This is sabotage in wartime, and the British will treat it that way.",
          label: "Cut the rail and telegraph lines",
          held: "For weeks Bihar and the eastern United Provinces are cut off from the rest of India. The Viceroy tells Churchill it is the most serious rebellion since 1857."
        },
        {
          date: "Autumn 1942",
          title: "Parallel Governments",
          telegraph: "REBELS HOLD BALLIA — DISTRICT OFFICERS EXPELLED — STOP",
          text: "In a few districts the rebels have driven out the officials altogether. They can set up governments of their own, with courts, police, and relief work. The army will come for them.",
          label: "Set up parallel governments",
          held: "A national government holds Ballia for a few days. Others, at Tamluk in Bengal and Satara in Maharashtra, will last for years."
        },
        {
          date: "February 1943",
          title: "The Fast",
          telegraph: "GANDHI BEGINS TWENTY-ONE DAY FAST IN DETENTION — STOP",
          text: "The Viceroy demands that Gandhi condemn the violence done in his name. Gandhi can refuse, blame the government for arresting the leaders, and begin a fast in detention. If he dies there, no one can say what the country will do.",
          label: "Refuse to condemn the rising",
          held: "Gandhi survives twenty-one days without food. Three Indian members of the Viceroy's council resign in protest, and the government's standing falls further."
        }
      ],
      callOff: {
        title: "Congress Stands Down",
        text: "Word goes out through the underground that the rising should stop. The leaders stay in prison, but the pressure you built stands. The socialists who ran the underground say Congress has lost its nerve at the one moment Britain could not afford a rebellion."
      },
      collapse: {
        title: "The Rising Is Crushed",
        text: "With no one directing it, the movement turns to arson and killing. Britain answers with martial law. Troops machine-gun crowds, and aircraft fire on them from the air. Tens of thousands are jailed.\n\nThe rising is over within months. It has still cost Britain more prestige than any campaign before it, so more of your momentum survives than in earlier collapses. The Congress leaders will stay in prison until 1945."
      },
      complete: {
        title: "The Campaign Runs Its Course",
        text: "You pushed Quit India as far as it could go, and it held. The rising fades during 1943. The leaders remain in prison, but Britain's hold on India has been shaken beyond repair."
      },
      aftermath: "**While Congress is in prison.** The groups that stayed out of Quit India build their own power. The Muslim League grows from about 112,000 members to more than two million. Ambedkar joins the Viceroy's council. The Mahasabha and the RSS build local networks, the Communists back the war, and the princes secure their thrones. In Bengal, famine kills three million people."
    }
  ];

  const REFLECTION_COMMON = [
    "When did you call a campaign off, and what did it cost you with your allies? Would you stop at the same point again?",
    "Reading 3 says Congress needed popular energy to pressure the British but could not control it once it was unleashed. Where in the game did you feel that most?",
    "Every faction at Simla has a reason to distrust Congress. Which of those reasons did your campaigns create or deepen?"
  ];

  // Keys match ending() in rules.js.
  const ENDINGS = {
    united_independence: {
      title: "Simla, 1945: A Strong Hand",
      text: "Britain is bankrupt and knows it cannot hold India. Your campaigns never gave its rivals years of open ground, so Congress arrives at Simla able to claim, with some justice, that it speaks for most of India.\n\nThis is not what happened. It took steady nerve and good luck, and the real Congress had less of both.",
      reflection: ["You avoided every collapse. Which escalation came closest to getting away from you?", ...REFLECTION_COMMON]
    },
    divided_independence: {
      title: "Simla, 1945: Winning and Losing",
      text: "Britain is bankrupt and knows it cannot hold India. But while your leaders sat in prison, the Muslim League became a mass party, and Ambedkar, the Sikhs, and the princes each built their own case. At Simla every one of them can block a settlement.\n\nThis is roughly what happened. The British are leaving, and nobody agrees on who inherits.",
      reflection: ["Which collapse cost you the most ground to your rivals?", ...REFLECTION_COMMON]
    },
    intact_but_ruled: {
      title: "Simla, 1945: No Reason to Go",
      text: "Congress is still the largest party in India, and its rivals remain small. But your campaigns never cost the British enough. The Viceroy comes to Simla to offer a few more seats on his council, not to discuss leaving.\n\nYou kept the movement together by never letting it do very much.",
      reflection: ["Which campaign did you end too soon? What were you afraid would happen?", ...REFLECTION_COMMON]
    },
    weak_and_divided: {
      title: "Simla, 1945: A Weak Hand",
      text: "Your campaigns broke before they could cost the British enough, and each collapse left the field open to your rivals. The League and the others have grown strong, and the Viceroy sees no need to hurry. At Simla, Congress is one voice among many.\n\nThis was the most likely outcome for any movement that tried what Congress tried.",
      reflection: ["Where did the movement get away from you? Could you have seen it coming?", ...REFLECTION_COMMON]
    }
  };

  const GLOSSARY = [
    { term: "Congress", description: "The Indian National Congress, founded in 1885; from 1920 a mass party claiming to speak for all Indians." },
    { term: "Gandhi", description: "Mohandas K. Gandhi (1869–1948), leader of Congress's mass campaigns and advocate of nonviolent resistance." },
    { term: "Jinnah", description: "Muhammad Ali Jinnah (1876–1948), a constitutionalist who left Congress in 1920 and later led the Muslim League's demand for Pakistan." },
    { term: "Ambedkar", description: "B. R. Ambedkar (1891–1956), Untouchable leader who demanded guaranteed political power for India's Dalits." },
    { term: "Iqbal", description: "Muhammad Iqbal (1873–1938), poet and philosopher who in 1930 called for a Muslim state in the northwest." },
    { term: "Muslim League", description: "The All-India Muslim League, founded in 1906; under Jinnah it demanded a separate Muslim state." },
    { term: "Hindu Mahasabha", description: "Hindu nationalist party that rejected both Gandhian nonviolence and Congress secularism." },
    { term: "RSS", description: "Rashtriya Swayamsevak Sangh, a Hindu nationalist volunteer organization founded in 1925." },
    { term: "Khilafat", description: "A Muslim campaign (1919–24) to defend the Ottoman sultan's position as caliph, allied with Congress during Non-Cooperation." },
    { term: "Poona Pact", description: "The 1932 agreement in which Ambedkar, under the pressure of Gandhi's fast, accepted reserved seats in joint electorates in place of separate electorates." },
    { term: "Chauri Chaura", description: "Town in the United Provinces where a crowd burned a police station in February 1922, killing 22 policemen. Gandhi called off Non-Cooperation in response." },
    { term: "zamindars", description: "Indian landlords who collected rent from tenant farmers and paid land revenue to the government." },
    { term: "swaraj", description: "Self-rule." },
    { term: "khadi", description: "Hand-spun, hand-woven cloth, promoted by Gandhi as a replacement for imported British textiles." },
    { term: "hartal", description: "A general shutdown of shops and work as a form of protest." },
    { term: "Pakistan", description: "The separate Muslim state demanded by the Muslim League from 1940." },
    { term: "Simla", description: "The Himalayan summer capital of the Raj, where Lord Wavell convened a conference on India's future in June 1945." }
  ].sort((a, b) => b.term.length - a.term.length);

  window.OPENING_VIGNETTE = OPENING_VIGNETTE;
  window.CAMPAIGNS = CAMPAIGNS;
  window.ENDINGS = ENDINGS;
  window.GLOSSARY = GLOSSARY;
})();
