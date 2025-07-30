window.timelineMsg = [
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
    text: "ヒーゲル（福音地の幹事の一人）がセヴェロを見つけ、「GARDEN」と「命の延長」を餌に、単瞳のルーンを与え、上庭特使Xの暗殺を頼んだ。",
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
];

function preloadTimelineImages() {
  const images = [
    './img/timeline/node_normal.png',
    './img/timeline/icon_curr.png',
    './img/timeline/camera.png',
    './img/timeline/title.png',
  ];
  images.forEach(src => {
    const img = new Image();
    img.src = src;
  });
}

function renderTimeline() {
  const timelineScrollable = document.querySelector('#timelineScrollable');
  if (!timelineScrollable) {
    console.error('Error: timelineScrollable element not found!');
    return;
  }

  // 清空现有内容
  timelineScrollable.innerHTML = '';

  // 动态生成 timeline-item
  window.timelineMsg.forEach(item => {
    const timelineItem = document.createElement('div');
    timelineItem.className = 'timeline-item';
    timelineItem.setAttribute('data-mouse', 'small');
    timelineItem.innerHTML = `
      <img src="./img/timeline/node_normal.png" alt="Timeline node" class="timeline-node">
      <div class="timeline-date">${item.date}</div>
      <div class="timeline-text">${item.text}</div>
    `;
    timelineScrollable.appendChild(timelineItem);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // 预加载图片
  preloadTimelineImages();

  // 渲染时间线
  renderTimeline();

  const timelineScrollable = document.querySelector('#timelineScrollable');
  if (!timelineScrollable) {
    console.error('Error: timelineScrollable element not found!');
    return;
  }

  // 调试：检查滚动区域高度
  console.log('Scroll Height:', timelineScrollable.scrollHeight);
  console.log('Client Height:', timelineScrollable.clientHeight);
  if (timelineScrollable.scrollHeight <= timelineScrollable.clientHeight) {
    console.warn('Warning: Content height is not enough to trigger scrolling! Add more content or reduce container height.');
  }

  // 鼠标滚轮滚动
  timelineScrollable.addEventListener('wheel', (event) => {
    event.preventDefault();
    event.stopPropagation();
    const scrollAmount = event.deltaY * 1.5;
    timelineScrollable.scrollTop += scrollAmount;
    console.log('Wheel scroll triggered, deltaY:', event.deltaY, 'scrollAmount:', scrollAmount);
  }, { passive: false });

  // 鼠标拖拽滚动
  let isDragging = false;
  let startY = 0;
  let startScrollTop = 0;

  timelineScrollable.addEventListener('mousedown', (event) => {
    isDragging = true;
    startY = event.pageY - timelineScrollable.offsetTop;
    startScrollTop = timelineScrollable.scrollTop;
    timelineScrollable.style.cursor = 'grabbing';
    event.preventDefault();
    console.log('Drag start, startY:', startY);
  });

  document.addEventListener('mousemove', (event) => {
    if (!isDragging) return;
    event.preventDefault();
    const y = event.pageY - timelineScrollable.offsetTop;
    const walk = (startY - y) * 1.5;
    timelineScrollable.scrollTop = startScrollTop + walk;
    console.log('Dragging, walk:', walk);
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
    timelineScrollable.style.cursor = 'grab';
    console.log('Drag end');
  });

  document.addEventListener('mouseleave', () => {
    isDragging = false;
    timelineScrollable.style.cursor = 'grab';
    console.log('Mouse leave, drag reset');
  });

  // 触摸滑动
  let touchStartY = 0;
  let touchStartScrollTop = 0;

  timelineScrollable.addEventListener('touchstart', (event) => {
    touchStartY = event.touches[0].pageY;
    touchStartScrollTop = timelineScrollable.scrollTop;
    console.log('Touch start, touchStartY:', touchStartY);
  }, { passive: false });

  timelineScrollable.addEventListener('touchmove', (event) => {
    event.preventDefault();
    event.stopPropagation();
    const touchY = event.touches[0].pageY;
    const walk = (touchStartY - touchY) * 1.5;
    timelineScrollable.scrollTop = touchStartScrollTop + walk;
    console.log('Touch move, walk:', walk);
  }, { passive: false });

  // 时间线节点交互
  document.querySelectorAll('.timeline-item').forEach(item => {
    const node = item.querySelector('.timeline-node');
    const originalSrc = './img/timeline/node_normal.png';
    const hoverSrc = './img/timeline/icon_curr.png';
    const originalSize = '14px';
    const hoverSize = '28px';
    const originalLeft = '-7px';
    const hoverLeft = '-14px';
    const originalTop = '5px';
    const hoverTop = '0px';

    // 移动端尺寸和定位
    const isMobile = window.innerWidth <= 768;
    const mobileOriginalSize = '12px';
    const mobileHoverSize = '24px';
    const mobileOriginalLeft = '-6px';
    const mobileHoverLeft = '-12px';
    const mobileOriginalTop = '4px';
    const mobileHoverTop = '0px';

    // 鼠标悬停事件
    item.addEventListener('mouseenter', () => {
      node.src = hoverSrc;
      node.style.width = isMobile ? mobileHoverSize : hoverSize;
      node.style.height = isMobile ? mobileHoverSize : hoverSize;
      node.style.left = isMobile ? mobileHoverLeft : hoverLeft;
      node.style.top = isMobile ? mobileHoverTop : hoverTop;
    });

    // 鼠标离开事件
    item.addEventListener('mouseleave', () => {
      if (!item.classList.contains('active')) {
        node.src = originalSrc;
        node.style.width = isMobile ? mobileOriginalSize : originalSize;
        node.style.height = isMobile ? mobileOriginalSize : originalSize;
        node.style.left = isMobile ? mobileOriginalLeft : originalLeft;
        node.style.top = isMobile ? mobileOriginalTop : originalTop;
      }
    });

    // 点击事件
    item.addEventListener('click', () => {
      document.querySelectorAll('.timeline-item').forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          const otherNode = otherItem.querySelector('.timeline-node');
          otherNode.src = originalSrc;
          otherNode.style.width = isMobile ? mobileOriginalSize : originalSize;
          otherNode.style.height = isMobile ? mobileOriginalSize : originalSize;
          otherNode.style.left = isMobile ? mobileOriginalLeft : originalLeft;
          otherNode.style.top = isMobile ? mobileOriginalTop : originalTop;
        }
      });
      item.classList.toggle('active');
      node.src = item.classList.contains('active') ? hoverSrc : originalSrc;
      node.style.width = item.classList.contains('active') ? (isMobile ? mobileHoverSize : hoverSize) : (isMobile ? mobileOriginalSize : originalSize);
      node.style.height = item.classList.contains('active') ? (isMobile ? mobileHoverSize : hoverSize) : (isMobile ? mobileOriginalSize : originalSize);
      node.style.left = item.classList.contains('active') ? (isMobile ? mobileHoverLeft : hoverLeft) : (isMobile ? mobileOriginalLeft : originalLeft);
      node.style.top = item.classList.contains('active') ? (isMobile ? mobileHoverTop : hoverTop) : (isMobile ? mobileOriginalTop : originalTop);
    });
  });
});