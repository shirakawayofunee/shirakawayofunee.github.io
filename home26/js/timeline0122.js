// ================= 1. 数据源 (你的原始数据) =================
// 注意：我在个别条目加了 type: 'image' 占位符作为演示，
// 你可以在数组里任意位置插入 { type: 'image', src: '图片地址' } 来添加图片事件
window.timelineMsg = [
  {
    date: "N.F.元年<br>12月12日隕星事件",
    text: "隕星の落下で死の禁域（そのうち内海と呼ばれる）が生まれ、世界各地で超自然災害発生。"
  },
  {
    date: "N.F.21年",
    text: "チラン博士が内海を調査するため、科学者を中心とした連合調査隊を組織する。内海突入から312分後、調査隊の反応はロストする。"
  },
  {
    date: "N.F.23年",
    text: "唯一の生存者であるチラン博士が死域から脱出、「YFJ」という災いを制御できる戦略物資を持ち帰った。"
  },
  // ... 这里为了演示插入一张图 ...
  {
      type: "image",
      src: "https://images.unsplash.com/photo-1614726365723-49faaa5646d7?q=80&w=1000&auto=format&fit=crop", // 替换为你本地的 img/xxx.jpg
      caption: "内海調査記録 FILE.01"
  },
  {
    date: "N.F.24年<br>都市「ディス」の建設",
    text: "5つの宗主市が出資し、共同で内海周辺にディスを立ち上げた。移民を主な人口とするこのまちは、鉱業を礎にした。しかし、YFJの管理支配は全く宗主市の元に把握され、科学者たちはチラン博士の率いて<span>上庭</span>を秘かに成立。<br>各国はＥ.Ｄ.Ｇ.Ｅ.協定に調印し、ディスとYFJ貿易を行う。"
  },
  {
    date: "N.F.25～60年<br>涅槃集団設立",
    text: "五つの宗主市は輸出を引き続き独占し、食糧の値上げなどの手段でディス本土の富を奪い取った。<br>宗主市内部での衝突もアップし、妥協として共に<span>涅槃集団</span>を設立した。"
  },
  {
    date: "N.F.61年12月26日<br>",
    text: "ディス初の民選議長ダモンは暗殺され、ディス戌衛軍団第八連の上尉ブローク・フランシスは逃亡し、砂海遊撃隊を結成宗主市と対抗。"
  },
  {
    date: "N.F.66年6月13日<br>核爆 涅槃港",
    text: "宗主連合軍が警告なしに戦術核暖冬で涅槃の港を攻撃した。<br>貿易中心が核攻撃を受け、数十万人が即死、全都市が震撼。"
  },
  {
    date: "N.F.66年8月27日",
    text: "ブローク上尉は独立を訴える演説を行い、ディス独立軍の結成を正式に宣言しました。同日夜、ブローク上尉は2ヶ月前に受けた放射能汚染により不帰の客となり、<span>デレヴァン・スティール</span>が独立軍の統帥権を引き継ぎました。"
  },
  {
    date: "N.F.72年12月26日",
    text: "ディス独立戦争が勝利を収めた。独立軍の統率者デレヴァンの宣言のもと、ディスは正式に独立を果たしました。彼自身も新ディスの初代議長の職務を引き受けました。"
  },
  {
    date: "N.F.72年～84年",
    text: "デレヴァンは城邦議長の職を長く務め続け、権力の譲渡を拒否し、選挙を操作して強引に再選を重ねました。これにより、彼はディス史上最も長期間統治した独裁者となりました。彼の統治下では、対外的には狂気的な拡張と略奪を繰り返し。国内では異分子を高圧的に弾圧し、至るところで腐敗がはびこりました。城邦は次第に腐敗の一途をたどりました。"
  },
  {
    date: "N.F.81年",
    text: "都市の拡大に伴い、ディスは東西二区に分割された。鉱業の大部分は西区に集中している。"
  },
  {
    date: "N.F.83年",
    text: "幼少期の<span>レオポルド</span>は軍人だった両親が政治闘争に巻き込まれ、戦場で無駄死した後、親族や友人の養子縁組の申し出をすべて拒否し、復讐を誓って福音地に身を投じました。それ以来、レオポルドは福音地において<span>最も鋭い刃</span>となりました。"
  },
  {
    date: "N.F.84年",
    text: "ディスがある実験の失敗により<span>内海大爆発</span>を引き起こした。これにより、最初の黒環<span>BR-000</span>が誕生。内海大爆発と合わせ、直接的な死者数は87231人に上った。YFJの生産量を急減させ、国外へのYFJ輸出が大幅に減少した。"
  },
  {
    date: "N.F.84年12月22日",
    text: "内海大爆発事件後、ディス旧軍の権威体制は完全に崩壊した。EDGE-01の説得を受け、残存する軍政体系が<span>FAC</span>に再構築されるデレヴァンが初代総司令を兼任し、FACの主力を狂厄への抵抗へと大きくシフトさせた。"
  },
  {
    date: "N.F.84年",
    text: "わずか6歳の<span>セヴェロ</span>は家族を失い、行き場を失った末に福音地に拾われ、<span>レオポルドを師と仰ぎました</span>。"
  },
  {
    date: "N.F.89年6月27日",
    text: "BR-001爆発。行方不明者は3万人を超え、史上初めて、能力者の存在が公表される。"
  },
  {
    date: "N.F.103年",
    text: "HUSH-<span>X</span>は、上庭の第七代執行人に就任しました。"
  },
  {
    date: "N.F.103年<br>月蝕作戦",
    text: "上庭は福音地が内海で秘密裏に実験を行っていることを察知し、FACを派遣して蝕月行動を実行しました。全軍が壊滅するほどの犠牲を払い、13体の実験体を奪還しました。しかし、総司令デレヴァンに忠誠を誓う多くのFAC兵士が内海で命を落とし、FACおよび総司令自身は甚大な名声の打撃を受けました。その威信は一気に地に落ちました。これにより、EDGEは二つの目的を達成しました。①福音地の重要な実験体の奪取。②デレヴァンの権力を空洞化すること。"
  },
  {
    date: "N.F.103年10月",
    text: "69歳のデレヴァンは████によって殺害されました。第二代FAC総司令にはアドリアン・スターリングが就任しました。████はディス旧軍を率いてディスを離れ。"
  },
  {
      type: "image",
      src: "https://images.unsplash.com/photo-1519608487953-e999c9dc2968?q=80&w=1000&auto=format&fit=crop",
      caption: "レオポルド FILE.02"
  },
  {
    date: "N.F.113年",
    text: "レオポルドは自分の余命が短いことを悟り、事前にセヴェロに後事を託した。セヴェロは大きな衝撃を受け、命を延ばせるような情報を必死に探し始めた。",
  },
  {
    date: "N.F.113年6月",
    text: "BR-002事件後、福音地の勢力は新城から撤退し、東区の混乱事件は減少、西区が主要な戦場となる。FACは黒環防衛陣線の構築を計画する。<br>福音地と上庭は互いにスパイを送り込んた。福音地はスパイを通じて上庭の秘密兵器「HUSH」システムの存在を知り、能力者組織「GARDEN」にその破壊を依頼するが、首領レオポルドに拒否される――彼女はより有利な介入のタイミングを待っている。<br>一方、HUSH部隊は福音地を掃除任務を受け、まず福音地と曖昧な関係を持つ能力者組織「GARDEN」を標的にした。HUSH部隊はHUSH-X（以下、X）の指揮下で「GARDEN」への破壊を開始。",
  },
  {
    date: "N.F.113年7月16日",
    text: "ヒーゲル（福音地の幹事の一人）がセヴェロを見つけ、「GARDEN」と「命の延長」を餌に、単瞳のルーンを与え、上庭特使Xの暗殺を頼んだ。<br><span>序章始める</span>",
  },
  {
    date: "N.F.113年7月16日～7月19日",
    text: "高級官僚が次々と襲撃され、「GARDEN」の暗殺リストに載っていると疑われる。",
  },
  {
    date: "N.F.113年7月21日 23:37",
    text: "新城エリカ山荘（Xが一時滞在するリゾート別荘、周辺は「禁閉者」を対象とした天羅地網が張られている）<br><span class=\"cus-key\">刺客<span class=\"cus-target2\">（セヴェロ）</span></span>の襲撃により、X宅が注目を集め、全城に藍雨が48時間降り注ぎ、外部からの大規模襲撃を抑制。",
  },
  {
    date: "N.F.113年7月22日 21:23、「GARDEN」基地",
    text: "レオポルドはセヴェロの誕生日を祝い、緊張を和らげようとするが、セヴェロが謎で姿を消し、失踪した。",
  },
  {
    date: "N.F.113年7月23日 08:05、セヴェロの仕立て屋",
    text: "数日間、セヴェロはエリカ山荘の警備員（禁閉者を含む）と何度も正面衝突した。「GARDEN」に戻って休息しようとした矢先、調査員が訪ねてくる。<br>セヴェロは一瞬心を動かされ、自身と「同じ境遇」に見える調査員を引き込もうとし、「上庭に傷つけられた同類」だと説得、「GARDEN」の首領レオポルドが復讐を助けられると伝えた。しかし、その優しさは強く拒絶され、逆に調査員に裏切られた。最終的にセヴェロは罠に落ち、能力者対策の部隊に制圧され、昏迷状態に陥る。調査員もSan値が限界に達し、一時的に行動不能となる。",
  },
  {
    date: "N.F.113年7月23日 17:10、X宅",
    text: "上庭の「代理」が現れ、Xに新たな任務を伝え、セヴェロの審問を引き継ぐ。",
  },
  {
    date: "N.F.113年7月23日 23:04、X宅の地下室",
    text: "セヴェロが「GARDEN」への忠誠は揺るぎない。数時間にわたる審問は進展せず、代理人はセヴェロの罵倒以外何も得られなかった。そこへXが「生きているセヴェロの方が価値がある」と提案――セヴェロを人質として連れ去れ、レオポルドから福音地の重要情報を引き出すという計画を立てた。代理人はその提案を認める。しかし、「レオポルド」の名を耳にした瞬間、セヴェロは福音地から与えられた単瞳のルーンを起動。ルーンの力が暴走し、彼女は一瞬で制御を失い、監禁を突破して屋敷から逃走し、大混乱を引き起った。",
  },
  {
    date: "N.F.113年7月23日 23:24、山荘内",
    text: "失血多量と狂厄汚染の二重の打撃により、暴走していたセヴェロがついに倒れた。間一髪のところで、レオポルドが駆けつけ、彼女を救い出す。",
  },
  {
    date: "N.F.113年7月24日 00:41、「GARDEN」基地",
    text: "レオポルドは福音地からFAC総司令の暗殺依頼を引き受け、セヴェロは「GARDEN」に戻り体を休養する。<br>序章「Blue rain」終了、つづく。",
  },
  {
    date: "N.F.113年8月7日～",
    text: "L开始实施她精心筹备的同态复仇计划。第一位死者是安娜尼亚死亡。<br>「沉水之花」案件"
  },
  {
    date: "N.F.113年8月15日 5:25、FAC临时指挥部",
    text: "工事中"
  },
  {
    date: "N.F.113年8月15日 11:32-11:56、FAC临时指挥部",
    text: "工事中"
  },
  {
    date: "N.F.113年8月17日 14:23、FAC黑环封锁行动联合指挥部",
    text: "工事中"
  },
  {
    date: "N.F.113年8月19日 0:00-2:23、锈河近内海辐射区",
    text: "工事中"
  },
  {
    date: "N.F.113年8月23日 4:30-4:35、花园基地",
    text: "工事中"
  },
  {
    date: "N.F.113年8月23日 7:00-17:20、FAC联合指挥部及观测庭",
    text: "工事中"
  },
  {
    date: "N.F.113年8月26日、FAC纪念园",
    text: "工事中"
  },
  {
    date: "N.F.113年8月26日、上庭内部会议",
    text: "工事中"
  },
];

