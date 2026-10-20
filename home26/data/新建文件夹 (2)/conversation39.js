export default {
  meta: {
    title: `「迷宮」`,
    bgm: `mp3/bg/终末.mp3`,
    summary: `FACが厳重な封鎖線を張ったにも関わらず、BR-002の汚染は依然として強く、ますます活発になり、外部に奇妙な迷宮を形成した。`
  },
  infoPanel: {
    glossary: [
      {
        term: `FAC`,
        desc: `黒環対策を専門とする軍事組織。防衛線の構築と封鎖戦役を主導する。`
      },
      {
        term: `黒環 / BR-002`,
        desc: `受骸者ユリアンと融合した第二黒環。拡張を抑えられながらも汚染を外部へ溢れさせ、巨大な迷宮状の汚染帯を形成している。`
      },
      {
        term: `福音地`,
        desc: `狂厄勢力の拠点。新たな術式を用いてBR-002内部へ汚染を送り込み、防衛線突破を試みている。`
      },
      {
        term: `上庭`,
        desc: `人類文明の最高統治機関。専属部隊を派遣し局長の行方を捜索している。`
      },
      {
        term: `錆火`,
        desc: `ユリアンが指導していた組織。流民寨などの仕掛け・迷宮を得意とする。`
      },
      {
        term: `MBCC`,
        desc: `禁閉者管理に関わる機関。局長は002骸との激戦中に行方不明となった。`
      }
    ],
    characters: [
      {
        avatar: `img/dh/hecate.png`,
      name: `ヘカテー`,
        avatar: `img/dh/.png`,
        note: `局長を探しに来た少女。`,
        basicStats: `局長の行方を追ってFAC哨所へ潜入。初めて聞く信頼できる情報に安堵する。`,
        profile: `危険度：不明
        出身：不明
        能力：不明`
      },
      {
        name: `サンジ`,
        avatar: `img/dh/.png`,
        note: `老人。ヘカテを導く。`,
        basicStats: `ドナルドから得た情報を頼りに巡回を避け、封鎖壁の亀裂から迷宮へ侵入する計画を立てる。`,
        profile: `危険度：不明
        出身：不明
        能力：不明`
      },
      {
        avatar: `img/dh/don3.png`,
      name: `ドナルド`,
        avatar: `img/dh/don_bkp.png`,
        note: `執行委員会所属。錆火の元関係者。`,
        basicStats: `芝居がかった狂人を装いながら情報を引き出し、迷宮攻略の道案内役を引き受ける。`,
        profile: `危険度：不明
        出身：不明
        能力：特殊能力なし`
      },
      {
        name: `FAC責任者`,
        avatar: `img/dh/.png`,
        note: `拠点の責任者。`,
        basicStats: `BR-002の異常特性と迷宮の脅威を説明し、ドナルドに協力を求める。`,
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
      text: `ヘカテはFAC哨所の死角に身を潜めていた。サンジは小型通信機の前でじっと待機している。しばらくして、向こう側から電波音が走り、やがてドナルドの声が聞こえてきた。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/don3.png`,
      name: `ドナルド`,
      text: `ふぅ――気持ちいい。さっきは逃げるのに必死で、すっかり我慢してた。`,
      note: `電子音`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/don3.png`,
      name: `ドナルド`,
      text: `FACの基地の中に入るのは初めてだ。壮観なのは壮観だけど、トイレくらいもう少しどうにかならないのか。執行委員会と比べると、設備がちょっと簡素だな。`,
      note: `電子音`
    },
    {
      type: `dialogue`,
      position: `left`,
      name: `FAC責任者`,
      text: `お恥ずかしい限りです。黒環対策には設備が必要以上に食われますので、予算が足りません。どうぞいつでも我々の仕事をご指導ください。`,
      note: `電子音`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/don3.png`,
      name: `ドナルド`,
      text: `いやいや、そんな。こっちこそ勉強させてもらいたくて来たんだ。まずは黒環のデータでも見せてもらおうか。`,
      note: `電子音`
    },
    {
      type: `dialogue`,
      position: `left`,
      name: `FAC責任者`,
      text: `もちろんです。こちらへどうぞ。`,
      note: `電子音`
    },
    {
      type: `narration`,
      text: `正規のFAC兵士を相手にしていると、ドナルドは本当に芝居がかった狂人にしか見えない。
だが、そのおかげでトイレに隠されていた通信機も無事に回収できた。
この通信機は、目の前の老人が伝手を使って基地建設隊に紛れ込み、8月の戦役の時点ですでに密かに埋め込んでおいたものだった。それがあったからこそ、その後FACが敷いた極めて厳重な保安検査もすり抜けることができた。`
    },
    {
      type: `narration`,
      text: `薄暗い作戦報告室では、拠点責任者がドナルドに複雑なグラフを次々と見せていた。理解できないのではないかと気を遣っているのか、ひとつひとつ丁寧に説明していく。`
    },
    {
      type: `dialogue`,
      position: `left`,
      name: `FAC責任者`,
      text: `104年、里湾W-31鉱坑で発生したBR-002と極めて高い一致を示しています。3月中旬にMBCC局長から送られた流民寨黒環危機対応報告と照合した結果、同一の受骸者、つまり同一の黒環が再び蘇ったものと断定できます。`
    },
    {
      type: `dialogue`,
      position: `left`,
      name: `FAC責任者`,
      text: `104年の個体は、鉱坑内部に存在した集団意識によって活性化し、誕生した受骸者でした。しかし撃破された後、113年に再び現れた環核には変化が生じています。002骸は錆火の指導者ユリアンと融合し、より強力な新たな統合型の受骸者となりました。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/don3.png`,
      name: `ドナルド`,
      text: `うんうん。じゃあ、我らが偉大なる上庭はどう通達していたかな――`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/don3.png`,
      name: `ドナルド`,
      text: `「ユリアンは禁閉者ではない。だが福音地の人間が彼に何をしたのか。その結果、彼は黒環となった。あるいは9年前、錆火の集団意識を繋ぎ止める錨となった」`
    },
    {
      type: `dialogue`,
      position: `left`,
      name: `FAC責任者`,
      text: `その通りです。第二黒環が初めて出現した時点ですでに甚大な危険性が確認されていました。当時は鎮圧に成功したと考えられていましたが、後から判明したところによれば、002受骸者は死んでいなかったばかりか、強力な隠匿能力まで獲得しており、その所在を確認できる者は誰一人としていませんでした。`
    },
    {
      type: `dialogue`,
      position: `left`,
      name: `FAC責任者`,
      text: `そして今年、3月中旬の流民寨における狂厄危機、月末の西区における錆火の暴動、さらに暴動中に枷鎖が異常拡散したことが重なり、BR-002が再び爆発的に活性化した時点で、その実際の規模はあらゆる二次黒環を遥かに上回っていました。`
    },
    {
      type: `dialogue`,
      position: `left`,
      name: `FAC責任者`,
      text: `大量の枷鎖保持者が瞬時に死役へと変貌し、狂厄は西区全域へ急速に拡散しました。錆河隔離帯が間に合って強化されていなければ、城邦全体が脅威にさらされていたでしょう。だからこそFACはあらゆる犠牲を払って8月の封鎖戦役を推し進め、この防衛線を築きました。`
    },
    {
      type: `dialogue`,
      position: `left`,
      name: `FAC責任者`,
      text: `しかし防衛線の完成後、観測データからは第二黒環に多くの説明不能な異常特性が存在することが確認されました。最も顕著なのは、観測M値が最も高い黒環でありながら、BR-002本体は一度も拡張していないことです。あれは――`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/don3.png`,
      name: `ドナルド`,
      text: `はいはい、そこまでは全部知ってる。妙な黒環ってことだろう。いったい何に制限されていて、そして誰が人類に貴重な時間を稼いでくれているのか。`
    },
    {
      type: `dialogue`,
      position: `left`,
      name: `FAC責任者`,
      text: `その通りです。暴動の中で行方不明となったMBCC局長が、命懸けで我々に残してくれた機会です。`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/hecate.png`,
      name: `ヘカテー`,
      text: `！`
    },
    {
      type: `dialogue`,
      position: `left`,
      name: `FAC責任者`,
      text: `上庭に残された数少ない観測報告によれば、局長は002骸との激戦中、骸に枷鎖を接続しようと試みたとあります。追跡や位置特定を可能にするためだったのかもしれません。`,
      note: `電子音`
    },
    {
      type: `dialogue`,
      position: `left`,
      name: `FAC責任者`,
      text: `その後、局長は暴動者の襲撃を受け、行方不明となりました。枷鎖は奪われ、002骸が暴動者たちを逆方向から汚染するための道具となりました――しかし同時に、それは黒環の拡張を必死に抑え続けてもいます。`
    },
    {
      type: `dialogue`,
      position: `left`,
      name: `FAC責任者`,
      text: `我々は、局長が今も戦い続けていると信じたい。彼を見つけ出すか、あるいは受骸者を抑制して彼の意識を取り戻すことができれば、我々にはこの黒環に勝てる可能性があります。`
    },
    {
      type: `narration`,
      text: `ヘカテの身体がわずかに震えた。`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/hecate.png`,
      name: `ヘカテー`,
      text: `……そう。局長はまだ戦っている。`
    },
    {
      type: `narration`,
      text: `彼女はこれまで、局長の行方について数え切れないほどの噂を聞いてきた。
生きている。死んだ。怪物になった。上庭から逃げた――。
荒唐無稽で、疑わしく、何かしらの思惑があるものばかりだった。
FACの口から語られた、これが初めて聞く本当に信頼できる情報だった。
それがどれほど彼女を安心させたことか。`
    },
    {
      type: `narration`,
      text: `ドナルドは満足そうに拍手した。
伝えるべきことは、もう伝わった。あの子の気持ちが少しでも楽になればいい。
さて、本題に入ろう。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/don3.png`,
      name: `ドナルド`,
      text: `それで、今になって俺を呼んだってことは、状況が変わったのか。`
    },
    {
      type: `narration`,
      text: `責任者が頷く。`
    },
    {
      type: `dialogue`,
      position: `left`,
      name: `FAC責任者`,
      text: `BR-002が制限を突破しようとしています。11月に入ってから汚染放射が急速に増加しています。本体そのものの境界が制限されている一方で、大量の汚染が外部へ溢れ出し、巨大な汚染帯を形成しています。現在では、防衛線の内側からわずか300メートル足らずの地点まで拡張しています。`
    },
    {
      type: `narration`,
      text: `ドナルドはM値のグラフに目を向けた。
確かに黒環の周囲には、高濃度汚染による輪状の帯が形成されている。その一部の座標では、数値が明らかに異常を示していた。`
    },
    {
      type: `dialogue`,
      position: `left`,
      name: `FAC責任者`,
      text: `福音地が新たな突破口を得ました。第九機関の諜報員たちが命懸けで持ち帰った情報によれば、狂厄勢力の一人が新たな術式を掌握したようです。11月に起動して以来、BR-002の内部へ狂厄汚染を絶え間なく送り込んでいます。`
    },
    {
      type: `dialogue`,
      position: `left`,
      name: `FAC責任者`,
      text: `さらに悪質なのは、福音地がFACの防衛線を突破できないため、感染者を利用して基地へ突撃させ、突破口を開こうとしていることです。すでに封鎖圏内部への潜入に成功し、BR-002に対する制限を引き裂くための術式を内部に仕掛けている可能性が高い。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/don3.png`,
      name: `ドナルド`,
      text: `なるほど。やっぱり宿敵同士の全面対決ってわけか。このシンジケートは本当に戦場として都合がいいな。`
    },
    {
      type: `dialogue`,
      position: `left`,
      name: `FAC責任者`,
      text: `だからこそ、一刻も早く勝利して西区への被害を止めなければなりません。今回の特別作戦は、封鎖圏内へ侵入して術者を捜索し、彼と彼が設置した狂厄術式をすべて排除することが目的です。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/don3.png`,
      name: `ドナルド`,
      text: `じゃあ、そのまま入ればいいだけだろう。俺を呼んだ意味は何だ。まさか、俺があいつらと斬り合えると思ってるわけじゃないよな。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/don3.png`,
      name: `ドナルド`,
      text: `俺、弱いんだよ。特殊能力なんて一つもない。兄貴、俺のこと守ってくれよ。`
    },
    {
      type: `narration`,
      text: `傍らの文官が奇妙な目で彼を一瞥したが、何も言わなかった。
責任者はそのまま続ける。`
    },
    {
      type: `dialogue`,
      position: `left`,
      name: `FAC責任者`,
      text: `もちろんFACが最前線に立ち、あらゆる脅威を排除します。問題は、我々が敵を迅速に発見し、向かうべき戦場へ到達できるかどうかです。`
    },
    {
      type: `dialogue`,
      position: `left`,
      name: `FAC責任者`,
      text: `こちらの画像をご覧ください。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/don3.png`,
      name: `ドナルド`,
      text: `これは何だ。黒環の中か。`
    },
    {
      type: `dialogue`,
      position: `left`,
      name: `FAC責任者`,
      text: `黒環内部へ侵入する代償は大きい。現時点では、内部への侵入命令も下りていません。これは環外の汚染帯で撮影されたものです。溢れ出した狂厄汚染が具象化した存在です。`
    },
    {
      type: `dialogue`,
      position: `left`,
      name: `FAC責任者`,
      text: `これまでとは違い、これらの汚染体には極めて複雑な経路と構造が存在しています。中には仕掛けのようなものまで確認されており、さらに大量の死役が潜んでいます。`
    },
    {
      type: `dialogue`,
      position: `left`,
      name: `FAC責任者`,
      text: `――そう、絶えず成長を続ける巨大な迷宮のようなものです。侵入者を阻み、第二黒環を守っています。`
    },
    {
      type: `dialogue`,
      position: `left`,
      name: `FAC責任者`,
      text: `そして、以前あなたがおっしゃっていたことを思い出しました。錆火の指導者ユリアンは受骸する以前、優れた建築家だった。仕掛けや迷宮を得意とし、流民寨も彼の作品だったと。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/don3.png`,
      name: `ドナルド`,
      text: `……ああ。俺はこの仕掛けを知っている。迷宮も道も、全部あいつの設計で、あいつ自身の個性そのものだ。これまでずっと錆火が生き延びるための砦だった。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/don3.png`,
      name: `ドナルド`,
      text: `だから俺を呼んだんだな。
錆火を知り尽くしていて、そのうえ建築家の迷宮を攻略するための道案内ができる人間が必要だから。`
    },
    {
      type: `narration`,
      text: `ドナルドは周囲を見回した。
そこにいる全員が、同時に彼を見つめていた。`
    },
    {
      type: `dialogue`,
      position: `left`,
      name: `FAC責任者`,
      text: `その通りです。BR-002内部は現在も急速に膨張しています。MBCCからも警告が届いており、局長から枷鎖を授けられた禁閉者たちの体内で、汚染値が異常な速度で上昇しています。`
    },
    {
      type: `dialogue`,
      position: `left`,
      name: `FAC責任者`,
      text: `――枷鎖が弱まり、BR-002、あるいは受骸者ユリアンの力が絶えず増大している。それに伴って迷宮も拡張し、環外で活動する死役の数も増えています。いずれ、それらは外へ溢れ出すでしょう。`
    },
    {
      type: `dialogue`,
      position: `left`,
      name: `FAC責任者`,
      text: `西区には、二度目の衝撃に耐える余力がありません。`
    },
    {
      type: `dialogue`,
      position: `left`,
      name: `FAC責任者`,
      text: `現在、城邦はすでに行動を開始しています。第九機関は犠牲を払って情報を手に入れました。FACはその情報を引き継ぎ、迷宮へ侵入して敵を排除し、汚染の拡大を阻止します。そして上庭も専属部隊を派遣し、局長の行方を捜索しています。`
    },
    {
      type: `dialogue`,
      position: `left`,
      name: `FAC責任者`,
      text: `錆火がどのような目的を抱いていたとしても、9年が経った今、それとその「指導者」はすでに西区にとって現実的な脅威となっています。`
    },
    {
      type: `dialogue`,
      position: `left`,
      name: `FAC責任者`,
      text: `どうか我々に協力してください。正しいことをするために。`
    },
    {
      type: `narration`,
      text: `ドナルドは話を聞きながら、頷いた。
そして肩をすくめる。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/don3.png`,
      name: `ドナルド`,
      text: `いやあ、俺は別に何の抵抗もない。実を言えば、俺は錆火の裏切り者なんだ。昔から言うだろう。時勢を見極める者こそ俊傑って。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/don3.png`,
      name: `ドナルド`,
      text: `俺が執行委員会に就任してからというもの、流民寨を叩く時はいつも俺が案内役だった。仕掛けだの迷宮だの、そんなものは何の問題もない。喜んでお手伝いさせてもらうよ。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/don3.png`,
      name: `ドナルド`,
      text: `ただ、一つだけまだ腑に落ちないことがある。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/don3.png`,
      name: `ドナルド`,
      text: `第九機関は福音地を追い、FACは黒環を守り、上庭まで外へ出て枷鎖を探している。
どう見ても、これは悪の勢力を相手にした総力戦だ。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/don3.png`,
      name: `ドナルド`,
      text: `なのに、我らが親愛なる執行委員会は何をしている。
人口統計、管理、再配置……。
どうしてどれもこれも、重要そうに見えないくせにやたらと手間のかかる仕事ばかりなんだ。`
    },
    {
      type: `narration`,
      text: `彼は目の前の拠点責任者へ視線を向けた。
しかし、その目の端は同時にその場にいる全員を捉え、一人ひとりの些細な表情の変化を見逃さなかった。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/don3.png`,
      name: `ドナルド`,
      text: `俺は上庭の決定を信じている。今回の配置にも、きっと何か深い意味があるんだろう。あなたは何か知っているのか。`
    },
    {
      type: `dialogue`,
      position: `left`,
      name: `FAC責任者`,
      text: `おっしゃっている意味が分かりません。執行委員会の事情について、我々は把握していません。FACの目的は黒環を鎮圧し、城邦を守ることだけです。`
    },
    {
      type: `dialogue`,
      position: `left`,
      name: `FAC責任者`,
      text: `上庭の決定について知りたいのであれば、あなたのほうが彼らに近いのではありませんか。
昨年、あなたが執行委員会へ異動できたのも、上庭の大物の一人から直接保証を受けたからかもしれません。`
    },
    {
      type: `dialogue`,
      position: `left`,
      name: `FAC責任者`,
      text: `「執行人-X」、でしたか。`
    },
    {
      type: `narration`,
      text: `ドナルドの顔に陰鬱な影が走った。だが、それはほんの一瞬だった。次の瞬間、彼は突然顔を上げ、狂ったような笑い声を上げた。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/don3.png`,
      name: `ドナルド`,
      text: `ははははは、何が執行人だ、掃き溜めだ、ABCDEFだ。俺、自分の後ろ盾がそんなに強かったなんて知らなかったよ。上庭のお偉いさんが俺を守ってくれてるのか。そいつは心強い。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/don3.png`,
      name: `ドナルド`,
      text: `じゃあ出発しよう。皆さん、どうか俺のことをしっかり守ってくれよ。`
    },
    {
      type: `narration`,
      text: `彼は襟を軽く整えると、いかにも尊大な態度で報告室を出ていった。
その際、わざと小さな鼻歌を聞かせることも忘れなかった。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/don3.png`,
      name: `ドナルド`,
      text: `ふふん。`,
      note: `電子音`
    },
    {
      type: `narration`,
      text: `サンジは意識を集中してそれを聞いていた。
暗号だ。`
    },
    {
      type: `dialogue`,
      position: `left`,
      name: `サンジ`,
      text: `……経路を確認した。ヘカテ、来い。`
    },
    {
      type: `narration`,
      text: `老人はヘカテを死角へ連れていった。
ドナルドから得た情報を頼りに巡回を避け、封鎖壁の角まで進む。そこからさらに盲点となっている場所を探り当て、覆いを取り除くと、亀裂が現れた。
サンジが先に身体を横向きにして中へ入る。
ヘカテはすぐには続かなかった。`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/hecate.png`,
      name: `ヘカテー`,
      text: `私は局長を探しに来た。FACの作戦に参加して、何の役に立つ。局長はどこにいる。`
    },
    {
      type: `dialogue`,
      position: `left`,
      name: `サンジ`,
      text: `……あの局長がどこにいるにせよ、大量の汚染に侵食されて目を覚ませない状態にある。彼を救うには、狂厄を外へ誘導しなければならない。`
    },
    {
      type: `dialogue`,
      position: `left`,
      name: `サンジ`,
      text: `それができる技術を持っているのは福音地だけだ。その技術の使い手は、この迷宮の中にいる。`
    },
    {
      type: `dialogue`,
      position: `left`,
      name: `サンジ`,
      text: `ドナルドがFACを敵との戦闘に向かわせ、その間に我々の仲間が必要なものを盗み出してくれる。`
    },
    {
      type: `dialogue`,
      position: `left`,
      name: `サンジ`,
      text: `お前と俺の仕事は、約束した場所へ向かって「物品」を受け取り、戦闘を避け、誰にも気づかれずにそれを持ってここを離れることだ。`
    },
    {
      type: `dialogue`,
      position: `left`,
      name: `サンジ`,
      text: `成功すれば、お前の局長は助かる。
そして、それだけが彼を救う方法だ。`
    },
    {
      type: `narration`,
      text: `サンジは数本の対狂厄注射剤を取り出し、ヘカテへ手渡した。`
    },
    {
      type: `dialogue`,
      position: `left`,
      name: `サンジ`,
      text: `持っていろ。迷宮内部の汚染は非常に深刻だ。あの人を救いたいなら、まず自分自身を守れ。`
    },
    {
      type: `dialogue`,
      position: `left`,
      name: `FAC責任者`,
      text: `では、封鎖圏に入った後は通常の通信が激しく妨害されます。ドナルドさん、我々からあまり離れないようにしてください。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/don3.png`,
      name: `ドナルド`,
      text: `任せてくれ。皆さんは思う存分突っ込んでくれ。俺は絶対に後ろに隠れて出てこないからな。`
    },
    {
      type: `narration`,
      text: `そう言いながら、彼は迷宮の小さな隅に身を縮め、空へ向けて数発撃った。
出発前、わざわざ服まで着替えていた。
本人曰く、ずっと格好いい格好で戦ってみたかったらしい。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/don3.png`,
      name: `ドナルド`,
      text: `突撃だ、大将ども。俺が道を教えてやる。突っ込め――！！`
    },
    {
      type: `narration`,
      text: `結局のところ、やっていることは狐の威を借る虎そのものだった。`
    }
  ]
};