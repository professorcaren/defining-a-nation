(function () {
  const OPENING_VIGNETTE = {
    pages: [
      {
        title: "Calcutta, July 1905",
        text: "You are **Surendranath Banerjee**, and the rumor has hardened into fact.\n\nLord Curzon will partition Bengal. Seventy-eight million people split along a line drawn in a London office — Muslim east, Hindu west — to break the largest, most politically dangerous province in the Empire.\n\nYou have spent thirty years building a career on petitions, deputations, and reasoned argument. You were the second Indian to pass the Civil Service exam and the first dismissed from it.\n\nNow every alliance you have built is about to be tested. The moderates want strategy. The radicals want fire. The merchants want stability. The students want revolution. The Muslim leaders want guarantees. And the British want silence.\n\nYou have until December 1908. Hold them all together — or watch your world come apart.",
        button: "Continue"
      },
      {
        title: "The Web",
        text: "Your coalition is not a list of allies. It is a **web of ties** — fifteen fragile threads connecting six factions that often despise each other.\n\nModerates and radicals. Students and merchants. Muslims and Hindus. Nationalists and the British. Each tie is built on years of negotiation, shared interest, or grudging tolerance.\n\nEvery crisis strains specific ties. Every turn, you can tend **one relationship** — strengthen it, mend it, shore it up. But while you tend one thread, the others fray from neglect.\n\nIf any single tie snaps to zero, the web collapses and you lose.\n\nThe ties matter more than the factions. Every choice has a cost. There is no safe move — only less dangerous ones.",
        button: "Let me show you"
      }
    ]
  };

  const NODE_DEFINITIONS = [
    { id: "moderates", label: "Congress Moderates", shortLabel: "Moderates", color: "#d4a843" },
    { id: "radicals", label: "Radical Nationalists", shortLabel: "Radicals", color: "#c0392b" },
    { id: "students", label: "Students", shortLabel: "Students", color: "#e87d2f" },
    { id: "muslims", label: "Muslim Leaders", shortLabel: "Muslims", color: "#2d8a5e" },
    { id: "merchants", label: "Merchants", shortLabel: "Merchants", color: "#8b5e3c" },
    { id: "british", label: "British Officials", shortLabel: "British", color: "#4a6fa5" }
  ];

  const TIE_DEFINITIONS = [
    { id: "moderates-radicals", nodeA: "moderates", nodeB: "radicals", label: "Congress Unity", description: "The fragile alliance between petition-writers and street fighters", initial: 55 },
    { id: "moderates-students", nodeA: "moderates", nodeB: "students", label: "Generational Bridge", description: "Moderate leaders' connection to campus activism", initial: 70 },
    { id: "moderates-muslims", nodeA: "moderates", nodeB: "muslims", label: "Secular Alliance", description: "Cross-communal political cooperation within Congress", initial: 45 },
    { id: "moderates-merchants", nodeA: "moderates", nodeB: "merchants", label: "Elite Consensus", description: "Shared interests of political and commercial elites", initial: 75 },
    { id: "moderates-british", nodeA: "moderates", nodeB: "british", label: "Constitutional Channel", description: "The belief that petitions and deputations matter", initial: 70 },
    { id: "radicals-students", nodeA: "radicals", nodeB: "students", label: "Revolutionary Pipeline", description: "Students drawn to radical thought and direct action", initial: 55 },
    { id: "radicals-muslims", nodeA: "radicals", nodeB: "muslims", label: "Anti-Colonial Solidarity", description: "Shared opposition to British rule across communal lines", initial: 40 },
    { id: "radicals-merchants", nodeA: "radicals", nodeB: "merchants", label: "Economic Nationalism", description: "Merchants funding the radical swadeshi vision", initial: 50 },
    { id: "radicals-british", nodeA: "radicals", nodeB: "british", label: "Antagonistic Respect", description: "The grudging engagement between radicals and officials", initial: 40 },
    { id: "students-muslims", nodeA: "students", nodeB: "muslims", label: "Campus Coexistence", description: "Hindu and Muslim students sharing classrooms and causes", initial: 60 },
    { id: "students-merchants", nodeA: "students", nodeB: "merchants", label: "Class Bridge", description: "Merchants' sons in colleges, students buying swadeshi goods", initial: 55 },
    { id: "students-british", nodeA: "students", nodeB: "british", label: "Educational Dependency", description: "Students need British institutions; British need educated subjects", initial: 70 },
    { id: "muslims-merchants", nodeA: "muslims", nodeB: "merchants", label: "Commercial Trust", description: "Trade relationships across communal lines in the bazaars", initial: 75 },
    { id: "muslims-british", nodeA: "muslims", nodeB: "british", label: "Loyalist Compact", description: "The understanding between Muslim leaders and the Raj", initial: 70 },
    { id: "merchants-british", nodeA: "merchants", nodeB: "british", label: "Trade Stability", description: "The commercial relationship underpinning imperial rule", initial: 80 }
  ];

  const TUTORIAL_EVENT = {
    title: "A Test of Alliances",
    date: "August 1905",
    narration: "Rumors from Simla: the Partition plan is advancing. Your petition to the Viceroy was returned with a polite note and no concessions.",
    telegraph: "RUMOURS FROM SIMLA — PARTITION PLANS ADVANCING — STOP",
    strains: [
      { tie: "moderates-british", amount: 8, reason: "Officials dismiss your petition" }
    ],
    actions: [
      {
        label: "Draft a Joint Petition",
        description: "Unite moderates and radicals behind a shared demand",
        primary: { tie: "moderates-radicals", amount: 16 },
        side: { tie: "moderates-british", amount: -4 }
      },
      {
        label: "Reassure the Viceroy",
        description: "Send a measured letter emphasizing constitutional loyalty",
        primary: { tie: "moderates-british", amount: 14 },
        side: null
      },
      {
        label: "Rally the Students",
        description: "Speak at Presidency College to channel youthful anger",
        primary: { tie: "moderates-students", amount: 18 },
        side: { tie: "moderates-merchants", amount: -3 }
      }
    ]
  };

  const EVENT_CARDS = [
    {
      id: "partition_announced",
      date: "October 1905",
      title: "Partition Announced",
      narration: "The *Gazette of India* publishes the proclamation. Bengal is severed — Muslim east, Hindu west. The moderates want a petition; the radicals want bonfires.",
      telegraph: "URGENT — GAZETTE OF INDIA — BENGAL DIVIDED — STOP",
      learnMore: "The *Gazette of India* publishes the proclamation. Bengal is severed: Muslim-majority east under Dacca, Hindu-majority west under Calcutta. Curzon calls it administrative necessity. You have read the confidential dispatches — this is about diluting Bengali Hindu political power. The moderates want a formal petition. The radicals want bonfires. Both are watching you.\n\nThe Partition of Bengal was announced on July 19, 1905 and took effect on October 16, 1905. Curzon framed it as administrative reform, but internal British documents reveal the intent to weaken Bengali Hindu political influence. The day of Partition was observed as a day of mourning across Bengal.",
      strains: [
        { tie: "moderates-british", amount: 10, reason: "The Partition proves petitions were ignored" },
        { tie: "moderates-radicals", amount: 11, reason: "Radicals see moderation as failure" }
      ],
      actions: [
        {
          label: "Publish Joint Condemnation",
          description: "Co-author an editorial with radical leaders denouncing the Partition in The Bengalee",
          primary: { tie: "moderates-radicals", amount: 18 },
          side: { tie: "moderates-british", amount: -6 }
        },
        {
          label: "Send Formal Deputation",
          description: "Lead a delegation of merchants and moderates to the Lieutenant Governor",
          primary: { tie: "moderates-merchants", amount: 14 },
          side: null
        },
        {
          label: "Address the Students",
          description: "Speak at College Square to channel anger into organized boycott",
          primary: { tie: "moderates-students", amount: 16 },
          side: { tie: "moderates-muslims", amount: -4 }
        }
      ]
    },
    {
      id: "raksha_bandhan",
      date: "October 1905",
      title: "Raksha Bandhan Unity March",
      narration: "Tens of thousands march through Calcutta tying *rakhis* across communal lines. But Muslim leaders see Hindu symbolism wrapped around a political demand.",
      telegraph: "CALCUTTA MARCHES — RAKHIS ACROSS COMMUNAL LINES — STOP",
      learnMore: "Tagore calls for a day of mourning. Tens of thousands march through Calcutta tying rakhis across communal lines, singing *Amar Sonar Bangla*. The unity is electric — even the police hesitate. But Muslim leaders in the east see Hindu symbolism wrapped around a political demand. The British blame radical organizers. You march at the front, torn between exhilaration and anxiety.\n\nTagore organized the Raksha Bandhan observance on October 16, 1905, the day the Partition took effect. The ceremony of tying rakhis across Hindu-Muslim lines was a powerful symbol of unity, though some Muslim leaders viewed it as imposing Hindu ritual frameworks on a political movement.",
      strains: [
        { tie: "students-muslims", amount: 9, reason: "Hindu-coded symbolism strains campus coexistence" },
        { tie: "radicals-british", amount: 10, reason: "Officials blame radical organizers for the march" }
      ],
      actions: [
        {
          label: "Host Interfaith Dialogue",
          description: "Organize a meeting with Muslim leaders to address concerns about Hindu symbolism",
          primary: { tie: "students-muslims", amount: 17 },
          side: { tie: "radicals-students", amount: -4 }
        },
        {
          label: "Amplify the March",
          description: "Publish Tagore's speeches in The Bengalee to sustain momentum",
          primary: { tie: "moderates-radicals", amount: 13 },
          side: null
        },
        {
          label: "Reassure Muslim Merchants",
          description: "Visit bazaar leaders to separate the economic boycott from Hindu ritual",
          primary: { tie: "muslims-merchants", amount: 16 },
          side: { tie: "radicals-british", amount: -3 }
        }
      ]
    },
    {
      id: "carlyle_circular",
      date: "November 1905",
      title: "The Carlyle Circular",
      narration: "The government strikes: any student at political meetings loses their scholarship. Expelled students become full-time agitators overnight.",
      telegraph: "CARLYLE CIRCULAR ISSUED — STUDENT SCHOLARSHIPS REVOKED — STOP",
      learnMore: "The government strikes: any student at political meetings loses their scholarship. Schools harboring activists lose their grants. The effect is electric — and opposite to intended. Expelled students become full-time agitators. The Anti-Circular Society forms overnight. Campuses become boycott command centers. The British have manufactured an army of volunteers and severed the trust between students and every institution that educated them.\n\nThe Carlyle Circular of 1905 threatened to withdraw grants and scholarships from schools whose students participated in political activities. Rather than suppressing student activism, it created the Anti-Circular Society and pushed students into full-time political organizing.",
      strains: [
        { tie: "students-british", amount: 13, reason: "The education system has betrayed its students" },
        { tie: "moderates-students", amount: 9, reason: "Moderates failed to prevent the Circular" }
      ],
      actions: [
        {
          label: "Challenge the Circular",
          description: "File a formal legal challenge and petition the Viceroy to withdraw it",
          primary: { tie: "moderates-students", amount: 18 },
          side: { tie: "moderates-british", amount: -5 }
        },
        {
          label: "Fund Alternative Schools",
          description: "Ask merchant donors to support the National Education Movement",
          primary: { tie: "students-merchants", amount: 14 },
          side: null
        },
        {
          label: "Shelter Student Leaders",
          description: "Use radical networks to protect expelled students from prosecution",
          primary: { tie: "radicals-students", amount: 17 },
          side: { tie: "radicals-british", amount: -6 }
        }
      ]
    },
    {
      id: "swadeshi_bonfires",
      date: "December 1905",
      title: "Swadeshi Bonfires",
      narration: "Bonfires of British cloth blaze across Bengal. The symbolism is powerful; the economics are brutal. Merchants watch their inventory burn.",
      telegraph: "BRITISH CLOTH BURNING IN COLLEGE SQUARE — BOYCOTT SPREADS — STOP",
      learnMore: "The boycott finds its ritual: bonfires of British cloth. In College Square and bazaars across Bengal, crowds feed Manchester textiles to the flames. The symbolism is powerful; the economics are brutal. Merchants watch their inventory burn. Student picketers enforce the boycott at market gates with more enthusiasm than restraint. The British warn that trade disruption will not be tolerated.\n\nSwadeshi bonfires of British cloth became a central ritual of the boycott movement. While symbolically powerful, they created real economic hardship for merchants who had invested in British goods. The tension between symbolic politics and economic reality was a persistent challenge.",
      strains: [
        { tie: "students-merchants", amount: 11, reason: "Student picketers damage merchant livelihoods" },
        { tie: "merchants-british", amount: 9, reason: "Trade disruption strains the commercial relationship" }
      ],
      actions: [
        {
          label: "Mediate Boycott Terms",
          description: "Negotiate a phased transition so merchants can sell existing stock before the boycott hardens",
          primary: { tie: "students-merchants", amount: 16 },
          side: { tie: "radicals-merchants", amount: -4 }
        },
        {
          label: "Promote Swadeshi Mills",
          description: "Redirect energy from burning cloth to buying Indian-made goods",
          primary: { tie: "radicals-merchants", amount: 14 },
          side: null
        },
        {
          label: "Lead the Bonfire",
          description: "Stand with the students at College Square to show moderate solidarity",
          primary: { tie: "moderates-students", amount: 18 },
          side: { tie: "merchants-british", amount: -5 }
        }
      ]
    },
    {
      id: "barisal_crackdown",
      date: "April 1906",
      title: "Barisal Conference Crackdown",
      narration: "You organize a constitutional conference at Barisal. Magistrate Emerson sends in the police. Your conference is answered with a policeman's stick.",
      telegraph: "BARISAL CONFERENCE CHARGED — BANERJEE ARRESTED — STOP",
      learnMore: "You organize a Provincial Conference at Barisal to prove the movement can be disciplined and constitutional. Then Magistrate Emerson sends in the police. Lathis fall on singing delegates. You are arrested, manhandled, fined. Your constitutional conference has been answered with a policeman's stick. The merchants who funded it are reconsidering every rupee.\n\nThe Barisal Conference of April 1906 was violently dispersed by police under Magistrate Emerson. Banerjee himself was arrested and fined. The crackdown deeply embarrassed moderate leaders who had argued that working within the system could produce results.",
      strains: [
        { tie: "moderates-british", amount: 12, reason: "Your constitutional conference met with police batons" },
        { tie: "moderates-merchants", amount: 8, reason: "Merchants question whether your conferences produce anything but trouble" }
      ],
      actions: [
        {
          label: "Publicize the Brutality",
          description: "Print eyewitness accounts and rally radicals around the shared outrage",
          primary: { tie: "moderates-radicals", amount: 18 },
          side: { tie: "moderates-british", amount: -7 }
        },
        {
          label: "File Legal Complaint",
          description: "Use the courts to challenge Emerson's actions and restore constitutional credibility",
          primary: { tie: "moderates-british", amount: 13 },
          side: null
        },
        {
          label: "Reassure the Funders",
          description: "Meet privately with merchant backers to present the crackdown as proof of the movement's significance",
          primary: { tie: "moderates-merchants", amount: 16 },
          side: { tie: "moderates-students", amount: -3 }
        }
      ]
    },
    {
      id: "muslim_league_founded",
      date: "December 1906",
      title: "Muslim League Founded",
      narration: "At Dacca, delegates found the All-India Muslim League. Your Hindu colleagues demand you denounce it — but you know Nawab Salimullah. The League is now an organized counterweight to Congress.",
      telegraph: "MUSLIM LEAGUE FOUNDED AT DACCA — NEW POLITICAL FORCE — STOP",
      learnMore: "At Ahsan Manzil in Dacca, delegates found the All-India Muslim League. Speeches praise the Partition as a triumph for Muslim representation. Loyalist addresses thank the Raj. Your Hindu colleagues demand you denounce it. But you know Nawab Salimullah — you have shared tea and discussed education policy. The League is not your enemy, but it is now an organized counterweight to Congress.\n\nThe All-India Muslim League was founded on December 30, 1906 at Dacca. While it initially focused on protecting Muslim interests within the colonial framework, its formation marked a new phase of organized communal politics that would reshape Indian nationalism permanently.",
      strains: [
        { tie: "radicals-muslims", amount: 11, reason: "Radicals denounce the League as a British puppet" },
        { tie: "moderates-muslims", amount: 9, reason: "Muslim leaders formalize their separate political path" }
      ],
      actions: [
        {
          label: "Attend the Inauguration",
          description: "Go to Dacca in person to signal respect and keep communication open",
          primary: { tie: "moderates-muslims", amount: 18 },
          side: { tie: "radicals-muslims", amount: -5 }
        },
        {
          label: "Quiet Back-Channel Talks",
          description: "Write privately to Salimullah proposing areas of cooperation between Congress and League",
          primary: { tie: "muslims-british", amount: 13 },
          side: null
        },
        {
          label: "Rally Congress Unity",
          description: "Use the League's founding to argue that Congress must present a united front",
          primary: { tie: "moderates-radicals", amount: 16 },
          side: { tie: "moderates-muslims", amount: -4 }
        }
      ]
    },
    {
      id: "anti_circular_expulsions",
      date: "January 1907",
      title: "Anti-Circular Society Expulsions",
      narration: "Dozens expelled, scholarships revoked, futures dissolved. The expelled students don't go home — they build a parallel education network overnight.",
      telegraph: "MASS EXPULSIONS ENFORCED — STUDENTS BUILD OWN SCHOOLS — STOP",
      learnMore: "The government makes good on its threats. Dozens expelled, scholarships revoked, futures dissolved. The expelled students do not go home — they build a parallel education network with volunteer teachers and makeshift classrooms. Some drift toward Aurobindo's inner circle. The moderates are horrified but cannot condemn young people punished for singing patriotic songs.\n\nThe enforcement of the Carlyle Circular led to mass expulsions and the creation of the National Education Movement, which established alternative schools outside government control. This radicalized a generation of students.",
      strains: [
        { tie: "students-british", amount: 11, reason: "More expulsions deepen the betrayal" },
        { tie: "moderates-students", amount: 10, reason: "Students see moderates as powerless to help" }
      ],
      actions: [
        {
          label: "Endorse National Education",
          description: "Publicly support the alternative schools and lend your credibility to the effort",
          primary: { tie: "moderates-students", amount: 17 },
          side: { tie: "students-british", amount: -5 }
        },
        {
          label: "Negotiate Readmission",
          description: "Use your remaining contacts with British educators to get expelled students reinstated",
          primary: { tie: "students-british", amount: 14 },
          side: null
        },
        {
          label: "Connect Students to Radicals",
          description: "Channel expelled students into Aurobindo's network where they can continue organizing",
          primary: { tie: "radicals-students", amount: 19 },
          side: { tie: "moderates-students", amount: -6 }
        }
      ]
    },
    {
      id: "boycott_picket_violence",
      date: "March 1907",
      title: "Boycott Picket Violence",
      narration: "Picket lines turn ugly. A shop burns in Mymensingh. Student picketers beat a Muslim trader in Comilla. The boycott is becoming coercive.",
      telegraph: "PICKET VIOLENCE IN MYMENSINGH AND COMILLA — SHOPS BURN — STOP",
      learnMore: "The picket lines turn ugly. In Mymensingh, a merchant's shop burns for selling British cloth. In Comilla, student picketers beat a Muslim trader. The merchants signed on to a voluntary boycott, not mob enforcement. The radicals who encouraged 'direct action' are losing the trust of the people who fund the swadeshi mills. The boycott is the movement's most powerful weapon — but it is becoming coercive.\n\nAs the swadeshi boycott intensified, incidents of picket violence and coercion against merchants — particularly Muslim traders — increased. This created tensions between the economic and moral dimensions of the movement.",
      strains: [
        { tie: "students-merchants", amount: 12, reason: "Student picketers intimidate and damage merchant businesses" },
        { tie: "radicals-merchants", amount: 10, reason: "Radical boycott tactics threaten merchant livelihoods" }
      ],
      actions: [
        {
          label: "Enforce Nonviolent Discipline",
          description: "Tour picket lines with student leaders to impose rules of conduct",
          primary: { tie: "students-merchants", amount: 17 },
          side: { tie: "radicals-students", amount: -4 }
        },
        {
          label: "Compensate Affected Traders",
          description: "Organize a merchant fund to reimburse those who lost goods to boycott enforcement",
          primary: { tie: "radicals-merchants", amount: 14 },
          side: null
        },
        {
          label: "Meet Muslim Traders",
          description: "Visit affected Muslim shopkeepers in Comilla to rebuild trust across communal lines",
          primary: { tie: "muslims-merchants", amount: 16 },
          side: { tie: "students-merchants", amount: -3 }
        }
      ]
    },
    {
      id: "press_censorship",
      date: "May 1907",
      title: "Press Censorship Threats",
      narration: "The government warns that 'seditious' newspapers will be shut down. The radicals dare them to act — and pressure you to run their editorials.",
      telegraph: "PRESS CENSORSHIP THREATENED — SEDITION CHARGES LOOM — STOP",
      learnMore: "The government warns that 'seditious' newspapers will be shut down. The threat targets Aurobindo's *Bande Mataram* and Upadhyay's *Sandhya*, but your own *Bengalee* is under scrutiny. The radicals dare the government to act and pressure you to run their editorials. Publishing radical material could destroy your access to the British. Refusing makes you a coward in radical eyes.\n\nPress censorship was a recurring tool of colonial control. The Newspapers (Incitement to Offences) Act of 1908 eventually gave the government sweeping powers to seize printing presses. The threat forced nationalist editors into constant calculations about risk.",
      strains: [
        { tie: "radicals-british", amount: 11, reason: "Censorship proves British tyranny to the radicals" },
        { tie: "moderates-british", amount: 8, reason: "Even moderate papers face scrutiny" }
      ],
      actions: [
        {
          label: "Publish Radical Editorials",
          description: "Run Aurobindo's pieces in The Bengalee, daring the government to shut you down",
          primary: { tie: "moderates-radicals", amount: 19 },
          side: { tie: "moderates-british", amount: -8 }
        },
        {
          label: "Defend Press Freedom",
          description: "Write a measured legal argument for press liberty addressed to the Viceroy",
          primary: { tie: "moderates-british", amount: 13 },
          side: null
        },
        {
          label: "Fund Underground Presses",
          description: "Quietly channel merchant money to keep radical papers publishing from hidden locations",
          primary: { tie: "radicals-merchants", amount: 16 },
          side: { tie: "merchants-british", amount: -5 }
        }
      ]
    },
    {
      id: "surat_split",
      date: "December 1907",
      title: "Surat Congress Split",
      narration: "Congress meets at Surat and breaks apart. Chairs are hurled. A shoe flies through the air. The session dissolves in chaos.",
      telegraph: "CONGRESS SPLITS AT SURAT — CHAIRS THROWN — SESSION DISSOLVED — STOP",
      learnMore: "Congress meets at Surat and breaks apart. Tilak's supporters hurl chairs. Moderates are shouted down. A shoe flies through the air. The session dissolves in chaos. You leave the pandal shaken. The Congress Unity tie — the central thread of your political career — has never been more frayed. With Congress fractured, the radicals lose access to merchant networks that funded the movement.\n\nThe Surat Split of December 1907 formally divided Congress into Moderate and Extremist factions. The immediate cause was a dispute over the presidency, but deeper disagreements about methods made the split inevitable.",
      strains: [
        { tie: "moderates-radicals", amount: 14, reason: "The formal Congress split — chairs thrown, unity shattered" },
        { tie: "radicals-merchants", amount: 9, reason: "Without Congress, radicals lose access to merchant networks" }
      ],
      actions: [
        {
          label: "Propose Reconciliation Terms",
          description: "Draft a compromise platform that gives radicals a voice without ceding moderate control",
          primary: { tie: "moderates-radicals", amount: 18 },
          side: { tie: "moderates-merchants", amount: -5 }
        },
        {
          label: "Steady the Merchants",
          description: "Assure commercial backers that the moderate wing remains disciplined and credible",
          primary: { tie: "moderates-merchants", amount: 14 },
          side: null
        },
        {
          label: "Bridge Through Students",
          description: "Use student organizations that still respect both factions to keep informal channels open",
          primary: { tie: "radicals-students", amount: 16 },
          side: { tie: "moderates-students", amount: -4 }
        }
      ]
    },
    {
      id: "muzaffarpur_bombing",
      date: "April 1908",
      title: "Muzaffarpur Bombing",
      narration: "A bomb at Muzaffarpur misses its target and kills two British women. The British now see every nationalist as a potential bomber.",
      telegraph: "BOMB AT MUZAFFARPUR — TWO BRITISH WOMEN KILLED — STOP",
      learnMore: "A bomb at Muzaffarpur misses Magistrate Kingsford and kills two British women — Mrs. and Miss Kennedy, who had nothing to do with the movement. The news detonates across India. London demands justice. You publish an immediate condemnation. But the damage is done: the British now see every nationalist as a potential bomber. Your ability to defend the radicals as patriots, not terrorists, has been destroyed.\n\nKhudiram Bose and Prafulla Chaki threw a bomb at what they believed was Magistrate Kingsford's carriage on April 30, 1908. The victims were actually Mrs. and Miss Kennedy. The bombing triggered massive police raids and the Alipore Conspiracy Case.",
      strains: [
        { tie: "radicals-british", amount: 14, reason: "The bombing destroys any remaining trust" },
        { tie: "moderates-radicals", amount: 10, reason: "Impossible to defend radicals after civilian deaths" }
      ],
      actions: [
        {
          label: "Condemn and Distinguish",
          description: "Publish a forceful condemnation of violence while defending legitimate nationalist demands",
          primary: { tie: "moderates-british", amount: 16 },
          side: { tie: "moderates-radicals", amount: -6 }
        },
        {
          label: "Protect the Students",
          description: "Work to shield student organizations from the coming police crackdown",
          primary: { tie: "moderates-students", amount: 14 },
          side: null
        },
        {
          label: "Meet Radical Leaders",
          description: "Visit radical contacts privately to demand they renounce bombing and preserve the alliance",
          primary: { tie: "moderates-radicals", amount: 17 },
          side: { tie: "moderates-british", amount: -7 }
        }
      ]
    },
    {
      id: "alipore_trial",
      date: "May 1908",
      title: "Alipore Conspiracy Trial",
      narration: "Police raids sweep Calcutta. Aurobindo is in the dock. Student organizations are raided alongside revolutionary cells.",
      telegraph: "ALIPORE RAIDS — AUROBINDO IN DOCK — STUDENTS SWEPT UP — STOP",
      learnMore: "Police raids sweep Calcutta. Dozens arrested, explosives discovered, revolutionary literature seized. Aurobindo himself is in the dock. Students pack the galleries, but the raids do not discriminate — student organizations are raided alongside revolutionary cells. The British, rattled by the bombing, treat every student meeting as a potential conspiracy. You watch from a careful distance, knowing the CID notes every courthouse visit.\n\nThe Alipore Conspiracy Case (1908-1909) was one of the most significant political trials in colonial India. Aurobindo Ghose was eventually acquitted, largely through C.R. Das's defense. The trial paradoxically increased public sympathy for the accused.",
      strains: [
        { tie: "radicals-students", amount: 10, reason: "Association with radicals now brings police raids on students" },
        { tie: "students-british", amount: 10, reason: "British treat every student organization as a conspiracy" }
      ],
      actions: [
        {
          label: "Fund the Defense",
          description: "Raise money from merchant contacts to pay for C.R. Das's legal team",
          primary: { tie: "radicals-merchants", amount: 16 },
          side: { tie: "merchants-british", amount: -5 }
        },
        {
          label: "Petition for Fair Trial",
          description: "Write to the Governor demanding due process and separation of political from criminal charges",
          primary: { tie: "students-british", amount: 13 },
          side: null
        },
        {
          label: "Rally Student Support",
          description: "Organize a campus solidarity campaign for the accused to keep students engaged",
          primary: { tie: "radicals-students", amount: 18 },
          side: { tie: "students-british", amount: -6 }
        }
      ]
    },
    {
      id: "tilak_arrested",
      date: "June 1908",
      title: "Tilak Arrested",
      narration: "Tilak is sentenced to six years at Mandalay for sedition. Bombay's mill workers walk out in India's first political general strike.",
      telegraph: "TILAK SENTENCED SIX YEARS MANDALAY — BOMBAY STRIKES — STOP",
      learnMore: "Tilak is convicted of sedition for articles in *Kesari* and sentenced to six years at Mandalay. Bombay's mill workers walk out in India's first political general strike. In Calcutta, radicals call for hartals. Merchants are terrified — strikes mean closed shops, lost revenue, disrupted supply chains. Tilak's imprisonment has made him a martyr, and martyrs are harder to argue with than living politicians.\n\nTilak was sentenced to six years in Mandalay prison in July 1908. His conviction triggered a six-day general strike in Bombay — the first political mass strike in Indian history.",
      strains: [
        { tie: "radicals-merchants", amount: 11, reason: "Strikes in Tilak's name threaten merchant businesses" },
        { tie: "radicals-british", amount: 10, reason: "Tilak's imprisonment cements radical-British hostility" }
      ],
      actions: [
        {
          label: "Channel the Outrage",
          description: "Organize a controlled hartal in Calcutta to honor Tilak without spiraling into disorder",
          primary: { tie: "moderates-radicals", amount: 17 },
          side: { tie: "moderates-merchants", amount: -5 }
        },
        {
          label: "Shield the Markets",
          description: "Work with merchant leaders to keep bazaars open while allowing symbolic protests",
          primary: { tie: "radicals-merchants", amount: 14 },
          side: null
        },
        {
          label: "Student Memorial March",
          description: "Let students lead a disciplined procession honoring Tilak as a political prisoner",
          primary: { tie: "radicals-students", amount: 16 },
          side: { tie: "students-british", amount: -4 }
        }
      ]
    },
    {
      id: "rural_unrest",
      date: "July 1908",
      title: "Rural Unrest Spreads",
      narration: "Peasant unrest spreads in eastern Bengal. Tenants refuse rents to Hindu *zamindars*, framing economic grievance in communal language.",
      telegraph: "RED PAMPHLET CIRCULATES EAST — RURAL TENSION RISING — STOP",
      learnMore: "The movement has jumped the city walls. In eastern Bengal, peasant unrest spreads. Tenants refuse to pay rents to Hindu zamindars, framing economic grievance in communal language. The *Red Pamphlet* circulates, urging Muslims to boycott Hindu traders. Swadeshi organizers venturing into the countryside are met with stones. The bazaar relationships that survived centuries of political change are cracking.\n\nBy 1907-1908, rural unrest in eastern Bengal took on communal dimensions, with Muslim peasants clashing with Hindu landlords. The 'Red Pamphlet' (Lal Ishtahar) urged Muslims to resist Hindu economic dominance.",
      strains: [
        { tie: "muslims-merchants", amount: 11, reason: "Communal framing turns economic relationships toxic" },
        { tie: "moderates-muslims", amount: 9, reason: "Rural communal tension undermines political dialogue" }
      ],
      actions: [
        {
          label: "Joint Rural Tour",
          description: "Travel to eastern districts with Muslim leaders to address tenant grievances together",
          primary: { tie: "moderates-muslims", amount: 18 },
          side: { tie: "moderates-british", amount: -4 }
        },
        {
          label: "Bazaar Peace Council",
          description: "Convene Hindu and Muslim merchants to reaffirm commercial trust across communal lines",
          primary: { tie: "muslims-merchants", amount: 14 },
          side: null
        },
        {
          label: "Address Zamindar Abuses",
          description: "Publicly call for rent reform to undercut the communal framing of economic grievances",
          primary: { tie: "radicals-muslims", amount: 16 },
          side: { tie: "moderates-merchants", amount: -5 }
        }
      ]
    },
    {
      id: "mill_workers_strike",
      date: "August 1908",
      title: "Mill Workers Strike",
      narration: "Jute mill workers walk out waving *swadeshi* banners — but their demands are economic, not nationalist. The movement has outgrown the boycott.",
      telegraph: "HOWRAH JUTE MILLS STRIKE — WORKERS WAVE SWADESHI FLAGS — STOP",
      learnMore: "Jute mill workers in Howrah walk out demanding better wages. They wave swadeshi banners but their demands are economic, not nationalist. Students rush to support them. Merchants — many of whom own the mills — are appalled. They funded a boycott of British goods, not a revolution against Indian capital. The movement has grown beyond boycotts into class conflict, and your web was never built to handle that.\n\nLabor unrest in Calcutta's jute mills became increasingly tied to the nationalist movement in 1908. The convergence of labor and nationalist politics created tensions within the movement, particularly between working-class supporters and merchant-class funders.",
      strains: [
        { tie: "students-merchants", amount: 12, reason: "Students support strikers against merchant-owned mills" },
        { tie: "moderates-merchants", amount: 9, reason: "Merchants blame moderates for failing to control the movement" }
      ],
      actions: [
        {
          label: "Mediate the Dispute",
          description: "Broker a compromise between mill owners and workers to defuse the crisis",
          primary: { tie: "students-merchants", amount: 17 },
          side: { tie: "radicals-students", amount: -4 }
        },
        {
          label: "Back the Mill Owners",
          description: "Publicly separate the nationalist movement from labor agitation to reassure funders",
          primary: { tie: "moderates-merchants", amount: 14 },
          side: null
        },
        {
          label: "Embrace Worker Solidarity",
          description: "Declare workers' rights a nationalist cause and march with students to the mills",
          primary: { tie: "radicals-students", amount: 18 },
          side: { tie: "moderates-merchants", amount: -7 }
        }
      ]
    },
    {
      id: "morley_minto_rumors",
      date: "September 1908",
      title: "Morley-Minto Reforms Rumored",
      narration: "Rumors from London: constitutional reforms with expanded Indian representation — but with **separate electorates** for Muslims.",
      telegraph: "LONDON DRAFTS REFORMS — SEPARATE ELECTORATES PROPOSED — STOP",
      learnMore: "Rumors from London: Morley and Minto are drafting constitutional reforms with expanded Indian representation — but with **separate electorates** for Muslims. The radicals call it a trap to co-opt moderates and divide communities. You are caught again. The reforms could validate your lifetime of constitutional argument, but separate electorates would institutionalize the communal divide forever.\n\nThe Morley-Minto Reforms of 1909 expanded Indian representation in legislative councils but introduced separate electorates for Muslims — a provision that would shape Indian politics until Partition in 1947.",
      strains: [
        { tie: "moderates-radicals", amount: 10, reason: "Radicals see reform engagement as collaboration" },
        { tie: "radicals-muslims", amount: 9, reason: "Separate electorates become a wedge between communities" }
      ],
      actions: [
        {
          label: "Engage the Reforms",
          description: "Write to Morley supporting expanded representation while opposing separate electorates",
          primary: { tie: "moderates-british", amount: 16 },
          side: { tie: "moderates-radicals", amount: -6 }
        },
        {
          label: "Consult Muslim Leaders",
          description: "Meet with League representatives to find common ground on representation",
          primary: { tie: "radicals-muslims", amount: 14 },
          side: null
        },
        {
          label: "Reject the Reforms",
          description: "Stand with radicals in publicly denouncing the reforms as a divide-and-rule scheme",
          primary: { tie: "moderates-radicals", amount: 18 },
          side: { tie: "moderates-british", amount: -7 }
        }
      ]
    },
    {
      id: "jamalpur_riots",
      date: "October 1908",
      title: "Communal Riots in Jamalpur",
      narration: "Hindu-Muslim riots erupt in Jamalpur and Comilla. Temples and mosques are damaged. The *rakhis* of 1905 feel like ancient history.",
      telegraph: "COMMUNAL RIOTS JAMALPUR AND COMILLA — POLICE FIRE ON CROWDS — STOP",
      learnMore: "The communal fracture explodes. In Jamalpur and Comilla, Hindu-Muslim riots erupt. Swadeshi volunteers clash with Muslim tenants. Temples and mosques are damaged. Police fire into crowds. The rakhis and marches of 1905 feel like ancient history. On campus, each community retreats into its own circles. The Partition line on the map has become a line in people's hearts.\n\nCommunal riots in eastern Bengal in 1907-1908 shattered the Hindu-Muslim unity that characterized the early swadeshi movement. The violence was partly driven by economic tensions between Hindu landlords and Muslim tenants.",
      strains: [
        { tie: "students-muslims", amount: 12, reason: "Communal riots destroy campus coexistence" },
        { tie: "muslims-merchants", amount: 9, reason: "Bazaar relationships collapse amid communal violence" }
      ],
      actions: [
        {
          label: "Emergency Peace Committee",
          description: "Form a joint Hindu-Muslim committee with campus leaders to restore dialogue",
          primary: { tie: "students-muslims", amount: 18 },
          side: { tie: "radicals-muslims", amount: -4 }
        },
        {
          label: "Protect Bazaar Relations",
          description: "Station trusted intermediaries in the markets to prevent commercial retaliation",
          primary: { tie: "muslims-merchants", amount: 13 },
          side: null
        },
        {
          label: "Demand British Accountability",
          description: "Blame the government for failing to protect civilians and demand an inquiry",
          primary: { tie: "muslims-british", amount: 16 },
          side: { tie: "merchants-british", amount: -5 }
        }
      ]
    },
    {
      id: "london_petition_rejected",
      date: "November 1908",
      title: "London Petition Rejected",
      narration: "Your deputation returns from London empty-handed. Months of careful drafting — received, acknowledged, filed. The radicals' question rings in your ears: *What was the point?*",
      telegraph: "LONDON PETITION RECEIVED AND FILED — NO ACTION TAKEN — STOP",
      learnMore: "Your deputation returns from London empty-handed. Months of careful drafting, pages of constitutional argument, signatures from across Bengal — received, acknowledged, filed. The Secretary of State expressed 'sympathy.' This is the moment you have dreaded for thirty years: the system you believed in has demonstrated its final inadequacy. The moderates ask *What now?* The radicals do not bother to say *we told you so.*\n\nMultiple petitions and deputations to London were politely received and effectively ignored throughout the Partition crisis. The failure of constitutional methods to produce results was a central argument used by radicals to discredit moderate leadership.",
      strains: [
        { tie: "moderates-british", amount: 13, reason: "London's rejection proves the constitutional channel is dead" },
        { tie: "moderates-merchants", amount: 10, reason: "Merchants lose faith in the moderate strategy they funded" }
      ],
      actions: [
        {
          label: "Pivot to Mass Action",
          description: "Acknowledge the failure publicly and endorse broader protest methods alongside the radicals",
          primary: { tie: "moderates-radicals", amount: 19 },
          side: { tie: "moderates-british", amount: -8 }
        },
        {
          label: "Double Down on Reform",
          description: "Argue that the petition laid groundwork for the Morley-Minto process and keep the channel open",
          primary: { tie: "moderates-british", amount: 12 },
          side: null
        },
        {
          label: "Rally Merchant Support",
          description: "Present the rejection as proof that economic pressure, not petitions, is the path forward",
          primary: { tie: "moderates-merchants", amount: 17 },
          side: { tie: "moderates-british", amount: -5 }
        }
      ]
    }
  ];

  const DEFEAT_NARRATIONS = {
    "moderates-radicals": {
      title: "Congress Unity Shattered",
      narration: "The tie that held Congress together has snapped. Moderates and radicals no longer speak the same political language, let alone share a platform. The split, which history will call inevitable, has happened on your watch.\n\nThe radicals form their own organizations. The moderates retreat into committee rooms. And the British, watching from their clubs, congratulate themselves: a united opposition was their only real threat. That threat is gone.\n\nYou stand between two movements that were once one, and neither claims you.",
      reflection: ["The Surat Split of 1907 was a defining moment in Indian nationalism. How did the tension between constitutional and direct-action methods make this split inevitable?", "When movements fracture, who benefits? Consider the British response to the Congress split.", "How does the moderate-radical divide appear in other social movements you've studied?"]
    },
    "moderates-students": {
      title: "The Generational Bridge Collapses",
      narration: "The students no longer come to your speeches. The generational bridge — your ability to channel youthful energy into constitutional protest — has collapsed. The young have concluded that your generation has nothing to teach them.\n\nSome drift toward the radicals. Others simply disengage, retreating into careers and private life. The foot soldiers of the movement have deserted, and no amount of eloquence can call them back.\n\nA movement without young people is a movement without a future.",
      reflection: ["What happens to political movements when they lose the next generation? Consider how generational divides map onto strategic disagreements.", "The Carlyle Circular targeted students specifically. How did institutional responses to student activism reshape the movement?", "How do older leaders maintain credibility with younger activists in other historical contexts?"]
    },
    "moderates-muslims": {
      title: "The Secular Alliance Breaks",
      narration: "The Muslim leaders have stopped responding to your letters. The secular alliance — your attempt to build a political movement that transcended communal identity — has failed. The Muslim League offers what you could not: a politics built on community rather than abstract principle.\n\nThe rakhis of 1905 were a beautiful gesture. But gestures cannot substitute for sustained engagement, shared power, and genuine attention to Muslim concerns. You offered brotherhood; they needed representation.\n\nThe communal divide that the Partition opened has become permanent.",
      reflection: ["The Hindu-Muslim unity of 1905 collapsed within three years. What structural factors — beyond personal choices — made this unity fragile?", "How did the failure of secular nationalism in this period foreshadow the larger Partition of 1947?", "What would genuine power-sharing between Hindu and Muslim leaders have required?"]
    },
    "moderates-merchants": {
      title: "The Elite Consensus Dissolves",
      narration: "The letter from the Bengali Chamber of Commerce is polite and devastating: financial support for Congress activities is suspended. The merchants have not turned against the cause — they have turned against the chaos.\n\nWithout merchant funding, your newspaper struggles. Without merchant networks, the movement loses its organizational infrastructure. Without merchant respectability, your claims to represent Bengal's interests ring hollow.\n\nYou kept the streets active but lost the people who paid for the ink.",
      reflection: ["Economic elites fund political movements but also constrain them. How did this tension shape the swadeshi movement?", "What happens when the funding base of a political movement withdraws? Consider parallels in other contexts.", "Could the merchant withdrawal have been prevented? What would it have required?"]
    },
    "moderates-british": {
      title: "The Constitutional Channel Closes",
      narration: "The Viceroy's secretary sends a curt note: future petitions from the Bengal Provincial Conference will be 'acknowledged but not referred.' The district magistrates have been instructed to deal with 'established local authorities' rather than 'self-appointed political spokesmen.'\n\nThe door is closed. Not with a dramatic gesture, but with bureaucratic indifference. Your petitions will be filed. Your deputations will be received. But nothing will come of them.\n\nYou spent thirty years building this channel. The British have decided it no longer serves their purposes.\n\nThe radicals' question rings in your ears: *What was the point?*",
      reflection: ["Banerjee's entire strategy depended on the British willingness to engage. What happens when the interlocutor stops listening?", "How did colonial power operate through performed legitimacy? What does it mean when the performance ends?", "How does this dynamic appear in other contexts where movements depend on their opponent's willingness to negotiate?"]
    },
    "radicals-students": {
      title: "The Revolutionary Pipeline Breaks",
      narration: "The students have pulled back from the radical underground. The Alipore raids, the police surveillance, the threat of expulsion and imprisonment — the cost of association has become too high.\n\nWithout students, the radicals lose their foot soldiers, their recruitment pipeline, their connection to the next generation. The secret societies shrink to a handful of ideologues meeting in smaller and smaller rooms.\n\nThe revolution will have to wait for another generation to carry it forward.",
      reflection: ["Why were students so important to the radical movement? What did they provide that other supporters could not?", "How did state repression reshape the relationship between radical leaders and their younger followers?", "Consider how risk and consequence affect participation in political movements."]
    },
    "radicals-muslims": {
      title: "Anti-Colonial Solidarity Collapses",
      narration: "The radicals and the Muslim leaders have reached an impasse. The radicals' Hindu symbolism — *Bande Mataram*, the goddess imagery, the Vedantic rhetoric — has made their movement feel less like anti-colonialism and more like Hindu revivalism.\n\nThe Muslim leaders, already drawn toward the League, see no place for themselves in the radical vision. The shared anti-British sentiment that might have united them has been overwhelmed by communal distrust.\n\nThe anti-colonial front is now two fronts, each facing the British alone.",
      reflection: ["How did the cultural content of radical nationalism — its symbols, language, and imagery — affect its ability to build cross-communal solidarity?", "Was anti-colonial solidarity across communal lines possible in this period? What would it have required?", "How do the symbolic choices of political movements include or exclude potential allies?"]
    },
    "radicals-merchants": {
      title: "Economic Nationalism Bankrupted",
      narration: "The merchants have cut off the radicals. The boycott violence, the strikes, the disruption of trade — the radicals' methods have become intolerable to the very people who once funded swadeshi as an act of patriotism.\n\nWithout merchant funding, the radical press struggles to publish. Without merchant support, swadeshi mills close. The movement's most potent economic weapon has been blunted by the people who were supposed to wield it.\n\nThe radicals still have their ideology. But ideology without infrastructure is just words.",
      reflection: ["How did the tension between radical methods and merchant interests undermine the swadeshi movement?", "Consider the relationship between economic disruption and political support. When does disruption help a movement, and when does it alienate supporters?", "How do movements balance symbolic action with the practical needs of their funders?"]
    },
    "radicals-british": {
      title: "Antagonistic Respect Destroyed",
      narration: "The British have ceased to distinguish between radical politicians and revolutionary terrorists. The grudging engagement — the surveillance that acknowledged the radicals' political significance — has been replaced by simple repression.\n\nPresses are seized. Leaders are imprisoned. The CID no longer monitors radical meetings; it simply prevents them. The political space for radical nationalism has been closed by force.\n\nThe radicals' predictions have come true: the British were never willing to share power. But being right is cold comfort in a prison cell.",
      reflection: ["The relationship between radicals and the British was always antagonistic, but it served a function. What was lost when it collapsed entirely?", "How did the Muzaffarpur bombing change the nature of British repression? Was the shift inevitable?", "Consider how states respond when they stop distinguishing between political opposition and criminal conspiracy."]
    },
    "students-muslims": {
      title: "Campus Coexistence Destroyed",
      narration: "The Hindu and Muslim students no longer share the same causes, the same meeting halls, the same vision of Bengal's future. The campuses that were laboratories of unity in 1905 have become sites of communal suspicion.\n\nMuslim students form their own organizations. Hindu students close ranks. The shared classroom remains, but the shared politics is gone.\n\nA generation that might have grown up together in struggle will instead grow up divided. The consequences will echo for decades.",
      reflection: ["How did communal violence reshape student politics? Consider the long-term effects of losing cross-communal solidarity at the campus level.", "The campuses were among the first spaces where Hindu-Muslim unity was tested and failed. Why were educational institutions both promising and fragile sites for cross-communal politics?", "How does this pattern of communal division in educational spaces appear in other historical contexts?"]
    },
    "students-merchants": {
      title: "The Class Bridge Breaks",
      narration: "The merchants have concluded that the students are not patriots but agitators — threats to property, order, and the commercial stability that makes everything else possible. The students, in turn, see the merchants as cowards who care more about profits than freedom.\n\nThe class bridge — merchants' sons in colleges, students buying swadeshi goods, the shared investment in Bengal's future — has collapsed under the weight of picket violence and strike support.\n\nThe movement has split along class lines. The funding and the energy now flow in separate channels.",
      reflection: ["How did class tensions within the nationalist movement undermine its unity?", "The students and merchants needed each other — funding and energy, respectively. What happens when movements lose this complementarity?", "How do class divisions manifest within political movements that claim to represent 'the nation'?"]
    },
    "students-british": {
      title: "Educational Dependency Severed",
      narration: "The students have abandoned British institutions entirely. The National Education Movement has become not an alternative but a replacement. British degrees, British scholarships, British approval — none of it matters anymore.\n\nThe British, in turn, have written off the student population as irrecoverably radicalized. The educational system that was supposed to produce loyal subjects has produced revolutionaries instead.\n\nThe tie was always transactional — knowledge for loyalty — and both sides have concluded the transaction is no longer worth making.",
      reflection: ["Colonial education was designed to create a class of intermediaries loyal to British rule. How did this strategy backfire during the Partition crisis?", "What does it mean for a colonial state when the educated class rejects the education system? Consider the National Education Movement as both a political and cultural statement.", "How do educational institutions serve as sites of both cooperation and resistance in colonial contexts?"]
    },
    "muslims-merchants": {
      title: "Commercial Trust Shattered",
      narration: "The bazaar relationships that survived centuries of political change have finally cracked. Muslim traders and Hindu merchants eye each other with suspicion. Credit lines are withdrawn. Partnerships dissolve. The commercial trust that transcended political and communal boundaries has been destroyed by the Partition's toxic logic.\n\nWithout commercial trust, the economic life of Bengal fragments along communal lines. The material basis for Hindu-Muslim cooperation — the daily transactions of trade — is gone.\n\nPoliticians can be reconciled. Markets are harder to rebuild.",
      reflection: ["Commercial relationships between Hindu and Muslim traders were among the most durable cross-communal ties. What destroyed them?", "How does economic interdependence relate to political tolerance? When economic ties break, what follows?", "Consider how the 'everyday' relationships of commerce served as infrastructure for political cooperation."]
    },
    "muslims-british": {
      title: "The Loyalist Compact Breaks",
      narration: "The Muslim leaders have concluded that British promises are as hollow for them as they are for everyone else. The Partition was supposed to create a Muslim-majority province with genuine political weight. Instead, it created a territory governed by the same British officials with the same indifference to local concerns.\n\nThe loyalist compact — Muslim cooperation in exchange for British patronage — has been exposed as a bad bargain. And without it, the Muslim leaders must find new alliances, new strategies, new sources of power.\n\nThe British have lost their most reliable allies in eastern Bengal.",
      reflection: ["The loyalist compact between Muslim leaders and the British was based on mutual interest. What made it collapse?", "How did British failures to deliver on promises to Muslim leaders reshape communal politics?", "Consider how 'loyalty' functions in colonial politics. What do loyal subjects expect in return, and what happens when expectations are unmet?"]
    },
    "merchants-british": {
      title: "Trade Stability Collapses",
      narration: "The commercial relationship that underpinned imperial rule in Bengal has broken down. Merchants can no longer rely on British courts to enforce contracts, British police to protect property, or British policy to maintain the conditions for trade.\n\nThe British, in turn, have concluded that Bengali merchants are unreliable — tainted by nationalist sympathy, unwilling to cooperate with boycott enforcement, and no longer useful as intermediaries.\n\nThe economic foundation of the Raj in Bengal has cracked. Without trade stability, the imperial justification for rule — efficient governance, commercial prosperity — rings hollow.",
      reflection: ["How did the collapse of commercial trust between merchants and the British undermine the legitimacy of colonial rule?", "The British justified their rule partly through economic management. What happens when that justification fails?", "Consider how economic relationships between colonizer and colonized served as both instruments of control and points of vulnerability."]
    }
  };

  const VICTORY_NARRATION = {
    title: "The Web Holds — December 1908",
    narration: "The year closes with Bengal still uneasy. Protests have not vanished. The Partition line still stands. But so does your web.\n\nEvery tie is frayed. Some are barely holding. But none has snapped.\n\nThe moderates still talk to the radicals, if only to argue. The students still attend your speeches, if only to heckle. The merchants still fund the movement, if only to hedge their bets. The Muslim leaders still return your letters, if only out of courtesy. And the British still receive your petitions, if only to file them.\n\nNone of this feels like victory. It feels like survival. Like holding fifteen threads taut while a storm tries to snap each one.\n\nBut survival, in this crisis, is the achievement. You have kept together a web of relationships that every force in Indian politics is trying to tear apart. The Partition will be annulled in 1911 — though you cannot know that yet. What you know is that the relationships endure, and that endurance is its own kind of power.\n\nHistory will remember the Bengal Partition crisis as a turning point: the moment Indian nationalism became a mass movement, the moment constitutional and radical methods competed for the soul of the freedom struggle, the moment Hindu-Muslim politics took the form that would shape the subcontinent's future.\n\nYou were the spider at the center of the web. And the web held.",
    reflection: [
      "You survived — but look at your web. Which ties were strongest and weakest at the end? What does this tell you about the structural pressures on Banerjee's coalition?",
      "The historical Partition was annulled in 1911. Based on your experience holding these ties together, why might maintaining the Partition have become politically impossible?",
      "Consider the ties you tended most often. What does your strategy reveal about which relationships you considered most important — and which you were willing to let fray?",
      "Banerjee's method was network maintenance — holding everyone together through personal relationships, institutional loyalty, and constant negotiation. What are the strengths and limits of this approach to politics?"
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

  window.OPENING_VIGNETTE = OPENING_VIGNETTE;
  window.NODE_DEFINITIONS = NODE_DEFINITIONS;
  window.TIE_DEFINITIONS = TIE_DEFINITIONS;
  window.TUTORIAL_EVENT = TUTORIAL_EVENT;
  window.EVENT_CARDS = EVENT_CARDS;
  window.DEFEAT_NARRATIONS = DEFEAT_NARRATIONS;
  window.VICTORY_NARRATION = VICTORY_NARRATION;
  window.GLOSSARY = GLOSSARY;
})();
