// 调试脚本加载
console.log('relationship.js loaded');

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded, initializing relationship3.js');

  var textArray = [
    '为了延长寿命的情报，伪装成附近的裁缝接近X。<br>对组织首领（Leo）有着近乎信徒般的狂热信仰，<br>「この世には、私たちを受け入れてくれる場所がある。理解してくれる人がいる。彼女はあなたを導き、残酷な復讐の道を支えてくれる。その気持ちさえあれば、私があなたを彼女に会わせてあげる。」<br>H「あなたが言うその人は、あの雇い主？それとも、組織のリーダー？」<br>「それは、私がやっと手に入れた新しい家族だよ。」<br>「もう二度と、誰にも私の大切なものを傷つけさせない。かつての私は復讐のためにすべてを捧げた。今は未来を守るため、その倍の力を尽くす。」',
    'Left Text 2',
    '为了延长寿命的情报，伪装成附近的裁缝接近X。<br>对组织首领（Leo）有着近乎信徒般的狂热信仰，<br>「この世には、私たちを受け入れてくれる場所がある。理解してくれる人がいる。彼女はあなたを導き、残酷な復讐の道を支えてくれる。その気持ちさえあれば、私があなたを彼女に会わせてあげる。」<br>H「あなたが言うその人は、あの雇い主？それとも、組織のリーダー？」<br>「それは、私がやっと手に入れた新しい家族だよ。」<br>「もう二度と、誰にも私の大切なものを傷つけさせない。かつての私は復讐のためにすべてを捧げた。今は未来を守るため、その倍の力を尽くす。」',
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