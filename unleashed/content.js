(function () {
  // ─────────────────────────────────────────────────────────────
  //  UNLEASHED: CONGRESS AND THE MASS MOVEMENT, 1920–1942
  //  Text only. The numbers live in rules.js; campaign ids and the
  //  number of steps per campaign must match RULES.campaigns there.
  //
  //  Each step is one decision and has two or three variants; the
  //  page draws one at random per game. In a variant, `text` sets out
  //  what is proposed, `label` is the Escalate button, `held` is what
  //  the player reads if the escalation holds, and `collapse` is the
  //  incident shown if it does not (followed by the campaign's own
  //  collapse text). The first step of each campaign is the launch
  //  and cannot be declined.
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
        { variants: [
          {
            date: "September 1920",
            title: "A New Method",
            telegraph: "SPECIAL CONGRESS MEETS AT CALCUTTA — GANDHI PROPOSES NON-COOPERATION — STOP",
            text: "At a special session in Calcutta, Gandhi asks Congress to adopt non-cooperation. Tilak died a few weeks ago, and the older leaders doubt that the country will follow a campaign of lawbreaking.",
            label: "Launch Non-Cooperation",
            held: "Titles and honors are handed back across the country. C. R. Das and Motilal Nehru, two of the best-paid lawyers in India, give up their practices.",
            collapse: "The first protest meetings are broken up by police with **lathis**. In one town the crowd fights back and sets a government office on fire."
          },
          {
            date: "September 1920",
            title: "Two Wrongs",
            telegraph: "KHILAFAT COMMITTEE AND CONGRESS TO ACT TOGETHER — STOP",
            text: "The **Khilafat** leaders have already begun non-cooperation over Britain's treatment of Turkey. Gandhi wants Congress to join them and add its own grievance, the killings in the Punjab. It would be the first campaign Hindus and Muslims have fought side by side.",
            label: "Join the Khilafat campaign",
            held: "Hindus and Muslims march together. Congress leaders are invited to speak in mosques.",
            collapse: "A joint procession is stoned as it passes a place of worship. By nightfall the town is rioting, and the leaders of the alliance blame each other."
          }
        ] },
        { variants: [
          {
            date: "November 1920",
            title: "The Council Elections",
            telegraph: "CONGRESS URGES BOYCOTT OF COUNCIL ELECTIONS — STOP",
            text: "The first elections under the new reforms are weeks away. Congress can withdraw its candidates and ask voters to stay home. Empty polling stations would show that the reforms have no takers.",
            label: "Boycott the elections",
            held: "Congress candidates withdraw, and most voters stay away from the polls.",
            collapse: "Volunteers block the doors of a polling station and beat a candidate who tries to enter. The police open fire on the crowd."
          },
          {
            date: "January 1921",
            title: "The Students",
            telegraph: "STUDENTS LEAVE GOVERNMENT COLLEGES — STOP",
            text: "Gandhi asks students to walk out of government schools and colleges. Teachers warn that there is nowhere for them to go, and that boys with no classes will find other things to do.",
            label: "Call the students out",
            held: "About ninety thousand students leave. Hundreds of national schools open to take them, among them the Jamia Millia Islamia and the Kashi Vidyapith.",
            collapse: "Students surround a government college and stone the police sent to clear them. The police fire, and the students burn the building."
          },
          {
            date: "Early 1921",
            title: "The Lawyers",
            telegraph: "LEADING BARRISTERS ABANDON PRACTICE — STOP",
            text: "The courts are where the Raj looks most like justice. Gandhi asks India's lawyers to stop practicing in them. For most of them that means giving up their income.",
            label: "Ask the lawyers to leave the courts",
            held: "Hundreds of lawyers give up their practices, among them Rajendra Prasad, Vallabhbhai Patel, and C. Rajagopalachari.",
            collapse: "A crowd forces its way into a district court to stop a trial and beats the magistrate. Troops clear the building."
          }
        ] },
        { variants: [
          {
            date: "December 1920",
            title: "A Party for the Villages",
            telegraph: "NAGPUR SESSION — CONGRESS TO REORGANIZE — STOP",
            text: "At Nagpur the party can remake itself: provincial branches drawn along language lines, a fifteen-member Working Committee, and committees in every village and small town. It would no longer be a club for lawyers.",
            label: "Open Congress to the masses",
            held: "Congress now reaches down to the villages. **Jinnah**, who distrusts mass politics of any kind, walks out of the party.",
            collapse: "In Oudh, peasants enrolled by the new village committees riot on the landlords' estates and loot the bazaars."
          },
          {
            date: "Spring 1921",
            title: "Four Annas and a Crore",
            telegraph: "CONGRESS APPEALS FOR ONE CRORE RUPEES — STOP",
            text: "Congress has cut its membership fee to four annas a year so that the poor can join. Now it wants money and members on a scale it has never attempted: a fund of one **crore** rupees, raised in six months.",
            label: "Raise the fund and enroll the poor",
            held: "More than a crore of rupees comes in, and women give their jewellery. Congress membership reaches five million.",
            collapse: "Collectors for the fund threaten shopkeepers who will not give. In one bazaar the traders resist, and the quarrel becomes a riot that the police end with gunfire."
          }
        ] },
        { variants: [
          {
            date: "July 1921",
            title: "Bonfires",
            telegraph: "FOREIGN CLOTH BURNED IN BOMBAY — STOP",
            text: "Gandhi wants foreign cloth burned in public, in every city. The crowds at the bonfires are large, and they are not all Congress volunteers.",
            label: "Burn the foreign cloth",
            held: "Bonfires burn all over the country. The white homespun cap becomes the uniform of the movement.",
            collapse: "After a bonfire the crowd turns on the shops still selling foreign cloth and burns them, then fights the police who arrive."
          },
          {
            date: "Summer 1921",
            title: "The Spinning Wheel",
            telegraph: "GANDHI ASKS ALL INDIANS TO WEAR HOMESPUN — STOP",
            text: "Gandhi wants **khadi** to replace foreign cloth altogether. Coarse white homespun would make the lawyer and the peasant look alike. Many well-off families are reluctant to give up their silks.",
            label: "Make khadi the rule",
            held: "In one year the value of imported cloth falls from 102 crore rupees to 57 crore.",
            collapse: "Volunteers begin stopping people in the street and tearing foreign cloth off their backs. A fight over it becomes a riot."
          }
        ] },
        { variants: [
          {
            date: "Autumn 1921",
            title: "The Liquor Shops",
            telegraph: "PICKETS CLOSE LIQUOR SHOPS IN MADRAS PRESIDENCY — STOP",
            text: "Volunteers want to picket liquor shops. The excise tax on liquor is one of the provincial governments' main sources of revenue. Pickets and shopkeepers are already coming to blows.",
            label: "Picket the liquor shops",
            held: "In the south, one provincial government loses a fifth of its annual revenue. Non-cooperation is now costing the Raj money.",
            collapse: "Pickets and liquor sellers come to blows. The crowd burns the shop and then the excise office, and the police fire."
          },
          {
            date: "September 1921",
            title: "No Indian Should Serve",
            telegraph: "ALI BROTHERS ARRESTED FOR SEDITION — STOP",
            text: "The Khilafat Committee has resolved that no Muslim should serve in the British-Indian army, and the Ali brothers have been arrested for it. Gandhi wants the resolution repeated at hundreds of meetings. The army is what the Raj rests on.",
            label: "Repeat the resolution everywhere",
            held: "Fifty members of the Congress committee sign the same declaration, and the Working Committee issues it in its own name.",
            collapse: "In Malabar, Muslim tenants rise against their landlords and the police. The rising turns to killing, and the army puts it down under martial law."
          },
          {
            date: "Late 1921",
            title: "Tea Gardens and Town Taxes",
            telegraph: "ASSAM TEA LABOURERS STRIKE — STOP",
            text: "Non-cooperation is spreading in ways Congress did not plan. Tea-plantation laborers in Assam are on strike. Peasants in Midnapore refuse a local tax. In Chirala the whole town has moved out sooner than pay municipal taxes. You can put the party behind them.",
            label: "Back the local strikes",
            held: "The Viceroy reports to London that the lower classes in the towns have been \"seriously affected,\" and the peasantry in several provinces with them.",
            collapse: "Striking plantation laborers trying to leave for home are stopped at a railway station and cleared out by force. The railwaymen strike in protest. None of them take orders from Congress."
          }
        ] },
        { variants: [
          {
            date: "November 1921",
            title: "The Prince of Wales",
            telegraph: "PRINCE OF WALES LANDS AT BOMBAY — CONGRESS CALLS HARTAL — STOP",
            text: "The Prince of Wales has been sent to tour India and encourage loyalty. You can greet him with a **hartal**: shuttered shops and empty streets in every city he visits. Volunteers cannot police every neighborhood.",
            label: "Call a hartal against the Prince",
            held: "In most cities the Prince rides through silent streets. In Bombay the day ends in rioting and police firing that leave 53 dead. Gandhi is shaken.",
            collapse: "The rioting in Bombay does not stop. It follows the Prince from city to city, and in each one the police fire."
          },
          {
            date: "December 1921",
            title: "Fill the Jails",
            telegraph: "CONGRESS AND KHILAFAT VOLUNTEERS DECLARED ILLEGAL — STOP",
            text: "The government has banned the Congress and Khilafat volunteer corps. At Ahmedabad, Congress can answer by asking everyone, students above all, to join the volunteers and offer themselves for arrest \"quietly and without any demonstration.\"",
            label: "Fill the jails",
            held: "Every major leader except Gandhi is now behind bars, along with some thirty thousand others.",
            collapse: "A crowd gathers at a jail to free arrested volunteers. The guards fire, and the crowd storms the gate."
          }
        ] },
        { variants: [
          {
            date: "February 1922",
            title: "No Taxes",
            telegraph: "GANDHI GIVES VICEROY SEVEN DAYS — BARDOLI TO REFUSE TAXES — STOP",
            text: "Congress leaders want the last step: mass civil disobedience, beginning with a refusal to pay taxes in the district of Bardoli. Gandhi has given the Viceroy seven days to free the prisoners and the press.",
            label: "Refuse the taxes",
            held: "Bardoli refuses its taxes, and district after district follows. The government is governing on paper only.",
            collapse: "At **Chauri Chaura**, a village in the United Provinces, police fire on a procession of three thousand peasants. The crowd burns the police station, and twenty-two policemen die. \"God spoke clearly through Chauri Chaura,\" Gandhi says."
          },
          {
            date: "January 1922",
            title: "Guntur",
            telegraph: "VILLAGE OFFICERS RESIGN IN GUNTUR DISTRICT — STOP",
            text: "Congress has allowed each provincial committee to begin civil disobedience, including refusal of taxes, when it judges its people ready. In Guntur district the village officers have already resigned in a body. The Andhra committee says it is ready now.",
            label: "Let the provinces refuse taxes",
            held: "Tax collection stops across Guntur. Other provinces ask for leave to begin.",
            collapse: "Officials seize cattle and land for unpaid taxes. Villagers take them back by force, and a revenue officer is killed."
          },
          {
            date: "Early 1922",
            title: "The Tenants",
            telegraph: "TENANTS WITHHOLD DUES IN UNITED PROVINCES — STOP",
            text: "In the United Provinces, tenants are refusing the extra dues their landlords demand, and they want Congress behind them. Gandhi has told peasants not to rise against Indian landlords. If Congress backs the tenants, the **zamindars** will turn to the British.",
            label: "Back the tenants",
            held: "Rent collection fails across whole districts. The landlords appeal to the government for protection.",
            collapse: "Tenants march on a landlord's house to demand their receipts. His guards fire, and the crowd burns the estate and the police post beside it."
          }
        ] }
      ],
      callOff: {
        title: "You Suspend the Campaign",
        text: "You tell the country to stop and turn to spinning and village work. What you have built is secure, but your allies are furious. Subhas Bose calls it \"nothing short of a national calamity.\" Nehru believes Congress \"had the British at their knees.\" The Khilafat leaders, who staked their credibility on the alliance, feel betrayed."
      },
      collapse: {
        title: "The Movement Breaks Loose",
        text: "Gandhi concludes that India does not yet have the \"non-violent and truthful atmosphere which alone can justify mass civil disobedience.\" He calls off the whole campaign. The British arrest him for sedition, and most of what you built is lost."
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
        { variants: [
          {
            date: "January 1930",
            title: "Eleven Demands",
            telegraph: "GANDHI SENDS VICEROY ELEVEN DEMANDS — STOP",
            text: "Gandhi sends the Viceroy, Lord Irwin, eleven demands, among them abolition of the salt tax and protection for Indian textiles. Irwin does not answer them. Congress has put its whole organization at Gandhi's disposal.",
            label: "Launch Civil Disobedience",
            held: "Congress committees everywhere begin enrolling volunteers. The government waits to see what Gandhi will do.",
            collapse: "Police tear down the flag at an independence meeting and charge the crowd. The crowd answers with stones, and the day ends with a police post on fire."
          },
          {
            date: "January 26, 1930",
            title: "A Flag at Lahore",
            telegraph: "CONGRESS DECLARES FOR COMPLETE INDEPENDENCE — STOP",
            text: "At Lahore, Congress has raised a new flag and made complete independence its goal. The first step is a pledge, to be taken in every town on the same day: that it is \"a crime against man and God to submit any longer\" to British rule.",
            label: "Take the pledge",
            held: "The pledge is read at meetings across the country, and the day passes peacefully.",
            collapse: "A pledge meeting in a mill district turns into a strike, and the strike into a battle with the police."
          }
        ] },
        { variants: [
          {
            date: "March 1930",
            title: "The March to the Sea",
            telegraph: "GANDHI LEAVES AHMEDABAD ON FOOT FOR DANDI — STOP",
            text: "Gandhi proposes to walk 240 miles to the sea at Dandi and make salt in defiance of the government monopoly. Nehru admits that salt is \"too eccentric for his fancy.\"",
            label: "March to Dandi",
            held: "The march takes more than three weeks, and the crowds grow in every village. Even Irwin concedes that the choice has \"a unifying effect.\"",
            collapse: "The crowds along the route grow beyond the marshals' control. In one town they attack the police who have come to watch, and the march ends in a riot before it reaches the sea."
          },
          {
            date: "March 12, 1930",
            title: "Seventy-Eight Marchers",
            telegraph: "GANDHI SETS OUT WITH 78 FOLLOWERS — STOP",
            text: "Gandhi will take only seventy-eight followers from his ashram, people he trusts not to strike back. The newspapers will report every day of the walk. He hopes the village officials along the route will resign as he passes.",
            label: "March to Dandi",
            held: "Hundreds of village officials on the route resign their posts. On April 6 Gandhi reaches the sea and picks up a handful of salt.",
            collapse: "The government arrests Gandhi on the road. The crowds that had gathered to see him do not go home. They burn the nearest police post."
          }
        ] },
        { variants: [
          {
            date: "April 1930",
            title: "Salt Everywhere",
            telegraph: "SALT LAW BROKEN ALONG THE COAST — STOP",
            text: "Now the whole country can break the law Gandhi broke: make salt, sell it, buy it. You would be asking millions of people to commit a crime on the same day.",
            label: "Break the salt law nationwide",
            held: "Salt is made and sold in the open along the whole coast. Hundreds of thousands offer themselves for arrest.",
            collapse: "In Chittagong, revolutionaries who want nothing to do with nonviolence raid the government armouries. The government treats the whole movement as an armed revolt."
          },
          {
            date: "April 1930",
            title: "A March in the South",
            telegraph: "RAJAGOPALACHARI TO MARCH ON VEDARANYAM — STOP",
            text: "Gandhi's march can be repeated in every province. In Tamil Nadu, C. Rajagopalachari proposes to lead a second salt march, from Trichinopoly to the coast at Vedaranyam. Each march needs leaders who can hold a crowd.",
            label: "March in every province",
            held: "Rajagopalachari's marchers reach the sea and make salt. Marches set out in other provinces.",
            collapse: "A provincial march is stopped by police short of the coast. The marchers sit down. The crowd that came to watch does not, and a police officer is killed."
          },
          {
            date: "April 1930",
            title: "The Frontier",
            telegraph: "RED SHIRTS ORGANIZE IN FRONTIER PROVINCE — STOP",
            text: "In the North-West Frontier, Abdul Ghaffar Khan has organized the Pathans into the Khudai Khidmatgars, the Servants of God, pledged to nonviolence. The British think of the Frontier as the place least likely to stay peaceful. You can bring the campaign there.",
            label: "Carry the campaign to the Frontier",
            held: "At Peshawar, two platoons of Garhwali soldiers refuse to fire on a nonviolent crowd. Nationalism has reached the army.",
            collapse: "At Peshawar, troops fire on a crowd in the bazaar and kill scores. The city rises, and for days the government cannot enter it."
          }
        ] },
        { variants: [
          {
            date: "May 1930",
            title: "Women at the Shops",
            telegraph: "WOMEN PICKET CLOTH AND LIQUOR SHOPS — STOP",
            text: "Gandhi has been arrested. Thousands of women are ready to leave the seclusion of their homes to picket shops that sell foreign cloth and liquor. Many have never taken part in politics before.",
            label: "Send the women to picket",
            held: "Shop after shop closes. Women march beside the men in the processions, and the jails begin to fill with them.",
            collapse: "News of Gandhi's arrest reaches the mill town of Sholapur. Workers attack the police posts and the law courts, and the army declares martial law."
          },
          {
            date: "May 1930",
            title: "British Goods",
            telegraph: "BOYCOTT OF BRITISH GOODS SPREADS — STOP",
            text: "The boycott can be widened from salt to everything Britain sells in India. It would hurt the government's revenue and British firms' profits at the same time. It would also put pickets at the docks and warehouses, where tempers are short.",
            label: "Boycott British goods",
            held: "British imports fall, and the government's income falls with them.",
            collapse: "Pickets at the docks stop carts carrying British goods. The carters fight back, the dockworkers join in, and the police fire."
          },
          {
            date: "Summer 1930",
            title: "The Flag",
            telegraph: "NATIONAL FLAG RAISED ON PUBLIC BUILDINGS — STOP",
            text: "Everywhere people are trying to raise the national flag. The police have begun beating men simply for wearing khadi or a Gandhi cap. Each flag is a small fight over who governs the street.",
            label: "Raise the flag everywhere",
            held: "Flags go up faster than the police can pull them down. Small children walk the roads dressed in its colors.",
            collapse: "Police shoot a boy climbing a flagpole. The crowd kills two constables and burns their station."
          }
        ] },
        { variants: [
          {
            date: "May 1930",
            title: "Dharasana",
            telegraph: "VOLUNTEERS TO RAID DHARASANA SALT WORKS — STOP",
            text: "With Gandhi in prison, Sarojini Naidu proposes to lead volunteers against the government salt works at Dharasana. The police will be waiting with lathis. The plan depends on the volunteers not raising a hand.",
            label: "March on the salt works",
            held: "Row after row walks forward and is beaten down. No one strikes back. Two men die and 320 are wounded.",
            collapse: "The third rank breaks. Volunteers seize the lathis and fight the police hand to hand."
          },
          {
            date: "May 1930",
            title: "The Reporter",
            telegraph: "AMERICAN CORRESPONDENT ARRIVES AT DHARASANA — STOP",
            text: "An American reporter, Webb Miller, has come to watch the raid on the Dharasana salt works. If the volunteers hold their discipline, the world will read about it. If they do not, the world will read about that.",
            label: "March on the salt works",
            held: "\"Not one of the marchers raised an arm to fend off the blows,\" Miller cables. Newsreels carry the scene to cinemas around the world.",
            collapse: "The volunteers hold. The crowd watching them does not. It attacks the police from behind, and Miller's story is about a riot."
          }
        ] },
        { variants: [
          {
            date: "Summer 1930",
            title: "The Forests",
            telegraph: "FOREST LAWS DEFIED IN MAHARASHTRA — STOP",
            text: "Inland there is no salt to make. In Maharashtra, Karnataka, and the Central Provinces, villagers want to defy the forest laws that stop them gathering firewood. These are not Congress volunteers, and nobody has trained them.",
            label: "Defy the forest laws",
            held: "Villagers go into the reserved forests by the thousand. The forest guards can only watch.",
            collapse: "Villagers set the reserved forest on fire and drive off the guards. The police who come to arrest them are met with axes."
          },
          {
            date: "Summer 1930",
            title: "The Village Watchmen",
            telegraph: "VILLAGES REFUSE CHAUKIDARI TAX — STOP",
            text: "In eastern India, villagers pay a tax for the *chaukidars*, the village watchmen, who often act as the government's spies. They want to stop paying it. The government will come to seize their property.",
            label: "Refuse the watchmen's tax",
            held: "Village after village stops paying, and the government has to collect by force.",
            collapse: "Police come to seize cattle for the unpaid tax. The village beats them back and kills the watchman who pointed out the houses."
          }
        ] },
        { variants: [
          {
            date: "Late 1930",
            title: "Land Revenue",
            telegraph: "PEASANTS WITHHOLD LAND REVENUE — STOP",
            text: "Crop prices have collapsed, and peasants cannot pay what they owe the government. They are asking Congress to back a strike against land revenue. The government's answer will be to confiscate their land.",
            label: "Back the revenue strike",
            held: "Peasants in many provinces refuse to pay and watch their land confiscated. The government is short of money.",
            collapse: "Officials confiscate the land of peasants who will not pay. The peasants harvest it anyway, at night, and ambush the police sent to stop them."
          },
          {
            date: "Late 1930",
            title: "No Rent",
            telegraph: "NO-RENT CAMPAIGN IN UNITED PROVINCES — STOP",
            text: "In the United Provinces, Congress can ask landlords to stop paying revenue and tenants to stop paying rent. The tenants are eager. The **zamindars** are not, and a rent strike sets Indian against Indian.",
            label: "Launch the no-rent campaign",
            held: "The peasants stop paying rent. Most zamindars stay loyal to the British and go on paying their revenue.",
            collapse: "A landlord's agents evict tenants who have stopped paying. The tenants kill the agents and burn the estate records."
          }
        ] },
        { variants: [
          {
            date: "January 1932",
            title: "After London",
            telegraph: "GANDHI RETURNS FROM LONDON EMPTY-HANDED — STOP",
            text: "Gandhi has come back from the Round Table Conference in London with nothing. The peasants of the Gangetic Plain are no longer waiting for Congress to lead. You can resume the campaign and try to stay at its head.",
            label: "Resume civil disobedience",
            held: "The movement's center shifts from Gandhi's ashram to the villages, and the campaign carries on.",
            collapse: "With every leader in prison, the villages act alone. Crowds attack police posts across the Gangetic Plain."
          },
          {
            date: "1932",
            title: "Outlawed",
            telegraph: "CONGRESS DECLARED ILLEGAL — PRESS CENSORED — STOP",
            text: "The government has declared Congress illegal, gagged the nationalist press, and jailed ninety thousand people. You can order the party to carry on anyway, under local leaders nobody has heard of.",
            label: "Carry on as an outlawed party",
            held: "New leaders step forward as fast as the old ones are arrested.",
            collapse: "The unknown men who now run the local committees decide that nonviolence has failed. Bombs go off in three cities."
          }
        ] }
      ],
      callOff: {
        title: "A Pact with the Viceroy",
        text: "You settle. The government releases its nonviolent prisoners and lets villagers make salt for their own use, and Gandhi agrees to go to London to negotiate. (In March 1931 this was the Gandhi-Irwin Pact.)\n\nNot one of the major demands has been met. The younger men on the left of the party oppose the pact, and Congress leaders coming out of prison ask what the campaign achieved."
      },
      collapse: {
        title: "Treated as a Rebellion",
        text: "The government now treats the campaign as a rebellion and sets out to crush it. Congress offices and funds are seized, the press is gagged, and leaders and volunteers are jailed by the tens of thousands. Most of what you built is lost."
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
        { variants: [
          {
            date: "August 8, 1942",
            title: "Do or Die",
            telegraph: "CONGRESS AT BOMBAY DEMANDS BRITISH WITHDRAWAL — STOP",
            text: "At Bombay the Congress committee is about to vote on a resolution demanding that Britain leave India at once. \"We shall either free India or die in the attempt,\" Gandhi says. The government has its arrest lists ready.",
            label: "Pass the Quit India resolution",
            held: "Before dawn the police arrest Gandhi and every major Congress leader. The movement begins without them.",
            collapse: "The arrests come before dawn, and by noon Bombay is rioting. With nobody to give orders, crowds burn police posts and the police answer with rifles."
          },
          {
            date: "August 8, 1942",
            title: "A Mantra",
            telegraph: "GANDHI TELLS CONGRESS: DO OR DIE — STOP",
            text: "Cripps has come and gone with nothing Congress could accept. Gandhi wants to give the country a mantra: \"Do or Die.\" The government will arrest you all within hours, and the campaign will have to run itself.",
            label: "Give the country the mantra",
            held: "The leaders are taken to unknown destinations and Congress is declared illegal. Protest breaks out everywhere at once.",
            collapse: "The country learns of the arrests and explodes. Within days crowds are attacking police stations and post offices in every province, and the army is called out."
          }
        ] },
        { variants: [
          {
            date: "August 1942",
            title: "The Cities",
            telegraph: "HARTALS IN BOMBAY, AHMEDABAD, DELHI — STOP",
            text: "With the leaders gone, the second rank must decide alone. They can call the cities out: hartals, strikes, and students in the streets. Nobody is left to tell a crowd when to go home.",
            label: "Call out the cities",
            held: "Factories, schools, and colleges close across the country. The demonstrations are lathi-charged and fired upon, and they keep coming.",
            collapse: "Police fire on a procession of students. The rest of the city comes out in answer, and for three days it fights the police in the streets."
          },
          {
            date: "August 1942",
            title: "Bombay's Mills",
            telegraph: "BOMBAY MILL HANDS STRIKE — STOP",
            text: "The rising has begun in Bombay, where the factory workers have struck. They are not Congress volunteers and have taken no pledge of nonviolence. You can call on the workers of every mill town to follow them.",
            label: "Call out the mills",
            held: "Mills close in city after city and stand idle for weeks.",
            collapse: "Striking workers attack the police in the mill districts. Troops move in with machine guns."
          },
          {
            date: "August 1942",
            title: "Students to the Villages",
            telegraph: "STUDENTS LEAVE BENARES AND PATNA FOR THE VILLAGES — STOP",
            text: "Students are leaving Benares and Patna for the countryside, carrying the news of the arrests to villages where peasant leagues are already organized. Nobody knows what the villages will do with it.",
            label: "Send the students to the villages",
            held: "The rising moves out of the cities. Bihar and the eastern United Provinces are now its center.",
            collapse: "The students reach the villages, and the villages march on the nearest police station. By the end of the week dozens have burned."
          }
        ] },
        { variants: [
          {
            date: "August 1942",
            title: "Underground",
            telegraph: "ILLEGAL CONGRESS RADIO HEARD IN BOMBAY — STOP",
            text: "The organizers still at large want to go underground: secret committees, couriers, and an illegal radio station that moves from house to house. Underground work is hard to keep nonviolent, because no one can see who is doing it.",
            label: "Go underground",
            held: "An illegal radio station broadcasts the news the censors have cut. Organizers who slipped the arrests direct the movement from hiding.",
            collapse: "Out of sight, the underground splits. One group begins making bombs."
          },
          {
            date: "Autumn 1942",
            title: "The Socialists",
            telegraph: "SOCIALIST LEADERS AT LARGE — STOP",
            text: "The Congress socialists never treated nonviolence as more than a tactic. With Gandhi in prison, men like Jayaprakash Narayan are ready to direct the rising from hiding. They will not take instruction from a jail cell.",
            label: "Let the socialists lead",
            held: "Narayan sets up a \"provisional government\" on the Nepal border.",
            collapse: "The underground begins raiding for arms. A police party is ambushed and killed, and the government calls it a Congress army."
          }
        ] },
        { variants: [
          {
            date: "August 1942",
            title: "The Lines",
            telegraph: "RAIL AND TELEGRAPH LINES CUT IN BIHAR — STOP",
            text: "Crowds are attacking railway stations and post offices. The underground can direct them at the rail and telegraph lines that supply the army facing Japan. This is sabotage in wartime, and the British will treat it that way.",
            label: "Cut the rail and telegraph lines",
            held: "Hundreds of railway stations are destroyed and miles of track torn up. It is the gravest threat to British rule since 1857.",
            collapse: "A troop train is derailed and soldiers die. The army is given a free hand in the district."
          },
          {
            date: "August 1942",
            title: "Poles and All",
            telegraph: "TELEGRAPH DOWN ACROSS BIHAR — STOP",
            text: "Villagers are pulling down the telegraph lines, poles and all, and in places they are using elephants to do it. The lines carry the orders that move the army. You can tell the villages to finish the job.",
            label: "Bring down the telegraph",
            held: "In Bihar some 170 police stations, post offices, and government buildings are destroyed, and the province is cut off from the rest of the country.",
            collapse: "Cut off from help, the police in one station fire into the crowd surrounding them. The crowd kills them all."
          }
        ] },
        { variants: [
          {
            date: "August 1942",
            title: "Ballia",
            telegraph: "REBELS HOLD BALLIA — DISTRICT OFFICERS EXPELLED — STOP",
            text: "At Ballia, in the eastern United Provinces, the rebels have driven out the officials altogether. They can declare a government of their own. The army will come for it.",
            label: "Set up a parallel government",
            held: "A national government rules Ballia until the army arrives.",
            collapse: "The rebels open the jail and seize the armoury. When the army arrives they try to fight it, and the town is taken by force."
          },
          {
            date: "Late 1942",
            title: "Tamluk",
            telegraph: "NATIONAL GOVERNMENT PROCLAIMED IN MIDNAPORE — STOP",
            text: "At Tamluk, in the Midnapore district of Bengal, the rebels propose a national government of their own, with courts and relief work. It would have to survive in the open, in a district the army can reach.",
            label: "Set up a parallel government",
            held: "The Tamluk government holds. It will last until 1944.",
            collapse: "The Tamluk rebels march on the police station and the courts. The police fire on the procession, and what follows is a battle."
          },
          {
            date: "1943",
            title: "Satara",
            telegraph: "VILLAGES IN SATARA IGNORE DISTRICT OFFICERS — STOP",
            text: "In the Satara district of Maharashtra, villagers have stopped obeying the officials and started obeying a committee of their own. They want to call it a government. It will need its own police, and its police will need to deal with informers.",
            label: "Set up a parallel government",
            held: "The Satara government takes root in the villages. The British will not dislodge it until the war is over.",
            collapse: "The Satara rebels begin punishing informers and moneylenders. The beatings become killings, and the government sends troops."
          }
        ] },
        { variants: [
          {
            date: "February 1943",
            title: "The Fast",
            telegraph: "GANDHI BEGINS TWENTY-ONE DAY FAST IN DETENTION — STOP",
            text: "The Viceroy demands that Gandhi condemn the violence done in his name. Gandhi can refuse, blame the government for arresting the leaders, and begin a fast in detention. If he dies there, no one can say what the country will do.",
            label: "Refuse to condemn the rising",
            held: "Gandhi survives twenty-one days without food. Three Indian members of the Viceroy's council resign in protest, and the government's standing falls further.",
            collapse: "The news that Gandhi is fasting in detention brings the crowds back into the streets, angrier than before. The troops are waiting."
          },
          {
            date: "Early 1943",
            title: "Teeth and Nails",
            telegraph: "VICEROY HOLDS CONGRESS RESPONSIBLE FOR DISORDERS — STOP",
            text: "The Viceroy blames Congress for every burned station and demands that Gandhi disown the rising. Gandhi once said that a woman attacked by a soldier should fight back with teeth and nails, and that violence is better than cowardice. He can refuse to condemn it.",
            label: "Refuse to condemn the rising",
            held: "Gandhi refuses and blames the government, which arrested the leaders before they could direct anything.",
            collapse: "Taking Gandhi's silence as permission, the last rebel bands turn to assassination. The government publishes each killing as proof of what Congress intended."
          }
        ] }
      ],
      callOff: {
        title: "Congress Stands Down",
        text: "Word goes out through the underground that the rising should stop. The leaders stay in prison, but the pressure you built stands. The socialists who ran the underground say Congress has lost its nerve at the one moment Britain could not afford a rebellion."
      },
      collapse: {
        title: "The Rising Is Crushed",
        text: "Britain sends some fifty battalions against the rising. Crowds are machine-gunned and even bombed from the air, and rebellious villages are fined and flogged. More than ten thousand people are killed. Within weeks the rising is over.\n\nIt has still cost Britain more prestige than any campaign before it, so more of your momentum survives than in earlier collapses. The Congress leaders will stay in prison until 1945."
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
    { term: "lathis", description: "Long bamboo staffs carried by Indian police." },
    { term: "crore", description: "Ten million." },
    { term: "hartal", description: "A general shutdown of shops and work as a form of protest." },
    { term: "Pakistan", description: "The separate Muslim state demanded by the Muslim League from 1940." },
    { term: "Simla", description: "The Himalayan summer capital of the Raj, where Lord Wavell convened a conference on India's future in June 1945." }
  ].sort((a, b) => b.term.length - a.term.length);

  window.OPENING_VIGNETTE = OPENING_VIGNETTE;
  window.CAMPAIGNS = CAMPAIGNS;
  window.ENDINGS = ENDINGS;
  window.GLOSSARY = GLOSSARY;
})();
