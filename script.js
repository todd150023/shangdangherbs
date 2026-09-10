// 中药材数据
const herbsData = [
    {
        name: "潞党参",
        pinyin: "Lù Dǎng Shēn",
        description: "补中益气、健脾益肺",
        englishDescription: "Tonify middle energizer and replenish qi, invigorate spleen and benefit lung",
        category: "道地药材 Herbs",
        image: "images/herbs/ludangshen.png",
        latinName: "Codonopsis pilosula",
        englishName: "Lu Codonopsis pilosula",
        region: "Shangdang District, Pingshun County, Changzhi Shanxi"
    },
    {
        name: "连翘",
        pinyin: "Lián Qiào",
        description: "清热解毒、消肿散结",
        englishDescription: "Clear heat and detoxify, reduce swelling and dissipate stagnation",
        category: "道地药材 Herbs",
        image: "images/herbs/连翘.jpg",
        latinName: "Forsythia suspensa",
        englishName: "Weeping Forsythia",
        region: "Pingshun County, Qinyuan County, Changzhi Shanxi"
    },
    {
        name: "黄芪",
        pinyin: "Huáng Qí",
        description: "补气升阳、固表利水",
        englishDescription: "Replenish qi and elevate yang, consolidate exterior and induce diuresis",
        category: "道地药材 Herbs",
        image: "images/herbs/黄芪.jpg",
        latinName: "Astragalus membranaceus",
        englishName: "Astragalus",
        region: "Qinyuan County, Wuxiang County, Changzhi Shanxi"
    },
    {
        name: "柴胡",
        pinyin: "Chái Hú",
        description: "疏散退热、疏肝升阳",
        englishDescription: "Dispels fever, soothes liver and elevates spleen yang",
        category: "道地药材 Herbs",
        image: "images/herbs/柴胡.jpg",
        latinName: "Bupleurum chinense",
        englishName: "Bupleurum",
        region: "Pingshun County, Huguan County, Changzhi Shanxi"
    },
    {
        name: "苦参",
        pinyin: "Kǔ Shēn",
        description: "清热燥湿、杀虫利尿",
        englishDescription: "Clear damp-heat, kill parasites and promote urination",
        category: "道地药材 Herbs",
        image: "images/herbs/苦参.jpg",
        latinName: "Sophora flavescens",
        englishName: "Sophora Root",
        region: "Shangdang District, Zhangzi County, Changzhi Shanxi"
    },
    {
        name: "黄芩",
        pinyin: "Huáng Qín",
        description: "清热燥湿、泻火解毒",
        englishDescription: "Clear heat and dry dampness, purge fire and detoxify",
        category: "道地药材 Herbs",
        image: "images/herbs/黄芩.jpg",
        latinName: "Scutellaria baicalensis",
        englishName: "Scutellaria",
        region: "Pingshun County, Qinyuan County, Changzhi Shanxi"
    },
    {
        name: "防风",
        pinyin: "Fáng Fēng",
        description: "祛风解表、胜湿止痛",
        englishDescription: "Expel wind and relieve exterior, eliminate dampness and relieve pain",
        category: "道地药材 Herbs",
        image: "images/herbs/防风.jpg",
        latinName: "Saposhnikovia divaricata",
        englishName: "Saposhnikovia",
        region: "Qin County, Wuxiang County, Changzhi Shanxi"
    },
    {
        name: "远志",
        pinyin: "Yuǎn Zhì",
        description: "安神益智、祛痰开窍",
        englishDescription: "Calm mind and boost intelligence, eliminate phlegm and resuscitate",
        category: "道地药材 Herbs",
        image: "images/herbs/远志.jpg",
        latinName: "Polygala tenuifolia",
        englishName: "Polygala",
        region: "Pingshun County, Qinyuan County, Changzhi Shanxi"
    },
    {
        name: "酸枣仁",
        pinyin: "Suān Zǎo Rén",
        description: "养心安神、敛汗生津",
        englishDescription: "Nourish heart and soothe nerves, arrest sweating and promote fluid",
        category: "道地药材 Herbs",
        image: "images/herbs/酸枣仁.jpg",
        latinName: "Ziziphus jujuba",
        englishName: "Spine Date Seed",
        region: "Shangdang District, Lucheng District, Changzhi Shanxi"
    },
    {
        name: "党参",
        pinyin: "Dǎng Shēn",
        description: "补中益气、生津润肺",
        englishDescription: "Tonify middle energizer and replenish qi, nourish fluid and moisten lung",
        category: "道地药材 Herbs",
        image: "images/herbs/党参.jpg",
        latinName: "Codonopsis pilosula",
        englishName: "Dangshen",
        region: "Shangdang District, Pingshun County, Changzhi Shanxi"
    },
    {
        name: "丹参",
        pinyin: "Dān Shēn",
        description: "活血祛瘀、通经止痛",
        englishDescription: "Promote blood circulation, remove stasis and relieve pain",
        category: "道地药材 Herbs",
        image: "images/herbs/丹参.jpg",
        latinName: "Salvia miltiorrhiza",
        englishName: "Salvia",
        region: "Pingshun County, Zhangzi County, Changzhi Shanxi"
    },
    {
        name: "桔梗",
        pinyin: "Jié Gěng",
        description: "宣肺利咽、祛痰排脓",
        englishDescription: "Unblock lung and soothe throat, expel phlegm and drain pus",
        category: "道地药材 Herbs",
        image: "images/herbs/桔梗.jpg",
        latinName: "Platycodon grandiflorus",
        englishName: "Platycodon",
        region: "Wuxiang County, Qin County, Changzhi Shanxi"
    },
    {
        name: "苍术",
        pinyin: "Cāng Zhú",
        description: "燥湿健脾、祛风散寒",
        englishDescription: "Dry dampness and invigorate spleen, expel wind-cold and improve eyesight",
        category: "道地药材 Herbs",
        image: "images/herbs/苍术.jpg",
        latinName: "Atractylodes lancea",
        englishName: "Atractylodes",
        region: "Qinyuan County, Huguan County, Changzhi Shanxi"
    },
    {
        name: "白术",
        pinyin: "Bái Zhú",
        description: "健脾益气、燥湿止汗",
        englishDescription: "Invigorate spleen and replenish qi, dry dampness and arrest sweating",
        category: "道地药材 Herbs",
        image: "images/herbs/白术.jpg",
        latinName: "Atractylodes macrocephala",
        englishName: "White Atractylodes",
        region: "Pingshun County, Qin County, Changzhi Shanxi"
    },
    {
        name: "地黄",
        pinyin: "Dì Huáng",
        description: "清热凉血、养阴生津",
        englishDescription: "Clear heat and cool blood, nourish yin and generate fluid",
        category: "道地药材 Herbs",
        image: "images/herbs/地黄.jpg",
        latinName: "Rehmannia glutinosa",
        englishName: "Rehmannia",
        region: "Shangdang District, Lucheng District, Changzhi Shanxi"
    },
    {
        name: "山药",
        pinyin: "Shān Yào",
        description: "补脾养胃、补肾益肺",
        englishDescription: "Tonify spleen and stomach, benefit lung and tonify kidney",
        category: "道地药材 Herbs",
        image: "images/herbs/山药.jpg",
        latinName: "Dioscorea opposita",
        englishName: "Chinese Yam",
        region: "Shangdang District, Pingshun County, Changzhi Shanxi"
    },
    {
        name: "白芍",
        pinyin: "Bái Sháo",
        description: "养血调经、柔肝止痛",
        englishDescription: "Nourish blood and regulate menstruation, soften liver and relieve pain",
        category: "道地药材 Herbs",
        image: "images/herbs/白芍.jpg",
        latinName: "Paeonia lactiflora",
        englishName: "White Peony",
        region: "Pingshun County, Qinyuan County, Changzhi Shanxi"
    },
    {
        name: "赤芍",
        pinyin: "Chì Sháo",
        description: "清热凉血、散瘀止痛",
        englishDescription: "Clear heat and cool blood, dissipate stasis and relieve pain",
        category: "道地药材 Herbs",
        image: "images/herbs/赤芍.jpg",
        latinName: "Paeonia veitchii",
        englishName: "Red Peony",
        region: "Wuxiang County, Lucheng District, Changzhi Shanxi"
    },
    {
        name: "金银花",
        pinyin: "Jīn Yín Huā",
        description: "清热解毒、疏散风热",
        englishDescription: "Clear heat and detoxify, dispel wind-heat",
        category: "道地药材 Herbs",
        image: "images/herbs/金银花.jpg",
        latinName: "Lonicera japonica",
        englishName: "Honeysuckle",
        region: "Shangdang District, Huguan County, Changzhi Shanxi"
    },
    {
        name: "菊花",
        pinyin: "Jú Huā",
        description: "清肝明目、平抑肝阳",
        englishDescription: "Clear liver and improve eyesight, soothe liver yang",
        category: "道地药材 Herbs",
        image: "images/herbs/菊花.jpg",
        latinName: "Chrysanthemum morifolium",
        englishName: "Chrysanthemum",
        region: "Shangdang District, Zhangzi County, Changzhi Shanxi"
    },
    {
        name: "补气方",
        pinyin: "Bǔ Qì Fāng",
        description: "补中益气、固本强身，改善气虚体弱、精神倦怠",
        category: "药茶/方剂 Teas & Formulas",
        image: "images/teas/补气方.jpg",
        englishName: "Qi-Tonifying Formula",
        ingredients: "潞党参、黄芪、山药 / Luzhou Dangshen, Astragalus, Chinese Yam",
        method: "药材清水洗净，加水煎煮15分钟，滤渣取汁 / Rinse the raw materials, boil with water for 15 minutes, then filter to get the liquid",
        directions: "每日一剂，早晚温服 / One dose per day, take warm in the morning and evening",
        efficacy: "补中益气、固本强身，改善气虚体弱、精神倦怠 / Tonify qi and strengthen physique, improve qi deficiency, lassitude and physical weakness"
    },
    {
        name: "清热方",
        pinyin: "Qīng Rè Fāng",
        description: "清热解毒、疏散内热，缓解上火咽喉不适",
        category: "药茶/方剂 Teas & Formulas",
        image: "images/teas/清热方.jpg",
        englishName: "Heat-Clearing Formula",
        ingredients: "连翘、黄芩、金银花 / Forsythia, Scutellaria, Honeysuckle",
        method: "清水漂洗，沸水焖泡10分钟，亦可小火慢煮8分钟 / Rinse herbs, steep in boiling water for 10 minutes, or simmer on low heat for 8 minutes",
        directions: "温热代茶饮用，不宜长期连续服用 / Drink warm as tea; do not take continuously for a long time",
        efficacy: "清热解毒、疏散内热，缓解上火咽喉不适 / Clear heat and remove toxins, relieve internal heat and sore throat"
    },
    {
        name: "润肺方",
        pinyin: "Rùn Fèi Fāng",
        description: "生津润肺、利咽化痰，舒缓干咳、肺部燥热",
        category: "药茶/方剂 Teas & Formulas",
        image: "images/teas/润肺方.jpg",
        englishName: "Lung-Moistening Formula",
        ingredients: "党参、桔梗、菊花 / Dangshen, Platycodon, Chrysanthemum",
        method: "材料配伍洗净，沸水冲泡焖12分钟即可 / Clean the mixed materials, steep in boiling water for 12 minutes",
        directions: "日常频饮，四季皆宜 / Drink frequently daily, suitable for all seasons",
        efficacy: "生津润肺、利咽化痰，舒缓干咳、肺部燥热 / Moisten lung and promote fluid, relieve dry cough, throat discomfort and lung dryness"
    },
    {
        name: "健脾方",
        pinyin: "Jiàn Pí Fāng",
        description: "健脾养胃、祛湿和中，改善脾胃虚弱、消化不佳",
        category: "药茶/方剂 Teas & Formulas",
        image: "images/teas/健脾方.jpg",
        englishName: "Spleen-Strengthening Formula",
        ingredients: "白术、山药、远志 / Atractylodes macrocephala, Chinese Yam, Polygala",
        method: "药材浸泡10分钟后，加水煎煮20分钟取汤汁 / Soak herbs for 10 minutes, decoct with water for 20 minutes and take the soup",
        directions: "饭后温服，每日一次 / Take warm after meals, once a day",
        efficacy: "健脾养胃、祛湿和中，改善脾胃虚弱、消化不佳 / Strengthen spleen and stomach, dispel dampness, improve poor digestion and spleen weakness"
    },
    {
        name: "潞党参茶",
        pinyin: "Lù Dǎng Shēn Chá",
        description: "补中益气、健脾益肺，改善神疲乏力、气短心悸",
        category: "药茶/方剂 Teas & Formulas",
        image: "images/teas/潞党参茶.jpg",
        englishName: "Luzhou Dangshen Tea",
        ingredients: "潞党参5-10克 / 5-10g Luzhou Dangshen",
        method: "潞党参切片，清水冲洗干净，用沸水焖泡15分钟，可反复续水冲泡 / Slice Dangshen, rinse with clean water, steep in boiling water for 15 minutes, and refill with water for repeated brewing",
        directions: "每日1剂，温热代茶频饮 / 1 serving per day, drink warm and frequently as a substitute for tea",
        efficacy: "补中益气、健脾益肺，改善神疲乏力、气短心悸 / Tonify middle energizer and replenish qi, invigorate spleen and lung; relieve fatigue, shortness of breath and palpitations"
    },
    {
        name: "连翘茶",
        pinyin: "Lián Qiào Chá",
        description: "清热解毒、疏散风热，适用于咽喉肿痛、风热感冒",
        category: "药茶/方剂 Teas & Formulas",
        image: "images/teas/连翘茶.jpg",
        englishName: "Forsythia Tea",
        ingredients: "干连翘5克 / 5g Dried Forsythia Suspensa",
        method: "取干连翘，沸水冲泡，焖泡10分钟即可饮用 / Take dried Forsythia, brew with boiling water and steep for 10 minutes",
        directions: "每日1-2次，温热饮用，不宜隔夜 / 1-2 times daily, drink warm; do not keep overnight",
        efficacy: "清热解毒、疏散风热，适用于咽喉肿痛、风热感冒 / Clear heat and detoxify, relieve wind-heat; suitable for sore throat and wind-heat cold"
    },
    {
        name: "黄芪茶",
        pinyin: "Huáng Qí Chá",
        description: "补气固表、利水消肿，增强体质、缓解气虚乏力",
        category: "药茶/方剂 Teas & Formulas",
        image: "images/teas/黄芪茶.jpg",
        englishName: "Astragalus Tea",
        ingredients: "黄芪片8-10克 / 8-10g Astragalus Root Slices",
        method: "黄芪片加水500毫升，小火煎煮10分钟；或直接沸水焖泡20分钟 / Add 500ml water to Astragalus slices, simmer for 10 minutes; or steep in boiling water for 20 minutes",
        directions: "每日1次，温热饮用，连用3-5天为一周期 / 1 time daily, drink warm; 3-5 days as one cycle",
        efficacy: "补气固表、利水消肿，增强体质、缓解气虚乏力 / Replenish qi and consolidate exterior, induce diuresis and reduce swelling; enhance immunity and relieve qi-deficiency fatigue"
    },
    {
        name: "酸枣仁茶",
        pinyin: "Suān Zǎo Rén Chá",
        description: "养心安神、敛汗生津，改善失眠多梦、夜间盗汗",
        category: "药茶/方剂 Teas & Formulas",
        image: "images/teas/酸枣仁茶.jpg",
        englishName: "Spine Date Seed Tea",
        ingredients: "炒酸枣仁10克 / 10g Roasted Spine Date Seed",
        method: "将酸枣仁轻轻捣碎，沸水焖泡20分钟，使有效成分析出 / Gently crush the seeds, steep in boiling water for 20 minutes to extract active ingredients",
        directions: "睡前30分钟温热饮用，连饮1-2周 / Drink warm 30 minutes before bedtime; for 1-2 consecutive weeks",
        efficacy: "养心安神、敛汗生津，改善失眠多梦、夜间盗汗 / Nourish heart and soothe nerves, arrest sweating and promote fluid; improve insomnia, dreaminess and night sweats"
    },
    {
        name: "金银花茶",
        pinyin: "Jīn Yín Huā Chá",
        description: "清热解毒、疏散风热，缓解口干舌燥、咽喉不适",
        category: "药茶/方剂 Teas & Formulas",
        image: "images/teas/金银花茶.jpg",
        englishName: "Honeysuckle Tea",
        ingredients: "干金银花3-5克 / 3-5g Dried Honeysuckle Flower",
        method: "沸水冲泡，焖泡5-8分钟，汤色清亮即可 / Brew with boiling water and steep for 5-8 minutes until the soup is clear",
        directions: "每日1-2次，温热饮用，夏季尤宜 / 1-2 times daily, drink warm; especially suitable in summer",
        efficacy: "清热解毒、疏散风热，缓解口干舌燥、咽喉不适 / Clear heat and detoxify, relieve wind-heat; alleviate dry mouth and throat discomfort"
    },
    {
        name: "菊花茶",
        pinyin: "Jú Huā Chá",
        description: "清肝明目、平抑肝阳，舒缓眼疲劳、缓解燥热",
        category: "药茶/方剂 Teas & Formulas",
        image: "images/teas/菊花茶.jpg",
        englishName: "Chrysanthemum Tea",
        ingredients: "干菊花5-8朵 / 5-8 Dried Chrysanthemum Flowers",
        method: "沸水冲泡，焖泡5分钟，可反复续水至味淡 / Brew with boiling water and steep for 5 minutes; refill with water until the flavor fades",
        directions: "日常代茶饮用，温热饮用最佳 / Drink as a substitute for tea daily; warm is the best",
        efficacy: "清肝明目、平抑肝阳，舒缓眼疲劳、缓解燥热 / Clear liver and improve eyesight, soothe liver yang; relieve eye strain and internal heat"
    },
    {
        name: "炮制",
        pinyin: "Páo Zhì",
        description: "中药材采收后，经过清洁、修整、加工的传统制药工序，提升药效、方便储存与服用",
        category: "炮制与功效 Processing & Efficacy",
        image: "images/processing/炮制.jpg",
        englishName: "Processing",
        definition: "The traditional method of harvesting, cleaning and processing fresh Chinese medicinal herbs for better curative effect and storage"
    },
    {
        name: "晒干",
        pinyin: "Shài Gān",
        description: "利用自然阳光晾晒新鲜药材，脱去水分，保留天然药性、延长保存时间",
        category: "炮制与功效 Processing & Efficacy",
        image: "images/processing/晒干.jpg",
        englishName: "Sun-drying",
        definition: "A primary processing method that removes water from fresh herbs by natural sunlight"
    },
    {
        name: "切片",
        pinyin: "Qiē Piàn",
        description: "将干燥药材切成片状，利于煎煮、冲泡，让有效成分更容易析出",
        category: "炮制与功效 Processing & Efficacy",
        image: "images/processing/切片.jpg",
        englishName: "Slicing",
        definition: "Cutting dried medicinal materials into pieces to facilitate boiling, soaking and dissolving active ingredients"
    },
    {
        name: "炒制",
        pinyin: "Chǎo Zhì",
        description: "将药材入锅翻炒加热，缓和药性，增强健脾养胃效果，使药性更加温和",
        category: "炮制与功效 Processing & Efficacy",
        image: "images/processing/炒制.jpg",
        englishName: "Stir-frying",
        definition: "Herbs are heated and fried in a pot to adjust their medicinal properties and protect the stomach"
    },
    {
        name: "蜜炙",
        pinyin: "Mì Zhì",
        description: "加入蜂蜜拌炒炮制，增强滋润、补益作用，润肺补气，同时改善药材口感",
        category: "炮制与功效 Processing & Efficacy",
        image: "images/processing/蜜炙.jpg",
        englishName: "Honey-processed",
        definition: "Processing herbs with honey to moisten the body, tonify qi and improve taste"
    },
    {
        name: "性味",
        pinyin: "Xìng Wèi",
        description: "药材最基础的药性特征，包含寒、凉、温、热，平，以及甘、苦、辛等药味",
        category: "炮制与功效 Processing & Efficacy",
        image: "images/processing/性味.jpg",
        englishName: "Nature and Flavor",
        definition: "The basic properties of herbs, including cold, warm, neutral and different natural tastes"
    },
    {
        name: "归经",
        pinyin: "Guī Jīng",
        description: "指药材进入人体后，主要作用、调理对应的脏腑经络，明确药效作用部位",
        category: "炮制与功效 Processing & Efficacy",
        image: "images/processing/归经.jpg",
        englishName: "Meridian Entry",
        definition: "The specific internal organs and meridians that a medicinal herb mainly acts on"
    },
    {
        name: "功效",
        pinyin: "Gōng Xiào",
        description: "中药材本身具备的调理身体、养生治病的核心作用与能力",
        category: "炮制与功效 Processing & Efficacy",
        image: "images/processing/功效.jpg",
        englishName: "Efficacy",
        definition: "The general health-care and therapeutic effects of traditional Chinese medicinal herbs"
    },
    {
        name: "主治",
        pinyin: "Zhǔ Zhì",
        description: "该药材主要能够改善、缓解、治疗的身体不适症状与相关病症",
        category: "炮制与功效 Processing & Efficacy",
        image: "images/processing/主治.jpg",
        englishName: "Indications",
        definition: "Symptoms, discomforts and diseases that the herb is mainly used to relieve and treat"
    },
    {
        name: "补中益气",
        pinyin: "Bǔ Zhōng Yì Qì",
        description: "补充人体元气，改善体虚乏力、精神不振，气虚疲惫等状态",
        category: "炮制与功效 Processing & Efficacy",
        image: "images/processing/补中益气.jpg",
        englishName: "Tonify Middle-Jiao & Benefit Qi",
        definition: "Replenish vital energy, relieve physical weakness, fatigue and low spirit"
    },
    {
        name: "健脾益肺",
        pinyin: "Jiàn Pí Yì Fèi",
        description: "强健脾胃、提升消化吸收能力，滋养肺部，缓解肺虚咳嗽",
        category: "炮制与功效 Processing & Efficacy",
        image: "images/processing/健脾益肺.jpg",
        englishName: "Strengthen Spleen & Benefit Lung",
        definition: "Nourish the spleen to improve digestion and moisten the lung to relieve cough"
    },
    {
        name: "清热解毒",
        pinyin: "Qīng Rè Jiě Dú",
        description: "清除体内火气、消除炎症、排出毒素，改善上火、咽喉肿痛",
        category: "炮制与功效 Processing & Efficacy",
        image: "images/processing/清热解毒.jpg",
        englishName: "Clear Heat & Detoxify",
        definition: "Eliminate internal heat, reduce inflammation and clear toxins inside the body"
    },
    {
        name: "润肺止咳",
        pinyin: "Rùn Fèi Zhǐ Ké",
        description: "滋润燥热肺部，舒缓咽喉干痒，减轻干咳、久咳不适",
        category: "炮制与功效 Processing & Efficacy",
        image: "images/processing/润肺止咳.jpg",
        englishName: "Moisten Lung & Stop Cough",
        definition: "Moisten dry lungs, relieve throat itching and alleviate dry cough"
    },
    {
        name: "安神助眠",
        pinyin: "Ān Shén Zhù Mián",
        description: "平复烦躁情绪、安定心神，缓解失眠多梦、提升睡眠质量",
        category: "炮制与功效 Processing & Efficacy",
        image: "images/processing/安神助眠.jpg",
        englishName: "Calm Spirit & Improve Sleep",
        definition: "Soothe restless mood, calm nerves, improve insomnia and poor sleep quality"
    },
    {
        name: "祛风散寒",
        pinyin: "Qū Fēng Sàn Hán",
        description: "驱散体内风寒邪气，改善风寒感冒、畏寒怕冷、身体酸痛",
        category: "炮制与功效 Processing & Efficacy",
        image: "images/processing/祛风散寒.jpg",
        englishName: "Dispel Wind & Disperse Cold",
        definition: "Expel wind and cold pathogen from the body, relieve cold symptoms and body pain"
    },
    {
        name: "气虚",
        pinyin: "Qì Xū",
        description: "人体本源元气不足，脏腑机能减弱、整体体力与精力亏虚的亚健康状态",
        category: "病症与调理 Conditions & Regulation",
        image: "images/conditions/气虚.jpg",
        englishName: "Qi Deficiency",
        definition: "A sub-health condition caused by insufficient fundamental vital energy of the human body, leading to weakened organ function and low physical stamina",
        symptoms: "持续疲惫乏力、浑身没劲、活动后气短、说话声音低微，白天自汗、免疫力偏弱 / Always feeling tired, lack of strength, shortness of breath when moving, low voice, spontaneous sweating, low immunity",
        applicable: "潞党参、党参、黄芪 / Luzhou Dangshen, Dangshen, Astragalus<br>潞党参茶、黄芪茶、补气方、党参炖鸡 / Luzhou Dangshen Tea, Astragalus Tea, Qi-Tonifying Formula, Dangshen Stewed Chicken"
    },
    {
        name: "脾虚",
        pinyin: "Pí Xū",
        description: "脾胃消化、运化能力下降，营养吸收变差，湿气堆积在体内的身体状态",
        category: "病症与调理 Conditions & Regulation",
        image: "images/conditions/脾虚.jpg",
        englishName: "Spleen Deficiency",
        definition: "The spleen and stomach lose normal transportation and digestion ability, resulting in poor nutrient absorption and internal dampness accumulation",
        symptoms: "食欲不振、饭后腹胀、消化不良、大便不成形、身体沉重酸痛、精神萎靡 / Poor appetite, abdominal bloating after meals, indigestion, loose stool, heavy and sore body, mental listlessness",
        applicable: "苍术、白术、山药、党参 / Atractylodes, White Atractylodes, Chinese Yam, Dangshen<br>健脾方、山药粥 / Spleen-Strengthening Formula, Chinese Yam Porridge"
    },
    {
        name: "肺热",
        pinyin: "Fèi Rè",
        description: "热邪淤积于肺部，引发呼吸道燥热、咽喉不适、肺部炎症反应的内热状态",
        category: "病症与调理 Conditions & Regulation",
        image: "images/conditions/肺热.jpg",
        englishName: "Lung Heat",
        definition: "Excess heat accumulates in the lung system, causing respiratory dryness, inflammation and throat discomfort",
        symptoms: "咽喉干痛、干咳少痰、胸口燥热、口鼻发干、痰黄黏稠 / Dry sore throat, dry cough, hot feeling in chest, dry mouth and nose, yellow thick phlegm",
        applicable: "连翘、黄芩、桔梗、金银花、菊花 / Weeping Forsythia, Scutellaria, Platycodon, Honeysuckle, Chrysanthemum<br>清热方、润肺方、连翘茶、金银花茶、菊花茶、百合粥 / Heat-Clearing Formula, Lung-Moistening Formula, Forsythia Tea, Honeysuckle Tea, Chrysanthemum Tea, Lily Bulb Porridge"
    },
    {
        name: "失眠",
        pinyin: "Shī Mián",
        description: "人体阴阳失调、心神失养，引发入睡困难、睡眠浅、睡眠质量差的问题",
        category: "病症与调理 Conditions & Regulation",
        image: "images/conditions/失眠.jpg",
        englishName: "Insomnia",
        definition: "Imbalance of yin and yang and restless spirit of the body, leading to difficulty falling asleep and poor sleep quality",
        symptoms: "入睡困难、半夜易醒、多梦易惊、心烦焦躁，白天头晕昏沉 / Hard to fall asleep, easy to wake up at midnight, frequent nightmares, irritability, dizziness in the daytime",
        applicable: "酸枣仁、远志、丹参 / Spine Date Seed, Polygala, Salvia<br>酸枣仁茶 / Spine Date Seed Tea"
    },
    {
        name: "疲劳",
        pinyin: "Pí Láo",
        description: "长期身心消耗过度、气血亏虚，休息后也无法缓解的持续性身心疲惫状态",
        category: "病症与调理 Conditions & Regulation",
        image: "images/conditions/疲劳.jpg",
        englishName: "Fatigue",
        definition: "Over consumption of qi and blood caused by long-term overwork, leading to persistent physical and mental exhaustion that cannot be relieved by rest",
        symptoms: "全身酸软酸痛、极度困倦、注意力无法集中、做事没动力、整日昏昏欲睡 / General soreness all over the body, extreme tiredness, poor concentration, lack of motivation, always feeling sleepy",
        applicable: "潞党参、党参、黄芪、丹参 / Luzhou Dangshen, Dangshen, Astragalus, Salvia<br>潞党参茶、黄芪茶、补气方、黄芪排骨汤 / Luzhou Dangshen Tea, Astragalus Tea, Qi-Tonifying Formula, Astragalus Pork Rib Soup"
    },
    {
        name: "免疫力低",
        pinyin: "Miǎn Yì Lì Dī",
        description: "机体正气虚弱、抗病屏障薄弱，身体抵御外界病菌能力差，容易反复生病",
        category: "病症与调理 Conditions & Regulation",
        image: "images/conditions/免疫力低.jpg",
        englishName: "Low Immunity",
        definition: "Weak body resistance and healthy qi, making the human body vulnerable to external germs and repeated illness",
        symptoms: "频繁反复感冒、伤口愈合缓慢、体质虚弱、换季极易生病 / Catch colds very frequently, slow wound healing, weak physical condition, easy to get sick during seasonal change",
        applicable: "黄芪、潞党参、党参、金银花、连翘 / Astragalus, Luzhou Dangshen, Dangshen, Honeysuckle, Weeping Forsythia<br>黄芪茶、潞党参茶、补气方 / Astragalus Tea, Luzhou Dangshen Tea, Qi-Tonifying Formula"
    },
    {
        name: "感冒",
        pinyin: "Gǎn Mào",
        description: "风寒、风热外邪侵袭人体体表，引发的常见外感病症",
        category: "病症与调理 Conditions & Regulation",
        image: "images/conditions/感冒.jpg",
        englishName: "Cold",
        definition: "A common exterior disease caused by wind-cold or wind-heat invading the human body surface",
        symptoms: "鼻塞流涕、头疼发热、咽喉肿痛、全身酸痛、畏寒怕冷 / Stuffy and runny nose, headache, fever, sore throat, body ache, chills",
        applicable: "柴胡、防风、连翘、黄芩、金银花、菊花 / Bupleurum, Saposhnikovia, Weeping Forsythia, Scutellaria, Honeysuckle, Chrysanthemum<br>清热方、连翘茶、金银花茶、菊花茶 / Heat-Clearing Formula, Forsythia Tea, Honeysuckle Tea, Chrysanthemum Tea"
    },
    {
        name: "咳嗽",
        pinyin: "Ké Sòu",
        description: "肺宣发肃降功能失常、肺气上逆，由外邪入侵或体内痰湿引发的不适症状",
        category: "病症与调理 Conditions & Regulation",
        image: "images/conditions/咳嗽.jpg",
        englishName: "Cough",
        definition: "Lung fails to disperse and descend normally, with upward reversed lung qi, caused by external pathogens or internal phlegm dampness",
        symptoms: "喉咙发痒、反复咳嗽、干咳或咳痰、胸闷气短、咽喉有异物感 / Itchy throat, frequent cough, dry cough or cough with phlegm, chest tightness, shortness of breath",
        applicable: "桔梗、黄芩、连翘、菊花 / Platycodon, Scutellaria, Weeping Forsythia, Chrysanthemum<br>润肺方、清热方、菊花茶、百合粥 / Lung-Moistening Formula, Heat-Clearing Formula, Chrysanthemum Tea, Lily Bulb Porridge"
    },
    {
        name: "上火",
        pinyin: "Shàng Huǒ",
        description: "体内阴阳失衡，内热堆积、火气上炎引发的热性身体问题",
        category: "病症与调理 Conditions & Regulation",
        image: "images/conditions/上火.jpg",
        englishName: "Internal Heat",
        definition: "Imbalance of yin and yang inside the body, with excessive internal heat flaring upwards",
        symptoms: "口舌生疮、牙龈肿痛、口干口苦、长痘心烦、小便深黄、情绪易怒 / Mouth and tongue ulcers, swollen gums, bitter dry mouth, acne, irritability, dark yellow urine",
        applicable: "连翘、黄芩、苦参、金银花、菊花 / Weeping Forsythia, Scutellaria, Sophora Root, Honeysuckle, Chrysanthemum<br>清热方、连翘茶、金银花茶、菊花茶 / Heat-Clearing Formula, Forsythia Tea, Honeysuckle Tea, Chrysanthemum Tea"
    },
    {
        name: "亚健康",
        pinyin: "Yà Jiàn Kāng",
        description: "介于健康与疾病之间的临界灰色状态，无明确器质性病变，但身体长期多处不适、机能衰退",
        category: "病症与调理 Conditions & Regulation",
        image: "images/conditions/亚健康.jpg",
        englishName: "Sub-health",
        definition: "A critical grey state between complete health and illness, with no obvious organic disease but long-term general discomfort",
        symptoms: "长期莫名疲惫、睡眠质量差、情绪低落、消化紊乱、抵抗力差、浑身说不出的难受不适 / Long-term unexplained fatigue, poor sleep quality, low mood, poor digestion, low immunity, general physical discomfort",
        applicable: "潞党参、黄芪、山药、酸枣仁、丹参 / Luzhou Dangshen, Astragalus, Chinese Yam, Spine Date Seed, Salvia<br>补气方、健脾方、润肺方、各种药茶和药膳 / Qi-Tonifying Formula, Spleen-Strengthening Formula, Lung-Moistening Formula, all kinds of above medicinal teas and medicinal diets"
    },
    {
        name: "党参炖鸡",
        pinyin: "Dǎng Shēn Dùn Jī",
        description: "补中益气、补虚养血，改善体虚乏力、气血不足",
        category: "药膳 Medicinal Diet",
        image: "images/medicinal_diet/党参炖鸡.jpg",
        englishName: "Dangshen Stewed Chicken",
        ingredients: "党参、土鸡、生姜、红枣 / Dangshen, local chicken, ginger, red dates",
        method: "鸡肉焯水去腥味，搭配党参、姜片一同放入砂锅，小火慢炖60分钟，加盐调味即可 / Blanch chicken to remove fishy smell, put it in a casserole with dangshen and ginger slices, simmer on low heat for 60 minutes, season with salt",
        directions: "佐餐食用，温热进食 / Serve with meals, eat while warm",
        efficacy: "补中益气、补虚养血，改善体虚乏力、气血不足 / Tonify middle energizer and replenish qi, nourish blood and tonify deficiency, improve physical weakness and insufficient qi and blood"
    },
    {
        name: "黄芪排骨汤",
        pinyin: "Huáng Qí Pái Gǔ Tāng",
        description: "益气固表、强身健体，增强免疫力、缓解气虚易累",
        category: "药膳 Medicinal Diet",
        image: "images/medicinal_diet/黄芪排骨汤.jpg",
        englishName: "Astragalus Pork Rib Soup",
        ingredients: "黄芪、猪排骨、姜片 / Astragalus, pork ribs, ginger slices",
        method: "排骨冷水下锅焯水，放入黄芪与姜片，文火炖煮40分钟调味食用 / Blanch pork ribs in cold water, add astragalus and ginger slices, simmer gently for 40 minutes and season",
        directions: "正餐食用，每周2-3次 / Eat as daily meal, 2-3 times a week",
        efficacy: "益气固表、强身健体，增强免疫力、缓解气虚易累 / Replenish qi and consolidate exterior, strengthen body constitution, boost immunity and relieve qi-deficiency fatigue"
    },
    {
        name: "山药粥",
        pinyin: "Shān Yào Zhōu",
        description: "补脾养胃、生津益肺，调理脾胃虚弱、食欲不振",
        category: "药膳 Medicinal Diet",
        image: "images/medicinal_diet/山药粥.jpg",
        englishName: "Chinese Yam Porridge",
        ingredients: "山药、大米 / Chinese yam, rice",
        method: "山药去皮切块，与大米一同熬煮30分钟，煮至软糯黏稠即可 / Peel and cut Chinese yam into pieces, cook with rice for 30 minutes until soft and thick",
        directions: "早餐空腹食用 / Eat on an empty stomach for breakfast",
        efficacy: "补脾养胃、生津益肺，调理脾胃虚弱、食欲不振 / Tonify spleen and stomach, nourish fluid and moisten lung, regulate weak spleen and stomach and poor appetite"
    },
    {
        name: "红枣粥",
        pinyin: "Hóng Zǎo Zhōu",
        description: "补气养血、安神暖胃，改善气血亏虚、面色暗沉",
        category: "药膳 Medicinal Diet",
        image: "images/medicinal_diet/红枣粥.jpg",
        englishName: "Red Date Porridge",
        ingredients: "红枣、大米 / Red dates, rice",
        method: "红枣去核，和大米共同慢熬25分钟，香甜软糯即可 / Remove pits from red dates, simmer slowly with rice for 25 minutes until fragrant and soft",
        directions: "早晚餐均可食用 / Edible for breakfast and dinner",
        efficacy: "补气养血、安神暖胃，改善气血亏虚、面色暗沉 / Replenish qi and nourish blood, soothe nerves and warm stomach, improve qi-blood deficiency and dull complexion"
    },
    {
        name: "百合粥",
        pinyin: "Bǎi Hé Zhōu",
        description: "养阴润肺、清心安神，缓解燥热干咳、心绪烦躁",
        category: "药膳 Medicinal Diet",
        image: "images/medicinal_diet/百合粥.jpg",
        englishName: "Lily Bulb Porridge",
        ingredients: "干百合、大米 / Dried lily bulb, rice",
        method: "干百合泡发，与大米加水熬煮25分钟即成 / Soak dried lily bulb, boil with rice and water for 25 minutes",
        directions: "睡前或晚餐食用 / Take at dinner or before bedtime",
        efficacy: "养阴润肺、清心安神，缓解燥热干咳、心绪烦躁 / Nourish yin and moisten lung, clear heart and calm mind, relieve dry cough and irritability"
    }
];

