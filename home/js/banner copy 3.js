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
      changeBannerCssHide(this.activeIndex);
    },
    touchEnd: function (swiper, event) {},
    slideChangeTransitionEnd: function () {
      bannerIndex = this.activeIndex;
      console.log("Slide transition ended, bannerIndex:", bannerIndex);
      changeBannerCss(this.activeIndex);
    },
    slideChangeTransitionStart: function () {
      if (this.activeIndex != 4) {
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

// 简化滚轮事件监听，仅处理bannerIndex=4的情况
document.onmousewheel = scrollFunc;
document.onwheel = scrollFunc; // 火狐绑定滚轮
function scrollFunc(e) {
  e = e || window.event;
  if (bannerIndex == 4) {
    wheelIndex = true;
    if (e.wheelDelta) {
      if (e.wheelDelta > 100) {
        // 当滑轮向上滚动时
        changeStatement(false);
      }
      if (e.wheelDelta < -100) {
        // 当滑轮向下滚动时
        changeStatement(true);
      }
    } else if (e.detail) {
      if (e.detail > 100) {
        // 当滑轮向下滚动时
        changeStatement(true);
      }
      if (e.detail < -100) {
        // 当滑轮向上滚动时
        changeStatement(false);
      }
    }
  } else {
    wheelIndex = false;
    // 让Swiper的mousewheel处理其他滑块切换
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

// 动效增加
function changeBannerCss(num) {
  console.log("Applying CSS for slide:", num);
  if (num == 4) {
    $(".gallery-top-1").show();
    $(".gallery-top-2").show();
    $(".gallery-top-3").show();
    $(".gallery-top-4").show();
    $(".gallery-top-5").show();
    $(".gallery-top-6").show();
    cancelAnimationFrame(canvasId);
  }
  if (num == 1) {
    // 显示角色模块相关元素
    $(".character-left").show();
    $(".character-right").show();
    $(".character-right-right").show();
    characterStorage();
    // 重新初始化角色 Swiper
    if (typeof swipreCharacter !== "undefined" && swipreCharacter) {
      console.log("Destroying existing character Swiper");
      swipreCharacter.destroy(true, true);
    }
    showCharacter();
    refreshCharacterSwiper(); // 强制刷新角色 Swiper
    cancelAnimationFrame(canvasId);
  }
  if (num == 2) {
    video.play();
    $(".character").css("background", `url("./img/BG.png") no-repeat bottom`);
    $(".character").css("background-size", "cover");
    $(".backstory-left").show();
    $(".backstory-right").show();
    cancelAnimationFrame(canvasId);
  }
  if (num == 3) {
    $(".backstory-left").show();
    $(".backstory-right").show();
    cancelAnimationFrame(canvasId);
  }
  if (num == 4) {
    console.log("Showing timeline slide");
    $(".timeline-left").show().addClass("animate__animated animate__fadeInLeft");
    $(".timeline-right").show().addClass("animate__animated animate__fadeInUp");
    cancelAnimationFrame(canvasId);
  }
  if (num == 0) {
    cancelAnimationFrame(canvasId);
  }
}

// 设置显示隐藏
function changeBannerCssHide(num) {
  console.log("Hiding elements for slide:", num);
  if (num == 1) {
    $(".news-left").hide();
    $(".news-right-head-img").hide();
    $(".news-right-head-bg").hide();
    $(".news-right-con").hide();
    $(".news-right-foot").hide();
  }
  if (num == 2) {
    console.log("Hiding character elements");
    $(".character-left").hide();
    $(".character-right").hide();
    $(".character-right-right").hide();
  }
  if (num == 3) {
    $(".backstory-left").hide();
    $(".backstory-right").hide();
  }
  if (num == 4) {
    $(".gallery-top-1").hide();
    $(".gallery-top-2").hide();
    $(".gallery-top-3").hide();
    $(".gallery-top-4").hide();
    $(".gallery-top-5").hide();
    $(".gallery-top-6").hide();
  }
}