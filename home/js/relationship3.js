// 调试脚本加载
console.log('relationship.js loaded');

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded, initializing relationship3.js');

  var textArray = [
    'Lが何十年も育った弟子たちをすべて殺した。なぜなら、Lはその計画において欠かせない、唯一無二の存在だ。Lとの戦いの中で感情の亀裂が生じ、再び感情を取り戻し、Lに恋をする。<br><br>「君の命がもう尽きようとしてなければ、もっと穏やかな方法を選びたかった。でも、残念ながら私たちには時間がない。だから、思う存分抵抗しなよ…全部わかってる、全部受け入れるよ。たとえ私の触れた花が枯れる運命でも、君を生かさなきゃいけないんだ。」<br><br>XはLの人柄と行動を高く評価している。XはLの反逆精神と強い決断力に深く感銘を受け、羨望の念を抱きます。彼女はLが自由に規則を反逆し、信頼できる仲間に支えられてその行動を進めていることに強く惹かれます。Xにとって、Lは単なる駒に過ぎないわけではなく、祝福されるべき存在だと認識しています。Xの計画においてLは非常に重要な役割を担っており、表面的には対立しているように見える二人の協力も、最終的には同じ目標—反乱と自由—を達成するためのものです。',
    'Left Text 2',
    '立場は異なれど、LとXは共に反逆者であり、規則に縛られた人々を助けたいと願っています。二人の目標は同じであり、どちらも束縛を打破し自由を手に入れることを渇望しています。LはXにとって理想的な存在であり—反逆の能力を持ち、固い信念を貫く人物です。',
    'Right Text 2'
  ];

  const left = document.querySelector('.left');
  const right = document.querySelector('.right');
  const leftMobile = document.querySelector('.left-mobile');
  const rightMobile = document.querySelector('.right-mobile');
  const toggleBtn = document.querySelector('.toggle-btn');
  const toggleBtnMobile = document.querySelector('.toggle-btn-mobile');
  const navPanel = document.querySelector('.nav-panel');
  const navPanelMobile = document.querySelector('.nav-panel-mobile');
  const navButtons = document.querySelectorAll('.nav-buttons img');
  const navButtonsMobile = document.querySelectorAll('.nav-buttons-mobile img');

  if (!toggleBtn || !navPanel) {
    console.error('Toggle button or nav panel not found in DOM');
    return;
  }

  // 初始化内容，添加容错
  if (left) left.innerHTML = textArray[0];
  if (right) right.innerHTML = textArray[2];
  if (leftMobile) leftMobile.innerHTML = textArray[0];
  if (rightMobile) rightMobile.innerHTML = textArray[2];

  // 动态添加 onclick 属性
  if (toggleBtn) toggleBtn.setAttribute('onclick', 'toggleNavPanel()');
  if (toggleBtnMobile) toggleBtnMobile.setAttribute('onclick', 'toggleNavPanelMobile()');

  toggleBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Toggle button click detected at', new Date().toLocaleTimeString(), 'target:', e.target);
    toggleNavPanel();
  });

  toggleBtnMobile.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Toggle button mobile click detected at', new Date().toLocaleTimeString(), 'target:', e.target);
    toggleNavPanelMobile();
  });

  navButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const content = button.getAttribute('data-content');
      updateContent(content);
      if (navPanel) navPanel.style.display = 'none';
    });
  });

  navButtonsMobile.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const content = button.getAttribute('data-content');
      updateContent(content);
      if (navPanelMobile) navPanelMobile.style.display = 'none';
    });
  });

  // 定义全局函数
  function toggleNavPanel() {
    setTimeout(() => {
      console.log('Executing toggleNavPanel, current display:', navPanel ? navPanel.style.display : 'null');
      if (navPanel) {
        navPanel.style.display = navPanel.style.display === 'flex' ? 'none' : 'flex';
      } else {
        console.error('navPanel not found during toggle');
      }
    }, 150);
  }

  function toggleNavPanelMobile() {
    setTimeout(() => {
      console.log('Executing toggleNavPanelMobile, current display:', navPanelMobile ? navPanelMobile.style.display : 'null');
      if (navPanelMobile) {
        navPanelMobile.style.display = navPanelMobile.style.display === 'flex' ? 'none' : 'flex';
      } else {
        console.error('navPanelMobile not found during toggle');
      }
    }, 150);
  }

  function updateContent(content) {
    const masks = document.querySelectorAll('.z-index-1 .relationship-img');
    masks.forEach((mask, index) => {
      if (mask) mask.src = `./img/relationship/mask${index + 1}_${content}.png`;
    });
    const centerImg = document.querySelector('.center img');
    if (centerImg) centerImg.src = `./img/relationship/center_${content}.jpg`;
    const nextIndex = (textArray.indexOf(left ? left.textContent : '') + 2) % textArray.length;
    if (left) left.innerHTML = textArray[nextIndex];
    if (right) right.innerHTML = textArray[nextIndex + 1] || textArray[0];
    if (leftMobile) leftMobile.innerHTML = textArray[nextIndex];
    if (rightMobile) rightMobile.innerHTML = textArray[nextIndex + 1] || textArray[0];
  }
});