// ================= 2. 自动布局算法 (关键) =================
// 这个函数会遍历你的长文本，自动分配 x 坐标和行号，形成钢琴块布局
function generateLayout(data) {
  const X_START = 100; // 起始X偏移
  const X_GAP = 350;   // 每个事件之间的横向距离 (越小越紧凑)
  let currentX = X_START;
  
  // 行号逻辑：我们希望它在 2-8 行之间波动，避开顶部导航(0-1)和底部(9)
  // 简单的正弦波波动，让它看起来有起伏
  const items = data.map((item, index) => {
      // 计算行号：利用 Math.sin 让行号产生波浪形变化 (2,3,4,5,6,7,6,5...)
      // 并加入一点随机性
      const wave = Math.sin(index * 0.8) * 2.5; 
      let row = Math.floor(4 + wave); 
      
      // 限制行号范围 (第2行到第8行)
      if (row < 2) row = 2;
      if (row > 7) row = 7;

      // 计算高度 (Span)：根据文字长度决定
      // 如果是图片，默认跨 4 行
      let span = 3;
      if (item.type === 'image') {
          span = 5;
          row = 2; // 图片尽量靠上一点
      } else {
          // 文字越长，格子越高
          const len = item.text.length;
          if (len > 100) span = 5;
          else if (len > 50) span = 4;
          else span = 3;
      }

      // 确保不要溢出底部 (总共10行)
      if (row + span > 9) row = 9 - span;

      // 横向坐标
      const myX = currentX;
      // 下一个元素的距离：如果是简单文本，紧凑点；如果是大段文本，宽一点
      const widthFactor = (item.type === 'image') ? 500 : 400;
      currentX += widthFactor + 50; // 50是间隙

      return {
          ...item,
          x: myX,
          row: row,
          span: span,
          width: widthFactor
      };
  });

  return { items, totalWidth: currentX };
}

