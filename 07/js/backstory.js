/*
 * @Author: DCBZ
 * @Date: 2025-02-25 08:45:50
 * @LastEditors: your name
 * @LastEditTime: 2025-07-06 17:08:41
 * @Description:
 * @FilePath: \shirakawayofunee.github.io\home\js\backstory.js
 */
var interleaveOffset = 0.8; //视差比值
var backstoryStr = [
  `元々は「福音地」が育て上げた殺し屋組織で、メンバーは使い捨ての消耗品と見なされていた。
  Lが「花園」を引き継いだ後、「花園」を率いて「福音地」から独立を果たした。
  <br>
  L「よし、今日からもう私たちを縛れる者はいない。処分すべき者は皆殺しだ。もう一線を画いて、バイバイできるんだ～
  今から、みな、自分の好きな仕事だけを受けて、好きな獲物だけを仕留めて、報酬をもらおう。行きたいところがあれば行け、
  気が向かなければ離れても構わない。誰かの指図をもう受けなくていい——私の以外はね。
恨みは君たちを縛れなくなる、私が自由をやるんだ。自分の命は、好きなように使えばいい——師匠の私が許したんだから。」
<br>
Lは「花園」を、メンバーそれぞれ自分の目標（復讐、力、居場所など）を追い求める、個性を大胆に表現できる、
高層の「大義」や「栄光」に縛られて無理やり犠牲になることのない、Lの理想郷として作り上げた。
  <br>
  S「もう二度と家族を失いたくない…」L「花園が君の家だよ。私が家族をあげる。」
  <br>
  J「あいつは罰を受けるべきだ！」L「なら、徹底的にやりなさい。その仕方を教えてあげるわ。」
  <br>
  T「私はもっと強くなりたい！誰にも踏みにじられないように！」L「なら、私を越すか、殺すかを選んで。」
  <br>
  L「実現しなさい、復讐しなさい！私の花よ、私の花園は、自由で、気ままで、縛らずに育つべきだ。邪魔な雑草は、全部刈り取ってしまえばいい。」
  <br>
  変装と潜入を得意とする謎の組織。
  メンバーは幼い頃から教育を受け、熟練した戦闘技術を身につけているだけでなく、生花や書道、刺繍などの芸術分野における専門技術を習得している者も多い。核心成员不过几十人，剩下的大多数外围人员甚至不知道自己在为【花园】服务。
  <br>
  X「私は花園の数人の殺し屋と関わったことがあるけど、彼女たちは殺人を楽しむような狂人じゃないよ。」
    `,
  `<br>工事中故事正式发生时，X与上庭人员所居住的度假山荘，周围全是针对「禁闭者」设下的天罗地网。<br>附近的住户、记者、议员、医生、警卫、商贩、裁缝。`,
  `S最终倒下的地方。<br>
  此处产生分支：<br>
  HE-L救走了Severo。<br>
  BE-Severo死在这里。<br>工事中`,
  `百年前、未曾有の大規模天災が世界を襲い、環境は急激に悪化、技術は停滞し、経済は衰退、世界の秩序が崩壊した。それ以来、人類文明は沈黙に陥ってしまった。
  <br>天災と同時に現れたのは、後世で「██」と定義された大規模なウイルスだった。
  その出現以降、市民は次々と汚染に侵され、狂躁や幻覚などの異常症状を伴った精神的疾患を患った。
  時間が経つにつれ、ほとんどの患者の症状は悪化し、最終的には意識を喪失し、肉体が歪んだ怪物へと変貌した。
  <br>「██」に侵された多くの人々の中で、極めて少数、「能力者」と呼ばれる個体が異常な危険能力を獲得した。
  彼らは狂気や偏執といった一般的な症状を示しながらも、自我意識を保持でき、怪物にならなかった。
  <br>「人類は闇の中で耐え抜き、必ず再び訪れる夜明けを待つ。」
    `,
  `88年前、「██」に対抗しうる鉱石「YFJ」が発見され、戦争が終わり、各都市が共に平和協定を調印した。
  <br>都市「D」人口が最も多く、最も繁栄している都市。政府機関、治安維持機関、研究所、軍事部隊、外事局、工業集団といった完璧な管理体系を所有している。
  世界で唯一の「YFJ」採掘地として、Dは辺境協定に基づきYFJを採掘し、外部の都市へ輸出を開始した。
  その代わりに、外部の都市から他の産業や資源の支援を受けている。 西区は採掘地として機能する。
  <br>30年前、採掘地で大爆発が発生し、汚染が広がった。多くの統治機関が西区から撤退、あるいは放棄された。
  西区は強者が弱者を貪る無法地帯へと変貌した。死亡者数は公開されず、同時に「能力者」の数が急増した。
    `,
  `「福音地」、「上庭」の長年のライバル。「花園」の主要な顧客の一つ。
  <br>メンバー同士にケアなど一切なし、互いに独立し、生死は自己責任。
  <br>彼らを一つに結びつけているのは、ある種の宿願である。それに身を捧げることはむしろ名誉とされている。
  <br>Sを騙して死に追い込むメンバーの名前は「シーゲル」。
  <br>工事中
  `,
  `「福音地」的老对头，「上庭」<br>「D」の最上層に位置する勢力で、都市「D」を支配している。
  上庭不像地底那样熟练掌握狂厄。上庭眼里除了他们这群人类的救世主，其他人类都是随时可弃的必要牺牲而已。
  认为自己能凌驾于感情的傲慢自大，也是完全不把人当人看。讽刺的是上庭正是因为无法剥离感情，才需要制造观测者这样的工具；
  他们也因为无法消解的恐惧而本末倒置，为了对抗狂厄牺牲原本的保护目标人类，离初心越来越远。
  <br>L「まともそうなことばかり言って、結局は臆病者じゃないか？臆病なだけじゃなく、偽善的で、傲慢、生意気、残酷だ。自分を何だと思っている？！」  
  <br>X「そうよ、これが上庭だ。必死で真実や正解を追い求めながら、リスクや未知のものを恐れ、災厄が再び訪れるのを怯えている。
  あれこれルールや保険を作って防ごうとするけど、自分も、皆も、その手で死に追い込まれただけ。」
  <br>工事中
    `,
  `复古的手工匠人之店，空气中弥漫着淡淡的花香，静谧而温馨。<br>足以彰显<span class="cus-key">店主<span class="cus-target2">Severo</span></span>的品味与专业性。<br>工事中`,
  `用语集
    `,
    `用语集2
    `,
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
  for (let i = 1; i < 11; i++) {
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
enableDragScroll('backstoryStr');
enableTouchScroll('backstoryStr');

// 确保滚轮事件不被 Swiper 拦截
document.getElementById('backstoryStr').addEventListener('wheel', (event) => {
  event.stopPropagation();
});
