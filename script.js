
"use strict";

/* ============================================
  PHYSICS LAB — 2.3.4
  Қайтымды және қайтымсыз процестер.
  Энтропия. Термодинамиканың екінші заңы.
  BY DARKHAN
============================================ */

const $ = id => document.getElementById(id);

const esc = value => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;");

const frac = (top, bottom) =>
  `<span class="frac"><span>${top}</span>` +
  `<span>${bottom}</span></span>`;

/* Индекстер мен дәрежелер HTML арқылы салынады.
   Біріктірілген Unicode вектор таңбалары жоқ. */

const FORMULA = {
  entropy: `&Delta;S = ${frac("Q<sub>rev</sub>", "T")}`,
  second: `&Delta;S<sub>оқшау</sub> &ge; 0`,
  carnot: `&eta; = 1 - ${frac("T<sub>суық</sub>", "T<sub>ыстық</sub>")}`,
  efficiency: `&eta; = ${frac("A", "Q<sub>1</sub>")}`,
  work: `A = Q<sub>1</sub> - Q<sub>2</sub>`,
  heat: `Q = mc&Delta;T`
};

/* ============================================
   САБАҚ МАЗМҰНЫ
============================================ */

const lesson = {
  code: "2.3.4",
  title:
    "Қайтымды және қайтымсыз процестер. " +
    "Энтропия. Термодинамиканың екінші заңы",

  goal:
    "Термодинамикалық процестердің бағытын, " +
    "қайтымдылық ұғымын және энтропияның өзгеруін " +
    "түсіну. Жылу машиналарының тиімділігін есептеу.",

  theory: [
    {
      title: "Термодинамикалық процесс дегеніміз не?",
      definition:
        "Термодинамикалық процесс — жүйенің бір тепе-теңдік күйден басқа күйге өтуі.",
      detail:
        "Термодинамикада жүйенің күйін температура, қысым, көлем және ішкі энергия сияқты шамалар сипаттайды. Осы шамалардың бірі өзгерсе, термодинамикалық процесс жүреді. Мысалы, газдың қызуы, суынуы, сығылуы немесе ұлғаюы — процестер. Процесс кезінде жүйе қоршаған ортамен жылу және жұмыс арқылы энергия алмасуы мүмкін. Жылу өздігінен ыстық денеден салқын денеге беріледі. Термодинамика заңдары мұндай өзгерістердің мүмкіндігін және бағытын түсіндіреді.",
      formula: "p, V, T, U — күй параметрлері",
      example:
        "Жабық ыдыста газ қыздырылса, температурасы және қысымы өзгеруі мүмкін.",
      warning:
        "Температура — дененің күй сипаттамасы, ал жылу — энергия алмасу тәсілі.",
      visual: "gas"
    },
    {
      title: "Қайтымды процесс",
      definition:
        "Қайтымды процесс — жүйе мен қоршаған ортаны бастапқы күйлеріне қалдық өзгеріссіз қайта келтіруге болатын идеал процесс.",
      detail:
        "Қайтымды процесс өте баяу, тепе-теңдікке жақын жағдайда, үйкеліссіз және басқа диссипативтік әсерлерсіз өтетін идеал модель ретінде қарастырылады. Мұндай процесті кері бағытта жүргізгенде жүйе де, қоршаған орта да бастапқы күйіне оралады. Қайтымды процестер нақты техникада дәл орындалмайды, бірақ жылу машиналарының теориялық шегін анықтауға мүмкіндік береді. Идеал газдың өте баяу сығылуы немесе ұлғаюы қайтымды процестің моделі бола алады.",
      formula: "&Delta;S<sub>жалпы</sub> = 0",
      example:
        "Үйкеліссіз поршень астындағы газдың шексіз баяу ұлғаюы — идеал қайтымды модель.",
      warning:
        "Өте баяу өту ғана процестің қайтымды екенін толық дәлелдемейді.",
      visual: "piston"
    },
    {
      title: "Қайтымсыз процесс",
      definition:
        "Қайтымсыз процесс — жүйе мен қоршаған ортаны толықтай бастапқы күйлеріне қалдық өзгеріссіз қайта келтіруге болмайтын процесс.",
      detail:
        "Табиғаттағы нақты процестердің басым көпшілігі қайтымсыз. Үйкеліс, жылудың температура айырмасы арқылы өтуі, сұйықтардың араласуы, газдың бос кеңістікке ұлғаюы — қайтымсыз құбылыстар. Мысалы, ыстық шай салқындайды, бірақ бөлмедегі жылуды өздігінен жинап, қайта ыстық күйге оралмайды. Мұндай өзгерістер энергияның сақталу заңына қайшы келмейді. Алайда процестің өздігінен қандай бағытта жүретінін термодинамиканың екінші заңы анықтайды.",
      formula: "&Delta;S<sub>жалпы</sub> &gt; 0",
      example:
        "Ыстық шайдың бөлмеде суынуы — қайтымсыз процесс.",
      warning:
        "Қайтымсыз процесті сыртқы жұмыс жұмсап кері өзгертуге болады, бірақ бүкіл орта бастапқы күйге өзгеріссіз оралмайды.",
      visual: "cup"
    },
    {
      title: "Жылудың берілу бағыты",
      definition:
        "Жылу өздігінен жоғары температуралы денеден төмен температуралы денеге өтеді.",
      detail:
        "Температуралары әртүрлі екі дене жылулық байланысқа түссе, олардың арасында энергия жылу түрінде беріледі. Жылудың өздігінен берілу бағыты — ыстықтан салқынға қарай. Уақыт өте келе денелердің температуралары жақындайды. Жылулық тепе-теңдік орнағанда олардың арасында таза жылу ағыны тоқтайды. Салқын денеден ыстық денеге жылу тасымалдауға да болады, бірақ ол үшін тоңазытқыш секілді құрылғыға сырттан жұмыс қажет.",
      formula: "T<sub>ыстық</sub> &gt; T<sub>суық</sub>",
      example:
        "Ыстық суға салынған салқын қасық біртіндеп қызады.",
      warning:
        "Жылу энергиясы өздігінен салқыннан ыстыққа тасымалданбайды.",
      visual: "heat"
    },
    {
      title: "Энтропия дегеніміз не?",
      definition:
        "Энтропия — термодинамикалық жүйенің күй функциясы; оның өзгеруі энергияның таралуымен және процестің қайтымдылығымен байланысты.",
      detail:
        "Энтропия S әрпімен белгіленеді және Дж/К өлшем бірлігімен өлшенеді. Қарапайым түсіндіруде энтропияны энергияның таралуы және жүйенің мүмкін микрокүйлерімен байланыстырамыз. Энтропияны тек ретсіздікпен теңестіру әрқашан дәл болмайды. Жүйе күйі өзгергенде оның энтропиясы да өзгереді. Оқшауланған жүйеде өздігінен өтетін қайтымсыз процесс жалпы энтропияны арттырады. Қайтымды процесс кезінде оқшауланған тұтас жүйенің энтропиясы өзгермейді.",
      formula: "S — Дж/К",
      example:
        "Екі температурадағы судың араласуы бүкіл оқшауланған жүйенің энтропиясын арттырады.",
      warning:
        "Жеке дененің энтропиясы азаюы мүмкін; екінші заң оқшауланған жүйенің толық энтропиясына қатысты.",
      visual: "entropy"
    },
    {
      title: "Энтропия өзгерісінің формуласы",
      definition:
        "Тұрақты температурадағы қайтымды жылу алмасуда энтропия өзгерісі алынған қайтымды жылудың абсолют температураға қатынасына тең.",
      detail:
        "Термодинамикалық температура кельвинмен өлшенеді. Қарапайым изотермиялық қайтымды процесте энтропияның өзгерісін ΔS=Qrev/T формуласымен есептеуге болады. Qrev — қайтымды жолмен алынған жылу. Егер дене жылу алса, оның энтропия өзгерісі оң болуы мүмкін; жылу шығарса, теріс болуы мүмкін. Айнымалы температура кезінде жалпы жағдайда ΔS=∫δQrev/T интегралы қолданылады. Мектептік қарапайым есептерде көбіне тұрақты температура шарты беріледі.",
      formula: FORMULA.entropy,
      example:
        "T=300 К, Qrev=600 Дж болса, ΔS=2 Дж/К.",
      warning:
        "Температураны міндетті түрде кельвинмен енгізіңдер. ΔS=Q/T тек көрсетілген шарттар орындалғанда қолданылады.",
      visual: "entropy"
    },
    {
      title: "Термодинамиканың екінші заңы",
      definition:
        "Термодинамиканың екінші заңы табиғи процестердің бағытын және энергияны пайдалы жұмысқа айналдырудың шектеулерін сипаттайды.",
      detail:
        "Екінші заңға сәйкес оқшауланған жүйедегі толық энтропия кемімейді. Қайтымды процесте толық энтропия өзгерісі нөлге тең, ал қайтымсыз процесте оң болады. Бұл заң жылудың берілу бағытын және жылу машиналарының жұмыс істеу шегін түсіндіреді. Қандай да бір жылу машинасы тек бір жылу қорынан жылу алып, оның барлығын цикл сайын жұмысқа айналдыра алмайды. Сондықтан жылу машиналарында қыздырғышпен қатар салқындатқыш та қажет.",
      formula: FORMULA.second,
      example:
        "Үйкеліс кезінде механикалық энергияның бір бөлігі ішкі энергияға айналады және энтропия өндіріледі.",
      warning:
        "Екінші заң энергияның сақталуын жоққа шығармайды; ол процестің бағытын түсіндіреді.",
      visual: "second"
    },
    {
      title: "Жылу машинасының жұмысы",
      definition:
        "Жылу машинасы қыздырғыштан алған жылудың бір бөлігін механикалық жұмысқа айналдырады.",
      detail:
        "Жылу машинасы жұмыс істеу үшін температуралары әртүрлі екі жылу қоры қажет. Қыздырғыш жұмыс денесіне Q1 жылу береді. Машина оның бір бөлігін A пайдалы жұмысқа айналдырады, ал қалған Q2 жылу салқындатқышқа беріледі. Толық цикл үшін энергия сақталуы A=Q1−Q2 түрінде жазылады. Машинаның пайдалы әсер коэффициенті пайдалы жұмыстың қыздырғыштан алынған жылуға қатынасына тең. Нақты машиналарда шығындар болғандықтан ПӘК теориялық шектен төмен болады.",
      formula: FORMULA.work,
      example:
        "Q1=1000 Дж, Q2=650 Дж болса, A=350 Дж.",
      warning:
        "Q1 мен Q2 мұнда жылудың оң модульдері ретінде алынған.",
      visual: "engine"
    },
    {
      title: "Карно машинасы және ПӘК",
      definition:
        "Карно циклі — екі жылу қоры арасында жұмыс істейтін идеал қайтымды жылу машинасының циклі.",
      detail:
        "Карно машинасының ең үлкен теориялық пайдалы әсер коэффициенті қыздырғыш пен салқындатқыштың абсолют температураларына тәуелді. Қыздырғыш температурасы Tыстық, салқындатқыш температурасы Tсуық болса, Карно ПӘК-і 1−Tсуық/Tыстық өрнегімен анықталады. Екі температура да кельвинмен өлшенуі керек. Қыздырғыш неғұрлым ыстық, салқындатқыш неғұрлым салқын болса, теориялық ПӘК соғұрлым жоғары. Дегенмен екі температура да оң болғанда ПӘК 100 пайызға жетпейді.",
      formula: FORMULA.carnot,
      example:
        "Tыстық=600 К, Tсуық=300 К болса, η=0,5=50%.",
      warning:
        "Карно формуласында Цельсий градусын емес, кельвинді пайдаланыңдар.",
      visual: "engine"
    },
    {
      title: "Екінші заңның күнделікті өмірдегі маңызы",
      definition:
        "Термодинамиканың екінші заңы жылу техникасының, тоңазытқыштардың және табиғи жылулық процестердің мүмкіндіктерін түсіндіреді.",
      detail:
        "Ыстық тамақтың суынуы, мұздың жылы бөлмеде еруі, қозғалыс кезіндегі үйкеліс арқылы қызу — қайтымсыз процестердің мысалдары. Тоңазытқыш салқын камерадан жылуды алып, жылы бөлмеге береді, бірақ бұл үшін электр энергиясын жұмсайды. Жылу электр станцияларында отын энергиясының тек бір бөлігі электр энергиясына айналады. Термодинамиканың екінші заңы құрылғылардың тиімділігін арттыру жолдарын зерттеуде өте маңызды. Оқушылар осы заң арқылы табиғаттағы процестердің неге белгілі бір бағытта өтетінін түсінеді.",
      formula: "Табиғи процестердің бағыты және ПӘК шегі",
      example:
        "Тоңазытқыш жылуды салқын ортадан жылы ортаға сыртқы жұмыс есебінен тасымалдайды.",
      warning:
        "Жылу өздігінен ыстықтан салқынға өтеді, ал кері тасымал үшін қосымша жұмыс керек.",
      visual: "refrigerator"
    }
  ],

  notes: [
    [
      "Термодинамикалық процесс",
      "Жүйенің күй параметрлері өзгергенде орын алатын физикалық процесс. Температура, қысым және көлем жүйе күйін сипаттайды.",
      "p, V, T — күй параметрлері.",
      "Жүйе жылу және жұмыс арқылы энергия алмаса алады."
    ],
    [
      "Қайтымды процесс",
      "Жүйе мен қоршаған ортаны бастапқы күйге қалдық өзгеріссіз қайтаруға болатын идеал процесс.",
      "ΔSжалпы = 0.",
      "Үйкеліссіз және тепе-теңдікке жақын жүреді."
    ],
    [
      "Қайтымсыз процесс",
      "Жүйе мен ортаны бірге бастапқы күйге өзгеріссіз қайтаруға болмайтын процесс.",
      "ΔSжалпы > 0.",
      "Нақты табиғи процестердің көпшілігі қайтымсыз."
    ],
    [
      "Жылу берілу бағыты",
      "Жылу өздігінен жоғары температуралы денеден төмен температуралы денеге өтеді.",
      "Tыстық > Tсуық.",
      "Кері бағытта жылу тасымалдау үшін сыртқы жұмыс керек."
    ],
    [
      "Энтропия",
      "Термодинамикалық жүйенің күй функциясы. Энергияның таралуымен және мүмкін микрокүйлермен байланысты.",
      "Белгіленуі S, өлшем бірлігі Дж/К.",
      "Жеке жүйешенің энтропиясы азаюы да мүмкін."
    ],
    [
      "Энтропия өзгерісі",
      "Тұрақты температурадағы қайтымды жылу алмасу үшін энтропия өзгерісі алынған жылудың температураға қатынасына тең.",
      "ΔS = Qrev/T.",
      "Температура кельвинмен алынады."
    ],
    [
      "Термодинамиканың екінші заңы",
      "Оқшауланған жүйенің толық энтропиясы уақыт бойынша кемімейді.",
      "ΔSоқшау ≥ 0.",
      "Қайтымсыз процесте толық энтропия артады."
    ],
    [
      "Жылу машинасы",
      "Қыздырғыштан алынған жылудың бір бөлігін жұмысқа айналдыратын құрылғы.",
      "A = Q1 − Q2.",
      "Жылудың бір бөлігі салқындатқышқа беріледі."
    ],
    [
      "Пайдалы әсер коэффициенті",
      "Жылу машинасының жасаған жұмысының қыздырғыштан алған жылуға қатынасы.",
      "η = A/Q1.",
      "ПӘК пайызбен де көрсетіледі."
    ],
    [
      "Карно ПӘК-і",
      "Екі жылу қорымен жұмыс істейтін идеал қайтымды машинаның ең үлкен теориялық ПӘК-і.",
      "η = 1 − Tсуық/Tыстық.",
      "Барлық температура кельвинмен алынады."
    ]
  ],

  problems: [
    [
      [
        "T=300 К тұрақты температурада қайтымды түрде Q=600 Дж жылу алынды. Энтропия өзгерісін табыңдар.",
        "T=300 К; Qrev=600 Дж",
        "ΔS",
        "ΔS=Qrev/T=600/300=2 Дж/К."
      ],
      [
        "Жылу машинасы Q1=800 Дж алады және Q2=500 Дж береді. Атқарған жұмысын табыңдар.",
        "Q1=800 Дж; Q2=500 Дж",
        "A",
        "A=Q1−Q2=800−500=300 Дж."
      ],
      [
        "Машина 1200 Дж жылу алып, 300 Дж жұмыс атқарды. ПӘК-ін есептеңдер.",
        "Q1=1200 Дж; A=300 Дж",
        "η",
        "η=A/Q1=300/1200=0,25=25%."
      ],
      [
        "Карно машинасында Tыстық=600 К, Tсуық=300 К. Теориялық ПӘК-ін табыңдар.",
        "Tыстық=600 К; Tсуық=300 К",
        "η",
        "η=1−300/600=0,5=50%."
      ]
    ],
    [
      [
        "T=320 К тұрақты температурада жүйе қайтымды түрде 1600 Дж жылу алды. Энтропия өзгерісін табыңдар.",
        "T=320 К; Qrev=1600 Дж",
        "ΔS",
        "ΔS=1600/320=5 Дж/К."
      ],
      [
        "Жылу машинасының ПӘК-і 35%, қыздырғыштан алған жылуы 2000 Дж. Машинаның жұмысын табыңдар.",
        "η=0,35; Q1=2000 Дж",
        "A",
        "A=ηQ1=0,35·2000=700 Дж."
      ],
      [
        "Жылу машинасының жұмысы 450 Дж, ал алған жылуы 1500 Дж. Салқындатқышқа берілген жылуды табыңдар.",
        "A=450 Дж; Q1=1500 Дж",
        "Q2",
        "Q2=Q1−A=1500−450=1050 Дж."
      ],
      [
        "Карно машинасының қыздырғышы 800 К, салқындатқышы 280 К. Теориялық ПӘК-ін есептеңдер.",
        "Tыстық=800 К; Tсуық=280 К",
        "η",
        "η=1−280/800=0,65=65%."
      ]
    ],
    [
      [
        "Карно машинасының қыздырғышы 750 К, ПӘК-і 62%. Салқындатқыш температурасын анықтаңдар.",
        "Tыстық=750 К; η=0,62",
        "Tсуық",
        "Tсуық=Tыстық(1−η)=750·0,38=285 К."
      ],
      [
        "Карно машинасында Tыстық=900 К, Tсуық=315 К. Қыздырғыштан 4200 Дж жылу алынса, теориялық жұмысты есептеңдер.",
        "Tыстық=900 К; Tсуық=315 К; Q1=4200 Дж",
        "η және A",
        "η=1−315/900=0,65. A=0,65·4200=2730 Дж."
      ],
      [
        "Мұз 0°C температурада қайтымды түрде еріді. Массасы 0,25 кг, меншікті балқу жылуы 334 000 Дж/кг. Энтропия өзгерісін табыңдар.",
        "m=0,25 кг; λ=334000 Дж/кг; T=273,15 К",
        "Q және ΔS",
        "Q=mλ=83500 Дж. ΔS=Q/T=83500/273,15≈305,69 Дж/К."
      ],
      [
        "Жылу машинасы Q1=5400 Дж алады. ПӘК-і 42%. Пайдалы жұмыс пен салқындатқышқа берілетін жылуды анықтаңдар.",
        "Q1=5400 Дж; η=0,42",
        "A және Q2",
        "A=ηQ1=2268 Дж. Q2=5400−2268=3132 Дж."
      ]
    ]
  ],

  quiz: [
    ["Жылдам тест","Қайтымды процесс дегеніміз не?",["Жүйе мен ортаны бастапқы күйге толық келтіруге болатын идеал процесс","Тек жылдам процесс","Тек қыздыру","Барлық нақты процесс"],0],
    ["Логика","Ыстық шайдың өздігінен суынуы қандай процесс?",["Қайтымды","Қайтымсыз","Адиабаталық міндетті","Механикалық"],1],
    ["Формуланы тап","Энтропия өзгерісінің тұрақты температурадағы қайтымды жылу алмасу формуласы?",["ΔS=QT","ΔS=Q/T","ΔS=T/Q","ΔS=Q+T"],1],
    ["Өлшем бірлігі","Энтропия қандай бірлікпен өлшенеді?",["Дж","К","Дж/К","Н"],2],
    ["Есеп батлы","Qrev=600 Дж, T=300 К. ΔS қанша?",["2 Дж/К","200 Дж/К","900 Дж/К","0,5 Дж/К"],0],
    ["Кім жылдам?","Жылу өздігінен қай бағытта беріледі?",["Салқыннан ыстыққа","Ыстықтан салқынға","Тек төменге","Кездейсоқ"],1],
    ["Қатені анықта","Оқшауланған жүйеде толық энтропия...",["Өздігінен кеми береді","Кемімейді","Әрқашан нөл","Температураға тең"],1],
    ["Жылу машинасы","Жылу машинасының жұмысы қай формула?",["A=Q1+Q2","A=Q1−Q2","A=Q1/Q2","A=Q2−Q1"],1],
    ["Есеп сайысы","Q1=1000 Дж, Q2=650 Дж. A қанша?",["1650 Дж","650 Дж","350 Дж","100 Дж"],2],
    ["ПӘК батлы","Пайдалы әсер коэффициентінің формуласы?",["η=Q1/A","η=A/Q1","η=AQ1","η=Q2/A"],1],
    ["Капитандар сайысы","Карно машинасының ПӘК-і неге тәуелді?",["Тек массаға","Жылу қорларының абсолют температураларына","Тек уақытқа","Тек көлемге"],1],
    ["Формула шебері","Карно ПӘК-інің дұрыс формуласы?",["1−Tыстық/Tсуық","1−Tсуық/Tыстық","Tыстық+Tсуық","Tыстық·Tсуық"],1],
    ["Өмірден мысал","Салқын камерадан бөлмеге жылу тасымалдау үшін тоңазытқышқа не қажет?",["Ештеңе","Сыртқы жұмыс","Тек үйкеліс","Вакуум"],1],
    ["Қайтымсыз процесс","Қай құбылыс қайтымсыз процеске мысал?",["Идеал баяу сығу","Газдардың өздігінен араласуы","Идеал қайтымды цикл","Тепе-теңдік күй"],1],
    ["Күрделі есеп","Карно машинасында Tыстық=600 К, Tсуық=300 К. η қанша?",["25%","50%","75%","100%"],1],
    ["Машина есебі","ПӘК 30%, Q1=2000 Дж. Пайдалы жұмыс қанша?",["300 Дж","600 Дж","1400 Дж","1700 Дж"],1],
    ["Логикалық финал","Нақты жылу машинасы 100% ПӘК-ке жете ала ма?",["Иә, әрқашан","Жоқ","Тек шағын қозғалтқыш","Тек жазда"],1],
    ["Шешуші сұрақ","Қайтымсыз процесте оқшауланған жүйенің толық энтропиясы қалай өзгереді?",["Кемиді","Артады","Міндетті түрде нөл","Температураға айналады"],1]
  ],

  homework: {
    calculations: [
      "Карно машинасының қыздырғыш температурасы 720 К, салқындатқыш температурасы 288 К. Теориялық ПӘК-ін табыңдар.",
      "Тұрақты T=350 К температурада қайтымды түрде Q=1400 Дж жылу алынды. Энтропия өзгерісін есептеңдер."
    ],
    writing: [
      "«Қайтымды және қайтымсыз процестер» тақырыбында салыстыру кестесін жасаңдар. Әр процеске анықтама және үш ерекшелік жазыңдар.",
      "Күнделікті өмірден төрт қайтымсыз процеске мысал келтіріп, әрқайсысының не себепті өздігінен кері жүрмейтінін түсіндіріңдер.",
      "Термодинамиканың екінші заңын өз сөздеріңмен 8–10 сөйлеммен түсіндіріңдер."
    ],
    speaking:
      "Келесі сабақта энтропияның не екенін және оның неге маңызды екенін 1–2 минут ауызша түсіндіріңдер."
  }
};

