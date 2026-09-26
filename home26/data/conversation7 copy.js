export default {
  meta: {
    title: `「黒石英」`,
    bgm: `mp3/bg/conversation14.mp3`,
    summary: `襲撃の報せを受けたクリスティナは、シャーロームの元へ飛び込み、血のついた姿にパニックを起こす。だがそれは彼女の血ではなかった。`
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
        desc: `かつて地底で飼い慣らされていた能力者刺客の集団。現在は独立を宣言しているが、地底との繋がりが疑われている。`
      }
    ],
    characters: [
      {
        name: `SHALOM｜X`,
        name2: `シャーローム`,
        avatar: `img/dh/X104.png`,
        note: `「上庭」の七代目執行人`
      },
      {
        name: `Christina`,
        name2: `クリスティーナ`,
        avatar: `img/dh/zhentan104.png`,
        note: `19歳、能力者、警察学校の一年生。`,
        basicStats: `憧れの「<ruby>シャーローム<rt>上庭の執行人</rt></ruby>姉さん」に頼まれて、「GARDEN」が引き起こした連続殺人事件を調査中。
        ▍背景
      父は103年の「月蝕作戦」でFACとして殉職し、母も数年後に悲しみで亡くなった。
      104年に一人で上庭代表を暗殺した後、HUSH-Xに拾われたんだ。
      両親の戦友に育てられたけど、養父母も113年3月のBR-002二次勃発でFACとして命を落とした。`,
      },
      {
        name: `Black Quartz`,
        name2: `黒石英`,
        avatar: `img/dh/x.png`,
        note: `上庭関係者。シャーロームと作戦・情勢について協議する。`
      }
    ],
    /* synopsis: `工事中` */
  },
  script: [
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/x.png`,
      name: `黒石英`,
      text: `想定より時間がかかっているな。身体の状態も不安定だ。能力を使ったのか？`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/x.png`,
      name: `シャーローム`,
      text: `元々ニューシティに潜んでいた地底の勢力は、おそらく西区へと移動したわ。私たちを牽制するために残された手口はどれも雑で、情報にも抜けが多すぎる。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/x.png`,
      name: `シャーローム`,
      text: `最近の一連のくだらない襲撃は煙幕である可能性が高いわね。目的はふたつ考えられるわ。ひとつは、第9機関が西区で十分な圧力をかけているため、敵が生存スペースを確保せざるを得ないこと。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/x.png`,
      name: `シャーローム`,
      text: `もうひとつは、地底でさらに本格的な計画が進んでいて、私たちの気を逸らす必要があること。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/x.png`,
      name: `黒石英`,
      text: `では、西区に戻るのか？ FACが8月の大型作戦を立案中で、支援を求めている。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/x.png`,
      name: `シャーローム`,
      text: `今すぐ行くわ。手早く終わらせて、早く戻ってきたいもの。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/x.png`,
      name: `シャーローム`,
      text: `ここには、まだ私の興味を惹くものがあるの。`
    },
    {
      type: `narration`,
      text: `突然、大きな声が洋館の中に響き渡り、続いてすでに壊れていた扉が蹴り破られた。小柄な人影が猛スピードで飛び込んでくる。`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/zhentan7.png`,
      name: `？？`,
      text: `シャーロームお姉様——！！！`
    },
    {
      type: `narration`,
      text: `シャーロームは腰を強く抱きしめられた。`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/zhentan7.png`,
      name: `金髪の少女`,
      text: `襲撃されたって聞いたけど大丈夫！？ どこか痛む！？ いつどこでどのどいつがやったの！？ 動機は！？ 捕まえた！？`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/zhentan7.png`,
      name: `金髪の少女`,
      text: `きゃああ——！！ 胸から血がたくさん出てる！！`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/x.png`,
      name: `シャーローム`,
      text: `私は平気よ。名探偵、よく見てごらんなさい。これは私の血じゃないわ。`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/zhentan7.png`,
      name: `金髪の少女`,
      text: `……あ、あぁ、そっか。これだけの出血量じゃ、誰だって立っていられないよね。`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/zhentan7.png`,
      name: `金髪の少女`,
      text: `うあああ、また勘違いしちゃった。でも危険があるなら教えてよ！ あんなにたくさんの悪党に狙われてて、あいつらが手を出してくるって思うだけで頭が破裂しそうなの。もう絶対に傷つけさせないって誓ったんだから！`
    },
    {
      type: `narration`,
      text: `シャーロームは微笑み、金髪の少女の髪を優しく整えた。少女の瞳には心配の色が満ちていたが、優しく触れられた瞬間、隠しきれない喜びがこぼれ出た。彼女はシャーロームへの憧れを少しも隠そうとしない。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/x.png`,
      name: `シャーローム`,
      text: `クリス、これからとても重要で、とても困難な任務があるの。君の力が必要よ。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/x.png`,
      name: `シャーローム`,
      text: `私を助けてくれるかしら、名探偵？`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/zhentan7.png`,
      name: `クリスティナ`,
      text: `……もちろん。もちろん！！ 君が必要としてくれるなら！`
    },
    {
      type: `narration`,
      text: `シャーロームは微笑んだ。屋外でクラクションが鳴り、彼女は振り返って外へと歩き出す。雨はすでにやんでいたが、車の脇にいた人物はそれでも彼女にコートを羽織らせた。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/x.png`,
      name: `シャーローム`,
      text: `上庭に挑発を仕掛けている組織の名は「ガーデン」。かつて地底で飼い慣らされていた能力者刺客の集団よ。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/x.png`,
      name: `シャーローム`,
      text: `彼女たちが今、地底から脱出したのか、それともまだ繋がりを保っているのかは重要ではないわ。重要なのは、その中に必ず地底への入口を知る者がいるということ。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/x.png`,
      name: `シャーローム`,
      text: `首領を見つけ出すか、あるいは彼女が来るのを待つ準備をしなさい。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/x.png`,
      name: `シャーローム`,
      text: `自らを「業師」と名乗るコンヴィクトは、必ずやって来るわ。`
    },
  ]
};