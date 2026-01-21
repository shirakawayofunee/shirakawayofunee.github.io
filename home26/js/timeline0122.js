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
    text: "隕星の落下で死の禁域（そのうち内海と呼ばれる）が生まれ、世界各地で超自然災害発生。",
    isMajor: true, // 【样式A】开关
    customRow: 4,
  },
  {
    type: "image",
    src: "./img/timeline/00.jpg",
    span: 4,
    customRow: 2,
    customWidth: 500,
  },
  {
    date: "N.F.21年",
    text: "チラン博士が内海を調査するため、科学者を中心とした連合調査隊を組織する。内海突入から312分後、調査隊の反応はロストする。",
    customRow: 6,
  },
  {
    date: "N.F.23年",
    text: "唯一の生存者であるチラン博士が死域から脱出、「YFJ」という災いを制御できる戦略物資を持ち帰った。",
    customRow: 2,
  },
  {
    type: "image",
    src: "./img/timeline/YFJ.png",
    customRow: 6,
    span: 2,
    customWidth: 200,
  },
  {
    date: "N.F.24年", // 大标题背景字
    title: "都市「ディス」の建設", // 样式A需要标题
    text: "5つの宗主市が出資し、共同で内海周辺にディスを立ち上げた。移民を主な人口とするこのまちは、鉱業を礎にした。しかし、YFJの管理支配は全く宗主市の元に把握され、科学者たちはチラン博士の率いて<span>上庭</span>を秘かに成立。<br>各国はＥ.Ｄ.Ｇ.Ｅ.協定に調印し、ディスとYFJ貿易を行う。",
    isMajor: true, // 【样式A】开关
    customRow: 2,
  },
  {
    type: "image",
    src: "./img/timeline/24.jpg",
    span: 6,
    customRow: 4,
    customWidth: 700,
  },
  {
    date: "N.F.25～60",
    title: "涅槃集団設立",
    text: "五つの宗主市は輸出を引き続き独占し、食糧の値上げなどの手段でディス本土の富を奪い取った。<br>宗主市内部での衝突もアップし、妥協として共に<span>涅槃集団</span>を設立した。",
    isMajor: true, // 【样式A】开关
    customRow: 2,
  },

  {
    type: "image",
    src: "./img/timeline/60.jpg",
    span: 6,
    customRow: 4,
    customWidth: 700,
  },
  {
    date: "N.F.61.12.26",
    text: "ディス初の民選議長ダモンは暗殺され、ディス戌衛軍団第八連の上尉ブローク・フランシスは逃亡し、砂海遊撃隊を結成宗主市と対抗。",
    customRow: 6,
  },
  {
    date: "N.F.66.6.13",
    title: "核爆 涅槃港",
    text: "宗主連合軍が警告なしに戦術核暖冬で涅槃の港を攻撃した。<br>貿易中心が核攻撃を受け、数十万人が即死、全都市が震撼。",
    isMajor: true, // 【样式A】
    customRow: 2,
  },
  {
    type: "image",
    src: "./img/timeline/66.jpg",
    span: 6,
    customRow: 3,
    customWidth: 700,
  },
  {
    date: "N.F.66.8.27",
    text: "ブローク上尉は独立を訴える演説を行い、ディス独立軍の結成を正式に宣言しました。同日夜、ブローク上尉は2ヶ月前に受けた放射能汚染により不帰の客となり、<span>デレヴァン・スティール</span>が独立軍の統帥権を引き継ぎました。",
    customRow: 2,
  },
  {
    date: "N.F.72.12.26",
    title: "「ディス」独立",
    text: "ディス独立戦争が勝利を収めた。独立軍の統率者デレヴァンの宣言のもと、ディスは正式に独立を果たしました。彼自身も新ディスの初代議長の職務を引き受けました。",
    isMajor: true,
    customRow: 7,
  },
  {
    date: "N.F.72年～84年",
    text: "デレヴァンは城邦議長の職を長く務め続け、権力の譲渡を拒否し、選挙を操作して強引に再選を重ねました。これにより、彼はディス史上最も長期間統治した独裁者となりました。彼の統治下では、対外的には狂気的な拡張と略奪を繰り返し。国内では異分子を高圧的に弾圧し、至るところで腐敗がはびこりました。城邦は次第に腐敗の一途をたどりました。",
    customRow: 7,
  },
  {
    date: "N.F.81年",
    text: "都市の拡大に伴い、ディスは東西二区に分割された。鉱業の大部分は西区に集中している。",
    customRow: 1,
  },
  {
    type: "image",
    src: "./img/timeline/8101.jpg",
    span: 3,
    customRow: 2,
    customWidth: 700,
  },
  {
    type: "image",
    src: "./img/timeline/8102.jpg",
    span: 3,
    customRow: 6,
    customWidth: 700,
  },
  {
    date: "N.F.83年",
    text: "幼少期の<span>レオポルド</span>は軍人だった両親が政治闘争に巻き込まれ、戦場で無駄死した後、親族や友人の養子縁組の申し出をすべて拒否し、復讐を誓って福音地に身を投じました。それ以来、レオポルドは福音地において<span>最も鋭い刃</span>となりました。",
  },
  {
    type: "image",
    src: "./img/timeline/84.jpg",
    span: 6,
    customRow: 3,
    customWidth: 700,
  },
  {
    date: "N.F.84年",
    text: "ディスがある実験の失敗により<span>内海大爆発</span>を引き起こした。これにより、最初の黒環<span>BR-000</span>が誕生。内海大爆発と合わせ、直接的な死者数は87231人に上った。YFJの生産量を急減させ、国外へのYFJ輸出が大幅に減少した。",
    customRow: 6,
  },
  {
    date: "N.F.84年12月22日",
    text: "内海大爆発事件後、ディス旧軍の権威体制は完全に崩壊した。EDGE-01の説得を受け、残存する軍政体系が<span>FAC</span>に再構築されるデレヴァンが初代総司令を兼任し、FACの主力を狂厄への抵抗へと大きくシフトさせた。",
    customRow: 1,
  },
  {
    date: "N.F.84年",
    text: "わずか6歳の<span>セヴェロ</span>は家族を失い、行き場を失った末に福音地に拾われ、<span>レオポルドを師と仰ぎました</span>。",
    customRow: 6,
  },
  {
    date: "N.F.89年6月27日",
    text: "BR-001爆発。行方不明者は3万人を超え、史上初めて、<span>能力者</span>の存在が公表される。",
    customRow: 2,
  },
  {
    type: "image",
    src: "./img/timeline/89.jpg",
    span: 6,
    customRow: 3,
    customWidth: 700,
  },
  {
    date: "N.F.103年",
    text: "<span>HUSH-X</span>は、上庭の第七代執行人に就任しました。",
    customRow: 7,
  },
  {
    date: "N.F.103", // 大标题背景字
    title: "月蝕作戦", // 样式A需要标题
    text: "上庭は福音地が内海で秘密裏に実験を行っていることを察知し、FACを派遣して蝕月行動を実行しました。全軍が壊滅するほどの犠牲を払い、13体の実験体を奪還しました。しかし、総司令デレヴァンに忠誠を誓う多くのFAC兵士が内海で命を落とし、FACおよび総司令自身は甚大な名声の打撃を受けました。その威信は一気に地に落ちました。これにより、EDGEは二つの目的を達成しました。①福音地の重要な実験体の奪取。②デレヴァンの権力を空洞化すること。",
    isMajor: true, // 【样式A】开关
    customRow: 2,
  },
  {
    date: "N.F.103年10月",
    text: "69歳のデレヴァンは████によって殺害されました。第二代FAC総司令にはアドリアン・スターリングが就任しました。████はディス旧軍を率いてディスを離れ。",
    customRow: 7,
  },
  {
    date: "N.F.104", // 大标题背景字
    title: "BR-002爆発", // 样式A需要标题
    text: "W-31採掘地で事故が発生、直接的な死者は約1万5千人。そのほとんどが鉱阱で働いていた労働者でした。その後、狂厄汚染の影響を受けた人数は約10万人に上っています。",
    isMajor: true, // 【样式A】开关
    customRow: 2,
  },
  {
    type: "image",
    src: "./img/timeline/104.jpg",
    span: 6,
    customRow: 3,
    customWidth: 700,
  },
  {
    date: "N.F.113年",
    text: "レオポルドは自分の余命が短いことを悟り、事前にセヴェロに後事を託した。セヴェロは大きな衝撃を受け、命を延ばせるような情報を必死に探し始めた。",
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
    span: 6,
    customRow: 3,
    customWidth: 700,
  },
  {
    date: "N.F.113年6月",
    text: "BR-002事件後、福音地の勢力は新城から撤退し、東区の混乱事件は減少、西区が主要な戦場となる。FACは黒環防衛陣線の構築を計画する。<br>福音地と上庭は互いにスパイを送り込んた。福音地はスパイを通じて上庭の秘密兵器「HUSH」システムの存在を知り、能力者組織「GARDEN」にその破壊を依頼するが、首領レオポルドに拒否される――彼女はより有利な介入のタイミングを待っている。<br>一方、HUSH部隊は福音地を掃除任務を受け、まず福音地と曖昧な関係を持つ能力者組織「GARDEN」を標的にした。HUSH部隊はHUSH-X（以下、X）の指揮下で「GARDEN」への破壊を開始。",
    customRow: 1,
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
    date: "N.F.113年8月15日 5:25、FAC临时指挥部",
    text: "工事中",
  },
  {
    date: "N.F.113年8月15日 11:32-11:56、FAC临时指挥部",
    text: "工事中",
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
];

