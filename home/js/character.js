let characterMsg = [

  {
    bg: "1bg.png",
    rolem: "1m.png",
    nocheck: "1.png",
    check: "1c.png",
    title: "1t.png",
    str: "犯罪組織の主宰者であり、部下たちから恐れられ、崇拝されている存在。<br>童顔(不老)、実年齢不明。<br>艶やか、常に世を拗ねるような微笑を浮かべている。好き嫌いが激しく、享楽主義者で実用も重んじる、細やかで優しい一面も持っている。<br>落ち着き払った自信に満ちていて、自信かつ優雅な態度を保ち、性格は八方巧み。夹缝中的最强者，将上庭与地底的斗争视作狗咬狗。当前的目标是给自己的下属们寻求新的安全居所。<br><br>未完成",
    voice: "./mp3/role/1.mp3",
    image1: "1-1.png",
    image2: "1-2.png"
  },
    {
      bg: "2bg.png",
      rolem: "2m.png",
      nocheck: "2.png",
      check: "2c.png",
      title: "2t.png",
      str: "<br>未完成",
      voice: "./mp3/role/2.mp3",
      image1: "2-1.png",
      image2: "2-2.png"
    },
    {
      bg: "3bg.png",
      rolem: "3m.png",
      nocheck: "3.png",
      check: "3c.png",
      title: "3t.png",
      str: "<br>未完成",
      voice: "./mp3/role/3.mp3",
      image1: "3-1.png",
      image2: "3-2.png"
    },
    {
      bg: "4bg.png",
      rolem: "4m.png",
      nocheck: "4.png",
      check: "4c.png",
      title: "4t.png",
      str: "<br>未完成",
      voice: "./mp3/role/4.mp3",
      image1: "4-1.png",
      image2: "4-2.png"
    },
    {
      bg: "5bg.png",
      rolem: "5m.png",
      nocheck: "5.png",
      check: "5c.png",
      title: "5t.png",
      str: "36岁，殺し屋。为了延长寿命的情报，伪装成附近的裁缝接近X。<br>对组织首领（Leo）有着近乎信徒般的狂热信仰，<br>「この世には、私たちを受け入れてくれる場所がある。理解してくれる人がいる。彼女はあなたを導き、残酷な復讐の道を支えてくれる。その気持ちさえあれば、私があなたを彼女に会わせてあげる。」<br></br>H「あなたが言うその人は、あの雇い主？それとも、組織のリーダー？」<br></br>「それは、私がやっと手に入れた新しい家族だよ。」<br>「もう二度と、誰にも私の大切なものを傷つけさせない。かつての私は復讐のためにすべてを捧げた。今は未来を守るため、その倍の力を尽くす。」",
      voice: "./mp3/role/5.mp3",
      image1: "5-1.png",
      image2: "5-2.png"
    },
    {
      bg: "6bg.png",
      rolem: "6m.png",
      nocheck: "6.png",
      check: "6c.png",
      title: "6t.png",
      str: "距离销毁期限只剩一个月，准备背叛上庭。将自己与他人皆视为棋子<br>腹黒く鬼畜で、目的のためには手段を選ばず、自らも含めた犠牲を厭わないほどです。計画において⚪は不可欠な存在であった。<br>Xは⚪の人柄と行動を高く評価している。<br><br>「——使用期限内に、こっそり壊れてしまった道具にすぎないよ。」",
      voice: "./mp3/role/6.mp3",
      image1: "6-1.png",
      image2: "6-2.png"
    },
    {
      bg: "7bg.png",
      rolem: "7m.png",
      nocheck: "7.png",
      check: "7c.png",
      title: "7t.png",
      str: "L的弟子之一，数年前因为某些原因叛离。<br>现在，外界大乱，以委托人的身份回来恳求L，希望得到L的帮助。<br>",
      voice: "./mp3/role/7.mp3",
      image1: "7-1.png",
      image2: "7-2.png"
    },
    {
      bg: "8bg.png",
      rolem: "8m.png",
      nocheck: "8.png",
      check: "8c.png",
      title: "8t.png",
      str: "「上庭」的老对头，「地底」<br>「花园」的大客户之一，<br>成员之间毫无关爱可言，彼此独立，生死自负。将ta们凝聚起来的是某种夙愿，能为之献身更像是一种荣誉。<br>诱骗S去送死的成员名为「シーゲル」<br>未完成",
      voice: "./mp3/role/8.mp3",
      image1: "8-1.png",
      image2: "8-2.png"
    },
    {
      bg: "9bg.png",
      rolem: "9m.png",
      nocheck: "9.png",
      check: "9c.png",
      title: "9t.png",
      str: "「地底」的老对头，「上庭」<br>冷酷、机械，典型的上庭官僚形象，重视任务效率，漠视普通人的生命和情感。<br>虚伪、傲慢、狂妄、残忍。道貌岸然的一群人，<br>未完成",
      voice: "./mp3/role/9.mp3",
      image1: "9-1.png",
      image2: "9-2.png"
    },
    {
      bg: "10bg.png",
      rolem: "10m.png",
      nocheck: "10.png",
      check: "10c.png",
      title: "10t.png",
      str: "「地底」的实验品，被上庭抢走后投入使用<br>未完成",
      voice: "./mp3/role/10.mp3",
      image1: "10-1.png",
      image2: "10-2.png"
    }
  ];
  
  var swipreCharacter = null;
  function showCharacter() {
    swipreCharacter = new Swiper('#characterpc', {
      direction: 'vertical',
      slidesPerView: 5,
      centeredSlides: true,
      observer: true,
      observeParents: false,
      slideToClickedSlide: true,
      freeMode: true,
      slidesOffsetBefore: -100,
      loop: true,
      mousewheel: true,
      touchRatio: 0,
      on: {
        slideChange: function(e) {
          changeCharacter(e.realIndex);
        },
        slideChangeTransitionStart: function() {
          this.enabled = false;
        },
        slideChangeTransitionEnd: function() {
          this.enabled = true;
        }
      }
    });
  }
  
  function changeCharacter(num) {
    characterMsg.forEach((v, index) => {
      let id = `.role${index + 1}`;
      $(id).attr("src", `./img/character/${v.nocheck}`);
    });
    let data = characterMsg[num];
    let idM = `.role${num + 1}`;
    $(idM).attr("src", `./img/character/${data.check}`);
    $("#roleBg").css("background-image", `url(./img/role/${data.bg})`)
      .removeClass("animate__animated animate__fadeOut")
      .addClass("animate__animated animate__fadeIn");
    $("#roleTitle").prop("src", `./img/role/${data.title}`)
      .removeClass("characterFadeOutLeft")
      .addClass("characterFadeInRight");
    $("#roleStr").html(data.str)
      .removeClass("characterFadeOutLeft")
      .addClass("characterFadeInRight");
    $("#roleImg").prop("src", `./img/role/${data.image1}`)
      .removeClass("characterFadeOutLeft")
      .addClass("characterFadeInRight");
    $("#roleMusic").prop("src", data.voice);
    $("#roleButton").removeClass("animate__fadeOutDown")
      .addClass("animate__fadeInUp");
    $("#roleSwitch").show();
    $("#roleSwitching").hide();
    $("#roleImg").data("current", "image1");
    playCharacterVioce(2);
  }
  
  function switchCharacterImage() {
    let currentIndex = swipreCharacter.realIndex;
    let data = characterMsg[currentIndex];
    let currentImg = $("#roleImg").data("current");
    if (currentImg === "image1") {
      $("#roleImg").prop("src", `./img/role/${data.image2}`)
        .removeClass("characterFadeOutLeft")
        .addClass("characterFadeInRight");
      $("#roleImg").data("current", "image2");
      $("#roleSwitch").hide();
      $("#roleSwitching").show();
    } else {
      $("#roleImg").prop("src", `./img/role/${data.image1}`)
        .removeClass("characterFadeOutLeft")
        .addClass("characterFadeInRight");
      $("#roleImg").data("current", "image1");
      $("#roleSwitch").show();
      $("#roleSwitching").hide();
    }
  }
  
  function playCharacterVioce(num) {
    if (num === 1) {
      $("#roleMusic")[0].play();
      $("#roleVoiceing").show();
      $("#roleVoice").hide();
    }
    if (num === 2) {
      $("#roleMusic")[0].pause();
      $("#roleVoiceing").hide();
      $("#roleVoice").show();
    }
  }
  
  $("#roleMusic")[0].addEventListener("ended", function() {
    playCharacterVioce(2);
  });
  
  function changeAllSwipperAbled(num) {
    if (num === 1) {
      swiperAll.allowSlideNext = false;
      swiperAll.allowSlidePrev = false;
    }
    if (num === 2) {
      swiperAll.allowSlideNext = true;
      swiperAll.allowSlidePrev = true;
    }
  }
  
  function characterStorage() {
    characterMsg.forEach((v) => {
      let imgBg = new Image();
      let img1 = new Image();
      let img2 = new Image();
      imgBg.src = `./img/role/${v.bg}`;
      img1.src = `./img/role/${v.image1}`;
      img2.src = `./img/role/${v.image2}`;
    });
  }