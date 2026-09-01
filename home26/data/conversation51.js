export default {
  meta: {
    title: `高塔`,
    bgm: `mp3/bg/black_ring_tower.mp3`,
    summary: `局長とドナルドはようやくブラックリングに辿り着いた。リング内の様々な装置が絡み合い、上に伸び、壮大な塔を形成した。`
  },
  infoPanel: {
    glossary: [
      {
        term: `黒環`,
        desc: `BR-002を中心に形成された巨大な汚染空間。内部は迷宮状に密集した装置と高塔で構成され、汚染と死役が渦巻く。`
      },
      {
        term: `高塔`,
        desc: `黒環内部にそびえる鋼鉄の塔。外部よりも装置や迷宮が密集し、激しい反響音・咆哮・振動が絶え間なく響く。`
      },
      {
        term: `枷`,
        desc: `局長が持つ特殊な力。現在は骸と強く繋がっており、使用すると激しい苦痛を伴う。汚染の影響下にある。`
      },
      {
        term: `死役`,
        desc: `汚染によって変貌した存在。恐怖と怒りの咆哮を上げながら、何かに引き寄せられるように行動する。`
      },
      {
        term: `ローカル・クリーンアップ令`,
        desc: `上庭が提案する最終手段。ルールを通じてBR-002を直接攻撃・消滅させる計画。局長をアンカーとする場合、本人の生存は保証されない。`
      },
      {
        term: `EDGE-01`,
        desc: `上庭の超環通信チャンネル使用者であり、意思決定者の一人。黒水晶を通じて介入し、局長に選択を迫る。`
      }
    ],
    characters: [
      {
        name: `唐`,
        avatar: `img/dh/tang.png`,
        note: `局長を背負って高塔を上るコンビクト。`,
        basicStats: `かつての錆火初期リーダー。9年間能力を封印し、肉体を鍛え上げた。黒環の影響で時折意識が飛ぶが、局長を守り抜く意志は揺るがない。`,
        profile: `危険度：S級
能力：肉体強化・戦闘技術`
      },
      {
        name: `局長`,
        avatar: `img/dh/director.png`,
        note: `枷を通じて骸と繋がる存在。`,
        basicStats: `黒環の汚染を一身に背負い、現在はほとんど動けない状態。唐に背負われながら高塔を目指す。`,
        profile: `危険度：不明
能力：枷`
      },
      {
        name: `黒水晶`,
        avatar: `img/dh/blackcrystal.png`,
        note: `深度汚染を受けた上庭のエリート。`,
        basicStats: `局長の引き渡しを要求する上庭側の戦士。装甲を自ら引きちぎるなど、異常な行動を見せる。`,
        profile: `所属：上庭
分類：深度汚染個体`
      },
      {
        name: `EDGE-01`,
        avatar: `img/dh/edge01.png`,
        note: `上庭の意思決定者の一人。`,
        basicStats: `超環通信を通じて局長と対話し、BR-002対策としてローカル・クリーンアップ令を提案する。`,
        profile: `分類：電子音声・上庭上層`
      },
      {
        name: `汚染された上庭兵士`,
        avatar: `img/dh/contaminated_soldier.png`,
        note: `黒環に汚染された上庭の兵士。`,
        basicStats: `「枷……」としか言葉を発せず、局長を狙って迫る。`
      },
      {
        name: `汚染された福音地傀儡`,
        avatar: `img/dh/contaminated_puppet.png`,
        note: `黒環に汚染された福音地の傀儡。`,
        basicStats: `「あの人……枷……」と繰り返しながら、上庭兵士と共に行動する。`
      }
    ],
    synopsis: `黒環内部の高塔を、唐が局長を背負って上っていく。下方では上庭と福音地が激戦を繰り広げ、死役の群れが次々と落下してくる。枷が骸と繋がる局長は戦力として使えず、唐は汚染された兵士たちを退けながら進む。深度汚染を受けた上庭エリート・黒水晶が現れ、局長の引き渡しを要求。激戦の末にEDGE-01が介入し、BR-002を消滅させるための「ローカル・クリーンアップ令」と、局長自身の犠牲を巡る選択を提示する。唐は上庭の提案を拒絶し、二人は崩壊する階層から離脱する。`
  },
  script: [
    {
      type: `narration`,
      text: `高塔黒環A-13|13-12・高塔`
    },
    {
      type: `narration`,
      text: `鉄筋死役：
ギィィィ————————`
    },
    {
      type: `narration`,
      text: `黒環内部を上へ。ここでは内部の装置や迷宮が外部よりも密集し、高塔を形成している。
高塔の内部から、激しい反響音、咆哮、振動が絶え間なく響いてくる。下方で何かが戦っている。巨大な死役の群れが次々と塔から分裂するように現れ、そのまま落下していく。
それらは恐怖と怒りの咆哮を上げ、何かに引き寄せられるように、唐と局長の脇を駆け抜けて下へ向かっていく。`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/tang.png`,
      name: `唐`,
      text: `俺たち以外にも、この黒環に誰かいるのか？上庭？福音地？随分派手にやり合ってるな。
前の一戦は福音地が一歩取った。上庭もかなり焦ってるんだろうな。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/director.png`,
      name: `局長`,
      text: `……下にいるのは、そう簡単に相手できる奴じゃない。枷が骸と繋がっている。この環の中にいるものすべてが、あの女を警戒し、恐れ、死力を尽くして、環の主へ近づこうとする彼女を上へ行かせまいとしているのを感じる。`
    },
    {
      type: `narration`,
      text: `その評価に応えるかのように、二人の下方で赤い光が明滅する。続いて塔全体が密かに震え、唸るような振動が鋼鉄と二人の身体を伝って頭蓋へ直接響き渡る。まるで高塔そのものが悲鳴を上げているようだった。
さらに数秒が過ぎると、怪物たちの悲鳴も底部から駆け上がってきた。まるで血腥い暴風が吹き抜けてくるようだった。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/director.png`,
      name: `局長`,
      text: `……こういうことだ。私たちだって、あの人には敵わない。
だが、弱くてよかった。今は誰も私たちに構っている余裕がない。それが、私たちが急いで上へ進む機会にもなる。`
    },
    {
      type: `narration`,
      text: `これだけ長く寝ていても、頭も度胸も鈍っていないらしい。唐は笑い、ようやく口を開いた。`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/tang.png`,
      name: `唐`,
      text: `俺がお前を背負って上ってるんだけどな。
はぁ、あんなにイキって俺と一緒に入ってきたから、どれだけ大した奴かと思ったら、二歩も歩かないうちにもう役立たずか？
ずっと寝てたせいで、筋肉でも萎えたのか？`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/director.png`,
      name: `局長`,
      text: `……背負いきれないなら、下ろしてくれていい。`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/tang.png`,
      name: `唐`,
      text: `冗談だろ！こんなお前くらい、十人背負ったって、まだ踊りながらパルクールできる。全然問題ない。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/director.png`,
      name: `局長`,
      text: `……`
    },
    {
      type: `narration`,
      text: `せっかく冗談を言ったのに、相手はまったく反応しない。あまりにも付き合いが悪い。`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/tang.png`,
      name: `唐`,
      text: `分かってる。枷のせいだろ。
お前が目を覚ましてから、コンビクトたちの状態は前よりずっと良くなったって聞いた。ヘカテーのあれだけ酷かった汚染も、少しずつ抜けてきてる。
なら、黒環が暴走したことで生じた汚染を、全部お前一人で背負ってるんだろ？ご苦労さん。
それに比べれば、お前を背負って少し歩くくらいどうってことない。昔から友達を背負ってあちこち走り回ってたからな。こうしてお前を背負うのも、なんだか懐かしい。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/director.png`,
      name: `局長`,
      text: `……うん。`
    },
    {
      type: `narration`,
      text: `局長は口数が少ない。唐は思わず、少し前に彼女と出会った時のことを思い出した。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/director.png`,
      name: `局長`,
      text: `ここの汚染は流民寨とは関係ない！あなたの言う任務をやめて！執行委員会が何を企んでいるのか、私は知っている！`
    },
    {
      type: `narration`,
      text: `あの頃は、ずいぶん口が達者だった。今みたいに黙り込まれると、何を考えているのか本当に分からない。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/director.png`,
      name: `局長`,
      text: `受骸者を探しに行きたい。
枷が繋がっているから、あの怪物がどこにいるのかは分かる。でも、ここの地形には詳しくない。迷宮みたいになっている。
道が分かるか？`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/tang.png`,
      name: `唐`,
      text: `もちろん。ここは内も外も、でかくなった流民寨みたいなもんだ。あいつの設計なら、どこまで行ったって見分けがつく。
俺もあいつを探したい。たぶん、みんな探してる。でも俺が案内すれば、他の二組より確実に早く着ける。`
    },
    {
      type: `narration`,
      text: `言い終えた途端、死役の群れが這いずるようにこちらへよじ登ってきた。よく見ると、それぞれ妙に特徴がある。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/contaminated_soldier.png`,
      name: `汚染された上庭兵士`,
      text: `#￥%@……@%@￥%&枷……`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/contaminated_puppet.png`,
      name: `汚染された福音地傀儡`,
      text: `#￥%@……@%@￥%&……あの人……枷……`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/tang.png`,
      name: `唐＆局長`,
      text: `……`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/tang.png`,
      name: `唐`,
      text: `……はは、とうとうここまで来たか。
ここまで来ると、仲良くできるらしいな。
どうやらお前を狙って来たみたいだ。戦えるか？`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/director.png`,
      name: `局長`,
      text: `無理。枷がまだあの怪物と繋がっている。使うとかなり苦しい。
お前は戦えるか？`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/tang.png`,
      name: `唐`,
      text: `冗談だろ。こいつら二組とも、外で素手でぶん殴ってきたんだぞ。怖がると思うか？
でも、お前も少しは手伝ってくれよ。
……もし途中で俺が戦いながらまたぼーっとして、おかしくなったら、叩いて起こしてくれ。頼む。`
    },
    {
      type: `narration`,
      text: `（……）`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/tang.png`,
      name: `唐`,
      text: `ふぅ——よしよし、まだまだ現役だ。もう何匹か来たって俺は——`
    },
    {
      type: `narration`,
      text: `いくつかの幻影が震えながら現れた。だが、今度は上庭でも福音地でもない。唐の身体が一瞬強張った。
彼の表情がおかしいことに気づき、あなたは手を伸ばして唐の頭を叩いた。`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/tang.png`,
      name: `唐`,
      text: `——うっ！ん？俺、またぼーっとしてた？`
    },
    {
      type: `narration`,
      text: `あなたは頷いた。`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/tang.png`,
      name: `唐`,
      text: `はは……黒環の影響、やっぱりでかいな。しかも今はお前の枷も使えない。俺たち、まさに傷病兵コンビだ。
でも、お前がいてくれると本当に安心する。ありがとう。
行こう。この二組、来るのが結構早い。俺だけ大きく遅れるのはごめんだ。お前も早くこの件を片付けたいだろ？`
    },
    {
      type: `narration`,
      text: `福音地の枷はなおも前進を続け、その攻撃の一つ一つが高塔と塔上のすべての者を震撼させる。だが唐は明らかに、環の力が徐々に強まっているのを感じていた。高塔も次第に、相手の高強度の攻撃に耐えられるようになっていく。
福音地が黒環を呑み込むのを阻止する必要がある。それは間違いなく壊滅的な結果をもたらす。だが、黒環が強くなることもまた、到底受け入れられるものではない。
それは、西区の人々がますます黒環に巻き込まれ、BR-002の狂厄に感染し、一人、また一人とあの怪物を肥大させる養分になっていることを意味する。どこの戦場であろうと、彼らはその足元に踏みにじられている。
彼は局長の前まで歩いていき、しゃがみ込んだ。もう一度背負っていくつもりだったが、今回は局長が動かなかった。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/director.png`,
      name: `局長`,
      text: `敵は強い。`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/tang.png`,
      name: `唐`,
      text: `まあ、なんとかなる。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/director.png`,
      name: `局長`,
      text: `あなたでは勝てない。`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/tang.png`,
      name: `唐`,
      text: `分かってる。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/director.png`,
      name: `局長`,
      text: `なら、どうして来た？
錆火と同じように、存在しない可能性を追いかけて、自分を追い詰めていくつもりか？
あなたが最初期の錆火のリーダーだったことは知っている。`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/tang.png`,
      name: `唐`,
      text: `……最近、またその話をする奴が増えたな。今の俺、まだそいつらと同じに見えるか？とっくに変わったと思ってたんだけどな。
悪いな。お前がたくさん苦しんできたことも、お前が大切にしてる人たちがたくさん苦しんできたことも分かってる。俺には何も埋め合わせられない。この旅には俺自身の目的もある。
でも、お前は必ず守る。
少なくとも俺は、本気で生きてここから出たいと思ってる。それに約束したんだ。お前をあの少女のところへ送り届けるって。`
    },
    {
      type: `narration`,
      text: `そう言って、彼は立ち上がり、武器を手に取った。
前方に一つの人影が現れた。
深度汚染を受けた上庭のエリート。あなたがまだそれが生き物なのかどうかを見極めようとしている間に、レーザーが放たれ、唐が弾き飛ばした。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/blackcrystal.png`,
      name: `黒水晶`,
      text: `局長、我々と共に戻ってください。上庭はあなたを必要としています。`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/tang.png`,
      name: `唐`,
      text: `嫌なら嫌だってはっきり言えよ、局長さん。俺が守る。`
    },
  ]
};