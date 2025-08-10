/*
 * @Author: DCBZ
 * @Date: 2025-02-25 08:45:50
 * @LastEditors: your name
 * @LastEditTime: 2025-08-11 00:11:31
 * @Description:
 * @FilePath: \shirakawayofunee.github.io\home\js\backstory.js
 */
var interleaveOffset = 0.8; //视差比值
var backstoryStr = [
  `▍設立の背景<br>元々は「福音地」が育て上げた殺し屋組織で、メンバーは使い捨ての消耗品と見なされていた。
  Lが「Garden」を引き継いだ後、「Garden」を率いて「福音地」から独立を果たした。
  <br>
  L「よし、今日からもう私たちを縛れる者はいない。処分すべき者は皆殺しだ。もう一線を画いて、バイバイできるんだ～
  今から、みな、自分の好きな仕事だけを受けて、好きな獲物だけを仕留めて、報酬をもらおう。行きたいところがあれば行け、
  気が向かなければ離れても構わない。誰かの指図をもう受けなくていい——私の以外はね。
恨みは君たちを縛れなくなる、私が自由をやるんだ。自分の命は、好きなように使えばいい——師匠の私が許したんだから。」
<br>
Lは「Garden」を、メンバーそれぞれ自分の目標（復讐、力、居場所など）を追い求める、個性を大胆に表現できる、
高層の「大義」や「栄光」に縛られて無理やり犠牲になることのない、Lの理想郷として作り上げた。
<br>▍組織理念<br>
理念は「庇護」と「再構築」を核としています。
<br>庇護：差別や抑圧、亡命を経験した異能者や社会の周辺にいる個人を受け入れること。出自、罪状、身分を問わず、すべての人に門戸を開きます。
<br>再構築：教育、職業訓練、心理カウンセリングを通じて、メンバーが暴力に依存しない新たな社会での居場所を見つけられるよう支援します。
<br>▍組織構造
<br>「Garden」唯一の絶対的権威者、主宰者、Leopold。
<br>対内では穏やか、対外では強硬な姿勢を持ち、組織の精神的支柱です。
全メンバーに対する最高の処分権限を有します。
<br>▍核心メンバー<br>Lに直接従う初期の追随者（例：Sなど）。忠誠心が極めて高く、一定の自主権を持つ。
<br>▍常駐メンバー<br>42人。「Garden」のアジトに長期滞在し、情報収集、製作、後方支援、育児などの業務に従事。定期的に訓練を受ける。
<br>▍周辺メンバー<br>身分を浄化後、社会の各分野で活躍するの人々（例：艺术家の菫）。残りの大多数の周辺メンバーは、自分が「Garden」のために働いていることすら知りません。
<br>▍一時庇護者<br>一時的に保護された異能者。評価を経て常駐メンバーとなる可能性がある。
  <br>
  変装と潜入を得意とする謎の組織。
  メンバーは幼い頃から教育を受け、熟練した戦闘技術を身につけているだけでなく、生花や書道、刺繍などの芸術分野における専門技術を習得している者も多い。
  <br>
    `,
  `<br>詳細はタイムライン（約2000字）またはストーリー（1万字以上）をご覧ください。<br>ちなみに、←左の画像はN.F.115年に起こる出来事です。`,
  `百年前、未曾有の大規模天災が世界を襲い、環境は急激に悪化、技術は停滞し、経済は衰退、世界の秩序が崩壊した。それ以来、人類文明は沈黙に陥ってしまった。
  <br>天災と同時に現れたのは、後世で「狂厄」と定義された大規模なウイルスだった。
  その出現以降、市民は次々と汚染に侵され、狂躁や幻覚などの異常症状を伴った精神的疾患を患った。
  時間が経つにつれ、ほとんどの患者の症状は悪化し、最終的には意識を喪失し、肉体が歪んだ怪物へと変貌した。
  <br>「狂厄」に侵された多くの人々の中で、極めて少数、「能力者」と呼ばれる個体が異常な危険能力を獲得した。
  彼らは狂気や偏執といった一般的な症状を示しながらも、自我意識を保持でき、怪物にならなかった。
  <br>「人類は闇の中で耐え抜き、必ず再び訪れる夜明けを待つ。」
    `,
  `88年前、「狂厄」に対抗しうる鉱石「YFJ」が発見され、戦争が終わり、各都市が共に平和協定を調印した。
  <br>都市「D」人口が最も多く、最も繁栄している都市。政府機関、治安維持機関、研究所、軍事部隊、外事局、工業集団といった完璧な管理体系を所有している。
  世界で唯一の「YFJ」採掘地として、Dは辺境協定に基づきYFJを採掘し、外部の都市へ輸出を開始した。
  その代わりに、外部の都市から他の産業や資源の支援を受けている。 西区は採掘地として機能する。
  <br>30年前、採掘地で大爆発が発生し、汚染が広がった。多くの統治機関が西区から撤退、あるいは放棄された。
  西区は強者が弱者を貪る無法地帯へと変貌した。死亡者数は公開されず、同時に「能力者」の数が急増した。
  <br>▍FAC
  <br>Dissの主要な軍事力で、上庭に直属している。黒環の活動や狂厄事件など、災変によってもたらされた全ての状況の対応を行う。
  <br>▍市議会<br>Dissの管理期間で、都市内外の中枢的管理機能を担う。民選ではあるが、上庭の監督下にある。
  <br>▍ディス治安総局<br>Dissの治安維持機関。市議会に直属し、街の治安維持を担当する。本部はニューシティにあり、管理体制も万全だが、「西区治安管理条例」によると、シンジケートに置かれた支局は治安維持機能を行使できず、一連の社会問題を引き起こしている。
  <br>▍危機管理局<br>能力者の収容および管理を担当する機密組織。かつてはFACに所属していたが、現在は第九機関の指揮下で狂厄事件の対応にあたっている。
  <br>▍パルマ<br>謎の組織パルマ。西区に狂厄武器を氾濫させた黒幕であり、多数の狂厄事件に関与している疑いがある。
  <br>▍第九機関<br>Dissのスパイ組織。上庭に直属しており、極めて高い自主行動権限を持つ。
  <br>▍西区再建委員会<br>BR-004の爆発後、『西区治安管理条例』は停止され、治安支局も引き取る。市議会が主催として西区再建執行委員会を設立し、地域の管理を引き継ぐことになる。その後、執行官を派遣して西区各所で具体的な事務に取り組むことになった。
    `,
    `<br>西区詳細`,
  `「福音地」、「上庭」の長年のライバル。「Garden」のお得意先。
  <br>メンバー同士にケアなど一切なし、互いに独立し、生死は自己責任。
  <br>彼らを一つに結びつけているのは、ある種の宿願である。それに身を捧げることはむしろ名誉とされている。
  狂厄の復活は、彼らの口では「偉大なる存在の降臨」または「奇跡の覚醒」と呼ばれている。
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
    `黒環
    <br>黒環は、狂厄が限界点を超えた時に爆発する深度広域精神汚染領域で、狂厄災変の究極である。
    
    <br>▍黒環の影響
    <br>黒環は無秩序かつ大規模な狂厄の蔓延をもたらし、内部にいる個体を怪物に異変させる。
    黒環内の汚染濃度は極めて高く、怪物への異変も加速するため、いかなる個体にとっても黒環に進入することは極めて危険な行為である。

    <br>▍黒環の現象
    <br>深度広域精神汚染領域は該当エリアに歪みをもたらし、時空歪曲、反重力、磁場の乱れなどが発生する。
    一部の黒環は、独自の特殊現象を伴う。内部の物質と精神が異常転換し、精神次元が現実を侵蝕して融合した可能性が考えられる。

    <br>▍爆心地
    <br>BR-000の後、それぞれの黒環の爆発時には、1人の強力なコンビクトの暴走が確認されている。そのコンビクトは、黒環の爆心地と呼ばれる。黒環の爆発要件は、「骸」の復活である。
    <br>現時点で確認できている「骸」の復活条件は、下記の2点：
    <br>1.S級能力者が「骸」に侵食・融合される。
    <br>2.同一の感情を持つ狂厄感染者が集合して共感する。
    <br>以上の条件から判断するに、黒環の爆発には膨大かつ集中的な狂厄汚染が必要である。集中するほど純度が高くなり、爆発後の黒環の強度も高くなる。
    爆発後の黒環は、制御を受けなければ時間の経過と共に強くなり続ける。

    <br>▍受骸者
    <br>「骸」は膨大な量の狂厄汚染が融合した物質あるいは生物であり、復活していない状態でも人間に似た感情や意識が存在すると考えられている。
    ディスシティには複数の「骸」が存在する。「骸」が復活すると、その感情と意識はますます明瞭になってくる。復活した個体は受骸者と呼ばれ、狂厄汚染の中心となる。
    <br>二次黒環の爆発は、多く受骸者の誕生と関係している。広場黒環に対する詳しい調査により、受骸者が異変の源であることが判明した。
    異変は周辺エリアに実体化した精神汚染をもたらし、現実のルールを歪める。リングエリア内の怪物は、受骸者の精神関与を受ける。
    パルマ勢力の関連資料によると、受骸者は黒環の支配者とみなされ、「リングの主」もしくは「主」と呼ばれている。
    <br>▍BR-000
    <br>入夜84年に発生した0号黒環、別名「原生黒環」。内海の大爆発によって引き起こされ、内海全域を覆い、87231人の直接死亡と大量の怪物の出現をもたらしました。
    `,
    `外邦
    `,
    `复古的手工匠人之店，空气中弥漫着淡淡的花香，静谧而温馨。
    <br>足以彰显<span class="cus-key">店主<span class="cus-target2">Severo</span></span>的品味与专业性。<br>工事中`,
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
