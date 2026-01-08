/*
 * @Author: DCBZ
 * @Date: 2025-02-25 08:45:50
 * @LastEditors: your name
 * @LastEditTime: 2025-08-09 02:56:22
 * @Description:
 * @FilePath: \shirakawayofunee.github.io\home\js\glossary.js
 */
var interleaveOffset = 0.8; //视差比值
var glossaryStr = [
  `▍使徒
  `,
  `▍N.F.（ナイトフォール）元年<br>12月12日隕星事件
  隕星の落下で死の禁域（そのうち内海と呼ばれる）が生まれ、世界各地で超自然災害発生。
  `,
  `宗主連合軍が警告なしに戦術核暖冬で涅槃の港を攻撃した。<br>貿易中心が核攻撃を受け、数十万人が即死、全都市が震撼。
DIS本土勢力は全民を動員し、防衛力量と民間武装を統合して宗主連合軍に対抗。これにより、DIS独立戦争が始まった。
    `,
  `N.F.72年12月26日DIS独立戦争が勝利を収めた。
    `,
    `内海大爆発事件後、DIS旧軍の権威体制は完全に崩壊した。EDGEの支援のもと、残存する軍政体系は枠組み再構築計画を始動し、災害復興および防災統括機関の設立草案を提案。<span>FAC</span>（Framework Against Catastrophe）が正式に発足した。`,
  `
  `,
  `▍BR-002
  <br>工事中
    `,
    `复古的手工匠人之店，空气中弥漫着淡淡的花香，静谧而温馨。
    <br>足以彰显<span class="cus-key">店主<span class="cus-target2">Severo</span></span>的品味与专业性。<br>工事中
    `,
    `外邦 `,
    `外邦`,
];
var pcglossary = new Swiper("#pcglossary", {
  speed: 1000,
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  // watchSlidesProgress: true,
  loop: true,
  navigation: {
    nextEl: "#glossaryNext",
    prevEl: "#glossaryPre",
  },
  // on:{

  // }
  on: {
    slideChange: function () {
      //console.log(this.realIndex)
      changeglossary(this.realIndex);
    },
    // progress: function(swiper) {
    //   for (var i = 0; i < swiper.slides.length; i++) {
    //   var slideProgress = swiper.slides[i].progress;
    //   var innerOffset = swiper.width * interleaveOffset;
    //   var innerTranslate = slideProgress * innerOffset;
    //   swiper.slides[i].querySelector(".slide-inner").style.transform =
    //     "translate3d(" + innerTranslate + "px, 0, 0)";
    //   }
    // },
    // touchStart: function(swiper) {
    //   for (var i = 0; i < swiper.slides.length; i++) {
    //   swiper.slides[i].style.transition = "";
    //   }
    // },
    // setTransition: function(swiper, speed) {
    //   for (var i = 0; i < swiper.slides.length; i++) {
    //   swiper.slides[i].style.transition = speed + "ms";
    //   swiper.slides[i].querySelector(".slide-inner").style.transition =
    //     speed + "ms";
    //   }
    // }
  },
});
function changeglossary(num) {
  for (let i = 1; i < 11; i++) {
    let strId = `#glossaryImg${i}`;
    $(strId).attr("src", `./img/glossary/${i}.png`);
  }
  let checkId = `#glossaryImg${num + 1}`;
  $(checkId).attr("src", `./img/glossary/${num + 1}_1.png`);
  $("#glossaryTitle")
    .attr("src", `./img/glossary/t${num + 1}.png`)
    .removeClass("animate__animated animate__fadeInUp");
  $("#glossaryStr")
    .html(glossaryStr[num])
    .removeClass("animate__animated animate__fadeInUp");
  setTimeout(function () {
    $("#glossaryTitle").addClass("animate__animated animate__fadeInUp");
    $("#glossaryStr").addClass("animate__animated animate__fadeInUp");
  }, 10);
}
changeglossary(0);
function changeglossaryClick(num) {
  pcglossary.slideTo(num + 1);
}
// 拖拽滚动（PC 端）
function enableDragScroll(elementId) {
  const element = document.getElementById(elementId);
  let isDragging = false;
  let startY, scrollTop;

  element.addEventListener('mousedown', (e) => {
      isDragging = true;
      element.style.cursor = 'grabbing';
      startY = e.pageY - element.offsetTop;
      scrollTop = element.scrollTop;
      e.preventDefault();
  });

  element.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      const y = e.pageY - element.offsetTop;
      const walk = (startY - y) * 1.5;
      element.scrollTop = scrollTop + walk;
  });

  element.addEventListener('mouseup', () => {
      isDragging = false;
      element.style.cursor = 'grab';
  });

  element.addEventListener('mouseleave', () => {
      isDragging = false;
      element.style.cursor = 'grab';
  });
}

// 触摸滑动（移动端）
function enableTouchScroll(elementId) {
  const element = document.getElementById(elementId);
  let startY, scrollTop;

  element.addEventListener('touchstart', (e) => {
      startY = e.touches[0].pageY;
      scrollTop = element.scrollTop;
  });

  element.addEventListener('touchmove', (e) => {
      const y = e.touches[0].pageY;
      const walk = (startY - y) * 1.5;
      element.scrollTop = scrollTop + walk;
      e.stopPropagation();
  });
}

// 启用拖拽和触摸滚动
enableDragScroll('glossaryStr');
enableTouchScroll('glossaryStr');

// 确保滚轮事件不被 Swiper 拦截
document.getElementById('glossaryStr').addEventListener('wheel', (event) => {
  event.stopPropagation();
});
