export default {
  meta: {
    title: `flowers-301「西区作战」`,
    bgm: `mp3/bg/conversation12.mp3`,
    summary: `上庭の指示を受け、Xは手持ちの資源を総動員し、作戦計画を開始した。`
  },
  infoPanel: {
    glossary: [
      {
        term: `上庭 (Paradeisos)`,
        desc: `人类文明的最高统治机构，位于天空之上。`
      },
      {
        term: `単瞳の刻印`,
        desc: `福音地の数多く「██」の技術を操る「賢者」が特別に作り上げた邪悪で秘法儀式のような神秘的な術式で、用途は多岐にわたる。ウイルス本源と繋がっており、汚染を拡散することも、一時的に個人の力を増強することもできるが、人体に甚大なダメージを与える。わかりやすく説明すると、福音地技術のロゴのようなもので、その派手で大胆なやり方を象徴している。`
      }
    ],
    characters: [
      {
        name: `Leopold`,
        avatar: `img/dh-leopold.jpg`,
        note: `Garden的首领。虽然看似冷酷，实则在为部下寻找生路。`
      }
    ],
    synopsis: `工事中`,
    relatedLink: {
      text: `次章`,
      targetId: `conversation24`
    }
  },
  script: [
    {
      type: `narration`,
      text: `N.F.113年8月17日14:23<br>FAC黒環封鎖行動合同指揮部`
    },
    {
      type: `narration`,
      text: `黒石英はシャーロームをじっと見つめ、ゆっくりとその漆黒の体を開き、かつてFACの重装甲車を一撃で破壊した淡青色のコアを露わにした。静かに目の前の能力者をスキャンする。`
    },
    {
      type: `narration`,
      text: `San値変動、安全。感情変動、安全。各種生理指標、安定。思考活性度、高水準を維持。執行人状態、安定。`
    },
    {
      type: `narration`,
      text: `シャーロームは顔を上げず、微笑みながら手元の報告書をめくり、厳重な警戒スキャンをされるがままにし、温水を一口すすった。`
    },
    {
      type: `narration`,
      text: `この程度なら3級審査かな、からかうのもつまらないけど、今は誰かをからかう気分でもない。黒石英が再び閉じると、シャーロームは目を閉じ、チャンネルが開き、指令が届いた。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/edge_03.jpg`,
      name: `EDGE-03`,
      text: `FACの作戦計画がようやく通ったが、コストは依然として高すぎる。城邦内の各勢力は今回の西区作戦に不満を漏らしている。彼らをなだめるには代償が必要だ。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/edge_03.jpg`,
      name: `EDGE-03`,
      text: `上庭はもっと重要な目的のために彼らを支持し、すべて達成しなければならない。そのため、HUSH-Xの観測と方案は不可欠だ。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/edge_03.jpg`,
      name: `EDGE-03`,
      text: `要求は以下の通り：`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/edge_03.jpg`,
      name: `EDGE-03`,
      text: `1.内部のスパイの危険をすべて排除する方案を提供し、できる限り福音地の高級幹部を捕獲、福音地の真の入口を追跡する。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/edge_03.jpg`,
      name: `EDGE-03`,
      text: `2.防御帯の構築を確保し、防御網を厳密に監視。福音地の牧羊人が突破を試みたら、即座にその位置を特定し、どんな犠牲を払っても殲滅する。それが人類の最終的な勝利だ。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/edge_03.jpg`,
      name: `EDGE-03`,
      text: `3.BR-002の完全な制御を確保し、鎮圧する方案を見つける。目的の一つは福音地への打撃。もう一つは城邦経済の刺激。西区最大の黒環が新たな異方晶鉱山に変われば、涅槃グループの不満も減るだろう。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/edge_03.jpg`,
      name: `EDGE-03`,
      text: `1、2番はすでに手配済み。3番、新たな要求として、君が観測庭に戻り、狂厄層で動向を確認する必要がある。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/edge_04.jpg`,
      name: `EDGE-04`,
      text: `情勢があまりにも混乱している。西区は今、危険すぎるし、動揺が多すぎる。3月の当初の計画通り、直接浄化令を使うべきだった。02骸はSHP-13に併吞させ、我々のルールで一気に二つの脅威を浄化する。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/edge_04.jpg`,
      name: `EDGE-04`,
      text: `こんな風に巨額を投じて制御不能な黒環を作り出し、西区は依然として混沌のままだ。我々の毎歩は危うい。当時の方案変更はあまりにも過激だった。X、彼女が――`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/edge_02.jpg`,
      name: `EDGE-02`,
      text: `彼女はHUSHシステムの正確性を検証し、集団精神の観測と誘導を実現した。さらに、我々が長年達成できなかった最重要の目的――牧羊人を誘い出すことに成功した。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/edge_02.jpg`,
      name: `EDGE-02`,
      text: `02骸が黒環として固定化し、防御網の構築が成功すれば、我々はただ待つだけでいい。主導権は人類にある。牧羊人は必ず自分の獲物を吞噬しに来るし、必ずその姿を現す。その最終脅威を排除できれば、すべては正しい軌道に戻る。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/edge_02.jpg`,
      name: `EDGE-02`,
      text: `ここにいる全員が理性でこの点に同意し、彼女に実行を任せ、どんな代償も厭わなかった。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/edge_03.jpg`,
      name: `EDGE-03`,
      text: `賛同。方案変更が必要なら調整議程を起動すればいい。無意味な後悔は理性を腐らせるだけだ。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/edge_03.jpg`,
      name: `EDGE-03`,
      text: `現在の大型計画で唯一の想定外は、SHP-13を予定通り回収できず、知られざる勢力の手に落ちたことだ。今はまだ方案実行期間、Xに処理を任せればいい。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/edge_02.jpg`,
      name: `EDGE-02`,
      text: `よし、X、君に任せる。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/x.png`,
      name: `X`,
      text: `もちろん、FAC側の作戦手配はすでに同期済み。HUSH-Xは準備完了、1分後に観測に入り、BR-002の状態を確認する。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/x.png`,
      name: `X`,
      text: `要求はすべて実現する、いつものように。`
    },
    {
      type: `narration`,
      text: `N.F.113年8月19日0:00<br>FAC黒環封鎖行動合同指揮部`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/edge_07.jpg`,
      name: `EDGE-07`,
      text: `Xから得た観測データが膨大すぎて、研究院は一部しか分析できていない。進捗は遅いが――結果は衝撃的だ。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/edge_07.jpg`,
      name: `EDGE-07`,
      text: `BR-002の規模は予想をはるかに超え、急速に内側へ膨張している。史上最大の次生黒環で、その深さは想像を絶する。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/edge_03.jpg`,
      name: `EDGE-03`,
      text: `涅槃グループが緊急で作戦資金を追加し、執行委員会が積極的にFACのBR-002鎮圧に協力することを保証した。これは朗報だ。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/edge_04.jpg`,
      name: `EDGE-04`,
      text: `どうやって鎮圧する？BR-002の状態は過去のどの黒環とも異なる。今、我々にできるのは溢れる汚染を辛うじて封鎖することだけだ。福音地の動きも厳重に警戒しないと。彼らの牧羊人もこの巨大黒環を見逃さないだろう。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/edge_02.jpg`,
      name: `EDGE-02`,
      text: `……`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/edge_02.jpg`,
      name: `EDGE-02`,
      text: `我々にも牧羊人がいるじゃないか。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/edge_03.jpg`,
      name: `EDGE-03`,
      text: `4か月前に失踪したSHP-13のことか？`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/edge_02.jpg`,
      name: `EDGE-02`,
      text: `Xの観測データは十分に透明だ。少なくとも彼が生きていること、BR-002と「枷鎖」が結びつき、ますまで緊密になっていることは確認できる。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/edge_02.jpg`,
      name: `EDGE-02`,
      text: `牧羊人がどれほど強力でも、上庭が先にSHP-13を見つければ、人類が一歩先に立てる。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/edge_07.jpg`,
      name: `EDGE-07`,
      text: `だが、彼はまだ信頼できるのか？過去の観測で、SHP-13の枷鎖があまりにも多くの骸体を吞噬していることが証明された。それは彼の本能だ。そしてその容量は歴史的限界に近づいている。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/edge_07.jpg`,
      name: `EDGE-07`,
      text: `02骸との接触過程で、彼の体内防御ルールが2回も吞噬プロセスを阻害した。これはリスクが我々の限界を超えつつある証拠だ。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/edge_07.jpg`,
      name: `EDGE-07`,
      text: `今、彼は02骸と繋がり、さらに成長し続ける巨大黒環とも繋がっている。強すぎる狂厄は我々が設定したすべての保険を徐々に崩壊させている。彼を信頼できるとは思えない。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/edge_03.jpg`,
      name: `EDGE-03`,
      text: `私がもっと心配なのは、彼を盗んだのがどの勢力かだ。福音地か？`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/edge_03.jpg`,
      name: `EDGE-03`,
      text: `たとえ最弱の残次品でも、彼は我々の制御を遥かに超える。ましてや以前は――`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/edge_02.jpg`,
      name: `EDGE-02`,
      text: `問題ない。Xが彼を見つける。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/edge_02.jpg`,
      name: `EDGE-02`,
      text: `保険が緩んだなら、補強すればいい。予想外の危険な行動を起こしたら、即座に排除すればいい。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/edge_02.jpg`,
      name: `EDGE-02`,
      text: `上庭のルールは彼らに絶対的に有効だ。それはすでに検証済み。彼が我々の掌控に戻れば、狂厄は我々の設定した「ルール」を崩せない。彼は使える。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/edge_03.jpg`,
      name: `EDGE-03`,
      text: `……「使える」。今後、我々はまだ彼を使うのか？`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/edge_03.jpg`,
      name: `EDGE-03`,
      text: `客観的リスクを無視しても、彼の主観的意志はすでに脱線しつつある。危険すぎる。全員一致で彼をもう使わないと決めたはずだ。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/edge_02.jpg`,
      name: `EDGE-02`,
      text: `使い方を変えるだけだ。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/edge_02.jpg`,
      name: `EDGE-02`,
      text: `SHP-13はほぼ確実に狂厄深層に閉じ込められている。彼を見つけ、だが覚醒させる必要はない。この状態を維持しろ。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/edge_02.jpg`,
      name: `EDGE-02`,
      text: `牧羊人に02骸を吞噬させれば、02骸を通じて同時にSHP-13も吞噬する。FACが構築した防御網は3者の融合のタイミングを確認できる。その時――`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/edge_02.jpg`,
      name: `EDGE-02`,
      text: `その瞬間を捉え、SHP-13にルールを解放する。3つの脅威を同時に破壊できなくても、牧羊人を重傷させ、少なくともその位置を特定できれば、それが我々の勝利だ。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/edge_07.jpg`,
      name: `EDGE-07`,
      text: `だろ、X？`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/edge_02.jpg`,
      name: `EDGE-02`,
      text: `方法さえ正しければ、危険品も最も有用な道具になる。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/x.png`,
      name: `X`,
      text: `申し訳ありません、子猫が一匹潜り込んだので、今追い出したところです。すぐに履歴を確認します。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/edge_02.jpg`,
      name: `EDGE-02`,
      text: `調子がいいらしいわね。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/x.png`,
      name: `X`,
      text: `ええ、計画が順調に進んでいることを嬉しく思っています。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/x.png`,
      name: `X`,
      text: `次は、FACの正面支援に加えて、私の本当の仕事はSHP-13の奪還ですね。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/edge_02.jpg`,
      name: `EDGE-02`,
      text: `その通り。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/x.png`,
      name: `X`,
      text: `いいでしょう。この可能性は予想済みで、方案もすでにあります。ちょうど今私が扱っていることと少し関連が……`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/edge_02.jpg`,
      name: `EDGE-02`,
      text: `「Garden」？`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/x.png`,
      name: `X`,
      text: `ええ、連中に狙われているのです。逃げられない以上、利用するまでです。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/x.png`,
      name: `X`,
      text: `でなければ、福音地が暗殺者どもにSHP-13の捕獲命令を出し、我々が出遅れる可能性もありますから。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/edge_02.jpg`,
      name: `EDGE-02`,
      text: `君に任せれば安心ね。大変な任務だけど、使用期限を延長する必要は？`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/x.png`,
      name: `X`,
      text: `結構です。最も重要なのはリスク管理ですから。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/x.png`,
      name: `X`,
      text: `私は長く観測してきて、侵蝕されるリスクが限界に達しています。期限になれば交代すべきでしょう。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/x.png`,
      name: `X`,
      text: `戦争が始まろうとする今、より安定した候補者にHUSHシステムに引き継ぎ、戦略的一貫性を維持した方がいいと思います。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/x.png`,
      name: `X`,
      text: `ご安心ください。いつものように、あなたたちの望みに全て応えましょう。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/edge_02.jpg`,
      name: `EDGE-02`,
      text: `ええ、頼んだわ。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/edge_02.jpg`,
      name: `EDGE-02`,
      text: `最も効率的で頼りがいのある執行人として、君が我々の信頼を裏切ったことは一度もないものね。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/x.png`,
      name: `シャーローム`,
      text: `はい、既に実行しています。すぐに……`
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
    }
  ]
};