/* ============================================
   КӨРНЕКІ ДИАГРАММАЛАР
============================================ */

function svg(type) {
  if (type === "heat" || type === "cup") {
    return `<svg viewBox="0 0 420 230">
      <rect x="25" y="55" width="125" height="125"
        rx="18" fill="#ffe5e6" stroke="#dd6b72"
        stroke-width="3"/>
      <rect x="270" y="55" width="125" height="125"
        rx="18" fill="#dff1ff" stroke="#5ca5d7"
        stroke-width="3"/>
      <text x="87" y="107" text-anchor="middle"
        font-size="25" fill="#bf4356">Ыстық</text>
      <text x="87" y="145" text-anchor="middle"
        font-size="22" fill="#bf4356">80°C</text>
      <text x="332" y="107" text-anchor="middle"
        font-size="25" fill="#087dcc">Салқын</text>
      <text x="332" y="145" text-anchor="middle"
        font-size="22" fill="#087dcc">20°C</text>
      <line x1="163" y1="115" x2="247" y2="115"
        stroke="#e98c24" stroke-width="7"/>
      <polygon points="247,103 266,115 247,127"
        fill="#e98c24"/>
      <text x="210" y="91" font-size="26"
        text-anchor="middle" fill="#af7407">Q</text>
      <text x="210" y="215" font-size="21"
        text-anchor="middle">Жылудың берілу бағыты</text>
    </svg>`;
  }

  if (type === "engine") {
    return `<svg viewBox="0 0 420 270">
      <rect x="125" y="20" width="170" height="58"
        rx="14" fill="#ffe2e6" stroke="#d65b70"
        stroke-width="3"/>
      <text x="210" y="55" text-anchor="middle"
        font-size="22" fill="#bc354b">Қыздырғыш</text>
      <rect x="125" y="107" width="170" height="60"
        rx="14" fill="#e7f5ff" stroke="#087dcc"
        stroke-width="3"/>
      <text x="210" y="142" text-anchor="middle"
        font-size="21" fill="#087dcc">Қозғалтқыш</text>
      <rect x="125" y="200" width="170" height="55"
        rx="14" fill="#e1f8ea" stroke="#2ca875"
        stroke-width="3"/>
      <text x="210" y="232" text-anchor="middle"
        font-size="21" fill="#187948">Салқындатқыш</text>
      <line x1="210" y1="80" x2="210" y2="104"
        stroke="#df6675" stroke-width="5"/>
      <polygon points="201,98 210,110 219,98"
        fill="#df6675"/>
      <line x1="210" y1="170" x2="210" y2="196"
        stroke="#087dcc" stroke-width="5"/>
      <polygon points="201,191 210,203 219,191"
        fill="#087dcc"/>
      <line x1="299" y1="136" x2="368" y2="136"
        stroke="#d8a02d" stroke-width="5"/>
      <polygon points="362,127 379,136 362,145"
        fill="#d8a02d"/>
      <text x="360" y="119" font-size="23"
        fill="#a57500">A</text>
      <text x="220" y="98" font-size="16">Q1</text>
      <text x="220" y="190" font-size="16">Q2</text>
    </svg>`;
  }

  if (type === "entropy" || type === "second") {
    return `<svg viewBox="0 0 420 240">
      <rect x="30" y="42" width="155" height="140"
        rx="18" fill="#e7f2ff" stroke="#76acdb"
        stroke-width="3"/>
      <rect x="235" y="42" width="155" height="140"
        rx="18" fill="#e5f9ed" stroke="#62b98c"
        stroke-width="3"/>
      ${[[74,81],[125,81],[74,136],[125,136]].map(([x,y]) =>
        `<circle cx="${x}" cy="${y}" r="12" fill="#2385cb"/>`
      ).join("")}
      ${[[258,78],[310,101],[360,65],[268,150],
        [343,154],[306,53],[371,119]].map(([x,y]) =>
        `<circle cx="${x}" cy="${y}" r="9" fill="#2ca77a"/>`
      ).join("")}
      <line x1="189" y1="110" x2="226" y2="110"
        stroke="#e2a43b" stroke-width="5"/>
      <polygon points="220,101 235,110 220,119"
        fill="#e2a43b"/>
      <text x="210" y="220" text-anchor="middle"
        font-size="22">Микрокүйлердің көрнекі моделі</text>
    </svg>`;
  }

  if (type === "piston" || type === "gas") {
    return `<svg viewBox="0 0 420 245">
      <rect x="105" y="42" width="210" height="168"
        rx="8" fill="#e8f5ff" stroke="#559acb"
        stroke-width="5"/>
      <rect x="109" y="67" width="202" height="21"
        fill="#8bb6d5"/>
      <rect x="198" y="12" width="24" height="59"
        rx="5" fill="#7197b5"/>
      ${[[140,117],[199,135],[275,113],[170,174],
        [249,179],[288,152]].map(([x,y]) =>
        `<circle cx="${x}" cy="${y}" r="8" fill="#2593d2"/>`
      ).join("")}
      <line x1="355" y1="72" x2="355" y2="145"
        stroke="#e8a232" stroke-width="5"/>
      <polygon points="346,145 355,160 364,145"
        fill="#e8a232"/>
      <text x="365" y="115" font-size="22">V</text>
      <text x="210" y="233" text-anchor="middle"
        font-size="21">Газ және поршень</text>
    </svg>`;
  }

  if (type === "refrigerator") {
    return `<svg viewBox="0 0 420 240">
      <rect x="132" y="20" width="156" height="180"
        rx="15" fill="#dceeff" stroke="#5199d1"
        stroke-width="4"/>
      <line x1="132" y1="91" x2="288" y2="91"
        stroke="#5199d1" stroke-width="4"/>
      <rect x="147" y="49" width="8" height="30"
        rx="3" fill="#5199d1"/>
      <text x="210" y="152" text-anchor="middle"
        font-size="28" fill="#087dcc">+4°C</text>
      <path d="M295 65 H380" stroke="#e58d30"
        stroke-width="5"/>
      <polygon points="374,56 390,65 374,74"
        fill="#e58d30"/>
      <text x="320" y="49" font-size="20">Q</text>
      <text x="210" y="230" text-anchor="middle"
        font-size="20">Жылуды сыртқа шығарады</text>
    </svg>`;
  }

  return `<svg viewBox="0 0 420 240">
    <text x="210" y="69" font-size="30"
      text-anchor="middle" fill="#087dcc">Q → Жылу</text>
    <text x="210" y="131" font-size="30"
      text-anchor="middle" fill="#16824b">T → Кельвин</text>
    <text x="210" y="190" font-size="30"
      text-anchor="middle" fill="#d0374d">S → Энтропия</text>
  </svg>`;
}

