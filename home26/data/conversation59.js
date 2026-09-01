export default {
  meta: {
    title: `弱者の戦い・Ⅰ`,
    bgm: `mp3/bg/weak_battle.mp3`,
    summary: `弱者は自らの戦いに立ち向かわなければならない。最善を尽くしても勝てないかもしれないが、幸い彼らは一人で戦っているわけではない。`
  },
  infoPanel: {
    glossary: [
      {
        term: `錨`,
        desc: `局長が枷を再定義した言葉。感情の絆として自分を繋ぎ止めるもの。汚染された枷を取り戻すための拠り所。`
      },
      {
        term: `清掃令`,
        desc: `上庭が発動を予定していたローカル・クリーンアップ令。ブラックリングの崩壊により意味を失い、中止が要請される。`
      },
      {
        term: `S-019 / S-098`,
        desc: `MBCC所属の行方不明コンビクト。ナイチンゲールが確認し、保護を指示する。`
      }
    ],
    characters: [
      {
        name: `局長`,
        avatar: `img/dh/director.png`,
        note: `自らの弱さを認める。`,
        basicStats: `混沌の中で多くの人々に助けられてきたことを振り返り、枷を「錨」と再定義する。`,
        profile: `能力：枷（錨）`
      },
      {
        name: `ヘカテー`,
        avatar: `img/dh/hecate.png`,
        note: `局長を励まし、戦場へ戻る。`,
        basicStats: `「弱くてもいい。今は私を助けてくれる人がいるし、私も誰かを助けられる。」`,
        profile: `能力：悪夢の具現化`
      },
      {
        name: `ナイチンゲール`,
        avatar: `img/dh/nightingale.png`,
        note: `MBCCの追跡部隊を率いる。`,
        basicStats: `ブラックリングの崩壊を報告し、清掃令の中止を要請する。`
      },
      {
        name: `ヘラ`,
        avatar: `img/dh/hela.png`,
        note: `戦場で守られる存在。`,
        basicStats: `「私たちはコンビクトだ。私たちには自分自身の心がある。」`
      },
      {
        name: `マティルダ`,
        avatar: `img/dh/matilda.png`,
        note: `局長を探すのを手伝っていた人物。`,
        basicStats: `カスロに再び助けを求める。`
      },
      {
        name: `カスロ`,
        avatar: `img/dh/caslo.png`,
        note: `辛迪加を好む人物。`,
        basicStats: `「こんなに辛迪加が好きになったのは久しぶりだ。」`
      }
    ],
    synopsis: `局長は意識の混沌の中で自らの弱さを認め、多くの人々に助けられてきたことを振り返る。ヘカテーは局長を励まし、感情の絆としての「錨」を確認し合う。現実の戦場ではナイチンゲールがブラックリングの崩壊を報告し、清掃令の中止を要請。ヘカテーは弱くてもいいと決意し、ヘラを守りながら局長を信じることを選ぶ。`
  },
  script: [
    {
      type: `narration`,
      text: `高塔ブラックリングA-13|13-17弱者の戦い`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/director.png`,
      name: `局長`,
      text: `意識を失っている間、何度も目を覚まそうとした。でも、どうしても目覚められなかった。あの世界はひどく混沌としていた。
狂厄の深淵には、私の想像を遥かに超える苦痛と困難が無数にあった。
善意から、必死にやった。それが間違いだったはずはない。それなのに、どうしてこんな滑稽な結末になったのか。
私のやり方が足りなかったのか。あまりにも無邪気で、無謀だったからか。十分な力も知恵もなかったからか。私が弱者だったからか。
それとも……私が命懸けで変えようとしてきた辛迪加そのものに、価値なんてなかったのか。人々はこうして堕落していくものなのか。私がやってきたことには何の意味もなくて、だからこんな結末を迎えるべきだったのか。`
    },
    {
      type: `narration`,
      text: `局長の眼差しが、この瞬間、冷たくなる。`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/director.png`,
      name: `局長`,
      text: `これこそが、本当の恐ろしい闇だった。一人ではそこから抜け出せなかった。その時になって初めて、自分が「人間」というものを何も知らなかったことに気づいた。
私も弱者なんだ。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/hecate.png`,
      name: `ヘカテー`,
      text: `……局長？`
    },
    {
      type: `narration`,
      text: `ヘカテーは初めて恐怖を覚え、局長の手を掴む。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/hecate.png`,
      name: `ヘカテー`,
      text: `局長は弱くなんかない。ずっと見てきた。局長はいつも全力で戦って、私たちを守ってくれた。
私が一番どうしようもなかった時も、局長のことを思えば力が湧いてきた。そんな局長が弱いはずがない。`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/director.png`,
      name: `局長`,
      text: `ありがとう。でも、弱くてもいいと思う。
弱いからこそ、たくさんの人に助けてもらえた。もう亡くなった人も、まだもがいている人も、覚えている人も、忘れてしまった人も……
ヘカテーにも、そういう人がいたんだろう？`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/hecate.png`,
      name: `ヘカテー`,
      text: `……うん。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/matilda.png`,
      name: `マティルダ`,
      text: `彼女はあなたたちに何かをさせたわけじゃない。あなたたちを全力で守ったのは、あの局長への恩返しだった。暴動の中からあなたたちを連れ戻した人もいる。あなたの局長を探すのを、ずっと手伝っていた人もいる。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/sangji.png`,
      name: `サンジ`,
      text: `一人で気をつけて、必ず生きて出るんだ。あなたにとって一番大切な人のところへ帰るんだ。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/hela.png`,
      name: `ヘラ`,
      text: `ずいぶん深い話だな。覚えておく。私たちはコンビクトだ。私たちには自分自身の心がある。その心こそが私たちの力だ。誰にも閉じ込めることなんてできない。`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/director.png`,
      name: `局長`,
      text: `あの人たちの中で、私はヘカテーの声をはっきり覚えている。あなたは枷を辿って私を探しに来た。誰かが力いっぱい私を押し出して、あなたはその反対側から、枷で私を引き上げてくれた。
ほら、私たちは同じなんだ。これが私たちの心だ。
もう、これを枷とは呼びたくない。私にとって何より大切な、感情の絆。私を繋ぎ止める錨だ。
だから、ヘカテーがあなたの気持ちを教えてくれたことも嬉しい。私もあなたの心に近づきたい。あなたに必要とされていることも嬉しい。
ごめん。今の私には、あなたの望みに応える力がない。枷は汚染され、私自身の力もない。まずは、それを取り戻さなければならない。信じてくれ。私ならできる。
その前に、あなたの力を借りたい。手を貸してくれるか？`
    },
    {
      type: `narration`,
      text: `ヘカテーは目を開き、再び現実へ戻る。この戦場へ戻ってくる。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/grieda.png`,
      name: `グリーダ`,
      text: `ウオオー!! 薬が来た! 薬が来た!!`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/sangji.png`,
      name: `サンジ`,
      text: `汚染がまだ強い。急いでみんなをここから離すんだ。`
    },
    {
      type: `narration`,
      text: `戦場の上空から、ヘリコプターの轟音が響く。見上げると、そこには見慣れた顔があった。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/hela.png`,
      name: `ヘラ`,
      text: `あなたたちは——？`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/nightingale.png`,
      name: `ナイチンゲール`,
      text: `行方不明となっていたMBCC所属コンビクトS-019、S-098を確認。追跡部隊は直ちに保護に向かう。私と一緒に来て。
指揮部、上庭に連絡——いや、FAC、第九機関、執行委員会の全部門に連絡。現場映像を同時共有。映像が妨害されたら、音声でも、M値の測定でもいい。何でもいいから共有して。
状況が変わった。ブラックリングは崩壊し始めている。清掃令に意味はない。直ちに中止するよう要請する。ここにはまだ戦っている人がいる。局長はまだ戦っている!!`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/matilda.png`,
      name: `マティルダ`,
      text: `カスロ、もう一度頼む。お願い——`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/caslo.png`,
      name: `カスロ`,
      text: `問題ない。喜んで引き受ける。
こんなに辛迪加が好きになったのは久しぶりだ。`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/director.png`,
      name: `局長`,
      text: `ヘラを守って、自分自身もしっかり守ってくれ。これは命令でも任務でもない。
君が私を必要としているように、私も君を必要としている。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/hecate.png`,
      name: `ヘカテー`,
      text: `私……もう怖がらない。
弱くてもいい。今は私を助けてくれる人がいるし、私も誰かを助けられる。これも全部、私の力。そして、あなたに近づいていくための力。
私を必要としてくれてありがとう、局長。ヘラは私たちにとって大切な人だから、私が守る。だからあなたも、思い切り戦って、自分の枷を無事に取り戻して。
あなたが私を信じてくれるように、私も……あなたを信じる。`
    }
  ]
};