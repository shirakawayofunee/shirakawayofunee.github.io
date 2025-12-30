export default {
  meta: {
    title: `Blue Rain-003「家」`,
    bgm: `mp3/bg/conversation2.mp3`,
    summary: `家族か敵か、復讐か庇護か、本当の答えは何なのか？`
  },
  
  infoPanel: {
    glossary: [
      { 
        term: `FAC (Black Ring)`, 
        desc: `高浓度的狂厄污染区域，普通人进入即死或变异。` 
      },
      { 
        term: `上庭 (Paradeisos)`,
        desc: `世界的统治中心，拥有最高科技与武力，蔑视地表一切生命。`
      },
      { 
        term: `黑环 (Black Ring)`,
        desc: `高浓度的狂厄污染区域，普通人进入即死或变异。`
      }
    ],
    characters: [
      {
        name: `Leopold`,
        avatar: `img/dh-leopold.jpg`,
        note: `本章中她试图掩盖自己的虚弱，对S展现出强硬的一面，实则是为了保护对方。`
      },
      {
        name: `侦探`,
        avatar: `img/dh/pc1.jpg`,
        note: `FAC幸存者，`
      }
    ],
    synopsis: `上一章，侦探在废墟中醒来。本章讲述两人初次正面交锋。<br>L试图通过言语激怒侦探。`,
    relatedLink: {
      text: `次章`,
      targetId: `conversation4`
    }
  },

  script: [
    {
      type: `narration`, 
      text: `N.F.113年7月23日 08:05<br>セヴェロの仕立て屋`
    },
    {
      type: `image`,
      src: `img/cg/br_01.png`
    },
    {
      type: `narration`, 
      text: `概要：数日間、セヴェロはエリカ山荘の警備員（能力者を含む）と何度も正面衝突した。「GARDEN」に戻って休息しようとした矢先、調査員が訪ねてくる。  <br>セヴェロは一瞬の情け深き、自身と「同じ境遇」に見える調査員を引き込もうとし、「上庭に傷つけられた同類」だと説得、<br>「GARDEN」の首領レオポルドが復讐を助けられると伝えた。しかし、その優しさは強く拒絶され、逆に調査員に裏切られた。最終的にセヴェロは罠に落ち、能力者対策の部隊に制圧され、昏迷状態に陥る。調査員もSan値が限界に達し、一時的に行動不能となる。`
    },
    {
      type: `dialogue`,
      position: `left`, 
      avatar: `img/dh/severo5.png`, 
      name: `Severo`,
      text: `もう、FACの伝統って優しく礼儀正しいことじゃなかった？なんで私にはそんな乱暴なのさ。戦友の未亡人なんだから、ちょっと手加減してよ、ね？`
    },
    {
      type: `dialogue`,
      position: `right`, 
      avatar: ``, 
      name: `调查员`,
      text: `めっちゃ下手な殺し屋だね。嘘八百ならまだしも、こんなに無駄話が多いなんて笑えるよ。`
    },
    {
      type: `narration`, 
      text: `彼女は大盾を振り上げ、接客用の丸テーブルを「店主」めがけて投げる。女は身を翻してかわし、片手で数本の弩矢を引き抜いて反撃。両者はその勢いで距離を取る。`
    },
    {
      type: `dialogue`,
      position: `left`, 
      avatar: `img/dh/severo5.png`, 
      name: `Severo`,
      text: `これらはすべて私の人生で実際に経験したことです。`
    },
    {
      type: `dialogue`,
      position: `left`, 
      avatar: `img/dh/severo5.png`, 
      name: `Severo`,
      text: `西区に新しい黒環ができたよね。お前の仲間、どれだけそこで死んだ？知ってるよ、FACの誇らしい伝統――意味のない、わけわかんない「偉大な犠牲」を崇めること。だからさ、むしろ私たち、同病相憐れむべきじゃない？もっと話すべきだよ…っと！`
    },
    {
      type: `narration`, 
      text: `彼女は叫びながら二度目の攻撃をかわす。それは至近距離での突撃だったが、空を切った。調査員は自分の動きが遅くなり、身体が思うように動かなくなっていることに気づく。`
    },
    {
      type: `narration`, 
      text: `すぐに何が起きたか悟る。`
    },
    {
      type: `dialogue`,
      position: `right`, 
      avatar: ``, 
      name: `调查员`,
      text: `神経毒素を使った？`
    },
    {
      type: `dialogue`,
      position: `left`, 
      avatar: `img/dh/severo5.png`, 
      name: `Severo`,
      text: `正解、さすがだね。お前たちの戦い方、知ってるよ。怪物と正面からぶつかり合うのが好きで、怖がらず避けず、いつも命を惜しまず盾になる。これに対抗するには、この手が一番効くの。`
    },
    {
      type: `dialogue`,
      position: `left`, 
      avatar: `img/dh/severo5.png`, 
      name: `Severo`,
      text: `おっと、動かないで。この毒にはちょっとだけ狂厄の汚染が混ざってる。もし異方晶持ってるなら、静かに浄化を待った方がいい。今はまだお前を傷つけたくないから。`
    },
    {
      type: `dialogue`,
      position: `left`, 
      avatar: `img/dh/severo5.png`, 
      name: `Severo`,
      text: `あなたと話したいんだ。`
    },
    {
      type: `narration`, 
      text: `殺し屋は追撃せず、逆に顔の軽薄な笑みが徐々に消える。`
    },
    {
      type: `dialogue`,
      position: `left`, 
      avatar: `img/dh/severo5.png`, 
      name: `Severo`,
      text: `この4ヶ月、城邦のすべての黒環が活発化して、FACの全戦力は正面戦場に投入されてる。新城の悪質な事件に対応する余裕なんてないから、ずっと前に第九機関に引き継がれてるよね。`
    },
    {
      type: `dialogue`,
      position: `left`, 
      avatar: `img/dh/severo5.png`, 
      name: `Severo`,
      text: `ボディガード、いや、FAC-G47小隊の能力者、お前がここにいるはずない。上級からの援護命令なんて出てないでしょ。`
    },
    {
      type: `dialogue`,
      position: `left`, 
      avatar: `img/dh/severo5.png`, 
      name: `Severo`,
      text: `勝手に新城に戻って、関係ない事件に無理やり介入して、手がかり見つけても報告せず、単独で私みたいな「殺し屋」に会いに来た…お前の能力者の力だって、クリーンじゃないよね？`
    },
    {
      type: `dialogue`,
      position: `left`, 
      avatar: `img/dh/severo5.png`, 
      name: `Severo`,
      text: `身FACとして、服従と忠誠がお前の務めなのに、お前はあまりにも多くの一線を越えた。どれか一つでも、裁判沙汰になるよ。`
    },
    {
      type: `dialogue`,
      position: `right`, 
      avatar: ``, 
      name: `调查员`,
      text: `…ふっ、よく調べたね。脅すつもり？`
    },
    {
      type: `dialogue`,
      position: `left`, 
      avatar: `img/dh/severo5.png`, 
      name: `Severo`,
      text: `…いや、お前のこと、お前が思う以上に理解してるよ。`
    },
    {
      type: `dialogue`,
      position: `left`, 
      avatar: `img/dh/severo5.png`, 
      name: `Severo`,
      text: `お前は内海の「蝕月作戦」に参加して、唯一の生き残り。ここに来たのは復讐のためだけだよね。`
    },
    {
      type: `dialogue`,
      position: `right`, 
      avatar: ``, 
      name: `调查员`,
      text: `？！`
    },
    {
      type: `dialogue`,
      position: `left`, 
      avatar: `img/dh/severo5.png`, 
      name: `Severo`,
      text: `103年、FACは緊急命令を受け、28の中隊が秘密裏に内海へ向かい、BR-000に突入。情報も時間も不足の中で、作戦は何の成果も上げず、お前以外全員戦死。`
    },
    {
      type: `dialogue`,
      position: `left`, 
      avatar: `img/dh/severo5.png`, 
      name: `Severo`,
      text: `愚かな作戦だった。可是事後，戦術を立案した指揮官は姿を消し、すべての損失と責任はFACに押し付けられた。`
    },
    {
      type: `dialogue`,
      position: `left`, 
      avatar: `img/dh/severo5.png`, 
      name: `Severo`,
      text: `こんなこと知ったら、誰だって納得いかないよ。私たちと同じさ。`
    },
    {
      type: `dialogue`,
      position: `left`, 
      avatar: `img/dh/severo5.png`, 
      name: `Severo`,
      text: `私の父はFACの後方支援部で輸送員だった。N.F.83年、基地で、作戦から持ち帰った異物に感染して、死ぬまでそれが何かわからなかった。`
    },
    {
      type: `dialogue`,
      position: `left`, 
      avatar: `img/dh/severo5.png`, 
      name: `Severo`,
      text: `父は狂厄に侵され、混乱の中で検疫も受けず家に帰り、母や妹の前で怪物に変わった…`
    },
    {
      type: `dialogue`,
      position: `left`, 
      avatar: `img/dh/severo5.png`, 
      name: `Severo`,
      text: `お前と同じ、あの夜、私も惨めな生き残りだった。お前の憎しみ、わかるよ。`
    },
    {
      type: `dialogue`,
      position: `left`, 
      avatar: `img/dh/severo5.png`, 
      name: `Severo`,
      text: `この何年も、お前はたくさんのものを犠牲にして、能力者になって、ひとりで憎しみを耐え抜いて上庭の犬になった。それでも、黒幕の端っこにも触れられない。`
    },
    {
      type: `dialogue`,
      position: `left`, 
      avatar: `img/dh/severo5.png`, 
      name: `Severo`,
      text: `お前が歩いてるこの真っ暗で冷たい道、私も同じように歩いてきた。`
    },
    {
      type: `dialogue`,
      position: `left`, 
      avatar: `img/dh/severo5.png`, 
      name: `Severo`,
      text: `私たちの人生は一瞬で崩れ、すべて壊された。正義なんて誰も返してくれない。だから、自分で取り戻すしかない。この世界には、多少なりとも道理があるべきじゃない？`
    },
    {
      type: `narration`, 
      text: `彼女は調査員に手を差し出し、紫のカーネーションを渡す。`
    },
    {
      type: `dialogue`,
      position: `left`, 
      avatar: `img/dh/severo5.png`, 
      name: `Severo`,
      text: `お前の敵じゃない、同類だ。お前にはまだたくさんの同類がいるよ。`
    },
    {
      type: `dialogue`,
      position: `left`, 
      avatar: `img/dh/severo5.png`, 
      name: `Severo`,
      text: `この世には私たちを受け入れてくれる場所がある。理解してくれる人がいる。彼女はお前を導き、過酷な復讐を支えてくれる。お前にその覚悟があれば、私が彼女に会わせてあげる。`
    },
    {
      type: `dialogue`,
      position: `right`, 
      avatar: ``, 
      name: `调查员`,
      text: `お前が言うその人は、お前の雇い主？それともお前たちの組織の首領？`
    },
    {
      type: `dialogue`,
      position: `left`, 
      avatar: `img/dh/severo5.png`, 
      name: `Severo`,
      text: `やっと手に入れた私の新しい家族だよ。`
    },
    {
      type: `narration`, 
      text: `彼女の答えは誠実で、その感情が調査員に伝わったようだ。FACの戦士はしばらく黙り込む。`
    },
    {
      type: `dialogue`,
      position: `right`, 
      avatar: ``, 
      name: `调查员`,
      text: `彼女がお前の復讐を助けてくれるって…`
    },
    {
      type: `dialogue`,
      position: `right`, 
      avatar: ``, 
      name: `调查员`,
      text: `じゃあ、お前が放った汚染や、連れてきた怪物も、彼女がくれた「助け」？それで「復讐」するの？この数日で死んだ普通の人たちが何の罪を犯した？彼らがお前に命を奪われる理由は？`
    },
    {
      type: `narration`, 
      text: `殺し屋は敵意を鋭く感じ取り、目に一瞬の遺憾が閃く。彼女は数本の長い針を手に取り、毒素の効果時間を計算しながら、最後の説得を試みる。`
    },
    {
      type: `dialogue`,
      position: `left`, 
      avatar: `img/dh/severo5.png`, 
      name: `Severo`,
      text: `彼らはみな上庭の人間だ。上庭は決して無垢じゃない、みんなくそくらえの敵だ。一番強く、一番恐ろしい敵。`
    },
    {
      type: `dialogue`,
      position: `left`, 
      avatar: `img/dh/severo5.png`, 
      name: `Severo`,
      text: `お前も彼らを憎んでるよね？`
    },
    {
      type: `dialogue`,
      position: `left`, 
      avatar: `img/dh/severo5.png`, 
      name: `Severo`,
      text: `お前が命がけで能力者になったように、私も彼らに対抗する力が必要だった。手に入れるために戦い、捨てるものもあった。`
    },
    {
      type: `dialogue`,
      position: `left`, 
      avatar: `img/dh/severo5.png`, 
      name: `Severo`,
      text: `復讐はすべてを捧げるもの。お前が一番わかってるよね？今、お前にはそのチャンスがある。私たちが助けてあげるよ。`
    },
    {
      type: `dialogue`,
      position: `right`, 
      avatar: ``, 
      name: `调查员`,
      text: `…もしお前の言うことが本当なら、わかったよ。「私たち」なんていない。ふざけるな、私とお前を一緒にするな。`
    },
    {
      type: `narration`, 
      text: `彼女は体に装着していた異方晶を外し、投げ捨て、両手で大盾を叩きつける。体内の毒素は、より激しい狂厄によって中和され、同化される。`
    },
    {
      type: `dialogue`,
      position: `right`, 
      avatar: ``, 
      name: `调查员`,
      text: `お前…裏のゴロツキのために働いて、狂厄を乱用して無辜の人々を殺し、復讐を口実に悪事を働く。お前は私の仲間なんかじゃない、ただの利用されてるピエロだ。`
    },
    {
      type: `dialogue`,
      position: `left`, 
      avatar: `img/dh/severo5.png`, 
      name: `Severo`,
      text: `…本当に残念だ。本気でお前を家に連れて帰りたかった。`
    },
    {
      type: `narration`, 
      text: `両者の力の差は歴然で、一瞬にしてセヴェロは地面に叩きつけられ、戦闘不能に。続けて大盾が彼女に重くのしかかり、床に押さえつけられて動けなくなる。`
    },
    {
      type: `dialogue`,
      position: `left`, 
      avatar: `img/dh/severo5.png`, 
      name: `Severo`,
      text: `うっ…咳咳、なんて恐ろしい力…こんな力手に入れるために、どんな悪事を働いた？お前の愛するFACは知ってる？`
    },
    {
      type: `dialogue`,
      position: `right`, 
      avatar: ``, 
      name: `调查员`,
      text: `お前の背後にいる奴は誰？「家族」って呼んでるくらいだから、仲いいんだろ？お前を捕まえたら、彼女が自分から現れるかな？`
    },
    {
      type: `dialogue`,
      position: `left`, 
      avatar: `img/dh/severo3.png`, 
      name: `Severo`,
      text: `…何をしようって？`
    },
    {
      type: `narration`, 
      text: `彼女の声が冷たくなる。`
    },
    {
      type: `dialogue`,
      position: `right`, 
      avatar: ``, 
      name: `调查员`,
      text: `上庭に入りたい。上庭はお前たちを欲しがってる。だから、見ず知らずの礼として、お前とお前の背後の奴がちょうどいい。`
    },
    {
      type: `dialogue`,
      position: `left`, 
      avatar: `img/dh/severo5.png`, 
      name: `Severo`,
      text: `…なるほど、お前たちが欲しいのは私だけじゃないってわけね…`
    },
    {
      type: `dialogue`,
      position: `right`, 
      avatar: ``, 
      name: `调查员`,
      text: `さあ、選べ。自分から白状するか、お前の「家族」が助けに来るのを待つか。彼女が復讐者の救世主なら、きっと来るよね？`
    },
    {
      type: `dialogue`,
      position: `left`, 
      avatar: `img/dh/severo5.png`, 
      name: `Severo`,
      text: `ふふふ…そう見ると、お前には悪鬼の才能があるね…正義にこだわるのやめたら？もうFACには向いてないよ。`
    },
    {
      type: `dialogue`,
      position: `right`, 
      avatar: ``, 
      name: `调查员`,
      text: `質問に答えろ！敵に我慢はしない！`
    },
    {
      type: `narration`, 
      text: `大盾が再び強く叩きつけられ、骨が折れる音が聞こえたようだ。セヴェロは痛みにうめきながらも、顔には弱々しくも陶酔した笑みが浮かぶ。今、彼女の目にはもはや優しい誘いはなく、憎悪と殺意だけが宿っている。`
    },
    {
      type: `dialogue`,
      position: `left`, 
      avatar: `img/dh/severo5.png`, 
      name: `Severo`,
      text: `ふふふ、10年も耐えたのに、今さら急いでどうするの？モノはもう渡したよ…あの花箋、見た？読めなかった？`
    },
    {
      type: `dialogue`,
      position: `right`, 
      avatar: ``, 
      name: `调查员`,
      text: `中に何が入ってるか、はっきり言え。暗号ゲームはごめんだ。`
    },
    {
      type: `narration`, 
      text: `調査員は眉をひそめ、力を込めるが、殺し屋の身体は今、水のように柔らかく、すべての暴力がスポンジに吸い込まれるようだ。彼女の顔の笑みはますます深く、不快感を与える。`
    },
    {
      type: `dialogue`,
      position: `left`, 
      avatar: `img/dh/severo5.png`, 
      name: `Severo`,
      text: `簡単だよ。一歩ずつ解いていこう。`
    },
    {
      type: `narration`, 
      text: `此处、366文字を省略。`
    },
    {
      type: `narration`, 
      text: `（OJAJPTTJの字母Oを0に置き換え、残りの字母を携帯の九宮格キーボードに基づいて数字に変換し、最終的に「05257885」を得る）`
    },
    {
      type: `dialogue`,
      position: `right`, 
      avatar: ``, 
      name: `调查员`,
      text: `！`
    },
    {
      type: `dialogue`,
      position: `left`, 
      avatar: `img/dh/severo5.png`, 
      name: `Severo`,
      text: `通信暗号だよ。蝕月作戦期間中、唯一内海の黒環を貫通した情報番号。この番号を通じて、環内のお前たちに命令が下された。発信元は誰も見つけられない上庭だ。`
    },
    {
      type: `narration`, 
      text: `彼女はゆったりと話し、突然地面のほぼ見えない糸を引っ張る。壁の仕掛けが作動し、数本の長い針がシュッと飛び出し、針には怪しい術式が絡まる。調査員は大盾を離さず、腕でその攻撃を硬く受け止める。`
    },
    {
      type: `narration`, 
      text: `今度の針には神経毒素ではなく、もっと邪悪で穢れた何か…まるで生き物のように調査員の身体と意識に潜り込む。彼女の視界は徐々に赤く染まり、敵の声は遠くなる。`
    },
    {
      type: `dialogue`,
      position: `left`, 
      avatar: `img/dh/severo5.png`, 
      name: `Severo`,
      text: `気づいた？この通信の向こう側が、お前がディスを10年探しても見つけられなかった仇だよ。`
    },
    {
      type: `narration`, 
      text: `その悪夢のような数字の羅列が調査員の脳を占領し、体内で沸騰する狂厄を点火する。同時に、決して逃れられなかった狂気の記憶を呼び覚ます。`
    },
    {
      type: `narration`, 
      text: `内海が予定より早く満潮を迎え、この臨時防線じゃ持ちこたえられない！撤退を要請する！撤退しなきゃ！！`
    },
    {
      type: `narration`, 
      text: `05257885：障壁突破、超環観測錨点構築、狂厄ノイズ排除、リンク安定。`
    },
    {
      type: `narration`, 
      text: `05257885：みなさん、こんにちは。蝕月作戦の全作戦要員へ。私は上庭の観察者兼連絡員です。データ収集と戦場分析を終え、決定は――作戦続行。`
    },
    {
      type: `narration`, 
      text: `05257885：目標は一つ、任務完了まで内海の満潮を最大限に食い止めること。私はみなさんの再配置を支援します。環内相対時間で計算すると、残存戦力で約34分間耐えられます。<br>みなさんの精神状態が限界に達していることは理解しています。だから、良い知らせも持ってきました。`
    },
    {
      type: `narration`, 
      text: `05257885：救援部隊はすでに内海の奥深くに進んでいます。あと少し持ちこたえてください。満潮を食い止め、ウィンドウピリオドを44分まで延ばせば、彼らは臨時堤防に到着します。<br>気合を入れ直してください。みなさんがいる場所は、意志だけで現実を覆せる領域です。そして、みなさんはこの城邦で最も堅く、最も勇敢な人々です。`
    },
    {
      type: `narration`, 
      text: `05257885：あなたたちならできる。`
    },
    {
      type: `dialogue`,
      position: `right`, 
      avatar: ``, 
      name: `调查员`,
      text: `…嘘だろ…3時間も耐えたのに、救援なんて来なかった…俺たちを騙して死なせただけじゃないか…`
    },
    {
      type: `narration`, 
      text: `05257885：今回の作戦は重大な意義を持ち、FACの皆さんに頼るしかありません。上庭は皆さんに最大の敬意を表します。`
    },
    {
      type: `dialogue`,
      position: `right`, 
      avatar: ``, 
      name: `调查员`,
      text: `お前は彼らを無意味に死なせたんだ！！！！！！`
    },
    {
      type: `dialogue`,
      position: `left`, 
      avatar: `img/dh/severo5.png`, 
      name: `Severo`,
      text: `そんなに興奮して、誰に叫んでるの？`
    },
    {
      type: `narration`, 
      text: `鋭い異物が調査員の鎖骨に突き刺さり、激痛を借りて、調査員はようやく狂乱から抜け出し、必死に目を開けて現実に引き戻される。`
    },
    {
      type: `narration`, 
      text: `だが、セヴェロはすでに大盾の圧制から脱し、笑顔のまま、弱々しくも勝利者の傲慢さを漂わせる。彼女はゆっくりと調査員の身体に突き刺した長い針を回し、毒と汚染をさらに深く敵の体内に送り込む。`
    },
    {
      type: `dialogue`,
      position: `left`, 
      avatar: `img/dh/severo5.png`, 
      name: `Severo`,
      text: `反応大きいね。ずっと追い求めてた仇に会えた？`
    },
    {
      type: `dialogue`,
      position: `right`, 
      avatar: ``, 
      name: `调查员`,
      text: `…その番号、どこで手に入れた？なんでそんなに知ってるんだ？`
    },
    {
      type: `narration`, 
      text: `この番号は調査員が唯一持つその人物に関する手がかりだった。10年覚え、10年探し続け、悪夢の外では二度と見つけられなかった。今、この女がその最も重い秘密を軽々と口にし、しかも「唯一の生き残り」の自分よりもその番号の背後の情報を知っている。`
    },
    {
      type: `dialogue`,
      position: `left`, 
      avatar: `img/dh/severo5.png`, 
      name: `Severo`,
      text: `焦るなよ、今まさに教えてあげようとしてるじゃない。`
    },
    {
      type: `dialogue`,
      position: `left`, 
      avatar: `img/dh/severo5.png`, 
      name: `Severo`,
      text: `私は狂厄を売りさばく奴らと取引して、汚い依頼を受けて、ほんの少しの情報をかき集め、汚れた力を手に入れた。奴らがろくでもないのは知ってる。どうでもいいさ。<br>黒幕に触れられるのは、日の目を見ないクズどもだけだ。奴らなら上庭の偽装を切り裂いて、偉そうな奴らにちょっとした頭痛を与えられる。`
    },
    {
      type: `dialogue`,
      position: `left`, 
      avatar: `img/dh/severo5.png`, 
      name: `Severo`,
      text: `お前や私みたいな普通の人間に、そんなことできると思う？`
    },
    {
      type: `narration`, 
      text: `シュッ！もう一本の針が調査員のもう片方の肩に突き刺さり、毒と狂厄がさらに深く侵食する。狂気がこの怒りに瀕する戦士を苛む。`
    },
    {
      type: `dialogue`,
      position: `left`, 
      avatar: `img/dh/severo5.png`, 
      name: `Severo`,
      text: `私、襲った上庭人の中に無辜な人がいるって知ってるよ。でも、みんなくそくらえで役に立つんだ。`
    },
    {
      type: `narration`, 
      text: `彼女は三本目の針を取り出すが、急いで刺さず、調査員の胸元に移動させ、針の先でゆっくりと心臓を探るように描く。`
    },
    {
      type: `dialogue`,
      position: `left`, 
      avatar: `img/dh/severo5.png`, 
      name: `Severo`,
      text: `上庭の連中はいつも行方を隠してる。外の人間は上庭がどこにあるかもわからない。でも最近、何人かの上庭人が新城に降りてきた。お前も私も知ってるよね、彼らは西区のトラブルを解決しに来たんだ。間違いなく重要な連中だ。`
    },
    {
      type: `dialogue`,
      position: `left`, 
      avatar: `img/dh/severo5.png`, 
      name: `Severo`,
      text: `だからこうやって出会ったんだ。この貴重な突破口を利用して、上庭の情報を探り、上庭に潜り込むために。`
    },
    {
      type: `dialogue`,
      position: `left`, 
      avatar: `img/dh/severo5.png`, 
      name: `Severo`,
      text: `お前は保護任務に無理やり介入して、信頼を得ようとした。よくやってるよ、「正直な」FAC。でも、どんなに頑張っても、あの貴人たちは犬を上庭に連れて帰らない。あの連中の口から情報を引き出すには、こうするしかない――`
    },
    {
      type: `narration`, 
      text: `針の先が少し力を込め、調査員のコートの前を切り裂く。ポケットから花箋が覗く。セヴェロは手を伸ばし、それを取り上げる。`
    },
    {
      type: `dialogue`,
      position: `left`, 
      avatar: `img/dh/severo5.png`, 
      name: `Severo`,
      text: `これは予告状、狩りのリストに載ってる上庭人全員にあらかじめ送ってる。賢い上庭人ならわかるよ、これは脅迫状じゃない――大慈悲で与えた一縷の生還のチャンスだ。<br>謎は難しくない。彼らは私が何を求めてるか知ってる。生き延びたければ教えてくれるよ。明朗会計、情報を渡して命を買い取る。話すと思う？`
    },
    {
      type: `dialogue`,
      position: `right`, 
      avatar: ``, 
      name: `调查员`,
      text: `知らない人間だっている。彼らの周りに無関係な人だっているのに、お前は一緒に――`
    },
    {
      type: `dialogue`,
      position: `left`, 
      avatar: `img/dh/severo5.png`, 
      name: `Severo`,
      text: `そう、一緒に！これこそ必要な犠牲じゃない？彼らは理解してくれるよ。こうやって機会の重さがよりはっきりする。<br>誰かは白状するよ、実際もう白状した奴もいる。これが機会の正しい使い方、本当の復讐だ。私はすべてを捨てて地獄に落ちてもいい。お前はどう？`
    },
    {
      type: `dialogue`,
      position: `left`, 
      avatar: `img/dh/severo5.png`, 
      name: `Severo`,
      text: `10年だよ。この空気を切り裂く力以外、お前は何を成し遂げた？`
    },
    {
      type: `narration`, 
      text: `汚染毒素が調査員の内心の震えと混乱を増幅させ、彼女は大きく息を荒げ、痛みと興奮が入り混じった状態で、ついに笑い出した。`
    },
    {
      type: `dialogue`,
      position: `right`, 
      avatar: ``, 
      name: `调查员`,
      text: `…まだお前がいるじゃないか！お前の口を裂けば、全部手に入る！`
    },
    {
      type: `narration`, 
      text: `狂気的な力がくすぶる炎のように燃え上がり、この瞬間、突然爆発する。調査員は咆哮しながら立ち上がり、自身を貫く長い針を帯びたまま、前に突進し、セヴェロの首を片手で掴むと、力強く壁に叩きつける。`
    },
    {
      type: `narration`, 
      text: `ほぼ同時に、この暴走の力が警報を誘発し、けたたましい警鈴が山荘に響き渡る。誰かが発砲した。`
    },
    {
      type: `dialogue`,
      position: `left`, 
      avatar: `img/dh/security.png`, 
      name: `Safety`,
      text: `能力者！！その女を放せ、すでに制御を失ってるぞ！まだ止まらないのか？！！`
    },
    {
      type: `dialogue`,
      position: `left`, 
      avatar: `img/dh/security.png`, 
      name: `Safety`,
      text: `降伏しないなら撃つぞ！！`
    },
    {
      type: `narration`, 
      text: `狙撃の弾丸が窓を突き破り、調査員のこめかみに向かって飛ぶ。彼女は本能的に身をかわし、敵を縛る力が一瞬緩む。`
    },
    {
      type: `dialogue`,
      position: `left`, 
      avatar: `img/dh/severo5.png`, 
      name: `Severo`,
      text: `ハ…ハハハハ…すごい力だね。もう怪物扱いだよ。この姿で、FACはまだお前を必要としてる？殺されるんじゃない？ハハハ――`
    },
    {
      type: `dialogue`,
      position: `left`, 
      avatar: `img/dh/severo5.png`, 
      name: `Severo`,
      text: `私の仇はもう報いたよ。誰かが私のために恨みを晴らしてくれて、心の空虚も怒りも癒された。今は新しい家族がいて、新しい人生があって、私は救われたんだ。`
    },
    {
      type: `dialogue`,
      position: `left`, 
      avatar: `img/dh/severo5.png`, 
      name: `Severo`,
      text: `本気でお前を家に連れて帰りたかった。でも、何かを失う者が全部家族になれるわけじゃないみたいだ…お前のおかげで、今ある大切な宝物をますます愛おしく感じるよ…`
    },
    {
      type: `dialogue`,
      position: `left`, 
      avatar: `img/dh/severo5.png`, 
      name: `Severo`,
      text: `もう二度と、誰にも私のものを傷つけさせない。あなたも、あなたが私たちを利用して媚を売ろうとしているあいつも、一人たりとも見逃さない。`
    },
    {
      type: `dialogue`,
      position: `left`, 
      avatar: `img/dh/severo5.png`, 
      name: `Severo`,
      text: `かつての私は復讐のためにすべてを捧げた。今は未来を守るため、その倍の力を尽くす。すべてを失ったお前が、どうやって私に勝てるっていうんだ？家を失った野良犬が、目も見えずに吠える以外に何ができる？`
    },
    {
      type: `narration`, 
      text: `調査員は咆哮し、目に見えない狂気の渦を突き破って敵を見つけようとする。だが、さらに多くの弾丸がこの壊れた家に撃ち込まれ、体内で狂厄が荒れ狂う。`
    },
    {
      type: `narration`, 
      text: `セヴェロはすでに連れ去られ、調査員の耳元にはその女の華奢な声だけがまとわりつく。`
    },
    {
      type: `image`,
      src: `img/cg/br_01.jpg`
    },
    {
      type: `dialogue`,
      position: `left`, 
      avatar: `img/dh/severo5.png`, 
      name: `Severo`,
      text: `その執着を抱えたまま、過去に溺れなさい。`
    }
  ]
}