let characterMsg = [

  {
    bg: "1bg.png",
    rolem: "1m.png",
    nocheck: "1.png",
    check: "1c.png",
    title: "1t.png",
    str: "「新しいマシンの実験なんだけど――<br>えー、きみがいない場合のＢプランなんて<br>用意してないよ…」",
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
      str: "「背中が痒くて木にこすりつけてたら、<br>引っかかって吊るされた人がいたんだ。<br>…救助隊に電話したのは私だってこと、<br>今でも気付いてないだろうなぁ。」",
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
      str: "「時代の波は絶えず起伏し続け、<br>昼夜のように巡っては流れる。<br>永久に止まることはないでしょう」",
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
      str: "「需要続々、チャンス続々♪<br>死霊もぞくぞく、未来はワクワク♪」",
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
      str: "「個人の意思よりも命令。<br>…昔、そう教えられました」",
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
      str: "「野獣のうめき声か、地獄からの蹄の音か…わかりましたわ！<br>きっとナイトメアの足音ですわね！…はい？<br>エンジン音、ってなんですの？」",
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
      str: "L的弟子，因为某些原因叛离了组织，",
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
      str: "地底，「」的老东家，借刀杀人<br>成员之间似乎就没什么关爱可言，将ta们凝聚起来的是某种夙愿，能为之献身更像是一种荣誉",
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
      str: "「う〜ん、回したい！<br>なにをって？ みて、あの太陽！<br>ピッカピカに光ってるレコードに見えない？」",
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
      str: "「ハロー、ハロー、ココですヨ。<br>ウチュウからの訪問者、平和をアイするギベオンズアイデス。」",
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