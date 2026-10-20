export default {
  meta: {
    title: `「起爆」`,
    bgm: `mp3/bg/ignition.mp3`,
    summary: `錆火の基地内では噂がますます大きくなり、人々の心の不安はなかなか収まらなかったが、しかし……`
  },
  infoPanel: {
    glossary: [
      {
        term: `上庭直属部隊（HUSH）`,
        desc: `上庭が直接制御し派遣する、機械的かつ感情を排除した戦闘排除ユニット。極めて強大であり対話を拒む。`
      },
      {
        term: `SHP-13`,
        desc: `上庭側が局長、あるいは枷のシステムを指して用いる特殊なコードネーム。`
      },
      {
        term: `白衣の精鋭`,
        desc: `HUSHをさらに凌駕するほどの極めて高い格闘・戦闘能力を有する、上庭の特殊エリート戦闘員。`
      }
    ],
    characters: [
      {
        name: `ロフナ`,
        avatar: `img/dh/lofna.png`,
        note: `夢から覚め、急襲に立ち向かう難民責任者。`,
        basicStats: `HUSHの襲撃に際し、ふくらはぎを撃ち抜かれながらも昏睡状態のヘラを全身で庇おうとする。`,
        profile: `所属：錆火\n立場：責任者`
      },
      {
        name: `マティルダ`,
        avatar: `img/dh/matilda.png`,
        note: `西区復興執行委員会の執行官。`,
        basicStats: `「私が代表できるのは、自分自身だけです……」<br>上庭の指揮官である黒水晶に敢然と立ち塞がり、難民を傷つける行為を全力で阻もうとする。`,
        profile: `所属：西区復興執行委員会\n能力：長槍戦闘`
      },
      {
        name: `カスロ`,
        avatar: `img/dh/caslo.png`,
        note: `退屈な戦いに飽きた戦闘狂コンビクト。`,
        basicStats: `上庭の精鋭が現れたことで歓喜し、マティルダと共に激しい肉弾戦を挑む。`,
        profile: `危険度：高危険度`
      },
      {
        name: `コシ`,
        avatar: `img/dh/crache.png`,
        note: `「西区の影の守護神」と呼ばれる流浪児の首領。`,
        basicStats: `「……失せろ。二度は言わない。」<br>難民やロフナに暴力を振るう上庭に激怒し、黒い影の異能を以てHUSHを貫く。`,
        profile: `危険度：狂厄級`
      },
      {
        name: `ヘカテ`,
        avatar: `img/dh/hecate.png`,
        note: `局長を探すコンビクトの少女。`,
        basicStats: `BR-002の急激な活性化に伴い、枷の共鳴による激痛に悶え、黒い光の棘に体を貫かれる。`,
        profile: `能力：悪夢（ナイトメア）の具現化`
      },
      {
        name: `ドナルド`,
        avatar: `img/dh/donald.png`,
        note: `元錆火のリーダーであり執行官。`,
        basicStats: `FACの隊員たちを死地から退避させ、9年間対峙し続けた黒環の深淵に、自ら情報収集と対抗のために残留する。`,
        profile: `所属：再建委員会\n能力：放電・機械制御`
      },
      {
        name: `サンジ`,
        avatar: `img/dh/sanji.png`,
        note: `ドナルドの助手。`,
        basicStats: `狂厄の汚染共鳴に苦しむヘカテを静かに支え、耐えさせる。`,
        profile: `立場：ドナルドの助手`
      },
      {
        name: `トゥトゥ`,
        avatar: `img/dh/dudu.png`,
        note: `局長の命をラッパで繋ぎ止めている少女。`,
        basicStats: `地下深くから突如活性化した狂厄の汚染急上昇（M値上昇）を察知する。`,
        profile: `能力：命の演奏`
      },
      {
        name: `FAC責任者`,
        avatar: `img/dh/fac_leader.png`,
        note: `黒環の情報を追うFACの指揮官。`,
        basicStats: `BR-002の膨張に伴い、死を覚悟して更なる最深部へと足を踏み入れる覚悟を決める。`,
        profile: `所属：FAC`
      },
      {
        avatar: `img/dh/quartz.jpg`,
      name: `黒石英`,
        avatar: `img/dh/black_crystal.png`,
        note: `上庭を代表して乗り込んできた冷酷な指揮官。`,
        basicStats: `SHP-13（ヘラ）の奪取を目的に、マティルダとの対話を完全に拒否して強硬手段に出る。`,
        profile: `所属：上庭`
      }
    ],
    synopsis: `上庭の直属部隊「HUSH」が突如避難基地に踏み込んできた。マティルダは家門ではなく自らの意志で対立を選び、カスロ、コシも戦闘に合流する。しかし上庭の武力は圧倒的であり、さらにはBR-002の汚染値（M値）が急上昇して基地は崩壊へと近づく。ヘカテが枷の共鳴で激痛に苦しむ中、ドナルドはFACの戦士たちを退避させ、自ら黒環の深淵へと潜入する。`
  },
  script: [
    {
      type: `narration`,
      text: `（13-4分岐ストーリー）SD-1302　着火\n\nまた、この夢だ。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/sanji.png`,
      name: `サンジ`,
      text: `すまない……ロフナ。連れて帰れなかった……`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/dying_girl.png`,
      name: `瀕死の少女`,
      text: `ごめんなさい、ママ。私、逃げてきた。\n\n涅槃は私を殺さなかった……\n\n帰ってきたから、だからママも――`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/lofna.png`,
      name: `ロフナ`,
      text: `！`
    },
    {
      type: `narration`,
      text: `彼女は勢いよく目を覚まし、ほっと息を吐いた。\n\n何度も見る夢だった。\n\nいつもこうして飛び起きる。もう慣れている。\n\nだが、今日は何かが違った。\n\n外が騒がしい。\n\nロフナには何が起きているのか分からなかったが、反射的に傍らのヘラの様子を確認した。大事がないことを確かめると、上着を羽織って外へ出る。\n\nそこへ、小走りでやってきたグリダと正面からぶつかった。`
    },
    {
      type: `dialogue`,
      position: `left`,
      name: `グリダ`,
      text: `ひゃああああ――！`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/lofna.png`,
      name: `ロフナ`,
      text: `グリダ、私よ。\n\n何があったの。`
    },
    {
      type: `dialogue`,
      position: `left`,
      name: `グリダ`,
      text: `ロフナか。\n\n早く逃げろ。執行委員会の連中が来た。いや、もっと上の連中だ。誰なのかは分からないが、基地に踏み込んできた。\n\nマティルダが――\n\nコシが外へ出てから、一度も戻ってきていない。`
    },
    {
      type: `narration`,
      text: `ロフナの胸が跳ねた。\n\nしかし、すぐに感情を抑え込み、監視モニターへ向かう。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/quartz.jpg`,
      name: `黒石英`,
      text: `お前は……執行官マティルダ・キャヴェンディッシュ。\n\n記録によれば、今週、お前は何者かに誘拐されている。この状況をどう説明する。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/matilda.png`,
      name: `マティルダ`,
      text: `確かに私は誘拐されました。\n\n私を誘拐した者から情報を得ました。また、局長がこちらにいるとも聞いています。\n\n私は先にこちらへ来て、情報の真偽を確認しました。\n\n彼らが皆、何の罪もない難民であり、反乱分子を匿っていないことを確認したため、私は執行委員会から命じられた「人口統計と移住・再配置」の動員業務を完了することにしました。\n\n私の担当する仕事は十分に果たしています。\n\n皆からも信頼を得ており、移住に必要な物資の備蓄も支援しています。この点については、難民たちに確認していただければ分かります。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/quartz.jpg`,
      name: `黒石英`,
      text: `興味はない。\n\n局長はここにいるのか。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/matilda.png`,
      name: `マティルダ`,
      text: `残念ながら、局長はここにはいません。これまで一度も来ていません。\n\n誤った情報か、あるいはあなたを誘導するための情報だったのでしょう。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/quartz.jpg`,
      name: `黒石英`,
      text: `お前の判断は必要ない。\n\nそれは上庭直属部隊の仕事だ。\n\n案内しろ。負傷者区域を確認する。`
    },
    {
      type: `dialogue`,
      position: `left`,
      name: `ロフナ＆グリダ`,
      text: `!?`
    },
    {
      type: `dialogue`,
      position: `left`,
      name: `グリダ`,
      text: `ここに来るっていうのか。\n\nここには錆火の仲間がいる。それに、名簿に載せられた連中だって大勢いる。\n\nどうする。どうすればいい。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/lofna.png`,
      name: `ロフナ`,
      text: `落ち着いて。\n\nマティルダが時間を稼いでくれる。\n\n今のうちに負傷者と資料を移す。\n\nあいつらの目的はまだ分からない。\n\nでも、万が一に備える。\n\n嫌な予感がする。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/matilda.png`,
      name: `マティルダ`,
      text: `そのように強引に踏み込むことはお勧めしません。\n\n西区はあまりにも長い間、切り離されていました。あまりに強硬な態度を取れば、恐怖を招き、皆の不信感を煽るだけです。\n\nあなたは上庭を代表してここへ来ているのでしょう。\n\nそれなら、もっと適切な方法で対話を求めてください。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/quartz.jpg`,
      name: `黒石英`,
      text: `それは重要ではない。\n\n案内しろ、マティルダ・キャヴェンディッシュ。\n\nお前の身辺についてはすでに調査済みだ。\n\n今のお前の行動は、キャヴェンディッシュ家の意思を代表するものなのか。\n\n家を代表して、上庭の重要な行動を妨害するつもりか。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/matilda.png`,
      name: `マティルダ`,
      text: `…………。\n\n残念ながら、私は家を代表することはできません。\n\n私はキャヴェンディッシュ家が口にすることさえ恥じている愚鈍な人間です。\n\n私が代表できるのは、自分自身だけです……`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/quartz.jpg`,
      name: `黒石英`,
      text: `……対話を終了する。\n\n独自行動へ移行。\n\n区域スキャン完了。負傷者の位置を確認。`
    },
    {
      type: `narration`,
      text: `黒水晶はマティルダを越えて進もうとした。\n\nしかし、その行く手を一丁の銃口が塞ぐ。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/matilda.png`,
      name: `マティルダ`,
      text: `西区復興執行委員会、執行官マティルダ・キャヴェンディッシュ。\n\n私の仕事は、西区の復興を推進し、対話を求め、亀裂を埋め、新たな未来を模索することです。\n\nもしあなたが彼らを傷つけることを続けるのであれば、副官として、私は上官の過ちを正さなければなりません。\n\n私は対話が再開されるまで、あなたと対立します。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/quartz.jpg`,
      name: `黒石英`,
      text: `……マティルダ・キャヴェンディッシュを敵対対象と判定。\n\nHUSH、障害を排除。行動。`
    },
    {
      type: `narration`,
      text: `数体の青白い異形の人型が突進してきた。\n\nその敵意は明白だった。\n\n難民たちから恐怖の声が上がり、互いに押し合いながら逃げようとする。\n\nマティルダは安全装置を外し、銃口を向けながら、密かに計算していた。\n\nあの守護神は、新たな難民を迎えに出ている。\n\n彼女が戻ってくるまで、私はどれだけ持ちこたえられる。\n\nそう考えた瞬間、青髪の闘士が戦場へ飛び込んできた。\n\nその両目は、興奮で輝いている。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/caslo.png`,
      name: `カスロ`,
      text: `上庭の部隊か。\n\nいいな。私に任せろ。`
    },
    {
      type: `narration`,
      text: `（……）`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/caslo.png`,
      name: `カスロ`,
      text: `チッ。強いことは強いけど、どうしてこいつらは頭をまったく使わない。\n\n石でも殴ってるみたいだ。つまらない。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/matilda.png`,
      name: `マティルダ`,
      text: `後ろ！`
    },
    {
      type: `narration`,
      text: `言い終わるより早く、白い影が突然突進してきた。\n\nマティルダの銃弾が相手を撃ち抜く。\n\nしかし、まったく効いていない。\n\nそのまま白い影はカスロへ激突し、彼女を吹き飛ばした。\n\n戦場へ加わったのは、それまでのどの戦闘要員ともまったく異なる存在だった。\n\n疑いようもなく、精鋭だ。\n\nそこには、人を恐れさせる何らかの力がある。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/caslo.png`,
      name: `カスロ`,
      text: `ふふ……ふふふふ……\n\nははははは、ようやく強そうなのが来た。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/matilda.png`,
      name: `マティルダ`,
      text: `落ち着いて、カスロ。\n\nあなたでは勝てない。慎重に。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/caslo.png`,
      name: `カスロ`,
      text: `知るか。\n\nもう生気のない連中には飽きた。\n\nこういう戦いじゃなきゃ面白くない。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/quartz.jpg`,
      name: `黒石英`,
      text: `彼女たちを制圧し、部隊の行動を確保する。`
    },
    {
      type: `dialogue`,
      position: `left`,
      name: `白衣の精鋭`,
      text: `……了解。`
    },
    {
      type: `narration`,
      text: `激戦が再び始まった。\n\n白衣の精鋭は一人で二人の禁閉者を相手取り、マティルダとカスロを同時に抑え込んでいく。\n\nその間にも、黒水晶は負傷者区域へ向かって進んでいた。\n\nその行く先々で、恐怖が広がっていく。`
    },
    {
      type: `dialogue`,
      position: `left`,
      name: `グリダ`,
      text: `負傷者が多すぎる。\n\nロフナ、全員は連れていけない。どうする。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/lofna.png`,
      name: `ロフナ`,
      text: `狙いが局長なら、最も目をつけられる可能性が高いのは――`
    },
    {
      type: `narration`,
      text: `恐怖が一瞬にして彼女の心臓を鷲掴みにした。\n\nロフナはヘラを抱き上げ、その場を離れようとする。\n\nだが、次の瞬間、ふくらはぎを銃弾が撃ち抜いた。\n\n彼女はその場に膝をつく。`
    },
    {
      type: `dialogue`,
      position: `left`,
      name: `グリダ`,
      text: `ロフナ！`
    },
    {
      type: `narration`,
      text: `悲鳴を聞いたマティルダは追いかけようとした。\n\nしかし、白衣の精鋭に押さえ込まれる。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/matilda.png`,
      name: `マティルダ`,
      text: `……上庭の戦闘部隊が、ここまでの力を持っているなんて。\n\nそれに、局長の救出が目的だと言いながら、部隊編成にはMBCCの人員が一人もいない。\n\nそれどころか、攻撃性があまりにも高い……\n\nこれは救出ではない。\n\n奪取だ。\n\nでも、問題は……局長はここにいない。\n\n一体、何が起きている。`
    },
    {
      type: `narration`,
      text: `負傷者区域。\n\n襲撃者の到着によって、そこは大混乱に陥っていた。\n\n負傷者たちは泣き叫び、這うようにして戦闘の中心から離れていく。\n\nその中心で、黒水晶はロフナを見下ろしていた。\n\nロフナはヘラを強く抱きしめ、決して手を離しようとしない。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/quartz.jpg`,
      name: `黒石英`,
      text: `禁閉者……身元を確認。S-098。局長失踪前、確かに彼女とともに任務を遂行している。SHP-13はやはりここにいる。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/lofna.png`,
      name: `ロフナ`,
      text: `違う。\n\nあなたたちは間違えている。\n\n局長はここにいない。\n\nどこへ行ったのか、誰にも分からない。\n\nもしあなたたちが彼を見つけたなら、私にも教えて。\n\nこの子には局長が必要なの。\n\nたくさんの人が、彼を必要としている。`
    },
    {
      type: `narration`,
      text: `一年前のロフナなら、自分が上庭の人間と対話しようとするなど、想像もしなかっただろう。\n\nだが今、彼女は腕の中で意識を失っている少女のために、自分にできる限りの誠意を示していた。\n\nしかし、冷たい石英の三角形はそれを聞く耳を持たない。\n\nそれが計算するのは、自らに与えられた任務と、想定される敵、著しく高まるリスクだけだった。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/quartz.jpg`,
      name: `黒石英`,
      text: `お前たちが匿っているのか。\n\n城邦の行動を妨害するお前たちは、地下とどういう関係にある。\n\nこの禁閉者を引き渡せ。\n\n彼女を覚醒させ、SHP-13を捜索する。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/lofna.png`,
      name: `ロフナ`,
      text: `やめて！`
    },
    {
      type: `narration`,
      text: `数体のHUSHが負傷者区域へ侵入した。\n\n命令に従い、獲物へ飛びかかる。\n\nロフナは振り返り、ヘラを抱きしめたまま、全身で少女を庇った。\n\nその瞬間。\n\n無数の黒い影が地面を這うように迫り、一斉に跳ね上がった。\n\n影はすべての襲撃者を貫いた。\n\nその影の源――。\n\n流浪児の首領が、ついに駆けつけた。\n\n目の前に広がる惨状が、彼女の胸に燃え上がる怒りをさらに煽っている。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/crache.png`,
      name: `コシ`,
      text: `……失せろ。\n\n二度は言わない。\n\nお前たちは、自分たちの力をいつも弱い者に振りかざすのか。\n\nそういうところは上庭もシンジケートも変わらない。\n\nどちらも吐き気がするほど腐っている。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/quartz.jpg`,
      name: `黒石英`,
      text: `狂厄級禁閉者を匿っている。\n\nここには明らかに反乱の兆候がある。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/crache.png`,
      name: `コシ`,
      text: `人の家に勝手に上がり込んで好き放題やった挙句、家主の鼻先に銃を突きつけて反乱だと言う。\n\nそれなら教えてくれ。\n\n反乱っていうのは、どういうものだ。`
    },
    {
      type: `narration`,
      text: `力を持つ者たちは互いにぶつかり合い、一歩も譲らない。\n\nその一方で、力を持たない弱者たちは、ただ果てしない恐怖に晒されていた。\n\n彼らはこんな戦いを見たことがない。\n\n恐ろしい噂を思い出し、8か月、あるいはそれ以上の間に積もり積もった恐怖に突き動かされ、人々は騒然となって逃げ惑った。`
    },
    {
      type: `dialogue`,
      position: `left`,
      name: `恐慌する難民（A）`,
      text: `始まった、始まった……\n\nあのガキの守護神が時間を稼いでる。\n\n逃げろ。\n\n死にたくない。\n\n早く逃げろ……\n\nでも、どこへ逃げればいい。`
    },
    {
      type: `dialogue`,
      position: `left`,
      name: `恐慌する難民（B）`,
      text: `待ってくれ、もう少し待て。\n\n話せば分かる。\n\n城邦から来た連中が全員悪人ってわけじゃない。\n\nほら、マティルダだっている。\n\n本当に誰かを探しに来ただけかもしれない。\n\n協力して、ちゃんと話し合おう。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/matilda.png`,
      name: `マティルダ`,
      text: `皆さん、落ち着いてください。\n\n恐慌しないで。`
    },
    {
      type: `dialogue`,
      position: `left`,
      name: `恐慌する難民（A）`,
      text: `どうやって落ち着けっていうんだ。\n\nみんな知ってる。\n\n執行委員会がやってきたことを……\n\n粛清令のことを……\n\nあの噂のことを。`
    },
    {
      type: `dialogue`,
      position: `left`,
      name: `奇妙な難民`,
      text: `そうだ……\n\nあれは噂なんかじゃない。\n\n全部、本当なんだ……\n\nあいつらは最初から俺たちを見下していた。\n\n西区を見下していた。\n\n自分から堕落したんだ、死んで当然だ、自業自得だって……\n\n本当はあいつらが俺たちを踏みにじって、奪ったくせに……`
    },
    {
      type: `dialogue`,
      position: `left`,
      name: `地下の傀儡`,
      text: `全部、口実だ……\n\n見ろ。\n\n粛清令が来る。\n\n人探しも、反乱も、全部口実だ。\n\n俺たちを皆殺しにするつもりなんだ。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/matilda.png`,
      name: `マティルダ`,
      text: `M値が上昇している。\n\nこれは――`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/lofna.png`,
      name: `ロフナ`,
      text: `ヘラ！`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/chief.png`,
      name: `局長`,
      text: `ゴホッ、ゴホッ――！\n\nうっ――！`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/dudu.png`,
      name: `トゥトゥ`,
      text: `まずい。下の汚染が突然――`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/hecate.png`,
      name: `ヘカテ`,
      text: `うっ――！`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/sanji.png`,
      name: `サンジ`,
      text: `ヘカテ、耐えろ。`
    },
    {
      type: `narration`,
      text: `黒い光の棘が少女の身体を貫いた。\n\nその痛みは肉体だけのものではない。\n\n精神までも焼き焦がしていく。`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/hecate.png`,
      name: `ヘカテ`,
      text: `頭が痛い。枷鎖が……局長、局長に何が起きている……`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/fac_leader.png`,
      name: `FAC責任者`,
      text: `黒環の活動が急激に増加。\n\nM値、危険水準まで急上昇。\n\n迷宮が急速に膨張しています。\n\nBR-002本体も……\n\n外側へ拡張を始めたのか。`
    },
    {
      type: `narration`,
      text: `彼は歯を食いしばり、決意を固めた。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/fac_leader.png`,
      name: `FAC責任者`,
      text: `これほど深く汚染区域へ入るのは初めてです。\n\nそして、これが最後になる可能性もある。\n\nこの機会を無駄にはできません。\n\nさらに奥へ進み、より多くの情報を得ます。\n\n私について来る者は来てください。`
    },
    {
      type: `narration`,
      text: `ドナルドは、彼らが覚悟を決める様子を黙って見ていた。\n\nその光景が、彼に遠い昔の過去を思い出させる。\n\nそして彼には、これからこの戦士たちが進んでいけば、どんな結末が待っているのかも、おおよそ分かっていた。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/donald.png`,
      name: `ドナルド`,
      text: `……道を間違えてる。お前たちの目的が狂厄に対抗して市民を守ることだけなら、そんなふうに突っ込んで死にに行くな。\n\n戻れ。あの封鎖防衛線も、対狂厄装備も、戦術も何もかも、お前たちがいて初めて機能する。お前たちは皆、経験を積んだFACだ。一人ひとりの命が貴重んだ。こんなところで失うわけにはいかない。\n\nこの迷宮の中には、まだ危険に陥っている人間がいる。お前たちには、そいつらを守る仕事がある。連れて一緒に戻れ。その代わり、俺が残る。俺がこの黒環の情報をもっと深く集める。\n\n9年も付き合ってきた相手だ。俺以上にここへ残るのに向いている奴はいない……\n\nここまで来たんだ。\n\n一か八か、賭けてみるか。`
    }
  ]
};