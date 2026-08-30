// ================= 1. 数据源 =================
window.timelineMsg = [
  {
    type: "image",
    src: "./img/timeline/001212.jpg",
    span: 6,
    customRow: 2,
    customWidth: 700,
  },
  {
    date: "N.F.元年", // 大标题背景字
    title: "12.12隕星事件", // 样式A需要标题
    text: "隕星の落下で死の禁域（そのうち<span>内海</span>と呼ばれる）が生まれ、世界各地で超自然災害発生。人類の生活環境は悪化し、人口は大幅に減少、科学技術の発展も止まってしまう。残された資源を巡り国家間の対立が激化し、政治体制や経済システムも徐々に崩れていった。",
    isMajor: true, // 【样式A】开关
    customRow: 3.5,
  },
  {
    type: "image",
    src: "./img/timeline/00.jpg",
    span: 4.5,
    customRow: 1.5,
    customWidth: 500,
    forceCompact: true,
  },
  {
    date: "N.F.14年", // 大标题背景字
    title: "ナイトフォール宣言", // 样式A需要标题
    text: "国際連合が解散し、人類の文明は暗黒期に入る。",
    isMajor: true, 
    customRow: 2,
    customGap: -460, 
  },
  {
    date: "N.F.21年",
    text: "<span>チラン博士</span>が内海を調査するため、科学者を中心とした連合調査隊を組織する。内海突入から312分後、調査隊の反応はロストする。",
    customRow: 6,
    span: 3,
  },
  {
    type: "image",
    src: "./img/timeline/YFJ.png",
    customRow: 2,
    span: 2,
    customWidth: 200,
    forceCompact: true,
    caption: "YFJ" 
  },
  {
    date: "N.F.23年", // 大标题背景字
    title: "重要な資源", // 样式A需要标题
    text: "唯一の生存者であるチラン博士が死域から脱出、「YFJ」という災いを制御できる戦略物資を持ち帰った。<br>人々はキューブを消費することで汚染を緩和し、Ｍ値の上昇を抑えることができます。しかし、その原理は未だに不明のままです。<br>YFJは「災変」に対抗できる唯一の消耗性鉱物。隕星によりナイトフォール時代になったこの世界で、YFJは人類の存続に繋がる重要な資源になった。",
    isMajor: true, 
    customRow: 3.5,
  },


  {
    date: "N.F.24年", // 大标题背景字
    title: "都市「ディス」の建設", // 样式A需要标题
    text: "5つの宗主市が出資し、共同で内海周辺にディスを立ち上げた。移民を主な人口とするこのまちは、鉱業を礎にした。しかし、YFJの管理支配は全く宗主市の元に把握され、科学者たちはチラン博士の率いて<span>上庭</span>を秘かに成立。<br>各国はＥ.Ｄ.Ｇ.Ｅ.協定に調印し、ディスとYFJ貿易を行う。",
    isMajor: true, // 【样式A】开关
    customRow: 2.5,
  },
  {
    type: "image",
    src: "./img/timeline/24.jpg",
    span: 6,
    customRow: 4,
    customWidth: 700,
    caption: "FILE_REC_07_DIS"
  },
  {
    date: "N.F.25～60",
    title: "涅槃集団設立",
    text: "5つの宗主市が出資し、共同で内海周辺にディスを立ち上げた。移民を主な人口とするこのまちは、鉱業を礎にした。しかし、YFJの管理支配は全く宗主市の元に把握され、科学者たちはチラン博士の率いて<span>上庭</span>を秘かに成立。<br>各国はＥ.Ｄ.Ｇ.Ｅ.協定に調印し、ディスとYFJ貿易を行う。",
    isMajor: true, // 【样式A】开关
    customRow: 2,
  },
  {
    date: "N.F.33",
    text: "チラン逝去。その功績を記念し、名を冠した『チラン広場』が建設される。",
    span: 3,
    customRow: 6,
  },
  {
    date: "N.F.34年", // 大标题背景字
    title: "第1回ディス万国博覧会", // 样式A需要标题
    text: "（4年に一度開催）",
    isMajor: true, // 【样式A】开关
    customRow: 2.5,
  },

  {
    type: "image",
    src: "./img/timeline/60.jpg",
    span: 6,
    customRow: 4,
    customWidth: 700,
    caption: "涅槃港"
  },
  {
    date: "N.F.61.12.26",
    text: "ディス初の民選議長ダモンは暗殺され、ディス戌衛軍団第八連の上尉ブローク・フランシスは逃亡し、砂海遊撃隊を結成宗主市と対抗。",
    span: 3,
    customRow: 6,
  },
  {
    date: "N.F.66.6.13",
    title: "核爆 涅槃港",
    text: "宗主連合軍が警告なしに戦術核暖冬で涅槃の港を攻撃した。<br>貿易中心が核攻撃を受け、数十万人が即死、全都市が震撼。",
    isMajor: true, // 【样式A】
    span: 4,
    customRow: 1.5,
    forceCompact: true,
  },
  {
    type: "image",
    src: "./img/timeline/66.jpg",
    span: 6,
    customRow: 3,
    customWidth: 700,
    caption: "涅槃港_N.F.66.6.13"
  },
  {
    date: "N.F.66.8.27",
    text: "ブローク上尉は独立を訴える演説を行い、ディス独立軍の結成を正式に宣言しました。同日夜、ブローク上尉は2ヶ月前に受けた放射能汚染により不帰の客となり、<span>デレヴァン・スティール</span>が独立軍の統帥権を引き継ぎました。",
    customRow: 2,
    span: 4,
  },
  {
    date: "N.F.68.10.02",
    title: "戦争賢者",
    text: "友人（後に「edge-01」となる人物）からの「長年暗躍するカルト教団が、戦局を有利にする研究を行っている」という情報を頼りに、デレヴァンは小隊を率いて<span>福音地</span>の秘密儀式場を突き止め、パルマから「戦争」のルーンを奪取した。この出来事を契機に、「戦争の賢者」は歴代統帥の右腕に宿り続けることとなる。",
    isMajor: true,
    customRow: 6,
  },
  {
    type: "image",
    src: "./img/timeline/福音地.jpg",
    span: 6,
    customRow: 3,
    customWidth: 700,
    caption: "福音地"
  },

  {
    date: "N.F.72.12.26",
    title: "ディス独立",
    text: "ディス独立戦争が勝利を収めた。独立軍の統率者デレヴァンの宣言のもと、ディスは正式に独立を果たしました。彼自身も新ディスの初代議長の職務を引き受けました。",
    isMajor: true,
    customRow: 1.5,
  },
  {
    date: "N.F.72年～84年",
    text: "デレヴァンは城邦議長の職を長く務め続け、権力の譲渡を拒否し、選挙を操作して強引に再選を重ねました。これにより、彼はディス史上最も長期間統治した独裁者となりました。彼の統治下では、対外的には狂気的な拡張と略奪を繰り返し。国内では異分子を高圧的に弾圧し、至るところで腐敗がはびこりました。城邦は次第に腐敗の一途をたどりました。",
    customRow: 7,
    span: 5,
  },
  {
    date: "N.F.81年",
    text: "都市の拡大に伴い、ディスは東西二区に分割された。鉱業の大部分は西区に集中している。",
    customRow: 2,
    span: 2,
  },
  {
    type: "image",
    src: "./img/timeline/8101.jpg",
    span: 3,
    customRow: 2,
    customWidth: 700,
    caption: "新都市（東区）"
  },
  {
    type: "image",
    src: "./img/timeline/8102.jpg",
    span: 3,
    customRow: 6,
    customWidth: 700,
    caption: "西区"
  },
  {
    date: "N.F.83年",
    text: "幼少期の<span>レオポルド</span>は軍人だった両親が政治闘争に巻き込まれ、戦場で無駄死した後、親族や友人の養子縁組の申し出をすべて拒否し、復讐を誓って福音地に身を投じました。それ以来、レオポルドは福音地において<span>最も鋭い刃</span>となりました。",
    span: 4,
    customRow: 2,
  },
  {
    type: "image",
    src: "./img/timeline/84.jpg",
    span: 6,
    customRow: 3,
    customWidth: 700,
    caption: "BR-000"
  },
  {
    date: "N.F.84.06.15",
    title: "BR-000爆発",
    text: "ディスがある実験の失敗により<span>内海大爆発</span>を引き起こした。これにより、最初の黒環<span>BR-000</span>が誕生。内海大爆発と合わせ、直接的な死者数は87231人に上った。YFJの生産量を急減させ、国外へのYFJ輸出が大幅に減少した。",
    isMajor: true,
    customRow: 2,
  },
  {
    date: "N.F.84.12.22",
    text: "内海大爆発事件後、ディス旧軍の権威体制は完全に崩壊した。<span>EDGE-01</span>の説得を受け、残存する軍政体系が<span>FAC</span>に再構築されるデレヴァンが初代総司令を兼任し、FACの主力を狂厄への抵抗へと大きくシフトさせた。",
    customRow: 7,
    span: 3.5,
  },
  {
    date: "N.F.84年",
    text: "わずか6歳の<span>セヴェロ</span>は家族を失い、行き場を失った末に福音地に拾われ、<span>レオポルドを師と仰ぎました</span>。",
    customRow: 2,
    span: 3,
  },
  {
    date: "N.F.89.06.27",
    title: "BR-001爆発",
    text: "6月25日、被災後の士気を高めるため、ディスのカーニバルが再開された。6月27日、BR-001爆発。行方不明者は3万人を超え、史上初めて、<span>能力者</span>の存在が公表される。FACがディスシティで能力者の逮捕を行い始める",
    isMajor: true,
    customRow: 2,
  },
  {
    type: "image",
    src: "./img/timeline/89.jpg",
    span: 6,
    customRow: 3,
    customWidth: 700,
    caption: "BR-001" 
  },
  {
    date: "N.F.92年",
    text: "BR-001から溢れた汚染が封鎖エリアが形成し、現在もそれを除去できていない。<span>錆の川封鎖エリア</span>の形成",
    customRow: 2,
    span: 3,
  },
  {
    date: "N.F.103年",
    text: "<span>HUSH-X</span>は、上庭の第七代執行人に就任しました。",
    customRow: 7,
    span: 2,
  },
  {
    date: "N.F.103.8", // 大标题背景字
    title: "月蝕作戦", // 样式A需要标题
    text: "上庭は福音地が内海で秘密裏に実験を行っていることを察知し、FACを派遣して蝕月行動を実行しました。全軍が壊滅するほどの犠牲を払い、13体の<span>実験体</span>を奪還しました。しかし、総司令デレヴァンに忠誠を誓う多くのFAC兵士が内海で命を落とし、FACおよび総司令自身は甚大な名声の打撃を受けました。その威信は一気に地に落ちました。これにより、EDGEは二つの目的を達成しました。①福音地の重要な実験体の奪取。②デレヴァンの権力を空洞化すること。",
    isMajor: true, // 【样式A】开关
    customRow: 2,
    forceCompact: true,
  },
  {
    date: "N.F.103年10月",
    text: "69歳のデレヴァンは████によって殺害されました。第二代FAC総司令にはアドリアン・スターリングが就任しました。████はディス旧軍を率いてディスを離れ。",
    customRow: 7,
    span: 3,
  },
  {
    date: "N.F.104.11.28", // 大标题背景字
    title: "BR-002爆発", // 样式A需要标题
    text: "W-31採掘地で事故が発生、直接的な死者は約1万5千人。そのほとんどが鉱阱で働いていた労働者でした。その後、狂厄汚染の影響を受けた人数は約10万人に上っています。ディスシティがYFJを緊急戦略資源として独占し、遠邦への輸出を全面禁止し、関係が急速に悪化",
    isMajor: true, // 【样式A】开关
    customRow: 2,
  },
  {
    type: "image",
    src: "./img/timeline/104.jpg",
    span: 6,
    customRow: 3,
    customWidth: 700,
    caption: "W-31採掘地"
  },
  {
    date: "N.F.106",
    title: "BR-003爆発",
    text: "第12回ディス万国博覧会が開催、しかし、過激なマニア分子の暗躍によってBR-003が爆発し、平和の祭典は無残に打ち砕かれる。甚大な犠牲の末に封鎖されたBR-003は、上庭が管轄する<span>天災兵器</span>へと成り果てた。ひとたび起動すれば、任意の人口密集地へ無作為に天災を降らせることが可能である。この絶対的な抑止力の下、揺らぎかけていた平和は再び盤石なものとなったのである。",
    isMajor: true,
    customRow: 6.5,
  },
  {
    type: "image",
    src: "./img/timeline/br003.jpg",
    span: 6,
    customRow: 3,
    customWidth: 700,
    caption: "BR-003"
  },
  {
    date: "N.F.112", // 大标题背景字
    title: "BR-004爆発", // 样式A需要标题
    text: "W-31採掘地で事故が発生、直接的な死者は約1万5千人。そのほとんどが鉱阱で働いていた労働者でした。その後、狂厄汚染の影響を受けた人数は約10万人に上っています。ディスシティがYFJを緊急戦略資源として独占し、遠邦への輸出を全面禁止し、関係が急速に悪化",
    isMajor: true, // 【样式A】开关
    customRow: 2,
  },
  {
    type: "image",
    src: "./img/timeline/1120820.jpg",
    span: 7,
    customRow: 4,
    customWidth: 700,
    caption: "チラン広場"
  },
  {
    date: "N.F.113年",
    text: "レオポルドは自分の余命が短いことを悟り、事前にセヴェロに後事を託した。セヴェロは大きな衝撃を受け、命を延ばせるような情報を必死に探し始めた。",
    span: 3,
  },
  
  {
    date: "N.F.113.3", // 大标题背景字
    title: "BR-002再爆発", // 样式A需要标题
    text: "死者数は約3万人で、このうち一部は黒環の暴発そのものではなく、锈火暴動によって命を落としています。113年8月、FACが封鎖行動を開始する時点で、狂厄汚染の影響下にある人数はすでに17万人近くに達していました。",
    isMajor: true, // 【样式A】开关
    customRow: 2,
  },
  {
    type: "image",
    src: "./img/timeline/113.jpg",
    span: 7,
    customRow: 3,
    customWidth: 700,
    caption: "BR-002再爆発"
  },
  {
    date: "N.F.113年6月",
    text: "BR-002事件後、福音地の勢力は新城から撤退し、東区の混乱事件は減少、西区が主要な戦場となる。FACは黒環防衛陣線の構築を計画する。<br>福音地と上庭は互いにスパイを送り込んた。福音地はスパイを通じて上庭の秘密兵器「HUSH」システムの存在を知り、能力者組織「GARDEN」にその破壊を依頼するが、首領レオポルドに拒否される――彼女はより有利な介入のタイミングを待っている。<br>一方、HUSH部隊は福音地を掃除任務を受け、まず福音地と曖昧な関係を持つ能力者組織「GARDEN」を標的にした。HUSH部隊はHUSH-X（以下、X）の指揮下で「GARDEN」への破壊を開始。",
    customRow: 2,
  },
  {
    date: "N.F.113.7.16",
    title: "序章始める",
    text: "ヒーゲル（福音地の幹事の一人）がセヴェロを見つけ、「GARDEN」と「命の延長」を餌に、単瞳のルーンを与え、上庭特使Xの暗殺を頼んだ。",
    isMajor: true, // 【样式A】开关
    customRow: 2,
  },
  {
    date: "N.F.113年7月16日～7月19日",
    text: "高級官僚が次々と襲撃され、「GARDEN」の暗殺リストに載っていると疑われる。",
    customRow: 7,
    forceCompact: true,
  },
  {
    date: "N.F.113年7月20日 23:37",
    text: '新城エリカ山荘（Xが一時滞在するリゾート別荘、周辺は「禁閉者」を対象とした天羅地網が張られている）<br><span class="cus-key">刺客<span class="cus-target2">（セヴェロ）</span></span>の襲撃により、X宅が注目を集め、全城に藍雨が48時間降り注ぎ、外部からの大規模襲撃を抑制。',
  },
  {
    date: "N.F.113年7月21日 21:23、「GARDEN」基地",
    text: "レオポルドはセヴェロの誕生日を祝い、緊張を和らげようとするが、セヴェロが謎で姿を消し、失踪した。",
  },
  {
    date: "N.F.113年7月22日 08:05、セヴェロの仕立て屋",
    text: "数日間、セヴェロはエリカ山荘の警備員（禁閉者を含む）と何度も正面衝突した。「GARDEN」に戻って休息しようとした矢先、調査員が訪ねてくる。<br>セヴェロは一瞬心を動かされ、自身と「同じ境遇」に見える調査員を引き込もうとし、「上庭に傷つけられた同類」だと説得、「GARDEN」の首領レオポルドが復讐を助けられると伝えた。しかし、その優しさは強く拒絶され、逆に調査員に裏切られた。最終的にセヴェロは罠に落ち、能力者対策の部隊に制圧され、昏迷状態に陥る。調査員もSan値が限界に達し、一時的に行動不能となる。",
  },
  {
    date: "N.F.113年7月22日 17:10、X宅",
    text: "上庭の「代理」が現れ、Xに新たな任務を伝え、セヴェロの審問を引き継ぐ。",
  },
  {
    date: "N.F.113年7月22日 23:04、X宅の地下室",
    text: "セヴェロが「GARDEN」への忠誠は揺るぎない。数時間にわたる審問は進展せず、代理人はセヴェロの罵倒以外何も得られなかった。そこへXが「生きているセヴェロの方が価値がある」と提案――セヴェロを人質として連れ去れ、レオポルドから福音地の重要情報を引き出すという計画を立てた。代理人はその提案を認める。しかし、「レオポルド」の名を耳にした瞬間、セヴェロは福音地から与えられた単瞳のルーンを起動。ルーンの力が暴走し、彼女は一瞬で制御を失い、監禁を突破して屋敷から逃走し、大混乱を引き起った。",
  },
  {
    date: "N.F.113年7月22日 23:24、山荘内",
    text: "失血多量と狂厄汚染の二重の打撃により、暴走していたセヴェロがついに倒れた。間一髪のところで、レオポルドが駆けつけ、彼女を救い出す。",
  },
  {
    date: "N.F.113.7.23",
    title: "序章終了",
    text: "レオポルドは福音地からFAC総司令の暗殺依頼を引き受け、セヴェロは「GARDEN」に戻り体を休養する。",
    isMajor: true, // 【样式A】开关
    customRow: 2,
  },
  {
    date: "N.F.113年8月7日～",
    text: "L开始实施她精心筹备的同态复仇计划。第一位死者是安娜尼亚死亡。<br>「沉水之花」案件",
  },
  {
    date: "N.F.113年8月8日 09:00 FAC纪念陵园",
    text: "FAC举行103年西区作战死难者追悼仪式。侦探接到瑟琳的电话，得知「Garden」杀手出没，被任命为特派调查员。",
  },
  {
    date: "N.F.113年8月8日 16:00 新城中央公园 落花庭院",
    text: "侦探初露锋芒，解开手机线索。业师（可可莉克）变装为治安官在现场观察，与侦探发生追逐和短暂交手。业师从侦探胸口抽出一朵“金盏菊”的花苞，留下四句预告诗后离开。",
  },
  {
    date: "N.F.113年8月9日 17:36  “溃裂之墙”",
    text: "工事中",
  },
  {
    date: "N.F.113年8月15日 11:32-11:56、FAC临时指挥部",
    text: "工事中",
  },
  {
    date: "N.F.113年8月15日 11:32-11:56、FAC临时指挥部",
    text: "工事中",
  },
  {
    date: "N.F.113年8月14日 新城第三大道 落日俱乐部",
    text: "侦探推理出，这12个人是基金会贪污抚恤金的元老。而第三现场其实是杀手“蓟”私自刺杀核心人物“犹津”的地方。可可莉克为了帮徒弟掩盖失误，故意制造了华丽的第四现场来转移视线。",
  },
  {
    date: "N.F.113年8月14日 21:25",
    text: "杀手“蓟”得知后再次潜入试图补刀，被早已埋伏的侦探抓捕。侦探以为案子结束，但在回家的孤巷中被人打晕。",
  },
  {
    date: "N.F.113年8月17日 14:23、FAC黑环封锁行动联合指挥部",
    text: "工事中",
  },
  {
    date: "N.F.113年8月19日 0:00-2:23、锈河近内海辐射区",
    text: "工事中",
  },
  {
    date: "N.F.113年8月23日 4:30-4:35、花园基地",
    text: "工事中",
  },
  {
    date: "N.F.113年8月23日 7:00-17:20、FAC联合指挥部及观测庭",
    text: "工事中",
  },
  {
    date: "N.F.113年8月26日、FAC纪念园",
    text: "工事中",
  },
  {
    date: "N.F.113年8月26日、上庭内部会议",
    text: "工事中",
  },
  {
    date: "FIN",
    title: "TO BE CONTINUED",
    text: "つづく",
    isMajor: true, // 【样式A】开关
    customRow: 4,
  },
];