/* Интернеттегі сурет ашылмаса, схема жоғалмайды. */
const photos = {
  engine:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Steam_engine_in_action.gif",
  refrigerator:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Refrigerator.jpg"
};

function visual(type) {
  if (photos[type]) {
    return `<div class="visual">
      <img src="${photos[type]}"
        alt="${type === "engine"
          ? "Бу қозғалтқышы"
          : "Тоңазытқыш"}"
        onerror="this.style.display='none'">
      ${svg(type)}
      <p class="caption">
        Фотосурет жүктелсе, үстінде көрсетіледі.
        Төменде түсіндірме схема бар.
      </p>
    </div>`;
  }
  return `<div class="visual">${svg(type)}</div>`;
}

/* ============================================
   ОҚУШЫЛАР ЖӘНЕ АВТОМАТТЫ 3 КОМАНДА
============================================ */

const initialNames = [
  "Рамазан", "Тұрғанжан", "Нұрай", "Әлқуат",
  "Шырай", "Гүлсезім", "Маржан", "Мариям",
  "Жансая", "Азиза", "Ақсезім", "Нұрболсын",
  "Ақнұр", "Іңкәр", "Асхат", "Аяжан",
  "Мирас", "Санжар", "Ерасыл", "Нұрасыл",
  "Расул", "Айнұр", "Дархан", "Айкерім"
];