// ================= 3. 初始化渲染与动画 =================
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById('timelineContainer');
  
  // 1. 生成布局数据
  const { items, totalWidth } = generateLayout(window.timelineMsg);
  
  // 设置容器总宽度 (加上窗口宽度以便滑到底)
  const finalWidth = totalWidth + window.innerWidth * 0.5;
  container.style.width = `${finalWidth}px`;

  // 2. 渲染 DOM
  items.forEach((item, index) => {
      const div = document.createElement('div');
      div.className = `event-item item-${index}`;
      
      // 计算 CSS 样式
      // top 和 height 用 vh (视口高度百分比) 实现 10行 栅格
      div.style.left = `${item.x}px`;
      div.style.top = `${item.row * 10}vh`; 
      div.style.height = `${item.span * 10}vh`;
      div.style.width = `${item.width}px`;

      if (item.type === 'image') {
          // 图片卡片
          div.style.padding = '0';
          div.style.border = '1px solid #000';
          div.innerHTML = `
              <img src="${item.src}" style="width:100%; height:100%; object-fit:cover; clip-path: inset(0 100% 0 0);">
              <div style="position:absolute; bottom:0; left:0; background:#000; color:#fff; padding:2px 5px; font-size:10px;">${item.caption || 'IMAGE'}</div>
          `;
      } else {
          // 文字卡片
          div.innerHTML = `
              <div class="event-date">${item.date}</div>
              <div class="event-text">${item.text}</div>
          `;
      }

      container.appendChild(div);
  });

  // 3. GSAP 动画设置
  gsap.registerPlugin(ScrollTrigger);

  // 定义横向滚动 (Fake Horizontal Scroll)
  const scrollTween = gsap.to(container, {
      x: - (finalWidth - window.innerWidth),
      ease: "none",
      scrollTrigger: {
          trigger: ".wrapper",
          pin: true,
          scrub: 0.5, // 这里的数值越大，跟随越慢(越滑)
          end: () => `+=${finalWidth}`,
          onUpdate: (self) => {
              // 更新底部菱形进度条文字
              const p = Math.round(self.progress * 100);
              document.querySelector('.diamond-cursor').style.left = `${self.progress * 100}%`;
              
              // 找出当前最接近屏幕中间的年份 (简单估算)
              const currentIdx = Math.floor(self.progress * items.length);
              const currentItem = items[Math.min(currentIdx, items.length-1)];
              if(currentItem && currentItem.date) {
                  // 提取年份数字作为标签 (正则提取 N.F.数字)
                  const match = currentItem.date.match(/N\.F\.\d+/);
                  const yearLabel = match ? match[0] : 'TIMELINE';
                  document.querySelector('.cursor-label').innerText = yearLabel;
              }
          }
      }
  });

  // 元素入场动画 (无弹跳，使用优雅的 Wipe 和 Fade)
  items.forEach((item, index) => {
      const target = document.querySelector(`.item-${index}`);
      const startTrigger = "left 90%"; // 进入屏幕右侧 10% 处触发

      if (item.type === 'image') {
          const img = target.querySelector('img');
          gsap.to(img, {
              clipPath: "inset(0 0% 0 0)", // 遮罩从右向左拉开
              duration: 1.5,
              ease: "power2.out",
              scrollTrigger: {
                  trigger: target,
                  containerAnimation: scrollTween,
                  start: startTrigger,
                  toggleActions: "play none none none"
              }
          });
      } else {
          // 文字逐行显现 (Staggered Reveal)
          const date = target.querySelector('.event-date');
          const text = target.querySelector('.event-text');
          
          const tl = gsap.timeline({
              scrollTrigger: {
                  trigger: target,
                  containerAnimation: scrollTween,
                  start: startTrigger,
                  toggleActions: "play none none none"
              }
          });

          // 先显示日期，再显示正文
          tl.fromTo(date, 
              { opacity: 0, x: -20 }, 
              { opacity: 1, x: 0, duration: 0.5 }
          ).fromTo(text, 
              { opacity: 0 }, 
              { opacity: 1, duration: 0.8 }, 
              "-=0.3"
          );
      }
  });

  // 4. Lenis 物理滚动配置 (关键手感调整)
  const lenis = new Lenis({
      duration: 1.5,        // 惯性持续时间 (越长越滑)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      wheelMultiplier: 3.5, // 核心修改：滚轮力度倍率 (3.5倍意味着滚一下走很远)
      smooth: true,
  });

  function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // 底部进度条点击跳转
  document.querySelector('.progress-line').addEventListener('click', (e) => {
      const rect = e.target.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const progress = clickX / rect.width;
      const targetScroll = (finalWidth - window.innerWidth) * progress;
      lenis.scrollTo(targetScroll); // Lenis 处理平滑跳转
  });
});

function changeBanner(id) {
  console.log("Switch to Banner: " + id);
  // 这里添加你的页面跳转逻辑，例如 window.location.href = ...
}