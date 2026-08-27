export default {
  meta: {
    title: `「[雨]夜」`,
    bgm: `mp3/bg/rainy_night.mp3`,
    summary: `BR-002の再発生から百日余り。不穏な豪雨の夜、エリカ邸への襲撃を阻止するため、巨大な盾を携えたFAC特別ユニットが一人、現場へと降り立つ。`
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
        name: `警備責任者`,
        avatar: `img/dh/guard_leader.png`,
        note: `エリカ邸の警備責任者。`,
        basicStats: `突如発生した能力者による襲撃事件にパニックに陥り、MBCCやFACの支援を必死に要請する。`,
        profile: `所属：エリカ邸警備部\n立場：指揮官`
      },
      {
        name: `治安官`,
        avatar: `img/dh/officer.png`,
        note: `現場で警戒にあたる治安局員。`,
        basicStats: `異能戦闘の痕跡を発見し危機を察知するが、暗闇より現れた襲撃者によって排除される。`,
        profile: `所属：ニューシティ治安局`
      },
      {
        name: `？？｜襲撃者`,
        avatar: `img/dh/assassin.png`,
        note: `エリカ邸を襲撃した暗殺者。`,
        basicStats: `「しーっ……力を抜いて。痛くないから……」<br>
        音もなく警備網を突破し、冷酷に標的を暗殺していく能力者。`,
        profile: `危険度：不明\n能力：隠密・暗殺`
      },
      {
        name: `？？｜FAC特別ユニット`,
        avatar: `img/dh/rahu.png`,
        note: `FAC反狂厄作戦部隊所属の隊員。`,
        basicStats: `識別番号05257885。片手で巨大な盾を扱い、単独で襲撃現場の制圧に現れる強靭な女性。`,
        profile: `所属：FAC\n能力：盾防・重装戦闘`
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
      text: `警報！　警戒線が突破された！　護衛対象が襲われた、犯人はまだ近くにいる！\n\n全員、邸宅を封鎖しろ！　これ以上、襲撃者をあの別荘に一歩も踏み込ませるな！　踏み込んだ奴は蜂の巣にしろ！`
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
      text: `なんだと？！\n\n……あの狂厄の化け物ども……あいつら……化け物め……\n\nMBCCを呼べ！！　能力者の始末はあいつらの仕事だろうが！　どこにいるんだ？？？？`
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
      text: `だったら他を呼べよ、クソッ！　治安局でもFACでも第九機関でも何でもいい、全部呼びつけろ！！\n\nブルーレインはいつ来る？！　化け物どもがそこら中を走り回ってるってのに、FACは何を待ってるんだ！\n\nあの女は上庭から出てきたんだろ？！　どんな身分だろうが、身元不明だろうが、この邸宅で死なせるわけにはいかない！`
    },
    {
      type: `dialogue`,
      position: `left`,
      name: `治安官`,
      text: `長官！　敵影が監視網から消えました、まさか――`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/severo1.png`,
      name: `？？`,
      text: `しーっ……力を抜いて。痛くないから……`
    },
    {
      type: `dialogue`,
      position: `left`,
      name: `治安官`,
      text: `能力者？！　ああああっ――！！`
    },
    {
      type: `narration`,
      text: `（通信端末の向こうから物音が消える。ほどなくして、三人目の声が通信に割り込んだ。）`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/rahu.png`,
      name: `？？`,
      text: `……識別番号05257885……\n\n……0525……7885……`
    },
    {
      type: `dialogue`,
      position: `left`,
      name: `警備責任者`,
      text: `今度は誰だ？！`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/rahu.png`,
      name: `？？`,
      text: `……FAC反狂厄作戦部隊・特別ユニット。通信接続を要請する。`
    },
    {
      type: `dialogue`,
      position: `left`,
      name: `警備責任者`,
      text: `FAC？\n\nよかった、ようやく来たか！　総員何人だ、早くしろ、もうこっちは持たない！`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/rahu.png`,
      name: `？？`,
      text: `すでに現場へ到着。支援人員は……\n\n一名。`
    },
    {
      type: `dialogue`,
      position: `left`,
      name: `警備責任者`,
      text: `なんだと？　一人だと？　現場がどれだけ――`
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
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/rahu.png`,
      name: `？？`,
      text: `部下に伝えろ。巻き込まれたくなければ、退避しろ。`
    },
    {
      type: `narration`,
      text: `黒雲が街を覆い、豪雨が迫る。\nそして、その幕開けを飾るのは――\n\nただ数人の哀れな人間による、滑稽な物語にすぎない。`
    },
    {
      type: `narration`,
      text: `プロローグ「雨の夜」終了。\nTo be continued`,
      bubbleStyle: `end-void`
    }
  ]
};