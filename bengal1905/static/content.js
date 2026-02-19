(function () {
  const OPENING_VIGNETTE = {
    pages: [
      {
        title: "Calcutta, July 1905",
        text: "You are **Surendranath Banerjee**, and the rumor has finally hardened into fact.\n\nThe telegram from your contacts in the Viceroy's office arrived this morning, hand-delivered by a student courier who bicycled through the monsoon rain: Lord Curzon will partition Bengal. The announcement comes in October. Seventy-eight million people split along a line drawn in a London office.\n\nYou set the telegram on your desk beside this morning's edition of *The Bengalee* — your newspaper, your voice — and stare at the rain streaking the window of your College Square office.\n\nYou have spent thirty years building a political career on constitutional methods. Petitions. Deputations. Reasoned argument in the language the British understand. You were the second Indian to pass the Indian Civil Service examination — and the first to be dismissed from it, for the crime of being too capable.\n\nThat dismissal taught you something: the system will bend, but only if you push from inside.",
        button: "Continue"
      },
      {
        title: "The Web",
        text: "The problem is not the Partition itself. The problem is what it will do to the **relationships** that hold your world together.\n\nYour coalition is not a list of allies. It is a **web of ties** — fragile threads connecting groups that often despise each other. The moderates and the radicals. The students and the merchants. The Muslims and the Hindus. The nationalists and the British.\n\nEach tie is a relationship built on years of negotiation, shared interest, or grudging tolerance. And each tie is about to be tested.\n\n**Congress Moderates** and **Radical Nationalists** — united only by opposition to the Partition. The radicals think your petitions are a waste of ink. You think their bombs are a waste of lives. But as long as you share a platform, the British must take the movement seriously.\n\n**Students** and **Merchants** — the foot soldiers and the funders. Students want revolution; merchants want stability. But merchants' sons fill the colleges, and students buy swadeshi cloth. The tie holds — for now.\n\n**Muslim Leaders** and everyone else — the Partition offers Muslims a province of their own. Can you keep them in the coalition when the British are offering them something better?",
        button: "Continue"
      },
      {
        title: "The Fifteen Threads",
        text: "You count the relationships in your head. Six groups, each connected to five others. **Fifteen ties** in all — fifteen threads holding the web together.\n\nSome are strong: the **Constitutional Channel** between moderates and the British, built on decades of petitions and receptions. The **Elite Consensus** between moderates and merchants, sealed in drawing rooms and editorial offices.\n\nSome are fragile: the **Anti-Colonial Solidarity** between radicals and Muslims, strained by competing visions of the future. The **Campus Coexistence** between Hindu and Muslim students, tested every time communal rhetoric heats up.\n\nAnd some are actively antagonistic: the **Antagonistic Respect** between radicals and the British — each side needing the other as a foil, despising the other as an obstacle.\n\nEvery tie matters. Every tie can break. And when a tie breaks, it is not just two groups that separate — it is the **entire web** that weakens.\n\nYou are the spider at the center of this web. Your job is to keep it intact.",
        button: "Continue"
      },
      {
        title: "The Impossible Arithmetic",
        text: "Here is the truth that keeps you awake at night: **you can only tend one relationship at a time.**\n\nEvery meeting with the British is ammunition for the radicals. Every gesture toward the Muslims risks alienating the Hindu nationalists. Every hour spent reassuring the merchants is an hour the students drift toward Aurobindo's secret societies.\n\nAnd every crisis — every arrest, every riot, every bomb — strains specific ties. Not factions. **Ties.** The Carlyle Circular doesn't just hurt the students — it strains the tie between students and the British, and the tie between students and the moderates who failed to protect them.\n\nYou cannot tend every thread. You can only choose which ones to strengthen, and pray that the others hold.\n\nThe Partition will arrive in October. Between now and 1908, you will face eighteen crises drawn from history. Each one will strain your web.\n\nThe question is not whether some threads will fray.\n\nThe question is whether any will snap.",
        button: "Continue"
      },
      {
        title: "How to Play",
        text: "You will see a **network diagram** showing the fifteen ties between six factions. Each tie starts at 60 out of 100.\n\n**Every turn:**\n- A historical **event** appears, straining 2-3 specific ties\n- You **click one tie to tend** — to mend, to negotiate, to shore up\n- The tended tie strengthens (+15-20 points)\n- Ties **adjacent** to the one you tended get a small boost (+1)\n- All **remaining ties** passively decay from neglect (-1-2)\n\n**You lose** if any tie drops to zero — that relationship snaps, and your web collapses.\n\n**You win** if you survive all eighteen events with every tie intact.\n\nClick directly on the **lines in the diagram** or use the **buttons below** to tend a tie. Thicker lines are stronger ties. Red pulsing lines are in crisis.\n\nYour final score is the sum of all fifteen tie values. Can you hold the web together?\n\n*Every event in this game is drawn from real history. The relationships Banerjee navigated — between moderates and radicals, Hindus and Muslims, nationalists and the Raj — defined the trajectory of Indian nationalism.*",
        button: "Begin Game"
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
    { id: "moderates-radicals", nodeA: "moderates", nodeB: "radicals", label: "Congress Unity", description: "The fragile alliance between petition-writers and street fighters" },
    { id: "moderates-students", nodeA: "moderates", nodeB: "students", label: "Generational Bridge", description: "Moderate leaders' connection to campus activism" },
    { id: "moderates-muslims", nodeA: "moderates", nodeB: "muslims", label: "Secular Alliance", description: "Cross-communal political cooperation within Congress" },
    { id: "moderates-merchants", nodeA: "moderates", nodeB: "merchants", label: "Elite Consensus", description: "Shared interests of political and commercial elites" },
    { id: "moderates-british", nodeA: "moderates", nodeB: "british", label: "Constitutional Channel", description: "The belief that petitions and deputations matter" },
    { id: "radicals-students", nodeA: "radicals", nodeB: "students", label: "Revolutionary Pipeline", description: "Students drawn to radical thought and direct action" },
    { id: "radicals-muslims", nodeA: "radicals", nodeB: "muslims", label: "Anti-Colonial Solidarity", description: "Shared opposition to British rule across communal lines" },
    { id: "radicals-merchants", nodeA: "radicals", nodeB: "merchants", label: "Economic Nationalism", description: "Merchants funding the radical swadeshi vision" },
    { id: "radicals-british", nodeA: "radicals", nodeB: "british", label: "Antagonistic Respect", description: "The grudging engagement between radicals and officials" },
    { id: "students-muslims", nodeA: "students", nodeB: "muslims", label: "Campus Coexistence", description: "Hindu and Muslim students sharing classrooms and causes" },
    { id: "students-merchants", nodeA: "students", nodeB: "merchants", label: "Class Bridge", description: "Merchants' sons in colleges, students buying swadeshi goods" },
    { id: "students-british", nodeA: "students", nodeB: "british", label: "Educational Dependency", description: "Students need British institutions; British need educated subjects" },
    { id: "muslims-merchants", nodeA: "muslims", nodeB: "merchants", label: "Commercial Trust", description: "Trade relationships across communal lines in the bazaars" },
    { id: "muslims-british", nodeA: "muslims", nodeB: "british", label: "Loyalist Compact", description: "The understanding between Muslim leaders and the Raj" },
    { id: "merchants-british", nodeA: "merchants", nodeB: "british", label: "Trade Stability", description: "The commercial relationship underpinning imperial rule" }
  ];

  const EVENT_CARDS = [
    {
      id: "partition_announced",
      date: "October 1905",
      title: "Partition Announced",
      narration: "The proclamation is published in the *Gazette of India*. Bengal is to be divided: a Muslim-majority east with its capital at Dacca, and a Hindu-majority west centered on Calcutta. Lord Curzon calls it administrative necessity.\n\nYou know better. You have read the confidential dispatches that speak of \"diluting\" Bengali Hindu influence. You have seen how the line was drawn to split your political base in two.\n\nThe Congress moderates want you to draft a formal petition. The radicals want to burn British cloth in the streets. Both are watching to see what you do first.\n\nThe Partition is not merely a map redrawn. It is a challenge to every relationship you have built.",
      historicalContext: "The Partition of Bengal was announced on July 19, 1905 and took effect on October 16, 1905. Curzon framed it as administrative reform, but internal British documents reveal the intent to weaken Bengali Hindu political influence. The day of Partition was observed as a day of mourning across Bengal.",
      strains: [
        { tie: "moderates-british", amount: 10, reason: "The Partition proves petitions were ignored" },
        { tie: "moderates-radicals", amount: 11, reason: "Radicals see moderation as failure" }
      ]
    },
    {
      id: "raksha_bandhan",
      date: "October 1905",
      title: "Raksha Bandhan Unity March",
      narration: "Rabindranath Tagore has called for a day of mourning and unity. On the day the Partition takes effect, tens of thousands bathe in the Ganges and march through Calcutta singing *Amar Sonar Bangla*. Hindus and Muslims tie yellow threads — *rakhis* — on each other's wrists, vowing brotherhood.\n\nIt is a masterstroke of cultural protest. Even the police constables seem uncertain whether to intervene. But the British see the radical hand behind the march, and Muslim leaders in the east view the Hindu symbolism with growing unease.\n\nYou march at the front, torn between exhilaration and anxiety. The unity is real — but is it durable?",
      historicalContext: "Tagore organized the Raksha Bandhan observance on October 16, 1905, the day the Partition took effect. The ceremony of tying rakhis across Hindu-Muslim lines was a powerful symbol of unity, though some Muslim leaders viewed it as imposing Hindu ritual frameworks on a political movement.",
      strains: [
        { tie: "students-muslims", amount: 9, reason: "Hindu-coded symbolism strains campus coexistence" },
        { tie: "radicals-british", amount: 10, reason: "Officials blame radical organizers for the march" }
      ]
    },
    {
      id: "carlyle_circular",
      date: "November 1905",
      title: "The Carlyle Circular",
      narration: "The government issues the Carlyle Circular: any student participating in political meetings will lose their scholarship. Schools that harbor activists will lose their grants.\n\nThe effect is immediate and electric. Instead of silencing the students, it radicalizes them. Expelled students become full-time agitators. The Anti-Circular Society forms overnight, turning campuses into command centers for the boycott.\n\nPrincipals beg you to intervene. Parents write anxious letters. The British congratulate themselves on firm action while the movement doubles in size.\n\nYou realize with a sinking feeling that the government has just manufactured an army of volunteers — and severed the trust between students and the institutions that educated them.",
      historicalContext: "The Carlyle Circular of 1905 threatened to withdraw grants and scholarships from schools whose students participated in political activities. Rather than suppressing student activism, it created the Anti-Circular Society and pushed students into full-time political organizing.",
      strains: [
        { tie: "students-british", amount: 13, reason: "The education system has betrayed its students" },
        { tie: "moderates-students", amount: 9, reason: "Moderates failed to prevent the Circular" }
      ]
    },
    {
      id: "swadeshi_bonfires",
      date: "December 1905",
      title: "Swadeshi Bonfires",
      narration: "The boycott has found its ritual: bonfires of British cloth. In College Square, in the bazaars of north Calcutta, in towns across Bengal, crowds gather to feed Manchester textiles into the flames.\n\nThe symbolism is powerful. The economics are complicated. Bengali merchants who stockpiled British goods are watching their inventory burn. Student picketers enforce the boycott at market gates, sometimes with more enthusiasm than restraint.\n\nThe merchants come to you, caught between patriotism and ruin. The British warn that trade disruption cannot be tolerated.\n\nYou stand between the flames and the ledger books, watching two relationships burn.",
      historicalContext: "Swadeshi bonfires of British cloth became a central ritual of the boycott movement. While symbolically powerful, they created real economic hardship for merchants who had invested in British goods. The tension between symbolic politics and economic reality was a persistent challenge.",
      strains: [
        { tie: "students-merchants", amount: 11, reason: "Student picketers damage merchant livelihoods" },
        { tie: "merchants-british", amount: 9, reason: "Trade disruption strains the commercial relationship" }
      ]
    },
    {
      id: "barisal_crackdown",
      date: "April 1906",
      title: "Barisal Conference Crackdown",
      narration: "You organize a Provincial Conference at Barisal to demonstrate that the movement can be disciplined, constitutional, orderly. Delegates arrive from across Bengal. Speeches are planned. Resolutions are drafted.\n\nThen the police charge the procession.\n\nMagistrate Emerson bans the cry of *Bande Mataram*. When delegates refuse to stop singing, lathis fall. You are arrested, manhandled, fined. Moderate leaders who preached patience are dragged through the streets.\n\nStanding in the magistrate's court, your clothes torn, you realize the constitutional channel you spent decades building has just been answered with a policeman's stick. And the merchants who funded your conference are now reconsidering their investment.",
      historicalContext: "The Barisal Conference of April 1906 was violently dispersed by police under Magistrate Emerson. Banerjee himself was arrested and fined. The crackdown deeply embarrassed moderate leaders who had argued that working within the system could produce results.",
      strains: [
        { tie: "moderates-british", amount: 12, reason: "Your constitutional conference met with police batons" },
        { tie: "moderates-merchants", amount: 8, reason: "Merchants question whether your conferences produce anything but trouble" }
      ]
    },
    {
      id: "muslim_league_founded",
      date: "December 1906",
      title: "Muslim League Founded",
      narration: "At Ahsan Manzil, the grand palace of Nawab Salimullah in Dacca, delegates gather to found the All-India Muslim League. The speeches praise the Partition as a triumph for Muslim political representation. Loyalist addresses thank the Raj for creating a Muslim-majority province.\n\nIn Calcutta, your Hindu colleagues read the news as proof of divide-and-rule. They want you to denounce the League. But you know Salimullah — you have shared tea with him, discussed education policy, exchanged polite letters about civic improvement.\n\nThe League is not your enemy. But it is now an organized counterweight to Congress, and the radicals see it as a British tool. The tie between radicals and Muslims frays as each side hardens its position.",
      historicalContext: "The All-India Muslim League was founded on December 30, 1906 at Dacca. While it initially focused on protecting Muslim interests within the colonial framework, its formation marked a new phase of organized communal politics that would reshape Indian nationalism permanently.",
      strains: [
        { tie: "radicals-muslims", amount: 11, reason: "Radicals denounce the League as a British puppet" },
        { tie: "moderates-muslims", amount: 9, reason: "Muslim leaders formalize their separate political path" }
      ]
    },
    {
      id: "anti_circular_expulsions",
      date: "January 1907",
      title: "Anti-Circular Society Expulsions",
      narration: "The government makes good on its threats. Dozens of students are formally expelled. Scholarships are revoked. Families that depend on education as a path out of poverty watch their children's futures dissolve.\n\nThe expelled students don't go home. They set up a parallel education network — the National Education Movement — with volunteer teachers and makeshift classrooms. Some drift toward Aurobindo's inner circle, where the curriculum includes more than literature.\n\nThe moderates in Congress are horrified. They want education reform, not education revolution. But how can they condemn young people who were punished for singing patriotic songs?\n\nThe tie between students and your moderate base strains further. And the tie between students and the British snaps tighter with every expulsion notice.",
      historicalContext: "The enforcement of the Carlyle Circular led to mass expulsions and the creation of the National Education Movement, which established alternative schools outside government control. This radicalized a generation of students.",
      strains: [
        { tie: "students-british", amount: 11, reason: "More expulsions deepen the betrayal" },
        { tie: "moderates-students", amount: 10, reason: "Students see moderates as powerless to help" }
      ]
    },
    {
      id: "boycott_picket_violence",
      date: "March 1907",
      title: "Boycott Picket Violence",
      narration: "The swadeshi picket lines have turned ugly. In Mymensingh, a merchant who refused to stop selling British cloth had his shop set ablaze. In Comilla, student picketers beat a Muslim trader who resisted the boycott.\n\nThe merchants are furious. They signed on to a voluntary boycott, not mob enforcement. The radicals who encouraged \"direct action\" at the picket lines are losing the trust of the very merchants who fund the swadeshi mills.\n\nYou stand at the intersection of economic interest and nationalist fervor. The boycott is the movement's most powerful weapon — but if it becomes coercive, the ties between merchants and everyone who needs them will fray.",
      historicalContext: "As the swadeshi boycott intensified, incidents of picket violence and coercion against merchants — particularly Muslim traders — increased. This created tensions between the economic and moral dimensions of the movement.",
      strains: [
        { tie: "students-merchants", amount: 12, reason: "Student picketers intimidate and damage merchant businesses" },
        { tie: "radicals-merchants", amount: 10, reason: "Radical boycott tactics threaten merchant livelihoods" }
      ]
    },
    {
      id: "press_censorship",
      date: "May 1907",
      title: "Press Censorship Threats",
      narration: "The government warns that newspapers publishing \"seditious\" material will be shut down. The threat is aimed at the radical press — Aurobindo's *Bande Mataram*, Brahmabandhab Upadhyay's *Sandhya* — but your own *Bengalee* is also under scrutiny.\n\nThe radicals dare the government to act. Censorship, they argue, will prove that the British fear the truth. But the radicals also pressure you to run their editorials — and when you hesitate, they accuse you of cowardice.\n\nMeanwhile, your relationship with British officials depends on being seen as responsible. Publishing radical material could slam that door shut forever.",
      historicalContext: "Press censorship was a recurring tool of colonial control. The Newspapers (Incitement to Offences) Act of 1908 eventually gave the government sweeping powers to seize printing presses. The threat forced nationalist editors into constant calculations about risk.",
      strains: [
        { tie: "radicals-british", amount: 11, reason: "Censorship proves British tyranny to the radicals" },
        { tie: "moderates-british", amount: 8, reason: "Even moderate papers face scrutiny" }
      ]
    },
    {
      id: "surat_split",
      date: "December 1907",
      title: "Surat Congress Split",
      narration: "The Indian National Congress meets at Surat, and it breaks apart.\n\nThe dispute is over the presidency, but it is really about everything: methods, goals, the meaning of the movement itself. Tilak's supporters hurl chairs. Moderates are shouted down. A shoe flies through the air. The session dissolves in chaos.\n\nYou leave the pandal shaken. You have spent your career arguing that Congress is the vehicle for Indian self-governance — a parliament-in-waiting. Now it looks like a brawl.\n\nThe Congress Unity tie — the central thread of your entire political career — has never been more frayed. And with Congress fractured, the radicals' access to merchant funding dries up.",
      historicalContext: "The Surat Split of December 1907 formally divided Congress into Moderate and Extremist factions. The immediate cause was a dispute over the presidency, but deeper disagreements about methods made the split inevitable.",
      strains: [
        { tie: "moderates-radicals", amount: 14, reason: "The formal Congress split — chairs thrown, unity shattered" },
        { tie: "radicals-merchants", amount: 9, reason: "Without Congress, radicals lose access to merchant networks" }
      ]
    },
    {
      id: "muzaffarpur_bombing",
      date: "April 1908",
      title: "Muzaffarpur Bombing",
      narration: "A bomb explodes at Muzaffarpur, aimed at Magistrate Kingsford. It hits the wrong carriage. Two British women are killed — Mrs. and Miss Kennedy, who had nothing to do with the Partition or the movement.\n\nThe news travels faster than the telegraph. In London, parliamentarians demand swift justice. In Calcutta, moderates are horrified.\n\nYou publish an immediate condemnation in *The Bengalee*. But you know the damage is done. The British now see every nationalist as a potential bomber. And your ability to defend the radicals — to argue they are patriots, not terrorists — has been destroyed.\n\nThe tie between radicals and the British is nearly severed. And your own ability to bridge the moderate-radical divide has never been weaker.",
      historicalContext: "Khudiram Bose and Prafulla Chaki threw a bomb at what they believed was Magistrate Kingsford's carriage on April 30, 1908. The victims were actually Mrs. and Miss Kennedy. The bombing triggered massive police raids and the Alipore Conspiracy Case.",
      strains: [
        { tie: "radicals-british", amount: 14, reason: "The bombing destroys any remaining trust" },
        { tie: "moderates-radicals", amount: 10, reason: "Impossible to defend radicals after civilian deaths" }
      ]
    },
    {
      id: "alipore_trial",
      date: "May 1908",
      title: "Alipore Conspiracy Trial",
      narration: "Police raids sweep across Calcutta. The Alipore Conspiracy Case unfolds: dozens arrested, a cache of explosives discovered, revolutionary literature seized. Aurobindo Ghose himself is in the dock.\n\nThe trial becomes political theater. Students pack the galleries. But the raids don't discriminate — student organizations are raided alongside revolutionary cells. The tie between students and the radical underground is suddenly dangerous for both sides.\n\nAnd the British, rattled by the bombing, treat every student meeting as a potential conspiracy.\n\nYou watch from a careful distance, knowing that every visit to the courthouse is noted by the CID.",
      historicalContext: "The Alipore Conspiracy Case (1908-1909) was one of the most significant political trials in colonial India. Aurobindo Ghose was eventually acquitted, largely through C.R. Das's defense. The trial paradoxically increased public sympathy for the accused.",
      strains: [
        { tie: "radicals-students", amount: 10, reason: "Association with radicals now brings police raids on students" },
        { tie: "students-british", amount: 10, reason: "British treat every student organization as a conspiracy" }
      ]
    },
    {
      id: "tilak_arrested",
      date: "June 1908",
      title: "Tilak Arrested",
      narration: "Bal Gangadhar Tilak is convicted of sedition for articles in *Kesari* and sentenced to six years' transportation to Mandalay. The news detonates across India.\n\nIn Bombay, mill workers walk out in a spontaneous general strike — the first of its kind. In Calcutta, radicals call for hartals. Moderate leaders plead for calm while privately wondering if the government has gone too far.\n\nThe merchants are nervous. A general strike means closed shops, lost revenue, disrupted supply chains. The radical-merchant relationship — already strained by boycott violence — frays further as strikes threaten Indian-owned businesses.\n\nTilak's imprisonment has made him a martyr. And martyrs are harder to argue with than living politicians.",
      historicalContext: "Tilak was sentenced to six years in Mandalay prison in July 1908. His conviction triggered a six-day general strike in Bombay — the first political mass strike in Indian history.",
      strains: [
        { tie: "radicals-merchants", amount: 11, reason: "Strikes in Tilak's name threaten merchant businesses" },
        { tie: "radicals-british", amount: 10, reason: "Tilak's imprisonment cements radical-British hostility" }
      ]
    },
    {
      id: "rural_unrest",
      date: "July 1908",
      title: "Rural Unrest Spreads",
      narration: "The movement has jumped the city walls. In the eastern districts — the Muslim-majority areas that the Partition was supposed to pacify — peasant unrest is spreading. Tenant farmers refuse to pay rents to Hindu zamindars, framing economic grievance in communal language.\n\nThe *Red Pamphlet* circulates in the villages, urging Muslims to boycott Hindu traders. Swadeshi organizers who venture into the countryside are sometimes met with stones.\n\nThe commercial trust between Muslim and Hindu merchants — the bazaar relationships that have survived centuries of political change — is cracking under communal pressure. And the moderate-Muslim tie, always fragile, strains as each side blames the other.",
      historicalContext: "By 1907-1908, rural unrest in eastern Bengal took on communal dimensions, with Muslim peasants clashing with Hindu landlords. The 'Red Pamphlet' (Lal Ishtahar) urged Muslims to resist Hindu economic dominance.",
      strains: [
        { tie: "muslims-merchants", amount: 11, reason: "Communal framing turns economic relationships toxic" },
        { tie: "moderates-muslims", amount: 9, reason: "Rural communal tension undermines political dialogue" }
      ]
    },
    {
      id: "mill_workers_strike",
      date: "August 1908",
      title: "Mill Workers Strike",
      narration: "The Bombay strikes have inspired action in Calcutta. Jute mill workers in Howrah walk out, demanding better wages and shorter hours. The strikers wave swadeshi banners, but their demands are economic, not nationalist.\n\nThe students rush to support them, seeing workers' solidarity as the next stage of the movement. But the merchants — many of whom own the mills — are appalled. They funded a boycott of British goods, not a revolution against Indian capital.\n\nThe tie between merchants and moderates strains as merchants demand you condemn the strikes, while your moderate allies argue that workers' rights are part of the national cause.\n\nThe movement has grown beyond boycotts into class conflict, and your web was never built to handle that.",
      historicalContext: "Labor unrest in Calcutta's jute mills became increasingly tied to the nationalist movement in 1908. The convergence of labor and nationalist politics created tensions within the movement, particularly between working-class supporters and merchant-class funders.",
      strains: [
        { tie: "students-merchants", amount: 12, reason: "Students support strikers against merchant-owned mills" },
        { tie: "moderates-merchants", amount: 9, reason: "Merchants blame moderates for failing to control the movement" }
      ]
    },
    {
      id: "morley_minto_rumors",
      date: "September 1908",
      title: "Morley-Minto Reforms Rumored",
      narration: "Rumors reach Calcutta that London is drafting constitutional reforms. Secretary of State Morley and Viceroy Minto are said to be planning expanded Indian representation in legislative councils — but with **separate electorates** for Muslims.\n\nThe radicals are disgusted. Reform, they say, is a trap — a way to co-opt moderates while dividing Hindus from Muslims. You are caught in the middle, as always. The reforms could validate your lifetime of constitutional argument. But separate electorates would institutionalize the communal divide.\n\nThe tie between you and the radicals strains — they see your interest in reform as proof of collaboration. And the tie between Muslims and radicals hardens as separate electorates become a wedge.",
      historicalContext: "The Morley-Minto Reforms of 1909 expanded Indian representation in legislative councils but introduced separate electorates for Muslims — a provision that would shape Indian politics until Partition in 1947.",
      strains: [
        { tie: "moderates-radicals", amount: 10, reason: "Radicals see reform engagement as collaboration" },
        { tie: "radicals-muslims", amount: 9, reason: "Separate electorates become a wedge between communities" }
      ]
    },
    {
      id: "jamalpur_riots",
      date: "October 1908",
      title: "Communal Riots in Jamalpur",
      narration: "The communal fracture has become a communal explosion. In Jamalpur and Comilla, Hindu-Muslim riots erupt. Swadeshi volunteers defending Hindu shops clash with Muslim tenants. Temples and mosques are damaged. The police, overwhelmed, fire into crowds.\n\nThe unity of 1905 — the rakhis, the marches, the vows of brotherhood — feels like ancient history. The tie between Muslim and Hindu students on campus, already strained, snaps taut as each community retreats into its own circles.\n\nYou wonder, not for the first time, whether the Partition has already won — whether the line on the map has become a line in people's hearts.",
      historicalContext: "Communal riots in eastern Bengal in 1907-1908 shattered the Hindu-Muslim unity that characterized the early swadeshi movement. The violence was partly driven by economic tensions between Hindu landlords and Muslim tenants.",
      strains: [
        { tie: "students-muslims", amount: 12, reason: "Communal riots destroy campus coexistence" },
        { tie: "muslims-merchants", amount: 9, reason: "Bazaar relationships collapse amid communal violence" }
      ]
    },
    {
      id: "london_petition_rejected",
      date: "November 1908",
      title: "London Petition Rejected",
      narration: "Your deputation to London has returned empty-handed. The petition — months of careful drafting, pages of constitutional argument, signatures from across Bengal — has been received, acknowledged, and filed. The Secretary of State expressed \"sympathy\" but offered nothing.\n\nThis is the moment you have dreaded for thirty years. The moment when the system you believed in — petitions, deputations, reasoned argument — demonstrates its final inadequacy.\n\nThe moderates look to you with desperate eyes: *What now?* The radicals don't bother to say *we told you so*. And the merchants who funded the deputation are now questioning every rupee they spent on your constitutional strategy.\n\nHistory is watching. December 1908 approaches.",
      historicalContext: "Multiple petitions and deputations to London were politely received and effectively ignored throughout the Partition crisis. The failure of constitutional methods to produce results was a central argument used by radicals to discredit moderate leadership.",
      strains: [
        { tie: "moderates-british", amount: 13, reason: "London's rejection proves the constitutional channel is dead" },
        { tie: "moderates-merchants", amount: 10, reason: "Merchants lose faith in the moderate strategy they funded" }
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
  window.EVENT_CARDS = EVENT_CARDS;
  window.DEFEAT_NARRATIONS = DEFEAT_NARRATIONS;
  window.VICTORY_NARRATION = VICTORY_NARRATION;
  window.GLOSSARY = GLOSSARY;
})();
