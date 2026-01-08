// 导航栏切换隐藏 head
function changeHead(num) {
  if (num == 1) {
    $(".menucMobile").show();
    $(".menuMobile").hide();
    $(".headM").show();
  }
  if (num == 2) {
    $(".menucMobile").hide();
    $(".menuMobile").show();
    $(".headM").hide();
  }
}

var pretranslate = 0;
var activeMobile = 0;
var swiperAllM = new Swiper("#allSwiperMobile", {
  direction: "vertical",
  speed: 300,
  mousewheel: true,
  on: {
    slideChange: function () {
      changeBannerMobile(this.activeIndex);
      if (this.activeIndex == 0 && platform == "mobile") {
        kvTimer = true;
      } else {
        kvTimer = false;
      }
    },
    slideChangeTransitionEnd: function () {
      activeMobile = this.activeIndex;
      pretranslate = this.translate;
      let data = [0, 1, 2, 3];
      data.forEach((v) => {
        if (v != this.activeIndex) {
          changeBannerCssHideM(v);
        }
      });
      changeBannerCssM(this.activeIndex);
    },
  },
});

function changeBannerMobile(num) {
  let id = `#bannerM${num}`;
  $('.div-center-mobile').children(".div-head-text").removeClass('div-head-text-active');
  $('.div-center-mobile').children(".div-head-text-en").removeClass('div-head-text-en-active');
  $(id).children(".div-head-text").addClass('div-head-text-active');
  $(id).children(".div-head-text-en").addClass('div-head-text-en-active');
  changeHead(2);
  swiperAllM.slideTo(num);
  $(document).ready(() => {
    $("#newsmaskMobile").hide();
    $("#videomaskMobile").hide();
    $("#musicmaskMobile").hide();
    $("#musicmaskDetailMobile").hide();
    $("#papermaskMobile").hide();
  });
}

changeBannerMobile(0); // 初始化到主页

function changeStatementMobile(type) {
  $(".statementMobile").show();
  if (type) {
    $("#allSwiperMobile").css({
      transform: "translate(0,-130.1vw)",
      transition: "all 0.3s",
    });
    $(".head-mob").css({
      transform: "translate(0,-130.1vw)",
      transition: "all 0.3s",
    });
    $(".statementMobile").css({
      transform: "translate(0,-130.1vw)",
      transition: "all 0.3s",
      "z-index": "103",
    });
  } else {
    $("#allSwiperMobile").css({
      transform: "translate(0,0)",
      transition: "all 0.3s",
      "z-index": "1",
    });
    $(".statementMobile").css({
      transform: "translate(0,0)",
      transition: "all 0.3s",
      "z-index": "0",
    });
    $(".head-mob").css({
      transform: "translate(0,0)",
      transition: "all 0.3s",
    });
    swiperAllM.enable();
  }
}

// 滑动处理
var startX, startY;
document.addEventListener('touchstart', function (ev) {
  startX = ev.touches[0].pageX;
  startY = ev.touches[0].pageY;
});
document.addEventListener('touchend', function (ev) {
  var endX, endY;
  endX = ev.changedTouches[0].pageX;
  endY = ev.changedTouches[0].pageY;
  var direction = GetSlideDirection(startX, startY, endX, endY);
  switch (direction) {
    case 0:
      break;
    case 1: // 向上
      if (activeMobile == 3) {
        swiperAllM.disable();
        changeStatementMobile(true);
      }
      break;
    case 2: // 向下
      if (activeMobile == 3) {
        changeStatementMobile(false);
      }
      break;
    case 3: // 右
      if (activeMobile == 1) {
        swipreCharacterM.slidePrev();
      }
      if (activeMobile == 2) {
        backstoryMobileChange(-1);
      }
      break;
    case 4: // 左
      if (activeMobile == 1) {
        swipreCharacterM.slideNext();
      }
      if (activeMobile == 2) {
        backstoryMobileChange(1);
      }
      break;
    default:
  }
});

function GetSlideDirection(startX, startY, endX, endY) {
  var dy = startY - endY;
  var dx = endX - startX;
  var result = 0;
  if (Math.abs(dy) > Math.abs(dx)) {
    if (dy > 10) {
      result = 1;
    } else if (dy < -10) {
      result = 2;
    }
  } else {
    if (dx > 10) {
      result = 3;
    } else if (dx < -10) {
      result = 4;
    }
  }
  return result;
}

function changeBannerCssM(num) {
  $(".head-mob-logo").show();
  if (num == 0) {
    // HOME
  }
  if (num == 1) {
    // CHARACTER
    $(".characterMobile-top").show();
    $(".characterMobile-mid").show();
  }
  if (num == 2) {
    // BACKSTORY
    $(".backstoryMobile-top").show();
    $(".backstoryMobile-mid").show();
    $("#backstoryMobileTitle").show();
  }
  if (num == 3) {
    // GALLERY
    $(".galleryMobile-1").show();
    $(".galleryMobile-2").show();
    $(".galleryMobile-3").show();
  }
}

function changeBannerCssHideM(num) {
  if (num == 0) {
    // HOME
  }
  if (num == 1) {
    // CHARACTER
    $(".characterMobile-top").hide();
    $(".characterMobile-mid").hide();
  }
  if (num == 2) {
    // BACKSTORY
    $(".backstoryMobile-top").hide();
    $(".backstoryMobile-mid").hide();
    $("#backstoryMobileTitle").hide();
  }
  if (num == 3) {
    // GALLERY
    $(".galleryMobile-1").hide();
    $(".galleryMobile-2").hide();
    $(".galleryMobile-3").hide();
  }
}

$(document).ready(() => {
  changeBannerCssHideM(1);
  changeBannerCssHideM(2);
  changeBannerCssHideM(3);
  changeBannerCssM(0);
});

function hideHeadM() {
  let e = window.event;
  if (!e.target.dataset.type) {
    changeHead(2);
  }
}