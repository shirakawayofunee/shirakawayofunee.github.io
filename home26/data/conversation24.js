export default {
  meta: {
    title: `「露の世は露の[世]ながらさりながら」`,
    bgm: `mp3/bg/千秋.mp3`,
    summary: `「世が汝らを憎むより先に、必ずや我を憎む。」——《ヨハネによる福音書 15:18-27》
    「これぞ我が骨の骨、我が肉の肉。」——《創世記 2:23》`
  },
  infoPanel: {
    glossary: [
      {
        term: `上庭（悪役）`,
        desc: `人類文明の最高統治機関、その意思決定の中枢は、科学者によって設立された組織「<span>Edge</span>」であり、
    現在は再編を経て7人のメンバーによって構成されている。`
      },
      {
        term: `福音地（悪役）`,
        desc: `工事中`
      },
      {
        term: `GARDEN`,
        desc: `秘密組織工事中`
      },
      {
        term: `9th、銀蜘蛛`,
        desc: `スパイ組織、上庭直属の組織であり、非常に独立した権限を与えられている。規模はさほど大きくないが、FACと同レベルの機関であり、市議会も彼らの意向を無視できない。`
      },
    ],
    characters: [
      {
        name: `（L）`,
        avatar: `img/dh/L244.png`,
        note: `裏社会を陰で牛耳る実力者。「GARDEN」の主`,
        basicStats: `生の流儀：人の世は百年ばかり。過ごすなら骨の髄まで味わい、鮮烈に艶やかに生きるべし。
        人前では（工事中）
内面では子どもへの深い慈愛と責任感を胸に、いかなる逆境にあっても活路を切り開き、決して重圧をかけず、心配させまいと気丈に振る舞う師匠
生い立ち：（工事中）`
      },
      {
        name: `Shalom｜<ruby>執行人<rt>Hush-X</rt></ruby>`,
        avatar: `img/dh/X24.png`,
        note: `上庭の七代目執行人、人前では`,
        basicStats: `Xは福音地の思惑を完全に見抜いている。
        彼らが「隠匿の術式」の突破口やGARDENのアジト情報を彼女にリークしたのは、XとLを共倒れさせるためだ。
        しかし、福音地は全てを道連れにするLの破滅的な覚悟も、Xの底知れなさも。
        Xはこの「贈り物」をあえて受け入れ、その情報とLが生み出す混乱を逆手に取り、より壮大な陰謀を紡ぎ出そうとしている。`
      },
      {
        name: `『Pansy』`,
        avatar: `img/dh/P24.png`,
        note: `敬语系角色
        `,
        basicStats: `完全没体验过战争的Z时代，L在她这个年纪的时候，烦恼的是怎么把自己的肠子塞回去，L衷心地为孩子们体会不到“战争是属于全人类的伤口。”这件事而高兴。
        <br>生い立ち：（工事中）
Lの目には、まるで家出していた子が何か目的を抱えて帰ってきたように映っている。`
      },
      {
        name: `『Garofano』（名前だけ登場）`,
        avatar: `img/dh/S24.png`,
        note: `工事中`
      },
      {
        name: `Siegel`,
        avatar: `img/dh/Siegel.png`,
        note: `「福音地」の司祭であり、「GARDEN」との橋渡しを担う者。`,
        basicStats: `7月
        その死が示すのは、「福音地」による「GARDEN」支配の完全なる終焉。
        福音地の目論見はこうだ。<br>「隠匿の術式」の解法を餌に上庭を誘導し、『ガーデン』のアジトを特定させる。ガーデンにどれほどの死傷者が出ようと構わない。弟子を守るため、LをXとの血で血を洗う死闘へと追い込むことこそが奴らの狙いである。
        `,
      },
      {
        name: `局長（名前だけ登場）`,
        avatar: `img/dh/PC24.png`,
        note: `『弱者』の主人公。今回は名前のみ登場。いずれ顔を見せるための予告となります。`,
        basicStats: `Lが義人や賢者なら、局長は■■です。
        「CP要素」についてですが、ご安心ください。義母攻め×娘婿受けという猟奇的な関係性ではありません。
        実際は、「<span>影のヒーロー×表舞台のヒーロー</span>」です。
        `,
      }
    ],
    synopsis: `工事中`
  },
  script: [
    {
      type: `narration`,
      text: `<N.F.113年8月17日 14:23><br><「GARDEN」アジト>`
    },
    {
      type: `narration`,
      text: `基地に陽の光は届かない、「師匠」は門柱に寄りかかり、静かに目を伏せて何かを考えていた。しばらくして、彼女は目を開け、大げさに伸びをした。`
    },
    {
      type: `dialogue`,
      position: `left`,
      bubbleStyle: "inner-voice-c",
      avatar: `img/dh/leopold.png`,
      name: `「師匠」`,
      text: `うわーっ、今回の仕事は骨が折れたわ。寝すぎて体がバキバキ……`,
      voice: `wav/CN/conversation24/vo_event_11031_49.wav`
    },
    {
      type: `dialogue`,
      position: `left`,
      bubbleStyle: "inner-voice-c",
      avatar: `img/dh/leopold.png`,
      name: `「師匠」`,
      text: `<span>Garofano</span>～お風呂入りたい！今回はバラで、紅茶もバラ、お菓子も――`,
      voice: `wav/CN/conversation24/vo_event_11031_27.wav`
    },
    {
      type: `dialogue`,
      position: `left`,
      bubbleStyle: "inner-voice-c",
      avatar: `img/dh/猫1.png`,
      name: `「師匠」`,
      text: `ああ、忘れてた。あの子はまだ目が覚めてないんだったわね。`,
      voice: `wav/CN/conversation24/vo_event_11031_28.wav`
    },
    {
      type: `dialogue`,
      position: `left`,
      bubbleStyle: "inner-voice-c",
      avatar: `img/dh/猫1.png`,
      name: `「師匠」`,
      text: `まあいいや、堇でもいいよ。気分、ちょっとマシになった？よかったら、ついでにマッサージしてよ。`,
      voice: `wav/CN/conversation24/vo_event_11031_43.wav`
    },
    {
      type: `dialogue`,
      position: `left`,
      bubbleStyle: "inner-voice-c",
      avatar: `img/dh/jin1.png`,
      name: `堇`,
      text: `仰せのままに。`,
      voice: `wav/CN/conversation24/vo_event_11031_11.wav`
    },
    {
      type: `narration`,
      text: `温かい湯が正方形の浴槽に注がれ、鮮やかな真紅のバラの花弁が浮かぶ。「業師」はその中に身を沈め、「Pansy」の奉仕を満足げに享受した。`
    },
    {
      type: `dialogue`,
      position: `left`,
      bubbleStyle: "inner-voice-c",
      avatar: `img/dh/smile0.png`,
      name: `「師匠」`,
      text: `んん……生き返るわ……`,
      voice: `wav/CN/conversation24/vo_event_11031_74.wav`
    },
    {
      type: `dialogue`,
      position: `left`,
      bubbleStyle: "inner-voice-c",
      avatar: `img/dh/regret.png`,
      name: `「師匠」`,
      text: `<span>Garofano</span>はどう？`,
      voice: `wav/CN/conversation24/vo_event_11031_39.wav`
    },
    {
      type: `dialogue`,
      position: `left`,
      bubbleStyle: "inner-voice-c",
      avatar: `img/dh/jin1.png`,
      name: `堇`,
      text: `まだ眠っていますが、体内での汚染生成は止まりました。師匠が能力を使って、彼女の体内から穢れを取り除いてくださったおかげです。`
    },
    {
      type: `dialogue`,
      position: `left`,
      bubbleStyle: "inner-voice-c",
      avatar: `img/dh/jin1.png`,
      name: `堇`,
      text: `何人かの新人が看病していますので、すぐに目覚めるでしょう。`,
      voice: `wav/CN/conversation24/vo_event_11031_2.wav`
    },
    {
      type: `dialogue`,
      position: `left`,
      bubbleStyle: "inner-voice-c",
      avatar: `img/dh/smile0.png`,
      name: `「師匠」`,
      text: `ならいいわ。`,
      voice: `wav/CN/conversation24/vo_event_11031_40.wav`
    },
    {
      type: `dialogue`,
      position: `left`,
      bubbleStyle: "inner-voice-c",
      avatar: `img/dh/leopold.png`,
      name: `「師匠」`,
      text: `『ガーデン』の手引きにもう一条追加ね。雇い主の言いなりになって、得体の知れない力に手を染めるなんて、浅はかな真似はおよしなさい。頼れるのは自分だけ。それが無理なら、素直に<ruby>業師<rt>私</rt></ruby>の元へ助けを求めに戻ってきなさい。`,
      voice: `wav/CN/conversation24/vo_event_11031_9.wav`
    },
    {
      type: `dialogue`,
      position: `left`,
      bubbleStyle: "inner-voice-c",
      avatar: `img/dh/jin1.png`,
      name: `堇`,
      text: `はい。第73条として記録しておきます。`
    },
    {
      type: `dialogue`,
      position: `left`,
      bubbleStyle: "inner-voice-c",
      avatar: `img/dh/jin1.png`,
      name: `堇`,
      text: `アザミは――`,
      voice: `wav/CN/conversation24/vo_event_11031_54.wav`
    },
    {
      type: `dialogue`,
      position: `left`,
      bubbleStyle: "inner-voice-c",
      avatar: `img/dh/impatient.png`,
      name: `「師匠」`,
      text: `自業自得よ。`,
      voice: `wav/CN/conversation24/vo_event_11031_72.wav`
    },
    {
      type: `narration`,
      text: `沈黙。`
    },
    {
      type: `dialogue`,
      position: `left`,
      bubbleStyle: "inner-voice-c",
      avatar: `img/dh/impatient.png`,
      name: `「師匠」`,
      text: `再三にわたる私の禁令を破り、勝手な行動を取り、あんな見え透いた罠にかかるなんて。私が前もって手を打っていなければ、今頃情報は筒抜けだったでしょうね。`,
      voice: `wav/CN/conversation24/vo_event_11031_68.wav`
    },
    {
      type: `dialogue`,
      position: `left`,
      bubbleStyle: "inner-voice-c",
      avatar: `img/dh/impatient.png`,
      name: `「師匠」`,
      text: `助けに行くつもりはないわ。自分の蒔いた種は自分で刈らせなさい。`,
      voice: `wav/CN/conversation24/vo_event_11031_82.wav`
    },
    {
      type: `narration`,
      text: `再び長い沈黙が流れたが、結局「業師」が不承不承といった様子で口を開いた。`
    },
    {
      type: `dialogue`,
      position: `left`,
      bubbleStyle: "inner-voice-c",
      avatar: `img/dh/regret.png`,
      name: `「師匠」`,
      text: `……まあ、あの子は今頃、<span>9th</span>の心理専門家のお手元でしょうね。私から逆暗示の罠を仕掛けておいたから、連中もしばらくは振り回されるはずよ。`,
      voice: `wav/CN/conversation24/vo_event_11031_18.wav`
    },
    {
      type: `dialogue`,
      position: `left`,
      bubbleStyle: "inner-voice-c",
      avatar: `img/dh/regret.png`,
      name: `「師匠」`,
      text: `9thに閉じ込められているなら、外をうろつき回るよりは安全よ。あの銀蜘蛛は執行人のやり方を毛嫌いしてるから、HUSHに引き渡したりはしないでしょう。`,
      voice: `wav/CN/conversation24/vo_event_11031_59.wav`
    },
    {
      type: `dialogue`,
      position: `left`,
      bubbleStyle: "inner-voice-c",
      avatar: `img/dh/regret.png`,
      name: `「師匠」`,
      text: `その後は十中八九、君のあの管理局行きになるわね。あの子にはお似合いよ。大願成就したんだもの、自分が何をしたいのか分かるまで、そこで頭を冷やせばいい。`,
      voice: `wav/CN/conversation24/vo_event_11031_47.wav`
    },
    {
      type: `dialogue`,
      position: `left`,
      bubbleStyle: "inner-voice-c",
      avatar: `img/dh/regret.png`,
      name: `「師匠」`,
      text: `別に、言ってるほどあの子を嫌ってるわけじゃないのよ。新入りだから掟知らずで生意気だけど、一点だけ、あの子は君たちより優れているところがある。`,
      voice: `wav/CN/conversation24/vo_event_11031_32.wav`
    },
    {
      type: `dialogue`,
      position: `left`,
      bubbleStyle: "inner-voice-c",
      avatar: `img/dh/leopold2.png`,
      name: `「師匠」`,
      text: `何をするにも自分のため。他人のために犠牲になろうとか、誰かのためにどうこうしようとか、損な役回りなんて絶対に考えない。その点においては、あの子が一番私に似ているわ。君たちよりよっぽど手がかからない。`,
      voice: `wav/CN/conversation24/vo_event_11031_69.wav`
    },
    {
      type: `dialogue`,
      position: `left`,
      bubbleStyle: "inner-voice-c",
      avatar: `img/dh/jin1.png`,
      name: `堇`,
      text: `彼女が無事なら、それで十分です。`
    },
    {
      type: `narration`,
      text: `また沈黙。`
    },
    {
      type: `dialogue`,
      position: `left`,
      bubbleStyle: "inner-voice-c",
      avatar: `img/dh/jin1.png`,
      name: `堇`,
      text: `師匠、これほど派手に行動されるのは初めてではありませんか？今回はあまりに注目を集めすぎています。大丈夫なのですか？`
    },
    {
      type: `narration`,
      text: `「業師」は笑った。`
    },
    {
      type: `narration`,
      text: `こんな質問をするのはスミレくらいだ。普段はか弱そうに見えて、ここぞという時には直球を投げてくる。`
    },
    {
      type: `narration`,
      text: `彼女は顔を上げ、スミレの顎に手を伸ばして遊ぶように触れた。`
    },
    {
      type: `dialogue`,
      position: `left`,
      bubbleStyle: "inner-voice-c",
      avatar: `img/dh/leopold2.png`,
      name: `「師匠」`,
      text: `巻き添えが怖いなら隠れてなさい。どうせ君たちの出番はないわ。`,
      voice: `wav/CN/conversation24/vo_event_11031_53.wav`
    },
    {
      type: `dialogue`,
      position: `left`,
      bubbleStyle: "inner-voice-c",
      avatar: `img/dh/jin1.png`,
      name: `堇`,
      text: `いいえ。『ガーデン』に入ったあの日から、自分の運命に対する覚悟はできています。それに、師匠が最強です。師匠を打ち破れる者がいるとは到底思えません。`
    },
    {
      type: `dialogue`,
      position: `left`,
      bubbleStyle: "inner-voice-c",
      avatar: `img/dh/jin1.png`,
      name: `堇`,
      text: `ただ、福音地と上庭の争いをあれほど嫌悪し、わざわざ見つかりにくいこの場所を選んだ師匠が、今回その渦中に飛び込んだ。何か深い意味があるのですか？`
    },
    {
      type: `dialogue`,
      position: `left`,
      bubbleStyle: "inner-voice-c",
      avatar: `img/dh/smile0.png`,
      name: `「師匠」`,
      text: `深い意味なんてないわよ。この前までは春の眠気で動きたくなかっただけ。今は夏が来て、花が咲く時期だから手を出したの。`,
      voice: `wav/CN/conversation24/vo_event_11031_48.wav`
    },
    {
      type: `dialogue`,
      position: `left`,
      bubbleStyle: "inner-voice-c",
      avatar: `img/dh/smile0.png`,
      name: `「師匠」`,
      text: `HUSHの連中もいい加減鬱陶しかったし、私の庭にハエがたかるのは我慢ならない。それだけよ。`,
      voice: `wav/CN/conversation24/vo_event_11031_14.wav`
    },
    {
      type: `narration`,
      text: `そう言いながら、彼女は手首を返してスミレの黒髪をすくい上げ、その首筋に腕を回して引き寄せ、視線を絡ませた。`
    },
    {
      type: `dialogue`,
      position: `left`,
      bubbleStyle: "inner-voice-c",
      avatar: `img/dh/regret.png`,
      name: `「師匠」`,
      text: `そういう君こそ、なぜそんなことを聞くの？普段はそんなことに関心もないし、ずっと組織を出たがっていたくせに。君が自分から私を訪ねてきたのはこれが初めてよ。`,
      voice: `wav/CN/conversation24/vo_event_11031_45.wav`
    },
    {
      type: `dialogue`,
      position: `left`,
      bubbleStyle: "inner-voice-c",

      avatar: `img/dh/regret.png`,
      name: `「師匠」`,
      text: `そして、『ガーデン』で私を訪ねてくる人間の目的は一つだけ――`,
      voice: `wav/CN/conversation24/vo_event_11031_45.wav`,
      /* bgm: `mp3/bg/-.mp3`, */
    },
    {
      type: `dialogue`,
      position: `left`,
      bubbleStyle: "inner-voice-c",
      avatar: `img/dh/leopold2.png`,
      name: `「師匠」`,
      text: `君の<span>復讐</span>は順調？自分を殺すほど優しい、あの局長のための復讐劇は？私の手助けが必要？`,
      voice: `wav/CN/conversation24/vo_event_11031_15.wav`
    },
    {
      type: `narration`,
      text: `唐突な話題の転換に、スミレの手が止まる。`
    },
    {
      type: `dialogue`,
      position: `left`,
      bubbleStyle: "inner-voice-c",
      avatar: `img/dh/leopold2.png`,
      name: `「師匠」`,
      text: `戻ってきたのはそのためでしょう？あの人に手を出した連中を、君が見逃すはずがない。`,
      voice: `wav/CN/conversation24/vo_event_11031_55.wav`
    },
    {
      type: `dialogue`,
      position: `left`,
      bubbleStyle: "inner-voice-c",
      avatar: `img/dh/leopold2.png`,
      name: `「師匠」`,
      text: `西区に行って誰を殺したの？錆火、執行委員会……他には誰？涅槃の重役たちに手を下す機会はあった？`,
      voice: `wav/CN/conversation24/vo_event_11031_1.wav`
    },
    {
      type: `dialogue`,
      position: `left`,
      bubbleStyle: "inner-voice-c",
      avatar: `img/dh/jin1.png`,
      name: `堇`,
      text: `……はい。最近の師匠のご活躍のおかげで注意が逸れ、彼らに近づく好機を得ました。師匠の行動の妨げにならぬよう、隠密に処理しました。『ガーデン』の手によるものだとは誰にも気づかれません。`
    },
    {
      type: `dialogue`,
      position: `left`,
      bubbleStyle: "inner-voice-c",
      avatar: `img/dh/leopold2.png`,
      name: `「師匠」`,
      text: `ハッ、お見事。外には噂一つ流れてないわね。さすがは私の自慢の教え子。`,
      voice: `wav/CN/conversation24/vo_event_11031_8.wav`
    },
    {
      type: `dialogue`,
      position: `left`,
      bubbleStyle: "inner-voice-c",
      avatar: `img/dh/smile0.png`,
      name: `「師匠」`,
      text: `で、気が済んだ？スカッとした？あれだけ復讐したんだから、少しは嬉しくなったでしょう。笑ってみせなさいよ。`,
      voice: `wav/CN/conversation24/vo_event_11031_51.wav`
    },
    {
      type: `dialogue`,
      position: `left`,
      bubbleStyle: "inner-voice-c",
      avatar: `img/dh/regret.png`,
      name: `「師匠」`,
      text: `君が笑うところ、ずいぶん見てないわ。仏頂面をされてると私の気分まで滅入るの。`,
      voice: `wav/CN/conversation24/vo_event_11031_44.wav`
    },
    {
      type: `dialogue`,
      position: `left`,
      bubbleStyle: "inner-voice-c",
      avatar: `img/dh/jin1.png`,
      name: `堇`,
      text: `……数多くのギャング、執行官、そして涅槃の偽善者どもを始末しました。仇敵をこの手で葬ったはずなのに……復讐の実感が何一つ湧かないのです。`
    },
    {
      type: `dialogue`,
      position: `left`,
      bubbleStyle: "inner-voice-c",
      avatar: `img/dh/jin1.png`,
      name: `堇`,
      text: `……キリがありません。私の敵、彼の苦しみに責任があるクズどもは、殺しても殺しても湧いてくる。`
    },
    {
      type: `dialogue`,
      position: `left`,
      bubbleStyle: "inner-voice-c",
      avatar: `img/dh/jin1.png`,
      name: `堇`,
      text: `彼らは自分たちが何をしたのかさえ知らない！`
    },
    {
      type: `narration`,
      text: `彼女は苦しげに身を屈め、両手で顔を覆った。`
    },
    {
      type: `dialogue`,
      position: `left`,
      bubbleStyle: "inner-voice-c",
      avatar: `img/dh/jin2.png`,
      name: `堇`,
      text: `師匠は、快意恩仇こそが解脱だと言いました。ですが、この憎しみに終わりはありません。私の恨みは次第にぼやけ、疲弊し、私は……救われない。`
    },
    {
      type: `dialogue`,
      position: `left`,
      bubbleStyle: "inner-voice-c",
      avatar: `img/dh/jin1.png`,
      name: `堇`,
      text: `師匠もずっと、終わりのない憎しみと対峙してきました。どうやって向き合っているのですか？どうやって心を麻痺させずにいられるのですか？`
    },
    {
      type: `dialogue`,
      position: `left`,
      bubbleStyle: "inner-voice-c",
      avatar: `img/dh/jin1.png`,
      name: `堇`,
      text: `それとも、これが心を他人に預けた代償なのでしょうか？`
    },
    {
      type: `dialogue`,
      position: `left`,
      bubbleStyle: "inner-voice-c",
      avatar: `img/dh/jin3.png`,
      name: `堇`,
      text: `だから師匠は、私たちに自分だけを愛せと教えるのですか？
      どこへ進めばいいのか分かりません。私に……導きをください。`
    },
    {
      type: `dialogue`,
      position: `left`,
      bubbleStyle: "inner-voice-c",
      avatar: `img/dh/wuyan.png`,
      name: `「師匠」`,
      text: `彼らの振る舞いを畜生にも劣る外道と糾弾しながら、自らも同じ行いに手を染め畜生に堕ちるわけにはいかない。人間ならば、正邪を弁えることだ。`,
      voice: `wav/CN/conversation24/vo_event_11031_60.wav`
    },
    {
      type: `dialogue`,
      position: `left`,
      bubbleStyle: "inner-voice-c",
      avatar: `img/dh/wuyan.png`,
      name: `「師匠」`,
      text: `……それは復讐じゃないわ。`,
      voice: `wav/CN/conversation24/vo_event_11031_60.wav`
    },
    {
      type: `dialogue`,
      position: `left`,
      bubbleStyle: "inner-voice-c",
      avatar: `img/dh/smile0.png`,
      name: `「師匠」`,
      text: `君はただ痛みに突き動かされてるだけ。目覚めていなさい。理性を保ち、勇敢でありなさい……`,
      voice: `wav/CN/conversation24/vo_event_11031_60.wav`
    },
    {
      type: `dialogue`,
      position: `left`,
      bubbleStyle: "inner-voice-c",
      avatar: `img/dh/leopold2.png`,
      name: `「師匠」`,
      text: `あの局長に関しては……目には目をだけじゃなく、実は別の道もあるのよ。`,
      voice: `wav/CN/conversation24/vo_event_11031_4.wav`
    },
    {
      type: `dialogue`,
      position: `left`,
      bubbleStyle: "inner-voice-c",
      avatar: `img/dh/jin1.png`,
      name: `堇`,
      text: `別の道、ですか……？`
    },
    {
      type: `dialogue`,
      position: `left`,
      bubbleStyle: "inner-voice-c",
      avatar: `img/dh/leopold2.png`,
      name: `「師匠」`,
      text: `もしその馬鹿な男が生きてるなら、見つけ出して奪い返しなさい。誰かを好きになるのは構わない。心をあげるんじゃなくて、相手の心を騙し取って、ガッチリ繋ぎ止めておけばいいだけの話でしょう？`,
      voice: `wav/CN/conversation24/vo_event_11031_5.wav`
    },
    {
      type: `dialogue`,
      position: `left`,
      bubbleStyle: "inner-voice-c",
      avatar: `img/dh/regret.png`,
      name: `「師匠」`,
      text: `機会があれば、私も探しに行ってみたかったわね。あの朴念仁が最近どうしてるか。でも……`,
      voice: `wav/CN/conversation24/vo_event_11031_36.wav`
    },
    {
      type: `narration`,
      text: `彼女はスミレの髪を撫で、珍しく柔らかな笑みを浮かべた。`
    },
    {
      type: `dialogue`,
      position: `left`,
      bubbleStyle: "inner-voice-c",
      avatar: `img/dh/regret.png`,
      name: `「師匠」`,
      text: `よくお聞き。教えるのはこれが最後よ。二度は言わないわ。`,
      voice: `wav/CN/conversation24/vo_event_11031_13.wav`,
    },
    {
      type: `dialogue`,
      position: `left`,
      bubbleStyle: "inner-voice-c",
      avatar: `img/dh/regret.png`,
      name: `「師匠」`,
      text: `君たちは私が選んだ花よ。多かれ少なかれ私に似た美点があるから、私の庭に入れた。美しい花ほどハエを寄せ付ける、それは分かるわよね。`,
      voice: `wav/CN/conversation24/vo_event_11031_75.wav`
    },
    {
      type: `dialogue`,
      position: `left`,
      bubbleStyle: "inner-voice-c",
      avatar: `img/dh/leopold2.png`,
      name: `「師匠」`,
      text: `確かに花は脆いわ。美しければ美しいほど、軽く揉めば砕け、折れば曲がる。君たちのようにね。ここに来た時はみんな、見るも無残な有様だった。`,
      voice: `wav/CN/conversation24/vo_event_11031_46.wav`
    },
    {
      type: `dialogue`,
      position: `left`,
      bubbleStyle: "inner-voice-c",
      avatar: `img/dh/smile0.png`,
      name: `「師匠」`,
      text: `でも構わない。君たちは弱く見えるだけで、自分が思っている以上に強靭よ。`,
      voice: `wav/CN/conversation24/vo_event_11031_16.wav`
    },
    {
      type: `dialogue`,
      position: `left`,
      bubbleStyle: "inner-voice-c",
      avatar: `img/dh/regret.png`,
      name: `「師匠」`,
      text: `揉みくちゃにされても、来年にはまた咲く。焼かれても、また新しい芽が出る。運命は君を折ることはできても、君を破壊することは永遠にできない――君がその根を、自分の手で握りしめている限りはね。`,
      voice: `wav/CN/conversation24/vo_event_11031_71.wav`
    },
    {
      type: `dialogue`,
      position: `left`,
      bubbleStyle: "inner-voice-c",
      avatar: `img/dh/regret.png`,
      name: `「師匠」`,
      text: `流されるんじゃないわよ。運命に押されるな、外野に惑わされるな。譲歩は理解とは引き換えられない。苦難の源は『従わないこと』ではなく、『自立していないこと』にあるのよ。`,
      voice: `wav/CN/conversation24/vo_event_11031_56.wav`
    },
    {
      type: `dialogue`,
      position: `left`,
      bubbleStyle: "inner-voice-c",
      avatar: `img/dh/regret.png`,
      name: `「師匠」`,
      text: `譲歩しても理解は得られない。苦しみの元は「従わない」ことじゃなく、「独立していない」ことだ。`
    },
    {
      type: `dialogue`,
      position: `left`,
      bubbleStyle: "inner-voice-c",
      avatar: `img/dh/regret.png`,
      name: `「師匠」`,
      text: `自分という主権を持たず、それを守る力もない。それこそが、あのハエどもに、独りよがりに花を踏みにじる機会を与えてしまった原因なの。`
    },
    {
      type: `dialogue`,
      position: `left`,
      bubbleStyle: "inner-voice-c",
      avatar: `img/dh/regret.png`,
      name: `「師匠」`,
      text: `君たちの人生は君たち自身のもの。私以外の誰の言葉も聞くんじゃないわ。`,
      voice: `wav/CN/conversation24/vo_event_11031_61.wav`
    },
    {
      type: `narration`,
      text: `これこそが「Garden」の存在理由であり、それが絶えず発展し強大化してきた理由でもあった。`
    },
    {
      type: `narration`,
      text: `彼女は手を離すと、そのまま立ち上がった。水音が響く。`
    },
    {
      type: `dialogue`,
      position: `left`,
      bubbleStyle: "inner-voice-c",
      avatar: `img/dh/jin4.png`,
      name: `堇`,
      text: `肝に銘じます。ですが、師匠、なぜ『最後』なのですか？`
    },
    {
      type: `dialogue`,
      position: `left`,
      bubbleStyle: "inner-voice-c",
      avatar: `img/dh/jin4.png`,
      name: `堇`,
      text: `ここ二ヶ月、師匠はずっと一人で戦い続けておられます。みんな心配しているのです。`
    },
    {
      type: `dialogue`,
      position: `left`,
      bubbleStyle: "inner-voice-c",
      avatar: `img/dh/jin4.png`,
      name: `堇`,
      text: `何か計画があるのですか？教えてください。お体だって――`
    },
    {
      type: `dialogue`,
      position: `left`,
      bubbleStyle: "inner-voice-c",
      avatar: `img/dh/leopold.png`,
      name: `「師匠」`,
      text: `あーもうダメダメ、体中が痛いのよ。全員呼んできなさい、みんなでマッサージよ。お祝いしましょ、私の誕生日の前祝い。`,
      voice: `wav/CN/conversation24/vo_event_11031_33.wav`
    },
    {
      type: `dialogue`,
      position: `left`,
      bubbleStyle: "inner-voice-c",
      avatar: `img/dh/leopold2.png`,
      name: `「師匠」`,
      text: `今日も変わらず美しく、気分上々。明日も私の思い通りになるように。`,
      voice: `wav/CN/conversation24/vo_event_11031_26.wav`,
      /* bgm: `mp3/bg/330933570.mp3`, */
    },
    {
      type: `dialogue`,
      position: `left`,
      bubbleStyle: "inner-voice-c",
      avatar: `img/dh/leopold2.png`,
      name: `「師匠」`,
      text: `<ruby>業師<rt>私</rt></ruby>を喜ばせる方法をよく考えなさい。今日の任務は、今日という日を私にとって最高に楽しい一日にすることよ！`,
      voice: `wav/CN/conversation24/vo_event_11031_19.wav`
    },
    {
      type: `narration`,
      text: `彼女は確かに、最高に楽しい一日を過ごした。`
    },
    {
      type: `narration`,
      text: `その夜が明けると、「業師」は手書きの指令書の束を残し、全ての暗殺者に指定時刻まで外出を禁じると、彼女の『ガーデン』を去った。`,
      bgm: `mp3/bg/花间.m4a`,
    },
    {
      type: `narration`,
      text: `N.F.113年8月19日14:23<br>錆の川、内海近接汚染区域`
    },
    {
      type: `narration`,
      text: `錆の川の境界。全身黒ずくめの女が疾走していた。時折空間の一端から消失し、瞬時に別の場所へと現れる。`
    },
    {
      type: `narration`,
      text: `彼女はようやく、一息つける場所を見つけた。`
    },
    {
      type: `dialogue`,
      position: `left`,
      bubbleStyle: "inner-voice-c",
      avatar: `img/dh/armaf2.png`,
      name: `シーゲル`,
      text: `ふぅ……やっと振り切った……`
    },
    {
      type: `dialogue`,
      position: `left`,
      bubbleStyle: "inner-voice-c",
      avatar: `img/dh/armaf2.png`,
      name: `シーゲル`,
      text: `HUSHめ……西区からニューシティまで、ずっと妨害してきやがった。まるでこちらの動きが見えているかのように……指揮しているのはあの能力者、シャーロームか……`
    },
    {
      type: `dialogue`,
      position: `left`,
      bubbleStyle: "inner-voice-c",
      avatar: `img/dh/armaf2.png`,
      name: `シーゲル`,
      text: `厄介なことになった……`
    },
    {
      type: `narration`,
      text: `黒衣の女は裂け目の中で静かに寄りかかった。傷は深く、これ以上逃げ続ける力は残っていない。`
    },
    {
      type: `narration`,
      text: `支援は来ない。それが彼らの構造だ。地上で活動する幹事は互いに独立しており、生死は自己責任。`
    },
    {
      type: `narration`,
      text: `それこそが、彼らが上庭に対抗できる唯一の手段だった。`
    },
    {
      type: `dialogue`,
      position: `left`,
      bubbleStyle: "inner-voice-c",
      avatar: `img/dh/armaf2.png`,
      name: `シーゲル`,
      text: `我々が外側から慎重に少しずつ力を掘り起こしている間に、上庭は狂厄の深層へ侵入する方法を見つけていたのか……群集観測、少なくとも深度8……`
    },
    {
      type: `dialogue`,
      position: `left`,
      bubbleStyle: "inner-voice-c",
      avatar: `img/dh/armaf2.png`,
      name: `シーゲル`,
      text: `いや……奴らもまだそこまで深い力を行使できてはいないはずだ。そうでなければとっくに終わっている。我々に勝ち目などない……`
    },
    {
      type: `dialogue`,
      position: `left`,
      bubbleStyle: "inner-voice-c",
      avatar: `img/dh/armaf2.png`,
      name: `シーゲル`,
      text: `今のところ奴らは観察し、連絡を取っているに過ぎない……狂厄の世界で群集意志の波動を観測できたからこそ、3月にあれほど正確な誘導ができたのだ……10年前の内海横断作戦でも、上庭の直接指揮があった……`
    },
    {
      type: `dialogue`,
      position: `left`,
      bubbleStyle: "inner-voice-c",
      avatar: `img/dh/armaf2.png`,
      name: `シーゲル`,
      text: `だが観測といえど、そう長くは続けられないはずだ……いかなる方法であれ、観測者は必ず腐蝕される。つまり……上庭には代わりの観測者がいるということか……奴らの技術はそこまで到達しているのか……`
    },
    {
      type: `dialogue`,
      position: `left`,
      bubbleStyle: "inner-voice-c",
      avatar: `img/dh/armaf2.png`,
      name: `シーゲル`,
      text: `もし全てがあの執行人の観測に基づいた計算だとしたら、もし彼女が何らかの方法で深層狂厄領域に潜入しているとしたら……彼女が何を見て、何をしでかすか、福音地（我々）の想像も及ばない。`
    },
    {
      type: `dialogue`,
      position: `left`,
      bubbleStyle: "inner-voice-c",
      avatar: `img/dh/armaf2.png`,
      name: `シーゲル`,
      text: `上庭はまたどんな技術を使って、あんな怪物を手元に繋ぎ止めているんだ？ その技術は□□□にも有効なのか？`
    },
    {
      type: `narration`,
      text: `そこまで考え、黒衣の女は身震いした。恐怖と憎悪が同時に溢れ出す。`
    },
    {
      type: `dialogue`,
      position: `left`,
      bubbleStyle: "inner-voice-c",
      avatar: `img/dh/armaf2.png`,
      name: `シーゲル`,
      text: `いずれにせよ……阻止しなければ。抹殺しなければならない……執行人Xを……さもなくば、BR-002は……`
    },
    {
      type: `narration`,
      text: `彼女が苦悩していると、暗闇の中から聞き覚えのある声が響いた。`
    },
    {
      type: `dialogue`,
      position: `left`,
      bubbleStyle: "inner-voice-c",
      avatar: `img/dh/leopold2.png`,
      name: `「師匠」`,
      text: `<span></span>シーゲルじゃない。数日見ないうちにずいぶん落ちぶれたわね。`,
      voice: `wav/CN/conversation24/vo_event_11032_7.wav`
    },
    {
      type: `dialogue`,
      position: `left`,
      bubbleStyle: "inner-voice-c",
      avatar: `img/dh/leopold2.png`,
      name: `「師匠」`,
      text: `死ぬんじゃないわよ、私の『ガーデン』はまだその小細工に隠蔽を頼ってるんだから。`,
      voice: `wav/CN/conversation24/vo_event_11032_22.wav`
    },
    {
      type: `dialogue`,
      position: `left`,
      bubbleStyle: "inner-voice-c",
      avatar: `img/dh/armaf2.png`,
      name: `シーゲル`,
      text: `ククッ……あれは私の力ではない、地下の力だ。そしてそれは、既に君のものだ。君の要求に応じて報酬を前払いしてやったというのに、どうやら……君は依頼を果たさなかったようだな。`
    },
    {
      type: `dialogue`,
      position: `left`,
      bubbleStyle: "inner-voice-c",
      avatar: `img/dh/armaf2.png`,
      name: `シーゲル`,
      text: `それどころか……我々全員を危険に晒した。`
    },
    {
      type: `dialogue`,
      position: `left`,
      bubbleStyle: "inner-voice-c",
      avatar: `img/dh/smile0.png`,
      name: `「師匠」`,
      text: `そ？なら、悪・か・っ・た・わ・ね`,
      voice: `wav/CN/conversation24/vo_event_11032_13.wav`
    },
    {
      type: `narration`,
      text: `「師匠」は歩み寄り、シーゲルに近づくと、片手をその傷口に突き刺した。`
    },
    {
      type: `dialogue`,
      position: `left`,
      bubbleStyle: "inner-voice-c",
      avatar: `img/dh/armaf2.png`,
      name: `シーゲル`,
      text: `がはっ――！！`,
    },
    {
      type: `dialogue`,
      position: `left`,
      bubbleStyle: "inner-voice-c",
      avatar: `img/dh/impatient.png`,
      name: `「師匠」`,
      text: `ガロファノを唆したのは君ね……死にに行くような情報を流し、あんな気味の悪いルーン文字まで持たせて。`,
      voice: `wav/CN/conversation24/vo_event_11032_11.wav`
    },
    {
      type: `dialogue`,
      position: `left`,
      bubbleStyle: "inner-voice-c",
      avatar: `img/dh/impatient.png`,
      name: `「師匠」`,
      text: `福音地の仲間じゃなく、私に助けを求めに来たってことは、見捨てられたってことでしょう。最後のご贔屓にしてあげるわ……`,
      voice: `wav/CN/conversation24/vo_event_11032_24.wav`
    },
    {
      type: `dialogue`,
      position: `left`,
      bubbleStyle: "inner-voice-c",
      avatar: `img/dh/impatient.png`,
      name: `「師匠」`,
      text: `今後、私の『ガーデン』は、君たち福音地とは一切無関係よ。`,
      voice: `wav/CN/conversation24/vo_event_11032_25.wav`
    },
    {
      type: `dialogue`,
      position: `left`,
      bubbleStyle: "inner-voice-c",
      avatar: `img/dh/armaf2.png`,
      name: `シーゲル`,
      text: `カハッ……ふふ……ふふふふ……君の腕なら、福音地に従わずとも、奴らは君に手出しできまい……`,
      voice: `wav/JP/conversation24/vo_event_11032#7.wav`
    },
    {
      type: `dialogue`,
      position: `left`,
      bubbleStyle: "inner-voice-c",
      avatar: `img/dh/armaf2.png`,
      name: `シーゲル`,
      text: `構わんさ……私の使命は終わった……`
    },
    {
      type: `dialogue`,
      position: `left`,
      bubbleStyle: "inner-voice-c",
      avatar: `img/dh/armaf2.png`,
      name: `シーゲル`,
      text: `君がなぜこんなことをするのか、私には分かるぞ……この力のために、君が何を差し出したのかもな。君が裏切った理由、全て知っているぞ……`
    },
    {
      type: `narration`,
      text: `彼女が言い終わるのを待たず、業師は腕を振るい、彼女の体内から巨大な漆黒の、まるで生き物のように蠢く異形の花を引きずり出した。シーゲルが完全に人の形を失い、黒衣の上に咲くその花だけが残るまで。`
    },
    {
      type: `narration`,
      text: `業師はシーゲルの崩れゆく形体を見つめ、彼女が咲かせた獰猛で恐ろしい異形の物を見つめる。`
    },
    {
      type: `narration`,
      text: `もっと早くこうすべきだったのだ。`
    },
    {
      type: `dialogue`,
      position: `left`,
      bubbleStyle: "inner-voice-c",
      avatar: `img/dh/armaf2.png`,
      bubbleStyle: "bubble-unstable",
      name: `蠢く花の泥`,
      text: `……いいわ、行きなさい……そして私の力に……`,
      voice: `wav/JP/conversation24/vo_event_11032#20.wav`
    },
    {
      type: `dialogue`,
      position: `left`,
      bubbleStyle: "inner-voice-c",
      avatar: `img/dh/impatient.png`,
      name: `「師匠」`,
      text: `当然私がそうしたいからそうしたの。`,
      voice: `wav/CN/conversation24/vo_event_11032_21.wav`
    },
    {
      type: `dialogue`,
      position: `left`,
      bubbleStyle: "inner-voice-c",

      avatar: `img/dh/impatient.png`,
      name: `「師匠」`,
      text: `さて、次は……`,
      voice: `wav/CN/conversation24/vo_event_11032_20.wav`
    },
    {
      type: `narration`,
      text: `彼女はシーゲルが懐に隠し持っていた情報に目をやる。まだ片付いていない……もっと厄介な奴がもう一人残っている。`
    },

    {
      type: `narration`,
	bubbleStyle: "secret-comm",
      text: `Hush-X：ご安心ください。いつものように、きみたちの望みに全て応えましょう。
edge-02：ええ、頼んだわ。
      edge-02：最も効率的で頼りがいのある執行人として、君が我々の信頼を裏切ったことは一度もないものね。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/x.png`,
      name: `シャーローム`,
      text: `すぐに……`
    },
    {
      type: `narration`,
      text: `通信が終了し、シャーロームは部下が手渡した濡れた布で、身体に飛び散った汚れを拭った。それは先ほど排除されたもう一人の狂厄暗殺者のものだった。`
    },
    {
      type: `narration`,
      text: `顔の単瞳の印がゆっくりと消え、その体が溶け、奇妙な破片が現れた。`
    },
    {
      type: `narration`,
      text: `この半月、彼女を襲った傀儡たちはみな似たようなものを持っていた。シャーロームは暗号をまとめ、まだ完全ではないが、発信者の意図は十分に読み取れた。彼女は小さく微笑んだ。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/x.png`,
      name: `シャーローム`,
      text: `（心の声）
      探しに来て、師匠。きみなら、きっと私の期待を裏切らない……`
    }

  ]
};