// DOM元素
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const herbsList = document.getElementById('herbs-list');
const categoryLinks = document.querySelectorAll('.categories a');

// 渲染中药材列表
function renderHerbs(herbs) {
    herbsList.innerHTML = '';

    if (herbs.length === 0) {
        herbsList.innerHTML = '<div class="no-results">没有找到匹配的中药材</div>';
        return;
    }

    herbs.forEach((herb, index) => {
        const herbItem = document.createElement('div');
        herbItem.className = 'herb-item';
        
        let descriptionText = herb.description;
        if (herb.category === '道地药材 Herbs' && herb.englishDescription) {
            descriptionText = `${herb.description}<br>${herb.englishDescription}`;
        } else if ((herb.category === '药茶/方剂 Teas & Formulas' || herb.category === '药膳 Medicinal Diet') && herb.efficacy) {
            // 提取功效内容，删除标签和斜杠
            const efficacyText = herb.efficacy.replace(/\s*\/\s*/, '<br>');
            descriptionText = efficacyText;
        } else if ((herb.category === '病症与调理 Conditions & Regulation' || herb.category === '炮制与功效 Processing & Efficacy') && herb.definition) {
            // 为病症与调理和炮制与功效卡片添加Definition内容
            const definitionText = herb.definition;
            descriptionText = `${herb.description}<br>${definitionText}`;
        }
        
        herbItem.innerHTML = `
            <img src="${herb.image}" alt="${herb.name}">
            <h3>${herb.name} ${herb.pinyin}</h3>
            <p>${descriptionText}</p>
        `;

        herbItem.addEventListener('click', () => {
            const originalIndex = herbsData.findIndex(h => h.name === herb.name);
            showHerbCard(herb, originalIndex);
        });

        herbsList.appendChild(herbItem);
    });
}

