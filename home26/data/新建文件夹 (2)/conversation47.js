export default {
  meta: {
    title: `「希望」`,
    bgm: `mp3/bg/终末.mp3`,
    summary: `汚染は徐々に悪化し、暴走した狂厄の影響を受け、ヘカテーは果てしない暗闇に包まれた。`
  },
  infoPanel: {
    glossary: [
      {
        term: `白い匣`,
        desc: `汚染を吸い込み苦痛を和らげる奇妙な匣。局長を救うための鍵としてヘカテーが抱えて走る。`
      },
      {
        term: `ナイトメア`,
        desc: `ヘカテーの護衛／分身的存在。子供たちを守るために残される。`
      },
      {
        term: `黒水晶`,
        desc: `上庭直属部隊を代表する浮遊体。罠に気づき撤退を命じる。`
      },
      {
        term: `ロマネスク記念碑`,
        desc: `流民寨底部にある場所。ヘカテーが局長を探す最終到達点。`
      }
    ],
    characters: [
      {
        name: `ヘカテー`,
        avatar: `img/dh/hekate.png`,
        note: `局長を探す少女。`,
        basicStats: `一人で白い匣を抱え、流亡者基地へ走り、子供たちを守り、地下道で局長を発見する。`,
        profile: `危険度：高（汚染進行中）
        出身：不明
        能力：不明`
      },
      {
        name: `サンギ`,
        avatar: `img/dh/sanji.png`,
        note: `重傷を負った老人。`,
        basicStats: `目を覚まし、ヘカテーが去った方向を見つめる。`,
        profile: `危険度：不明
        出身：不明
        能力：不明`
      },
      {
        name: `マチルダ`,
        avatar: `img/dh/matilda.png`,
        note: `元執行官。`,
        basicStats: `ヘカテーの汚染を懸念し、黒環爆発後の道を共に進む。`,
        profile: `危険度：不明
        出身：新城
        能力：不明`
      },
      {
        name: `黒水晶`,
        avatar: `img/dh/blackquartz.png`,
        note: `上庭直属部隊の代表。`,
        basicStats: `罠に気づき撤退を命じ、ヘカテーをガーデンの業師と見なす。`,
        profile: `危険度：高
        出身：上庭
        能力：不明`
      },
      {
        name: `コクリコ`,
        avatar: `img/dh/coquelicot.png`,
        note: `ガーデンの業師。`,
        basicStats: `上庭部隊に対し、局長への手出しを許さないと宣言する。`,
        profile: `危険度：高
        出身：不明
        能力：強力な戦闘力`
      }
    ],
    synopsis: `工事中`
  },
  script: [
    {
      type: `narration`,
      text: `高塔黒環A-1313-9　希望`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/fac.png`,
      name: `FAC責任者`,
      text: `負傷者と民間人の救助は完了した。封鎖圏内には、単独で戦闘を続けているコンビクトが一人いる。
情報は持ち帰った。全員、防衛線を強化。部隊を再編し、俺と一緒に中へ入って戦う。
それと、行方不明になっていたMBCCのコンビクトを発見した。治療が必要だ。管理局に連絡、すぐにだ。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/fac_soldier.png`,
      name: `FAC戦士`,
      text: `隊長！あの小さいコンビクトがいません！`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/fac.png`,
      name: `FAC責任者`,
      text: `何だと？`
    },
    {
      type: `narration`,
      text: `重傷を負った老人がようやく目を覚まし、ヘカテーが去っていった方向を苦しげに見つめる。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/sanji.png`,
      name: `サンギ`,
      text: `ヘカテー……戻って…………`
    },
    {
      type: `narration`,
      text: `ヘカテーは一人、白い匣を抱えてよろめきながら走っていた。`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/hekate.png`,
      name: `ヘカテー`,
      text: `私はFACから逃げた。以前なら、彼らの命令にも従っていたのに。なぜ？
誰かを信じたから？任務以外の人を信じたから？これで、いいの？`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/sanji.png`,
      name: `サンギ`,
      text: `一人で気をつけて、必ず生きて出るんだ。一番大切な人のところへ帰るんだ。`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/hekate.png`,
      name: `ヘカテー`,
      text: `一番大切な人……局長、局長に会いたい。
どこへ行けばいい？どうすればいい？任務がないのに、誰が私にどうすればいいのか教えてくれる？`
    },
    {
      type: `narration`,
      text: `彼女は必死に考えた。真っ先に思い出したのは、上庭からの通達だった。局長の消息を掴んだ、局長は流亡者基地にいると告げていた。`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/hekate.png`,
      name: `ヘカテー`,
      text: `そうだ、基地に戻れば……`
    },
    {
      type: `narration`,
      text: `そこに良い思い出はない。それでも今は、そこへ戻りたかった。まるでそこだけが、自分を救ってくれるもののように。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/tang.png`,
      name: `唐`,
      text: `自分を卑下する必要も、「もっと強い誰か」に頼る必要もない。君自身に力がある。君を助けたいと思っている人間も大勢いる。君たちは決して弱者じゃない。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/matilda.png`,
      name: `マチルダ`,
      text: `私を信じなくてもいい。でも、君が信じられる人を探して。自分を閉ざさないで。孤立無援になった時には、もう精神が限界まで弱っている。`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/hekate.png`,
      name: `ヘカテー`,
      text: `ヘラがそこにいる……マチルダ、ロヴナ、それにたくさんの人がいる。私は……みんなのところへ行く……`
    },
    {
      type: `narration`,
      text: `彼女は途方に暮れた子供のようによろめきながら走った。数歩進んだところで、突然飛び出してきた黒い影につまずき、張り詰めていたヘカテーは反射的に身を震わせた。`
    },
    {
      type: `dialogue`,
      position: `left`,
      name: `避難児童（A）`,
      text: `うぅ……父さん、母さん……どこにいるの……`
    },
    {
      type: `dialogue`,
      position: `left`,
      name: `避難児童（B）`,
      text: `お姉ちゃん、助けて、怖いよ。一人にしないで、怖いよ……`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/hekate.png`,
      name: `ヘカテー`,
      text: `……は、は……うぅ……あなたたちを助ける任務はない。私は急いでる。局長を助けなきゃ……`
    },
    {
      type: `narration`,
      text: `彼女が子供たちを押し退けようとすると、それだけで彼らはさらに怯え、いっそう激しく泣き出した。その泣き声が、ヘカテーの思考をさらに乱していく。まるで、もう一人の自分を見ているようだった。`
    },
    {
      type: `dialogue`,
      position: `left`,
      name: `避難児童`,
      text: `うぅ……どうすればいいの？`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/hekate.png`,
      name: `ヘカテー`,
      text: `……任務がない……私に……うっ！`
    },
    {
      type: `narration`,
      text: `どうすればいい？自分は一人しかいない。どうすればいいのか分からない。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/hera.png`,
      name: `ヘラ`,
      text: `自分で決めるんだ。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/chief.png`,
      name: `局長`,
      text: `……今回は、俺がお前たちを守る。`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/hekate.png`,
      name: `ヘカテー`,
      text: `……ナイトメア！！`
    },
    {
      type: `narration`,
      text: `少女はついに泣きじゃくる子供たちを押し退けた。全身を震わせ、ほとんど息もできないまま、長い間を置いて叫んだ。`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/hekate.png`,
      name: `ヘカテー`,
      text: `残る！この子たちを守って！`
    },
    {
      type: `narration`,
      text: `ナイトメアはそこに残された。ほどなくしてFACの戦士たちがやって来て、この子供たちを連れ出すことになる。
ヘカテーは一人で街を走った。ナイトメアの護衛もなく、導いてくれる者もいない。シンジケートの街路を抜け、ひたすら走り続ける。
その少し先では、別の一隊が流亡者基地から撤退したばかりだった。ヘカテーとは反対方向へ向かっていく。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/blackquartz.png`,
      name: `黒水晶`,
      text: `……罠だった。第二観測庭を失った我々には、場域内の集団意識の変化を判断できない。その隙を地底に利用され、黒環内部の狂厄を煽動された。Xを失ったことはあまりにも大きい。
先遣隊は基地へ帰還。黒環の活動は極めて異常だ。戦略を練り直す。……ずっと街路を見ていたが、何か見つけたか？`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/hush.png`,
      name: `HUSH精鋭`,
      text: `……はい。`
    },
    {
      type: `narration`,
      text: `精鋭兵は一目で、街をよろめきながら走るコンビクトの少女を捉えた。その身体から突き出す、目を刺すような黒い光の棘も。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/matilda.png`,
      name: `マチルダ`,
      text: `ヘカテー？どうして戻ってきた？汚染がかなり進んでいる。まず治療を受けて。`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/hekate.png`,
      name: `ヘカテー`,
      text: `局長はどこ？`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/matilda.png`,
      name: `マチルダ`,
      text: `ここにはいない。すべて地底の陰謀だ。上庭を誘い出して私たちを攻撃させ、群衆の感情を煽るためのものだった。`
    },
    {
      type: `narration`,
      text: `ヘカテーはその情報を受け止めきれなかった。だが、重度の汚染に侵されたヘラの姿を見た瞬間、仲間の苦痛がほとんどそのまま自分へ伝わってきた。
彼女は白い匣を取り出し、ヘラの身体に押し当てた。効果があることを願って――それが局長を救うためのものだということさえ、一瞬忘れていた。`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/hekate.png`,
      name: `ヘカテー`,
      text: `ヘラ、起きて……ごめん、全部私が悪い。ごめん……
……局長……局長、どこにいるの……お願い……答えて……`
    },
    {
      type: `narration`,
      text: `黒い光の棘が徐々に生まれていく。だが今回は、混沌とした汚染の中から、揺らめく声が聞こえた。`
    },
    {
      type: `dialogue`,
      position: `left`,
      name: `？？`,
      text: `君は彼がどこにいるか知っている……
自分の枷を取り戻せば、感じ取れる……
彼を探せ。彼は待っている。君を必要としている……あの障害は、私が……解決する……`,
      note: `ジュリアン`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/hekate.png`,
      name: `ヘカテー`,
      text: `あなたは……？`
    },
    {
      type: `dialogue`,
      position: `left`,
      name: `？？`,
      text: `行け……君に託す……`
    },
    {
      type: `narration`,
      text: `これまでずっと枷の向こう側にあった混沌が、ほんの一瞬だけ消えた。
まるですべてを呑み込んでいた狂厄の海を、誰かが切り開いたかのように。ようやく彼女は、混沌の下にある真実を見ることができた。
そしてその瞬間、彼女は枷の果てにいる人を見た。`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/hekate.png`,
      name: `ヘカテー`,
      text: `私……局長がどこにいるか分かった……行きたい。私は――`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/rovna.png`,
      name: `ロヴナ`,
      text: `行きなさい！ここは私がいる。ヘラには絶対に傷一つつけさせない。約束する。
二人で、局長を連れ戻って。必ず気をつけて！`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/matilda.png`,
      name: `マチルダ`,
      text: `……黒環はもう爆発した。この先は死役だらけ。君一人では行けない。
私が送る。`
    },
    {
      type: `narration`,
      text: `流民寨内部の汚染は外界を遥かに上回っていた。徘徊する死役は一斉に狂暴化し、汚染もかつてないほど活発になっている。
ここは、誰もが近づくことすら恐れる地獄だった。
それでもヘカテーは、他のコンビクトたちの助けを借りて底部へ辿り着き、久方ぶりにロマネスク記念碑へ戻ってきた。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/dudu.png`,
      name: `ドゥドゥ`,
      text: `あなた？`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/hekate.png`,
      name: `ヘカテー`,
      text: `局長は？局長はどこ？私に助けさせて！`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/dudu.png`,
      name: `ドゥドゥ`,
      text: `駄目だ、中へ行くな。君は――`
    },
    {
      type: `narration`,
      text: `ヘカテーは即座に罠の暗器を受けた。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/blackquartz.png`,
      name: `黒水晶`,
      text: `ガーデンの業師？ならば、局長は確かにここにいる。彼女を排除し、SHPを奪還する！`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/hush.png`,
      name: `HUSH精鋭`,
      text: `……`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/coquelicot.png`,
      name: `コクリコ`,
      text: `ここにいるから何？あなたたちに、あの人へ手を出せると思ってる？
ぐずぐずして今さら来たか。この依頼もようやく割に合ってきた……最後の時間くらい、自分から出向いて借りを返す手間を省けそうだ。`
    },
    {
      type: `narration`,
      text: `二人の強者による激戦はなお続いていた。それでも、さらに多くの死役が危険を顧みずこちらへ押し寄せてくる。まるで、より本能的な何かに誘惑されているかのように。
ヘカテーにも感じられた。その誘惑は、ある一つの隠された地下道から流れ出している。
地下道の出口からは汚染が絶え間なく吐き出され、その下にどれほど恐ろしい存在が潜んでいるのかを、まったく隠そうともしていない。`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/hekate.png`,
      name: `ヘカテー`,
      text: `……下？局長は、この下にいる。局長！`
    },
    {
      type: `narration`,
      text: `彼女は傷ついた身体を引きずりながら前へ進み、汚染で塞がれた地下道へと走った。
死役たちがその後を追い、少女へ向かって咆哮する。だが、遠方から飛来した銃弾がそれらをことごとく撃ち抜いた。
――彼女のために道を切り開いたのは、ロマネスクの主事だった。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/oakbox.png`,
      name: `オーク箱`,
      text: `行け。
どうせ結果は同じだ……`
    },
    {
      type: `narration`,
      text: `もうヘカテーには、他のことを気にする余裕などなかった。
彼女は地下室の扉をこじ開けた。中では汚染が完全に暴走している。
そして、局長がそこに倒れていた。`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/hekate.png`,
      name: `ヘカテー`,
      text: `局長！`
    },
    {
      type: `narration`,
      text: `枷は狂厄と激しく争い、局長はBR-002と拮抗している。
彼女は白い匣を取り出し、慌てて局長の胸元へ押し当てた。その手は自身を焼く汚染に蝕まれていく。`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/hekate.png`,
      name: `ヘカテー`,
      text: `局長、起きて！`
    }
  ]
};