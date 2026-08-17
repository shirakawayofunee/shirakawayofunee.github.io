export default {
  meta: {
    title: `「业师」`,
    bgm: `mp3/bg/conversation13.mp3`,
    summary: `探偵が目を覚ましたのは、優雅な庭園だった。
    そこは伝説の暗殺組織 「Garden」の拠点だ。`
  },
  infoPanel: {
    glossary: [
      {
        term: `上庭`,
        desc: `人類文明の最高統治機関、その意思決定の中枢は、科学者によって設立された組織「<span>Edge</span>」であり、
    現在は再編を経て7人のメンバーによって構成されている。`
      },
      {
        term: `福音地`,
        desc: `工事中`
      },
      {
        term: `GARDEN`,
        desc: `工事中`
      }
    ],
    characters: [
      {
        name: `「Coquelicot」｜業師（L）`,
        avatar: `img/dh/leopoldmy.jpg`,
        note: `「GARDEN」の主、裏社会を陰で牛耳る実力者。`,
        basicStats: `生の流儀：人の世は百年ばかり。過ごすなら骨の髄まで味わい、鮮烈に艶やかに生きるべし。
        ▌コードネーム由来：
        「Coquelicot」、フランス語の「虞美人」
        人前では（工事中）
        ▌内面では子どもへの深い慈愛と責任感を胸に、いかなる逆境にあっても活路を切り開き、決して重圧をかけず、心配させまいと気丈に振る舞う師匠
生い立ち：（工事中）`
      },
      {
        name: `Chris｜<ruby>未来の名探偵<rt>自称</rt></ruby>`,
        avatar: `img/dh/pc2.png`,
        note: `19歳、能力者、警察学校の一年生。`,
        basicStats: `憧れの「<ruby>シャーローム<rt>上庭の執行人</rt></ruby>姉さん」に頼まれて、「GARDEN」が引き起こした連続殺人事件を調査中。`
      },
      {
        name: `『<ruby>薊<rt>アザミ</rt></ruby>』`,
        avatar: `img/dh/thistle3.jpg`,
        note: `19歳、能力者、「GARDEN」の殺し屋`,
        basicStats: `103年、身为FAC的双亲死于，走投无路的薊加入花园
        103年、
        作为殺し屋最想复仇的对象是连军人家属的抚恤金都要贪污的基金会。`
      },
    ],
    synopsis: `工事中`
  },
  
  script: [
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/leopoldmy.jpg`,
      name: `業師`,
      text: `さっきの叫び声、めっちゃ悲惨だったね。悪夢でも見た？安心して、君の体にあった汚染は、慈悲深い私が全部抜いてあげたから。`
    ,
      voice: [
        { label: '中', path: 'wav/CN/conversation13/vo_event_11016_33.wav' },
        /* { label: '日', path: 'wav/JP/conversation13/vo_event_11016_7.wav' }, */
      ]
    },
    {
      type: `narration`,
      text: `探偵は体を起こそうとしたが、失敗した。口の中に溜まった血が呼吸を妨げ、辺りは真っ暗――あるいは、まだ視力が戻っていないだけかもしれない。`
    },
    {
      type: `narration`,
      text: `彼女の視界には、手元に散らばる黒い金盞花の破片――いや、金盞花の形をした狂厄の汚染が見えた。それが彼女に悪夢の戦いを思い出させた。崩れた壁の下で、彼女は多くの化け物と戦い、汚染された。`
    },
    {
      type: `narration`,
      text: `だが今、体の陣痛のような痛みを除けば、あの狂乱の感覚はもうない。誰かが彼女の体の汚染を処理してくれたのか？こんな……花を咲かせるような方法で？`
    },
    {
      type: `narration`,
      text: `暗闇から聞こえるのは、聞き慣れた声。誰かが彼女をじっと見つめている。`
    ,
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/leopoldmy.jpg`,
      name: `業師`,
      text: `床、硬いよね。ごめんね、怪我人に膝枕でも貸してあげたいところだけど、君、傷だらけでさ。寄りかかったら私の服が汚れちゃうから。ちょっと我慢してね。`
    ,
      voice: [
        { label: '中', path: 'wav/CN/conversation13/vo_event_11016_63.wav' },
        /* { label: '日', path: 'wav/JP/conversation13/vo_event_11016_7.wav' }, */
      ]
    },
    {
      type: `narration`,
      text: `自分の体から漂う腐臭と血の匂いとは違い、辺りには花の香りが漂い、さらさらと水の流れる音が聞こえる。`
    },
    {
      type: `image`,
      src: `img/cg/hua_05.png`
    ,
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/zhentan13.png`,
      name: `探偵`,
      text: `ここは……どこ？`
    ,
      voice: [
        /* { label: '日', path: 'wav/JP/conversation13/vo_event_11016_7.wav' }, */
      ]
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/leopoldmy.jpg`,
      name: `業師`,
      text: `私の「Garden」。敵の牙城よ、探偵ちゃん。`
    ,
      voice: [
        { label: '中', path: 'wav/CN/conversation13/vo_event_11016_86.wav' },
        /* { label: '日', path: 'wav/JP/conversation13/vo_event_11016_7.wav' }, */
      ]
    },

    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/leopoldmy.jpg`,
      name: `業師`,
      text: `私のこと、覚えてる？`
    ,
      voice: [
        { label: '中', path: 'wav/CN/conversation13/vo_event_11016_23.wav' },
        /* { label: '日', path: 'wav/JP/conversation13/vo_event_11016_7.wav' }, */
      ]
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/zhentan13.png`,
      name: `探偵`,
      text: `……覚えてるよ、殺人犯。`
    ,
      voice: [
        /* { label: '日', path: 'wav/JP/conversation13/vo_event_11016_7.wav' }, */
      ]
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/leopoldmy.jpg`,
      name: `業師`,
      text: `ぷっ。ベビーフェイスなのに、もっと可愛い言葉を話しなさいよ。`
    ,
      voice: [
        { label: '中', path: 'wav/CN/conversation13/vo_event_11016_92.wav' },
        { label: '日', path: 'wav/JP/conversation13/vo_event_11016_2.wav' },
      ]
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/leopoldmy.jpg`,
      name: `業師`,
      text: `さあ、私の名前を呼んで。<span>『Coquelicot』</span>`
    ,
      voice: [
        { label: '中', path: 'wav/CN/conversation13/vo_event_11016_92.wav' },
        { label: '日', path: 'wav/JP/conversation13/vo_event_11016_2.wav' },
      ]
    },
    {
      type: `narration`,
      text: `探偵にそんな気分はなかった。意識は体と同じく重く、ただ一番大事なものをつかみたかった。`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/zhentan13.png`,
      name: `探偵`,
      text: `君の事件……全部10年前の復讐だ。同様の復讐……でも、それは君の本当の狙いじゃない……`
    ,
      voice: [
        /* { label: '中', path: 'wav/CN/conversation13/vo_event_11016_8.wav' }, */
        /* { label: '日', path: 'wav/JP/conversation13/vo_event_11016_7.wav' }, */
      ]
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/zhentan13.png`,
      name: `探偵`,
      text: `……君はこの事件で、あたしに何かを調べさせたいんだ。10年前の何かを暴きたいんだよね……`
    ,
      voice: [
        /* { label: '中', path: 'wav/CN/conversation13/vo_event_11016_8.wav' }, */
        /* { label: '日', path: 'wav/JP/conversation13/vo_event_11016_7.wav' }, */
      ]
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/zhentan13.png`,
      name: `探偵`,
      text: `なら、素直にあたしに調べさせてよ! どうしてこんな酷いことをするの! 俳句はあと二つ、 それは二人分の命。
      ここまでにしようよ。君の欲しい物を調べに行ってあげるから、これ以上は―――`
    ,
      voice: [
        /* { label: '中', path: 'wav/CN/conversation13/vo_event_11016_8.wav' }, */
        { label: '日', path: 'wav/JP/conversation13/vo_event_11016_1.wav' },
      ]
    },
    {
      type: `narration`,
      text: `業師が探偵の言葉を遮った。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/regret.png`,
      name: `業師`,
      text: `「Garden」は人生を楽しむ場所なんだから、仕事のつまんない話はなしにしてよ。`
    ,
      voice: [
        { label: '中', path: 'wav/CN/conversation13/vo_event_11016_88.wav' },
        /* { label: '日', path: 'wav/JP/conversation13/vo_event_11016_7.wav' }, */
      ]
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/zhentan13.png`,
      name: `探偵`,
      text: `じゃあ、なんで私をここに連れてきた？殺す気？それとも拷問？`
    ,
      voice: [
        /* { label: '中', path: 'wav/CN/conversation13/vo_event_11016_8.wav' }, */
        /* { label: '日', path: 'wav/JP/conversation13/vo_event_11016_7.wav' }, */
      ]
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/leopold3.png`,
      name: `業師`,
      text: `そうね……ああ、そう言えば君を「Garden」に推薦した人がいるわね。`
    ,
      voice: [
        { label: '中', path: 'wav/CN/conversation13/vo_event_11016_21.wav' },
        { label: '日', path: 'wav/JP/conversation13/vo_event_11016_12.wav' },
      ]
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/zhentan13.png`,
      name: `探偵`,
      text: `は？`
    ,
      voice: [
        /* { label: '中', path: 'wav/CN/conversation13/vo_event_11016_8.wav' }, */
        /* { label: '日', path: 'wav/JP/conversation13/vo_event_11016_7.wav' }, */
      ]
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/leopoldmy.jpg`,
      name: `業師`,
      text: `ふふ、可愛い反応。`
    ,
      voice: [
        { label: '中', path: 'wav/CN/conversation13/vo_event_11016_65.wav' },
        /* { label: '日', path: 'wav/JP/conversation13/vo_event_11016_7.wav' }, */
      ]
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/leopoldmy.jpg`,
      name: `業師`,
      text: `君もFACの可哀想な子なんだから、ここの仲間と挨拶でもしたら？`
    ,
      voice: [
        { label: '中', path: 'wav/CN/conversation13/vo_event_11016_89.wav' },
        /* { label: '日', path: 'wav/JP/conversation13/vo_event_11016_7.wav' }, */
      ]
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/zhentan13.png`,
      name: `探偵`,
      text: `「も」？`
    ,
      voice: [
        /* { label: '中', path: 'wav/CN/conversation13/vo_event_11016_8.wav' }, */
        /* { label: '日', path: 'wav/JP/conversation13/vo_event_11016_7.wav' }, */
      ]
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/leopoldmy.jpg`,
      name: `業師`,
      text: `何年も経って、FACで死んだ人なんて山ほどいる。君と同じ境遇の子供が「Garden」に加わるなんて、普通でしょ？彼女たち、君のこと結構気に入ってるよ。`
    ,
      voice: [
        { label: '中', path: 'wav/CN/conversation13/vo_event_11016_15.wav' },
        /* { label: '日', path: 'wav/JP/conversation13/vo_event_11016_7.wav' }, */
      ]
    },
    {
      type: `narration`,
      text: `……復讐のために「Garden」に加わる。探偵はその気持ちをすぐに理解した。彼女は拳をぎゅっと握った。`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/zhentan13.png`,
      name: `探偵`,
      text: `違う……どんな不当な扱いを受けたって、私は他人を傷つけない。正義を信じてる……`
    ,
      voice: [
        { label: '日', path: 'wav/JP/conversation13/vo_event_11016_4.wav' },
      ]
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/leopoldmy.jpg`,
      name: `業師`,
      text: `何が違うのさ。8年前、君だって一人で涅槃グループに乗り込んで、上庭の代表を刺したじゃない？`
    ,
      voice: [
        { label: '中', path: 'wav/CN/conversation13/vo_event_11016_59.wav' },
        /* { label: '日', path: 'wav/JP/conversation13/vo_event_11016_7.wav' }, */
      ]
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/zhentan13.png`,
      name: `探偵`,
      text: `！`
    },
    {
      type: `narration`,
      text: `探偵の呼吸が止まった。その反応に業師はとても満足そうだった。業師は水の中から立ち上がり、全身に水滴をまとった。周囲の暗殺者たちが群がり、薄いベールを彼女にかけ、浴槽から出るのを手伝い、彼女は終始楽しそうに笑っていた。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/leopold.png`,
      name: `業師`,
      text: `だから、君って変わってるって言ったの。正義だの真実だのって馬鹿みたいなこと言ってるけど、咲かせた花は暗くて哀れっぽい。私の「Garden」に連れてこられても驚きも騒ぎもしない……`,
      voice: [
        { label: '中', path: 'wav/CN/conversation13/vo_event_11016_17.wav' },
        /* { label: '日', path: 'wav/JP/conversation13/vo_event_11016_7.wav' }, */
      ]
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/leopold.png`,
      name: `業師`,
      text: `やっぱり、慣れてるんだね。君の心はずっと真っ暗なところに閉じ込められてる。`,
      voice: [
        { label: '中', path: 'wav/CN/conversation13/vo_event_11016_6.wav' },
        /* { label: '日', path: 'wav/JP/conversation13/vo_event_11016_7.wav' }, */
      ]
    },
    {
      type: `narration`,
      text: `業師は探偵のそばに歩み寄り、身を屈めて獲物を吟味するように眺めた。長い白髪が探偵の顔を撫で、水滴は冷たかった。動きたくても動けない探偵は、相手の鮮やかな赤い目を見つめるしかなかった。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/smile0.png`,
      name: `業師`,
      text: `あの時、何があったの？小さい子がそんな大それたことやっちゃうなんて、どれだけ怒ってたの？`
    ,
      voice: [
        { label: '中', path: 'wav/CN/conversation13/vo_event_11016_82.wav' },
        /* { label: '日', path: 'wav/JP/conversation13/vo_event_11016_7.wav' }, */
      ]
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/regret.png`,
      name: `業師`,
      text: `刺殺、成功した？憎しみをぶつけた相手、仕留めた？`
    ,
      voice: [
        { label: '中', path: 'wav/CN/conversation13/vo_event_11016_94.wav' },
        /* { label: '日', path: 'wav/JP/conversation13/vo_event_11016_7.wav' }, */
      ]
    },
    {
      type: `narration`,
      text: `探偵は彼女の視線を避け、歯を食いしばり、苦しげに言葉を絞り出した。`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/zhentan13.png`,
      name: `探偵`,
      text: `……そんなんじゃない。君には関係ない。話すつもりもない。`
    ,
      voice: [
        /* { label: '中', path: 'wav/CN/conversation13/vo_event_11016_8.wav' }, */
        /* { label: '日', path: 'wav/JP/conversation13/vo_event_11016_7.wav' }, */
      ]
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/regret.png`,
      name: `業師`,
      text: `じゃあ、刺殺失敗したんだ。残念だね、君、めっちゃ才能あるのに。能力者として覚醒までしてる。`
    ,
      voice: [
        { label: '中', path: 'wav/CN/conversation13/vo_event_11016_38.wav' },
        /* { label: '日', path: 'wav/JP/conversation13/vo_event_11016_7.wav' }, */
      ]
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/regret.png`,
      name: `業師`,
      text: `暗殺者として、復讐者として、怒りに燃えてすべてを焼き尽くす者として。君には暴力と破壊の才能がある。ここにいる子たちと同じだ。だからあの女が君をそばに置いてるのよ。`
    ,
      voice: [
        { label: '中', path: 'wav/CN/conversation13/vo_event_11016_50.wav' },
        /* { label: '日', path: 'wav/JP/conversation13/vo_event_11016_7.wav' }, */
      ]
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/regret.png`,
      name: `業師`,
      text: `正義なんてやめなよ。それは君のシャーローム姉さんがでっち上げた嘘、君を縛る鎖にすぎない。君が扱ってる事件がその証拠でしょ？`
    ,
      voice: [
        { label: '中', path: 'wav/CN/conversation13/vo_event_11016_96.wav' },
        /* { label: '日', path: 'wav/JP/conversation13/vo_event_11016_7.wav' }, */
      ]
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/regret.png`,
      name: `業師`,
      text: `アナタニアって女、浅はかで虚栄心の塊。道徳の高いところに立って他人を口汚く罵り、人を傷つけたらビビって魂が抜けたみたいになって、数日後にはまた自己弁護して高みに戻る。`
    ,
      voice: [
        { label: '中', path: 'wav/CN/conversation13/vo_event_11016_41.wav' },
        /* { label: '日', path: 'wav/JP/conversation13/vo_event_11016_7.wav' }, */
      ]
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/smile0.png`,
      name: `業師`,
      text: `ネイサンだって、汚い手口のシンジケートの野犬。頭の腐った議員に取り入って、どれだけの人命を背負ってるんだ。10年経っても、私が裁かなかったら、誰が裁くの？君の正義はどこにあるの？`
    ,
      voice: [
        { label: '中', path: 'wav/CN/conversation13/vo_event_11016_39.wav' },
        /* { label: '日', path: 'wav/JP/conversation13/vo_event_11016_7.wav' }, */
      ]
    },
    {
      type: `narration`,
      text: `弱った探偵はしばらく黙り、業師の目を見つめ直した。`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/pc208.png`,
      name: `探偵`,
      text: `……そういうこと言うの、君で何人目だ。「世の中が暗いから、正義なんて存在しない。だからちょっとルールを破ってもいいよね」って。`
    ,
      voice: [
        /* { label: '中', path: 'wav/CN/conversation13/vo_event_11016_8.wav' }, */
        /* { label: '日', path: 'wav/JP/conversation13/vo_event_11016_7.wav' }, */
      ]
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/pc208.png`,
      name: `探偵`,
      text: `世界がひどいから、君の悪は許されるって？ふざけるな！自分がやった悪を軽々しく流すなよ。君だってあいつらと同類、汚い仲間だ！君も悪の一部だ！`
    ,
      voice: [
        /* { label: '中', path: 'wav/CN/conversation13/vo_event_11016_8.wav' }, */
        /* { label: '日', path: 'wav/JP/conversation13/vo_event_11016_7.wav' }, */
      ]
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/pc208.png`,
      name: `探偵`,
      text: `この城邦で、どれだけの市民が君たちを恐れてるか、どれだけの極悪人が君たちを真似して無垢な人を傷つけてるか、自分でわかってないの？`
    ,
      voice: [
        /* { label: '中', path: 'wav/CN/conversation13/vo_event_11016_8.wav' }, */
        /* { label: '日', path: 'wav/JP/conversation13/vo_event_11016_7.wav' }, */
      ]
    },
    {
      type: `narration`,
      text: `業師は笑うでもなく笑みを浮かべ、突然大げさにため息をつき、首を振った。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/leopold3.png`,
      name: `業師`,
      text: `はぁ……聞いた、薊？これが君が必死で助けた「同類」だよ。`
    ,
      voice: [
        { label: '中', path: 'wav/CN/conversation13/vo_event_11016_80.wav' },
        /* { label: '日', path: 'wav/JP/conversation13/vo_event_11016_7.wav' }, */
      ]
    },
    {
      type: `narration`,
      text: `灯りがつき、屏風の向こうに傷ついた暗殺者が現れた。探偵と同年代くらいで、全身傷だらけ。顔は青ざめたり白くなったり、探偵と似た汚れが体についている。`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/zhentan13.png`,
      name: `探偵`,
      text: `これは……？`
    ,
      voice: [
        /* { label: '中', path: 'wav/CN/conversation13/vo_event_11016_8.wav' }, */
        /* { label: '日', path: 'wav/JP/conversation13/vo_event_11016_7.wav' }, */
      ]
    },
    {
      type: `narration`,
      text: `業師はもう探偵の質問には答えず、薊の方を向き、嘲るような顔をした。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/smile0.png`,
      name: `業師`,
      text: `化け物の山からこいつをせっかく引っ張り出したのに、同じ境遇なら分かり合えると思ったんだろ？でも、相手には君がただのクズに見える。せっかくの好意が無駄だったね。`
    ,
      voice: [
        { label: '中', path: 'wav/CN/conversation13/vo_event_11016_51.wav' },
        /* { label: '日', path: 'wav/JP/conversation13/vo_event_11016_7.wav' }, */
      ]
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/smile0.png`,
      name: `業師`,
      text: `もしこいつが君の情にほだされて、涙を流して優しい言葉をかけてきたら、君、泣きながら「Garden」の全部を差し出しちゃうつもり？`
    ,
      voice: [
        { label: '中', path: 'wav/CN/conversation13/vo_event_11016_72.wav' },
        /* { label: '日', path: 'wav/JP/conversation13/vo_event_11016_7.wav' }, */
      ]
    },
    {
      type: `narration`,
      text: `薊は業師を見られず、ただ探偵を恨めしそうに睨み、怒りと羞恥、後悔が目に溢れていた。`
    ,
      voice: [
        /* { label: '中', path: 'wav/CN/conversation13/vo_event_11016_8.wav' }, */
        /* { label: '日', path: 'wav/JP/conversation13/vo_event_11016_7.wav' }, */
      ]
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/thistle.jpg`,
      name: `薊`,
      text: `ごめんなさい……師匠……許してください……`
    ,
      voice: [
        /* { label: '中', path: 'wav/CN/conversation13/vo_event_11016_8.wav' }, */
        /* { label: '日', path: 'wav/JP/conversation13/vo_event_11016_7.wav' }, */
      ]
    },
    {
      type: `narration`,
      text: `だが、謝罪は業師をさらに怒らせただけだった。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/impatient.png`,
      name: `業師`,
      text: `情けない！何度も言ったよね、他人をそんな大事にしないって。今さら泣きわめいて何？「あ、大丈夫、許すよ」って私が言えば、気が楽になる？`
    ,
      voice: [
        { label: '中', path: 'wav/CN/conversation13/vo_event_11016_19.wav' },
        /* { label: '日', path: 'wav/JP/conversation13/vo_event_11016_7.wav' }, */
      ]
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/impatient.png`,
      name: `業師`,
      text: `勝手な行動で私のルールを破り、敵を本拠地に連れ込み、君の気持ちまで私がケアしろって？私が君のママなの？`
    ,
      voice: [
        { label: '中', path: 'wav/CN/conversation13/vo_event_11016_56.wav' },
        { label: '日', path: 'wav/JP/conversation13/vo_event_11016_6.wav' },
      ]
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/impatient.png`,
      name: `業師`,
      text: `ムカつく！せっかくの休息時間、君とその汚い拾い物に台無しにされた。禁閉行き！私が機嫌直すまで出てくんな。`
    ,
      voice: [
        { label: '中', path: 'wav/CN/conversation13/vo_event_11016_64.wav' },
        /* { label: '日', path: 'wav/JP/conversation13/vo_event_11016_7.wav' }, */
      ]
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/zhentan13.png`,
      name: `探偵`,
      text: `待って――`
    ,
      voice: [
        /* { label: '中', path: 'wav/CN/conversation13/vo_event_11016_8.wav' }, */
        /* { label: '日', path: 'wav/JP/conversation13/vo_event_11016_7.wav' }, */
      ]
    },
    {
      type: `narration`,
      text: `探偵は叫んだが、それは業師に向けたものではなく、泣き出しそうな「Garden」の暗殺者に向けたものだった。`
    },
    {
      type: `narration`,
      text: `彼女は足を止め、振り返って睨んだ。探偵は一瞬、何を言うべきか迷った。`
    },
    {
      type: `narration`,
      text: `君が私を助けてくれた？ありがとう？君の家族もFAC？ごめん、そういうつもりじゃなかった？こんな女のそばにいるべきじゃない？一緒にここから出よう？`
    },
    {
      type: `narration`,
      text: `考える前に、暗殺者が先に口を開いた。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/thistle2.jpg`,
      name: `薊`,
      text: `……死ねばよかったのに、飼い慣らされたクズ！`
    ,
      voice: [
        { label: '中', path: 'wav/CN/conversation13/vo_event_11016_2.wav' },
        /* { label: '日', path: 'wav/JP/conversation13/vo_event_11016_7.wav' }, */
      ]
    },
    {
      type: `narration`,
      text: `薊は去った。探偵は地面に倒れ、業師は横で面白そうに見つめていた。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/smile0.png`,
      name: `業師`,
      text: `ほら、彼女もFACの遺族だよ。103年で全てを失った。でも、君みたいな後ろ盾はなかった。正義にすがっても、返ってきたのはビンタの嵐だけ。だから私のところに来た。`
    ,
      voice: [
        { label: '中', path: 'wav/CN/conversation13/vo_event_11016_73.wav' },
        /* { label: '日', path: 'wav/JP/conversation13/vo_event_11016_7.wav' }, */
      ]
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/zhentan13.png`,
      name: `探偵`,
      text: `そして……君は彼女を利用した。`
    ,
      voice: [
        /* { label: '中', path: 'wav/CN/conversation13/vo_event_11016_8.wav' }, */
        /* { label: '日', path: 'wav/JP/conversation13/vo_event_11016_7.wav' }, */
      ]
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/zhentan13.png`,
      name: `探偵`,
      text: `最初は福音地、次は君……復讐を口実に、傷ついた人たちを騙して利用してる。一無所有の彼女たちを、傷つける刃に変えたんだ。`
    ,
      voice: [
        /* { label: '中', path: 'wav/CN/conversation13/vo_event_11016_8.wav' }, */
        /* { label: '日', path: 'wav/JP/conversation13/vo_event_11016_7.wav' }, */
      ]
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/zhentan13.png`,
      name: `探偵`,
      text: `彼女の人生が壊れたとしても、人は強い。少しずつ立ち直って、自分を取り戻せたはずだ。可是、君が彼女を闇に引きずり込んだ。今じゃもう戻れない！`
    ,
      voice: [
        /* { label: '中', path: 'wav/CN/conversation13/vo_event_11016_8.wav' }, */
        /* { label: '日', path: 'wav/JP/conversation13/vo_event_11016_7.wav' }, */
      ]
    },
    {
      type: `narration`,
      text: `その言葉が終わると同時に、業師が探偵の腹を強く蹴り、重傷の探偵は横の柱に叩きつけられた。鋭い何かが体に突き刺さり、意識が混濁する。`
    },
    {
      type: `narration`,
      text: `何か硬いものが頭に押し付けられ、強く圧迫されるのを感じた。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/leopold2.png`,
      name: `業師`,
      text: `吠えるな。執行人がくれるのは立派な正義で、私が与えるのは憎しみの洗脳だと？誰を見下してるの？`
    ,
      voice: [
        { label: '中', path: 'wav/CN/conversation13/vo_event_11016_74.wav' },
        /* { label: '日', path: 'wav/JP/conversation13/vo_event_11016_7.wav' }, */
      ]
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/leopold2.png`,
      name: `業師`,
      text: `君がどんな奴か、私にはお見通しだ。この世界に復讐する力がないから、一番空っぽなものを救命胴衣みたいにしがみついてるだけ。`
    ,
      voice: [
        { label: '中', path: 'wav/CN/conversation13/vo_event_11016_30.wav' },
        /* { label: '日', path: 'wav/JP/conversation13/vo_event_11016_7.wav' }, */
      ]
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/leopold2.png`,
      name: `業師`,
      text: `君みたいなのが一番騙されやすい、一番間抜けで弱いんだ。薊の馬鹿を目覚めさせるためじゃなきゃ、君のことなんか見向きもしないよ。`
    ,
      voice: [
        { label: '中', path: 'wav/CN/conversation13/vo_event_11016_75.wav' },
        /* { label: '日', path: 'wav/JP/conversation13/vo_event_11016_7.wav' }, */
      ]
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/leopold2.png`,
      name: `業師`,
      text: `「Garden」は君みたいな正義の戯言なんか聞かない。誰の言葉も聞かない。愛や崇高を名目に頭を下げさせるもの、全部汚い嘘だ。外のもののために払う犠牲は、全部愚かさの証明だ。`
    ,
      voice: [
        { label: '中', path: 'wav/CN/conversation13/vo_event_11016_46.wav' },
        /* { label: '日', path: 'wav/JP/conversation13/vo_event_11016_7.wav' }, */
      ]
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/leopold2.png`,
      name: `業師`,
      text: `私たちを傷つけた奴は、当然私が自分で裁く。そうやって奪われたものを自分の手で取り返すの。`
    ,
      voice: [
        { label: '中', path: 'wav/CN/conversation13/vo_event_11016_81.wav' },
        /* { label: '日', path: 'wav/JP/conversation13/vo_event_11016_7.wav' }, */
      ]
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/zhentan13.png`,
      name: `探偵`,
      text: `じゃあ……今やってることは何？この一連の事件、誰に復讐してるの？`
    ,
      voice: [
        /* { label: '中', path: 'wav/CN/conversation13/vo_event_11016_8.wav' }, */
        /* { label: '日', path: 'wav/JP/conversation13/vo_event_11016_7.wav' }, */
      ]
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/leopold2.png`,
      name: `業師`,
      text: `私の深い恨みはもう自分で片付けた。私は自由だ。今やってることは、全部私が楽しみたいから。`
    ,
      voice: [
        { label: '中', path: 'wav/CN/conversation13/vo_event_11016_1.wav' },
        /* { label: '日', path: 'wav/JP/conversation13/vo_event_11016_7.wav' }, */
      ]
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/leopold2.png`,
      name: `業師`,
      text: `で、私が何をしたいかって？君の主人に伝えなよ。彼女に私と遊んでもらおうじゃない。これもきっと、彼女が君を送り込んだ目的でしょ。`
    ,
      voice: [
        { label: '中', path: 'wav/CN/conversation13/vo_event_11016_87.wav' },
        /* { label: '日', path: 'wav/JP/conversation13/vo_event_11016_7.wav' }, */
      ]
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/leopold2.png`,
      name: `業師`,
      text: `だって……まさか本当に君に事件を解決できるなんて思ってる人、いるわけないよね。`
    ,
      voice: [
        { label: '中', path: 'wav/CN/conversation13/vo_event_11016_71.wav' },
        /* { label: '日', path: 'wav/JP/conversation13/vo_event_11016_7.wav' }, */
      ]
    },
    {
      type: `narration`,
      text: `突然、数本の細い針が飛んできて、探偵の体に刺さった。`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/zhentan13.png`,
      name: `探偵`,
      text: `うっ――！`
    ,
      voice: [
        /* { label: '中', path: 'wav/CN/conversation13/vo_event_11016_8.wav' }, */
        /* { label: '日', path: 'wav/JP/conversation13/vo_event_11016_7.wav' }, */
      ]
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/leopold2.png`,
      name: `業師`,
      text: `リラックスして。これはただの回復剤に、ほんのちょっと精神薬を混ぜただけ。ここから逃げるのに役立つよ。道さえ覚えなきゃ、君の命は取らない。`
    ,
      voice: [
        { label: '中', path: 'wav/CN/conversation13/vo_event_11016_47.wav' },
        /* { label: '日', path: 'wav/JP/conversation13/vo_event_11016_7.wav' }, */
      ]
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/leopold2.png`,
      name: `業師`,
      text: `逃げなさい、道端で死なないでね。芝居はまだ終わっていないの。私、君が幕を開けてくれるの、待ってるから。`
      ,
      voice: [
        { label: '中', path: 'wav/CN/conversation13/vo_event_11016_66.wav' },
        /* { label: '日', path: 'wav/JP/conversation13/vo_event_11016_7.wav' }, */
      ]
    }
  ]
};
