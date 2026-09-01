export default {
  meta: {
    title: `「EDGE-01」`,
    bgm: `mp3/bg/black_ring_tower.mp3`,
    summary: `ブラックリングの中で、局長とドナルドは黒石英に遭遇し、上庭と一触即発のやり取りを交わした……`
  },
  infoPanel: {
    glossary: [
      {
        term: `黒環`,
        desc: `BR-002を中心に形成された巨大な汚染空間。内部は迷宮状に密集した装置と高塔で構成され、汚染と死役が渦巻く。`
      },
      {
        term: `高塔`,
        desc: `黒環内部にそびえる鋼鉄の塔。外部よりも装置や迷宮が密集し、激しい反響音・咆哮・振動が絶え間なく響く。`
      },
      {
        term: `枷`,
        desc: `局長が持つ特殊な力。現在は骸と強く繋がっており、使用すると激しい苦痛を伴う。汚染の影響下にある。`
      },
      {
        term: `死役`,
        desc: `汚染によって変貌した存在。恐怖と怒りの咆哮を上げながら、何かに引き寄せられるように行動する。`
      },
      {
        term: `ローカル・クリーンアップ令`,
        desc: `上庭が提案する最終手段。ルールを通じてBR-002を直接攻撃・消滅させる計画。局長をアンカーとする場合、本人の生存は保証されない。`
      },
      {
        term: `EDGE-01`,
        desc: `上庭の超環通信チャンネル使用者であり、意思決定者の一人。黒水晶を通じて介入し、局長に選択を迫る。`
      }
    ],
    characters: [
      {
        name: `唐`,
        avatar: `img/dh/tang.png`,
        note: `局長を背負って高塔を上るコンビクト。`,
        basicStats: `かつての錆火初期リーダー。9年間能力を封印し、肉体を鍛え上げた。黒環の影響で時折意識が飛ぶが、局長を守り抜く意志は揺るがない。`,
        profile: `危険度：S級
能力：肉体強化・戦闘技術`
      },
      {
        name: `局長`,
        avatar: `img/dh/director.png`,
        note: `枷を通じて骸と繋がる存在。`,
        basicStats: `黒環の汚染を一身に背負い、現在はほとんど動けない状態。唐に背負われながら高塔を目指す。`,
        profile: `危険度：不明
能力：枷`
      },
      {
        name: `黒水晶`,
        avatar: `img/dh/blackcrystal.png`,
        note: `深度汚染を受けた上庭のエリート。`,
        basicStats: `局長の引き渡しを要求する上庭側の戦士。装甲を自ら引きちぎるなど、異常な行動を見せる。`,
        profile: `所属：上庭
分類：深度汚染個体`
      },
      {
        name: `EDGE-01`,
        avatar: `img/dh/edge01.png`,
        note: `上庭の意思決定者の一人。`,
        basicStats: `超環通信を通じて局長と対話し、BR-002対策としてローカル・クリーンアップ令を提案する。`,
        profile: `分類：電子音声・上庭上層`
      },
      {
        name: `汚染された上庭兵士`,
        avatar: `img/dh/contaminated_soldier.png`,
        note: `黒環に汚染された上庭の兵士。`,
        basicStats: `「枷……」としか言葉を発せず、局長を狙って迫る。`
      },
      {
        name: `汚染された福音地傀儡`,
        avatar: `img/dh/contaminated_puppet.png`,
        note: `黒環に汚染された福音地の傀儡。`,
        basicStats: `「あの人……枷……」と繰り返しながら、上庭兵士と共に行動する。`
      }
    ],
    synopsis: `黒環内部の高塔を、唐が局長を背負って上っていく。下方では上庭と福音地が激戦を繰り広げ、死役の群れが次々と落下してくる。枷が骸と繋がる局長は戦力として使えず、唐は汚染された兵士たちを退けながら進む。深度汚染を受けた上庭エリート・黒水晶が現れ、局長の引き渡しを要求。激戦の末にEDGE-01が介入し、BR-002を消滅させるための「ローカル・クリーンアップ令」と、局長自身の犠牲を巡る選択を提示する。唐は上庭の提案を拒絶し、二人は崩壊する階層から離脱する。`
  },
  script: [
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/blackcrystal.png`,
      name: `黒水晶`,
      text: `あなたはXにマーキングされたコンビクト、S-012。やはりマーキングシステムに問題が発生していた。
能力を使用したにもかかわらず、同化が進行していない。`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/tang.png`,
      name: `唐`,
      text: `俺の意志が固かったからな。お前らの支配から抜け出すために9年間能力を使わず、鍛えてこの筋肉を手に入れた。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/blackcrystal.png`,
      name: `黒水晶`,
      text: `違う。最初に施されたマーキングそのものに緩みが生じていただけだ。
S-012、再び黒環へ入っても自己を維持できる。確かに驚異的な能力を持つコンビクトだ。人類のため、より大きな貢献を果たすべき存在だろう。
残念ながら、あなたをマーキングした清理人は事故に遭い、任務を終えている。彼女がまだいれば、あなたの逸脱をより適切に矯正できただろう。`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/tang.png`,
      name: `唐`,
      text: `そうか……先に言ってくれればよかったのに。そしたら遠慮なく暴れてた。
あいつがいなくなって、お前らも色々と不便になったみたいだな。
どうした、また福音地に負けたのか？焦ってるんじゃないか？`
    },
    {
      type: `narration`,
      text: `彼の言葉に応えるかのように、高塔が再び震えた。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/blackcrystal.png`,
      name: `黒水晶`,
      text: `私を挑発しようとしても無駄だ、コンビクト。我々は絶対的に理性的な存在だ。
ここで我々と衝突するな。お前たち二人は黒環の高圧下にある。この状態で戦っても勝算はなく、我々の時間を浪費するだけだ。
我々の目的は福音地を阻止し、黒環を破壊し、今回人類全体が直面している危機を解除することだ。だから、退け。
我々が必要としているのは局長だ。人類の福祉のために。`
    },
    {
      type: `narration`,
      text: `騎士が一歩前へ出ると、唐はあなたを背後に庇った。`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/tang.png`,
      name: `唐`,
      text: `自分の身は自分で守れ、局長。こいつは役立たずだが、隣にいる奴はそうじゃない。
あいつは汚染をものともせず、この一帯を完全に掃討して、俺たちが来るのを待ってた。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/blackcrystal.png`,
      name: `黒水晶`,
      text: `もう一度言う。彼を上庭に引き渡せ。`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/tang.png`,
      name: `唐`,
      text: `百回言われても同じだ。失せろ！`
    },
    {
      type: `narration`,
      text: `激戦の最中、唐は相手の装甲を斬り裂き、電流がその隙を突いて、いわゆる上庭製の技術部品へ侵入する。だが敵は一切躊躇せず、腕部装甲を丸ごと引きちぎって脇へ投げ捨て、剥き出しの腕を晒した。唐の目には、その動作に妙な違和感があった。`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/tang.png`,
      name: `唐`,
      text: `？！`
    },
    {
      type: `narration`,
      text: `その違和感の正体を考える暇もなく、数体の錆火の亡霊が突然飛び出し、唐の足を掴んだ。その瞬間、上庭の戦士は唐を振りほどき、局長へ一直線に向かっていく。その者の標的は、最初から最後まで一切揺らいでいなかった。`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/tang.png`,
      name: `唐`,
      text: `局長、早く避けろ！！！！`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/blackcrystal.png`,
      name: `黒水晶`,
      text: `捕らえろ！`
    },
    {
      type: `narration`,
      text: `間に合わない。白衣の戦士があなたの目の前まで一直線に突進してくる。強大な力がこの場の狂厄と呼応している。その異常性に、あなたは即座に気づいた。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/director.png`,
      name: `局長`,
      text: `……コンビクト？`
    },
    {
      type: `narration`,
      text: `相手は答えなかった。全身に傷を負ったまま、あなたの首を掴む。あまりにも速く、あなたには抵抗する時間すらなく、そのまま相手に攻撃を許してしまう。
——だが、あなたは相手が伸ばしてきた剥き出しの腕を見極めた。コンビクトなら、こちらにも反撃する機会がある。`
    },
    {
      type: `narration`,
      text: `[枷を解放]
枷が黒い気をまとい、瞬時に襲撃者を制圧する。唐もすぐさま駆けつけ、相手を撃退する。双方は素早く離れ、距離を取った。`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/tang.png`,
      name: `唐`,
      text: `大丈夫か？`
    },
    {
      type: `narration`,
      text: `枷の感覚がおかしい。相手がコンビクトなのは間違いない。でも、他のコンビクトとは何かが違う。枷が汚染されたことによる感覚の狂いなのか？それとも、この枷が触れた相手そのものがおかしいのか？`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/director.png`,
      name: `局長`,
      text: `……大丈夫……でも、あの上庭の奴は……`
    },
    {
      type: `narration`,
      text: `上庭の戦士は地面に片膝をつき、息を荒くしていた。汚染された枷が相手にかなりの負担を与えているらしく、その者は異方晶を取り出し、必死に抑え込んでいる。だが、無機質な命令の発信者はそれを良しとしなかった。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/blackcrystal.png`,
      name: `黒水晶`,
      text: `枷のせいで戦闘不能になったのか？この失態はあまりにも愚かだ。露出した皮膚で直接SHPに触れるべきではなかった。
後退するな。彼を捕らえろ。SHP-13を制御しろ。時間はすでに——ジジジ——`
    },
    {
      type: `narration`,
      text: `信号干渉が走り、機械的だった声が途切れた。攻撃も一時停止する。黒水晶は静まり返り、内部の光がゆっくりと流動している。こう表現するのが適切かは分からないが、まるで別人になったようだった。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/edge01.png`,
      name: `？？（電子音）`,
      text: `先ほどの衝突には、そもそも必要性がありませんでした。別の方法で、別の人間と、改めて対話を始めましょう。
こんにちは、局長。私はEDGE-01超環通信チャンネルの使用者であり、上庭の意思決定者の一人です。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/edge01.png`,
      name: `EDGE-01（電子音）`,
      text: `我々は互いに相当な重圧を受けています。ここで争うことは時間の浪費であると同時に、互いを消耗させるだけです。最終的に利益を得るのは黒環と福音地であり、城邦に危害をもたらすことになります。
ですから、これからはあなたたちへの先制攻撃を停止すると約束します。そして、あなたと率直に話し合いたい。我々にはあなたの理解と助力が必要だからです。`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/tang.png`,
      name: `唐`,
      text: `……奴らの言いなりになるな。`
    },
    {
      type: `narration`,
      text: `（選択肢）……まずは話を聞く`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/edge01.png`,
      name: `EDGE-01`,
      text: `理解に感謝します。それでは過去の誤解については多くを説明せず、時間もありません。単刀直入に本題へ入りましょう。`
    },
    {
      type: `narration`,
      text: `あなたは誰の声も聞いていない。それなのに奇妙なことに、その情報は直接あなたの脳内へ入り込み、瞬時に理解され、処理されていく。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/edge01.png`,
      name: `EDGE-01`,
      text: `我々が立場についてこれ以上説明する必要はないでしょう。この狂厄との戦争において、我々とあなたは共に福音地の敵です。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/edge01.png`,
      name: `EDGE-01`,
      text: `彼らの扇動によって、BR-002はすでに極めて危険な規模まで膨張し、放射範囲は西区の8割を覆い、さらにニューシティへ拡大しようとしています。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/edge01.png`,
      name: `EDGE-01`,
      text: `48時間以内に、人々はすべて変換され、BR-002の狂厄の餌となるでしょう。それによって、あれは完全に消滅可能な範囲を超えることになります。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/edge01.png`,
      name: `EDGE-01`,
      text: `それが最後の時間的猶予です。我々は期限内に、あれを弱体化させるか、完全に消滅させなければならない。最も直接的かつ有効な手段は、ローカル・クリーンアップ令です。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/edge01.png`,
      name: `EDGE-01`,
      text: `ルールは外部から黒環を突破し、受骸者に作用することが難しい。しかし、あなたがいれば話は別です。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/edge01.png`,
      name: `EDGE-01`,
      text: `あなたは過去に002骸との戦闘で、枷を通じてそれと強い繋がりを構築した。あなた自身がルールを受け入れ、アンカーとなれば、ルールは黒環を貫通して干渉し、100％の同期率で002骸へ直接、正確な攻撃を加えることができます。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/edge01.png`,
      name: `EDGE-01`,
      text: `これは広く支持されている案です。涅槃グループも、ルールへエネルギーを供給するため、異方晶10年分の生産量に相当する資源を提供することに同意しています。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/edge01.png`,
      name: `EDGE-01`,
      text: `クリーンアップ令に関するすべての措置は停止されます。BR-002による西区への脅威も完全に排除されます。`
    },
    {
      type: `narration`,
      text: `（選択肢）そんなに簡単な話なら`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/director.png`,
      name: `局長`,
      text: `あなたが私に選ばせる必要なんてない。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/edge01.png`,
      name: `EDGE-01`,
      text: `その通りです。第二案の代償として、ルールを伝達するあなた自身も100％の同期率の中でルールによって完全に破壊されます。生存の可能性は一切ありません。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/edge01.png`,
      name: `EDGE-01`,
      text: `さらに、脆弱なあなたが002骸より先に死亡しないことを保証するため、100％の同期率で一撃必殺となるよう確実にする必要があります。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/edge01.png`,
      name: `EDGE-01`,
      text: `以上が、あなたに伝えるべきすべてです。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/edge01.png`,
      name: `EDGE-01`,
      text: `では、あなたの選択は？`
    },
    {
      type: `narration`,
      text: `（選択肢）これのどこが選択なんだ？`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/director.png`,
      name: `局長`,
      text: `これは道徳的な脅迫だ。数百万人の命を盾にして、私に自殺を選ばせようとしているのか？`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/edge01.png`,
      name: `EDGE-01`,
      text: `あなたはこの選択に道徳的な負担を感じるのですか？それなら、Xの言う通りです。あなたは正直で善良な人間なのでしょう。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/edge01.png`,
      name: `EDGE-01`,
      text: `行動記録に示されているものとも一致しています。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/edge01.png`,
      name: `EDGE-01`,
      text: `安心してください。あなたに何かを強制するつもりはありません。ここまで事態が進んだ以上、どちらを選んだとしても、人類側はすでに等しく敗北しています。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/edge01.png`,
      name: `EDGE-01`,
      text: `ですが、私が決めるのなら、私は迷わずあなたを生かし、クリーンアップ令を実行します。`
    },
    {
      type: `narration`,
      text: `（選択肢）……もうやめろ、聞いているだけで吐き気がする`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/edge01.png`,
      name: `EDGE-01`,
      text: `あなたがそう考えることは分かっています。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/edge01.png`,
      name: `EDGE-01`,
      text: `クリーンアップ令は実行可能です。ただし強行すれば、あなたの性格からして、上庭はあなたの信頼を永遠に失うでしょう。あなたの強大な精神力も大きく損なわれる。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/edge01.png`,
      name: `EDGE-01`,
      text: `そうなれば、あなたを生かすために私が払った犠牲も、当然意味を失います。`
    },
    {
      type: `narration`,
      text: `あなたは一瞬呆然とし、すぐにその言葉があまりにも白々しく、滑稽に感じられた。`
    },
    {
      type: `narration`,
      text: `（選択肢）私って、そんなに上庭にとって重要なのか？`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/edge01.png`,
      name: `EDGE-01`,
      text: `判断は人によって異なります。この問題について、私は上庭を代表することはできません。`
    },
    {
      type: `narration`,
      text: `高塔の振動がさらに増えていく。下方の戦闘はますます激しくなっているようだった。二人の間の情報伝送も次第に不安定になり、あなたが一瞬気を逸らした隙に、先ほどのチャンネルから切断された。`
    },
    {
      type: `dialogue`,
      position: `left`,
      avatar: `img/dh/edge01.png`,
      name: `EDGE-01（電子音）`,
      text: `第二観測庭を失ったことで、BR-002との超環通信を安定して維持することも困難になっています。時間がありません。私にも、集中して対処しなければならない敵がまだいます。
BR-002について、あなたがどちらの案を選ぼうと、私にとっては事態を進めることができます。ですが、あなたにとっては生と死の違いです。
だから、選択権をあなたに渡します。そして黒水晶もあなたに託します。攻撃モジュールはあなたに対して永久に停止され、今後は「ルール」へのインターフェースと、限定的な安全保障のみを提供します。
環の外では27時間後、上庭が予定通りローカル・クリーンアップ令を発動し、西区の全人口を排除します。彼らがBR-002をさらに強化することを防ぐためです。
それまでの間、あなたと仲間たちは全力で人々の脱出を組織できます。もっとも、効果は限定的でしょう。西区では数十万、あるいは百万人単位の人間が消去される運命にあります。その重さに耐えられないのなら……
時間が来るまでに、あなたにはもう一つの選択肢があります。`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/tang.png`,
      name: `唐`,
      text: `もういい。こいつにお前が用意した選択をさせる必要はない。`
    },
    {
      type: `narration`,
      text: `彼は上庭とあなたの間に割って入る。底部の振動はますます強くなり、絶えず上へ加速してくる。何かを追いかけるように迫っている。それでも唐は微動だにしなかった。`
    },
    {
      type: `dialogue`,
      position: `right`,
      avatar: `img/dh/tang.png`,
      name: `唐`,
      text: `9年だ……お前らは今でもその顔、そのやり方のままだ。俺たちには俺たちの目的がある。自分たちで答えを探しに来た。
俺たちを一度だってまともに見ようとしなかった奴らに、ここで偉そうに指図される筋合いはない！`
    },
    {
      type: `narration`,
      text: `再び激しい衝撃が走る。数本の鉄柱が高空から落下し、二人のいる床をほとんど貫く。同時に、汚染が火山の噴火のように下方から上へ噴き上がり、あらゆるものを瞬く間に呑み込んでいく。
電光が激しく閃き、唐は鉤索を放つと、あなたを連れて崩壊する階層から離脱した。`
    }
  ]
};