/*
 * @Author: DCBZ
 * @Date: 2025-02-25 08:45:50
 * @LastEditors: your name
 * @LastEditTime: 2025-06-23 00:57:13
 * @Description:
 * @FilePath: \shirakawayofunee.github.io\home\js\backstory.js
 */
var interleaveOffset = 0.8; //视差比值
var backstoryStr = [
  `还没写
    `,
  `百年前、未曾有の大規模天災が世界を襲い、環境は急激に悪化、技術は停滞し、経済は衰退、世界の秩序が崩壊した。それ以来、人類文明は沈黙に陥ってしまった。
  <br>天災と同時に現れたのは、後世で「██」と定義された大規模なウイルスだった。その出現以降、市民は次々と汚染に侵され、狂躁や幻覚などの異常症状を伴った精神的疾患を患った。時間が経つにつれ、ほとんどの患者の症状は悪化し、最終的には意識を喪失し、肉体が歪んだ怪物へと変貌した。
  <br>「███」に侵された多くの人々の中で、極めて少数、「禁閉者」と呼ばれる個体が異常な危険能力を獲得した。彼らは狂気や偏執といった一般的な症状を示しながらも、自我意識を保持でき、怪物にならなかった。
    `,
  `简单介绍各大城区与势力`,
  `介绍上庭地底，图还没想好用哪张
    `,
  `花园<br>変装と潜入を得意とする謎の組織。メンバーは幼い頃から教育を受け、熟練した戦闘技術を身につけているだけでなく、生花や書道、刺繍などの芸術分野における専門技術を習得している者も多い。
    `,
  `故事正式发生时，X与上庭人员所居住的度假山荘，周围全是针对「禁闭者」设下的天罗地网。<br>附近的住户、记者、议员、医生、警卫、商贩、裁缝。`,
  `加洛法诺最终倒下的地方。<br>
  此处产生分支：<br>
  HE-可可莉克救走了加洛法诺。<br>
  BE-加洛法诺死在这里。`,
  `复古的手工匠人之店，空气中弥漫着淡淡的花香，静谧而温馨。<br>足以彰显<span class="cus-key">店主<span class="cus-target2">加洛法诺</span></span>的品味。`,
];
var pcbackstory = new Swiper("#pcbackstory", {
  speed: 1000,
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  // watchSlidesProgress: true,
  loop: true,
  navigation: {
    nextEl: "#backstoryNext",
    prevEl: "#backstoryPre",
  },
  // on:{

  // }
  on: {
    slideChange: function () {
      //console.log(this.realIndex)
      changeBackstory(this.realIndex);
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
function changeBackstory(num) {
  for (let i = 1; i < 9; i++) {
    let strId = `#backstoryImg${i}`;
    $(strId).attr("src", `./img/backstory/${i}.png`);
  }
  let checkId = `#backstoryImg${num + 1}`;
  $(checkId).attr("src", `./img/backstory/${num + 1}_1.png`);
  $("#backstoryTitle")
    .attr("src", `./img/backstory/t${num + 1}.png`)
    .removeClass("animate__animated animate__fadeInUp");
  $("#backstoryStr")
    .html(backstoryStr[num])
    .removeClass("animate__animated animate__fadeInUp");
  setTimeout(function () {
    $("#backstoryTitle").addClass("animate__animated animate__fadeInUp");
    $("#backstoryStr").addClass("animate__animated animate__fadeInUp");
  }, 10);
}
changeBackstory(0);
function changeBackstoryClick(num) {
  pcbackstory.slideTo(num + 1);
}