// ================= 2. 自动布局算法 (支持自定义间距版) =================
function generateLayout(data) {
  const X_START = window.innerWidth * 0.15;
  const placedItems = []; // 存储已排布好的元素，用于物理碰撞检测

  return data.map((item, index) => {
    // --- 1. 尺寸计算 ---
    let span = 3;
    let widthFactor = 300;

    if (item.span) {
        span = item.span;
        widthFactor = item.customWidth || (item.type === 'image' ? span * 80 : 320);
    }
    else if (item.type === "image") {
      span = 5;
      widthFactor = item.customWidth || span * 80;
    } else if (item.isMajor) {
      span = 5;
      widthFactor = 550;
    } else {
      const textLen = item.text.length;
      if (textLen > 180) { span = 6; widthFactor = 420; }
      else if (textLen > 100) { span = 5; widthFactor = 380; }
      else if (textLen > 50) { span = 4; widthFactor = 340; }
      else if (textLen > 30) { span = 3; widthFactor = 300; }
      else { span = 2; widthFactor = 280; }
    }

    // --- 2. 行号确定 ---
    const prevItem = index > 0 ? placedItems[index - 1] : null;
    let row;
    if (item.customRow !== undefined) {
      row = item.customRow;
    } else {
      const lastRow = prevItem ? prevItem.row : 4;
      const step = Math.floor(Math.random() * 5) - 2;
      row = lastRow + step;
    }

    if (row < 1) row = 1;
    if (row + span > 9) row = 9 - span;

    // --- 3. 计算【初始预期位置】 ---
    let baseGap = 50; // 默认基本间距

    if (prevItem) {
      if (item.customGap !== undefined) {
        // A) 如果用户手动指定了 customGap，直接使用该数值（相对于前一个元素的结束位置）
        baseGap = item.customGap;
      } else {
        // B) 自动计算间距
        const isOverlappingVertically = Math.max(prevItem.row, row) < Math.min(prevItem.row + prevItem.span, row + span);
        const prevType = prevItem.type || (prevItem.isMajor ? 'major' : 'text');

        if (!isOverlappingVertically) {
          // 垂直方向【不重叠】：可以使用负数间距将元素“拉回”，使其在水平上重叠对齐
          if (item.forceCompact) {
            baseGap = -prevItem.width + 30;  // 强力拉回，与前一个元素的起始位置仅错开 30px
          } else if (item.type === "image" && prevType === "image") {
            baseGap = -prevItem.width + 60;  // 图片间横向交叠
          } else if (item.type !== "image" && prevType !== "image") {
            baseGap = -prevItem.width + 80;  // 文字块间横向交叠
          } else {
            baseGap = -prevItem.width + 50;  // 默认错开 50px
          }
        } else {
          // 垂直方向【有重叠】：必须使用正数间距避让
          if (prevItem.isMajor) {
            baseGap = 120;
          } else if (item.isMajor) {
            baseGap = 150;
          } else {
            baseGap = 80;
          }
        }
      }
    }

    // 计算初步 X 坐标（基于前一个元素的结束位置进行偏移）
    let myX = (index === 0) ? X_START : (prevItem.x + prevItem.width + baseGap);

    // --- 4. 2D 物理碰撞检测与动态推开 ---
    let collided = true;
    let safetyCounter = 0;

    while (collided && safetyCounter < 150) {
      collided = false;
      for (let i = 0; i < index; i++) {
        const prev = placedItems[i];
        
        // 检测垂直高度区间是否有交集
        const vertOverlap = Math.max(prev.row, row) < Math.min(prev.row + prev.span, row + span);
        
        if (vertOverlap) {
          let marginRight = 60; // 默认防撞保护边界
          if (prev.isMajor) {
            marginRight = 120;
          } else if (prev.forceCompact) {
            marginRight = 20;
          } else if (prev.type === "image") {
            marginRight = 50;
          }

          const obstacleRightBoundary = prev.x + prev.width + marginRight;

          // 发生碰撞时强行向右推移
          if (myX < obstacleRightBoundary) {
            myX = obstacleRightBoundary;
            collided = true; 
            break; 
          }
        }
      }
      safetyCounter++;
    }

    // --- 5. 存储并返回最终计算数据 ---
    const resolvedItem = {
      ...item,
      x: myX,
      row: row,
      span: span,
      width: widthFactor,
    };
    placedItems.push(resolvedItem);
    return resolvedItem;
  });
}