// 搜索功能
function searchHerbs() {
    const keyword = searchInput.value.trim().toLowerCase();

    if (!keyword) {
        renderHerbs(herbsData);
        return;
    }

    const filteredHerbs = herbsData.filter(herb =>
        herb.name.toLowerCase().includes(keyword) ||
        herb.pinyin.toLowerCase().includes(keyword) ||
        herb.description.toLowerCase().includes(keyword) ||
        (herb.englishName && herb.englishName.toLowerCase().includes(keyword)) ||
        (herb.englishDescription && herb.englishDescription.toLowerCase().includes(keyword))
    );

    renderHerbs(filteredHerbs);
}

// 显示药物卡片
function showHerbCard(herb, index = 0) {
    const card = document.createElement('div');
    card.className = 'herb-card';

    function updateCardContent(currentHerb) {
        let extraFields = '';
        if (currentHerb.category === '药茶/方剂 Teas & Formulas' || currentHerb.category === '药膳 Medicinal Diet') {
            extraFields = `
                ${currentHerb.englishName ? `<p><strong>英文/English：</strong>${currentHerb.englishName}</p>` : ''}
                ${currentHerb.ingredients ? `<p><strong>主要原料 Main ingredients：</strong>${currentHerb.ingredients.replace(/\s*\/\s*/, '<br>')}</p>` : ''}
                ${currentHerb.method ? `<p><strong>制作方法 Method of making：</strong>${currentHerb.method.replace(/\s*\/\s*/, '<br>')}</p>` : ''}
                ${currentHerb.directions ? `<p><strong>服用方法 Directions：</strong>${currentHerb.directions.replace(/\s*\/\s*/, '<br>')}</p>` : ''}
                ${currentHerb.efficacy ? `<p><strong>作用 Effect：</strong>${currentHerb.efficacy.replace(/\s*\/\s*/, '<br>')}</p>` : ''}
            `;
        } else if (currentHerb.category === '炮制与功效 Processing & Efficacy') {
            extraFields = `
                ${currentHerb.englishName ? `<p><strong>英文/English：</strong>${currentHerb.englishName}</p>` : ''}
                ${currentHerb.definition ? `<p><strong>释义/Definition：</strong>${currentHerb.definition}</p>` : ''}
            `;
        } else if (currentHerb.category === '病症与调理 Conditions & Regulation') {
            extraFields = `
                ${currentHerb.englishName ? `<p><strong>英文/English：</strong>${currentHerb.englishName}</p>` : ''}
                ${currentHerb.definition ? `<p><strong>释义/Definition：</strong>${currentHerb.definition}</p>` : ''}
                ${currentHerb.symptoms ? `<p><strong>常见症状/Common symptoms：</strong>${currentHerb.symptoms}</p>` : ''}
                ${currentHerb.applicable ? `<p><strong>适用药材与方剂：</strong>${currentHerb.applicable}</p>` : ''}
            `;
        } else {
            // 为道地药材创建功效容器
            let efficacyContainer = '';
            if (currentHerb.description || currentHerb.englishDescription) {
                efficacyContainer = `
                    <div class="efficacy-container">
                        <div class="efficacy-item">
                            <strong>功效/Effect：</strong>${currentHerb.description || ''}
                            <br>
                            <strong>Efficacy：</strong>${currentHerb.englishDescription || ''}
                        </div>
                    </div>
                `;
            }
            
            extraFields = `
                ${efficacyContainer}
                <p><strong>英文/English：</strong>${currentHerb.englishName || ''}</p>
                <p><strong>产地/Origin：</strong>${currentHerb.region || ''}</p>
            `;
        }

        // 检查是否需要显示相关卡片
        let relatedCardsHTML = '';
        
        // 病例相关的药材和方剂映射
        const conditionRelatedItems = {
            '气虚': ['潞党参', '党参', '黄芪', '补气方', '潞党参茶', '黄芪茶'],
            '脾虚': ['苍术', '白术', '山药', '党参', '健脾方', '山药粥'],
            '肺热': ['连翘', '黄芩', '桔梗', '金银花', '菊花', '清热方', '润肺方', '连翘茶', '金银花茶', '菊花茶', '百合粥'],
            '失眠': ['酸枣仁', '远志', '丹参', '酸枣仁茶'],
            '疲劳': ['潞党参', '党参', '黄芪', '丹参', '潞党参茶', '黄芪茶', '补气方', '黄芪排骨汤'],
            '免疫力低': ['黄芪', '潞党参', '党参', '金银花', '连翘', '黄芪茶', '潞党参茶', '补气方'],
            '感冒': ['柴胡', '防风', '连翘', '黄芩', '金银花', '菊花', '清热方', '连翘茶', '金银花茶', '菊花茶'],
            '咳嗽': ['桔梗', '黄芩', '连翘', '菊花', '润肺方', '清热方', '菊花茶', '百合粥'],
            '上火': ['连翘', '黄芩', '苦参', '金银花', '菊花', '清热方', '连翘茶', '金银花茶', '菊花茶'],
            '亚健康': ['潞党参', '黄芪', '山药', '酸枣仁', '丹参', '补气方', '健脾方', '润肺方']
        };
        
        // 检查当前卡片是否为病例
        if (currentHerb.category === '病症与调理 Conditions & Regulation' && conditionRelatedItems[currentHerb.name]) {
            const relatedItems = conditionRelatedItems[currentHerb.name];
            const relatedData = herbsData.filter(item => relatedItems.includes(item.name));
            
            if (relatedData.length > 0) {
                relatedCardsHTML = `
                    <div class="related-cards">
                        <h4>相关药材与方剂 Relevant medicinal herbs and prescriptions</h4>
                        <div class="related-cards-container">
                            ${relatedData.map(item => `
                                <div class="related-card" data-name="${item.name}">
                                    <img src="${item.image}" alt="${item.name}">
                                    <h5>${item.name} ${item.englishName || ''}</h5>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;
            }
        }

        card.innerHTML = `
            <div class="card-content">
                <div class="card-info">
                    <h3>${currentHerb.name} ${currentHerb.pinyin}</h3>
                    ${extraFields}
                </div>
                <div class="card-image">
                    <img src="${currentHerb.image}" alt="${currentHerb.name}">
                </div>
            </div>
            ${relatedCardsHTML}
            <button class="close-btn">×</button>
            <div class="card-nav">
                <button class="nav-btn prev-btn">← 上一个</button>
                <button class="nav-btn next-btn">下一个 →</button>
            </div>
        `;

        // 添加相关卡片的点击事件
        if (currentHerb.category === '病症与调理 Conditions & Regulation') {
            const relatedCardElements = card.querySelectorAll('.related-card');
            relatedCardElements.forEach(element => {
                element.addEventListener('click', (e) => {
                    e.stopPropagation(); // 防止触发卡片的关闭事件
                    const itemName = element.getAttribute('data-name');
                    const itemData = herbsData.find(item => item.name === itemName);
                    if (itemData) {
                        // 关闭当前卡片
                        card.classList.add('fade-out');
                        setTimeout(() => {
                            document.body.removeChild(card);
                            // 显示相关项目的卡片
                            const itemIndex = herbsData.findIndex(item => item.name === itemName);
                            showHerbCard(itemData, itemIndex);
                        }, 300);
                    }
                });
            });
        }

        const prevBtn = card.querySelector('.prev-btn');
        const nextBtn = card.querySelector('.next-btn');

        prevBtn.addEventListener('click', () => {
            const prevIndex = (index - 1 + herbsData.length) % herbsData.length;
            updateCardWithAnimation(prevIndex, 'right');
        });

        nextBtn.addEventListener('click', () => {
            const nextIndex = (index + 1) % herbsData.length;
            updateCardWithAnimation(nextIndex, 'left');
        });
    }

    function updateCardWithAnimation(newIndex, direction) {
        const cardContent = card.querySelector('.card-content');
        cardContent.classList.add(`slide-${direction}`);

        setTimeout(() => {
            index = newIndex;
            updateCardContent(herbsData[index]);
            const newCardContent = card.querySelector('.card-content');
            newCardContent.classList.add(`slide-${direction}-enter`);

            setTimeout(() => {
                newCardContent.classList.remove(`slide-${direction}-enter`);
            }, 300);
        }, 300);
    }

    updateCardContent(herb);

    document.body.appendChild(card);

    const closeBtn = card.querySelector('.close-btn');
    closeBtn.addEventListener('click', () => {
        card.classList.add('fade-out');
        setTimeout(() => {
            document.body.removeChild(card);
        }, 300);
    });

    card.addEventListener('click', (e) => {
        if (e.target === card) {
            card.classList.add('fade-out');
            setTimeout(() => {
                document.body.removeChild(card);
            }, 300);
        }
    });

    let touchStartX = 0;
    let touchEndX = 0;

    card.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, false);

    card.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, false);

    function handleSwipe() {
        const swipeThreshold = 50;
        if (touchEndX < touchStartX - swipeThreshold) {
            const nextIndex = (index + 1) % herbsData.length;
            updateCardWithAnimation(nextIndex, 'left');
        }
        if (touchEndX > touchStartX + swipeThreshold) {
            const prevIndex = (index - 1 + herbsData.length) % herbsData.length;
            updateCardWithAnimation(prevIndex, 'right');
        }
    }

    setTimeout(() => {
        card.classList.add('show');
    }, 10);
}

// 分类筛选
function filterByCategory(category) {
    if (category === 'all') {
        renderHerbs(herbsData);
        return;
    }

    const filteredHerbs = herbsData.filter(herb => herb.category === category);
    renderHerbs(filteredHerbs);
}

// 事件监听器
searchBtn.addEventListener('click', searchHerbs);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchHerbs();
    }
});

categoryLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const category = link.textContent;
        filterByCategory(category);
    });
});

// 初始化
renderHerbs(herbsData);