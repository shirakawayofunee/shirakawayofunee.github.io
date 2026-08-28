export default {
  meta: {
    title: `「[雨]夜」`,
    bgm: `mp3/bg/conversation2.mp3`,
    summary: `黒雲が街を覆い、豪雨が迫る。
    そして、その幕開けを飾るのは——`
  },
  infoPanel: {
    glossary: [
      {
        term: `BR-002`,
        desc: `ニューシティで発生した大規模な狂厄災害（黒環）の一つ。この動乱により周辺の情勢は大きく揺れ動いた。`
      },
      {
        term: `FAC`,
        desc: `「反狂厄作戦部隊（Federal Active Force）」。狂厄や黒環の脅威から都市を防衛するための上庭直属の主要な軍事組織。`
      },
      {
        term: `MBCC`,
        desc: `「ミノス危機管理局（Minos Bureau of Crisis Control）」。特殊な能力を持つ犯罪者「能力者」を収容・拘束し、その力を制御するための機関。`
      }
    ],
    characters: [
      {
        name: `？？`,
        avatar: `img/dh/severo1.png`,
        note: `エリカ邸を襲撃した暗殺者。`,
        basicStats: `音もなく警備網を突破し、冷酷に標的を暗殺していく能力者。`,
        profile: `危険度：不明\n能力：不明\n立場：不明`
      },
      {
        name: `？？｜FAC特別ユニット`,
        avatar: `img/dh/rahu.png`,
        note: `FAC反狂厄作戦部隊所属の隊員。`,
        basicStats: `識別番号05257885。片手で巨大な盾を扱い、単独で襲撃現場の制圧に現れる強靭な女性。`,
        profile: `所属：FAC\n能力：戦術シールド`
      }
    ],
    synopsis: `BR-002の発生から百日あまり。徐々に安定を取り戻しつつあったニューシティの裏で、要人を標的とした暗殺計画が静かに進行していた。エリカ邸の防衛線が突破される中、現場には巨大な盾を手にした一人のFAC特別ユニットが到着する。`
  },
  script: [
    {
      type: `narration`,
      text: `BR-002が再び発生してから、すでに百日あまり。\n錆火を揺るがせた動乱は収束へと向かい、黒環の活動も日に日に安定を取り戻していた。`
    },
    {
      type: `narration`,
      text: `管理局長の望みどおり、地下勢力の多くはニューシティから撤退し、東区で発生する狂厄事件も著しく減少。敵との直接的な衝突はさらに西区へと集約され、城邦の損害を最小限に抑える態勢が整いつつあった。FACは現在、黒環に対する第一防衛線の構築を進めている。`
    },
    {
      type: `narration`,
      text: `だが、その最中だった。\nニューシティの治安官のもとに緊急情報が入った。城邦の要人数名が襲撃を受け、暗殺リストに名を連ねている可能性があるという。`
    },
    {
      type: `narration`,
      text: `疑う余地はない。これは敵が残した反撃、あるいは報復の一手。恐怖をばらまき、西区で戦う主力部隊の意志を揺るがせるための策だった。`
    },
    {
      type: `narration`,
      text: `特別警護および捜査任務が緊急発動された。\n敵の陰謀を阻止するため、そして被害がさらに広がる前に、その芽を摘み取るために。`
    },
    {
      type: `narration`,
      text: `N.F.113年7月19日　ニューシティ01区\n\nエリカ邸――警戒区域`
    },
    {
      type: `dialogue`,
      position: `left`,
      name: `警備責任者`,
      text: `警報!警戒線が突破された!護衛対象が襲われた、犯人はまだ近くにいる！`
    },
    {
      type: `dialogue`,
      position: `left`,
      name: `警備責任者`,
      text: `全員、邸宅を封鎖しろ!これ以上、襲撃者をあの別荘に一歩も踏み込ませるな!踏み込んだ奴は蜂の巣にしろ！`
    },
    {
      type: `dialogue`,
      position: `left`,
      name: `治安官`,
      text: `で、ですが……現場から異能戦闘の痕跡が見つかっています。暗殺者の中に能力者がいる可能性が――`
    },
    {
      type: `dialogue`,
      position: `left`,
      name: `警備責任者`,
      text: `なんだと？！`
    },
    {
      type: `dialogue`,
      position: `left`,
      name: `警備責任者`,
      text: `……あの狂厄の化け物ども……あいつら……化け物め……MBCCを呼べ！!能力者の始末はあいつらの仕事だろうが!どこにいるんだ？？？？`
    },
    {
      type: `dialogue`,
      position: `left`,
      name: `治安官`,
      text: `来るはずがありません。あの局長が死んで、使える能力者は全員暴走状態です。MBCCが支援に来ることはあり得ません。`
    },
    {
      type: `dialogue`,
      position: `left`,
      name: `警備責任者`,
      text: `だったら他を呼べよ、クソッ!治安局でもFACでも第九機関でも何でもいい、全部呼びつけろ！！`
    },    
    {
      type: `dialogue`,
      position: `left`,
      name: `警備責任者`,
      text: `ブルーレインはいつ来る？!化け物どもがそこら中を走り回ってるってのに、FACは何を待ってるんだ！`
    },
    {
      type: `dialogue`,
      position: `left`,
      name: `警備責任者`,
      text: `あの女は上庭から出てきたんだろ？!どんな身分だろうが、身元不明だろうが、この邸宅で死なせるわけにはいかない！`
    },

    {
      type: `dialogue`,
      position: `left`,
      name: `治安官`,
      text: `長官!敵影が監視網から消えました、まさか――`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/severo1.png`,
      name: `？？`,
      text: `しーっ……力を抜いて。痛くないから……`,
      voice: [
        { label: '中', path: 'wav/CN/conversation0/vo_event_10000_14.wav' },
      ]
    },
    {
      type: `dialogue`,
      position: `left`,
      name: `治安官`,
      text: `能力者？!ああああっ――！！`
    },
    {
      type: `narration`,
      text: `（通信端末の向こうから物音が消える。ほどなくして、三人目の声が通信に割り込んだ。）`
    },
    {
      type: `dialogue`,
      position: `right`,
      name: `？？`,
      text: `……識別番号05257885……`
    },
    {
      type: `dialogue`,
      position: `left`,
      name: `警備責任者`,
      text: `今度は誰だ？！`
    },
    {
      type: `dialogue`,
      position: `right`,
      name: `？？`,
      text: `……FAC反狂厄作戦部隊・特別ユニット。通信接続を要請する。`
    },
    {
      type: `dialogue`,
      position: `left`,
      name: `警備責任者`,
      text: `FAC？`
    },
    {
      type: `dialogue`,
      position: `left`,
      name: `警備責任者`,
      text: `よかった、ようやく来たか!総員何人だ、早くしろ、もうこっちは持たない！`
    },
    {
      type: `dialogue`,
      position: `right`,
      name: `？？`,
      text: `すでに現場へ到着。支援人員は……`
    },
    {
      type: `dialogue`,
      position: `right`,
      name: `？？`,
      text: `一名。`
    },
    {
      type: `dialogue`,
      position: `left`,
      name: `警備責任者`,
      text: `なんだと?一人だと?現場がどれだけ――`
    },
    {
      type: `narration`,
      text: `ガンッ――！！`
    },
    {
      type: `narration`,
      text: `女は片手で巨大な盾を持ち上げ、力任せに地面へ叩きつけた。その轟音に、通信の向こうで取り乱していた男が息を呑む。\n\n彼女は盾を支えに、ゆっくりと立ち上がった。`
    },
    {
      type: `narration`,
      text: `黒雲が街を覆い、豪雨が迫る。\nそして、その幕開けを飾るのは――\n\nただ数人の哀れな人間による、滑稽な物語にすぎない。`
    },
  ]
};