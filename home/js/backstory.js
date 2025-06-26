/*
 * @Author: DCBZ
 * @Date: 2025-02-25 08:45:50
 * @LastEditors: your name
 * @LastEditTime: 2025-06-25 08:20:16
 * @Description:
 * @FilePath: \shirakawayofunee.github.io\home\js\backstory.js
 */
var interleaveOffset = 0.8; //视差比值
var backstoryStr = [
  `百年前、未曾有の大規模天災が世界を襲い、環境は急激に悪化、技術は停滞し、経済は衰退、世界の秩序が崩壊した。それ以来、人類文明は沈黙に陥ってしまった。
  <br>天災と同時に現れたのは、後世で「██」と定義された大規模なウイルスだった。その出現以降、市民は次々と汚染に侵され、狂躁や幻覚などの異常症状を伴った精神的疾患を患った。時間が経つにつれ、ほとんどの患者の症状は悪化し、最終的には意識を喪失し、肉体が歪んだ怪物へと変貌した。
  <br>「██」に侵された多くの人々の中で、極めて少数、「禁閉者」と呼ばれる個体が異常な危険能力を獲得した。彼らは狂気や偏執といった一般的な症状を示しながらも、自我意識を保持でき、怪物にならなかった。
    `,
  `88年前、「██」に対抗しうる鉱石「YFJ」が発見され、戦争が終わり、各都市が共に平和協定を調印した。
  <br>都市「D」人口が最も多く、最も繁栄している都市。政府機関、治安維持機関、研究所、軍事部隊、外事局、工業集団といった完璧な管理体系を所有している。
  世界で唯一の「YFJ」採掘地として、Dは辺境協定に基づきイレギュラーキューブを採掘し、外部の都市へ輸出を開始した。
  その代わりに、外部の都市から他の産業や資源の支援を受けている。 西区は採掘地として機能する。
  <br>30年前、採掘地で大爆発が発生し、汚染が広がった。多くの統治機関が西区から撤退、あるいは放棄された。
  西区は強者が弱者を貪る無法地帯へと変貌した。死亡者数は公開されず、同時に「禁閉者」の数が急増した。
    `,
  `  
  `,
  `介绍上庭地底，图还没想好用哪张
    `,
  `花园、中立組織。<br>変装と潜入を得意とする謎の組織。メンバーは幼い頃から教育を受け、熟練した戦闘技術を身につけているだけでなく、生花や書道、刺繍などの芸術分野における専門技術を習得している者も多い。
    `,
  `故事正式发生时，X与上庭人员所居住的度假山荘，周围全是针对「禁闭者」设下的天罗地网。<br>附近的住户、记者、议员、医生、警卫、商贩、裁缝。`,
  `S最终倒下的地方。<br>
  此处产生分支：<br>
  HE-L救走了Severo。<br>
  BE-Severo死在这里。`,
  `复古的手工匠人之店，空气中弥漫着淡淡的花香，静谧而温馨。<br>足以彰显<span class="cus-key">店主<span class="cus-target2">Severo</span></span>的品味。`,
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
