   var interleaveOffset = 0.8; //视差比值
  var backstoryStr=[
    `1999年12月31日、23時59分。世紀の終わりに「ストーム」は訪れた。<br>消えていく。パーティーも、イルミネーションも。最終バスの行き先も。世界は新しい旧時代へと「巻き戻った」。<br>

    少女が一人。彼女は「<span class="cus-key">時を司る者<span class="cus-target1">タイムキーパー</span></span>」。<br>ただ一人、かの暴雨から守られた、幾重の時代を見届ける者。<br>時代の波を歩き、あらゆる時代、<br>あらゆる国の<span class="cus-key">神秘学家<span class="cus-target2">アルカニスト</span></span>と共に。<br>そして、彼らと逃れるのだ、「ストーム」から。
    `,
    `どんな時代にも、象徴となる都市がある。<br>60年代のロンドン、そして20年代のニューヨーク。<br>
    1920年代のニューヨークは、現代科学が全てを可能にしていた。<br>フォード車、そしてラジオが世界を笑顔の溢れる楽園へと変えていた。夜通し鳴り響くジャズ、チャールストンのステップ、終わることのないパーティーが続く。<br>
    誰もが望み続けるカーニバル。
    `,
    `20世紀60年代、全てが素晴らしかった時代。<br>ポップアートとヒッピー文化が若者の間で流行し、ロンドンはその象徴だった。<br>そして、海賊放送とロックンロールが街中に溢れていた。`,
    `不可解な、あるいは夢のような事象：一滴の雨が空に落ちたとき、異変は起きた。<br>
    60年代のポップアート、20年代のプラチナとジャズ……<br>移り変わる時代の顔と同じに、異変もまた変わっていく。<br>時には幻のように、あるいは蜃気楼のように。
    ` ,
    `数千年にわたり、人類最前線学校は帰る場所を亡くした<span class="cus-key">神秘学家<span class="cus-target2">アルカニスト</span></span>の子どもを受け入れ、<span class="cus-key">神秘学<span class="cus-target3">アルカナム</span></span>を学ばせている。<br>卒業生は常に聖パブロフ財団、ゼノミリタリーアカデミーなどの世界最先端の場所でその力を示している。<br>
    白と灰の制服をまとった子どもは何処であろうと己の規範と教訓を忘れはしない。――人類と平和のために。
    `,
    `万物には因果があり、ウロボロスには世界がある。<br>
    幾度かの産業革命、その実績によって名を馳せた計算科学研究センター。<br>先鋭的な技術力と時代の追い風により、世界最大規模の科学研究施設となっている。<br>
今、彼らが目指すのは技術と<span class="cus-key">神秘術<span class="cus-target3">アルカナム</span></span>の融合による、第四次産業革命の実現。<br>そして、「ストーム」の発生によりもたらされた、因果律を確信させる理論。<br>
それに基づいた、時間逆行の原因と人類が未来へと至る可能性の算出である。`,
    `湖と水面に浮かぶ半分欠けている糸車。<br>スーツケースの窓は幾重にも幾多もの景色を写すけれど、これだけは変わらない。<br>
    ゆったりと流れていく<span class="cus-key">時間<span class="cus-target2">とき</span></span>の水で、かららと回る糸車は、<span class="cus-key">神秘学家<span class="cus-target2">アルカニスト</span></span>を呼び寄せる。`,
    `深紫色のハーリキンチェック柄のスーツケース。<br>羽毛より重く、金塊より軽い。<br>それほど複雑でない呪文を唱えると、広い住居へと導いてくれる。<br>
    中には無数の扉と窓があり、あらゆる時空へ繋がっている。<br>「ストーム」はそこへは届かず、様々な時代の痕跡が収められている。<br>多くの<span class="cus-key">神秘学家<span class="cus-target2">アルカニスト</span></span>たちはそこにいる。`
  ]
  var pcbackstory = new Swiper("#pcbackstory", {
        
        speed: 1000,
        observer: true, 
        observeParents: true,
        observeSlideChildren: true,
        // watchSlidesProgress: true,
        loop:true,
        navigation: {
          nextEl: "#backstoryNext",
          prevEl: "#backstoryPre",
        },
        // on:{
        
        // }
        on: {
          slideChange:function(){
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
	    }
      });
      function changeBackstory(num){
        for(let i=1;i<9;i++){
          let strId=`#backstoryImg${i}`;
          $(strId).attr("src",`./img/backstory/${i}.png`);
        }
        let checkId=`#backstoryImg${num+1}`;
        $(checkId).attr("src",`./img/backstory/${num+1}_1.png`);
        $("#backstoryTitle").attr("src",`./img/backstory/t${num+1}.png`).removeClass("animate__animated animate__fadeInUp");
        $("#backstoryStr").html(backstoryStr[num]).removeClass("animate__animated animate__fadeInUp");
        setTimeout(function(){
          $("#backstoryTitle").addClass("animate__animated animate__fadeInUp");
          $("#backstoryStr").addClass("animate__animated animate__fadeInUp");
        },10)
      }
      changeBackstory(0)
      function changeBackstoryClick(num){
        pcbackstory.slideTo(num+1);
      }
      