// ================= 2. 自动布局算法 (修复版：优先级链条) =================
function generateLayout(data) {
  const X_START = window.innerWidth * 0.15;
  let currentX = X_START;
  let lastRow = 4;
  let lastSpan = 3;

  return data.map((item, index) => {
    // --- 1. 尺寸计算 ---
    let span = 3;
    let widthFactor = 300; 

    if (item.type === "image") {
      span = item.span || 5;
      widthFactor = item.customWidth || span * 80;
    } else if (item.isMajor) {
      span = 5;
      widthFactor = 480;
    } else {
      const textLen = item.text.length;
      if (textLen > 150) { span = 5; widthFactor = 400; } 
      else if (textLen > 80) { span = 4; widthFactor = 360; } 
      else { span = 3; widthFactor = 280; } 
    }

    // --- 2. 行号 (Row) 计算 ---
    let row;
    if (item.customRow !== undefined) {
      row = item.customRow;
    } else {
      const step = Math.floor(Math.random() * 5) - 2;
      row = lastRow + step;
    }

    if (row < 1) row = 1;
    if (row + span > 9) row = 9 - span;

    // --- 3. ★★★ 核心修复：将逻辑合并为一个完整的链条 ★★★ ---
    const rowDiff = Math.abs(row - lastRow);
    let gap = 20; // 默认基础间距

    // 【优先级 1】大事件绝对避让 (最高权重)
    if (item.isMajor) {
      gap = 120; 
    } 
    // 【优先级 2】如果前一个是图片，不要贴太近 (保护图片)
    else if (data[index - 1] && data[index - 1].type === "image") {
      gap = 60; 
    }
    // 【优先级 3】图片类型尝试轻微重叠
    else if (item.type === "image" && rowDiff > 1) {
      gap = -10;
    }
    // 【优先级 4】普通文字尝试深度重叠 (必须垂直距离够远)
    else if (index > 0 && rowDiff > 2) {
      gap = -120; 
    }
    // 【默认情况】保持 gap = 40

    let myX = currentX + gap;
    currentX = myX + widthFactor;

    lastRow = row;
    lastSpan = span;

    return {
      ...item,
      x: myX,
      row: row,
      span: span,
      width: widthFactor,
    };
  });
}