const STORE = "physics234_";

function load(key, fallback) {
  try {
    const raw = localStorage.getItem(STORE + key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

let students = load(
  "students",
  initialNames.map((name, i) => ({
    id: i + 1,
    name,
    present: true
  }))
);

let teams = load("teams", [[], [], []]);
let scores = [0, 0, 0];
let answered = {};
let speakerHistory = [[], [], []];
let currentSpeaker = "";
let currentPage = 0;
let pages = [];
let nextTimer = null;
let zCounter = 100;
const startedAt = Date.now();

function save() {
  localStorage.setItem(
    STORE + "students",
    JSON.stringify(students)
  );
  localStorage.setItem(
    STORE + "teams",
    JSON.stringify(teams)
  );
}

function openPanel(id) {
  const el = $(id);
  el.classList.remove("hidden");
  el.style.zIndex = ++zCounter;
}

function closePanel(id) {
  $(id).classList.add("hidden");
}

function openAttendance() {
  renderAttendance();
  openPanel("attendancePanel");
}

function renderAttendance() {
  $("attendanceList").innerHTML =
    students.map(s => `
      <div class="student-row">
        <input type="checkbox"
          ${s.present ? "checked" : ""}
          onchange="setPresent(${s.id},this.checked)">
        <span>${esc(s.name)}</span>
        <button onclick="removeStudent(${s.id})">
          Өшіру
        </button>
      </div>
    `).join("");

  const present = students.filter(s => s.present).length;

  $("attendanceCount").textContent =
    `Барлығы: ${students.length} | ` +
    `Бар: ${present} | ` +
    `Жоқ: ${students.length - present}`;
}

function clearAdvance() {
  if (nextTimer !== null) {
    clearTimeout(nextTimer);
    nextTimer = null;
  }
}

function resetForAttendance() {
  clearAdvance();
  teams = [[], [], []];
  scores = [0, 0, 0];
  answered = {};
  speakerHistory = [[], [], []];
  currentSpeaker = "";
  save();

  renderTeams();
  renderPage();
}

function setPresent(id, value) {
  const s = students.find(s => s.id === id);
  if (s) s.present = value;

  resetForAttendance();
  renderAttendance();
}

function markAll(value) {
  students.forEach(s => s.present = value);
  resetForAttendance();
  renderAttendance();
}

function addStudent() {
  const input = $("newStudent");
  const name = input.value.trim();
  if (!name) return;

  if (students.some(s =>
    s.name.toLocaleLowerCase("kk") ===
    name.toLocaleLowerCase("kk")
  )) {
    alert("Бұл оқушы тізімде бар.");
    return;
  }

  const id = students.length
    ? Math.max(...students.map(s => s.id)) + 1
    : 1;

  students.push({ id, name, present: true });
  input.value = "";

  resetForAttendance();
  renderAttendance();
}

function removeStudent(id) {
  students = students.filter(s => s.id !== id);
  resetForAttendance();
  renderAttendance();
}

function presentStudents() {
  return students.filter(s => s.present);
}

function shuffleTeams(showWindow = false) {
  const list = [...presentStudents()];

  if (!list.length) {
    alert("Алдымен келген оқушыларды белгілеңіз.");
    return;
  }

  for (let i = list.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [list[i], list[j]] = [list[j], list[i]];
  }

  teams = [[], [], []];

  list.forEach((s, i) => {
    teams[i % 3].push(s.id);
  });

  clearAdvance();
  scores = [0, 0, 0];
  answered = {};
  speakerHistory = [[], [], []];
  currentSpeaker = "";

  save();

  if (isQuizPage()) {
    currentSpeaker = pickSpeaker(questionTeam(quizIndex()));
  }

  renderTeams();
  renderPage();

  if (showWindow) {
    closePanel("attendancePanel");
    openPanel("teamsPanel");
  }
}

function teamNames(index) {
  return (teams[index] || [])
    .map(id => students.find(s => s.id === id))
    .filter(s => s && s.present)
    .map(s => s.name);
}

function renderTeams() {
  $("teamLists").innerHTML =
    [0, 1, 2].map(i => `
      <div class="team-card">
        <h3>${i + 1}-команда</h3>
        <p>
          ${teamNames(i).map(esc).join(", ") ||
            "Оқушы жоқ"}
        </p>
        <div class="score">${scores[i]} ұпай</div>
      </div>
    `).join("");
}

function openTeams() {
  renderTeams();
  openPanel("teamsPanel");
}

function questionTeam(index) {
  return index % 3;
}

function pickSpeaker(team) {
  const names = teamNames(team);

  if (!names.length) return "Қатысушы жоқ";

  let available = names.filter(
    name => !speakerHistory[team].includes(name)
  );

  if (!available.length) {
    speakerHistory[team] = [];
    available = names;
  }

  const selected = available[
    Math.floor(Math.random() * available.length)
  ];

  speakerHistory[team].push(selected);
  return selected;
}

/* ============================================
   САБАҚТЫҢ БЕТТЕРІ
============================================ */

function introPage() {
  return `<section class="slide">
    <span class="eyebrow">ФИЗИКА • 2.3.4</span>

    <div class="card">
      <h1>${esc(lesson.title)}</h1>

      <div class="definition">
        <p class="green">${esc(lesson.goal)}</p>
      </div>

      <div class="formula">
        ${FORMULA.second}
      </div>

      <div class="grid2">
        <div class="example">
          <p>📘 Толық түсіндірме және конспект</p>
        </div>
        <div class="definition">
          <p>🏆 3 команда және автоматты ойын</p>
        </div>
      </div>

      <p class="blue">
        1-курс • 80 минут • By Darkhan
      </p>
    </div>
  </section>`;
}

function theoryPage(t, i) {
  return `<section class="slide">
    <span class="eyebrow">
      ТҮСІНДІРМЕ ${i + 1}/${lesson.theory.length}
    </span>

    <h2>${esc(t.title)}</h2>

    <div class="card">
      <div class="definition">
        <p class="green">${esc(t.definition)}</p>
      </div>

      <div class="photo-layout">
        ${visual(t.visual)}
        <div>
          <p>${esc(t.detail)}</p>
        </div>
      </div>

      <div class="formula">${t.formula}</div>

      <div class="example">
        <p class="gold">
          Мысал: ${esc(t.example)}
        </p>
      </div>

      <div class="warning">
        <p class="red">
          Маңызды: ${esc(t.warning)}
        </p>
      </div>
    </div>
  </section>`;
}

function notebookPage(part) {
  const start = part * 2;

  return `<section class="slide">
    <span class="eyebrow">ДӘПТЕРГЕ ЖАЗЫП АЛ</span>
    <h2>📘 Конспект — ${part + 1}-бөлім</h2>

    ${lesson.notes.slice(start, start + 2)
      .map((n, i) => `
        <div class="notebook-item">
          <div class="notebook-number">
            ${start + i + 1}. ${esc(n[0])}
          </div>
          <p class="green">${esc(n[1])}</p>
          <p class="blue">${esc(n[2])}</p>
          <p class="red">${esc(n[3])}</p>
        </div>
      `).join("")}
  </section>`;
}

function problemPage(level, part) {
  const names = [
    "🟢 1-деңгей — Оңай",
    "🟡 2-деңгей — Орташа",
    "🔴 3-деңгей — Күрделі"
  ];

  const offset = part * 2;

  return `<section class="slide">
    <span class="level ${["easy","medium","hard"][level]}">
      ${names[level]}
    </span>

    <h2>✍️ Дәптерде шығарылатын есептер</h2>

    ${level === 2 ? `
      <div class="example">
        <p class="gold">
          🧮 Калькуляторды пайдаланыңдар.
          Барлық шешу жолын дәптерге жазыңдар.
        </p>
      </div>
    ` : ""}

    ${lesson.problems[level]
      .slice(offset, offset + 2)
      .map((p, i) => `
        <div class="problem">
          <p class="problem-title">
            ${offset + i + 1}-есеп.
            ${esc(p[0])}
          </p>

          <div class="data-line">
            <span class="blue">Берілгені:</span>
            ${esc(p[1])}
          </div>

          <div class="data-line">
            <span class="green">Табу:</span>
            ${esc(p[2])}
          </div>

          <p>
            Берілгені → SI → Формула → Шешуі → Жауабы
          </p>

          <button onclick="toggleAnswer('ans_${level}_${part}_${i}')">
            Жауапты көрсету
          </button>

          <div id="ans_${level}_${part}_${i}"
            class="answer hidden">
            ${esc(p[3])}
          </div>
        </div>
      `).join("")}
  </section>`;
}

function toggleAnswer(id) {
  $(id).classList.toggle("hidden");
}

function quizStart() {
  const notes = Math.ceil(lesson.notes.length / 2);
  const problems = lesson.problems.reduce(
    (sum, group) => sum + Math.ceil(group.length / 2),
    0
  );

  return 1 + lesson.theory.length + notes + problems;
}

function quizIndex() {
  return currentPage - quizStart();
}

function isQuizPage() {
  return quizIndex() >= 0 &&
    quizIndex() < lesson.quiz.length;
}

function quizPage(item, index) {
  const [type, question, options, correct] = item;
  const team = questionTeam(index);
  const result = answered[index];
  const speaker =
    isQuizPage() && quizIndex() === index
      ? currentSpeaker : "";

  return `<section class="slide">
    <span class="eyebrow">
      КОМАНДАЛЫҚ ОЙЫН
      ${index + 1}/${lesson.quiz.length}
    </span>

    <h2>🏆 ${esc(type)}</h2>

    <div class="team-turn">
      ${[0, 1, 2].map(t => `
        <span class="turn-pill ${t === team ? "active" : ""}">
          ${t + 1}-команда • ${scores[t]} ұпай
        </span>
      `).join("")}
    </div>

    <div class="player-banner">
      <strong>${team + 1}-команданың кезегі</strong>
      <p>
        🎲 Жауап беретін оқушы:
        <b>${esc(speaker || "Таңдалуда...")}</b>
      </p>
    </div>

    <div class="card">
      <p class="quiz-question">
        ${esc(question)}
      </p>

      <div class="choices">
        ${options.map((option, i) => `
          <button
            class="choice
              ${result && i === correct ? "correct" : ""}
              ${result &&
                i === result.choice &&
                i !== correct ? "wrong" : ""}"
            onclick="submitAnswer(${index},${i})"
            ${result ? "disabled" : ""}>
            ${"ABCD"[i]}. ${esc(option)}
          </button>
        `).join("")}
      </div>

      ${result ? `
        <div class="answer">
          ${result.choice === correct
            ? "✅ Дұрыс жауап! +10 ұпай"
            : "❌ Қате жауап"}

          Дұрыс нұсқа: ${esc(options[correct])}
        </div>

        <p class="blue">
          Келесі командаға автоматты түрде өтеді...
        </p>
      ` : ""}
    </div>
  </section>`;
}

function resultsPage() {
  const highest = Math.max(...scores);

  return `<section class="slide">
    <span class="eyebrow">ҚОРЫТЫНДЫ</span>
    <h2>🏆 Командалардың нәтижесі</h2>

    <div class="grid3">
      ${scores.map((score, i) => `
        <div class="team-card">
          <h3>${i + 1}-команда</h3>
          <div class="score">${score} ұпай</div>
          <p>
            ${score === highest && score > 0
              ? "🏅 Ең жоғары нәтиже"
              : "Жарайсыңдар!"}
          </p>
        </div>
      `).join("")}
    </div>

    <div class="card">
      <h3>Сабақты қорытындылау</h3>

      <p>
        Қайтымды және қайтымсыз процестердің
        айырмашылығы қандай?
      </p>

      <p>
        Энтропия дегеніміз не және екінші заң
        нені түсіндіреді?
      </p>

      <p>
        Неліктен жылу машинасының ПӘК-і
        100 пайызға жетпейді?
      </p>

      <button onclick="restartQuiz()">
        🔄 Ойынды қайта бастау
      </button>
    </div>
  </section>`;
}

function homeworkPage() {
  return `<section class="slide">
    <span class="eyebrow">ҮЙ ТАПСЫРМАСЫ</span>
    <h2>🏠 Екі есеп және шығармашылық тапсырмалар</h2>

    <div class="card">
      <h3 class="blue">1. Дәптерге шығарылатын 2 есеп</h3>

      <ol>
        ${lesson.homework.calculations.map(x =>
          `<li>${esc(x)}</li>`
        ).join("")}
      </ol>

      <h3 class="green">2. Жазбаша тапсырмалар</h3>

      <ol>
        ${lesson.homework.writing.map(x =>
          `<li>${esc(x)}</li>`
        ).join("")}
      </ol>

      <h3 class="gold">3. Ауызша тапсырма</h3>

      <p>${esc(lesson.homework.speaking)}</p>

      <div class="warning">
        <p class="red">
          Есеп тек 2-еу. Қалған үй тапсырмасы —
          түсіндіру, салыстыру, мысалдар келтіру.
        </p>
      </div>
    </div>

    <p class="blue">Сау болыңыздар! By Darkhan</p>
  </section>`;
}

function buildPages() {
  pages = [
    introPage(),
    ...lesson.theory.map(theoryPage),

    ...Array.from(
      { length: Math.ceil(lesson.notes.length / 2) },
      (_, i) => notebookPage(i)
    ),

    ...lesson.problems.flatMap((group, level) =>
      Array.from(
        { length: Math.ceil(group.length / 2) },
        (_, part) => problemPage(level, part)
      )
    ),

    ...lesson.quiz.map(quizPage),
    resultsPage(),
    homeworkPage()
  ];
}

function renderPage() {
  buildPages();

  currentPage = Math.max(
    0,
    Math.min(currentPage, pages.length - 1)
  );

  $("screen").innerHTML = pages[currentPage];

  $("pageNumber").textContent =
    `${currentPage + 1} / ${pages.length}`;

  $("progressFill").style.width =
    `${100 * (currentPage + 1) / pages.length}%`;
}

function changePage(direction) {
  clearAdvance();

  const old = currentPage;
  currentPage = Math.max(
    0,
    Math.min(currentPage + direction, pages.length - 1)
  );

  if (currentPage !== old && isQuizPage()) {
    currentSpeaker = pickSpeaker(
      questionTeam(quizIndex())
    );
  }

  renderPage();
}

function submitAnswer(index, choice) {
  if (answered[index]) return;

  const team = questionTeam(index);

  if (!teamNames(team).length) {
    alert("Алдымен оқушыларды 3 командаға бөліңіз.");
    openAttendance();
    return;
  }

  const correct = lesson.quiz[index][3];

  answered[index] = { team, choice };

  if (choice === correct) {
    scores[team] += 10;
  }

  renderPage();
  renderTeams();

  nextTimer = setTimeout(() => {
    nextTimer = null;

    if (currentPage !== quizStart() + index) return;

    currentPage = Math.min(
      currentPage + 1,
      pages.length - 1
    );

    if (isQuizPage()) {
      currentSpeaker = pickSpeaker(
        questionTeam(quizIndex())
      );
    }

    renderPage();
  }, 2500);
}

function restartQuiz() {
  clearAdvance();
  scores = [0, 0, 0];
  answered = {};
  speakerHistory = [[], [], []];

  if (isQuizPage()) {
    currentSpeaker = pickSpeaker(
      questionTeam(quizIndex())
    );
  }

  renderPage();
  renderTeams();
}

/* ============================================
   ЖЫЛЖЫМАЛЫ КАЛЬКУЛЯТОРЛАР
============================================ */

document.querySelectorAll(".floating").forEach(panel => {
  let dragging = false;
  let dx = 0;
  let dy = 0;

  panel.addEventListener("pointerdown", event => {
    if (event.target.closest(
      "button,input,select,textarea,label,a"
    )) return;

    // Оқушылар тізіміндегі мәтінді жылжытуға
    // әрекет жасағанда терезе қозғалмайды.
    if (event.target.closest(
      "#attendanceList,#teamLists"
    )) return;

    const rect = panel.getBoundingClientRect();

    dx = event.clientX - rect.left;
    dy = event.clientY - rect.top;

    dragging = true;
    panel.style.zIndex = ++zCounter;
    panel.setPointerCapture(event.pointerId);
    event.preventDefault();
  });

  panel.addEventListener("pointermove", event => {
    if (!dragging) return;

    const left = Math.max(
      0,
      Math.min(
        innerWidth - panel.offsetWidth,
        event.clientX - dx
      )
    );

    const top = Math.max(
      0,
      Math.min(
        innerHeight - panel.offsetHeight,
        event.clientY - dy
      )
    );

    panel.style.left = left + "px";
    panel.style.top = top + "px";
    panel.style.right = "auto";
  });

  panel.addEventListener("pointerup", () => {
    dragging = false;
  });

  panel.addEventListener("pointercancel", () => {
    dragging = false;
  });
});

/* ============================================
   МАТЕМАТИКАЛЫҚ КАЛЬКУЛЯТОР
============================================ */

let mathExpression = "";

const mathKeys = [
  "7","8","9","÷",
  "4","5","6","×",
  "1","2","3","−",
  "0",".","(",")",
  "+","^","√","π",
  "sin","cos","tan","log",
  "ln","C","⌫","="
];

$("mathKeys").innerHTML = mathKeys.map(key =>
  `<button onclick="mathPress('${key}')">${key}</button>`
).join("");

function mathPress(key) {
  if (key === "C") {
    mathExpression = "";
    $("mathResult").textContent = "Тазаланды.";
  } else if (key === "⌫") {
    mathExpression = mathExpression.slice(0, -1);
  } else if (key === "=") {
    try {
      const result = calculateExpression(mathExpression);

      $("mathResult").textContent =
        "Жауабы: " + Number(result.toPrecision(12));
    } catch {
      $("mathResult").textContent =
        "Өрнекті тексеріңіз.";
    }
    return;
  } else if (
    ["√","sin","cos","tan","log","ln"].includes(key)
  ) {
    mathExpression += key + "(";
  } else {
    mathExpression += key;
  }

  $("mathDisplay").value = mathExpression;
}

/* eval және Function қолданылмайды. */

function calculateExpression(expression) {
  const source = expression
    .replaceAll("×", "*")
    .replaceAll("÷", "/")
    .replaceAll("−", "-")
    .replaceAll("π", String(Math.PI))
    .replace(/\s+/g, "");

  const tokens = source.match(
    /(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|√|sin|cos|tan|log|ln|[()+\-*/^]/gi
  );

  if (!tokens || tokens.join("") !== source) {
    throw Error("Таңба");
  }

  let position = 0;

  function atom() {
    const token = tokens[position++];

    if (token === "(") {
      const value = sum();

      if (tokens[position++] !== ")") {
        throw Error("Жақша");
      }

      return value;
    }

    if (
      token !== undefined &&
      !Number.isNaN(Number(token))
    ) return Number(token);

    if (
      ["√","sin","cos","tan","log","ln"].includes(token)
    ) {
      if (tokens[position++] !== "(") {
        throw Error("Функция");
      }

      const x = sum();

      if (tokens[position++] !== ")") {
        throw Error("Жақша");
      }

      if (token === "√") return Math.sqrt(x);
      if (token === "sin") return Math.sin(x * Math.PI / 180);
      if (token === "cos") return Math.cos(x * Math.PI / 180);
      if (token === "tan") return Math.tan(x * Math.PI / 180);
      if (token === "log") return Math.log10(x);
      if (token === "ln") return Math.log(x);
    }

    throw Error("Мән");
  }

  function power() {
    let x = atom();

    if (tokens[position] === "^") {
      position++;
      x = Math.pow(x, unary());
    }

    return x;
  }

  function unary() {
    if (tokens[position] === "-") {
      position++;
      return -unary();
    }

    if (tokens[position] === "+") {
      position++;
      return unary();
    }

    return power();
  }

  function multiply() {
    let x = unary();

    while (["*","/"].includes(tokens[position])) {
      const op = tokens[position++];
      const right = unary();

      x = op === "*" ? x * right : x / right;
    }

    return x;
  }

  function sum() {
    let x = multiply();

    while (["+","-"].includes(tokens[position])) {
      const op = tokens[position++];
      const right = multiply();

      x = op === "+" ? x + right : x - right;
    }

    return x;
  }

  const result = sum();

  if (
    position !== tokens.length ||
    !Number.isFinite(result)
  ) {
    throw Error("Нәтиже");
  }

  return result;
}

/* ============================================
   ФИЗИКАЛЫҚ КАЛЬКУЛЯТОР
============================================ */

const formulas = [
  {
    name: "Энтропия ΔS = Q/T",
    vars: ["dS","Q","T"],
    units: ["Дж/К","Дж","К"],
    solve: (v,n) =>
      n === "dS" ? v.Q/v.T :
      n === "Q" ? v.dS*v.T :
      v.Q/v.dS
  },
  {
    name: "Карно ПӘК-і η = 1 − Tc/Th",
    vars: ["eta","Tc","Th"],
    units: ["үлес (0–1)","К","К"],
    solve: (v,n) =>
      n === "eta" ? 1-v.Tc/v.Th :
      n === "Tc" ? v.Th*(1-v.eta) :
      v.Tc/(1-v.eta)
  },
  {
    name: "Жылу машинасы A = Q1 − Q2",
    vars: ["A","Q1","Q2"],
    units: ["Дж","Дж","Дж"],
    solve: (v,n) =>
      n === "A" ? v.Q1-v.Q2 :
      n === "Q1" ? v.A+v.Q2 :
      v.Q1-v.A
  },
  {
    name: "ПӘК η = A/Q1",
    vars: ["eta","A","Q1"],
    units: ["үлес (0–1)","Дж","Дж"],
    solve: (v,n) =>
      n === "eta" ? v.A/v.Q1 :
      n === "A" ? v.eta*v.Q1 :
      v.A/v.eta
  },
  {
    name: "Жылу мөлшері Q = mcΔT",
    vars: ["Q","m","c","dT"],
    units: ["Дж","кг","Дж/(кг·К)","К"],
    solve: (v,n) =>
      n === "Q" ? v.m*v.c*v.dT :
      n === "m" ? v.Q/(v.c*v.dT) :
      n === "c" ? v.Q/(v.m*v.dT) :
      v.Q/(v.m*v.c)
  }
];

function selectFormula() {
  const formula =
    formulas[Number($("formulaSelect").value)];

  $("unknownSelect").innerHTML =
    formula.vars.map(v =>
      `<option value="${v}">${v}</option>`
    ).join("");

  drawPhysicsFields();
}

function drawPhysicsFields() {
  const formula =
    formulas[Number($("formulaSelect").value)];
  const unknown = $("unknownSelect").value;

  $("physicsFields").innerHTML =
    formula.vars
      .filter(v => v !== unknown)
      .map(v => {
        const unit = formula.units[
          formula.vars.indexOf(v)
        ];

        return `<label>${v} (${esc(unit)})</label>
          <input type="number" step="any"
            id="phys_${v}"
            placeholder="${v} мәнін енгізіңіз">`;
      }).join("");

  $("physicsResult").textContent =
    "Барлық шамаларды SI жүйесінде енгізіңіз.";
}

function calculatePhysics() {
  const formula =
    formulas[Number($("formulaSelect").value)];

  const unknown = $("unknownSelect").value;
  const values = {};

  for (const v of formula.vars) {
    if (v === unknown) continue;

    const raw = $("phys_" + v).value.trim();

    if (raw === "") {
      $("physicsResult").textContent =
        "Барлық белгілі шамаларды енгізіңіз.";
      return;
    }

    values[v] = Number(raw);
  }

  try {
    // Қарапайым физикалық шектеулерді тексеру.
    if (
      ("T" in values && values.T <= 0) ||
      ("Th" in values && values.Th <= 0) ||
      ("Tc" in values && values.Tc <= 0) ||
      ("eta" in values &&
        (values.eta < 0 || values.eta >= 1))
    ) {
      throw Error("Физикалық шектеу");
    }

    const answer = formula.solve(values, unknown);

    if (!Number.isFinite(answer)) {
      throw Error("Анықталмаған нәтиже");
    }

    const unit = formula.units[
      formula.vars.indexOf(unknown)
    ];

    $("physicsResult").textContent =
      `Формула: ${formula.name}\n\n` +
      "Берілгені:\n" +
      Object.entries(values)
        .map(([name,value]) =>
          `${name} = ${value}`
        ).join("\n") +
      `\n\nТабу керек: ${unknown}\n` +
      `Жауабы: ${unknown} = ` +
      `${Number(answer.toPrecision(10))} ${unit}` +
      (unknown === "eta"
        ? `\nПайызбен: ${(answer*100).toFixed(2)}%`
        : "");
  } catch {
    $("physicsResult").textContent =
      "Мәндерді тексеріңіз. Температураны кельвинмен, " +
      "ПӘК-ті 0 мен 1 арасындағы үлеспен енгізіңіз.";
  }
}

/* ============================================
   САЙТТЫ ІСКЕ ҚОСУ
============================================ */

$("formulaSelect").innerHTML =
  formulas.map((f,i) =>
    `<option value="${i}">${esc(f.name)}</option>`
  ).join("");

selectFormula();
renderAttendance();

const presentIds = presentStudents().map(s => s.id);
const assigned = teams.flat();

const validTeams =
  assigned.length === presentIds.length &&
  new Set(assigned).size === assigned.length &&
  presentIds.every(id => assigned.includes(id));

if (!validTeams && presentIds.length > 0) {
  shuffleTeams(false);
}

renderTeams();
renderPage();

/* САБАҚТЫҢ ӨТКЕН УАҚЫТЫ */

function updateLessonTimer() {
  const elapsed = Math.floor(
    (Date.now() - startedAt) / 1000
  );

  const hours = Math.floor(elapsed / 3600);
  const minutes = Math.floor((elapsed % 3600) / 60);
  const seconds = elapsed % 60;

  $("timer").textContent =
    (hours ? String(hours).padStart(2,"0") + ":" : "") +
    String(minutes).padStart(2,"0") + ":" +
    String(seconds).padStart(2,"0");
}

/* АЛМАТЫНЫҢ ҚАЗІРГІ НАҚТЫ УАҚЫТЫ */

function updateCurrentTime() {
  const clock = $("currentTime");
  if (!clock) return;

  clock.textContent =
    new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Almaty",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hourCycle: "h23"
    }).format(new Date());
}

updateLessonTimer();
updateCurrentTime();

setInterval(() => {
  updateLessonTimer();
  updateCurrentTime();
}, 1000);
