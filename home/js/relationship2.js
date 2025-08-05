var interleaveOffset = 0.8; // 视差比值
var relationshipStr = [
  `ここに関係性の説明テキスト1を挿入してください。`,
  `ここに関係性の説明テキスト2を挿入してください。`,
  `ここに関係性の説明テキスト3を挿入してください。`,
  `ここに関係性の説明テキスト4を挿入してください。`
  // Add more entries as needed
];

var pcrelationship = new Swiper("#pcrelationship", {
  speed: 1000,
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  loop: true,
  navigation: {
    nextEl: "#relationshipNext",
    prevEl: "#relationshipPre",
  },
  on: {
    slideChange: function () {
      changeRelationship(this.realIndex);
    }
  },
});

function changeRelationship(num) {
  for (let i = 1; i < 5; i++) {
    let strId = `#relationshipImg${i}`;
    $(strId).attr("src", `./img/relationship/${i}.png`);
  }
  let checkId = `#relationshipImg${num + 1}`;
  $(checkId).attr("src", `./img/relationship/${num + 1}_1.png`);
  $("#relationshipTitle")
    .attr("src", `./img/relationship/t${num + 1}.png`)
    .removeClass("animate__animated animate__fadeInUp");
  $("#relationshipStr")
    .html(relationshipStr[num])
    .removeClass("animate__animated animate__fadeInUp");
  setTimeout(function () {
    $("#relationshipTitle").addClass("animate__animated animate__fadeInUp");
    $("#relationshipStr").addClass("animate__animated animate__fadeInUp");
  }, 10);
}

changeRelationship(0);

function changeRelationshipClick(num) {
  pcrelationship.slideTo(num + 1);
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
enableDragScroll('relationshipStr');
enableTouchScroll('relationshipStr');

// 确保滚轮事件不被 Swiper 拦截
document.getElementById('relationshipStr').addEventListener('wheel', (event) => {
  event.stopPropagation();
});