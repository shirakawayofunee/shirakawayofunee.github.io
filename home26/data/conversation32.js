export default {
  meta: {
    title: `「[後]日談」`,
    bgm: `mp3/bg/终末路.mp3`,
    summary: `無数の「英雄」の名を冠した人々に囲まれながら、少女は夜明けの最初の光を迎えた。`
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
        name: `Chris｜探偵`,
        avatar: `img/dh/.png`,
        note: `19歳、能力者、警察学校の一年生。`,
        basicStats: `真相と正義を追いかける警察学校の1年生、ただいま絶賛指名手配されています。<br>
        二人のお姉さんに挟まれて過ごした、人生で一番忘れられない夏だった。
      `,
      profile: `危険度：A級
        出身：	NEW CITY
        誕生日：	9月15日
        身長：	172cm
        能力：	正義専心
`, 

      },
      {
        name: `『<ruby>薊<rt>アザミ</rt></ruby>』`,
        avatar: `img/dh/thistle3.jpg`,
        note: `19歳、能力者、「GARDEN」の殺し屋`,
        basicStats: `N.F.111年、为了复仇加入「GARDEN」的FAC遗孤。完成复仇后，将守护「GARDEN」视为新的生存意义，往后的日子里，磨练自己的力量不断成长，慢慢地成为了独当一面的人。
        
        103年、身为FAC的父亲死于月蝕作戦，走投无路的薊加入花园
        N.F.111年、
        作为殺し屋最想复仇的对象是连军人家属的抚恤金都要贪污的基金会。ニューシティ治安総局に逮捕・収容された後、探偵と協力して脱走した。`,
        profile: `危険度：A級
        出身：	NEW CITY
        誕生日：	10月21日
        身長：	170cm
        能力：	燃命火刃
`, 
      },

    ],
    synopsis: `工事中`
  },
  script: [
    {
      type: `narration`,
      text: `暁前のFAC記念園。ドイル探長に長編の感謝状を送り終えた後、探偵は予想外の人物と出会った。`
    },
    {
      type: `dialogue`,
      position: `right`,
      name: `ドイル`,
      text: `よくも俺に会いに来たもんだな！『Coquelicot』はどこだ？彼女こそ俺に感謝しに来るべきじゃないのか？`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/thistle3.jpg`,
      name: `『薊』`,
      text: `……相変わらず図々しいね、君って。`,
      voice: [
        { label: '中', path: 'wav/CN/conversation30/vo_event_11043_48.wav' },
        { label: '日', path: 'wav/CN/conversation30/vo_event_11043_22.wav' },
      ]
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/thistle3.jpg`,
      name: `『薊』`,
      text: `師匠は忙しいから、代わりに私が伝言を預かってきたよ。『正式採用された？ちゃんとやれてる？事件解決率はどれくらい？何人犯人捕まえた？まだ先輩の足引っ張ってる？』ってね。`
    },
    {
      type: `dialogue`,
      position: `right`,
      name: `ドイル`,
      text: `ゴホッゴホッ！やめろよ、ボロクソ言わないでくれ……今日は休日だ、今日は……事件解決しないぞ！`
    },
    {
      type: `dialogue`,
      position: `right`,
      name: `ドイル`,
      text: `妹が学校に復帰するんだ。休学が長すぎたから、戻ったらイジメられるんじゃないかって心配でさ。送っていかなきゃ。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/thistle3.jpg`,
      name: `『薊』`,
      text: `へえ——。後で私、師匠と一緒に<span>西区</span>に行くよ。『Garden』の仲間たちはみんなそっちに流れちゃったみたいだから。もう君には私たちを捕まえることも見つけることもできないよ。去る前に一言、言っとこうと思って。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/thistle3.jpg`,
      name: `『薊』`,
      text: `私の復讐は終わった。もう殺し屋である必要はない。これからは大好きな『Garden』に残って、ずっと守るよ。`
    },
    {
      type: `narration`,
      text: `彼女は花のような輝く笑顔を見せ、身を翻して最後の夜の闇に消えた。`
    },
    {
      type: `narration`,
      text: `探偵は静かな陵園に一人残された。雨はもうすぐ止みそうだった。`
    },
    {
      type: `narration`,
      text: `無数の「英雄」の名を冠した人々に囲まれながら、少女は夜明けの最初の光を迎えた。`
    },
    {
      type: `image`,
      src: `img/cg/fl_32.jpg`,
      bubbleStyle: "center",
    },
    {
      "type": "narration",
      "text": "第一章「繁花」終了。\nTo be continued",
      "bubbleStyle": "end-void" 
    },
  ]
};
