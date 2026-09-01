export default {
  meta: {
    title: `「強者」`,
    bgm: `mp3/bg/strong.mp3`,
    summary: `強者の強さとは力か心か。この問いの答えは最終的に地に落ちてから分かる。`
  },
  infoPanel: {
    glossary: [
      {
        term: `「規則」`,
        desc: `上庭の人類最先端技術。狂厄の造物を滅ぼすために生まれた青い光の棘。局長が導火線となることで効果を発揮する。`
      },
      {
        term: `白匣`,
        desc: `福音地の隠蔽術式。局長自身を包み隠すことで、「規則」の攻撃を自身に命中させず、黒環の化身にのみ正確に届ける。`
      },
      {
        term: `黒環の化身`,
        desc: `于連の顔をした受骸者。領域を拡大し、辛迪加全域を食糧にしようとする存在。`
      },
      {
        term: `黒石英`,
        desc: `上庭の技術を提供した存在。「規則」の同期率低下を懸念し、局長に中止を求める。`
      }
    ],
    characters: [
      {
        name: `黒環の化身`,
        avatar: `img/dh/blackring_avatar.png`,
        note: `于連の顔をした受骸者。`,
        basicStats: `領域を拡大し、過去のすべてを清算しようとする。局長の策略に翻弄される。`,
        profile: `分類：受骸者・黒環の主`
      },
      {
        name: `局長`,
        avatar: `img/dh/director.png`,
        note: `「規則」と白匣を組み合わせて戦う。`,
        basicStats: `自らを導火線にしながらも無傷で攻撃を命中させ、黒環の運命を人々に委ねる。`
      },
      {
        name: `黒石英`,
        avatar: `img/dh/blackcrystal.png`,
        note: `上庭の技術提供者。`,
        basicStats: `「規則」の精度低下を抗議し、局長に中止を求める。`
      },
      {
        name: `渡鴉`,
        avatar: `img/dh/raven.png`,
        note: `詩と思想で力を取り戻す。`,
        basicStats: `「心に願いが残っている限り、どうして立ち止まっていられる?」`
      },
      {
        name: `科希`,
        avatar: `img/dh/kohi.png`,
        note: `渡鴉の詩に支えられる少女。`,
        basicStats: `ビラから溢れる墨線が身体を支え上げる。`
      },
      {
        name: `白逸`,
        avatar: `img/dh/baiyi.png`,
        note: `解放された女。`,
        basicStats: `蔻蔻に襟首を掴まれ、逃げる隙を失う。`
      },
      {
        name: `赫卡蒂`,
        avatar: `img/dh/hecate.png`,
        note: `海拉を守る。`,
        basicStats: `「私はもう一人じゃない。局長に何かあるはずがない。私は信じている。」`
      },
      {
        name: `海拉`,
        avatar: `img/dh/hela.png`,
        note: `傷が治り、力を取り戻す。`,
        basicStats: `「身体が軽くなった……傷が治っていく……」`
      }
    ],
    synopsis: `局長が黒環の化身と対峙する。弱すぎると嘲る化身に対し、局長は「規則」と白匣を組み合わせ、自らを導火線にしながらも無傷で攻撃を命中させる。上庭の黒石英が抗議する中、局長は「弱者」たちの意志に耳を傾けるべきだと語り、黒環の運命を西区の人々自身に委ねる。各地で渡鴉の詩が力を取り戻し、白逸が解放され、赫卡蒂が海拉を守り、FACが反撃を開始する。局長は沈黙する大多数に、自ら運命を決める時が来たと呼びかける。`
  },
  script: [
    {
      type: `narration`,
      text: `高塔黒環A-13|13-16「強者」`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/blackring_avatar.png`,
      name: `黒環の化身`,
      text: `誰かと思えば、あいつが造った迷宮を破って、真っ先に死にに来たのはお前か……
そうか、お前の枷はまだ残っている。まだズルをする手段くらいにはなるらしい。`
    },
    {
      type: `narration`,
      text: `それが目を上げた瞬間、あなたの体内の狂厄が爆発し、一気に噴き出した。あまりの衝撃に、あなたは膝をつきかける。さらに遠くでは、于連の顔をした受骸者が長椅子に身を預け、あなたを見下ろしている。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/blackring_avatar.png`,
      name: `黒環の化身`,
      text: `弱すぎる。お前みたいなのがいたことすら忘れていた……あの建築家がお前を隠していなければ、とっくに喰っていた。
どうした、何も言わないのか。前は随分と口が回ったじゃないか。「辛迪加はお前みたいな怪物の狩場じゃない」ってな。ふふ、あれだけ大義を振りかざしておいて、今回は随分と静かだ。
一度死んで、少しは賢くなったか?`
    },
    {
      type: `narration`,
      text: `（選项）見物に来た
枷が腹を空かせている。黒環を喰わせに来た
臆病者が隠れていると聞いた`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/director.png`,
      name: `局長`,
      text: `もっと強い奴があなたを探しているのを感じる。あなたも長くはないんじゃない?
見物ついでに勉強させてもらう。枷があんたみたいな怪物をどう始末するのか見てみたい。
／腰から真っ二つにするのがよさそうだけど、試してみる?
／こんな巨大な迷宮を造ってまで枷から逃げるなんて、どんな臆病者なのか気になる。`
    },
    {
      type: `narration`,
      text: `彼は長椅子から立ち上がり、ゆっくりと階段を下りてくる。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/blackring_avatar.png`,
      name: `黒環の化身`,
      text: `何が、お前にそんな口を利く自信を与えた?そのボロボロの枷か?
自分もあの女と同じように、俺を踏みつけ、嘲笑えると思っているのか……自分のほうが上だと、俺が弱者だと思っているのか?
お前ごときが?!`
    },
    {
      type: `narration`,
      text: `無数の錆びた鉄筋が地面から突き出し、あなたへ襲いかかる。「タラン」は弾き飛ばされ、受骸者が片手であなたの首を掴む。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/blackring_avatar.png`,
      name: `黒環の化身`,
      text: `俺の領域は拡大している。辛迪加全域を覆い、ここにいる一人一人の人間、一つ一つの魂が俺の食糧だ。俺はもう自分の力を取り戻した。
これからは深い穴も俺を閉じ込められない。高塔も俺を閉じ込められない。俺はもっと遠くへ行き、もっと多くを手に入れる。
その前に、過去のすべてを清算しなければならない。お前から来たのなら、まずお前から死ね!`
    },
    {
      type: `narration`,
      text: `——?!
（「規則」）
突然、青い光の棘がその腕と身体を貫いた。そこで初めて、あなたの傍らに黒い小さな三角形が浮かんでいることに気づく。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/blackring_avatar.png`,
      name: `黒環の化身`,
      text: `……なんだ、これ?枷?違う……これは――`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/director.png`,
      name: `局長`,
      text: `上庭の人類最先端技術。どうやら、あなたや私のような狂厄の造物にはよく効くらしい。
これを使ってあなたを殺せという任務を受けた。よかった。どうやら本当に効果があるらしい。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/blackring_avatar.png`,
      name: `黒環の化身`,
      text: `効果がある……ふん、試してみろ。`
    },
    {
      type: `narration`,
      text: `（「規則」消散）
青い光の棘が錆鉄の炎に焼き尽くされ、受骸者は傲然とあなたたちを見下ろす。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/blackring_avatar.png`,
      name: `黒環の化身`,
      text: `人類最先端技術?ふふ、残念だったな。
黒環は俺の領域だ。お前たちの技術は外から持ち込んだものにすぎない。俺が拒めば、俺には一切触れられない。まして傷つけることなどできない。
もう十分だ。ここまでにしよう。俺はあの女を探しに行かなければならない……`
    },
    {
      type: `narration`,
      text: `（选项）お前がしてきたことは、すべて復讐のためなのか?`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/director.png`,
      name: `局長`,
      text: `一度手放してみればいい。せっかく意識を取り戻して、自分を隠す力まで手に入れたんだから。
黒環の外へ出て、他の骸とは違う運命を歩くこともできる。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/blackring_avatar.png`,
      name: `黒環の化身`,
      text: `……愚か者が。死ね。`
    },
    {
      type: `narration`,
      text: `彼は手を上げ、目の前の蟻を踏み潰そうとする。すると黒石英があなたの前へ浮かび上がる。`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/director.png`,
      name: `局長`,
      text: `残念。
もう機会は与えた。`
    },
    {
      type: `narration`,
      text: `[長押しで枷を解放]
（「規則」）`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/blackring_avatar.png`,
      name: `黒環の化身`,
      text: `これは?!ぐっ!あああ!!`
    },
    {
      type: `narration`,
      text: `枷と共に受骸者へ突き刺さったのは、目を焼くほどの青い光。青い三角形が轟然と展開し、無数の光の棘となってその身体へ突き刺さっていく。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/blackring_avatar.png`,
      name: `黒環の化身`,
      text: `なぜだ。俺を傷つけられるはずがない。これは俺の黒環だ。俺に触れられるはずがない。`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/director.png`,
      name: `局長`,
      text: `さっき説明しただろう。人類最先端技術。こういう狂厄の造物を滅ぼすために生まれたもの。
ここではいろいろと制限されているけど……私がいる。
私とあなたには深い繋がりがある。私が受けた衝撃は、同じようにあなたへ伝わる。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/blackring_avatar.png`,
      name: `黒環の化身`,
      text: `まさか……お前か?自分自身を導火線にして、こいつに俺を殺させるつもりか?
狂っているのか!!
こんなことをすればお前も生き残れない。お前も同じように引き裂かれる!死にたいのか?!`
    },
    {
      type: `narration`,
      text: `（选项）じゃあ、私が死んだか見てみれば?`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/blackring_avatar.png`,
      name: `黒環の化身`,
      text: `……なに?`
    },
    {
      type: `narration`,
      text: `それは俯き、そこで初めてあなたの姿をはっきりと見た。光の棘はあなたの背後から伸び、透明なものを突き抜けるように身体を通り抜け、そのまま受骸者の身体へ突き刺さっている。それでも、あなたには傷一つない。
あなたの前身には淡い術式がまとわりついている。それこそが、上庭の目を欺いて自らを隠すことのできる狂厄術式だった。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/blackring_avatar.png`,
      name: `黒環の化身`,
      text: `これは……あの女のものか?それで攻撃を避け、自分を隠したのか?!`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/director.png`,
      name: `局長`,
      text: `仕方ない。あなたは強すぎる。この白匣ではあなたの力をすべて封じることはできない。でも、この「弱者」である私を包んで隠すくらいなら問題ない。
そのせいで私も動けなくなったけど、これなら上庭の技術は私を傷つけず、あなたにだけ正確に命中する。`
    },
    {
      type: `narration`,
      text: `上庭の技術を提供した者が、不満げに抗議する。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/blackcrystal.png`,
      name: `黒石英`,
      text: `……一体何をしている、局長?福音地の術式の影響で、規則の同期率と精度が急速に低下している。すべての攻撃に誤差が生じている。我々にはこれを消滅させることができない。このために用意したエネルギーも、まもなく尽きる。
こいつは拘束を振り切り、お前を殺す。そうなれば、すべてが無意味になる。
どんな福音地の術式を使っているにせよ、どこから手に入れたにせよ、直ちに中止しろ!
お前は黒環を消滅させ、人類を守るために来たのだろう。今になって死を恐れるのか?ここで退くつもりか?!`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/director.png`,
      name: `局長`,
      text: `何と言った?私の選択を楽しみにしているんじゃなかったのか?なら、そこで見ていればいい。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/blackcrystal.png`,
      name: `黒石英`,
      text: `……いや、お前が規則に適応するための知識を持っているはずがない。規則の上限を推測できるはずもない。
誰が上庭の機密を漏らした?お前がMBCCを離れていた間、一体誰と接触した?!`
    },
    {
      type: `narration`,
      text: `（选项）……それはもう、数え切れないほどいる`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/director.png`,
      name: `局長`,
      text: `あなたたちの理性では、すべての可能性を見ることはできない。`
    },
    {
      type: `narration`,
      text: `第二黒環の狂厄場の中。黒石英には見ることのできない世界で、一人の上庭の女が微笑みながら、この光景を見つめている。
数か月ぶりに見る事態は、すでに彼女の計算を大きく超えていた。それが、彼女にはたまらなく楽しみだった。`
    },
    {
      type: `narration`,
      text: `（选项）最初から死ぬつもりなんてない。退く必要もない`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/director.png`,
      name: `局長`,
      text: `私は無事に帰るために来た。誰かの思い通りになるためじゃない。
でも、ここですべてに決着をつける……私自身の願いのために。
上庭がこいつを消滅させるだけの力を用意したのなら、攻撃を止めないで。抑え続けて、この骸にBR-002を操る余力を与えない。そして、黒環を本当の持ち主のもとへ返す――
こいつは、これほど多くの「弱者」から力を奪った。一人一人の奪われた魂が狂厄を通じてここに繋がっている。黒環が最も強い意志を現実に変えられるのなら――
彼らの声にも、耳を傾けるべきだ。
これは西区の黒環。自分たちの運命を決めるのは、彼ら自身だ。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/blackring_avatar.png`,
      name: `黒環の化身`,
      text: `は……はは……あいつらに決めさせるだと?誰がお前を俺の口元まで送り込んだ?誰がお前を食い尽くし、こんな有様にしたのか、忘れたのか?!
あの蟻ども、烏合の衆……信念もなければ、越えてはならない一線もない。流れに身を任せ、力を得れば横暴に振る舞い、力を失えばダチョウのように何も見ず、麻痺したまま生き延びる。
あの女を殺すためでなければ、あんな蟻どもなど見る価値もない。なのに、あいつらが俺を殺せると言うのか?!
ふざけるな?!`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/director.png`,
      name: `局長`,
      text: `そうだ……西区には650万人いる。そのうち暴力を追い求めるのは20万人余り。残りの人たちは、無理やり沈黙させられ、無視され、忘れられ、消されてきた。彼らの願いを気にかける人なんて、これまで誰もいなかった。
でも幸い、黒環は辛迪加じゃない。誰の力が強いかだけで物事が決まる場所じゃない。
力を追い求めた人たちは、半年前にはお前の狂厄を頼り、黒環に溶け込み、跡形もなく消えた。
逃げたかった者、耐えられなかった者も、とうに執委会の移住に従って去った。
じゃあ、考えてみて。今も西区に残り、地下深くに身を隠してでも生き抜こうとして、お前と真正面から向き合っているのは、どんな人たちだ?
どうやってお前の支配下で半年以上も耐えてきたのか。どうやって生き延びたのか。何を思って生き延びたのか。そして、生きることに何を求めているのか。
知らないだろう。お前は強すぎるから。自分が踏み潰した「蟻」を、一度だって見ることがなかった。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/blackring_avatar.png`,
      name: `黒環の化身`,
      text: `……ああ、お前……まさか……`
    },
    {
      type: `narration`,
      text: `（「規則」）
狂ったように咆哮し、弱い枷の持ち主へ飛びかかろうとする。しかし突然、何本もの青い光の棘が現れ、その身体をその場に完全に縫い止める。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/blackring_avatar.png`,
      name: `黒環の化身`,
      text: `卑怯者め!小細工を弄して、俺を嵌めたな!
お前も俺の力を狙っているのか?俺の力を奪おうとしているのか?!`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/director.png`,
      name: `局長`,
      text: `私はあなたとは違う。辛迪加の「弱肉強食」に染まっていないし、あなたのような歪んだ力も必要ない。
でも、一つだけ証明してほしいことがある――最強の黒環が、ただの人間に破壊できるのかどうか。`
    },
    {
      type: `narration`,
      text: `（选项）一度、賭けてみようか、怪物`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/director.png`,
      name: `局長`,
      text: `私と賭ける勇気はある?`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/blackring_avatar.png`,
      name: `黒環の化身`,
      text: `この野郎!!!!`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/raven.png`,
      name: `渡鴉`,
      text: `狂厄が猛威を振るい、人の心に潜む悪意を現実へと染み出させ、世界をさらに残酷なものへ変えていく。力を持たない者には生きることすら難しく、強者と弱者が唯一平等になれるのは死だけ。
あなたの言う通り。でも、だからこそ私には分からない。
あれほど巨大な天災の中で、ちっぽけな人間がどうやって生き延びるのか。銃すら撃てない科学者が、内海からどうやって出てきて世界を救ったのか。彼らはどこからそんな力を得たのか、私には分からない……
巨大な黒環に覆われ、凄惨な失敗を経験したあと、何千万もの人々から「力」がないと蔑まれた辛迪加の人々は、どうしてこれほど長く耐え続けられたのか?
食べ物はどこから手に入れたのか。どうやって汚染を防いだのか。誰が異方晶を掘ったのか。そのうえ上庭や福音地にも警戒しなければならない……リーダーも希望も失ったはずなのに、あの弱者たちはどうやって生き延びたのか?
不思議で仕方がない……私は彼らが燃え上がるところを一度も見たことがない。彼らの叫びを聞いたこともない。英雄ではない彼らが、いつの間にか私にこれほど多くのインスピレーションをくれていた。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/oak.png`,
      name: `橡木匣`,
      text: `ふふ、私にそんなことを言う必要はない。私が興味があるのは死者の声だけ。あなたの綺麗事はもう聞き飽きた。
意識を取り戻したのなら、さっさと私の死境から出て、愛しい人間の世界を抱きしめに行けばいい。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/raven.png`,
      name: `渡鴉`,
      text: `とっくに行っている。こんなにたくさんの素敵な詩を書き留めたんだ。可愛い生徒たちが、きっとずっと待ち焦がれている。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/refugee.png`,
      name: `丧气难民`,
      text: `目を開けろ!!小僧!!
目を開けろおお、お前の詩が生き返ったぞ!!!`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/kohi.png`,
      name: `科希`,
      text: `……これ……は……`
    },
    {
      type: `narration`,
      text: `彼女が握りしめたビラには、渡鴉の大げさな飾り文字も、尊大な賛美歌もなかった。何もない。
それでも、無数の墨線が空中を舞う紙から溢れ出し、彼女の指の隙間をすり抜け、猛スピードで背後へ飛んでいく。強大な力が突然、落下していた科希の身体を支え上げた。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/ika.png`,
      name: `伊卡`,
      text: `俺も持ってる、見てくれ!渡鴉の動員詩だ。すごくいい。力がある。`
    },
    {
      type: `narration`,
      text: `本人の筆跡じゃない。本人もここにはいない。それなのに、なぜこんなにも懐かしいのか。科希の頭は真っ白になり、背後を振り返る――`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/kohi.png`,
      name: `科希`,
      text: `……レイヴン?`
    },
    {
      type: `narration`,
      text: `（白闪光）`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/kohi.png`,
      name: `科希`,
      text: `……
このクソ烏、こんな登場の仕方、あまりにもセンスがない。`
    },
    {
      type: `narration`,
      text: `渡鴉は大笑いしながら筆を振る。墨が筆先に集まり、彼女の力と詩が再び息を吹き返す。自分自身が書いたものでなければ何だというのか。詩人の思想はとうに生徒たちの手に渡り、より高く、より遠くへ向かっている。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/raven.png`,
      name: `渡鴉`,
      text: `狂厄を讃えよう。最悪の時代を生み出し、同時に最高の時代を成す。暴力だけが答えじゃない。思想もまた、力を生み出せる。ならば――
心に願いが残っている限り、どうして立ち止まっていられる?`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/koko.png`,
      name: `蔻蔻`,
      text: `白逸!!`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/baiyi.png`,
      name: `白逸`,
      text: `ちょっと、勘弁してよ!!`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/che.png`,
      name: `澈`,
      text: `待て、待て、少し落ち着け……周りに何がいるかまだ分からない。焦るな――`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/koko.png`,
      name: `蔻蔻`,
      text: `ゆっくりしてたら、あいつがまた逃げる!!`
    },
    {
      type: `narration`,
      text: `彼女は白逸の身体に刺さった棘を勢いよく叩き折り、襟首を掴んで揺さぶる。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/koko.png`,
      name: `蔻蔻`,
      text: `あれだけ借金こさえて逃げるつもりだったの?鍋食ったのに皿も洗わず逃げるつもりだったの?!
そんな格好してここで何してるの?!!
くだらないことを終えたら、今度は一人でどこへ行くつもり?!!また何も言わずに行くつもりだったの?私のためとか言って?!`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/che.png`,
      name: `澈`,
      text: `しっ――私はもう一回怒られてるんだ。少し我慢してくれ。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/koko.png`,
      name: `蔻蔻`,
      text: `……私に言わなくてもいい。辛迪加で過去の一つや二つない奴なんていない。
私はあなたたちと一緒にいる日々が好き。だから頑張って追いついてきた。あなたたちに出会えたから、私は生きていて面白いと思えた。
もう私のためとか言わないで。もう私を突き放さないで。
聞いてる?!`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/baiyi.png`,
      name: `白逸`,
      text: `……うっ……うう……
もう怒らないで、もう怒らないでくれ。これ以上怒られたら逃げられなくなる。あの局長はどうなってるんだ、なんでお前たちを解放したんだ。腹立つな。
さっきまでは隙を見て逃げようと思ってたのに、二人とも来たら、どうやって超高速で逃げればいいんだよ。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/unknown.png`,
      name: `？？`,
      text: `逃げる?`
    },
    {
      type: `narration`,
      text: `ドン――!`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/lanli.png`,
      name: `ランリー`,
      text: `私の部下たちはこれだけのものを犠牲にしてきた。なら、それに見合う最高の戦利品を勲章として持ち帰る価値がある。パルマ一人の首では足りない。
だから……私と一緒に戻ってもらおうか、白さん。話すことは山ほどある。`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/baiyi.png`,
      name: `白記三人`,
      text: `ヒィ――――`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/rust.png`,
      name: `「錆」`,
      text: `そんなことを言われても、俺たちにできるのは少しでも時間を稼ぐことだけだ。
何しろ、あの最強の人間がどうしても別の場所へ行くと言って聞かない。`
    },
    {
      type: `narration`,
      text: `赫羅がなおも苦戦していると、その背後から強烈な気流が巻き起こり、周囲の敵をまとめて吹き飛ばした。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/hero.png`,
      name: `赫羅`,
      text: `軍団……
いや、これは私の力じゃない……
この力は――!?`
    },
    {
      type: `narration`,
      text: `（卓娅の半黒色のシルエット）`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/hela.png`,
      name: `海拉`,
      text: `……身体が軽くなった……傷が治っていく……何が起きたの、局長?`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/hela.png`,
      name: `海拉`,
      text: `……赫卡蒂?
どうしてここに来たの?!その……あれは……龍――?`
    },
    {
      type: `narration`,
      text: `悪夢の身体が膨張し、その背中から翼が生える。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/hela.png`,
      name: `海拉`,
      text: `……どうしてここにいるの?猪頭はどうしたの。あいつのところへ行くべきじゃないの?
一人で大丈夫なの?`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/hecate.png`,
      name: `赫卡蒂`,
      text: `……もう大丈夫。
私はもう一人じゃない。
局長に何かあるはずがない。私は信じている。だから――
私が海拉を守る。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/fac.png`,
      name: `FAC负责人`,
      text: `……黒環に巨大な変動が発生。死役が一斉に混乱し、狂厄感染者の一部が意識を取り戻している……一体どういうことだ。まさか……あの局長が戻ってきたのか?
構わない、これは好機だ!撤退を中止、FAC全員集合。今のうちに死役を撃破する。規律違反の責任は私が負う。お前たちは可能な限り民間人を守れ!行動開始!!`
    },
    {
      type: `narration`,
      text: `（红闪光+震颤）`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/director.png`,
      name: `局長`,
      text: `さあ、辛迪加の沈黙する大多数よ。
弱者を自称し、無力を理由に、あまりにも長く麻痺してきた。あまりにも長く逃げ続けてきた。
リーダーや英雄や天に、代わりに正義を執行してもらうのを待っていた。
ただ、あの人たちが次々と前へ進むのを見てきた。強者も弱者も、自らを炬火として道を切り拓いていった。
今度はあなたたちの番だ。
誰にでも機会がある。誰もが自分で選ばなければならない。
想像の中の悲劇に沈むのはもうやめて。他者に希望を託すのもやめて、黒環と向き合って。
今度は、自分たちの運命を自分で決める。
私に答えを聞かせて。`
    }
  ]
};