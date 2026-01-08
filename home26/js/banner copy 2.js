var bannerIndex = 0; // 当前激活的 banner
var wheelIndex = false;
var swiperAll = new Swiper("#allSwiper", {
  direction: "vertical",
  speed: 300,
  mousewheel: {
    enabled: true,
    sensitivity: 1, // 降低滚轮灵敏度
    thresholdDelta: 50, // 最小滚轮移动距离
    thresholdTime: 200, // 滚轮事件防抖时间（ms）
  },
  noSwiping: true,
  noSwipingClass: "swiperBG",
  on: {
    slideChange: function () {
      console.log("Slide changed to index:", this.activeIndex);
      // 防止从bannerIndex=2直接跳到0
      if (bannerIndex === 2 && this.activeIndex === 0) {
        console.warn("Detected invalid jump from 2 to 0, correcting to 1");
        this.slideTo(1, 300, false);
        return;
      }
      wheelIndex = false;
      changeBanner(this.activeIndex);
    },
    touchEnd: function (swiper, event) {},
    slideChangeTransitionEnd: function () {
      bannerIndex = this.activeIndex;
      console.log("Slide transition ended, bannerIndex:", bannerIndex);
      changeBannerCss(this.activeIndex); // 统一在 transitionEnd 调用
    },
    slideChangeTransitionStart: function () {
      // 仅更新 bannerIndex，避免干扰显示逻辑
      if (this.activeIndex != 5) {
        bannerIndex = this.activeIndex;
      }
      if (this.activeIndex != 2) {
        $(".character").css("background", ``);
      }
    },
  },
});

function changeBanner(num) {
  console.log("Changing banner to index:", num);
  wheelIndex = 0;
  let id = `#banner${num}`;
  $(".div-centerpc")
    .children(".div-head-text")
    .removeClass("div-head-text-active");
  $(".div-centerpc")
    .children(".div-head-text-en")
    .removeClass("div-head-text-en-active");
  $(id).children(".div-head-text").addClass("div-head-text-active");
  $(id).children(".div-head-text-en").addClass("div-head-text-en-active");
  swiperAll.slideTo(num);
  // 隐藏弹窗
  maskType = false;
  $(document).ready(() => {
    $("#newsmask").hide();
    $("#videomask").hide();
    $("#musicmask").hide();
    $("#musicmaskDetail").hide();
    $("#papermask").hide();
    $("#newsDetail").hide();
  });
}

changeBanner(0);

// 简化滚轮事件监听，处理 statement（索引5）和时间线（索引4）
document.onmousewheel = scrollFunc;
document.onwheel = scrollFunc; // 火狐绑定滚轮
function scrollFunc(e) {
  e = e || window.event;
  if (bannerIndex == 5) { // statement 板块
    wheelIndex = true;
    if (e.wheelDelta) {
      if (e.wheelDelta > 100) {
        changeStatement(false);
      }
      if (e.wheelDelta < -100) {
        changeStatement(true);
      }
    } else if (e.detail) {
      if (e.detail > 100) {
        changeStatement(true);
      }
      if (e.detail < -100) {
        changeStatement(false);
      }
    }
  } else if (bannerIndex == 4) {
    // 时间线板块的滚轮逻辑由 timeline.js 处理
    wheelIndex = true; // 阻止 Swiper 默认滚轮切换
  } else {
    wheelIndex = false;
  }
}

function changeStatement(type) {
  if (type) {
    swiperAll.disable();
    $(".statement").show();
    $("#allSwiper").css({
      transform: "translate(0,-22.25rem)",
      transition: "all 0.3s",
    });
    $(".statement").css({
      transform: "translate(0,-23.8rem)",
      transition: "all 0.3s",
    });
  } else {
    $("#allSwiper").css({
      transform: "translate(0,0)",
      transition: "all 0.3s",
    });
    $(".statement").css({
      transform: "translate(0,0)",
      transition: "all 0.3s",
    });
    swiperAll.enable();
  }
}

// 动效增加，统一管理所有板块的显示/隐藏
function changeBannerCss(num) {
  console.log("Applying CSS for slide:", num);
  // 隐藏所有板块
  $(".news-left, .news-right-head-img, .news-right-head-bg, .news-right-con, .news-right-foot").hide();
  $(".character-left, .character-right, .character-right-right").hide();
  $(".backstory-left, .backstory-right").hide();
  $(".gallery-top-1, .gallery-top-2, .gallery-top-3, .gallery-top-4, .gallery-top-5, .gallery-top-6").hide();
  $(".timeline-left, .timeline-right").hide();
  $(".statement").hide();

  // 显示目标板块并添加动画
  if (num == 0) {
    // 首页
    cancelAnimationFrame(canvasId);
  }
  if (num == 1) {
    // 角色
    $(".character-left").show().addClass("animate__animated animate__fadeInLeft");
    $(".character-right").show().addClass("animate__animated animate__fadeIn");
    $(".character-right-right").show().addClass("animate__animated animate__fadeInRight");
    characterStorage();
    if (typeof swipreCharacter !== "undefined" && swipreCharacter) {
      console.log("Destroying existing character Swiper");
      swipreCharacter.destroy(true, true);
    }
    showCharacter();
    refreshCharacterSwiper();
    cancelAnimationFrame(canvasId);
  }
  if (num == 2) {
    // 世界观
    video.play();
    $(".character").css("background", `url("./img/BG.png") no-repeat bottom`);
    $(".character").css("background-size", "cover");
    $(".backstory-left").show().addClass("animate__animated animate__fadeInLeft");
    $(".backstory-right").show().addClass("animate__animated animate__fadeInUp");
    cancelAnimationFrame(canvasId);
  }
  if (num == 3) {
    // 美术馆
    $(".gallery-top-1").show().addClass("animate__animated animate__fadeInUp");
    $(".gallery-top-2").show().addClass("animate__animated animate__fadeInUp animate__delay-1.5s");
    $(".gallery-top-3").show().addClass("animate__animated animate__fadeInUp animate__delay-2s");
    $(".gallery-top-4").show().addClass("animate__animated animate__fadeIn");
    $(".gallery-top-5").show().addClass("animate__animated animate__fadeIn");
    $(".gallery-top-6").show().addClass("animate__animated animate__fadeIn");
    cancelAnimationFrame(canvasId);
  }
  if (num == 4) {
    // 时间线
    $(".timeline-left").show().addClass("animate__animated animate__fadeInLeft");
    $(".timeline-right").show().addClass("animate__animated animate__fadeInUp");
    cancelAnimationFrame(canvasId);
  }
  if (num == 5) {
    // statement
    $(".statement").show();
    cancelAnimationFrame(canvasId);
  }
}

// 移除 changeBannerCssHide，合并到 changeBannerCss