export default {
  meta: {
    title: `局長・運命`,
    bgm: `mp3/bg/destiny.mp3`,
    summary: `運命の方向はずっと昔に決まっていたのかもしれないが、実際にどこへ行くかは人々の選択によって変わる。数多の人々の選択が絡み合い、運命はそれぞれの結末を迎える。`
  },
  infoPanel: {
    glossary: [
      {
        term: `ルール`,
        desc: `上庭の技術。黒環の化身を抑え込む青い光。尽きかけた中でも三人で押さえ込むために用いられる。`
      },
      {
        term: `白匣`,
        desc: `福音地の隠蔽術式。物語の鍵となった道具の一つ。`
      },
      {
        term: `BR-002`,
        desc: `最大黒環。消滅後、廃墟には巨大な独立型異方晶鉱坑が誕生した。`
      },
      {
        term: `錨`,
        desc: `局長が枷を再定義した感情の絆。多くの人々を繋ぎ止めるもの。`
      }
    ],
    characters: [
      {
        name: `局長`,
        avatar: `img/dh/director.png`,
        note: `運命を人々に託し、帰還する。`,
        basicStats: `「本当の戦いは、シンジケートの人々に託そう」`,
        profile: `能力：枷（錨）`
      },
      {
        name: `唐`,
        avatar: `img/dh/tang.png`,
        note: `新しい友達を連れて追いつく。`,
        basicStats: `「また縁があれば会おう。」`
      },
      {
        name: `于連`,
        avatar: `img/dh/yulian.png`,
        note: `最後の意志で塔を噴き上げ、化身を閉じ込める。`,
        basicStats: `「すべての人に庇護と希望を。それこそが、本当の栄光だ。」`
      },
      {
        name: `X`,
        avatar: `img/dh/x.png`,
        note: `第二黒環から別れを告げる。`,
        basicStats: `「あなたが自由を手にした姿を見られてよかった。それじゃ……幸せに。」`
      },
      {
        name: `ヘカテー`,
        avatar: `img/dh/hecate.png`,
        note: `局長を現実へ引き戻す。`,
        basicStats: `「ヘラは私の友達だから。私が自分で選んだ、最初の友達だから。」`
      },
      {
        name: `ヘラ`,
        avatar: `img/dh/hela.png`,
        note: `強くなるために旅立つ決意をする。`,
        basicStats: `「もっと強くなりたい。私も誰かを守りたい。」`
      },
      {
        name: `ナイチンゲール`,
        avatar: `img/dh/nightingale.png`,
        note: `局長の帰還を迎える。`,
        basicStats: `「お帰りなさい、局長。皆、あなたをずっと待っていました。」`
      },
      {
        name: `002骸`,
        avatar: `img/dh/002.png`,
        note: `消滅寸前に生き延び、内海へ戻る。`,
        basicStats: `「お前たちには俺を殺せない……いつか必ず、俺は……」`
      }
    ],
    synopsis: `局長と唐、于連の意志が共に黒環の化身を追い詰め、最終的に西区の人々に運命を託す。黒環が崩壊する中、Xとの別れ、唐との約束、ヘカテーとヘラの再会、そしてMBCCへの帰還が描かれる。その後、西区の新たな鉱坑、涅槃との交渉、上庭との対話、そして002骸の残響が示され、物語は次章への希望と脅威を残して幕を閉じる。`
  },
  script: [
    {
      type: `narration`,
      text: `高塔黑环A-13|13-18局長・運命`
    },
    {
      type: `narration`,
      text: `[行動前]
（「ルール」、「ルール」消散）
青い枷が次第に弱まり、黒環そのものに引き裂かれた骸も、ついに本来の姿を晒した――巨大で、醜く、禍々しい怪物。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/blackring_avatar.png`,
      name: `骸`,
      text: `卑劣な□□□……お前はあの女の力もないくせに、こんな手を……
俺がこんなもので負けるはずがない。せっかく力を取り戻したんだ……こんなところで……
小賢しい虫けらめ!!俺の上に立つなど、絶対に許さん!!!
うおおおおおお――!!`
    },
    {
      type: `narration`,
      text: `（電光が視界の中心から四方へ広がる）`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/unknown.png`,
      name: `？？`,
      text: `よお、局長。追いついたぜ。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/tang.png`,
      name: `唐`,
      text: `新しい友達も連れてきた。これでだいぶ心強いだろ?
ん?なんだ、ずいぶん顔色が悪いな。`
    },
    {
      type: `narration`,
      text: `（選択肢）見れば分かるだろ?`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/director.png`,
      name: `局長`,
      text: `さっきはずいぶん上手に演技してたな。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/tang.png`,
      name: `唐`,
      text: `はは、人助けのつもりで元気づけてやったんだよ。ほら、結果は上々だろ。
それに俺はかなり正直者だぜ。追いつくと言ったら追いついたし、友達に会わせると言ったら会わせた。
次は……三人で黒環を消滅させるって言ってなかったか?`
    },
    {
      type: `narration`,
      text: `（選択肢）三人で……?
弱り果てた怪物は、それでもなお逃げ出そうともがいている。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/blackring_avatar.png`,
      name: `骸`,
      text: `やめろ……こんなところで終われるか、まだ……あの女を探さなきゃならない、あいつを殺して……復讐を……
あの女ですら俺を殺せなかったんだ、お前ごときにできるはずがない……今の俺はあの時より強い、死ぬはずがない……
そうだ……この身体を捨てればいい……前と同じように、この身体を捨てて、身を隠して、ゆっくり力を蓄えれば……お前たちには見つけられない、誰にも見つけられない……
俺は生きる、生き延びて、また戻ってくる。そして――
!?`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/yulian.png`,
      name: `于連`,
      text: `……`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/blackring_avatar.png`,
      name: `骸`,
      text: `……お前か。まだいたのか、お前……
うあああああ――!!`
    },
    {
      type: `narration`,
      text: `建築師は答えなかった。しかし、この黒環の塔が突然轟音を響かせ、足元が大きく揺れたかと思うと、地面が勢いよくせり上がっていく。
すでに崩れかけていた塔が最後の瞬間に上へと噴き上がり、再び逃げ出そうとした受骸者は、逃げ場のない空中の牢獄に完全に閉じ込められた。`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/director.png`,
      name: `局長`,
      text: `そうだ……上庭のルールはもう尽きている。それでもこの怪物はまだ足掻いている。なら三人で押さえ込む。逃げる隙を与えるな。
それから……`
    },
    {
      type: `narration`,
      text: `（選択肢）本当の戦いは、シンジケートの人々に託そう`
    },
    {
      type: `narration`,
      text: `[行動後]
黒環の光が次第に内へ収束し、炎へと変わっていく。それが受骸者の肉体を焼き、前環主の存在を絶え間なく解離させていく。かつて極限まで膨れ上がった巨体は、次々と裂け、砕け、消えていった。
ある瞬間、ずっと魂を締めつけていた感覚が、突然消えた。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/x.png`,
      name: `X`,
      text: `まさか決定権を完全に他人へ委ねるとは……あなたが人を驚かせるのが好きなのは知っていたけれど、こんな驚き方をさせられるとは思わなかった。
成功率を評価するどころか、集団観測を失った今、この案の不確実性はほとんど無限大だ。
賭けるということ?自ら運命に身を委ね、流される……はあ、私にはとても選べない道だ。`
    },
    {
      type: `narration`,
      text: `（選択肢）私にできることも限られているから`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/director.png`,
      name: `局長`,
      text: `たくさんの人が努力する姿を見た。弱い人たちも退かず、自分にできることを精一杯やっていた。
考えてみれば、黒環の下でこれだけ長く耐え続けてきた。怖くなった人はとっくに去っている。最後まで残り、互いに助け合っている人たちは……きっと一番勇気のある人たちなんだ。
西区がこれからどうなるのか、私にもまだ見えない。だから、彼らなら答えを出してくれると思う。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/x.png`,
      name: `X`,
      text: `……そういうことだったのね。あなたが他人を信じられるのは、もっと大きな世界を見て、もっと多くの本当の「人」を知っているから。あなたは……一人じゃない。
羨ましいな。私もあなたみたいだったら、もっといい方法を考えて、みんなの苦しみを少しでも減らせたかもしれない。ごめんなさい。`
    },
    {
      type: `narration`,
      text: `（選択肢）……そこまで他人を信じられるわけじゃない`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/director.png`,
      name: `局長`,
      text: `最初は、あなたのような「上庭人」を信じたくなかった。あなたが現れた時、黒環全体が騒ぎ始めた。きっと、とんでもないことをしてきた人なんだと思った。
でも、この道中、顔も知らない人たちに何度も守られた。ここには、あなたの言う「みんな」がいるのかもしれない。もしかしたら、あなたも。
あなたはずっと、彼女たちが私をちゃんと守ってくれると信じていたようだった。この日が来るまで。
それに……`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/director.png`,
      name: `局長`,
      text: `一番危険な場所で、ある人が命懸けで私を掴んで、あなたを私の前まで送り届けた。
彼女は何も言わなかった。たぶん、これから先も自分の本当の気持ちを語ることはない。それでも、あの真摯な想いを無視することはできない。あなたをただの道具として扱う人たちとは違って、あなたを心から信じている人もいる。
私を羨ましがる必要なんてないと思う。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/x.png`,
      name: `X`,
      text: `………そう……そういうことだったのね……
みんなもういなくなったと思っていた。誰にだって自分の道があるのに……`
    },
    {
      type: `narration`,
      text: `（白い閃光）
彼女の目に浮かんだ感情が、自然と滲み出ていた。もっと見ていたいと思ったが、黒環が崩壊を始め、意識空間も次第に薄れていく。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/x.png`,
      name: `X`,
      text: `そろそろ時間みたいね。
じゃあ、彼女たちのことを頼むわ。あの子たちは私とは違う。あなたによく似ているし、いずれあなたのもとへ来る。`
    },
    {
      type: `narration`,
      text: `（選択肢）あなたは?あなたは来ないの?`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/x.png`,
      name: `X`,
      text: `私?私は大丈夫。心配しないで。それより、今回のことは忘れてほしい。そのほうがあなたにとって安全だから。
あなたは一番険しい道を選んだ。逃げることも、壊すこともせず、すべてと向き合って、新しい可能性を探そうとしている……これからはもっと目まぐるしくなる。くれぐれも慎重に行動して。
私たちの運命はもう交わって、互いを変えた。後悔することなんて何もない。`
    },
    {
      type: `narration`,
      text: `（選択肢）……なら、まだその時ではないだけだ`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/director.png`,
      name: `局長`,
      text: `また会える。次は、私たちの仲間も一緒に来る。`
    },
    {
      type: `narration`,
      text: `彼女は何かを言おうとしたが、結局そこで止まり、微笑んだ。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/x.png`,
      name: `X`,
      text: `あなたが自由を手にした姿を見られてよかった。それじゃ……幸せに。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/x.png`,
      name: `X`,
      text: `そうだ、もしあなたが間違っていたら。西区の人々が別の道を選んでいたら……あなたはどうする?それでも、すべてに意味があったと思える?
ふふ……ずいぶん面白い顔をするのね。懐かしい顔だわ。
でもよかった。運命はこの道を選んだ。
行って。迎えに来た人がいる。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/tang.png`,
      name: `唐`,
      text: `受け止めたぜ!さっきからぼーっと何を見てたんだ?`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/director.png`,
      name: `局長`,
      text: `……
このシンジケートを見ていた。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/tang.png`,
      name: `唐`,
      text: `ああ……確かに、いい眺めだな。`
    },
    {
      type: `narration`,
      text: `黒環の赤い光が消え、砂塵が煙のようにシンジケート全体を覆っていく。錆色の薄い霧の下で、無数の人々が走り、泣き、笑っている。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/nightingale.png`,
      name: `ナイチンゲール`,
      text: `局長はまだ高塔の上です。急いで探しに行ってください!`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/fac.png`,
      name: `FAC責任者`,
      text: `市民に話を聞きに行く。それから、あの……唐執行官にも!`
    },
    {
      type: `narration`,
      text: `上庭の精鋭は地面に横たわり、崩壊していく黒環を眺めていた。傍らに黒石英の姿はない。彼女は晴れやかに笑った。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/unknown.png`,
      name: `？？`,
      text: `ふふ……ははははは――これでいい……私も……前に進めた……`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/christina.png`,
      name: `クリスティーナ`,
      text: `あっ!負傷者を発見しました。ナイチンゲール副官に伝えてください!!助けが必要な人がいます!
大丈夫ですか。私が……`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/unknown.png`,
      name: `？？`,
      text: `必要ない。`
    },
    {
      type: `narration`,
      text: `戦士は地面に手をついて立ち上がった。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/christina.png`,
      name: `クリスティーナ`,
      text: `この声……あなたは――`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/unknown.png`,
      name: `？？`,
      text: `元気で。`
    },
    {
      type: `narration`,
      text: `彼女は再びヘルメットを締め直す。新たな黒石英が浮かび上がり、彼女は黙って前へ歩き出した。
蓟は泣きじゃくりながら業師の後ろをついて歩き、彼女の服の裾を掴んで、どうしても手を離そうとしない。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/kohi.png`,
      name: `コクリコ`,
      text: `ほら、もう泣かないの。誰が私を傷つけられると思ってるの?ほら、髪の一本も減ってないし、傷跡が一つ増えただけ。大したことじゃない。必ず戻ってくるって言ったでしょう。私がいつ約束を破った?
まったく……そんな顔をされたら、手を離せるわけがないでしょう。置いていけるわけがない……`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/tang.png`,
      name: `唐`,
      text: `本当に、よかったな……いろんな可能性を考えてきた。自分ではかなり前向きで、楽観的で、突拍子もないことまで考えてきたつもりだった。
それでも、シンジケートがこんな結末を勝ち取れるなんて、考えたこともなかった。
ありがとう、局長。`
    },
    {
      type: `narration`,
      text: `（選択肢）私を英雄と呼べ`
    },
    {
      type: `narration`,
      text: `唐は驚いた顔をした。`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/director.png`,
      name: `局長`,
      text: `ここにいる全員が英雄だ。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/tang.png`,
      name: `唐`,
      text: `ぷっ……はははは、お前を上庭の手に戻すのはやっぱり似合わねえな。いっそ――
そう言いながら下をちらりと見て、笑って言った。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/tang.png`,
      name: `唐`,
      text: `残念だな。ちょうど今日はこの鉤索もいまいちで、二人分は支えられない。そうじゃなきゃ今すぐお前を攫っていくところだった。
また今度だ。`
    },
    {
      type: `narration`,
      text: `彼はあなたの鉤索を引き上げた。あなたを支えていた力がなくなり、唐があなたの手を掴む。`
    },
    {
      type: `narration`,
      text: `（選択肢）？？？！手を離さないで!`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/tang.png`,
      name: `唐`,
      text: `そんなに名残惜しいか?でも、誰かに約束したんだ。お前をちゃんと返すって。
次にあいつらが嫌になったら呼べ。俺がこの大恩を返してやる。また縁があれば会おう。
今度は、彼女がお前を迎えに来る。`
    },
    {
      type: `narration`,
      text: `彼が手を離すと、黒環の残留勢場が時空を歪め、あなたが落下する速度が大きく緩んだ。
それは、塔が次第に消えていく姿を見るには十分な時間だった。雲へ届くように伸びた塔の残影の中に、長い階段がぼんやりと見える。
その階段には、ゆっくりと動く人影がいくつもあった……`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/yulian.png`,
      name: `于連`,
      text: `私はずっと弱者だった。
健全な両足も、強大な力も、いつまでも消えない闘志も持っていない。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/yulian.png`,
      name: `于連`,
      text: `でも、私には仲間がいる。理想がある。一度は私を受け入れてくれた故郷がある。
いつか建築師になって、シンジケートを再び栄光へ導きたい。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/yulian.png`,
      name: `于連`,
      text: `――すべての人に庇護と希望を。
それこそが、本当の栄光だ。`
    },
    {
      type: `narration`,
      text: `朦朧とする意識の中で、あなたは建築師が振り返る姿を見た。そして無数の人々が次々とこの階段を上っていく姿を。
ロヴナを見た。唐を見た。コンビクトたちを見た。知っている人も、知らない人も、たくさんの人を見た。そして……
自分自身を。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/hecate.png`,
      name: `ヘカテー`,
      text: `局長――!`
    },
    {
      type: `narration`,
      text: `少女の声があなたを現実へ引き戻し、幻は消えた。ナイトメアが翼を広げてあなたのもとへ飛び、背中ではヘカテーが必死に手を伸ばしている。その瞳にはあまりにも多くの感情が宿り、もう隠そうともせず、ひたむきにあなたを見つめていた。`
    },
    {
      type: `narration`,
      text: `（選択肢）彼女の手を掴む――`
    },
    {
      type: `narration`,
      text: `早朝、シンジケートの街路。まだ夜が明けきらない中、一人の少女がこっそりと抜け出した。
そして、背後から聞こえた声に驚いて飛び上がった。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/unknown.png`,
      name: `？？`,
      text: `どこへ行くの?`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/hela.png`,
      name: `ヘラ`,
      text: `！
ちょ、ちょっと、驚かせないでよヘカテー……
トイレに行くだけだって。なんでついてくるの?`
    },
    {
      type: `narration`,
      text: `彼女は気まずそうに目を逸らした。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/hecate.png`,
      name: `ヘカテー`,
      text: `トイレは東にある。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/hela.png`,
      name: `ヘラ`,
      text: `あはは、そうだっけ。あっ、そういえばあっちに好きな売店があったんだ。ちょっと行って……`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/hecate.png`,
      name: `ヘカテー`,
      text: `暴動の間に全部閉店した。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/hela.png`,
      name: `ヘラ`,
      text: `……うっ、忘れてた。私……`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/hecate.png`,
      name: `ヘカテー`,
      text: `ヘラ、行くの?`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/hela.png`,
      name: `ヘラ`,
      text: `違う!
ただ……ちょっと外の空気を吸いたくて……私も考えなきゃいけないことがいっぱいあるから、少し考えようかなって……`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/hecate.png`,
      name: `ヘカテー`,
      text: `私たちに何も言わずに?まだ局長にも会っていないでしょう。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/hela.png`,
      name: `ヘラ`,
      text: `……嫌。
会ったら、絶対に行けなくなる。嫌……
上に報告したりしないでよ……これは逃げるんじゃない!これからは手紙を書くから。うっ……拼音でもいいから。
MBCCもまあ悪くない。訓練とかもあるし……でも、私が見られるものはまだ少なすぎる。できることも少なすぎる。ずっと誰かに守ってもらって……
つまり、その……私が一人前になったら、堂々と会いに帰ってくるってこと。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/hecate.png`,
      name: `ヘカテー`,
      text: `うん。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/hela.png`,
      name: `ヘラ`,
      text: `……もっと強くなりたい。私も誰かを守りたい。本当に、その人たちを守りたい。
ヘカテーなら、私の言いたいこと分かるでしょう。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/hecate.png`,
      name: `ヘカテー`,
      text: `うん、分かる。`
    },
    {
      type: `narration`,
      text: `ヘカテーは一歩前に出ると、逃げ出そうと毛を逆立てた小さなネズミを抱きしめた。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/hela.png`,
      name: `ヘラ`,
      text: `@#￥#!%!@##￥@#%???!!!!
ちょっと何するの何するの何するの、こんな捕まえ方ある!?離して離して離して、恥ずかしくないの!?誰か見てるって!`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/hecate.png`,
      name: `ヘカテー`,
      text: `誰も見ていない。大丈夫。
分かっている。大切なもののために、ヘラも強くなりたい。全部分かっている。
これはあなたが私に教えてくれたこと。自分を見失いそうになった時、あなたが私の背中を押して、もっとたくさんの人を見せてくれて、局長のもとへ戻してくれた。
だから、ヘラが必要とする時は、私もあなたを支える。頑張って。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/hela.png`,
      name: `ヘラ`,
      text: `じゃあ任務はどうするの?`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/hecate.png`,
      name: `ヘカテー`,
      text: `「ヘラを監視する」任務?大丈夫、もういらない。局長が私たちを助けてくれる。あなたのほうが、そんな任務より大切だから。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/hecate.png`,
      name: `ヘカテー`,
      text: `ヘラは私の友達だから。私が自分で選んだ、最初の友達だから。
時々でいいから、みんなに会いに帰ってきて。あなたがいなくなったら、きっと寂しい。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/hela.png`,
      name: `ヘラ`,
      text: `うっ……
うわああああああ、だから会いたくなかったんだよ!こんなんじゃどうやって行けばいいのさ!バカバカ、ヘカテーの大バカ――!!`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/hela.png`,
      name: `ヘラ`,
      text: `――!?なんであんたまで――!`
    },
    {
      type: `narration`,
      text: `（選択肢）やあ
捕まえた`
    },
    {
      type: `narration`,
      text: `あなたは二人をまとめて抱きしめた。`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/director.png`,
      name: `局長`,
      text: `この世には保釈ってものがあるって知ってるか?
出たら悪い癖は直すこと。私の小遣いを盗むのはいいけど、他人のものに手を出したら、また連れ戻されるからな。
さて、次に会う時には、きっと大きく変わっているんだろう。行く前に、顔を見せて。`
    },
    {
      type: `narration`,
      text: `（選択肢）泣いてるのか?
笑ってみる?`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/hela.png`,
      name: `ヘラ`,
      text: `……うっ……うわあああああああああ見ないで!!二人とも帰ってよ、この大バカ*!!!
私だけが会いに行くんじゃないからね、あんたたちもちゃんと会いに来るんだから、分かった?!`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/nightingale.png`,
      name: `ナイチンゲール`,
      text: `あなたが長く不在にしている間に、管理局ではあまりにも多くのことが起こりました。誰かが業務に介入し、コンビクトたちは多くの苦難を受けました。城邦も、環境も変わり、MBCCも変わらざるを得ませんでした。
それでも、誰もが本来あるべき姿を知っています。彼らは大切なものを慎重に守り、いつの日かすべてを元に戻し、あなたの帰還を迎えられるよう願っていました。
私たちは長い間待ちました。そして、ついにこの日が来ました。
お帰りなさい、局長。皆、あなたをずっと待っていました。`
    },
    {
      type: `narration`,
      text: `（選択肢）ただいま`
    },
    {
      type: `narration`,
      text: `（西風の頌歌）
白匣を提供した者や、福音地の情報をもたらした者について、唐は一言も口にしなかった。
ただ、局長はかつて彼らに会ったことがあり、近いうちにまた会うことになるとだけ言った。
関係者全員への調査が進められる中、MBCCは一人の容疑者を特定した。しかし、ほどなくして手掛かりは途絶えた。
第九機関のシンジケートにおける諜報員「錆」は、事件の中で死亡したと報告された。
ランリー長官はそれ以上の説明をしなかった。しかし、この部下の殉職に対して、彼女は珍しくほとんど悲しみを見せなかった。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/rust.png`,
      name: `「錆」`,
      text: `悪かったな。あいつらが鉢合わせしないよう、できる限り避けていたんだ。まさか白小姐が黒環に残って、最後には俺たち第九機関の手に落ちるとは……
俺の「長官」は、とにかく恐ろしい人なんだ。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/unknown.png`,
      name: `？？`,
      text: `ふふ、向こうがどれだけ恐ろしかろうと、白姓の女はこっちには戻ってこない。あいつにはあいつの居場所がある。
それにMBCCには、あの小さな局長がいる。悪くない行き先だろう。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/zoya.png`,
      name: `ゾーヤ`,
      text: `もう「小さな局長」なんて呼び方は似合わないみたいだな。ずいぶん大きなことをやった。大した奴だ。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/rust.png`,
      name: `「錆」`,
      text: `なんだ、戻って様子を見たいのか?`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/zoya.png`,
      name: `ゾーヤ`,
      text: `また今度だ。シンジケートにはもう暴力の指導者なんて必要ない。あいつらは自分たちの道を歩ける。
それでも、あいつらの邪魔をして利用しようとする連中は……私が片付ける。
お前の諜報員コードを変えろ。002は撃破された。「錆」としての人生も終わった。次の戦場へ行け。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/rust.png`,
      name: `「錆」`,
      text: `そうだな。
西区の黒環は消滅した。なら、俺たちのような環に寄生する「怪物」も、もう長くは居られない。場所を変える時だ。
次の黒環で会おう、局長。
次こそは、本当にお前に会えるといいな。`
    },
    {
      type: `narration`,
      text: `最大黒環BR-002の消滅後、その廃墟にはこれまでで最大規模の独立型異方晶鉱坑が誕生した。
涅槃グループはその所有権を積極的に争ったが、上庭が第二黒環狂厄場域を基盤とする一部技術を停止したため、黒環廃墟の範囲内では超環通信を安定して維持できなくなった。
確実に言えるのは、今後数年間、涅槃グループは新たな鉱坑で無人機械による採掘事業を進められないということだ。
BR-002に眠る大量の異方晶の採掘は、再び人の手に委ねられることになった。そして一時的に失われたこの技術を、かつての錆火の指導者、于連が保管している。
新たな里湾組織は、涅槃と交渉するための切り札を手に入れた。
物流、貿易、そして謎の資金援助を背景に、次回の会議は予定通り開催されることとなった。
驚くべきことに、今回の上庭は涅槃グループの主張を全面的には支持しなかった。
彼らはむしろ、BR-002を攻略した過程とその原理に、より強い関心を示しているようだった。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/lanli.png`,
      name: `ランリー`,
      text: `久しぶりだな。大手柄だったようだ。もう「新人」と呼ぶのは似合わないな。
準備はできたか、局長。これから上庭の老いぼれどもに会いに行く。ずいぶん成長したようだし、まさか緊張しているわけじゃないだろうな?`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/shangting03.png`,
      name: `上庭03`,
      text: `SHP-13体内におけるルールの再発動を確認。安全警戒レベルを引き上げ、接触申請を承認。
協力に感謝する、局長。私は君がBR-002で死ぬものと思っていた。まさか君が上庭の提案を受け入れ、自らルールの制限を受けることに同意するとは思わなかった。
君がこれから人類にもたらす新たな可能性を、期待してもいいのだろうか?`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/shangting02.png`,
      name: `上庭02`,
      text: `FAC、第九機関の異例の動きも、どうやら多少は君に賭けたようだな。君には本当に驚かされた。もっと早く君に会いに行くべきだった……Xが去る前に。
だが幸い、私たちにはまだ時間がある。
早く行け。長い間、君を待っている人がいる。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/shangting01.png`,
      name: `上庭01`,
      text: `環の中で君と話した時から、また会うことになるような気がしていた。
こんにちは、局長、局長。理性に従えば、君の過激な案は否定すべきなのだろう。だが……どうにも興味深い過去を思い出させる。
ならば、結果だけを見よう。
貴重な時間を私たちのために稼いでくれたことに感謝する。これから、話したいことはたくさんある。
そして、まだ吸収されていないあの骸、砕け、弱り果てたBR-002……`
    },
    {
      type: `narration`,
      text: `かつてあなたは、枷のもう一方に何かの気配がかすかに存在するのを感じていた。そして、ある瞬間。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/002.png`,
      name: `002骸`,
      text: `ふっ……ふふふ……俺は生き残った。あの時と同じだ。俺は生き残った……
完全に破壊される直前、奴は塔の中で一人のガキを見つけた。「錆火」と呼ばれるガキを。運がいい。奴にはまた新しいアンカーができた。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/002.png`,
      name: `002骸`,
      text: `お前たちには俺を殺せない……俺は……そんな運命なんか認めない……俺のものを取り戻す。耐えて、また力を取り戻す……次も、その次も、何度でも戻ってくる……お前たちを探しに戻ってくる……
……待っていろ。いつか必ず、俺は……`
    },
    {
      type: `narration`,
      text: `突然、奴は動きを止めた。いつの間にか自分が内海へ戻っていた。すべての始まりであり、最も危険な場所へ。
なぜ戻ってきた?ずっとここを避け続けていたはずなのに。まさか――`
    },
    {
      type: `narration`,
      text: `（白い閃光）`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/002.png`,
      name: `002骸`,
      text: `?!`
    },
    {
      type: `narration`,
      text: `（13章エンディングアニメーション）`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/unknown.png`,
      name: `？？`,
      text: `これは私の可愛い「弟／妹」がわざわざ贈ってくれた再会の贈り物。
あなたにも、きっと私の存在が感じられたでしょう?愛しい局長……`
    }
  ]
};