// ================= 3. 核心执行逻辑 =================
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("timelineContainer");
  const items = generateLayout(window.timelineMsg);

  // 计算容器总宽
  const lastItem = items[items.length - 1];
  const totalWidth = lastItem.x + lastItem.width + window.innerWidth;
  container.style.width = `${totalWidth}px`;

  // 渲染 DOM
  items.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = `event-item item-${index}`;

    // 样式 A (IsMajor) 需要额外 class
    if (item.isMajor) div.classList.add("is-major");

    div.style.left = `${item.x}px`;
    div.style.top = `${item.row * 10}vh`;
    div.style.height = `${item.span * 10}vh`;
    div.style.width = `${item.width}px`;

    if (item.type === "image") {
      // 图片模式
      div.classList.add("is-image");
      div.innerHTML = `<img src="${item.src}">`;
    } else if (item.isMajor) {
      // ★【样式 A】: 重点事件 (大背景字 + 黑标题)
      div.innerHTML = `
              <div class="major-bg-year">${item.date}</div>
              <div class="major-content-wrap">
                    <div class="major-title">${item.title}</div>
                    <div class="major-desc">${item.text}</div>
                </div>
          `;
    } else {
      // ★【样式 B】: 普通事件 (蓝日期 + 文字高亮)
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
        // 进度条
        const p = self.progress * 100;
        document.querySelector(".diamond-cursor").style.left = `${p}%`;

        // 年份更新
        const currentIdx = Math.floor(self.progress * items.length);
        const currentItem = items[Math.min(currentIdx, items.length - 1)];
        if (currentItem && currentItem.date) {
          const cleanDate = currentItem.date
            .replace(/<br>/g, " ")
            .split(" ")[0];
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
      // 图片 Wipe
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
      // ★【样式 A 动画】: 大字先出，标题弹入
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: target,
          containerAnimation: scrollTween,
          start: startTrigger,
          toggleActions: "play none none none",
        },
      });
      tl.from(target.querySelector(".major-bg-year"), {
        x: -50,
        opacity: 0,
        duration: 0.8,
      })
        .from(
          target.querySelector(".major-title"),
          { scaleX: 0, transformOrigin: "left", duration: 0.5 },
          "-=0.6"
        )
        .from(
          target.querySelector(".major-desc"),
          { y: 20, opacity: 0, duration: 0.5 },
          "-=0.3"
        );
    } else {
      // ★【样式 B 动画】: 简单的上浮
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: target,
          containerAnimation: scrollTween,
          start: startTrigger,
          toggleActions: "play none none none",
        },
      });
      tl.fromTo(
        target.querySelector(".event-date"),
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.5 }
      ).to(
        target.querySelector(".event-text"),
        { opacity: 1, duration: 0.8 },
        "-=0.3"
      );
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

  // 底部跳转
  document.querySelector(".progress-line").addEventListener("click", (e) => {
    const rect = e.target.getBoundingClientRect();
    const p = (e.clientX - rect.left) / rect.width;
    lenis.scrollTo((totalWidth - window.innerWidth) * p);
  });
});

function changeBanner(id) {
  console.log("Nav: " + id);
}
