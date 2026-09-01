export default {
  meta: {
    title: `「粛清命令」`,
    bgm: `mp3/bg/终末.mp3`,
    summary: `粛清命令はほぼ確定しており、誰もが選択を迫られている。`
  },
  infoPanel: {
    glossary: [
      {
        term: `クリーンアップ令`,
        desc: `西区撤退と人口整理を目的とした上庭・執行委員会の措置。発動まで残り数十時間。`
      },
      {
        term: `白匣`,
        desc: `汚染を抑えるための特殊な匣。ヘカテーが局長へ届けようとしたもの。`
      },
      {
        term: `クイン・グループ`,
        desc: `ニューシティの企業。砂海に臨時居住区を提供した。`
      }
    ],
    characters: [
      {
        name: `ロヴナ`,
        avatar: `img/dh/rovna.png`,
        note: `難民キャンプの指揮を執る者。`,
        basicStats: `物資・経路・連絡を統括し、残り時間を意識しながら人々を鼓舞する。`,
        profile: `危険度：不明
        出身：不明
        能力：不明`
      },
      {
        name: `ドナルド`,
        avatar: `img/dh/donald.png`,
        note: `執行官。`,
        basicStats: `逃走計画を立案し、黒環へ入って新しい道を探る。`,
        profile: `危険度：不明
        出身：不明
        能力：電撃`
      },
      {
        name: `ヘカテー`,
        avatar: `img/dh/hekate.png`,
        note: `病床の少女。`,
        basicStats: `自責の念に駆られ、局長の手を握りながら弱さを悔やむ。`,
        profile: `危険度：高（汚染残存）
        出身：不明
        能力：不明`
      },
      {
        name: `マティルダ`,
        avatar: `img/dh/matilda.png`,
        note: `カヴェンディッシュ家の執行官。`,
        basicStats: `ニューシティへの避難を提案しつつ、キャンプの人々を任される。`,
        profile: `危険度：不明
        出身：新城
        能力：不明`
      },
      {
        name: `カスロ`,
        avatar: `img/dh/caslo.png`,
        note: `マティルダの副官。`,
        basicStats: `弱者への苛立ちを露わにしつつ、戦う意思のある者を評価する。`,
        profile: `危険度：不明
        出身：不明
        能力：不明`
      }
    ],
    synopsis: `工事中`
  },
  script: [
    {
      type: `narration`,
      text: `クリーンアップ令の情報はすでに広まり、絶望が難民キャンプに広がっていた。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/rovna.png`,
      name: `ロヴナ`,
      text: `各拠点からの情報は私のところに集めて。落ち着いて、準備はしてきた。やるべきことを一つずつ進める。
物資、経路、組織間の連絡、どれも順調。グリーダ、薬は？`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/grieda.png`,
      name: `グリーダ`,
      text: `負傷者が多い。異邦の友人たちが最後の物資を届けてくれた。これ以降は、もう届かないかもしれない。
彼岸にももう一度頼んだ。アンシア看護師長が大量の薬を用意してくれたし、アイン医師も緊急で義肢手術を何件もやってくれた。二人とも能力を使いすぎた。なんとか持ちこたえてくれればいいんだけど。
それと……ロヴナ、本当に大丈夫なのか？
黒環が今はあんな状態になって、あのリーダーが目を覚ましたとはいえ、枷も元には戻ってない。
少し前にも汚染で倒れたばかりだ。今は難民がどんどん増えて、みんなの状態も不安定になってる。あれだけの仕事が全部お前にのしかかってる。それに——`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/rovna.png`,
      name: `ロヴナ`,
      text: `私は大丈夫。流民寨だって全部取り仕切ってきた。ここだって同じようにできる。
残り46時間しかない。シンジケートにはまだあれだけの人がいる。一刻も早く、もっと多くの人を動員しなければならない。
キャンプの難民の子供たちもチラシの書き写しを手伝ってくれてる。レイヴンが残した詩だ。彼女の言葉ほど人を奮い立たせるものはないだろう？
ストリートチルドレンたちももう動いてる。できることをやる。救えるだけ救う。`
    },
    {
      type: `narration`,
      text: `彼女は心配そうなグリーダに微笑みかけ、負傷者区域へ向かっていった。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/sanji.png`,
      name: `サンジ`,
      text: `……ドナルド……ヘカテー……`
    },
    {
      type: `narration`,
      text: `彼はかろうじて目を開き、周囲を見回した。そこに見えたのは、温かく見慣れた、それでいて近づくことを躊躇わせる顔だった。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/sanji.png`,
      name: `サンジ`,
      text: `……ロヴナ？
いや……すまない……人違いだ……`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/rovna.png`,
      name: `ロヴナ`,
      text: `あなたが誰なのか、知ってる。
……もう過ぎたことだ。ある程度動けるようになったら、こっちへ来て手伝って。人手が足りない。`
    },
    {
      type: `narration`,
      text: `しばしの沈黙の後、サンジは一枚の紙を取り出した。砂海のいくつかの地点がおおよそ記されている。簡潔だが、分かりやすい。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/sanji.png`,
      name: `サンジ`,
      text: `……ニューシティのクイン・グループが、砂海にいくつかの臨時居住区を提供してくれた。みんな、そこで一時的に身を隠せる。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/rovna.png`,
      name: `ロヴナ`,
      text: `助かる。ありがとう。組織の手配は私に任せて。
それから。ヘカテーは無事に戻ってきた。あなたのおかげで。だから、もう私に謝らなくていい。
私は……そんな資格はない。`
    },
    {
      type: `narration`,
      text: `彼女は最後の言葉を静かに告げると、背を向けて立ち去った。
一般人はもう地上で長く持ちこたえられない。汚染があまりにもひどく、避難に間に合わなかった者たちはすぐに感染し、死役と化していった。ストリートチルドレンたちも街中を回ることを諦め、限られた場所でチラシを配るしかなかった。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/ika.png`,
      name: `イカ`,
      text: `……大丈夫。救えるだけ救えばいい。写真も撮ろう。それも全部ネットに上げる。
ニューシティの誰かが見てる。誰かが——`
    },
    {
      type: `narration`,
      text: `一人の男がイカの手からチラシをひったくった。`
    },
    {
      type: `dialogue`,
      position: `left`,
      name: `気落ちした難民`,
      text: `やめとけ。執行官がネットを遮断した。どこに流すつもりだ？仮に投稿できたとして、お前が言う良心的なニューシティの連中は、声を上げる以外に何ができる？
ガキの集まりに何ができると思ってるんだ？俺がお前をここで殴ったって、どれだけ不公平なことになる？誰かが出てきて止めてくれるのか？
逃げろ。お前に残ってるのは、その二本の足で逃げることくらいだ。さっさとついて出ていけ。見てるだけでイライラする。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/ika.png`,
      name: `イカ`,
      text: `行かない！みんなを送り出したら、僕はここに残る！パパとママを置いて逃げるなんて嫌だ！`
    },
    {
      type: `dialogue`,
      position: `left`,
      name: `気落ちした難民`,
      text: `お前の両親はもう死んだ！こんなくだらない詩を書いた奴ももう死んでる！あんな奴の書いたものを信じるのは、お前みたいな馬鹿だけだ！！
ただのガキだろ。自分に何ができると思ってる？毎日そんなくだらない詩を抱えてれば世界を変えられるのか？そんな詩でクリーンアップ令を防げるのか！？`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/kohi.png`,
      name: `コヒ`,
      text: `……`
    },
    {
      type: `narration`,
      text: `ガン——！`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/hero.png`,
      name: `ヘロ`,
      text: `お邪魔する。お前たちを外へ送り出す車列のメンバーだ。そこのガキ。
死にたくない奴、逃げたい奴は、荷物と家族の人数を確認して、頭を切り替えろ。並んで、こっちで登録しろ。`
    },
    {
      type: `dialogue`,
      position: `left`,
      name: `気落ちした難民`,
      text: `はは……あのゾーヤがいなくなって、今度はこんなチビを救援に寄越したのか？`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/hero.png`,
      name: `ヘロ`,
      text: `はいはい、こっちは忙しいんだ。来ないならそこで道を塞ぐな。
声だけはでかいな。子供相手に怒鳴り散らすくらいなら、その汚い口を洗って、こっちに来て何人か呼び込むのを手伝え。
前に俺に何て言ったか、覚えてるか？`
    },
    {
      type: `dialogue`,
      position: `left`,
      name: `気落ちした難民`,
      text: `チッ……`
    },
    {
      type: `narration`,
      text: `男は痛いところを突かれたように舌打ちし、口を閉ざした。イカの鞄をひっつかむと、その場を離れていった。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/kohi.png`,
      name: `コヒ`,
      text: `……お前、あの軍団のチビか？`
    },
    {
      type: `narration`,
      text: `ヘロは以前より少し背が伸びていたが、何も言い返さず、少し離れたところにいるイカへ目を向けた。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/hero.png`,
      name: `ヘロ`,
      text: `あのガキ、あんなこと言われて目まで赤くしてるぞ。助けてやらないのか？あいつ、お前の手下じゃないのか？`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/kohi.png`,
      name: `コヒ`,
      text: `助けるって何を？あの男の言ってることは間違ってない。何句かの青臭い詩を見ただけで、世界平和を信じられるほど俺はおめでたくない。
それに、ストリートチルドレンは俺の手下じゃない。俺もあいつらと同じ、帰る場所のないガキだ。
お前は？シンジケートでお前たちを見るのも久しぶりだ。軍団は解散したのか？`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/hero.png`,
      name: `ヘロ`,
      text: `まさか。軍団長なら、今ここに立ってるだろ。
第九機関が俺たちを外へ送り出してくれた。それで、ついでに外で少し道を探してた。車列は俺たちの本業だからな。
その後、ある男の執行官が俺に衛星都市を先に落としておけと言ってきた。以前貯めておいた異方晶も、しばらくは持つ。お前たちが方法を見つけるまで、ここに留まっていられる。
みんな、お前たちを連れ出す役は俺に任せると言ってる。`
    },
    {
      type: `narration`,
      text: `コヒは、ヘロも枷に汚染されていることに気づいた。それでも彼女は平然としていた。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/kohi.png`,
      name: `コヒ`,
      text: `そうか。確かにお前なら適任だ。あのガキたちは任せる。俺にはまだやることがある。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/hero.png`,
      name: `ヘロ`,
      text: `お前は？`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/kohi.png`,
      name: `コヒ`,
      text: `……言っただろ。あんな能天気な戯言は信じてない。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/hero.png`,
      name: `ヘロ`,
      text: `お前、あの気落ちしたおっさんのこと、よく分かってるじゃないか。ちなみに、あいつさっき俺のところに来たぞ。自分は狂厄に感染して、長くは生きられないし、もう行く気もないって。
車の席を他の奴に譲りたいんだと。特に、これから先が長いガキたちにな。だから早くお前たちを連れ出して、ここで死なせるなってさ。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/kohi.png`,
      name: `コヒ`,
      text: `……`
    },
    {
      type: `narration`,
      text: `コヒは何も答えず、その場を離れていった。`
    },
    {
      type: `narration`,
      text: `（……）
マティルダ嬢、何があっても戻ってきてもらいます。これはあなたの叔母上の決定です。
カヴェンディッシュ家の人間が黒環の下で死ぬなど、あってはなりません。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/matilda.png`,
      name: `マティルダ`,
      text: `……`
    },
    {
      type: `narration`,
      text: `マティルダは、傍らで不機嫌そうな顔をしているカスロを見た。上庭との戦闘以来、彼女はずっと機嫌が悪かった。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/matilda.png`,
      name: `マティルダ`,
      text: `カスロ、準備は整った。ニューシティへ行っていい。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/caslo.png`,
      name: `カスロ`,
      text: `ニューシティに何しに行く？`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/matilda.png`,
      name: `マティルダ`,
      text: `ずっと私にニューシティへ連れていけと言っていたでしょう？準備は整った。避難できる。`
    },
    {
      type: `narration`,
      text: `カスロは少し考え、ようやく意味を理解すると、鼻で笑った。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/caslo.png`,
      name: `カスロ`,
      text: `ふん、私が死ぬのが怖くて行きたがってると思ってるの？あんな役立たずどもと一緒にしないで。`
    },
    {
      type: `narration`,
      text: `彼女はひどく苛立っていた。以前とはまるで別人だった。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/caslo.png`,
      name: `カスロ`,
      text: `私は、このおどおどして、びくびくしてる腰抜けばかりなのが嫌だからここにいたくないだけ。
錆火の連中は頭が一つ覚えで、枷を寄越せと必死に頼んでるけど、少なくとも口だけじゃない。本当に戦えるし、戦おうともしてる。
今いるこの臆病者どもとは違う。見てるだけでイライラする。`
    },
    {
      type: `narration`,
      text: `彼女は難民キャンプで身を寄せ合い、震えている人々を見た。まるで群れになって固まっていなければ、生きることすらできないかのようだった。
カスロは以前、こうした弱者には一度も目を向けなかった。だが今は、なぜか落ち着かなかった。すすり泣きや嗚咽が、彼女をひどく苛立たせていた。
マティルダは時間を確認した。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/matilda.png`,
      name: `マティルダ`,
      text: `残り46時間……
封鎖戦線は深刻な損壊を受け、BR-002は加速度的に膨張している。FACはまだ最後の努力を続け、黒環を必死に抑えてクリーンアップ令の発動を回避しようとしている。だが、遅くとも40時間後には、彼らも西区から撤退しなければならない。
第九機関と上庭直属部隊はすでに黒環へ向かった。目的は福音地でしょうね。今回は何もかもかなぐり捨てるつもりらしい。もしかすると、強行して黒環へ侵入する可能性もある。
残された執行委員会が、おそらくクリーンアップ令の実質的な執行者になる。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/donald.png`,
      name: `ドナルド`,
      text: `あの局長は？`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/matilda.png`,
      name: `マティルダ`,
      text: `ヘカテーとハクサを看ている。黒環が爆発した瞬間、二人とも大きな負担を負った。
意識を取り戻したとはいえ、枷はBR-002の汚染から抜け出せていない。局長本人も決して楽な状態ではない。
それに……`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/chief.png`,
      name: `局長`,
      text: `私は錆火の一員ではない。あなたたちのリーダーでもない。誰かを救うことなんてできない。
すまない。少し一人にしてほしい。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/matilda.png`,
      name: `マティルダ`,
      text: `ロヴナは、局長は親切で穏やかな人だと言っていた。だが今の彼には、強い隔絶感がある。不安を覚えるほどに。
ここ数ヶ月、あの局長の精神はずっと狂厄に侵されていた。今、目を覚ました彼は……本当に以前と同じ人間なのだろうか？`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/donald.png`,
      name: `ドナルド`,
      text: `……今、あいつはハクサとヘカテーのそばにいるんだろ？なら問題ない。きっと元のあいつだ。
黒環はもう爆発した。もともと返してもらうつもりだった借りも、もう必要ない。少し休ませてやろう。`
    },
    {
      type: `dialogue`,
      position: `left`,
      name: `黒環の化身`,
      text: `もう遅い。環はすでにあまりにも多くの力を吸収した。白匣でも封じきれない。西区のすべてが、あれに力を与えている。今度こそ、上庭も福音地もあれには勝てない。局長にも勝てない。お前も同じだ……
お前はいつもそうだ。来るのが遅すぎる。もう間に合わない。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/donald.png`,
      name: `ドナルド`,
      text: `結局、また一歩遅れたのは俺か。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/matilda.png`,
      name: `マティルダ`,
      text: `……`
    },
    {
      type: `narration`,
      text: `副官が何か言おうとしたが、ドナルドは自分から立ち上がり、伸びをした。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/donald.png`,
      name: `ドナルド`,
      text: `じゃあ、逃走計画を始めよう！幸い、俺たちはとっくに準備してある。
今回はFACの兄貴とも繋ぎがついた。あいつが抜け道を作って、人を逃がしてくれる。それに、みんなの安全を守る方法も考えてくれるそうだ。
何はともあれ、局長も戻ってきた。たとえ何もしなくても、士気は上がるだろう。レイヴンを見習って、あいつの名前を借りて宣伝文句でも書いて、少し煽ってみるか。
それから、お前だ。ニューシティの目、マティルダ・カヴェンディッシュ。一、二年の間に情勢がどう変わるか分からない。もしかしたら、お前が運命を変える政界の新星になるかもしれない。
46時間もあるんだ。俺は細かい仕事は苦手だから、外に出て新しい道がないか探してみる。ここの人たちはお前に任せる。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/matilda.png`,
      name: `マティルダ`,
      text: `もちろん。私にできる限りのことをする。`
    },
    {
      type: `narration`,
      text: `ヘカテーは病床に横たわり、局長が傍らでそっと彼女の手を握っている。`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/hekate.png`,
      name: `ヘカテー`,
      text: `……そうなんだ……枷はまだ戻ってなくて、ハクサも目を覚まさなくて……局長はまだ、あんなに頑張ってる……
私がちゃんとできなかったから？
あんなに大勢の人が苦労して手に入れてくれた白匣を、私に託してくれたのに、私は局長のところへ届けることができなかった。
途中で何度も転んで、どこへ行けばいいのかも分からなくて、時間を無駄にして……
知らない人たちに出会って、押し退けることもできなくて、悪夢まで残して、戦う力も失って……
場所を間違えて、この基地まで戻ってきた……情報が足りなかったから。それに……どうすればいいのか分からなくて、無意識に誰かに助けてもらおうとして……
ごめんなさい、局長。もし私にもっと力があって、もっと強ければ、失敗なんてしなかった。局長もハクサも、完全に元気になれた。
ハクサがこんなことになったのも、私のせい……
……ごめんなさい。私は、弱すぎる……`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/chief.png`,
      name: `局長`,
      text: `……弱いことを謝る必要はない、ヘカテー。`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/chief.png`,
      name: `局長`,
      text: `そうでなければ、枷を壊してしまった私こそ、みんなに一番申し訳が立たない人間になる。謝るべきなのは私だ。`
    },
    {
      type: `narration`,
      text: `あなたは彼女の手をそっと握る。ヘカテーの身体にはまだ汚染の痕跡が残っている。枷は今も彼女に負担を与え続けている。`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/chief.png`,
      name: `局長`,
      text: `すまない。私がもっと強ければ、君たちを守れた。でも、私も諦めるつもりはない。特に、君たちを傷つけた奴らのことは。
必ず枷を取り戻す。その前に……君にも一つ、頼みたいことがある。`
    },
    {
      type: `narration`,
      text: `2時間後、身支度を整え、ドナルドは一人で高塔へ向かった。`
    },
    {
      type: `dialogue`,
      position: `left`,
      name: `警報`,
      text: `クリーンアップ令発動まで残り43時間。全員撤退、全員撤退——`,
      note: `電子音`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/donald.png`,
      name: `ドナルド`,
      text: `……よし、気合を入れろ。新しい道を探しに行くか。`
    },
    {
      type: `narration`,
      text: `彼は黒環の中へ入っていった。`
    },
    {
      type: `narration`,
      text: `（……）
ドナルドは次第に朦朧とした幻境へ沈んでいく。`
    },
    {
      type: `dialogue`,
      position: `left`,
      name: `錆火の亡霊`,
      text: `リーダー、俺たちはみんなお前に賭けてる。
前にお前は涅槃の連中の顔を思いっきり潰して、里湾の労働者の力を証明した。俺たちにはまだ力がある。そうだろ？
あいつらと話し合えるだけの資本がある。そうだろ？`
    },
    {
      type: `dialogue`,
      position: `left`,
      name: `錆火の亡霊`,
      text: `……お前は最強だ。俺たちを連れ出してくれ……
助けてくれ……死にたくない。俺にはまだ家族がいる。頼む……
お前がいれば、全部大丈夫だって言ったじゃないか……
英雄……リーダー…………`
    },
    {
      type: `dialogue`,
      position: `left`,
      name: `里湾労働者（A）`,
      text: `うわ、すげえじゃん。十万ボルトとか出せるのか？ちょっと見せてみろよ？？？黒社会のコンビクトよりずっとヤバそうじゃねえか。`
    },
    {
      type: `dialogue`,
      position: `left`,
      name: `里湾労働者（B）`,
      text: `あの絡んできたチンピラども、全員ぶっ倒したのか？やるじゃねえか！今週の巡回は全部お前に任せるぞ、「英雄」。マルガリータの美人に殴られそうになったら、俺が取りなしてやる。
ははは、お前、あの涅槃の幹部どもの顔見たか？ドナルドの能力を見た瞬間、顔が真っ青になってたぞ！`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/julian.png`,
      name: `ジュリアン`,
      text: `この力があれば、きっと多くのことを変えられる。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/donald.png`,
      name: `ドナルド`,
      text: `これが黒環の幻覚か……久しぶりだな……
はっ、もういい加減にしろ……こんな悪夢、とっくに慣れてる……数年前はお前から抜け出せた。今回だってできる……
俺を騙そうとするな。今回は俺一人しか来てない。もうお前に……もうお前にあいつらを傷つけさせない……絶対に……`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/donald.png`,
      name: `ドナルド`,
      text: `いてっ！`
    },
    {
      type: `narration`,
      text: `彼の頭に一撃が入った。ドナルドは何度か瞬きをして顔を上げる。そこには見慣れた姿があった。`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/chief.png`,
      name: `局長`,
      text: `意識は戻ったか？君はどうも、この黒環の影響を特に受けやすいようだ。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/donald.png`,
      name: `ドナルド`,
      text: `……よう。なんでお前が来た。`
    }
  ]
};