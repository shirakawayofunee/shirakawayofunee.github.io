/*
 * @Author: DCBZ
 * @Date: 2025-02-25 08:45:50
 * @LastEditors: your name
 * @LastEditTime: 2025-06-23 00:10:22
 * @Description:
 * @FilePath: \shirakawayofunee.github.io\home\js\backstory.js
 */
var interleaveOffset = 0.8; //视差比值
var backstoryStr = [
  `还没写
    `,
  `一百年前，大规模天灾席卷全球，环境急剧恶化，科技停滞，经济衰退，秩序分崩离析。人类文明自此陷入沉寂。<br>同天灾一起到来的，还有后世定义为「███」的大规模病毒，自其出现以来，不断有市民遭到精神污染，伴随狂躁、幻觉等异常症状。随着时间推移，绝大多数患者的病情都会日益加重，并最终崩坏为意识丧失、肉体扭曲的怪物。<br>在众多受到███侵蚀的人群中，有极少数被称为「禁闭者」的个体获得了超常的危险能力，这些个体一方面表现出了疯狂偏执的常规症状，另一方面却仍保留了自我意识，没有变成怪物。但对于狄斯城而言，禁闭者比死役更加危险，需要更加严格的收容与控制。
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
