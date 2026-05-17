export interface Hymn {
  id: string;
  title: string;
  number: number;
  verses: string[];
  chorus?: string;
}

export const HYMNS: Hymn[] = [
  {
    id: "burom-baroh-sha-u-blei",
    title: "Burom Baroh Sha U Blei",
    number: 1,
    verses: [
      "1. Burom, ka bor, baroh long kein sha u Blei, sand\nTang ma u hi, kordor jingïaroh ban ai ngi dei;\nHima jong u, bad ka bor, ka taplup baroh phar;\nHa ka burom bymjiwkut, junom un ïai synshar.",
      "2. Bakhuid, bakhuid, kyrteng ka bahalor tam,\nJingitynnad, jingstad ba i khraw bad ba donnam;\nKa jingphylla bad burom, jingdon jong u ka rah,\nDei tang ma u bym kylla, shaduh ki artabah.",
      "3. Pynphong pansngiat, ïa u Syiem synshar baroh,\nJingkyrmen i'u bynriew, nongsynshar dei hok ma u;\nJingbishar hok, jingisnei, khet jong u ha burom,\nRyngkat lem bad ki Angel, ngin ïarwai ruh junom."
    ]
  },
  {
    id: "katno-me-khraw",
    title: "(R-2) Katno Me Khraw",
    number: 2,
    verses: [
      "1. Ko Blei jong nga, nga dap hapdeng jinglyngngoh,\nBan pyrkhat ki kam me la leh baroh;\nNga i ki khlur, nga sngew jingriew u pyrthat,\nKa bor me pynpaw ha pyrthei baroh.",
      "2. Haba nga ïaid hapdeng lawbah i-tynnad,\nNga ïohsngew ki sim ki rwai sngewtynnad;\nHaba nga peit na kliar u lum ba pyngngad,\nNga i ki wah, ki lyer ba beh pyngngad.",
      "3. Haba pyrkhat mem shym bynnud la u khun,\nBan ïap ïapli namar ki pop ba bu'n;\nHalor ka diengphna u shah da mon sngewbha,\nBan bah bad kit baroh ki pop jong nga.",
      "4. Haba u Khrist un wan bad ka jingrisa,\nSha la ïng bneng un ïalam ruh ia nga;\nHangta ngan dem ngan mane ï'u Trai jong nga,\nNgan pyrta jam, \"Ko Trai me khraw shisha\"."
    ],
    chorus: "Mynsiem jong nga rwai ïaroh ïa u Trai,\nU long bakhraw, u long bakhraw:\nMynsiem jong nga rwai ïaroh ïa u Trai,\nU long bakhraw, u long bakhraw."
  },
  {
    id: "ko-kpa-ha-bneng-nga-iaroh",
    title: "(R-4) Ko Kpa Ha Bneng Nga Ïaroh",
    number: 3,
    verses: [
      "1. Ko Kpa ha bneng nga ïaroh tang ïa me, (2)\nNga ieit bad nga mane;\nNga dem ha khmat jong me,\nKo Kpa ha bneng nga ïaroh tang ïa me.",
      "2. Khun u Blei nga kyntiew nam tang ïa me, (2)\nNga ieit bad nga mane;\nNga dem ha khmat jong me,\nKhun u Blei nga kyntiew nam tang ïa me,",
      "3. Mynsiem Bakhuid me long jingtngen ïa nga, (2)\nNga ieit bad nga mane;\nNga dem ha khmat jong me,\nMynsiem Bakhuid me long jingtngen ïa nga."
    ]
  },
  {
    id: "ngi-iaroh-ko-trai",
    title: "(R-5) Ngi Ïaroh Ko Trai",
    number: 4,
    verses: [
      "1. Ngi ïaroh ko Trai,\nNamar u khun jong me;\nU b'la ïap ha diengphna,\nMynta u don bad me.",
      "2. Ngi ïaroh A! Blei,\nNamar mynsiem jingshai;\nB'la beh noh ïa jingdum,\nBad b'la pynpaw ïu Trai.",
      "3. Burom ï'u Jisu,\nB'la ïap ha Kalbari;\nBan kit ki pop jong ngi,\nBad ban sait phar ïa ngi.",
      "4. Burom bad ïaroh,\nT'u Blei ka jingaiei;\nU ba la wad ïa ngi,\nBad ïalam lynti Blei."
    ],
    chorus: "Burom, burom, ïaroh ï'u Trai,\nLaroh i'u Trai, Amen!\nBurom, burom, ïaroh ï'u Trai,\nPynim pat ïa ngi."
  },
  {
    id: "ba-men-ioh-kyrkhu",
    title: "Ba Men Ïoh Kyrkhu",
    number: 5,
    verses: [
      "1. Ba men ïoh kyrkhu Trai, ki pud ban pynïar,\nKa Hima ki bneng khubor, kylleng pynpar;\nTrai to ri to sumar, na jingsniew to da,\nAi jingma kin phet sha jngai, ïarap A! Trai.",
      "2. Ba men ïoh ban pyndap, ïa nga d'u mynsiem\nBor jong me ba ngan ïohsngew, A! Trai to shim;\nPyndonkam ban pyndep, ki jingthmu jong me,\nBurom jong me kan phyrnai, ïarap A! Trai."
    ],
    chorus: "Ka Hima jong me bad ka Mon jong me,\nHapoh khyndew kumba, ha bneng;\nBa baroh kin dem bad ba kin mane,\nHima jong me kan ïeng."
  },
  {
    id: "ngi-rwai-jingrwai-iaroh",
    title: "Ngi Rwai Jingrwai Ïaroh",
    number: 6,
    verses: [
      "1. Ngi rwai jingrwai ïaroh,\nKhlem da pud shuh junom;\nBlei bahakhlieh eh ïa baroh,\nBad i'u khun ha burom.",
      "2. Bor jong me kaba neh,\nJingkhraw badonbor eh;\nJingrwai jingaiei ngin pyrta,\nJingkah bneng kin sawa.",
      "3. Dei tang ka snam jong me,\nTrai ka pynim ïa ngi;\Ngi ïoh long khun baieit jong me,\nYm shuh nongwei shisngi.",
      "4. Kyrteng u khun langbrot,\nHaduh ha bneng me khot;\nKynmaw jingaiti shah shitom,\nNongpop ban im junom.",
      "5. Khublei Syiem nongsiewspah,\nKhun langbrot Kalbari;\nAi nongpop b'la ïoh jingsiewspah,\nKin rwai tang ïa me hi.",
      "6. Ha khmat ka khet ba khraw,\nB'la siew ka ram kin paw;\n\"Khun langbrot kordor\" kin rwai ruh,\nJunom khlem jingkut shuh."
    ]
  },
  {
    id: "jisu-babha-briew-tam",
    title: "(R-6) Jisu Babha Briew Tam",
    number: 7,
    verses: [
      "1. Jisu babha briew tam,\nNongpynim jong ka pyrthei;\nO! me u Blei bad khun u briew,\nÏa me ngan ïaroh,\nľa me ngan burom;\nMe long pansngiat jingkmen junom.",
      "2. Jingitynnad ki phlang,\nKham itynnad shuh ki khlaw;\nB'la pynkup itynnad por pyrem,\nTrai me kham phyrnai;\nTrai me kham janai,\nMe pyntngen dohnud ba khuslai.",
      "3. Itynnad sngi phyrnai,\nKham itynnad ba shai bnai;\nBad baroh ki khlur bah sha jngai,\nTrai me kham phyrnai;\nBakhuid ba janai,\nBan ïa baroh Angel jingshai."
    ]
  },
  {
    id: "khrist-u-syiem",
    title: "(R-7) Khrist U Syiem",
    number: 8,
    verses: [
      "1. To ïa rwai ïa jingngeit baieit eh jong nga,\nB'la pynpaw h'u Khrist ha Galilaïa;\nU wan rah jingsuk, jingbha ha ki briew baroh phar,\nlathuh ïa ka pyrthei, u Syiem u synshar.",
      "2. Namar jong nga ha diengphna snam u la jaw,\nla jingïap bad jingtep u la jop thiaw;\nBneng la dum bad jingkah ka Temple la kad arliang,\nAngel wan pyntyllun ï'u maw, u im biang!",
      "3. Ha kjat jong u ha u lum Olib la ong,\nU lyoh u la wan ïa u Khrist ban rong;\nAr ngut ki Angel ki la wan ong ha ki synran,\nHa kajuh ka rukom, u Jisu un wan."
    ],
    chorus: "Nga sngewbha eh ïa u Jisu,\nU ïalam mraw ïa jinglong mraw;\nAngel ki kmen ïa jingpynim,\nSa shisien ngin long kum ma-u;\nU long Trai ka sngewsih sngewkmen,\nThem ka jingdum kan burom;\nJingïap kan lam sha jingkhang b'la plie ha bneng,\nKhrist u long u Syiem junom."
  },
  {
    id: "u-mawsiang-skhem",
    title: "(R-8) U Mawsiang Skhem",
    number: 9,
    verses: [
      "1. Jingkyrmen jong nga ym ha-wei,\nLait tang ha snam bad hok jong u;\nNgam nud shaniah ki 'riew pyrthei,\nLait tang kyrteng u khun u Blei.",
      "2. Jingdum khmat jong u kam lah kah,\nNga shaniah ha jingaiei bah;\nHapdeng ki 'erïong kiba jur,\nHajan jong u ngan ïai ïeng shlur.",
      "3. Ynda un wan, turoi kan riew,\nÏa nga yn shem ryngkat bad u;\nNgan kup ïa ka hok ka jong u,\nKhlem pop ngan ïeng ha khet jong u."
    ],
    chorus: "H'u Khrist u mawsiang skhem nga ïeng,\nBaroh ki long tang ki dew jem;\nBaroh ki long tang ki dew jem."
  },
  {
    id: "lok-kum-jisu-ngim-shem-shuh",
    title: "(R-9) Lok Kum Jisu Ngim Shem Shuh",
    number: 10,
    verses: [
      "1. Lok kum Jisu ngim lah shem shuh,\nPop bad jynjar u kit ei;\nHa ki jynjar bad jingkyrduh,\nNgi ïoh lad ban leit sh'u Blei;\nO! bunsien jingsuk ngi shu duh,\nO! ngi shu shah shitom ei;\nTang namar ba ngim shym leit ruh,\nBa ngin pan jingai isnei.",
      "2. La ngi hap ha ki jingpynshoi,\nDap da jingkhuslai jingrem?\nNgin ym duh jingkyrmen ei-ei,\nLeit ïathuh ha la u Trai;\nLah ban shem u lok ba shisha,\nU ban lah ïa sngewsih lem;\nJingtlot baroh u tip u Blei,\nBuh da jingdwai ha u Trai.",
      "3. Ngi tlot ba sngewkhia jingjynjar,\nBa la ban da ki khuslai;\nJisu u long ka jaka rieh,\nLeit sha u da ki jingdwai;\nLa ki lok kin iehnoh ïa phi,\nLeit sha u ha ki jingdwai;\nHa la ki kti un kdup ïa phi,\nTe phin sa shem jingtngen jai."
    ]
  },
  {
    id: "kyrteng-kaba-phylla",
    title: "(R-10) Kyrteng Kaba Phylla",
    number: 11,
    verses: [
      "1. U long uba phylla, (3)\nJisu u Trai;\nU long u Syiem ba khraw,\nKynrad halor baroh;\nKyrteng kaba phylla;\nJisu u Trai.",
      "2. U nongap langbrot;\nU mawsiang mynhyndai,\nU Blei bakhraw u long;\nDem ha khmat jong u,\nIeit, mane ïa u;\nKyrteng kaba phylla,\nJisu, u Trai."
    ]
  },
  {
    id: "hajan-ka-dohnud-blei",
    title: "(R-12) Hajan Ka Dohnud Blei",
    number: 12,
    verses: [
      "1. Don ka jaka ba jahthait jai,\nHajan ka dohnud Blei;\nJaka ba pop kam lah pynbtai,\nHajan ka dohnud Blei.",
      "2. Don ka jaka kaba tngen jai,\nHajan ka dohnud Blei;\nHa kaba ngi ïashem ï'u Trai,\nHajan ka dohnud Blei.",
      "3. Don ka jaka ba laitluid phar,\nHajan ka dohnud Blei,\nKa jaka baroh b'la kular,\nHajan ka dohnud Blei."
    ],
    chorus: "Ko Jisu, u nongsiewspah,\nUba la phah n'u Blei;\nBat ïa ngi ba ap ha me,\nHa ka jingieit u Blei."
  },
  {
    id: "iu-blei-long-ka-burom",
    title: "(R-13) Ï'U Blei Long Ka Burom",
    number: 13,
    verses: [
      "1. Ï'u Blei long ka burom, kam bakhraw u leh,\nU ieit ka pyrthei, u phah i'u khún marwei;\nU ai la ka jingim ban sait pop jong ngi,\nBad u plie ka khyrdop jingpynim ïa ngi.",
      "2. O! jingpynim janai, b'la thied da ka snam,\nHa kito kiba ngeit jingkular u Trai;\nU nongpop ba tngit tam haba u wan phai,\nHa kata ka khyllipmat jingim un ai.",
      "3. Kam bakhràw u hikai, kam bakhraw u leh,\nJingkmen bakhràw ïa ngi lyngba Jisu hi;\nKham khuid, kham jrong, kham khràw kan sa long ïa ngi,\nJingphylla jong ngi haba Jisu ngin i."
    ],
    chorus: "To ngin ïaroh ľu Trai,\nPyrthei to sngew ïa u\nTo ngin ïaroh ï'u Trai,\nPyrthei to kmen ha u.\nTo wan sha u Kpa lyngba Jisu u khun,\nAi ïa u ka burom kam bakhraw u leh."
  },
  {
    id: "u-blei-jong-nga-uba-shisha",
    title: "(R-14) U Blei Jong Nga Uba Shisha",
    number: 14,
    verses: [
      "1. Don katto katne ngam lah tip,\nDon ruh jaka ngam lah ban leit;\nHynrei tang kawei hi nga tip,\nBa u long ba shisha ïa kata nga tip bha.",
      "2. Ki lok ki artatien ki beiñ,\nla jingpynim jong u kim khein;\nHynrei ma nga, ïu Blei ngan phla,\nBa u long uba shisha ha mynsiem jong nga.",
      "3. Ngam lah ïathuh kumno phi sngew,\nMynba u map ki pop jong phi;\nNaduh kata ka sngi nga sngew,\nBlei ba shisha nga lah ban sngew hapoh jong nga."
    ],
    chorus: "U Blei jong nga uba shisha,\nU la wan bad saitkhuid baroh ki pop jong nga;\nJingieit jong u kum ksiar nylla,\nU Blei jong nga nga sngewthuh u long ba shisha."
  },
  {
    id: "nga-ngeit-ha-u-blei",
    title: "(R-15) Nga Ngeit Ha U Blei",
    number: 15,
    verses: [
      "1. Kat shaba ngan leit nga ngeit ha u Trai.\nHa khyndew ne duriaw, kylleng pyrthei;\nMan ka sngi la jia katba jia,\nU Kpa ha bneng u ïai sumar ïa nga.",
      "2. U sumar ruh wat ïa u tiew lili,\nLyngba ka suiñ u ïalam ï'u pukni;\nDa shisha u kynmaw ïa nga,\nU Kpa ha bneng u ïai kynmaw ïa nga.",
      "3. Them ka lah ban long kaba dum ba ngiew,\nHynrei nongap langbrot jingma um ñiew;\nLyngba jingdum u btin ïa nga,\nKpa ba ha bneng u ïai sumar ïa nga."
    ],
    chorus: "Nga ngeit h'u Blei,\nNga tip u ri ïa nga;\nHa u lum bah lane ha ka duriaw,\nHa ki eriong u da ïa nga.\nU Kpa ha bneng u ïai sumar ia nga."
  },
  {
    id: "jingaiei-ba-phylla",
    title: "(R-16) Jingaiei Ba Phylla..",
    number: 16,
    verses: [
      "1. Ka jingaiei kaba phylla,\nB'la pynim kum ïa nga;\nNga b'la ïap la pynim mynta,\nMatlah la pynpeit bha.",
      "2. Jingaiei ka pyntieng ïa nga,\nBad la weng na jingma;\nKatno ka long kordor ïa nga,\nMynba nga ngeit ïa ka.",
      "3. Lyngba bun jingshitom, jingma,\nBa nga la pyllait shisha;\nJingaiei ka ïalam ïa nga,\nBan poi sha ïng i Pa.",
      "4. Hangta bun snem lyngba ki rta,\nKan phyrnai kum ka sngi;\nNgin rwai ïaroh ngin ym thait shuh,\nÏa la u Trai jong ngi."
    ]
  },
  {
    id: "u-lok-babha-tam-u-jisu",
    title: "(R-17) U Lok Babha Tam U Jisu",
    number: 17,
    verses: [
      "1. A! Jisu long u lok babha tam,\nHaba jynjar pyrthei ki wan lang;\nUn pynkhiah ïa ki jingmong;\nDa jingaiei la ka jong,\nA! Jisu long u lok babha tam.",
      "2. U lok ba nga la shem h'u Jisu,\nUba lam jingsuk jingtngen mynsiem;\nHa ki jingtlot u kyrshan,\nHa ki jingma u hajan;\nA! Jisu long u lok babha tam.",
      "3. La nga hap ha ki jingpynshoi,\nBad ka lyer Jordan ba tngam mynsiem;\nHaba kumta ruh ngam tieng,\nBa u jan u Nongpynim;\nA! Jisu long u lok babha tam.",
      "4. Haba kut ngin ïalang sha la ïng,\nLem bad ki lok ba la leit shuwa;\nNgin ïa rwai harud ka wah,\nBad ki lok b'la leit shuwa;\nA! Jisu long u lok babha tam."
    ],
    chorus: "Jisu long u lok babha tam, (2)\nHaba kyllon u ïarap;\nJingduna jingbieit u map,\nA! Jisu long u lok babha tam."
  },
  {
    id: "nga-tip-u-bat-ka-lashai",
    title: "(R-18) Nga Tip U Bat Ka Lashai",
    number: 18,
    verses: [
      "1. Ngam lah ban tip ïa ka lashai, nga shu im man la ka sngi,\nNgam pan ba ka sngi kan phyrnai, ka lah ban dum ne shai sngi;\nNgan nym khuslai ïa ka lashai, namar Jisu u ong shai,\nMynta ngan ïaid syndah bad u, u u tip aïu kan jia.",
      "2. Jingja'm jong nga ka kham janai, haba kiew mawja'm phyrnai,\nJingkit bakhia ki nang kham sting, bad u lyoh nang phet sha jngai;\nHangta sngi brabor ka tyngshaiñ, bad ki ummat kim jaw shuh,\nHa kaba kut ngan i ï'u Trai, ha ka step phyrnai khatduh.",
      "3. Ngam tip ei ei ïa ka lashai, ka lah ban ai jingkyrduh,\nHynrei uba bsa ki sim ïng, un don lem don ryngkat ruh;\nKa lynti ba nga dei ban ïaid, lynti ding ka lah ban lam,\nHynrei ha shwa ma -u un ïaid, bad ïa nga la tap da snam."
    ],
    chorus: "Ki don bun shaphang ka lashai,\nKiba ngam lah sngewthuh shai;\nNga tip u, u bat ka lashai,\nÏa nga ruh u bat u Trai."
  },
  {
    id: "katno-jingjylliew-bahi",
    title: "(R-19) Katno Jingjylliew Bahi",
    number: 19,
    verses: [
      "1. Katno jingjylliew bah jingstad bymjukut Blei,\nBym don thylliej ba lah ban batai;\nB'la khreh ka lad jingpynim da la jingaiei,\nÏ'u nongpop b'la ïap naduh tynrai.",
      "2. Katno jingjylliew bah jingieit bakhuid u Blei,\nAngel khuid jong u kim lah ïathuh;\nJingieit thiang ka tuid kum ka wah badap bashlei,\nTuid khlem thait shaduh bymjukut ruh.",
      "3. A! katno jingjrong tam eh jingieit ba aiei,\nB'la pu'n lynti na bneng sha pyrthei;\nBa nongpop kin ïoh kiew ha ka hima u Blei,\nNga shong junom lem bad la u Blei."
    ],
    chorus: "Jingpynim ba aiei, jingpynim badap biang,\nB'la theh lut ha jingïap jong u Khun;\nNgin ïaroh hosana ïa jingpynim bathiang,\nKa jingieit u Blei u Kpa basbun."
  },
  {
    id: "man-ka-khyllipmat",
    title: "Man Ka Khyllipmat",
    number: 20,
    verses: [
      "1. Ha jingïap u Jisu ïa nga la ñiew,\nHa jingim bad u jingthymmai nga sngew;\nHaba khmih sha u burom Blei ka shai,\nMan ka khyllipmat nga long jong me Trai.",
      "2. Ym don jingtynjuh ba um don ryngkat,\nYm don jingkit ba um shym wan ïarap;\nYm don jingsngewsih ba Trai un ieh-noh,\nU sumar ïa nga man ki por baroh.",
      "3. Ym don jingpang jingud ba nga la shah,\nYm don ummat ba jaw ne jingkynjah;\nYm don jingma ha lynti ba nga ïaid;\nJisu u synran u ïai don ryngkat.",
      "4. Ym don ka jingtlot ba u um sngewthuh,\nYm don jingpang ba um lah pynkhiah ruh;\nHa jingkordit ne jingkmen ha baroh,\nJisu u ïaisah bad nga um iehnoh."
    ],
    chorus: "Man ka khyllipmat ïa nga keiñ u ri,\nJingieit jong u nga ïoh im man ka sngi;\nNga khmih shu Jisu burom bneng ka shai,\nMan ka khyllipmat nga long jong me Trai."
  },
  {
    id: "long-ma-me-jingiohi",
    title: "Long Ma Me Jingïohi",
    number: 21,
    verses: [
      "1. Long ma me jingïohi, ïa dohnud jong nga;\nBaroh lehnohei tang ma me shisha;\nJingpyrkhat jong nga, miet bad sngi me long,\nHaba nga thiah ne nga kyndit, bad haba nga shong.",
      "2. Long ma me ka jingstad, kyntien ba shisha;\nNgan ïaineh bad me, Trai halakarta;\nMe u Kpa ba khraw, khun jong me nga long,\nHaduh ba kut hangta junom, bad me Trai ngan shong.",
      "3. Spah pyrthei ngam sngap, jingïaroh ki briew ruh;\nMe long jingïoh pateng bymjukut shuh;\nTang ma me hi Trai, Syiem bneng ba shisha;\nMe long nyngkong bad junom, hapoh dohnud jong nga.",
      "4. Syiem bneng ïa ka thong, jingjop jong nga la rah;\nHangtei ha burom, jingshai ban shongsah;\nAi kat kaba jia, hangne ha pyrthei,\nShisien ka sngi ngan leit shongsuk, ha ïngbneng hangtei."
    ]
  },
  {
    id: "ring-kham-hajan",
    title: "(R-22) Ring Kham Hajan",
    number: 22,
    verses: [
      "1. Nga long jong me Trai, nga ïohsngew ka ktien,\nBa pynpaw jingieit jong me;\nNga kwah ban kiew da bor jingngeit bunsien,\nBa men ring kham jan sha me.",
      "2. Sha ka kam jong me ïa nga to pynbit,\nDa ka bor ka jingaiei;\nNgan peit sha me da jingngeit ba sngewrit,\nShim ka mon jong nga ko Blei.",
      "3. A! ka jingsngewbha ban shong barobor,\nHa khmat ka jingdon jong me;\nBan ïoh duwai bad ïa syllok brabor,\nKum shilok nga hun bad me.",
      "4. A! ka duriaw bah ka jingieit jong me,\nNgam lah ban thew ïa kane;\nNgam lah kot ka jingkmen bakhraw katne,\nHaduh ban wan shong bad me."
    ],
    chorus: "Ring kham hajan, hajan Trai baieit,\nSha ka diengphna Kalbari;\nRing kham hajan, hajan hajan Trai baieit,\nHa krung b'la mong jong me hi."
  },
  {
    id: "jisu-long-nongpynim",
    title: "(R-23) Jisu Long Nongpynim",
    number: 23,
    verses: [
      "1. Ngi ïohsngew jingrwai bakmen, Jisu long Nongpynim,\nBan pynphriang khubor batngen, Jisu long Nongpynim;\nRah khubor kylleng sha jngai, kiew ki thiep, ja'm ki duriaw,\nShaphrang dei hukum u Trai, Jisu long Nongpynim.",
      "2. Phah ïa ka lyngba duriaw, Jisu long Nongpynim,\nNaba u donbor bakhraw, Jisu long Nongpynim;\nRwai phi dew lynnong baroh, pynsawa ko krem duriaw,\nKan shad kmen pyrthei baroh, Jisu long Nongpynim.",
      "3. Rwai kham jam ban ïa ka thma, Jisu long Nongpynim,\nDa jingïap u Trai babha, Jisu long Nongpynim;\nRwai jem lyngba ka jingdum, dohnud ka kwah jingisnei,\nRwai jop halor jingtap dum, Jisu long Nongpynim.",
      "4. Ai ki lyer kin beh kham jur, Jisu long Nongpynim,\nBriew kin kmen hajar bad klur, Jisu long Nongpynim;\nPyrta jingim ï'u nongpop, lum bajrong, krem ba jylliew,\nKane ka jingrwai jingjop, Jisu long Nongpynim."
    ]
  },
  {
    id: "don-ka-kyrteng",
    title: "(R-24) Don Ka Kyrteng",
    number: 24,
    verses: [
      "1. Don ka kyrteng nga ieit ban sngap,\nNga ieit ban rwai ïa ka;\nSngew kum jingtem ha shkor jong nga,\nKyrteng thiang tam ha nga.",
      "2. Ka ïathuh ïa jingieit jong u,\nB'u ïap namar jong nga;\nKa ïathuh ïa ka snam jong u,\nBa sait ki pop jong nga.",
      "3. Ka ïathuh kaei ba u Kpa,\nU la kynshew ïa nga;\nWat la nga ïaid ha lynti dum,\nKa ai jingkmen ïa nga.",
      "4. Ka ïathuh ïa jingieit uta,\nB'u ñiad ummat jong nga;\nUba kit lem khuslai jong nga,\nBym don shuh ha pyrthei."
    ],
    chorus: "O! nga ieit i'u Jisu.\nO! nga ieit ï'u Jisu\nO! nga ieit i'u Jisu\nNamar u ieit ïa nga."
  },
  {
    id: "rwai-iu-khun-langbrot",
    title: "(R-25) Rwai Ï'u Khun Langbrot",
    number: 25,
    verses: [
      "1. Ha ki phyllaw bneng ki b'la siewspah ki rwai,\nDa bret la ki pansngiat ksiar ha khmat u Trai;\nJingsngewsih, sheptieng, jingsniew pyrthei la wai,\nKatba riewkhuid ki ïa rwai jingrwai thymmai.",
      "2. O! jingrwai phylla ka jingieit b'la dap biang,\nKi pliang ksiar b'la dap da jingiwbih bathiang;\nJisu u b'la ïap na pop ban pynim ei,\nBa ngin synshar kum Syiem bad Lyngdoh u Blei.",
      "3. Tang ki b'la sait jainkup kin ïalum hangta,\nTang ki b'la ïoh jingaiei kin rwai hangta;\nPynkhuid ïa ngi na ki dak ka pop, A! Trai,\nAi jingrwai jingkmen ngin sdang mynta ban rwai."
    ],
    chorus: "Rwai ïu khunlangbrot,\nU b'la shah ïap ha Kalbari,\nRwai i'u khunlangbrot,\nShaduh bymjukut un im hi."
  },
  {
    id: "o-ngan-iai-iaroh",
    title: "(R-26) O! Ngan Ïai Ïaroh",
    number: 26,
    verses: [
      "1. Jisu jong nga, nga la tip janai,\nO! nga la mad ka burom u Trai;\nNga la ïoh jingim, la siew ka ram,\nLa kha d'u Mynsiem, la sait ha snam.",
      "2. Nga kohnguh lut bad nga kmen kyrhai,\nNga i-paw ïa ka burom u Trai;\nAngel ki wan hiar, wallam na neng,\nKhubor jingisnei bad jingieit bneng.",
      "3. Nga aiti lut, nga la suk shisha,\nNga ïoh jingkyrkhu bad shem jingbha;\nNga sharai, nga ap, shaneng nga peit,\nDap da ka jingbha bad ka jingieit."
    ],
    chorus: "O! ngan ïai ïaroh bad ngan ïai rwai,\nÏ'u Nongpynim jong nga khlem da wai;\nO! ngan ïai iaroh bad ngan ïai rwai,\nÏ'u Nongpynim jong nga khlem da wai."
  },
  {
    id: "sha-me-long-jingainguh",
    title: "Sha Me Long Jingainguh",
    number: 27,
    verses: [
      "1. Me long jingshai ka pyrthei,\nNgi nguh ïa me A! Blei;\nJingdum lei lei keiñ kam lah,\nÏa khmat briew ba kan kah;\nLa slem bah na mynnyngkong,\nKa bor jong me ka long;\nJingshai jong me ka tap lut,\nShaduh ki bymjukut.",
      "2. Jingieit ïa pyrthei me ai,\nBan lait na jingkhuslai;\nMe aiti ïa la u khun,\nBan phet lut ka jingdum;\nHa jingkyrduh u bynriew,\nKa ram bym lah ban siew!\nU Jisu ha ka diengphna,\nNgi ïoh lait im mynta.",
      "3. Phliah ding jingieit ba shisha,\nJingshai ai kan thaba;\nBa bor pyrthei ba kah dum,\nKan pra lyndet ki lu'm;\nBor mynsiem ba kynja Blei,\nTo ai ba kan theh shlei;\nLyngba pyrthei ba kylla,\nDon ryngkat Trai babha.",
      "4. Pdiang A! Blei ïa jingmane,\nJong ki paidlang jong me;\nJingpynkyrpang ha jingdwai,\nJingïaroh ha jingrwai;\nMe long u Blei ki khunswet,\nBad ki rangli kumjuh;\nHa sngewsih ne kmen ngim klet,\nSha me long jingainguh."
    ]
  },
  {
    id: "ai-ba-un-kdup",
    title: "Ai Ba Un Kdup",
    number: 28,
    verses: [
      "1. Ai ba u Jisu un kdup ïa phi\nDa l'u mynsiem bad jingieit,\nAi ba un pyndap dohnud bad pynhun mynsiem.\nTo aiti lut ha u ïa baroh,\nBad mynsiem bakhuid jong u\nUn wan shong bad phi bad un wan ai jingsuk.",
      "2. To ai ïa baroh ki jingsngewsih,\nBad ki por jong ka jingeh\nBad phin ïoh jingpynim ha kyrteng jong u."
    ],
    chorus: "Jisu O! Jisu to wan ban pyndap,\nJisu to pyndap, ïa la ki langbrot.\nTo wan ban rwai jingrwai da jingkmen\nDa dohnud ba la pynkmen,\nRah la ki kti kum ka jingaiti sha u."
  },
  {
    id: "jingsuk-ka-long-u-trai",
    title: "(R-29) Jingsuk Ka Long U Trai",
    number: 29,
    verses: [
      "1. Jingsuk ka long ban tip ïa u Trai,\nBan im jingim bakhuid bajanai;\nBan kylla na jingdum sha jingshai,\nJingsuk ka long u Trai.",
      "2. Jingsuk ka long ka jingthaw thymmai,\nJisu bad nga ha jinglong thymmai;\nBan ïoh bynta ha ka jingpynim,\nJingsuk ka long u Trai.\nJingkmen ïa nga, kam pher la ummat ki jaw,\nNga shem jingsngewbha,\nU don hapoh jong nga.",
      "3. Jingsuk ka long ban ïoh jingmap-ei,\nBan im jingim bakhuid ba riewblei;\nNgin ïaid lynti ba ïalam sha bneng,\nJingsuk ka long u Trai.\nJingsuk ka long u Trai,\nJingsuk ka long u Trai."
    ]
  },
  {
    id: "shaphang-ki-pop-aiu-phi-kren",
    title: "(R-30) Shaphang Ki Pop Aïu Phi kren",
    number: 30,
    verses: [
      "1. Nga kynmaw ïa ki sngi, ba nga tlot nga swai,\nBa jingkhia ka pop ka ban ïa nga;\nHynrei Trai u wan pyllait ïa nga,\nBad ai jingim thymmai ïa nga.\nMynta kein nga sngewnguh ïa u Trai babha,\nBa u la sait ïa ki pop jong nga;\nNga sngew kum ka sur kaba kren ha nga,\nDei u Trai shisha ba kren ha nga.",
      "2. Haba ka doh ka tlot, nga sa lah ban kren,\nBad u Trai ba don hajan jong nga?\nKo Kpa to isnei, to map ïa nga,\nBad u sait khuid ki pop jong nga.\nMan ki por nga ïai dem ban ai nguh ïa u,\nB'u pyllait na pop bad jinglehrain;\nMa u um kynmaw shuh ki pop jong nga,\nU ai kajuh ka jubab ïa nga."
    ],
    chorus: "Shaphang ki pop aïu phi kren?\nNgam kynmaw shuh ïa ki ba la slem;\nHa kitab jingim ïa ki ngam lah shem,\nNamar ïa ki la pyndam la slem."
  },
  {
    id: "iai-duwai-blei-u-hajan",
    title: "Ïai Duwai Blei U Hajan",
    number: 31,
    verses: [
      "1. Ïai duwai la suiñbneng dum synñia,\nHaba Blei u don lyoh ïong kin pra;\nŤai duwai haduh ban ïoh jingshai,\nJubab ïa jingdwai.",
      "2. lai duwai wat la dum ka lynti,\nBlei un sumar phai tang sha u hi;\nShisha na bneng un phah ka jingshai,\nJubab ïa jingdwai.",
      "3. lai duwai ïa mynsiem b'la sakma,\nIngai na jingieit ha jingdum lyng-a;\nPan bor na u ban jop da jingdwai,\nJubab Blei un ai.",
      "4. Jingduwai kam lehnohei ïa phi,\nNangioh thymmai jingjop man ka sngi;\nBan san man ki por h'u Jisu Trai,\nHa ki jingduwai."
    ],
    chorus: "To ïai duwai, Blei u nang hajan;\nU sngew ïa phi, lei lei um kynran\nTo ïai duwai, shaniah bad aiti;\nBlei un jubab ïa jingdwai jong phi."
  },
  {
    id: "shisien",
    title: "(R-32) Shisien",
    number: 32,
    verses: [
      "1. Shisien haba bneng ka dap da ka jingkmen,\nShisien haba ïong ngain ka pop ba rben;\nKhrist u la wan na ka Theisotti ban kha,\nHapdeng jong ki briew, u long u nuksa.",
      "2. Shisien sha lum Kalbari ki lam ïa u,\nB'un ïap ha u dieng la sah prek ïa u;\nLa ñiewbein la kyntait ha jingkordit bah,\nU la kit ki pop, ïa nga u siewspah.",
      "3. Shisien ïa u marwei ha kper la iehnoh,\nMynba u la law jingshitom baroh;\nAngel la wan hiar ha jingtep ki la shong,\nJingkyrmen jingpynim ïa nga u long.",
      "4. Haba jingtap kam lah shuh ïa u ban khang,\nÏa u maw la pyntyllun na jingkhang;\nÏa jingiap u jop, la mih Trai ka burom,\nSha bneng u la kiew, Trai jong nga junom.",
      "5. Bad turoi kan riew namar jingwan jong u,\nBad bneng kan tyngshain da burom jong u;\nÏa la ki jong un lumlang baroh hangta,\nNongpynim phylla, Jisu long jong nga."
    ],
    chorus: "Ïa nga u la ieit, la ïap ban pyllait,\nLa tep ïa u, u kit ki pop jong nga;\nNa jingtep u la mih ban pynksan ïa nga,\nSa shisien un wan, A! sngi ka burom."
  },
  {
    id: "jingieit-bneng",
    title: "(R-33) Jingieit Bneng",
    number: 33,
    verses: [
      "1. Jingieit Blei tynrai jingim,\nHa ka diengphna u la theh;\nJingaiei badap la tuid,\nKum umpohliew jingim bakhuid.",
      "2. La jingim ban ai u nud,\nU ai lut la ka dohnud;\nNa nga khlong lut ka dohnud,\nDa ka jingieit, khlem jingbynnud.",
      "3. Ei ba khring ïa nga hangtai,\nHa ka snam u Khrist u Trai;\nDei jingieit, Blei ba kynsai,\nKaba pyndap jingsuk kynjai.",
      "4. Jingieit ka teh lang shisha,\nH'u Khrist u b'la khring ïa nga;\nHa jingiasoh kaba im,\nSha jingkhuid bneng ïa nga u shim.",
      "5. Mynba ha ki por ba ma,\nJingieit ka pynpaw shisha;\nJingieit b'la pyllait ïa nga,\nNa pop, da jingngeit ha diengphna."
    ],
    chorus: "Jingieit janai jingieit phylla,\nBa plie wang ka bneng ïa nga;\nJingieit badap, jingsuk kynjai,\nKhlem kut shuh ka tuid kyrhai."
  },
  {
    id: "kumne-ngan-rwai-iaroh",
    title: "(R-34) Kumne Ngan Rwai Ïaroh",
    number: 34,
    verses: [
      "1. Ma me Trai men pyndap;\nÏa ki jingdonkam jong ka met,\nHynrei ïa kane Trai wat klet,\n\"Ai dohnud bym arsap.\"\nBan shakri khuid ïa me, A! Blei,\nTheh, A! to theh la jingaiei.",
      "2. Ban shakri ïa me barobor,\nÏa kane hi nga kwah;\nA! Blei kynrad to nang shan bor,\nBan ïaleh katba lah,\nBan long u shakri uba bha,\nKan long bainong babha shisha.",
      "3. La jingjynjar bad kordit bun,\nBad jingshitom ba eh;\nÏa kane ai, A! Trai, ngan hun,\nKa mon jong me ban leh,\nKa long ka mon jong me, A! Blei,\nKatba nga dangim ha pyrthei.",
      "4. Ynda la wai la ka jingim,\nNgan leit noh na pyrthei;\nNgan poi hangto h'u Nongpynim,\nBan shong bad la u Blei.\nBad ki angel ngan ïa rwai lang,\nDa ki jingkynud kiba bang."
    ],
    chorus: "Kumne ngan rwai ngan ïaroh,\nKyntiew burom ï'u Blei;\nHa kjat Jisu ngan shu ïai snoh,\nKatba dangim ha pyrthei."
  },
  {
    id: "hangta-ngan-nym-tieng-ei-ei",
    title: "(R-35) Hangta Ngan Nym Tieng Ei Ei",
    number: 35,
    verses: [
      "1. Nga kwah Jisu ban don ryngkat,\nNamar ngam nud ïaid marwei,\nNga kwah ban sngew u don hajan,\nBad b'u kdup da ki kti Blei.",
      "2. Nga kwah Jisu un don bad nga,\nHa ka lynti ka jingim;\nLyngba ka suk bad ka shipa,\nLyngba ka thma ka jingim.",
      "3. Nga kwah Jisu un don bad nga,\nBa u un ïalam lynti;\nHaduh ban da poi wah Jordan,\nBan lait jingatphyllung hi."
    ],
    chorus: "Hangta ngan nym tieng ei ei,\nKat shaba u ïalam ei;\nNgan leit khlem jingud bad jingkhñium,\nNgan ïai bud ki dien'jat Blei."
  },
  {
    id: "u-tiew-lili-ka-pynthor",
    title: "(R-36) U Tiew Lili Ka Pynthor",
    number: 36,
    verses: [
      "1. Nga shem u lok h'u Jisu,\nHa nga u long kordor;\nU kham bhabriew tam ïa ki shiphew hajar,\nTang ha u hi nga shem Tiew Lili jong ka pynthor,\nNga dang sah tang ban pynkhuid noh ïa nga phar.\nHa jingkhuslai u pyntngen, ha shitom u syrpai,\nU ong to bret ha nga jingkhuslai phar;\nU long Tiew Lili ka pynthor, u Khlur Step ba phyrnai,\nUba bha briew tam ïa ki shiphew hajar.",
      "2. U kit ki jynjar jong nga,\nJingkhuslai baroh phar;\nHa jingpynshoi u long kut baskhem jong nga,\nNga ieh ka pyrthei baroh, blei thala nga la tar;\nNa ka dohnud tang ma u sumar ïa nga.\nLa pyrthei kyntait ïa nga, Soitan u pynshoi jur,\nU Jisu un pyllait na ki jynjar;\nU long Tiew Lili ka pynthor, u Khlur Step ba phyrnai,\nUba bha briew tam ïa ki shiphew hajar.",
      "3. U bym ju iehnoh ïa nga,\nUm kyntait ruh junom;\nKatba nga dang leh ka mon bakhuid jong u,\nNgam donkam ei ei ban tieng, u ker ïa nga sawdong;\nU pynkdang ia nga da ka mana jong u.\nHa ka sngi pyndon burom, ngan i ka khmat jong u,\nKan jah noh ka jingshitom baroh phar;\nU long Tiew Lili ka pynthor, u Khlur Step ba phyrnai,\nUba bha briew tam ïa ki shiphew hajar."
    ],
    chorus: "Ha jingkhuslai u pyntngen, ha shitom u syrpai,\nU ong to bret ha nga jingkhuslai phar;\nU long Tiew Lili ka pynthor, u Khlur Step baphyrnai,\nUba bha briew tam ïa ki shiphew hajar."
  },
  {
    id: "me-pyrkhat-trai-ia-nga",
    title: "(R-37) Me Pyrkhat Trai Ïa Nga",
    number: 37,
    verses: [
      "1. Hapdeng ki jingtynjuh jong nga,\nHapdeng shiah kiba tar ïa nga;\nNga sngewsuk ba nga tip shisha,\nMe pyrkhat Trai ïa nga.",
      "2. Jynjar ki ker sawdong ïa nga,\nKi pynkordit mynsiem jong nga;\nKhatduh ka pynkynmaw ïa nga,\nMe pyrkhat, Trai ïa nga.",
      "3. Sngewsih ki leit, ne ki wan phai,\nAi ka jingim kan dum ne shai;\nNga shu sngewhun ba nga tip shai,\nMe pyrkhat, Trai ïa nga."
    ],
    chorus: "Me pyrkhat Trai ïa nga,\nMe pyrkhat Trai ïa nga;\nÏa ei ngan tieng, Me me don ryngkat,\nMe pyrkhat Trai ïa nga."
  },
  {
    id: "buhrieh-ia-nga-mawsiang-hyndai",
    title: "(R-38) Buhrieh Ïa Nga Mawsiang Hyndai",
    number: 38,
    verses: [
      "1. O! me u Mawsiang mynhyndai,\nNga shaniah ha me mynta;\nSumar haduh jingleit la wai,\nHaduh ngan i ïa me Trai.",
      "2. Sumar haba lyoh u tap dum,\nHaduh ba sngi kan phyrnai;\nSumar haduh jingtrei la dep,\nHaduh ngan i ïa ka step.",
      "3. Ynda jingleit hangne la wai,\nYm don jingtrei shuh ban trei;\nSumar mynsiem bathait ba swai,\nSha ka ri basuk kynjai."
    ],
    chorus: "Buhrieh ïa nga Mawsiang hyndai,\nHaduh ngan i ïa me Trai;\nLa ki erïong ki shoh ïa nga,\nBuhrieh ïa nga, buhrieh Trai."
  },
  {
    id: "synrang-mawsiang-na-hyndai",
    title: "Synrang Mawsiang Na Hyndai",
    number: 39,
    verses: [
      "1. Synrang mawsiang, na hyndai,\nHangta ngan rieh tngen to ai;\nAi ka um bad snam kan shlei,\nNa krung b'la mong khun u Blei,\nPop arshah la pynkhuid ruh,\nLa lait phar, ngam sah tngit shuh.",
      "2. Kam babha ki kti jong nga,\nPynbiang hukum Trai kim lah;\nDa jingshitrhem nga trei smat,\nWeibriew ïai tlor ki ummat,\nPop ngam lah ban siew kuna,\nTang me Trai, pynim ïa nga.",
      "3. Trai ei ei ngam shym wanrah,\nTang ïa diengphna nga bat sah;\nNga wan sha me ba suda,\nJingaiei pynkup ïa nga,\nSait ïa nga Trai ïoh ngan ïap,\nB'la tngit ngan ïoh jingim pat.",
      "4. Katba nga dang ring mynsiem,\nHa jingïap ba ngan ïoh im;\nNgan her shawei ka pyrthei,\nNgan i ha khet shong u Blei,\nSynrang mawsiang, na hyndai,\nHangta ngan rieh tngen to ai."
    ]
  },
  {
    id: "ka-jingjop-hu-jisu",
    title: "(R-39) Ka Jingjop H'u Jisu",
    number: 40,
    verses: [
      "1. Nga sngew khubor b'la iathuh, kumno u la wan na burom,\nKumno u la ai la ka jingim, ban im nongpop junom;\nNga ïohsngew jingud jong u, shaphang ka snam kordor jong u,\nNga la iehnoh ki pop baroh bad ïoh ïa ka jingjop.",
      "2. Nga sngew shaphang jingpynkoit, bad ka bor saitkhuid u Kynrad,\nKumno uba dkoh u la ïaid pat, matlah u ïohi pat;\nNga pyrta jam, ko Jisu, \"Wan spain dohnud b'la pait jong nga\",\nKumta Jisu u wan ban ai ha nga ïa ka jingjop.",
      "3. Nga sngew shaphang ka ïng bneng, b'u la thaw ïa nga ha burom,\nNga ïohsngew ruh shaphang surok ksiar, lyndet ri ka burom;\nShaphang ki Angel ba rwai, shaphang jingpynim kaba jop,\nShisien ka sngi ngan rwai hangtei, jingrwai jong ka jingjop."
    ],
    chorus: "O! ka jingjop h'u Jisu, u nongpynim jong nga,\nU wad bad thied ïa nga, da la ka snam bakhuid;\nU ieit ïa nga, nga tip bha, ngan ieit ruh ïa u mynta,\nU ai ïa nga ka jingjop, da snam ban ïoh sait khuid."
  },
  {
    id: "nga-kwah-tip-shuh-shuh",
    title: "(R-40) Nga Kwah Tip Shuh Shuh",
    number: 41,
    verses: [
      "1. Nga la thait ha pyrthei jingjynjar,\nNga ha lynti sha ri phyrnai;\nNgan nym phaidien la jia katba jia,\nJingeh hangne ngan sngewthuh shai.",
      "2. Nga la sngewbha ban tip Nongpynim,\nDa la ka snam u thied ïa nga;\nNgam sheptieng la ka ma ka lynti,\nNamar ïa u ngan sa ïohi.",
      "3. U la kular shuwa ban leit bneng,\n\"Ngan sa wan biang,\" u Trai u ong;\nLada phi shaniah ki kular bneng,\nHa thapniang jingieit phin poi bneng."
    ],
    chorus: "Nga kwah tip shuh shuh shaphang u Jisu,\nNga kwah tip shuh shuh shaphang u Trai;\nNga kwah tip shuh shuh shaphang ka ïng bneng,\nNgan leit noh ban ïoh ïa ka baïnong bneng,\nNga kwah tip shuh shuh ïa ka ïng phyrnai,\nNgan sa leit hangta shisien ka sngi.\nYnda nga la poi ha ka nongbah bneng hi,\nNga kwah ban kham tip shuh shuh ïa ka."
  },
  {
    id: "jisu-wan-ai-jingsuk-ia-nga",
    title: "(R-41) Jisu Wan Ai Jingsuk Ïa Nga",
    number: 42,
    verses: [
      "1. O! katno jingphylla, sngi ba phylla,\nSngi ba ngan nym lah ban klet;\nHaba ha ka jingdum nga la sakma,\nÏ'u Nongpynim nga ïa shem,\nO! katno u long u lok ba sngewlem,\nU ai jingdonkam jong nga;\nSyrngiew u beh noh, da jingkmen nga ïathuh,\nJingdum baroh u beh na nga.",
      "2. La kha n'u Mynsiem lem bad jingim bneng,\nNa ka ïng ba kynja Blei;\nBa la pynksan ei da jingngeit na neng,\nKatno skhem ka jingaiei.\nNga u nongpop b'la ïap la pynim ei,\nKum nongpop nga wan ha u;\nNga la ïoh jingaiei ba u la tyrwa,\nNga la ïoh im, ïaroh ïu Trai.",
      "3. Bad nga don jingkyrmen baneh baskhem,\nYnda la poi kaba kut;\nNga don ka lawei ha bneng kaba skhem,\nHangta ha ïng ka burom,\nBad ka jong kata ka sngi ba phylla,\nMynba nga ngeit ha diengphna;\nSpah bymjukut, jingkyrkhu ba ha khlieh tam,\nNa ka snam jong u nga ïoh pdiang."
    ],
    chorus: "Jisu la wan ban ai jingsuk ia nga,\nHalor diengphna u ïap namar jong nga;\nU sait ki pop jong nga,\nMiet la kylla sngi ïa nga;\nJisu la wan ban ai jingkmen ïa nga."
  },
  {
    id: "long-jai-jai",
    title: "(R-43) Long Jai Jai",
    number: 43,
    verses: [
      "1. Erïong ka kyrhuh ko Kynrad,\nKa jingatphyllung ruh de;\nKa jingdum ka tap lup ïa pyrthei,\nYm don ba ïarap A! Trai.\nJingma kiba nga sngew shyrkhei,\nÏarap ma me A! Trai;\nHaba erïong ruh kumne ki byrngem,\nBan tyllep ïa nga sha trai.",
      "2. Ko Kynrad nga pang ka dohnud,\nNga sngewsih sah ka mynsiem;\nNga pisa ha la ka jingpangnud;\nA! Kynrad khie to pynim.\nKa pop bad jingsngewsih ka shlei,\nPyntlor mynsiem jong nga;\nNga la jan ngam, nga la jan ngam A! Blei,\nPyllait to pynim ïa nga.",
      "3. Kynrad jingma baroh la wai,\nBaroh ki la long jai jai;\nSngi ka hok la tyngshain ka pynshai,\nMynsiem jong nga la suk jai.\nShongsah ha mynsiem jong nga Trai,\nHaba dum ne ba shai;\nDa ka jingkyrmen skhem ngan poi sha bneng,\nLem bad ki Angel u Trai."
    ],
    chorus: "Erïong jingatphyllung kin long jai jai,\nLong jai jai;\nLa ki kyrhuh da jingbitar Trai,\nLa jingdum ka tap ka sngi kam ai jingshai;\nKim lah pynngam ïa lieng ba thiah u Trai,\nÏa me u Trai ka bneng bad ka khyndew.\nBaroh kin dem kin ïanguh ia me,\nTang ïa me, tang ïa me,\nBaroh kin dem kin ïanguh ïa me,\nTrai tang ïa me."
  },
  {
    id: "jingngeit-dei-ka-jingjop",
    title: "(R-44) Jingngeit Dei Ka Jingjop",
    number: 44,
    verses: [
      "1. Shong ha ki lum jingshai to khmied,\nPhi shipai Khristan ïeng;\nBad tur sha thma shwa ba ka miet,\nKan kah ïa ka suin bneng.\nPyrshah ïu nongshun ba mutlop,\nla la ka bor to sei;\nNgi tip jingngeit dei ka jingjop,\nBa jop ïa ka pyrthei.",
      "2. Jingngeit long ka lama u Blei,\nKtien Blei dei ka waitlam;\nNgi ïaid ka lynti ki riewblei,\nDa jingrisa ngi ja'm.\nDa jingngeit kum erlangthari,\nKa sar ha ki lyngkha;\nJingngeit ba jop ïa jingiap hi,\nKa long ka stieh ïa nga.",
      "3. Ïa u nongshun ngi ïa kynduh,\nBa la khreh ban ïaleh,\nÏa jingsuk iehnoh shadien duh,\nTur sha ka jingialeh.\nJingda khlieh ka jingpynim phong,\nPanpoh da jingshisha;\nKa khyndew kan khynñiuh sawdong,\nJingrisa kan sawa.",
      "4. Ha uba jop ï'u nongshun hi,\nJaiñkup balieh yn ai;\nHakhmat ki Angel un tip hi,\nÏa kyrteng yn phla shai.\nTe shaphrang sha ki lum jingshai,\nDa ka jingieit jong ngi;\nNgin jop baroh nongshun u Trai.\nHa kyrteng Jisu hi."
    ],
    chorus: "Jingngeit dei ka jingjop,\nJingngeit dei ka jingjop;\nO! jingjop ba donburom,\nBa jop ïa ka pyrthei."
  },
  {
    id: "balei-nongpynim-u-wan",
    title: "(R-46) Balei Nongpynim U Wan",
    number: 45,
    verses: [
      "1. Balei Nongpynim u wan sha pyrthei,\nBad ki rangli ban sah;\nU la jied ïa jingkha baduk balei?\nNaba u ieit ïa nga.",
      "2. U dih ïa ka khuri ba kthang balei?\nJingsngewsih, jingsngewma?\nU shah pynkyntiew ha diengphna balei?\nNaba u ieit ïa nga.",
      "3. Haduh b'un wan ngan rwai ïaroh ïa u,\nSha burom leit nangta;\nBan ïa synshar ha la karta bad u,\nNaba u ieit ïa nga."
    ],
    chorus: "Naba u ieit ïa nga,\nNaba u ieit ïa nga;\nU aiti la jingim namar jong nga,\nNaba u ieit ïa nga."
  },
  {
    id: "jingshai-ba-khraw-la-shai",
    title: "(R-47) Jingshai Ba Khraw La Shai",
    number: 46,
    verses: [
      "1. Jingshai ba khraw la shai ha shnong,\nMynba u Jisu la kha;\nAngel ki wan na bneng ba jrong,\nBan ïathuh ïa kata.",
      "2. Kmen ki riewap langbrot ki sngew,\nU Trai u la wan hiar;\nBan pynim ïa baroh ki briew,\nNa ka pop b'la khang kynriar.",
      "3. To ngin wan sha u ha kane ka sngi,\nDa ka jingsngewrit kaba khraw;\nNgin rwai, ngin kmen, ngin ïaroh bad ngi,\nNgi tip u long Kynrad bakhraw."
    ],
    chorus: "To ngin ïaroh u Blei u Kpa,\nUba ieit ïa ngi shisha;\nU la phah ïa la u Khun,\nBan long u Nongpynim."
  },
  {
    id: "jisu-pyrkhat-shaphang-jong-nga",
    title: "(R-48) Jisu Pyrkhat Shaphang Jong Nga",
    number: 47,
    verses: [
      "1. Haba nga phai sha Kalbari,\nNga sngew ka jingieit u Trai;\nU b'la khyrwit bad shah pynïap,\nPyrkhat shaphang jong nga.",
      "2. Pangnud kordit ki ker sawdong,\nMynba u dem ha ka kper;\nKi ummat snam ki jaw na u,\nPyrkhat shaphang jong nga.",
      "3. Pangkhlieh, pangmet u shah baroh,\nKi shiah kiba shoh hapoh;\nLyer b'la pyrsad d'u Kpa na neng,\nPyrkhat shaphang jong nga."
    ],
    chorus: "Jisu pyrkhat shaphang jong nga,\nJisu pyrkhat shaphang jong nga;\nMynba u shah ha diengphna,\nPyrkhat shaphang jong nga."
  },
  {
    id: "to-wan-sha-u-jisu",
    title: "(R-50) To Wan Sha U Jisu",
    number: 48,
    verses: [
      "1. To wan sha u Jisu phi b'la thait la swai,\nU khot, u pyrta \"To wan sngewbha\";\nTo aiti la jingim, to bret jingkhuslai,\nUn ai jingsuk kyanjai ha phi.",
      "2. To wan shah syrpai ha u Trai u Jisu,\nDohnud b'la pait un pynkoit biang;\nTo ieh la ki pop bad b'la tlor ka mynsiem,\nUn bsa da ka jingshai kynsai.",
      "3. To wan sha u Jisu phi b'la peit matlah,\nUn pynshai ki khmat kiba dum;\nTo wan her sha u, un kdup ha la ki kti,\nUn synran u ban btin lynti."
    ],
    chorus: "To wan, to wan, wan pan jingsuk na u,\nTo wan, to wan, wan shim jingsuk na u;\nTo wan, to wan, wan pan jingsuk na u,\nUn ai jingsuk kyanjai ha phi."
  },
  {
    id: "o-ka-snam-jong-u-jisu",
    title: "(R-51) O! Ka Snam Jong U Jisu",
    number: 49,
    verses: [
      "1. Don ka umpohliew snam kordor,\nB'la tuid na Kalbari;\nNongpop ba lhop ha ki pop bah,\nKin ïoh jingpynim hi.",
      "2. Nongshohnoh b'la kem ha jingïap,\nU kmen ban i kata;\nNga ruh u nongpop b'la tngit tam,\nNga ïoh lait im mynta.",
      "3. Khun langbrot b'la ïap snam kordor,\nYm jiw duh bor lei lei;\nHaduh b'la siewspah ki riewkhuid,\nKin kmen bad la u Blei.",
      "4. Naduh ba nga da jingngeit nga i,\nla ka umpohliew snam;\nJingieit siewspah la long jingrwai,\nHaduh ban kut ki rta."
    ],
    chorus: "O! ka snam jong u Jisu,\nO! ka snam jong u Jisu;\nKaba la tuid na Kalbari,\nKa pynkhuid ïa nga mynta."
  },
  {
    id: "sha-khmat-ka-diengphna",
    title: "(R-52) Sha Khmat Ka Diengphna",
    number: 50,
    verses: [
      "1. Ha khmat ka diengphna u Trai Jisu,\nNga tip nga long u nongpop ba tngit;\nHynrei u map, u pynkhuid ïa nga,\nJingshai ka wan, ka tap dohnud jong nga.",
      "2. Mynshwa nga ïaid ha ka lynti dum,\nJingim jong nga ka tap da ki lyoh;\nHynrei mynta nga long u b'la lait,\nNamar u Jisu u pynshai ïa nga.",
      "3. Mynta nga lah ban ïai rwai brabor,\nKyntiew burom ï'u Jisu u Trai;\nUba la ïap ban pynkhuid ïa nga,\nNgan shakri ïa u katba nga dang im."
    ],
    chorus: "Ha khmat ka diengphna u Trai Jisu,\nJingshai ka wan ha dohnud jong nga;\nNga sngewbha eh, mynsiem ka kmen kyrhai,\nMynta nga kmen brabor ha u Trai."
  },
  {
    id: "a-trai-to-map",
    title: "A Trai To Map",
    number: 51,
    verses: [
      "1. Lada nga kum pynmong mynta ka sngi,\nMynsiem kordor nga pynsakma lynti;\nLada ha mon lade sakma nga ïaid,\nA! Trai to map.",
      "2. Lehse kyntien bym dei nga kum pynmih,\nHa jingpang jingkyrduh nga pynsngewsih;\nYoh nga long jingjynthut ïa kiwei pat,\nA! Trai to map.",
      "3. Lada nga ïai pyneh ha jingbakla,\nNga kum dukhi mynsiem ban ïoh jaka;\nNgam hun tang katba me ai ngam sngewdap,\nA! Trai to map.",
      "4. To map A! Trai ki pop ha me nga phla,\nŤa kito ruh ba ngam sngewthuh shisha;\nTo btin to ri da jingieit skhem to bat,\nA! Trai to map."
    ]
  },
  {
    id: "ka-hima-la-nangwan",
    title: "Ka Hima La Nangwan",
    number: 52,
    verses: [
      "1. Na baroh ki jaka jingdum pyrthei b'la kah,\nHakhmih! syrngiew barben ki jah!\nSur jingpynim, u bynriew kyndit thiah hangta,\n\"Ïarap ïa ngi\" ki pyrta.",
      "2. Jingshai sngi wan khyngngoid ï'u paid u Blei katba,\nKi nangja'm ban jop ïa ka thma;\nSoitan u ïaleh jur hynrei Trai u ïai ap,\nUn synran un don ryngkat.",
      "3. Da jingrisa jingkmen bad jingrwai bathiang eh,\nNongshun la dem ha jingïaleh;\nHaduh ba paid bynriew ka jingpynim kin ïoh,\nNongsiewspah kin rwai ïaroh.",
      "4. To ieng joit bad to panpoh ïa la ki syngkai,\nPynbna ïa ka khubor u Trai;\nBa baroh kin sngew ïa ka khubor khlem sepei,\nÏa jingwan Hima u Blei."
    ],
    chorus: "Ka Hima u Blei la nangwan khie ïathuh,\nLama burom Blei rah pynbna ruh;\nPyrthei kan ïohpdiang kum duriaw b'la tap bad shlei,\nKi umbah ka burom Blei."
  },
  {
    id: "a-trai-to-bat-skhem",
    title: "(R-55) A Trai To Bat Skhem",
    number: 53,
    verses: [
      "1. A! Trai ïarap ba ngan ïeng skhem ha lynti jingshisha,\nŤarap ngan bat skhem la ki kular da shisha;\nHa pyrthei jingjynjar, jinglanot ai ngan shah sngewbha,\nShi jingim ngan ïaroh i'u Trai Halleliwia.",
      "2. Nga ïohi jinghiar mynsiem, bad ka jingngeit ka nang tlor,\nPyrthei ring n'u Khrist sha ki lat lat ba shukor;\nKa doh pop ba shukor bad ka jingtlot ka pynduh bor,\nNgan ïaineh skhem tang ha me A! Trai badonbor.",
      "3. Ha ki erïong artatien bad ki jingduh jingkyrmen,\nNga sngew ym don jaka ïa lade ban rich tngen;\nKi jingring pah ka pyrthei bad ki lyoh dum kiba rben,\nTrai ïarap ngan ïeng skhem h'u Mynsiem ngan shad kmen.",
      "4. Nga dei ban ïohi kham jngai ïa ki rong jong ka pyrthei,\nKiba pynjot ei ïa ki mynsiem ba riewblei;\nNga donkam eh ban tip janai ïa ki ain jong u Blei,\nBa ngan ïoh lait na ka jingtim ba sngew shyrkhei."
    ],
    chorus: "A! Trai to batskhem,\nNgan nym phai dien shuh ha lynti ka jingbymhok;\nLa jynjar ki ker sawdong bad jingring pah ka pyrthei,\nLa jia katba jia A! Trai ïa nga to bat skhem."
  },
  {
    id: "ngin-sa-iohi-ia-u-syiem",
    title: "(R-56) Ngin Sa Ïohi Ïa U Syiem",
    number: 54,
    verses: [
      "1. La ngi ïaid bunsien ha lynti ba sngewtriem,\nNgin sa ïohi ïa u Syiem;\nHa step b'la kyrkhu ï'u lyoh yn beh d'u Syiem,\nNgin sa ïohi ïa u Syiem.",
      "2. Hadien jingpang kordit bad jingtrei shitom,\nNgin sa ïohi ïa u Syiem;\nNgin ïoh jingkmen jingkyrkhu junom junom,\nNgin sa ïohi ïa u Syiem.",
      "3. Hadien b'la jop nongshun ha jingïaleh thma,\nNgin sa ïohi ïa u Syiem;\nHadien b'la wai jingïaleh bad la sep sngi,\nNgin sa ïohi ïa u Syiem.",
      "4. Hangta bad kiba ieit ba la leit shuwa,\nNgin sa ïohi ïa u Syiem;\nJingsngewsih la wai harud ki um babha,\nNgin sa ïohi ïa u Syiem."
    ],
    chorus: "Ngin sa ïohi ïa u Syiem,\nNgin ïa rwai shisien ka sngi;\nSawdong ka khet ngin lum ha khmat jong u Syiem,\nNgin sa ïohi ïa u Syiem."
  },
  {
    id: "nga-don-u-lok",
    title: "(R-57) Nga Don U Lok",
    number: 55,
    verses: [
      "1. Nga don u lok uba wan wad ïa nga,\nHa ki dew duriaw nga la long jngai;\nSha la kut jingieit un ïalam ïa nga,\nNaduh kata ka jingsuk un ai.",
      "2. O! katno ka mynsiem ka la kmen jur,\nO! katno u long u lok jong nga;\nDap da jingkyrkhu bad jingsngewlem jur,\nO! katno u ieit, u ri ïa nga.",
      "3. Nga don u lok u bym ieh da lei lei,\nUn sumar ïa nga da la ka bor;\nShngaiñ ha ka ksangti jingieit un kdup ei,\nMan la ka khyllipmat bad ka por."
    ],
    chorus: "Ïaroh, ïaroh Khrist Nongpynim jong nga,\nNgan rwai bad ïaroh da ki jingrwai thymmai;\nÏaroh, ïaroh, ngan ïai ïaroh ïa u,\nHaba khmat kin i ïa u lem bad riewkhuid."
  },
  {
    id: "ko-jisu-nga-la-kular",
    title: "(R-60) Ko Jisu Nga La Kular",
    number: 56,
    verses: [
      "1. Ko Jisu nga la kular,\nÏa me ban shakri bha;\nBrabor long hajan ïa nga,\nTrai jong nga, lok jong nga.\nNgan nym sheptieng ïa ka thma,\nLada me don bad nga;\nLane ngan nym bakla lad,\nLada men btin ïa nga.",
      "2. Ai ngan sngew me jan ïa nga,\nPyrthei ka jan shisha;\nNga, nga peit ki pynthaba,\nJingpynshoi wan ha nga.",
      "3. Nongshun u jan man ka sngi,\nU ker sawdong ïa nga;\nJisu, wan shajan sha nga,\nNa pop to da ïa nga.",
      "4. Ko Jisu me la kular,\nÏa kiba bud ïa me;\nHa ka burom ba men don,\nKi ruh kin long bad Me.\nKo Jisu, nga la kular,\nBa ngan shakri shisha;\nA! ai ba ngan bud ïa Me,\nTrai jong nga, lok jong nga."
    ]
  },
  {
    id: "man-ba-nga-jam",
    title: "(R-61) Man Ba Nga Ja'm.",
    number: 57,
    verses: [
      "1. Manba nga ja' m, Nongpynim u ïaid ha shwa,\nDa kti baieit, u lam lynti ïa nga;\nNga pasiaw ha mynsiem nga ieit ïa u hi,\nJingkmen ban ïaid bad u man ka sngi.",
      "2. Don ki por ba jingngeit jong nga ka nang tlot,\nHa shwa jong nga nga i, ïa ka riat bah,\nNga phai bad peit tang ha la u Trai jong nga,\nNga sngewkhlain, u don hajan jong nga.",
      "3. Ngan shu shaniah h'u Blei la jia katba jia,\nJingim bymjukut ka don bad u hi;\nU bat u shabi ban plie ïa ka lynti,\nBa lam sha ka ri jingkular hi."
    ],
    chorus: "Manba nga ja' m, nga tip u sumar ïa nga,\nShaba kham jrong, un ïalam ruh ïa nga;\nKan poi ka sngi ba jingja'm khatduh ngan ja'm\nManba nga ja' m, ngan poi sha ïïng kham jan."
  },
  {
    id: "katno-thiang-ban-ngeit",
    title: "(R-62) Katno Thiang Ban Ngeit",
    number: 58,
    verses: [
      "1. Katno thiang ban ngeit h'u Jisu,\nBan pdiang ïa ktien jong u Trai;\nTang ban shaniah ha jingkular,\nBan tip, \"Kumta ong u Trai.\"",
      "2. Katno thiang ban ngeit h'u Jisu,\nShaniah ha snam ban saitkhuid;\nDa jingngeit ban pynngam ïa nga,\nHapoh ka bor ban sait khuid.",
      "3. Hoid ka thiang ban ngeit h'u Jisu,\nNa pop ban ïoh jingpyllait;\nTang ban ïoh pdiang na u Jisu,\nJingim, jingkmen, jingjahthait.",
      "4. Nga sngewkmen nga nang ban shaniah,\nH'u Khrist Nongpynim jong nga;\nNga tip ba me long lem bad nga,\nMen shong lem ha la karta."
    ],
    chorus: "Jisu, Jisu, nga ngeit ha u,\nNga la pynshisha ïa u;\nJisu, Jisu, uba ieit eh,\nA! ban ngeit shuh shuh ïa u."
  },
  {
    id: "o-nga-sngewkmen",
    title: "O! Nga Sngewkmen",
    number: 59,
    verses: [
      "1. Manba nga jàm manba nga ja'm Jisu u tip ïa nga,\nU long u lok bajan tam eh ban i'u para;\nLa ngam ïohi hynrei nga tip u ha syndah jong nga,\nManba nga jàm, Jisu u tip ïa nga.",
      "2. Hapdeng jingeh ne diengpynkiang ba wit ba kah lynti,\nKynrad u tip bad u sharai miet la bad sngi;\nDohnud b'la mong dei tang ma u, uba sopspain shisha,\nManba nga jàm Jisu u tip ïa nga."
    ],
    chorus: "O! nga sngewkmen ban don bad u, (2)\nO! nga sngewkmen ban don bad u Jisu jong nga;\nLa slem ka jingleit nga hangne nga tip ngam long marwei,\nManba nga jàm Jisu u tip ïa nga."
  },
  {
    id: "khlem-ma-u",
    title: "(R-63) Khlem Ma U",
    number: 60,
    verses: [
      "1. Khlem ma u ngam lah leh ei ei,\nKhlem ma u ngan shu ïap ei;\nKhlem ma u ngan shu shah rong shisha,\nKum ka lieng khlem u boitha.",
      "2. Khlem ma u ngan ïap da shisha,\nKhlem ma u ngan shah teh mraw;\nKhlem ma u, ngam lah ban im shisha,\nHynrei bad u, nga im mynta."
    ],
    chorus: "Jisu, O! Jisu:\nPhi tip ïa u shisha?\nPhim beh ïa u mynta?\nO! Jisu, O! Jisu,\nKhlem ma u, ngan ïap da shisha."
  },
  {
    id: "ngi-long-ki-shipai",
    title: "Ngi Long Ki Shipai",
    number: 61,
    verses: [
      "1. Ngi long ki shipai u Khrist u Kynrad,\nNgin ïeng ban ïaleh pyrshah ïa u mrad;\nLama ka jingshisha ngin rah shaduh neng,\nKhrist u long u nongïalam uba khraw eh.",
      "2. Waitlam u Mynsiem ka long ktien u Blei,\nStieh jong ka jingngeit kaba da shlei;\nPansngiat jingpynim bad jaiñkup ka hok,\nNgin tur sha ka thma khlem riah lane buhrieh.",
      "3. Wat la u nongshun u pynshoi borbah,\nH'u Khrist u Kynrad dohnud ngin pynskhem;\nNgin nym shym phaidien la jia katba jia,\nU Jisu Kynrad un synran ïa ngi."
    ],
    chorus: "Shaphrang phi shipai Khristan to ïatur,\nDa bor u Mynsiem bakhuid ngin tur shlur;\nLa pyrthei bad Soitan kin ïa pyrshah,\nHa u Jisu ngin ïoh jingjop kaba khraw."
  },
  {
    id: "naduh-ba-nga-peit-hu-jisu",
    title: "(R-64) Naduh Ba Nga Peit H'u Jisu",
    number: 62,
    verses: [
      "1. Ka jinglong tlot baroh ka la her noh shajngai,\nNaduh ba nga peit h'u Jisu;\nMynta nga la ïohpdiang jingshai sngi ba phyrnai,\nNaduh ba nga peit h'u Jisu.",
      "2. Ka pop bad jingsheptieng ki la hap noh baroh,\nNaduh ba nga peit h'u Jisu;\nUmat jong jingsngewsih ki la kylla jingrwai,\nNaduh ba nga peit h'u Jisu.",
      "3. Lyoh dum kiba wan tap ki la pra noh baroh,\nNaduh ba nga peit h'u Jisu;\nKa jingshai kaba khraw ka tyngshaiñ ha nga,\nNaduh ba nga peit h'u Jisu.",
      "4. Ka lynti b'nga ïaid ka nang shai man ka sngi,\nNaduh ba nga peit h'u Jisu;\nNga tip u don hajan ban btin lynti ïa nga,\nNaduh ba nga peit h'u Jisu."
    ],
    chorus: "Naduh ba nga peit h'u Jisu,\nNaduh ba nga peit h'u Jisu;\nJingkmen ka tuid kum ka wah ha mynsiem jong nga,\nNaduh ba nga peit h'u Jisu."
  },
  {
    id: "to-long-u-nongkit-khubor",
    title: "(R-65) To Long U Nongkit Khubor",
    number: 63,
    verses: [
      "1. Long u nongkit khubor h'u lum bad u them,\nlathuh baroh kylleng u Jisu u long;\nLong u nongkit khubor h'u lum bad u them,\nJisu la wan pynim.",
      "2. To rwai da jingrisa bad jingkmen kyrhai,\nlathuh baroh kylleng u Jisu u long;\nMane bad kyntiew burom ï'u Blei u Trai,\nJisu la wan pynim.",
      "3. Map ei ki pop baroh b'la leh da u briew,\nlathuh baroh kylleng u Jisu u long;\nSnam b'la jaw ha diengphna ka bor ban pynkhiah,\nJisu la wan pynim."
    ],
    chorus: "To khie, to khie ïathuh kylleng pyrthei,\nTo khie, to khie ïathuh kylleng pyrthei;\nKhrist Jisu u la wan ban pynim nongpop,\nKhrist la wan pynim."
  },
  {
    id: "sngewbha-to-rwai-brabor",
    title: "(R-66) Sngewbha To Rwai Brabor",
    number: 64,
    verses: [
      "1. To rwai phin bna baroh ka pyrthei,\nRwai, sngewbha to rwai brabor;\nBad kit kjat ha lynti u Blei,\nRwai, sngewbha to rwai brabor.",
      "2. La ki wan lyoh dum bad jingsngewsih,\nRwai, sngewbha to rwai brabor;\nHa Jisu kular jingshai ngin i,\nRwai, sngewbha to rwai brabor.",
      "3. Shaphrang ngin ïatur da ka jingngeit,\nRwai, sngewbha to rwai brabor;\nPynbna ba u Jisu u ieit,\nRwai, sngewbha to rwai brabor."
    ],
    chorus: "Rwai, sngewbha to rwai brabor,\nRwai, sngewbha to rwai brabor;\nKhatduh ngin rwai ha ka khet burom,\nRwai, sngewbha to rwai brabor."
  },
  {
    id: "wan-sha-ka-umpohliew",
    title: "(R-67) Wan Sha Ka Umpohliew",
    number: 65,
    verses: [
      "1. Wan sha ka umpohliew snam kordor,\nKaba tuid na Kalbari;\nHangta yn sait khuid ki pop baroh,\nPhin long bakhuid bajanai.",
      "2. Ï'u nongpop b'la duna bor bah,\nU Jisu u tyrwa ei;\nKdiat kti da jingngeit dohnud baroh,\nPhin sngew long khun u Blei.",
      "3. Shaei phin phet na ka pop bakhia?\nDon ki lad kiba pynim;\nTang ka snam bakhuid u Khrist u Trai,\nKa lah pynkhuid mynsiem."
    ],
    chorus: "Wan shaw'n sait khuid ha ka snam,\nKa snam b'la tuid na Kalbari;\nWan shaw'n sait khuid ha ka snam,\nPhin long bakhuid bajanai."
  },
  {
    id: "nga-la-shem-u-lok-ba-shisha",
    title: "(R-70) Nga La Shem U Lok Ba Shisha",
    number: 66,
    verses: [
      "1. Nga shem u lok ba shisha,\nHa ki jingdonkam jong nga;\nJisu ba kordor jong nga.\nDa ki khmat jong ka jingngeit,\nBarobor ha u nga peit,\nNga shem u ïai don ryngkat.",
      "2. U la map ki pop jong nga,\nU la pynkhuid ruh ïa nga;\nJisu ba kordor jong nga.\nÏa mynsiem bajot jong nga,\nU ai jingsuk bad jingbha;\nU ïai kyrkhu ruh ïa nga.",
      "3. Nga la shem ka jingjahthait.\nNa jingkit khia babun jait;\nJisu ba kordor jong nga.\nHaba nga shem shitom jur,\nU ïarap bad u pynshlur,\nJisu nongïarap jong nga.",
      "4. la nga u la lah pynkhreh.\nKa ïng ba ngan leit shong neh;\nJisu ba kordor jong nga.\nYnda wai la ka jingim,\nNgan leit shong bad Nongpynim;\nNgan shongneh junom hangta."
    ],
    chorus: "Halleliwïa nga ïaid ryngkat bad u Jisu,\nBad u Jisu, bad u Jisu;\nBad Jisu nga suk nga shngain bad ngam tieng ei ei,\nNamar nga tip ngam long shuh marwei."
  },
  {
    id: "jisu-jong-nga-nga-ieit-ia-me",
    title: "(R-71) Jisu Jong Nga Nga Ieit Ïa Me.",
    number: 67,
    verses: [
      "1. Nga ieit ia me Jisu,\nMe long u jong nga;\nNamar jong me nga iehnoh ïa jingthala,\nJisu me la long u Nongpynim jong nga,\nNga ieit ïa me, ieit eh tang ïa me shisha.",
      "2. Nga ieit ïa me namar,\nBa me la ieit shwa,\nMe la ïap namar jong nga halor diengphna;\nBad me la phong pansngiat shiah namar jong nga,\nNga ieit ïa me, ieit eh tang ïa me shisha.",
      "3. Ngan ieit ha ka jingim,\nIeit ha jingïap ruh;\nNgan ïaroh ïa me katba dangim kumjuh,\nBad ha ka por ba nga jan ïap, ngan pyrta,\nNga ieit ïa me, ieit eh tang ïa me shisha.",
      "4. Ha kata hi ka ri,\nJingsuk kan nym wai;\nNgan dem bad ngan mane ïa me, Jisu Trai;\nNgan rwai bad ķa pansngiat ha ka khlieh jong nga,\nNga ieit ïa me, ieit eh tang ïa me shisha."
    ]
  },
  {
    id: "rwai-ia-jingieit-u-jisu",
    title: "(R-72) Rwai Ïa Jingieit U Jisu",
    number: 68,
    verses: [
      "1. Rwai, O! rwai, ïa khubor babha,\nÏa jingieit to rwai kylleng;\nRwai shaphang ka burom jong u,\nBad ki b'la siewspah haneng.",
      "2. Rwai ïa ka jingieit ba kordor,\nÏathuh kumno Khrist u ïap;\nAi sur ba thiang kan ring nongpop,\nHajan Nongpynim b'la ïap.",
      "3. Phi b'la siewspah rwai ïa Gospel,\nBunsien bunsien ïa ka rwai;\nHaduh ba baroh ki bynriew,\nKin ïasoh lang ban ïa rwai."
    ],
    chorus: "Rwai, O! rwai ïa jingieit u Jisu,\nKylleng pynbna da ïaroh;\nRwai ïa ka khubor ba phylla,\nHaduh ba kin sngew baroh."
  },
  {
    id: "lada-nga-dei-ban-shakri",
    title: "(R-74) Lada Nga Dei Ban Shakri",
    number: 69,
    verses: [
      "1. Lada nga dei ban shakri baroh ki sngi jong nga,\nNgan shakri i'u Jisu baroh shirta;\nNga la shem tang u shisha ba lah pynhun ïa nga,\nBad pyllait ïa nga na pop jingthala.",
      "2. Lada phi wad jingpynim, peit tang h'u Jisu hi,\nNamar u lah ban ai jingim ïa phi;\nPlie jingkhang dohnud jong phi, to plie ha u mynta,\nShah Jisu ban saitkhuid ïa phi mynta."
    ],
    chorus: "Dei u Jisu tang u marwei,\nJisu, u Khun u Blei;\nDei u Jisu b'la pyllait ïa nga.\nDei u Jisu Khrist un wan namar jong nga."
  },
  {
    id: "pyndap-khuri-jong-nga-trai",
    title: "(R-75) Pyndap Khuri Jong Nga Trai",
    number: 70,
    verses: [
      "1. Kum ka kynthei ha ka pung, nga ruh nga wad,\nKiei kiei bym ai jinghun;\nNga sngew Nongpynim u kren ha nga,\n\"Tong na ka wah ka bym lah rngad shisha.\"",
      "2. Ki don bun ha ka pyrthei kiba wad Trai,\nJingsngewbha pyrthei ba ka ai;\nHynrei ngam lah nujor bad spah bneng,\nBa nga la shem h'u Jisu Khrist u Trai.",
      "3. Para, lada ka pyrthei ka ai ha phi,\nIehnoh, wat la phi kwah ïa ki;\nKa bha ba shah thngan ha la ka sngi,\nJisu u Trai, un wan pyllait ïa phi."
    ],
    chorus: "Pyndap khuri, nga rah ïa ka, Trai,\nAi jinghun mynsiem ba sliang jong nga;\nDa u kpu bneng bsa haduh ngan da kdang bha,\nTo pyndap, bad to pynlong khuid ïa nga."
  },
  {
    id: "sngewnguh-trai",
    title: "(R-76) Sngewnguh Trai",
    number: 71,
    verses: [
      "1. Ka pyrthei ha pop bad ha jinglehrain,\nKi briew ki jot, bad Jisu u wan;\nU bah ki pop jong nga ha Kalbari,\nSnam jong u la jaw ban dam pop jong ngi.",
      "2. Me wan sha pyrthei na ka khet na bneng,\nMe kloi ban im bad me kloi ban ïap;\nKi jingpang jingkhrew jong nga me shimti,\nNgan ieit ïa me Jisu, tang ïa me hi."
    ],
    chorus: "Sngewnguh Trai, me pyllait ïa nga,\nSngewnguh Trai, me sait phar ïa nga;\nSngewnguh Trai ba me la aiei,\nJingim bymjukut badap bashlei."
  },
  {
    id: "shuh-shuh-kat-nangiaid",
    title: "Shuh Shuh Kat Nangïaid",
    number: 72,
    verses: [
      "1. Jingpynshoi jingtynjuh ngi sngewphylla,\nBalei ki neh kein baroh shisngi?\nKatba kiwei wat la ha jingbakla!\nYm don jingpynwit la jan bad ngi.",
      "2. Bunsien ngi sngewphylla balei hap ïaid,\nLyngba ki riat bah jingim ba thait;\nKatba kiwei pat ki im suk kynjai,\nNgi ïa ki b'la jah ngi sngewkhuslai.",
      "3. Shen bad u Trai nongpynim ïa baroh,\nNgin poi ha la ïng lyndet ki lyoh;\nNgin ïashem bad ki b'la leit shwa ïa ngi,\nNgin nang sngewthuh kat nangïaid ki sngi."
    ],
    chorus: "Shuh shuh kat nangïaid, ngin kham tip ïa ka,\nShuh shuh kat nangïaid, ngin tip khambha;\nShadkmen ko para, im ha ka jingshai,\nKatba por nangïaid, ngin nang kham shai."
  },
  {
    id: "ki-khmat-jong-u-ha-ka-sim-ing",
    title: "(R-79) Ki Khmat Jong U Ha Ka Sim Ing.",
    number: 73,
    verses: [
      "1. Balei ngan duh jingkyrmen, balei syrngiew ki wan,\nBalei mynsiem sngew kynjah, ban kwah ïa ka ïng bneng;\nJisu u long ka bynta, u lok u ba shisha,\nKi khmat jong u ha ka sim ïng, bad nga tip u peit ïa nga.",
      "2. Wat ai mynsiem kan pisa, nga sngew ktien ieit u Trai,\nShaniah ha jingbha jong u, jingtieng baroh kin wai;\nÏa nga un ïalam lynti, tang shija'm ngan ïohi,\nKi khmat jong u ha ka sim ïng, bad nga tip u peit ïa nga.",
      "3. Haba jingpynshoi ki wan, lyoh badum u tap ruh,\nSngewbha ki kylla sngewsih, jingkyrmen ruh la duh;\nNga tur kham jan shu Jisu, u la pyllait ïa nga,\nKi khmat jong u ha ka sim ïng, bad nga tip u peit ïa nga."
    ],
    chorus: "Nga rwai namar nga sngewkmen,\nNga rwai ba nga sngewbha;\nKi khmat jong u ha ka sim ïng,\nBad nga tip u peit ïa nga."
  },
  {
    id: "u-ktah-ia-nga",
    title: "(R-81) U Ktah Ïa Nga",
    number: 74,
    verses: [
      "1. B'la ban da jingkit kaba khia,\nDa ka pop bad jinglehraifñ;\nKa kti u Trai ka ktah ïa nga,\nMynta ngam long shuh kum mynshuwa.",
      "2. Naduh ba nga la shem ïa u,\nNaduh ba u map ïa nga;\nNgam sangeh ban ïaroh ïa u,\nShaduh ki bymjukut ngan pyrta."
    ],
    chorus: "Trai u ktah, u ktah ïa nga,\nO! jingkmen shlei hapoh jong nga;\nJingjia phylla ba jia ha nga,\nU ktah bad pynlong khuid ïa nga."
  },
  {
    id: "nga-ieit-iu-jisu-ruh",
    title: "(R-82). Nga leit Ï'u Jisu Ruh",
    number: 75,
    verses: [
      "1. Jisu dei u Syiem bneng, u ieit ïa nga,\nNgan ïaroh tang ïa u, jia katba jia;\nNgan snoh ha u ngan ïoh jingkyrkhu ruh,\nNga ieit ï'u Jisu ruh.",
      "2. Ngan ïaid bad u brabor, ngan ïoh jingshai;\nNgan leh ka mon jong u shadien ngam phai;\nNgan duwai ba ngan leh mon jong u ruh,\nNga ieit i'u Jisu ruh.",
      "3. Nga sngewbha ban shakri ki lok jong nga,\nJingieit ïa ki kam kut, u Trai un da;\nJingrwai ïaroh ngan rwai, kin nym kut shuh,\nNga ieit ï'u Jisu ruh."
    ],
    chorus: "Nga ieit i'u Jisu,\nU ieit ïa nga;\nNgan ïathuh ha u mis\nHa baroh ba nga leh."
  },
  {
    id: "namar-u-im",
    title: "(R-83) Namar U Im",
    number: 76,
    verses: [
      "1. Blei phah ï'u Khun, ki khot u Jisu,\nU wan ban ieit, pynkhiah bad map;\nU im bad ïap ban siew ka kuna,\nJingtep suda hangta pynpaw Trai um shym ïap.",
      "2. Shisien ka sngi ngan ja'm ïa ka wah,\nThma jingim ngan jop baroh phar;\nKumba jingïap ka ai jingjop phar,\nNgan i jingshai phyrnai ngan tip u Trai u im."
    ],
    chorus: "Namar u im, nga lah ban im lashai,\nNamar u im, jingtieng la wai;\nNamar nga tip u bat ka lawei,\nJingim kan long kordor namar u Trai u im."
  },
  {
    id: "u-wan-pynim",
    title: "(R-84) U Wan Pynim",
    number: 77,
    verses: [
      "1. Nga la ngop jylliew ha pop,\nNga sngew ngam lah lait shuh;\nNga, nga la sngew lanot khop,\nLa ngop ngam lah mih shuh.\nBad u Trai jong ka duriaw,\nU ïohsngew nga dang im;\nU sei ïa nga na duriaw,\nNga la lait im.",
      "2. La dohnud nga ai ha u,\nNgan snoh junom ha u;\nNgan ïai im ryngkat bad u,\nŤai rwai ïaroh ïa u.\nJingieit bah bad ba shisha,\nDa mynsiem ruh ngan rwai;\nShakri da jingieit shisha,\nÏa la u Trai.",
      "3. To peit ko mynsiem bapli,\nJisu un pynim ei;\nDa jingieit un rah ïa phi,\nNa ka dew ba shyrkhei.\nU long u Trai ka duriaw,\nDew kan kohnguh ïa u,\nUn pynim na ka duriaw,\nNgeit mynta hi."
    ],
    chorus: "U wan pynim, pynim ïa nga,\nHaba nga ngam don lad shuh,\nU wan pynim."
  },
  {
    id: "la-thoh-ia-kyrteng-jong-nga",
    title: "(R-85) La Thoh Ïa Kyrteng Jong Nga",
    number: 78,
    verses: [
      "1. Trai ngam suidñiew ïa ka spah,\nLymne ksiar ne rupa;\nNga kham lah ban leit sha bneng,\nNgan leit sha ïng i Pa.\nHa ka hima ka Kitab,\nBa i-tynnad ki sla;\nlathuh ko Jisu jong nga,\nLa thoh kyrteng ïa nga ?",
      "2. Trai, ki pop babun jong nga,\nKum u shyiap ka duriaw;\nSnam jong me ko nongpynim,\nÏa nga ka la jop thiaw.\nÏa kular jong me la thoh,\nHa ki dak ba kordor;\n\"La ki pop ki saw hain hain,\nNgan pynlieh kum ka for.\"",
      "3. O! ka shnong ba i-tynnad,\nBad ki ïng ba phyrnai;\nBad ki riewkhuid ha burom,\nHa jaiñkup ba janai.\nHangta pop kam lah ban rung,\nBan pynjot ïa jingbha;\nHa kaba Angel ki ap,\nLa thoh ne em ïa nga ?"
    ],
    chorus: "La thoh kyrteng ïa nga ?\nHa ka sla ba lich bha?\nHa kitab jong ka hima,\nLa thoh kyrteng ïa nga."
  },
  {
    id: "mynsiem-bakhuid-la-wan",
    title: "(R-88) Mynsiem Bakhuid La Wan",
    number: 79,
    verses: [
      "1. Ha synran mynbarim, Jisu u la ïalap\nÏa u mynsiem bakhuid ba ha ngi un pyndap;\nNa ïng wat mih u ong, kular u Kpa to ap,\nMynsiem Bakhuid un wan.",
      "2. Mynsiem Bakhuid u Blei, long ka bor ban ïalap,\nJingshlur khlem wai u ai, da kular ban ïarap;\nU kyrsiew ïa baroh, kiba ha pop thiah ïap,\nMynsiem Bakhuid la wan.",
      "3. Mynsiem ka jingkular, tang ïa me hi ngi ap,\nDa kohnguh ka hukum, u Khrist uba la ïap;\nJingieit, jingstad bad bor, ha ngi ruh to pyndap,\nMynsiem Bakhuid la wan."
    ],
    chorus: "Mynsiem bakhuid la wan, nongpyntngen ka Balang,\nÏa dohnud ba la lwet, jinghun ban ai u nang;\nKhubor thiang la ïalap, ha pyrthei baroh lang,\nMynsiem Bakhuid la wan."
  },
  {
    id: "phi-la-ioh-ne-em-ia-u-mynsiem",
    title: "(R-89) Phi La Ïoh Ne Em Ïa U Mynsiem",
    number: 80,
    verses: [
      "1. Phi la ïoh ne em ïa u Mynsiem ?\nPhi la kloi ne em ban pdiang ïau?\nKatba Jisu u dang isnei,\nPhi la kloi ne em ban bud ïa u ?",
      "2. Phi ïohi ne em ïa u Jisu ?\nBa u la shah halor ka diengphna;\nLa bynthiew bad lehbein ïa u,\nBa u kit baroh ki pop jong ngi.",
      "3. U dakaid, u ong ha u Jisu,\n\"A! kynrad isnei, kynmaw ïa nga\"\nJisu u ong, \"Ïa me la map,\nMen long lem bad nga ha Paradais.\"",
      "4. Kane dei ka por jong u Mynsiem,\nU Mynsiem u pynkynduh ïa phi;\nU ong, \"Kylla noh kaba mut,\"\nBan lait ka dujok ba sngewshyrkhei"
    ]
  },
  {
    id: "tang-mynsiem-bakhuid-jong-me-trai",
    title: "(R-90) Tang Mynsiem Bakhuid Jong Me Trai",
    number: 81,
    verses: [
      "1. Mynsiem jong me Trai u lah ban,\nPynphai na pop ïa ngi;\nBor jong u ka lah ban pynkhuid,\nBad ban ri khuid ïa ngi.",
      "2. Mynsiem jong me, A! Trai, u lah,\nB'un ai jingieit ïa ngi;\nBor jong u hapoh ka mynsiem,\nKan pynshit rhem ïa ngi.",
      "3. Mynsiem jong me u lah ban ai,\nKa bor halor jong ngi;\nKtien jong u kan pyntngen ïa ngi,\nHa ki jynjar jong ngi.",
      "4. Mynsiem jong me u lah ban ai,\nKa jingaiei jong me;\nKatba ngi ap, ko mynsiem wan,\nHa ka bor bah jong me."
    ],
    chorus: "A! Mynsiem Bakhuid to wan,\nHapdeng jong ngi mynta;\nPynkhuid ïa ki dohnud jong ngi,\nTo ai bor ruh mynta hi."
  },
  {
    id: "bud-ia-nga",
    title: "(R-92) Bud Ïa Nga",
    number: 82,
    verses: [
      "1. Nga ïaid marwei ha ka lynti ym don ba peit ïa nga,\nJingkit ba khia halor ka met, ka pynjynjar ïa nga;\nNga ju ïathuh h'u Jisu, briew ïa nga ki i-bein,\nNangta nga sngew u kren da sur ba jem.\n\"Ki kjat jong nga ki sakhrai ha lynti Kalbari,\nKa diengphna ruh kaba khia, nga ur, ka ban ïa nga,\nlaineh phi pilgrim bathait, ka step phyrnai ngan i,\nBah ka diengphna bad bud najan jong nga.\"",
      "2. \"Nga trei minot namar Jisu,\" nga ju sarong bad ong,\n\"Nga khein duh bun kiei kiei ban ïaid lynti bakhim;\nNga iehnoh nam bad spah pyrthei, u jong me ba ngan long;\nNga sngew u kren da sur ba jem ïa nga.\n\"Nga iehnoh ka khet burom, nga ñiew ba la duh ei,\nKi kti la sah da u prek, ha diengphna ba shyrkhei;\nMynta ngin ïaid ha lynti, phi md ïaid lang bad nga,\nBah ka diengphna bad bud najan jong nga.\"",
      "3. O! Jisu lada nga ïap noh marwei ha ri nongwei,\nNgam kwah ei ei tang ka jingieit, tang katta nga dawa,\n\"Ym don jingieit kaba kham khraw ban ïap namar u lok,\"\nKine ki ktien ba jem u kren ha nga.\n\"Lada shi khuri ka um, nga ai ha kti jong phi,\nBad tang shi khuri ka um, kata nga pan na phi\"\nLada jingiap da jingim kin i burom jong me,\nNgan bah diengphna bad bud najan jong me."
    ]
  },
  {
    id: "o-jingkmen-bathiang-baphylla",
    title: "(R-93) O! Jingkmen Bathiang Baphylla",
    number: 83,
    verses: [
      "1. Don jingphyrnai ha mynsiem jong nga,\nPhyrnai i'u mawkordor;\nJingshai pyrthei kam lah sam lyngba,\nJisu jingshai bakor.",
      "2. Don sur bathiang ha mynsiem jong nga,\nSur kynud ïa l'u Trai;\nO! hangta Jisu baieit jong nga,\nUn sngew jingrwai thymmai.",
      "3. Don jingthiang hapoh mynsiem jong nga,\nHaba Jisu u jan;\nO! katno suk ka mynsiem jong nga,\nBa jingaiei la wan.",
      "4. Don jingkmen hapoh mynsiem jong nga,\nJingkmen ïaroh ba rhem;\nKa jingkyrkhu b'u la ai ha nga,\nB'u la pynkhreh ha bneng."
    ],
    chorus: "O! jingkmen bathiang baphylla,\nKa dap ka shlei ha mynsiem jong nga;\nKa tuid jingkyrkhu na Kalbari,\nHapoh mynsiem man ka sngi."
  },
  {
    id: "pynlong-ia-nga-trai-ka-jingkyrkhu",
    title: "(R-94) Pynlong Ïa Nga Trai Ka Jingkyrkhu",
    number: 84,
    verses: [
      "1. Ha ka jingim hangne ha ka pyrthei,\nDon bun kiba shem lanot;\nRah jingshai ha kaba jingdum ka shlei,\nPynbha ïa kiba la jot.",
      "2. Ťathuh ïa ka jingieit u Trai jong phi,\nBad ïa ka bor jong u hi;\nKin ngeit lada uba bha phin pyn-i,\nBa phi im man la ka sngi.",
      "3. Ai kumba la ai u Kynrad ïa phi,\nleit kumba u ieit ïa phi;\nLong u nongïarap ïa kiba rangli,\nLeh hok ha ka kam jong phi."
    ],
    chorus: "Pynlong shisha ïa nga ka jingkyrkhu,\nJisu un ïoh burom na nga hudtidegavan't\nAi ngan long jingkyrkhu, ko Nongpynim,\nJingkyrkhu ha uno uno myntaal"
  },
  {
    id: "un-ri-ia-nga",
    title: "(R-96) Un Ri Ïa Nga",
    number: 85,
    verses: [
      "1. Ha ka jaka kyntang jong u un ri ïa nga,\nNa jingkit bakhia ka pyrthei jingjynjar;\nHapoh ka jingtap isnei jong u ngan shongthait,\nla nga te Nongsiewspah un sumar.",
      "2. Ha ka jaka kyntang jong u un ri ïa nga,\nJingtyngshain ka burom jong u un pyni;\nUn tap ïa nga da ka jingshai kum ka jaiñkup,\nO! jingkmen ka dohnud kan sa mih."
    ],
    chorus: "Un ri ïa nga, un ri ïa nga,\nNa ka khuslai bad jingpynshoi un da ïa nga;\nUn ri ïa nga, un ri ïa nga,\nHa ka jaka kyntang jong u un ri ïa nga."
  },
  {
    id: "nga-donkam-eh-ia-me",
    title: "(R-100) Nga Donkam Eh Ïa Me",
    number: 86,
    verses: [
      "1. Nga donkam eh ïa me,\nMe u ba isnei, Trai;\nTo map ki pop jong nga,\nBa mynsiem kan suk jai.",
      "2. Nga donkam eh A! Blei,\nBad nga to shong ryngkat;\nJingpynshoi ki md bor,\nHaba me don ryngkat.",
      "3. Nga donkam eh ïa me,\nHaba pang to ïarap;\nWan kloi bad to shongsah,\nLymda kumta ngan ïap.",
      "4. Nga donkam eh ïa me,\nBan tip ïa mon jong me;\nHa nga Trai to pyndep,\nla ki kyntien jong me.",
      "5. Nga donkam eh ïa me,\nUba khuid bakhuid tam;\nShim ïa nga da shisha,\nKo Khun u Blei ba im."
    ],
    chorus: "Nga donkam, O! nga donkam,\nTrai ïa me nga donkam;\nTo kyrkhu ko Nongpynim,\nNga wan ha me."
  },
  {
    id: "trai-rah-ia-nga",
    title: "(R-103) Trai Rah Ïa Nga",
    number: 87,
    verses: [
      "1. Ban poi shatei shaba jrong tam,\nNgan kiew man ka sngi ngan ïaleh;\nNgan dwai katba shaphrang nga ja'm,\nTrai thiah ngan ïeng haba jrong tam.",
      "2. Mynsiem jong nga kam kwah ban shong,\nHapdeng jingma bad jingshaïong;\nLa lawei ban phet ruh kim treh,\nNga dwai ban lait na ki jingeh.",
      "3. Nga kwah ban im jingim riewblei,\nNgam dem h'u soitan da lei lei;\nJingngeit jong nga kan ïoh jingkmen,\nRiewkhuid ki rwai jingrwai kmen.",
      "4. Nga kwah ban poi shaba jrong tam,\nBan ïohi ka burom phyrnai;\nNgan dwai haduh ri bneng ngan shem,\nTrai lam ïa nga sha ri jingkmen."
    ],
    chorus: "Trai rah ïa nga bad ai ngan ïeng,\nDa jingngeit ha ki jaka bneng;\nJaka ba kham jrong nga la shem,\nTrai shah ngan ïeng ha ri jingkmen."
  },
  {
    id: "nga-long-jong-u-jisu",
    title: "(R-105) Nga Long Jong U Jisu",
    number: 88,
    verses: [
      "1. Jisu kynrad junom un ieit ïa nga,\nNa n'jinganiew kam lah pynkhlad ïa nga;\nU ïap ban siewspah la mynsiem jong nga,\nNga long jong u mynta.",
      "2. Shisien nga la hap h'u jingram ka pop,\nH'u u wan ban pyllait na ka pop;\nHalor ki jingtynjuh u ai jingjop,\nNga long jong u mynta.",
      "3. Jingkmen ka shlei ha ka mynsiem jong nga,\nBa Jisu u la pyllait im ïa nga;\nSnam ba kordor u pynmih ban siewspah,\nNga long jong u mynta."
    ],
    chorus: "Nga long u jong u Jisu,\nTrai u long jong nga;\nUm long u jong nga tang shipor,\nHynrei ha la karta."
  },
  {
    id: "rukom-ba-u-ieit",
    title: "(R-106) Rukom Ba U Ieit",
    number: 89,
    verses: [
      "1. Rukom ba u ieit, ka kham shai ïa ka sngi,\nAi jingkyrkhu ha lynti;\nRukom ba u ieit, ka jem hi kum ka lyer,\nKa beh sngewtynnad por miet.\nU long uba shun bakordor,\nNga hun bad Jisu barobor;\nRukom ba u ieit, ka ni jingkmen ïa nga,\nNamar jingieit poi sha nga.",
      "2. Rukom ba u ieit, ka jylliew kat duriaw,\nMynsiem jong u shong bad nga;\nRukom ba u ieit, ka iwbih kum synñiew,\nKa kham thiang shisha ha nga.\nJingsuk ha u la ai ha nga,\nJingsuk ha ai jingtngen shisha;\nH'u Jisu ngan snoh, nga aiti md baroh,\nBa u ieit ïa ngi baroh."
    ]
  },
  {
    id: "ha-u-mawsiang-ka-jaka-rieh",
    title: "(R-107) Ha U Mawsiang Ka Jaka Rieh",
    number: 90,
    verses: [
      "1. Jrong kum u lum la ki dew ki kyrmd,\nHa la u Kynrad la mynsiem ngan buh;\nMe pynjai jai duriaw bad ki erlong,\nMen buhrieh ïa nga ha la ka jingkah.",
      "2. Mynsiem ïaineh hadmd bakut bawai,\nShaniah ha la kular baskhem u Trai;\nRi ha ka kut jingieit jong u Jisu,\nHa u mawsiang ka jaka rieh jong u.",
      "3. Haba Jordan nga dei ban ïaid lyngba,\nU diengmd jong me un pyntngen ïa nga;\nSha lyndet ka wah sngi ka 'ïai phyrnai,\nHa u mawsiang ka jaka rieh jong nga."
    ],
    chorus: "Ri ïa nga, ri ïa nga,\nRi ïa nga, ri ïa nga;\nNa jingmynsow to da,\nH'u mawsiang jaka rieh jong u."
  },
  {
    id: "sngap-katno-thiang",
    title: "(R-108) Sngap Katno Thiang",
    number: 91,
    verses: [
      "1. Sngap katno thiang ki jingrwai,\nBa wan her na ri jingshai;\nNgin ïaroh ïa u Trai, Halleliwia,\nB'u la siewspah ïa ngi ha diengphna.",
      "2. Snam khun u Blei ka donbor,\nBan saitkhuid lieh kat ka for;\nWat ki pop b'la saw hain hain kum ka snam,\nBan long khun Blei la thied da ka dor.",
      "3. Nongpop mynta to wan noh,\nJingim bymjukut phin ïoh;\nHapdeng ar ki jingmut wat ïeng lyngngoh,\nJisu dang khot to wat pynalem shuh."
    ],
    chorus: "Ngin ïaroh Halleliwia,\nÏu khun baieit jong u kpa;\nNa burom bneng wan ban kynja doh,\nKa ram ka pyrthei u bah,\nNamar pop jong ngi u la wan ban shah,\nA! kordor long ka snam Kalbari."
  },
  {
    id: "ym-don-kyrteng-ba-kham-thiang",
    title: "Ym Don Kyrteng Ba Kham Thiang",
    number: 92,
    verses: [
      "1. Ym don kyrteng ba kham thiang eh,\nHa khyndew ne hapoh bneng;\nNadmd shwa ban kha b'la pynsleh,\nKum Khrist nongpynim haneng.",
      "2. Haba ïa u la sahnarphna,\nBa khlieh kyrteng ki da md;\nKhnang ba ngin tip bad i shynna,\nBan ieit ïa u junom md.",
      "3. Mynta ha khet u Kpa ha bneng,\nKhuslai jong ngi u pyllait;\nWat ha burom um klet u ïeng,\nNamar jong ngi ban rasaid.",
      "4. Kyrteng u Jisu ban nujor,\nYm don md pat da kumwei;\nKa bym ju kylla kut ki por,\nBa dap da ka jingatei."
    ],
    chorus: "Ngi ieit ban rwai ï'u Khrist u Syiem,\nBurom Jisu nongpynim;\nYm don kyntien thiang bad kham ieit,\nKat kyrteng jong u Jisu."
  },
  {
    id: "to-kmen-phi-kiba-sngur",
    title: "(R-111) To Kmen Phi Kiba Sngur",
    number: 93,
    verses: [
      "1. To kmen phi kiba sngur,\nTo kmen, aingmd bad rwai;\nKaweh la ka lama sha jrong,\nKa diengphna jong u Trai.",
      "2. Da ka ktien ba jem eh,\nKumba duriaw ka rwai;\nRwai jingrwai ha ki kpa ki ieit,\nKi Salm na mynhyndai.",
      "3. Lama jong phi to rah,\nTur sha jingïaleh hi;\nKum shipai ïaleh pyrshah jingdum,\nHadmd ban da mih sngi.",
      "4. Khutmd jingleit kan wai,\nKiba thait jingsuk kin shem;\nPilgrim kin poi sha ïng i Pa,\nHa shnong Jerusalem."
    ],
    chorus: "To kmen, to kmen,\nTo kmen, aingmd bad rwai."
  },
  {
    id: "to-ai-ngin-bud-ia-ki-dienjat",
    title: "(R-112) To Ai Ngin Bud Ïa Ki Dienjat",
    number: 94,
    verses: [
      "1. To ai ngin bud ïa ki dienjat Nongpynim,\nTo ngin ïai bud ï'u Nongpynim, u Syiem;\nNgin im rukom kumba ïa ngi u la ai,\nKatno sngewthiang ki jingrwai ba ngi rwai.",
      "2. Snoh skhem ha u, u ban ïalam beit ïa phi,\nHaba jingpynshoi ki wan pynthaba;\nShaniah skhem da ksangti donbor un ïalam,\nKatno thiang kyrteng ba ngi ïai pyrta.",
      "3. Ïaid da jingieit ha lynti u Nongpynim,\nShaphrang ïaid shaphrang ngin bud un ïalam,\nHaba ngin poi ha khet ksiar Nongpynim Syiem,\nKatno kmen ngin ïai long bad u hangta."
    ],
    chorus: "Katno sngewhun ban bud ïa ki dienjat Nongpynim,\nÏaid ha ka jingshai, ïaid ha ka jingshat;\nKatno sngewhun ban bud ïa ki dienjat Nongpynim,\nBa un ïalam ti."
  },
  {
    id: "shaniah-ha-ki-ksangti-bymjukut",
    title: "(R-113) Shaniah Ha Ki Ksangti Bymjukut",
    number: 95,
    verses: [
      "1. Katno ka jingkmen bad jingïasyllok,\nBan shaniah ha ksangti jong u Trai;\nKatno kaba la kyrkhu bad basuk,\nBan shaniah ha ksangti jong u Trai.",
      "2. Katno thiang ban ïaid lynti pilgrim hi,\nDa shaniah ha ksangti bymjukut;\nO! lynti dap da jingkmen man ka sngi,\nDa shaniah ha ksangti bymjukut.",
      "3. Ngan sngew tui lei pat, ngan sheptieng lei pat,\nShu shaniah ha ki kti u Jisu;\nNga suk katba Jisu u don ryngkat,\nNga shaniah ha ki kti u Jisu."
    ],
    chorus: "Shaniah, shaniah,\nSuk ha ki kti u Trai Jisu;\nShaniah, shaniah,\nÏai shaniah ha ksangti u Jisu."
  },
  {
    id: "to-wan-sha-u-jisu-2",
    title: "(R-114) To Wan Sha U Jisu",
    number: 96,
    verses: [
      "1. To wan sha u Jisu phi b'la her sha jngai,\nNongpynim ba tngen u dang ïai ap ïa phi;\nPynphai la ki kjat wan sha u bad pyndem,\nU don ka bor bah ban map pop ïa phi.",
      "2. To wan shah syrpai ha u Trai u Jisu,\nDohnud b'la lwet un pynkhiah biang mynta;\nTo ieh la ki pop bad b'la tlor ka mynsiem,\nUn bsa da ka jingshai kynsai u Trai.",
      "3. To wan sha u Jisu phi b'la peit matlah,\nUn pynshai ki khmat kiba dum jingshai;\nTo wan her sha u, un kdup ha la ki kti,\nUn synran u ban btin lynti ïa phi."
    ],
    chorus: "To wan, to wan, wan pan jingsuk na u,\nTo wan, to wan, wan shim jingsuk na u;\nTo wan, to wan, wan pan jingsuk na u,\nUn ai jingsuk kynjai ha phi."
  },
  {
    id: "jingsuk-na-kalbari",
    title: "(R-116) Jingsuk Na Kalbari",
    number: 97,
    verses: [
      "1. Jingieit b'la tuid na u lum Kalbari,\nB'la siew ka dor pop jong nga u briew;\nDa jingaiei ngi la ïoh jingpynim,\nKatno kaba kordor ïa nga.",
      "2. Katno ka phyrnai ha dohnud jong nga,\nJingkmen ba tuid man la ka khyllipmat;\nLa pop bad jingsngewsih ki la her noh,\nJingsuk b'la tuid na Kalbari.",
      "3. Jingsuk phylla ngam lah ban sngewthmd shai,\nKatno kynjai hapoh mynsiem;\nBrabor ngan ïai rwai rwai ïaroh ïa u,\nJingsuk b'la tuid na Kalbari."
    ],
    chorus: "Jingsuk ba la tuid kum ka wah badap,\nJingsuk ba la wan ha nga mynta;\nO! Halleliwïa la wai jingkhuslai,\nJingsuk b'la tuid na Kalbari."
  },
  {
    id: "trai-kyndit-pat",
    title: "(R-117) Trai Kyndit Pat",
    number: 98,
    verses: [
      "1. Trai wan pyndap mynsiem rhem mynta,\nDa ka bor jong u Mynsiem;\nKynshik ki tnat tiewkulab mynta,\nPynphriang kylleng pyrthei.",
      "2. Trai wan pynrhem mynsiem kiba tlot,\nPynkhlaiñ ïa ka Balang;\nNongpop ba thiah pop kyrsiew mynta,\nDa bor u Mynsiem Bakhmd.",
      "3. Ktien jong me Trai pynriew sawa jam,\nKylleng ki dong pyrthei;\nPaidbah paidlang kin ïalang jop thiaw,\nHakhmat khet jong me Trai."
    ],
    chorus: "Trai kyndit pat, kyndit pat mynta,\nTheh, A! to theh u lyoh bakhraw;\nTheh, A! to theh jingaiei mynta,\nPynlong thymmai ïa ngi."
  },
  {
    id: "kmen-ha-u-trai",
    title: "(R-118) Kmen Ha U Trai",
    number: 99,
    verses: [
      "1. Kmen ha u Trai pyrta rwai da jingrisa,\nMane kyntiew burom ïa u Kpa;\nU ieit bakhraw u la pynim ei ïa ngi,\nNgi long khun baieit jong u mynta.",
      "2. Kmen ha u Trai naba u pynshai jingshai,\nU beh lyoh dum baroh pynshai sngi;\nKylleng surok pyrthei baroh la phyrnai,\nJingshai u Trai la synshar ha ngi.",
      "3. Kmen ha u Trai naba u la kular skhem,\n\"Ngan ri ngan da khlem da iehnoh md;\"\nLada phi im syndah bad u man ka sngi,\nJingsuk junom un sa pynkup md."
    ],
    chorus: "Kmen ha u Trai, kmen ha u Trai,\nPynbna ia ka khubor u Trai;\nRwai phin bna baroh ka pyrthei,\nKmen ha u Trai brabor."
  },
  {
    id: "peit-ha-kalbari",
    title: "(R-119) Peit Ha Kalbari",
    number: 100,
    verses: [
      "1. Mynba nga hap hapdeng ka jingdum ka pop,\nNgam don jingkyrmen ban lait im md;\nHynrei u Trai u Jisu u wan khot ïa nga,\n\"Peit ha Kalbari ngan sait pop jong me.\"",
      "2. Snam ba kordor kaba tuid na u lum Kalbari,\nKaba kit ki pop jong ka pyrthei;\nU nongpop batngit tam haba u wan phai,\nUn ïoh lait im ei ha ka snam u Trai.",
      "3. Lada phi her shawei na u lum Kalbari,\nPhin nym shem jingsuk ha ka pyrthei;\nPeit ha u Jisu uba khot ïa phi,\n\"Wan pynkhmd ha nga ngan sait pop jong phi.\""
    ],
    chorus: "O! Kalbari, O! Kalbari,\nMawsiang baskhem jong ka jingpynim;\nHangta u Jisu u la phla la ka snam,\nBan thied pyllait im ïa nga mynta."
  },
  {
    id: "jisu-trai-basbun",
    title: "(R-120) Jisu Trai Basbun",
    number: 101,
    verses: [
      "1. Jisu Trai basbun, nga dem ha kjat jong me,\nTo kdup ha la kti, ri da jingaiei;\nNga thait ha pyrthei, ka thma ka khlaiñ bor bah,\nTo ai ba dohnud kan rieh ha me Trai.",
      "2. Spah bah ka pyrthei ngam smdñiew md ïa ka,\nRongphong ka pyrthei ka pynshoi ïa nga;\nTo khmih u nongshun u khraw ha la ka bor,\nTo da bad to ri ha me Trai basbun.",
      "3. Kyrteng u Jisu ka pynhun ïa nga,\nJingshai ka dohnud ka phyrnai shisha;\nLada nga thait swai u ai bor thymmai,\nNgan rwai ngan ïaroh ïa u Trai basbun."
    ],
    chorus: "Jisu Trai basbun, Jisu Trai basbun,\nTo pdiang ïa nga mynta ha me;\nNga loit la ki sñieh, nga loit la ki song,\nTo ri to sumar ha me Jisu."
  },
  {
    id: "tang-shi-por-nga-sah-hangne",
    title: "(R-121) Tang Shi Por Nga Sah Hangne",
    number: 102,
    verses: [
      "1. Tang shi por nga sah hangne ha ka pyrthei,\nTe ngan sa leit noh sha ïng i Pa;\nSurok ksiar bad ïng kordor ka don hangtei,\nHangta ngan shong suk junom shisha.",
      "2. Hangne ha pyrthei jingsngewsih ki kyrmd,\nErïong artatien ki shoh ïa nga;\nHynrei hangto ha bneng erïong kin ym don,\nJingsuk kynjai kan synshar hangta.",
      "3. Hangto ngan sa ïashem bad ki lok ki jor,\nKiba la leit thiah noh shwa ïa nga;\nNgin ïa rwai lang kyntiew burom ï'u Jisu,\nNgosiewspah uba ieit eh ïa ngi."
    ],
    chorus: "Nga dang thap ban leit sha ka shnong kordor,\nJaka ba ki riewkhmd kin shongneh;\nSngi phyrnai bymjukut hangta kan tyngshaiñ,\nNgan shong suk junom lem bad u Blei."
  },
  {
    id: "nga-long-u-pilgrim",
    title: "(R-122) Nga Long U Pilgrim",
    number: 103,
    verses: [
      "1. Nga long u pilgrim bad u nongwei,\nNga ïaid lyngba kane ka pyrthei;\nNga don ka ri kaba kham janai,\nKaba phyrnai shawei duriaw.",
      "2. Ki la ïapoi sha kata ka shnong,\nKi b'la thied da u Jisu u Trai;\nKi ïa shong suk khlem da khuslai md,\nHangta ha khmat khet jong u Trai.",
      "3. Jisu un ïalam un btin lynti,\nHadmd ban da poi ha ri jingshai;\nUn sdang mdum un khot ïa la ki khun,\n\"Wan shong kmen noh hapoh la ïng.\""
    ],
    chorus: "O! Trai, me tip ngam don lok ha pyrthei,\nLada bneng kam long ïng jong nga;\nTe ngan leit shaei?\nAngel ki khot na ka khalki bneng,\nNgam lah ban shong hangne ha pyrthei."
  },
  {
    id: "wan-mynsiem-bakhuid",
    title: "(R-123) Wan Mynsiem Bakhuid",
    number: 104,
    verses: [
      "1. Wan Mynsiem Bakhuid kumba ha nïam rim,\nTheh la ka bor pynim;\nPynkoit pynkhiah pynrhem mynsiem ba lwet,\nDa bor jingaiei Trai.",
      "2. Wan Mynsiem Bakhuid d'u ding bakhuid pynkhmd,\nDohnud kiba la tngit;\nSait phar sait khmd pynlong kyntang ïa ngi,\nHakhmat khet jong me Trai.",
      "3. Wan Mynsiem Bakhuid long u nongbtin lynti,\nHa suiñbneng ba dum ngain;\nDa u rishot ka ding pynshai lynti,\nHadmd khon ri jingshai."
    ],
    chorus: "Theh, A! to theh u lyoh bakhraw,\nMynsiem Bakhmd wan hiar;\nPynrhem mynsiem kiba la thait,\nTheh ka bor jop thiaw."
  },
  {
    id: "jerusalem-bathymmai",
    title: "(R-124) Jerusalem Bathymmai",
    number: 105,
    verses: [
      "1. Don ka shnong kaba phylla kaba khambha,\nJerusalem bathymmai;\nKaba la shna da ki kti u Blei Kpa,\nKaba phyrnai ri jingshai.",
      "2. Surok ksiar bad khyrdop mawkordor phyrnai,\nJingshai sngi kam donkam md;\nKhrist Jisu u long jingshai kaba khraw,\nBymjiw don por ba kan dum.",
      "3. Riewkhmd b'la thied da u Khrist kin shong hangta,\nJaiñkup balieh kin sa phong;\nPansngiat ksiar ha la ki khlieh kin sa pynphong,\nKin rwai jingrwai ka jingjop."
    ],
    chorus: "O! Jerusalem, Jerusalem bathymmai,\nHangta ngan sa rwai rwai ïaroh;\nO! Jerusalem, Jerusalem bathymmai,\nNgan shong suk junom hangta."
  },
  {
    id: "u-bha-briew-tam-u-jisu",
    title: "(R-125) U Bha Briew Tam U Jisu",
    number: 106,
    verses: [
      "1. U Jisu u kham bha ban ïa kiei kiei baroh,\nH'u nga don ka jingkmen bad ka jingshngaiñ;\nU long u tiew lili, u khlur step ba phyrnai,\nU bha briew tam kynsai hapoh pyrthei.",
      "2. U kit ki jynjar bad ki khuslai jong nga,\nHapdeng ka thma u long ka stieh ïa nga;\nU la khot ïa nga wan shaw'n pynjahthait,\nU bha briew tam kynsai hapoh pyrthei.",
      "3. U Jisu um ju iehnoh ïa nga lano-lano,\nKatba nga dang ngeit bad dang kohnguh;\nU long kut baskhem, u da u ri ïa nga,\nU bha briew tam kynsai hapoh pyrthei."
    ],
    chorus: "Ha jingjynjar u long u nongpyntngen,\nHapdeng jingshitom u nongbuhrieh;\nU long u tiew lili, u khlur step ba phyrnai,\nU bha briew tam kynsai hapoh pyrthei."
  },
  {
    id: "nga-kmen-ban-tip",
    title: "(R-126) Nga Kmen Ban Tip",
    number: 107,
    verses: [
      "1. Nga kmen ban tip ba u Kpa ha neng,\nU ieit bad u kynmaw ïa ngi;\nKhubor bakmen badap d'u mynsiem,\nBa u Jisu u ieit ïa nga.",
      "2. Wat lada nga klet ruh ïa u,\nBad her shawei na ka kper u Trai;\nHynrei dohnud u Trai ka ieit eh,\nBa u Jisu u ieit ïa nga.",
      "3. Lada phi kwah ban tip ka jingrwai,\nKaba ki Angel ki rwai ha neng;\nDei tang kane ka sur kaba thiang,\nBa u Jisu u ieit ïa nga."
    ],
    chorus: "Nga sngewkmen eh naba Jisu u ieit,\nJisu u ieit, Jisu u ieit;\nNga sngewkmen eh naba Jisu u ieit,\nJisu u ieit shisha ïa nga."
  },
  {
    id: "to-phai-sha-u-jisu",
    title: "(R-127) To Phai Sha U Jisu",
    number: 108,
    verses: [
      "1. Phi b'la her sha jngai kiba bam da u thlang,\nPhi b'la lwet mynsiem hapdeng ka thma;\nTo peit ha u Trai uba long jingshai,\nUn sïat bad pynkhiah dohnud jong phi.",
      "2. Mynba phin hap hapdeng jingdum ba rben,\nKhmit sha u Jisu un ai jingshai;\nPeit tang ha u hi khlem da artatien,\nUn map bad un pyllait im ïa phi.",
      "3. Jingïap bad jingtap kin ym jop shuh ïa phi,\nLada phi shaniah ha la u Trai;\nUn btin un ïalam ha ka ri jingshai,\nHangta phin shong suk junom shisha."
    ],
    chorus: "To phai sha u Jisu to khmih ha u hi,\nPeit ha ka khmat kaba kordor;\nKi spah ka pyrthei kin her noh baroh,\nHa ka jingshai bad burom jong u."
  },
  {
    id: "ngan-nym-lehrain-ia-la-u-trai",
    title: "(R-128) Ngan Nym Lehraiñ Ïa La U Trai",
    number: 109,
    verses: [
      "1. Ngan nym lehraiñ ïa la u Trai,\nLymne kyntien ka jong u hi;\nla ka snam b'la tuid na Kalbari,\nKaba la thied pyllait ïa nga.",
      "2. H'u Jisu Khrist nga buh mynta,\nla la ka met bad ka mynsiem;\nHa jingïaleh u long u b'khlaiñ,\nUn ri un da khlem artatien.",
      "3. Kular jong u ka skhem shisha,\nHaduh bakut un pynbiang lut;\nUn long nongpeit nongsumar bha,\nHaduh sngi un wan burom."
    ],
    chorus: "Nga tip h'u ei nga la shaniah,\nNga tip u lah ban ri ba shngaiñ;\nla kaba nga la aiti ha u,\nHaduh kata ka sngi."
  },
  {
    id: "haba-por-jingim-ngan-wai",
    title: "(R-129) Haba Por Jingim Ngan Wai",
    number: 110,
    verses: [
      "1. Haba por jingim jong nga hangne kan wai,\nBad surok pyrthei ngan nym ïaid shuh;\nNgan sa poi ha ka nongbah b'la kular u Trai,\nHangto ngan peit dohnud ïa la u Trai.",
      "2. O! katno ka jingsngewbha ka ban sa long,\nMynba khmat ngan i ï'u Nongpynim;\nUba la aiti la ka snam na ka bynta jong nga,\nHangto ngan peit dohnud ïa la u Trai.",
      "3. Lyngba ki khyrdop mawkordor ngan sa rung,\nJaiñkup balieh phyrnai ngan sa phong;\nHangta jingsngewsih bad ummat kin nym don shuh,\nHangto ngan peit dohnud ïa la u Trai."
    ],
    chorus: "Ngan sa i khmat ïa u, ngan sa i khmat ïa u,\nYnda nga la jop ïa ka thma pyrthei;\nNgan sa i khmat ïa u, ngan sa i khmat ïa u,\nNgan rwai ïaroh junom ïa la u Trai."
  },
  {
    id: "ha-ka-diengphna-kalbari",
    title: "(R-130) Ha Ka Diengphna Kalbari",
    number: 111,
    verses: [
      "1. Ha ka diengphna Kalbari Jisu u la ïap,\nBan siew ka dor pop jong nga u briew;\nDa ka snam kordor u pynkhuid ïa nga,\nMynta nga la ïoh jingpynim.",
      "2. Kyrteng u Jisu ka pyntngen ïa nga,\nKa khring ka wet dohnud jong nga;\nHa ki jingtynjuh u long ha syndah,\nNgan ïaroh ïa u man ka sngi.",
      "3. Para to wan mynta bad kylla ka mut,\nJisu u tyrwa ka jingaiei;\nUn map un pynkhuid ïa ki pop jong phi,\nTo wan khlem da sepei por."
    ],
    chorus: "O! Kalbari, O! Kalbari,\nJingieit u Trai ka la pynshai;\nHa ka diengphna u la shah chitom,\nBan pynim ïa nga u nongpop."
  },
  {
    id: "don-ka-umpohliew",
    title: "(R-131) Don Ka Umpohliew",
    number: 112,
    verses: [
      "1. Don ka umpohliew basuk b'la tuid kyrhai,\nNa ka krung jong u Khrist Nongpynim;\nKito kiba sum ha kane ka wah jingshai,\nKin loit ki pop baroh phar.",
      "2. U dakaid b'la sdien ha syndah u Jisu,\nU kmen ban i kata ka wah;\nHangta u la ïoh jingmap ei baroh ki pop,\nNga ruh ngan ïoh kumjuh.",
      "3. Khun langbrot b'la ïap snam kordor ka jong me,\nNgan nym klet baroh ki sngi jong nga;\nHaduh ka Balang baroh b'la siewspah u Trai,\nKin rwai junom ha la ka ïng."
    ],
    chorus: "Nga ngeit ha u, nga ngeit ha u,\nNga ngeit ha u Khrist uba la ïap;\nNga ngeit ha u, nga ngeit ha u,\nSnam u Khrist ka sait pop jong nga."
  },
  {
    id: "man-ka-sngi-man-ka-por",
    title: "(R-132) Man Ka Sngi Man Ka Por",
    number: 113,
    verses: [
      "1. Man ka sngi man ka por nga donkam ïa me,\nBan da ban ri ha ki kti jingaiei;\nKtien thiang u Jisu ka thaba ha nga,\nKa plie wang jingshai suiñbneng ïa nga.",
      "2. Man ka sngi man ka por nga donkam ïa me,\nHaba lyer erïong ka pyrsad tngam;\nSngi ne miet pyngngad me sharai ïa nga,\nMe buhrieh mynsiem hapoh jingshngai."
    ],
    chorus: "Man ka sngi man ka por to don ryngkat,\nNga tlot pynban nga sngewkhlaiñ bor bah;\nTo kdup to ri da jingaiei Trai,\nHaduh bakut jingleit hangne."
  },
  {
    id: "paralok-ba-ieit-to-sngap",
    title: "(R-133) Paralok Ba Ieit To Sngap",
    number: 114,
    verses: [
      "1. Paralok ba ieit to sngap khubor kyntang,\nKhubor jingpynim ba wan na neng;\nJisu u khot ïa phi wan sha u mynta,\nUn map un pynkhuid dohnud jong phi.",
      "2. Balei phi pynsepei la ka por b'lo kordor,\nHapdeng ka pop bad jingsngewsih;\nBalei phi kyntait la u Kpa basbun,\nUba dang khot ar kti kylluid.",
      "3. Shen kan sa kut kane ka por jingaiei,\nKhang khyrdop bneng kan sa khang khop;\nHangta phin pyrta bad ud da jingsngewsih,\nTo wan mynta khlem da sepei."
    ],
    chorus: "To wan, to wan, wan pan jingsuk na u,\nTo wan, to wan, wan shim jingsuk na u;\nTo wan, to wan, wan pan jingsuk na u,\nUn ai jingsuk kynjai ha phi."
  },
  {
    id: "nga-long-u-shakri",
    title: "(R-135) Nga Long U Shakri",
    number: 115,
    verses: [
      "1. Nga long u shakri uba tlot eh, Trai,\nHynrei me la jied ban btin lynti;\nAiti ha nga la ka bor bakhraw,\nBa ngan ïalap ka ktien u Blei.",
      "2. Hapdeng ki jingeh bad jingpynshoi jur,\nTo don ryngkat bad ma nga, Trai;\nKtien jong me ka long ka diengduh,\nKaba pyllait na ki thliew sakhrai.",
      "3. Ynda la wai la ka por kam jong nga,\nNga kyrmen ban poi sha la ka shnong;\nHangta ngan sah suk khlem jingsngewsih,\nNgan ïaroh ïa me junom shisha."
    ],
    chorus: "To ai bor, to ai bor, ko Jisu,\nNga donkam eh la u mynsiem bakhuid;\nTo ai bor, to ai bor, ko Jisu,\nTo synran bad to btin lynti."
  },
  {
    id: "nga-tip-u-trai-un-ri-ia-nga",
    title: "(R-136) Nga Tip U Trai Un Ri Ïa Nga",
    number: 116,
    verses: [
      "1. Nga tip u Trai un ri ïa nga, lada nga bud ïa u,\nHa ka lynti ka jingshisha un ïai btin beit ïa nga;\nLa ki nongshun kin ker sawdong ban pynkyllon ïa nga,\nNga tip u Trai un ri: ïa nga lada nga bud ïa u.",
      "2. Nga tip u Trai un ri ïa nga, haba erïong ki wan,\nHapdeng ka thma ka pyrthei un bsa un ri ïa nga;\nU long u nongïarap shisha u bym ju iehnoh shuh,\nNga tip u Trai un ri ïa nga lada nga bud ïa u.",
      "3. Nga tip u Trai un ri ïa nga, haduh bakut bawai,\nYnda la sep ka sngi jong nga ha kane ka pyrthei;\nNgan sa pdiang la ka pansngiat hangto ha ïng i Pa,\nNga tip u Trai un ri ïa nga lada nga bud ïa u."
    ],
    chorus: "Un ri ïa nga, un ri ïa nga,\nNga tip u Trai un ri ïa nga lada nga bud ïa u;\nLa ki nongshun kin ker sawdong ban pynkyllon ïa nga,\nNga tip u Trai un ri ïa nga lada nga bud ïa u."
  },
  {
    id: "to-pynbna-ka-khubor-babha",
    title: "(R-137) To Pynbna Ka Khubor Babha",
    number: 117,
    verses: [
      "1. To pynbna ka khubor babha kylleng pyrthei,\nKyntiew la ka sur bad rwai da jingrisa;\nBa u Jisu u la wan ban pynim nongpop,\nTo khie to ïathuh baroh kylleng pyrthei.",
      "2. To ïalap ïa ka ktien u Blei khlem da sepei,\nWat ha kiba lwet dohnud ba dang rangli;\nBa u Jisu u long u nongpynkoit pynkhiah,\nTo khie to ïathuh baroh kylleng pyrthei.",
      "3. Paidlang bynriew baroh to kyndit thiah mynta,\nTo peit Jisu u dang tyrwa jingaiei;\nKhrit u la wan ban plie ka khyrdop suiñbneng,\nTo khie to ïathuh baroh kylleng pyrthei."
    ],
    chorus: "To pynbna, to pynbna,\nKhubor jingpynim ba kordor eh;\nTo pynbna, to pynbna,\nKhubor u Jisu kylleng pyrthei."
  },
  {
    id: "nga-iaid-ha-ka-jingshai",
    title: "(R-138) Nga Ïaid Ha Ka Jingshai",
    number: 118,
    verses: [
      "1. Naduh ba Jisu u wan shong ha nga,\nNga ïaid ha ka jingshai kaba kynsai;\nJingdum baroh u la beh noh n'nga,\nNga im ha ka jingshai u Trai.",
      "2. Lyoh dum bakhia ba tap barobor,\nKi la pra noh baroh naduh mynta;\nJingshai sngi ka hok ka tyngshaiñ ha nga,\nNga im ha ka jingshai u Trai.",
      "3. Ngan ïai ja'm shaphrang khlem da sepei,\nDa bat la ka stieh ka jingngeit skhem;\nHaduh ngan da poi sha ri ka jingshai,\nHangto ngan ïai rwai rwai ïaroh."
    ],
    chorus: "Nga ïaid ha ka jingshai, nga ïaid ha jingshai,\nJingshai ka dohnud ka phyrnai shisha;\nNga ïaid ha ka jingshai, nga ïaid ha jingshai,\nNga im ha ka jingshai u Trai."
  },
  {
    id: "ka-snam-iu-jisu-ka-donbor",
    title: "(R-139) Ka Snam Ïu Jisu Ka Donbor",
    number: 119,
    verses: [
      "1. Phi kwah ban lait na ka pop ka bakhia?\nBor ka don ha ka snam, bor ha ka snam;\nPhi kwah ban jop ïa u soitan mynta?\nDonbor bah ha ka snam u Trai.",
      "2. Phi kwah ban pynkhuid ïa la ka dohnud?\nBor ka don ha ka snam, bor ha ka snam;\nWan sum ha ka umpohliew Kalbari,\nDonbor bah ha ka snam u Trai.",
      "3. Phi kwah ban shakri ïa la u Kynrad?\nBor ka don ha ka snam, bor ha ka snam;\nTo rwai ïaroh ïa u man la ka sngi,\nDonbor bah ha ka snam u Trai."
    ],
    chorus: "Ka donbor, ka donbor bah shisha,\nHa ka snam jong u Khun langbrot;\nKa donbor, ka donbor bah shisha,\nHa ka snam kordor u Trai."
  },
  {
    id: "ko-jisu-nga-la-thait-la-swai",
    title: "(R-140) Ko Jisu Nga La Thait La Swai",
    number: 120,
    verses: [
      "1. Ko Jisu nga la thait la swai ha kane ka pyrthei,\nNga ha lynti pilgrim sha ri jingshai;\nTo kdup to ri da la ka kti jingaiei,\nTo btin to ïalam beit ïa nga.",
      "2. Jingkit bakhia ka ban khia halor jong nga,\nJingpynshoi ki wan tynjuh barobor;\nTo ai bor thymmai ba ngan jop ïa ka thma,\nTo btin to ïalam beit ïa nga.",
      "3. Ynda la sep ka sngi jong nga ha pyrthei,\nNgan nym sah shuh hapdeng ka jingsngewsih;\nNgan poi hangto sha ïng u Blei u Kpa,\nHangta ngan shong suk junom."
    ],
    chorus: "To kdup, to ri da jingaiei Trai,\nHaduh bakut jingleit hangne;\nTo kdup, to ri da jingaiei Trai,\nTo btin to ïalam beit ïa nga."
  },
  {
    id: "ka-umpohliew-ka-jingaiei",
    title: "(R-141) Ka Umpohliew Ka Jingaiei",
    number: 121,
    verses: [
      "1. Ka jingaiei u Blei ka long kaba phylla,\nKaba pynim kum ïa nga u nongpop;\nMynshwa nga la jah la shem pat mynta,\nMatlah la pynpeit dohnud.",
      "2. Ka jingaiei ka hikai ban sheptieng u Blei,\nKa weng noh baroh ki jingsheptieng pop;\nKatno kordor ka jingaiei u Trai,\nMynba nga pdiang nyngkong.",
      "3. Lyngba ki jingeh bad jingpynshoi babun,\nNga la lait im da la ka jingaiei;\nKan ïai btin lynti haduh bakut bawai,\nHaduh ngan da poi sha bneng."
    ],
    chorus: "Ka jingaiei, ka jingaiei u Trai,\nKa kham kordor ban ïa kiei kiei;\nKa jingaiei, ka jingaiei u Trai,\nKa pynim ïa nga mynta."
  },
  {
    id: "khrist-jisu-un-wan-pat",
    title: "(R-142) Khrist Jisu Un Wan Pat",
    number: 122,
    verses: [
      "1. Khrist Jisu un wan pat da ka burom bakhraw,\nBan lum la ki riewkhuid baroh lang phar;\nKi Angel kin ïasoh da jingkmen bad jingrwai,\nSngi ka burom kan sa mih.",
      "2. Phi la kloi ne em ban ïashem bad u Trai,\nHaba turoi kan riew sawa kylleng;\nPhi la sait ne em la ki jainkup ha snam,\nBan ïeng ha khmat u Syiem?",
      "3. Katno ka jingkmen kaba khraw ka ban long,\nla kiba la ïaineh ha la u Trai;\nKin ïoh pansngiat ksiar hangto ha burom,\nKin synshar lem bad u Blei."
    ],
    chorus: "Un wan pat, un wan pat da shisha,\nKhrist Jisu un wan pat ha pyrthei;\nUn wan pat, un wan pat da shisha,\nSngi ka burom kan sa mih."
  },
  {
    id: "ko-kpa-ba-ieit-buhrieh-ia-nga",
    title: "(R-143) Ko Kpa Ba Ieit Buhrieh Ïa Nga",
    number: 123,
    verses: [
      "1. Ko Kpa ba ieit buhrieh ïa nga hapoh la jingtap lyoh,\nHaba lyer erïong ka pyrsad jur mynta;\nNgam don kut baskhem da kumwei pat ban rieh,\nLait tang ha me hi ko Kpa.",
      "2. Mynsiem jong nga ka thait hapdeng ka jingkhuslai,\nHapdeng jingeh pyrthei ba khraw shisha;\nTo pyntngen mynta da u mynsiem bakhuid,\nTo pynhun mynsiem jong nga.",
      "3. Ynda la wai la ka por kam hangne,\nNga peit sha neng sha ïng ka burom;\nHangta ngan sah suk khlem jingsngewsih shuh,\nNgan ïaroh ïa me junom."
    ],
    chorus: "Buhrieh ïa nga, buhrieh ïa nga,\nKo Kpa ba ieit hapoh la jingtap lyoh;\nBuhrieh ïa nga, buhrieh ïa nga,\nLait tang ha me hi ko Kpa."
  },
  {
    id: "jisu-u-la-thied-ia-nga",
    title: "(R-145) Jisu U La Thied Ïa Nga",
    number: 124,
    verses: [
      "1. Jisu u la thied ïa nga da la ka snam bakhuid,\nMynba nga dang long u mraw ka pop hangne;\nMynta nga la lait na ka kynjri u soitan,\nNga long u khun u Blei.",
      "2. Jingkmen ka shlei hapoh dohnud jong nga brabor,\nNaduh ba nga la long u jong u Trai;\nNgan nym klet ban rwai ïaroh ïa u junom,\nU long u nongpynim.",
      "3. To wan phi paidbah kiba dang jah ha lynti,\nJisu u dang khot ïa phi mynta;\nTo pdiang ïa ka jingaiei uba tyrwa,\nPhin ïoh jingim thymmai."
    ],
    chorus: "U la thied ïa nga, u la thied ïa nga,\nDa la ka snam bakhuid ha Kalbari;\nU la thied ïa nga, u la thied ïa nga,\nNga long u jong u Trai."
  },
  {
    id: "don-ka-ri-ba-phyrnai",
    title: "(R-146) Don Ka Ri Ba Phyrnai",
    number: 125,
    verses: [
      "1. Don ka ri kaba phyrnai kaba khambha sha jngai,\nJaka ba ki riewkhuid kin shongneh;\nKhrist Jisu u long u jingshai kaba khraw,\nHangta miet kan nym don shuh.",
      "2. Jingsngewsih bad ummat kin nym don shuh hangta,\nLa kynriah noh baroh kiei kiei;\nJingsuk kynjai kan synshar badap bashlei,\nHangto ha la ïng i Pa.",
      "3. Ngin sa ïashem bad kiba ieit b'la leit shuwa,\nKiba la thiah noh ha u Jisu u Trai;\nNgin ïasoh lang da ka sur kaba sngewthiang,\nNgin ïaroh ïa u Khun langbrot."
    ],
    chorus: "Sha ka ri ba phyrnai, sha ka ri ba phyrnai,\nNgin sa leit noh shisien ka sngi;\nSha ka ri ba phyrnai, sha ka ri ba phyrnai,\nHangta ngin shong suk junom."
  }
];




