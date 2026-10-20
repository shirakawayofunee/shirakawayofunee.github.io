export default {
  meta: {
    title: `「家」`,
    bgm: `mp3/bg/conversation2.mp3`,
    summary: `家族か敵か、復讐か庇護か、本当の答えは何なのか？`
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
        name: `「Garofano」`,
        name2: `ガロファノ`,
        avatar: `img/dh/证件照/002.png`,
        note: `仕立て屋に化けた殺し屋`,
        basicStats: `仕立屋を経営して生計を立てる若い未亡人?`,
      },
      {
        name: `Rahu`,
        name2: `调查员`,
        avatar: `img/dh/证件照/002_2.png`,
        note: `招かれざる客`,
        basicStats: `エノリカ山荘の警備を支援する調査員`,
        profile: `所属：FAC\n能力：不明`
      }
    ],
    synopsis: `数日間、「ガロファノ」はエリカ山荘の警備員（能力者を含む）と何度も正面衝突した。「GARDEN」に戻って休息しようとした矢先、調査員が訪ねてくる。
    「ガロファノ」は一瞬の情け深き、自身と「同じ境遇」に見える調査員を引き込もうとし、「上庭に傷つけられた同類」だと説得、
    「GARDEN」の首領レオポルドが復讐を助けられると伝えた。しかし、その優しさは強く拒絶され、逆に調査員に裏切られた。最終的に「ガロファノ」は罠に落ち、能力者対策の部隊に制圧され、昏迷状態に陥る。調査員もSan値が限界に達し、一時的に行動不能となる。`
  },
  script: [
    {
      type: `narration`,
      text: `N.F.113年7月22日 08:05<br>「ガロファノ」の仕立て屋`
    },
    {
      type: `image`,
      src: `img/cg/br_01.png`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/severo5.png`,
      name: `殺し屋`,
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
      name: `殺し屋`,
      text: `これらはすべて私の人生で<span>実際</span>に経験したことです。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/severo5.png`,
      name: `殺し屋`,
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
      name: `殺し屋`,
      text: `正解、さすがだね。お前たちの戦い方、知ってるよ。怪物と正面からぶつかり合うのが好きで、怖がらず避けず、いつも命を惜しまず盾になる。これに対抗するには、この手が一番効くの。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/severo5.png`,
      name: `殺し屋`,
      text: `おっと、動かないで。この毒にはちょっとだけ狂厄の汚染が混ざってる。もし異方晶持ってるなら、静かに浄化を待った方がいい。今はまだお前を傷つけたくないから。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/severo5.png`,
      name: `殺し屋`,
      text: `あなたと話したいんだ。`
    },
    {
      type: `narration`,
      text: `殺し屋は追撃せず、逆に顔の軽薄な笑みが徐々に消える。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/severo6.png`,
      name: `殺し屋`,
      text: `この4ヶ月、城邦のすべての黒環が活発化して、FACの全戦力は正面戦場に投入されてる。新城の悪質な事件に対応する余裕なんてないから、ずっと前に第九機関に引き継がれてるよね。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/severo6.png`,
      name: `殺し屋`,
      text: `ボディガード、いや、FAC-G47小隊の能力者、お前がここにいるはずない。上級からの援護命令なんて出てないでしょ。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/severo6.png`,
      name: `殺し屋`,
      text: `勝手に新城に戻って、関係ない事件に無理やり介入して、手がかり見つけても報告せず、単独で私みたいな「殺し屋」に会いに来た…お前の能力者の力だって、クリーンじゃないよね？`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/severo6.png`,
      name: `殺し屋`,
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
      name: `殺し屋`,
      text: `…いや、お前のこと、お前が思う以上に理解してるよ。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/severo5.png`,
      name: `殺し屋`,
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
      name: `殺し屋`,
      text: `103年、FACは緊急命令を受け、28の中隊が秘密裏に内海へ向かい、BR-000に突入。情報も時間も不足の中で、作戦は何の成果も上げず、お前以外全員戦死。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/severo5.png`,
      name: `殺し屋`,
      text: `愚かな作戦だった。可是事後，戦術を立案した指揮官は姿を消し、すべての損失と責任はFACに押し付けられた。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/severo5.png`,
      name: `殺し屋`,
      text: `こんなこと知ったら、誰だって納得いかないよ。私たちと同じさ。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/severo5.png`,
      name: `殺し屋`,
      text: `私の父はFACの後方支援部で輸送員だった。N.F.83年、基地で、作戦から持ち帰った異物に感染して、死ぬまでそれが何かわからなかった。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/severo5.png`,
      name: `殺し屋`,
      text: `父は狂厄に侵され、混乱の中で検疫も受けず家に帰り、母や妹の前で怪物に変わった…`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/severo5.png`,
      name: `殺し屋`,
      text: `お前と同じ、あの夜、私も惨めな生き残りだった。お前の憎しみ、わかるよ。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/severo5.png`,
      name: `殺し屋`,
      text: `この何年も、お前はたくさんのものを犠牲にして、能力者になって、ひとりで憎しみを耐え抜いて上庭の犬になった。それでも、黒幕の端っこにも触れられない。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/severo5.png`,
      name: `殺し屋`,
      text: `お前が歩いてるこの真っ暗で冷たい道、私も同じように歩いてきた。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/severo5.png`,
      name: `殺し屋`,
      text: `私たちの人生は一瞬で崩れ、すべて壊された。正義なんて誰も返してくれない。だから、自分で取り戻すしかない。この世界には、多少なりとも道理があるべきじゃない？`
    },
    {
      type: `narration`,
      text: `彼女は調査員に手を差し出し、紫のカーネーションを渡す。`
    },
    
  ]
};