// ================= 3. 核心执行逻辑 =================
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("timelineContainer");
  const items = generateLayout(window.timelineMsg);

  const lastItem = items[items.length - 1];
  const totalWidth = lastItem.x + lastItem.width + window.innerWidth;
  container.style.width = `${totalWidth}px`;

  items.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = `event-item item-${index}`;

    if (item.isMajor) div.classList.add("is-major");

    div.style.left = `${item.x}px`;
    div.style.top = `${item.row * 10}vh`;
    // 强制整数高度对齐
    div.style.height = `${item.span * 10}vh`; 
    div.style.width = `${item.width}px`;

    if (item.type === "image") {
      div.classList.add("is-image");
      const labelText = item.caption || `FILE_REC_${index < 10 ? '0'+index : index}`;
      
      div.innerHTML = `
          <div class="img-file-tag">${labelText}</div>
          <img src="${item.src}">
      `;
    } else if (item.isMajor) {
      div.innerHTML = `
              <div class="major-bg-year">${item.date}</div>
              <div class="major-content-wrap">
                    <div class="major-title">${item.title}</div>
                    <div class="major-desc">${item.text}</div>
                </div>
          `;
    } else {
      div.innerHTML = `
              <div class="event-date">${item.date}</div>
              <div class="event-text">${item.text}</div>
          `;
    }
    container.appendChild(div);
  });

  // GSAP 动画
  gsap.registerPlugin(ScrollTrigger);

  const scrollTween = gsap.to(container, {
    x: -(totalWidth - window.innerWidth),
    ease: "none",
    scrollTrigger: {
      trigger: ".wrapper",
      pin: true,
      scrub: 0.2,
      end: () => `+=${totalWidth}`,
      onUpdate: (self) => {
        // 进度条跟随
        const p = self.progress * 100;
        document.querySelector(".diamond-cursor").style.left = `${p}%`;

        // 年份更新
        const currentIdx = Math.floor(self.progress * items.length);
        const currentItem = items[Math.min(currentIdx, items.length - 1)];
        if (currentItem && currentItem.date) {
          const cleanDate = currentItem.date.replace(/<br>/g, " ").split(" ")[0];
          document.querySelector(".cursor-label").innerText = cleanDate;
        }
      },
    },
  });

  // 元素入场
  items.forEach((item, index) => {
    const target = document.querySelector(`.item-${index}`);
    const startTrigger = "left 92%";

    if (item.type === "image") {
      gsap.to(target.querySelector("img"), {
        clipPath: "inset(0 0% 0 0)",
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: target,
          containerAnimation: scrollTween,
          start: startTrigger,
          toggleActions: "play none none none",
        },
      });
    } else if (item.isMajor) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: target,
          containerAnimation: scrollTween,
          start: startTrigger,
          toggleActions: "play none none none",
        },
      });
      tl.from(target.querySelector(".major-bg-year"), { x: -50, opacity: 0, duration: 0.8 })
        .from(target.querySelector(".major-title"), { scaleX: 0, transformOrigin: "left", duration: 0.5 }, "-=0.6")
        .from(target.querySelector(".major-desc"), { y: 20, opacity: 0, duration: 0.5 }, "-=0.3");
    } else {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: target,
          containerAnimation: scrollTween,
          start: startTrigger,
          toggleActions: "play none none none",
        },
      });
      tl.fromTo(target.querySelector(".event-date"), { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.5 })
        .to(target.querySelector(".event-text"), { opacity: 1, duration: 0.8 }, "-=0.3");
    }
  });

  // Lenis 设置
  const lenis = new Lenis({
    duration: 1.5,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    wheelMultiplier: 4.5,
    smooth: true,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // ================= 6. 进度条拖拽功能 (终极版：全屏投影映射) =================
  const cursor = document.querySelector('.diamond-cursor');
  const progressLine = document.querySelector('.progress-line');
  
  let isDragging = false;

  // 1. 按下
  cursor.addEventListener('mousedown', (e) => {
      isDragging = true;
      cursor.classList.add('is-dragging');
      document.body.classList.add('is-dragging-mode');
      e.preventDefault();
  });

  // 2. 全局移动
  window.addEventListener('mousemove', (e) => {
      if (!isDragging) return;

      const rect = progressLine.getBoundingClientRect();
      let p = (e.clientX - rect.left) / rect.width;
      p = Math.max(0, Math.min(1, p));

      const targetScroll = (totalWidth - window.innerWidth) * p;
      lenis.scrollTo(targetScroll, { immediate: true });
      cursor.style.left = `${p * 100}%`;
  });

  // 3. 全局松开
  window.addEventListener('mouseup', () => {
      if (isDragging) {
          isDragging = false;
          cursor.classList.remove('is-dragging');
          document.body.classList.remove('is-dragging-mode');
      }
  });

  // 4. 点击跳转
  progressLine.addEventListener('click', (e) => {
      if (e.target.closest('.diamond-cursor')) return;
      const rect = progressLine.getBoundingClientRect();
      const p = (e.clientX - rect.left) / rect.width;
      const targetScroll = (totalWidth - window.innerWidth) * p;
      lenis.scrollTo(targetScroll);
  });

  // ================= 7. 明暗模式切换 =================
  const modeBtn = document.getElementById('modeSwitch');
  // 检查是否存在按钮（防止报错）
  if (modeBtn) {
      modeBtn.addEventListener('click', () => {
          document.body.classList.toggle('dark-mode');
          if (document.body.classList.contains('dark-mode')) {
              modeBtn.innerText = "Dark";
          } else {
              modeBtn.innerText = "Light";
          }
      });
  }
});

function changeBanner(id) {
  console.log("Nav: " + id);
}