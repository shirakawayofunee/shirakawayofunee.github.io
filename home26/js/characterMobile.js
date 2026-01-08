var swipreCharacterM = new Swiper('#characterM', {
    slidesPerView: 4,
    centeredSlides: false,
    observer: true,
    observeParents: false,
    slideToClickedSlide: true,
    freeMode: true,
    loop: true,
    slidesOffsetBefore: -10,
    touchRatio: 0,
    on: {
      slideChange: function(e) {
        changeCharacterM(e.realIndex);
      }
    }
  });
  
  function changeCharacterM(num) {
    characterMsg.map((v, index) => {
      let id = `.roleM${index + 1}`;
      $(id).attr("src", `./img/character/${v.nocheck}`);
    });
    let data = characterMsg[num];
    let idM = `.roleM${num + 1}`;
    $(idM).attr("src", `./img/character/${data.check}`);
    $("#roleBgM").css("background-image", `url(./img/role/${data.bg})`).removeClass("animate__animated animate__fadeOut").addClass("animate__animated animate__fadeIn");
    $("#roleImgM").removeClass("characterFadeInRight").addClass("characterFadeOutLeft");
    $("#roleTitleM").removeClass("characterFadeInRight").addClass("characterFadeOutLeft");
    $("#roleStrM").removeClass("characterFadeInRight").addClass("characterFadeOutLeft");
    $("#roleButtonM").removeClass("fadeInUpSelf").addClass("fadeOutBottomSelf");
    $("#roleMusicM").prop("src", data.voice);
    $("#roleSwitchM").show();
    $("#roleSwitchingM").hide();
    $("#roleImgM").data("current", "image1");
    playCharacterVioceM(2);
  
    setTimeout(() => {
      $("#roleImgM").prop("src", `./img/role/${data.image1}`).removeClass("characterFadeOutLeft").addClass("characterFadeInRight");
      $("#roleTitleM").prop("src", `./img/role/${data.title}`).removeClass("characterFadeOutLeft").addClass("characterFadeInRight");
      $("#roleStrM").html(data.str).removeClass("characterFadeOutLeft").addClass("characterFadeInRight");
      $("#roleButtonM").removeClass("fadeOutBottomSelf").addClass("fadeInUpSelf");
    }, 500);
  }
  
  function switchCharacterImageM() {
    let currentIndex = swipreCharacterM.realIndex;
    let data = characterMsg[currentIndex];
    let currentImg = $("#roleImgM").data("current");
    if (currentImg === "image1") {
      $("#roleImgM").prop("src", `./img/role/${data.image2}`).removeClass("characterFadeOutLeft").addClass("characterFadeInRight");
      $("#roleImgM").data("current", "image2");
      $("#roleSwitchM").hide();
      $("#roleSwitchingM").show();
    } else {
      $("#roleImgM").prop("src", `./img/role/${data.image1}`).removeClass("characterFadeOutLeft").addClass("characterFadeInRight");
      $("#roleImgM").data("current", "image1");
      $("#roleSwitchM").show();
      $("#roleSwitchingM").hide();
    }
  }
  
  function playCharacterVioceM(num) {
    if (num === 1) {
      $("#roleMusicM")[0].play();
      $("#roleVoiceingM").show();
      $("#roleVoiceM").hide();
      muteMusic(1);
    }
    if (num === 2) {
      $("#roleMusicM")[0].pause();
      $("#roleVoiceingM").hide();
      $("#roleVoiceM").show();
    }
  }
  
  $("#roleMusicM")[0].addEventListener("ended", function() {
    playCharacterVioceM(2);
  });