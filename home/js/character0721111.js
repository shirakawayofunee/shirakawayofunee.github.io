```javascript
let characterMsg = [
  {
    bg: "1bg.png",
    rolem: "1m.png",
    nocheck: "1.png",
    check: "1c.png",
    title: "1t.png",
    str: "能力者、178cm。<br>犯罪組織の主宰者であり、部下たちから恐れられ、崇拝されている存在。<br>童顔(不老)、実年齢不明。<br>艶やか、常に世を拗ねるような微笑を浮かべている。好き嫌いが激しく、享楽主義者で実用も重んじる、細やかで優しい一面も持っている。<br>落ち着き払った自信に満ちていて、自信かつ優雅な態度を保ち、性格は八方巧み。夹缝中的最强者，将上庭与地底的斗争视作狗咬狗。当前的目标是在自己死前，给下属们寻求新的安全居所。<br>▍好きなもの<br>性格……孤高でそっけなく、決断力と行動力がある、表で暴虐且つ無慈悲だが、裏は温情に富んで、特に部下に対して。<br>逆鱗……花园<br>得意なこと……<br>趣味……美学、「栽培」<br>好き……花<br>嫌い……自由が制限されること、無意味な犠牲<br>特技……開花、癒し<br>▍背景<br>Lは幼少期、軍人である両親が前線で命を落としました。その命の価値のない犠牲は「崇高な使命のため」とされましたが、彼女にとってその言葉は無意味で、むしろ規則の虚偽と束縛を感じさせるものでした。両親の死は彼女に反抗心を芽生えさせ、彼女は規則に縛られることを拒み、命を代償に禁断の力と契約を結びました。その力を使って、他の人々が規則から解放され、彼女のように自由に生きる手助けをすることを決意します。",
    voice: "./mp3/role/1.mp3",
    image1: "1-1.png",
    image2: "1-2.png",
    dialogue: "" // 待补充
  },
  {
    bg: "2bg.png",
    rolem: "2m.png",
    nocheck: "2.png",
    check: "2c.png",
    title: "2t.png",
    str: "",
    voice: "./mp3/role/2.mp3",
    image1: "2-1.png",
    image2: "2-2.png",
    dialogue: `
      <div class="chat-container fade" id="conversation2">
        <div class="mb-3"><div class="message narration">N.F.113年7月22日 08:05</div></div>
        <div class="mb-3"><div class="message narration">袭击过后，商業街的清晨格外安静，警员们集中到瑟琳宅邸附近搜查戒备，周边更远处只派三两个倒霉鬼巡逻。</div></div>
        <div class="mb-3"><div class="message narration">微雨薄幕间，一个女人捧着花独自走在僻静的步行街上。路过那几位熟识的警员，她微微颔首致意，也没有过多询问他们的不安。</div></div>
        <div class="mb-3"><div class="message narration">就这样，她缓步回到裁縫店。察觉门没锁时，她顿了一下，微笑着合上伞，推门走进自己的裁縫店。</div></div>
        <div class="mb-3"><div class="message-wrapper character2"><img src="img/dh/severo1.png" alt="Severo" class="avatar"><div class="message character-message w12">这么早，我还以为是谁来了，吓了一跳。</div></div></div>
        <div class="mb-3"><div class="message-wrapper character2"><img src="img/dh/severo1.png" alt="Severo" class="avatar"><div class="message character-message w12">你好，客人。这几天小店不营业，需要定制礼服的话可以过几天再来。</div></div></div>
        <div class="mb-3"><div class="message narration">調査员没有接话，看着女主人将手中的花插入一侧的花瓶中。那是白色康乃馨。</div></div>
        <div class="mb-3"><div class="message-wrapper character1"><div class="message character-message w12">花很漂亮。</div></div></div>
        <div class="mb-3"><div class="message-wrapper character2"><img src="img/dh/severo2.png" alt="Severo" class="avatar"><div class="message character-message w12">……谢谢。我爱人她喜欢康乃馨，她喜欢紫色，说那像我。<br>「ありがとう、思う人がですね…カーネーションが好きです、私に似ているからって。」</div></div></div>
        <div class="mb-3"><div class="message-wrapper character2"><img src="img/dh/severo2.png" alt="Severo" class="avatar"><div class="message character-message w12">他是FAC的人。本来已经受伤退役几年，偏偏西区出了事，他又被緊急征召。再然后……就是葬礼了。</div></div></div>
        <div class="mb-3"><div class="message narration">女人哽咽了，側頭拭了下眼泪，神情悲切。</div></div>
        <div class="mb-3"><div class="message-wrapper character2"><img src="img/dh/severo2.png" alt="Severo" class="avatar"><div class="message character-message w12">抱歉，刚从墓園回来，我的心情还没調整好。</div></div></div>
        <div class="mb-3"><div class="message-wrapper character1"><div class="message character-message w12">我能理解。</div></div></div>
        <div class="mb-3"><div class="message-wrapper character2"><img src="img/dh/severo2.png" alt="Severo" class="avatar"><div class="message character-message w12">是吗？看你的制服，你也是FAC部队的吧……虽然现在我不能提供服务，但这里的花你可以随意拿去。</div></div></div>
        <div class="mb-3"><div class="message-wrapper character2"><img src="img/dh/severo2.png" alt="Severo" class="avatar"><div class="message character-message w12">如果你也有想要紀念的人……</div></div></div>
        <div class="mb-3"><div class="message narration">調査員起身到窗邊，拉上窗帘。</div></div>
        <div class="mb-3"><div class="message-wrapper character1"><div class="message character-message w12">你大概不知道，西区局势不怎么好，牺牲者很多，受污染遗体的处理很耗时间。公祭前不久被推迟了，你丈夫如果死在那里，也要到下个月才能下葬。</div></div></div>
        <div class="mb-3"><div class="message-wrapper character1"><div class="message character-message w12">夫人是在哪里紀念他呢？</div></div></div>
        <div class="mb-3"><div class="message-wrapper character2"><img src="img/dh/severo4.png" alt="Severo" class="avatar"><div class="message character-message w12">……我……啊！</div></div></div>
        <div class="mb-3"><div class="message narration">話音未落，那盾已直冲而來，迎面劈下，一撃砸碎女主人脚下的地板，白色康乃馨散落，花瓣乱飛間，那婦人却已不在原地。</div></div>
        <div class="mb-3"><div class="message narration">幾道銀光刺來，調査員用盾一挡，看向攻撃的源頭。在幾个人台背後，那个悲傷的寡婦已经換了一副嗔怪又調笑的面孔。</div></div>
        <div class="mb-3"><div class="message-wrapper character2"><img src="img/dh/severo1.png" alt="Severo" class="avatar"><div class="message character-message w12">唉急性子，这种小問題我明明能解釋清楚的。</div></div></div>
        <div class="mb-3"><div class="message-wrapper character1"><div class="message character-message w12">没必要，都躲过这种攻击了，你的本事足够解释一切。我们交过几次手，刺客小姐，你的身段我念念不忘。</div></div></div>
        <div class="mb-3"><div class="message-wrapper character2"><img src="img/dh/severo1.png" alt="Severo" class="avatar"><div class="message character-message w12">呵呵，還會開玩笑了？心情很好嘛保鏢小姐。那保持住，最好一輩子都能保持这笑容……</div></div></div>
        <div class="mb-3"><div class="message-wrapper character2"><img src="img/dh/severo1.png" alt="Severo" class="avatar"><div class="message character-message w12">有時候，一輩子一眨眼就過去了。</div></div></div>
        <div class="mb-3"><div class="message narration">女人手中長針一轉，用力刺進假人背後，咔嗒咔嗒——隠藏著的机关同時啟動，向調査員发起攻撃。</div></div>
        <div class="mb-3"><div class="message-wrapper character2"><img src="img/dh/severo1.png" alt="Severo" class="avatar"><div class="message character-message w12">真是的，不都說溫柔有礼是FAC的好伝統嗎，怎麼就你對我这么粗暴呀。我也算你戦友的遺孀，手下留情点，好吗？</div></div></div>
        <div class="mb-3"><div class="message-wrapper character1"><div class="message character-message w12">呵呵，好業餘的殺手。不仅鬼話連篇，廢話也多得可笑。</div></div></div>
        <div class="mb-3"><div class="message narration">她一揮大盾，挑起待客的圓桌向“店主”摔去，那女人閃身躲過，一手拉出幾根弩箭反撃，兩人趁勢拉開距離。</div></div>
        <div class="mb-3"><div class="message-wrapper character2"><img src="img/dh/severo1.png" alt="Severo" class="avatar"><div class="message character-message w12">我說的是真話。我宣誓結婚，丈夫愛我，但已死去。这都是我人生真真切切的経歷。</div></div></div>
        <div class="mb-3"><div class="message-wrapper character1"><div class="message character-message w12">你利用他窃取FAC的情報，然後殺了他？</div></div></div>
        <div class="mb-3"><div class="message-wrapper character2"><img src="img/dh/severo1.png" alt="Severo" class="avatar"><div class="message character-message w12">冤枉我了。他是真正的好男人，正直又体貼，尊重我的“隱私”，從不窺探我那点秘密。</div></div></div>
        <div class="mb-3"><div class="message-wrapper character2"><img src="img/dh/severo1.png" alt="Severo" class="avatar"><div class="message character-message w12">要是他能再听听劝，拒绝这次西区行動……日子久了，说不定我真的会爱上他。可惜好男人总有用不完的责任心，总愛幫人收拾烂摊子，一次又一次地奔赴，也总有一天再也回不来……你也是FAC，你很清楚吧？</div></div></div>
        <div class="mb-3"><div class="message-wrapper character2"><img src="img/dh/severo1.png" alt="Severo" class="avatar"><div class="message character-message w12">西区有了新的黑環，你有多少隊友死在那兒了？我知道这是你們的光榮伝統——FAC最推崇毫無意義、不明就里的偉大犧牲。所以說，我没有殺他。我們反而該同病相憐，該多聊聊……唉呀！</div></div></div>
        <div class="mb-3"><div class="message narration">她驚叫著躲開第二次攻撃。那是一次貼身突襲，却扑了空。調査員察覚自己的動作変慢了，身體有些不受控制。</div></div>
        <div class="mb-3"><div class="message narration">她立刻反應過來発生了什麼。</div></div>
        <div class="mb-3"><div class="message-wrapper character1"><div class="message character-message w12">你用了神經毒素？</div></div></div>
        <div class="mb-3"><div class="message-wrapper character2"><img src="img/dh/severo1.png" alt="Severo" class="avatar"><div class="message character-message w12">猜中了，厉害。我了解你们的作战习惯，喜欢跟怪物硬碰硬，打起架来不惧又不躲，总是不惜命地給别人当盾牌。对付你们，最适合用这招。</div></div></div>
        <div class="mb-3"><div class="message-wrapper character2"><img src="img/dh/severo1.png" alt="Severo" class="avatar"><div class="message character-message w12">哦，別乱動。这毒還帶着一点点狂厄污染，你要是身上有異方晶，安靜地等它淨化比較好。我現在還不想傷害你。</div></div></div>
        <div class="mb-3"><div class="message-wrapper character2"><img src="img/dh/severo1.png" alt="Severo" class="avatar"><div class="message character-message w12">我想跟你聊聊。</div></div></div>
        <div class="mb-3"><div class="message narration">刺客没有趁勢攻撃，相反，她脸上軽浮的笑容漸漸隠去。</div></div>
        <div class="mb-3"><div class="message-wrapper character2"><img src="img/dh/severo1.png" alt="Severo" class="avatar"><div class="message character-message w12">4個月來，这个城邦的所有黑環都変得活躍，FAC全主力被投入到正面戦場。你們根本没有餘力応対新城悪性事件，早就把它移交給第九機關了。</div></div></div>
        <div class="mb-3"><div class="message-wrapper character2"><img src="img/dh/severo1.png" alt="Severo" class="avatar"><div class="message character-message w12">調査員，不，FAC-G47小隊的禁閉者，你本不該出現在这里。你的上級根本没有下達任何援護命令。</div></div></div>
        <div class="mb-3"><div class="message-wrapper character2"><img src="img/dh/severo1.png" alt="Severo" class="avatar"><div class="message character-message w12">私自返回新城，強行介入与你無関的案件，找到了線索也不上報，還独自來見我这个“殺手”……就連你这身禁閉者的本領也來得不乾淨吧？</div></div></div>
        <div class="mb-3"><div class="message-wrapper character2"><img src="img/dh/severo1.png" alt="Severo" class="avatar"><div class="message character-message w12">身為FAC，服従和忠誠是你的天職，可你却踩了太多紅線。随便一条都够送你上法庭了。</div></div></div>
        <div class="mb-3"><div class="message-wrapper character1"><div class="message character-message w12">……呵，你倒查了不少東西。要來威脅我？</div></div></div>
        <div class="mb-3"><div class="message-wrapper character2"><img src="img/dh/severo1.png" alt="Severo" class="avatar"><div class="message character-message w12">……不，我理解你，比你想象的更深。</div></div></div>
        <div class="mb-3"><div class="message-wrapper character2"><img src="img/dh/severo1.png" alt="Severo" class="avatar"><div class="message character-message w12">你参加過内海“蝕月行動”，還是唯一幸存者。你來这里只為復仇。</div></div></div>
        <div class="mb-3"><div class="message-wrapper character1"><div class="message character-message w12">？！</div></div></div>
        <div class="mb-3"><div class="message-wrapper character2"><img src="img/dh/severo1.png" alt="Severo" class="avatar"><div class="message character-message w12">入夜103年，FAC接到緊急命令，28個中隊受命秘密前往内海，強闖BR-000。在情報和時間都緊缺的情况下，行動没有任何収獲，除了你全員戦死。</div></div></div>
        <div class="mb-3"><div class="message-wrapper character2"><img src="img/dh/severo1.png" alt="Severo" class="avatar"><div class="message character-message w12">这是個愚蠢的行動。但事後，下達制定戦術的指揮官隠了身，所有損失和黒鍋都由你們FAC背下。</div></div></div>
        <div class="mb-3"><div class="message-wrapper character1"><div class="message character-message w12">……这也是你從“亡夫們”嘴里得到的情報？</div></div></div>
        <div class="mb-3"><div class="message-wrapper character2"><img src="img/dh/severo1.png" alt="Severo" class="avatar"><div class="message character-message w12">他們不會知道的。任誰知道这种事，都不可能甘心。就像我們。</div></div></div>
        <div class="mb-3"><div class="message-wrapper character2"><img src="img/dh/severo1.png" alt="Severo" class="avatar"><div class="message character-message w12">我的父親是FAC後勤部的運輸員。入夜83年，他在基地，被蝕月行動秘密回收的異物感染，他到死都不知道那是什麼。</div></div></div>
        <div class="mb-3"><div class="message-wrapper character2"><img src="img/dh/severo1.png" alt="Severo" class="avatar"><div class="message character-message w12">父親染上狂厄，一片混乱中，他没有経過検測就回了家，在我弟弟妹妹面前変成死役……</div></div></div>
        <div class="mb-3"><div class="message-wrapper character2"><img src="img/dh/severo1.png" alt="Severo" class="avatar"><div class="message character-message w12">跟你一樣，那一晚，我也是可悲的幸存者。我理解你的恨。</div></div></div>
        <div class="mb-3"><div class="message-wrapper character2"><img src="img/dh/severo1.png" alt="Severo" class="avatar"><div class="message character-message w12">这么多年，你犧牲那么多，変成禁閉者，一個人強忍仇恨給上庭当狗，却還是摸不到黒幕的一角。</div></div></div>
        <div class="mb-3"><div class="message-wrapper character2"><img src="img/dh/severo1.png" alt="Severo" class="avatar"><div class="message character-message w12">我懂，你脚下这条漆黒又寒冷的路，我也一樣走過。</div></div></div>
        <div class="mb-3"><div class="message-wrapper character2"><img src="img/dh/severo1.png" alt="Severo" class="avatar"><div class="message character-message w12">我們的人生在一瞬間崩塌，被摧毀殆尽。没人還我們公道，我們只能自己討回公道。这世界總還是該講点道理的，不是吗？</div></div></div>
        <div class="mb-3"><div class="message narration">她向調査員伸手，遞出一朵紫色的康乃馨。</div></div>
        <div class="mb-3"><div class="message-wrapper character2"><img src="img/dh/severo1.png" alt="Severo" class="avatar"><div class="message character-message w12">我的名字是加洛法诺，我不是你的敌人，是同类。你还有很多同类。</div></div></div>
        <div class="mb-3"><div class="message-wrapper character2"><img src="img/dh/severo1.png" alt="Severo" class="avatar"><div class="message character-message w12">这世上有一個地方能接納我們，有人能理解我們。她會指引你，支撐你走完残酷的復仇。只要你有这个心，我能帶你去見她。</div></div></div>
        <div class="mb-3"><div class="message-wrapper character1"><div class="message character-message w12">你說的那個人，是你的雇主，還是你們組織的首領？</div></div></div>
        <div class="mb-3"><div class="message-wrapper character2"><img src="img/dh/severo1.png" alt="Severo" class="avatar"><div class="message character-message w12">是我好不容易得到的新的家人。</div></div></div>
        <div class="mb-3"><div class="message narration">她的回答很真誠，其中的感情似乎感染了調査員。FAC的戦士沉默半響。</div></div>
        <div class="mb-3"><div class="message-wrapper character1"><div class="message character-message w12">你說她會幫你復仇……</div></div></div>
        <div class="mb-3"><div class="message-wrapper character1"><div class="message character-message w12">那你釋放出來的污染、那些你帶來的死役怪物，也是她給的“幫助”吗？用这些幫你“復仇”？这几天死掉的普通人又干了什么悪事？他们要被你这样索命？</div></div></div>
        <div class="mb-3"><div class="message narration">殺手敏鋭察覚到敵意。她眼中閃過一丝遺憾，摸上幾根長針，一边計算毒素的有效時間，一边思考爭取最后的勧說。</div></div>
        <div class="mb-3"><div class="message-wrapper character2"><img src="img/dh/severo1.png" alt="Severo" class="avatar"><div class="message character-message w12">他們都是上庭人。上庭絶不無辜，他們都是敵人，最強大最可怕的敵人。</div></div></div>
        <div class="mb-3"><div class="message-wrapper character2"><img src="img/dh/severo1.png" alt="Severo" class="avatar"><div class="message character-message w12">你也恨他們，不是吗？</div></div></div>
        <div class="mb-3"><div class="message-wrapper character2"><img src="img/dh/severo1.png" alt="Severo" class="avatar"><div class="message character-message w12">就像你冒死也要成為禁閉者，我也必須得到足以対抗他們的力量。我們都必須爭取，也不得不有所捨棄。</div></div></div>
        <div class="mb-3"><div class="message-wrapper character2"><img src="img/dh/severo1.png" alt="Severo" class="avatar"><div class="message character-message w12">復仇就是傾尽所有，你最明白这点，不是吗？現在你有这个機会，我們能幫你。</div></div></div>
        <div class="mb-3"><div class="message-wrapper character1"><div class="message character-message w12">……如果你說的是真話，那我明白了。從来没有“我们”，開什麼玩笑，別把我跟你混為一談。</div></div></div>
        <div class="mb-3"><div class="message narration">她拽下身上的異方晶甩到一旁，猛砸雙盾，体内毒素直接被更劇烈的狂厄中和同化。</div></div>
        <div class="mb-3"><div class="message-wrapper character1"><div class="message character-message w12">你……替陰溝里的雑碎辦事，濫用狂厄濫殺無辜，拿復仇当借口作悪。你從来不是我的同伴，不過是被人利用的小丑罢了。</div></div></div>
        <div class="mb-3"><div class="message-wrapper character2"><img src="img/dh/severo3.png" alt="Severo" class="avatar"><div class="message character-message w12">……真遺憾。我是真的想帶你回家。</div></div></div>
        <div class="mb-3"><div class="message narration">雙方力量差距懸殊，只一瞬間，加洛法諾就被重重撞倒在地戦鬥，緊接着一面大盾用力砸在她身上，将她圧在地板上動弾不得。</div></div>
        <div class="mb-3"><div class="message-wrapper character2"><img src="img/dh/severo1.png" alt="Severo" class="avatar"><div class="message character-message w12">呜……咳咳，好可怕的蛮力……你是怪物吗？為得到这种力量，你都干了什麼悪事？你親愛的FAC知道吗？</div></div></div>
        <div class="mb-3"><div class="message-wrapper character1"><div class="message character-message w12">你背後的家伙是谁？你叫她“家人”，関係一定很好吧。如果我抓了你，她會主動來找吗？</div></div></div>
        <div class="mb-3"><div class="message-wrapper character2"><img src="img/dh/severo3.png" alt="Severo" class="avatar"><div class="message character-message w12">……你想幹什麼？</div></div></div>
        <div class="mb-3"><div class="message narration">她的聲音変得冰冷。</div></div>
        <div class="mb-3"><div class="message-wrapper character1"><div class="message character-message w12">我想進上庭，上庭有人想要你們，為此我得準備見面礼。你和你背後的人很合适。</div></div></div>
        <div class="mb-3"><div class="message-wrapper character2"><img src="img/dh/severo1.png" alt="Severo" class="avatar"><div class="message character-message w12">……原来如此，你們想要的不止是我……</div></div></div>
        <div class="mb-3"><div class="message-wrapper character1"><div class="message character-message w12">來吧，要麼主動交代，要麼等你的“家人”來救你，選一個。不是說她是復仇者的救星吗？那一定會來找你的吧。</div></div></div>
        <div class="mb-3"><div class="message-wrapper character2"><img src="img/dh/severo1.png" alt="Severo" class="avatar"><div class="message character-message w12">呵呵呵……這麼看來，你還是有当悪鬼的天賦的……別糾結什麼正義了，你早就不適合当FAC了。</div></div></div>
        <div class="mb-3"><div class="message-wrapper character1"><div class="message character-message w12">回答問題 wedge: 問題！我要你交代，否則你的「家人」會來救你，選一個。不是說她是復仇者的救星嗎？那一定會來找你的吧。</div></div></div>
        <div class="mb-3"><div class="message-wrapper character2"><img src="img/dh/severo1.png" alt="Severo" class="avatar"><div class="message character-message w12">呵呵呵……這麼看來，你還是有当悪鬼的天賦的……別糾結什麼正義了，你早就不適合当FAC了。</div></div></div>
        <div class="mb-3"><div class="message-wrapper character1"><div class="message character-message w12">回答問題！我対敵人没有耐心。</div></div></div>
        <div class="mb-3"><div class="message narration">大盾又用力一砸，似乎听到骨折的聲音。加洛法諾吃痛地呻吟著，脸上却露出虚弱且迷醉的笑容。現在，她的眼里再没有善意的邀請，只剩憎悪和殺氣。</div></div>
        <div class="mb-3"><div class="message-wrapper character2"><img src="img/dh/severo1.png" alt="Severo" class="avatar"><div class="message character-message w12">呵呵呵，你都忍了10年，現在著什麼急？東西我早就交給你了……那封花箋，看了吗？看不懂吗？</div></div></div>
        <div class="mb-3"><div class="message-wrapper character1"><div class="message character-message w12">直說里面有什麼，我不想跟你玩密碼遊戲。</div></div></div>
        <div class="mb-3"><div class="message narration">調査員皺眉，繼續用力，可女刺客的身體此時却像水般柔軟，所有暴力都像被吸入海綿般，她脸上的笑容変得更深，更讓人不適。</div></div>
        <div class="mb-3"><div class="message-wrapper character2"><img src="img/dh/severo1.png" alt="Severo" class="avatar"><div class="message character-message w12">很簡單的，我帶你一步步解開吧。</div></div></div>
        <div class="mb-3"><div class="message-wrapper character2"><img src="img/dh/severo1.png" alt="Severo" class="avatar"><div class="message character-message w12">培育秋英(TJ)時，需要保証它們接受充足的光照。不同品種的百合(JPT)対環境、光照、濕度有不同的需求。桜花(OJA)的苗木很容易受旱害，最好用草将地表覆蓋，減少水分蒸発。</div></div></div>
        <div class="mb-3"><div class="message-wrapper character2"><img src="img/dh/severo1.png" alt="Severo" class="avatar"><div class="message character-message w12">秋英、百合、桜花……根据三種花在一年中的花期早晚排序，為桜花→百合→秋英，得到OJAJPTTJ</div></div></div>
        <div class="mb-3"><div class="message-wrapper character2"><img src="img/dh/severo1.png" alt="Severo" class="avatar"><div class="message character-message w12">字母換成数字，数字換成字母。怎么样，是不是很簡單？</div></div></div>
        <div class="mb-3"><div class="message narration">（把OJAJPTTJ这串字母中的字母O換成0，其餘字母根据手機九宮格鍵盤得到数字，最後得到結果“05257885”）</div></div>
        <div class="mb-3"><div class="message-wrapper character1"><div class="message character-message w12">！</div></div></div>
        <div class="mb-3"><div class="message-wrapper character2"><img src="img/dh/severo1.png" alt="Severo" class="avatar"><div class="message character-message w12">是通信密令，蝕月行動期間唯一穿透内海黒環的信息編号，通過它給環内的你們下達命令。这个指令來自没人找得到的上庭。</div></div></div>
        <div class="mb-3"><div class="message narration">她悠悠地說著，突然伸手扯住地上近乎隠形的絲線用力一拽。牆面的机关啟動，幾根長針嗖地射出，針上纏著怪異的術式，調査員不願松開大盾，硬生生用上臂接下了这些攻撃。</div></div>
        <div class="mb-3"><div class="message narration">这一次針上的不是神經毒素，而是某種……更邪悪、更污穢的東西，像活物一般鑽進調査員的身體意識，她的視野逐漸染紅，敵人的聲音変得遥遠。</div></div>
        <div class="mb-3"><div class="message-wrapper character2"><img src="img/dh/severo1.png" alt="Severo" class="avatar"><div class="message character-message w12">認出來了吗？这通信的另一頭，就是你翻遍狄斯城十年都没找到的仇人。</div></div></div>
        <div class="mb-3"><div class="message narration">那串夢魘般的数字占據調査員整个大脳，点燃体内沸騰的狂厄。同時喚醒那段從未掙脱的癲狂記憶。</div></div>
        <div class="mb-3"><div class="message narration">内海提前漲潮，憑这个臨時防線我們撐不住的，請求撤退！！我們必須撤退！！</div></div>
        <div class="mb-3"><div class="message narration">05257885：障礙突破，超環観測錨点建立，狂厄噪声排除，鏈接已穩定。</div></div>
        <div class="mb-3"><div class="message narration">05257885：你們好，FAC蝕月行動全体作戦人員。我是上庭観察者兼聯絡員，已完成数据收集和戦場分析，決定是——行動繼續。</div></div>
        <div class="mb-3"><div class="message narration">05257885：目標只有一個，在任務完成前尽最大努力抵挡内海漲潮。我會協助你們重新部署，以環内相対時間計算，剩余戦力還能抵挡約34分鐘。我理解大家的精神状態已到達極限，所以還帶來一個好消息。</div></div>
        <div class="mb-3"><div class="message narration">05257885：救援部隊已经深入内海。再堅持一下，只要你們能抵挡漲潮，将窗口期延長到44分鐘，他們就會抵達臨時堤壩。振作起來。你們所在的地点是憑意志就可能扭転現実的領域，而你們是全城邦最堅定最有勇氣的人。</div></div>
        <div class="mb-3"><div class="message narration">05257885：你們能做到。</div></div>
        <div class="mb-3"><div class="message-wrapper character1"><div class="message character-message w12">……骗人……我們堅持了3小時，根本没有救援……騙我們留下送死……</div></div></div>
        <div class="mb-3"><div class="message narration">05257885：这次行動意義重大，只能仰賴FAC的各位了。上庭向你們致以最崇高的敬意。</div></div>
        <div class="mb-3"><div class="message-wrapper character1"><div class="message character-message w12">你讓他們死得毫無意義！！！</div></div></div>
        <div class="mb-3"><div class="message-wrapper character2"><img src="img/dh/severo1.png" alt="Severo" class="avatar"><div class="message character-message w12">这么激動，在喊誰呢？</div></div></div>
        <div class="mb-3"><div class="message narration">尖鋭的異物猛地刺入調査員鎖骨，借著劇痛，調査員終于摆脱狂乱，竭力睜眼回到現実。</div></div>
        <div class="mb-3"><div class="message narration">而加洛法諾早已摆脱大盾的圧制，笑容依旧，虚弱却帶著勝利者的傲慢，她緩緩旋転剛插進調査員身体的長針，将毒和污染更深地送進敵人体内。</div></div>
        <div class="mb-3"><div class="message-wrapper character2"><img src="img/dh/severo1.png" alt="Severo" class="avatar"><div class="message character-message w12">反応真大，見到朝思暮想的仇人了?</div></div></div>
        <div class="mb-3"><div class="message-wrapper character1"><div class="message character-message w12">……你從哪儿得到这个編号的？為什麼知道这么多？</div></div></div>
        <div class="mb-3"><div class="message narration">这个編号是調査員唯一掌握的跟那個人有關的線索，她記了10年，找了10年，從不曾在自己噩夢之外再次見到它。如今这个女人却軽易地吐出那最沉重的秘密，而且比自己这个“唯一幸存者”知道更多这串数字背後的信息。</div></div>
        <div class="mb-3"><div class="message-wrapper character1"><div class="message character-message w12">難道那時候……你也在？在内海？還是……上庭？你見過那個人？他是谁，現在在哪里？！</div></div></div>
        <div class="mb-3"><div class="message-wrapper character2"><img src="img/dh/severo1.png" alt="Severo" class="avatar"><div class="message character-message w12">急什麼，我这不正要告訴你吗？</div></div></div>
        <div class="mb-3"><div class="message-wrapper character2"><img src="img/dh/severo1.png" alt="Severo" class="avatar"><div class="message character-message w12">我是在跟狂厄販子打交道，接受他們卑鄙的委托，摳取一点点情報，交換來肮臟的力量。我知道他們不是東西，無所谓。</div></div></div>
        <div class="mb-3"><div class="message-wrapper character2"><img src="img/dh/severo1.png" alt="Severo" class="avatar"><div class="message character-message w12">只有見不得光的混蛋才摸得到黒幕，他們能撕得開上庭的偽装，給那些不可一世的大人物帶來一点点头疼。</div></div></div>
        <div class="mb-3"><div class="message-wrapper character2"><img src="img/dh/severo1.png" alt="Severo" class="avatar"><div class="message character-message w12">靠你我这种普通人，做得到吗？</div></div></div>
        <div class="mb-3"><div class="message narration">哧！又一針，刺入調査員另一側肩頭，毒和狂厄侵蝕得更深，瘋狂折磨这个濱臨暴怒的戦士。</div></div>
        <div class="mb-3"><div class="message narration">她抽出第三根針，却没急著扎下，只移到調査員胸口，針尖慢慢描画，像在探查獵物的心臓。</div></div>
        <div class="mb-3"><div class="message-wrapper character2"><img src="img/dh/severo1.png" alt="Severo" class="avatar"><div class="message character-message w12">我知道自己手臟，被襲撃的上庭人里面，我知道有人無辜——但他們全都有用。</div></div></div>
        <div class="mb-3"><div class="message narration">她抽出第三根針，却没急著扎下，只移到調査員胸口，針尖慢慢描画，像在探查獵物的心臓。</div></div>
        <div class="mb-3"><div class="message-wrapper character2"><img src="img/dh/severo1.png" alt="Severo" class="avatar"><div class="message character-message w12">上庭那幫混蛋從来行踪隠蔽，外人連上庭在哪里都不清楚。可最近，好幾個上庭人空降新城。你我都知道，這幫人來是為了解決西区破事，毫無疑問他們都受重視。</div></div></div>
        <div class="mb-3"><div class="message-wrapper character2"><img src="img/dh/severo1.png" alt="Severo" class="avatar"><div class="message character-message w12">所以我們在此相遇，都為這難得的突破口，要利用他們打聽上庭，打入上庭。</div></div></div>
        <div class="mb-3"><div class="message-wrapper character2"><img src="img/dh/severo1.png" alt="Severo" class="avatar"><div class="message character-message w12">你強行介入保護任務，試圖博取信任。做得很不错了，“正直”的FAC。可無論你多努力，那些貴人也不會把狗帶回上庭。想從那幫混蛋嘴裡得到情報，你得這麼做——</div></div></div>
        <div class="mb-3"><div class="message narration">針尖稍用力，割破調査員大衣前襟，口袋中的花箋露了出來。加洛法諾伸手將花箋取下。</div></div>
        <div class="mb-3"><div class="message-wrapper character2"><img src="img/dh/severo1.png" alt="Severo" class="avatar"><div class="message character-message w12">這是預告函，提前發給獵殺名單上的每一個上庭人。聰明的上庭人一定看得懂，不是恐嚇信——是大發慈悲賞他們的一線生機。謎題不難，他們全都知道我要什麼，想活命就告訴我。明碼標價，給我情報，換取性命，你猜他們說不說？</div></div></div>
        <div class="mb-3"><div class="message-wrapper character1"><div class="message character-message w12">總有人不知道，他們身邊也有毫無關係的人，你連著他們一起——</div></div></div>
        <div class="mb-3"><div class="message-wrapper character2"><img src="img/dh/severo1.png" alt="Severo" class="avatar"><div class="message character-message w12">對，一起！這不就是必要的犧牲嗎，他們會理解的。這樣才更明白機會的重量。總有人會交代的，已經有人交代了。這才是機會的正確使用方式，這才是真正的復仇，我可以捨棄一切身下地獄。你呢，“正直”的FAC？</div></div></div>
        <div class="mb-3"><div class="message-wrapper character2"><img src="img/dh/severo1.png" alt="Severo" class="avatar"><div class="message character-message w12">10年了，除了這揮向空氣的力量，你還做成了什麼？</div></div></div>
        <div class="mb-3"><div class="message narration">污染毒素放大調査員內心的震動和混亂，她大口喘氣，既痛苦又興奮，竟笑了起來。</div></div>
        <div class="mb-3"><div class="message-wrapper character1"><div class="message character-message w12">呵……呵呵……這不還有你嗎？我不用背叛FAC。只要撕開你的嘴，就能得到一切了！</div></div></div>
        <div class="mb-3"><div class="message narration">瘋狂的力量如悶火般燃燒，此刻突然引爆，調査員咆哮著站起身，帶著刺穿自己的長針，沖上前一手掐住加洛法諾的脖子，直將她用力砸進牆裡。</div></div>
        <div class="mb-3"><div class="message narration">幾乎同時，這份暴走的力量觸發警報，刺耳的警鈴響徹山莊，有人鳴槍了。</div></div>
        <div class="mb-3"><div class="message-wrapper character3"><img src="img/dh-safety.png" alt="Safety" class="avatar"><div class="message character-message w12">禁閉者！！放開那個女人，你已經失控了，還不住手？！</div></div></div>
        <div class="mb-3"><div class="message-wrapper character3"><img src="img/dh-safety.png" alt="Safety" class="avatar"><div class="message character-message w12">再不投降，我們要開槍了！！</div></div></div>
        <div class="mb-3"><div class="message narration">狙擊的子彈射穿窗戶，射向調査員的太陽穴。她下意識躲開，桎梏敵人的力量也一時鬆了些。</div></div>
        <div class="mb-3"><div class="message-wrapper character2"><img src="img/dh/severo1.png" alt="Severo" class="avatar"><div class="message character-message w12">哈……哈哈哈哈……了不起的力量，你的狂厄觸發警報了，你要被當成怪物了。現在這副模樣，FAC還要你嗎？他們會殺了你嗎？哈哈哈——</div></div></div>
        <div class="mb-3"><div class="message-wrapper character2"><img src="img/dh/severo1.png" alt="Severo" class="avatar"><div class="message character-message w12">我的仇早就報了。有人幫我了結仇恨，我內心的空洞和怒火都被安撫。我有新的家人，新的人生，我已經得到救贖。</div></div></div>
        <div class="mb-3"><div class="message-wrapper character2"><img src="img/dh/severo1.png" alt="Severo" class="avatar"><div class="message character-message w12">本來也想把你帶回去的，可看來並不是所有被剝奪的人都能成為家人……你讓我更珍惜現在僅有的寶物……</div></div></div>
        <div class="mb-3"><div class="message-wrapper character2"><img src="img/dh/severo1.png" alt="Severo" class="avatar"><div class="message character-message w12">我不會再讓任何人傷害我的所有物。你，還有你想利用我們去討好的傢伙，我都不會放過。</div></div></div>
        <div class="mb-3"><div class="message-wrapper character2"><img src="img/dh/severo1.png" alt="Severo" class="avatar"><div class="message character-message w12">過去我能為復仇傾盡一切，現在也會加倍捍衛我的未來。而在那以後一無所有的你，怎麼可能贏我？喪家野狗，除了瞎眼狂吠，你什麼都做不到。</div></div></div>
        <div class="mb-3"><div class="message narration">調査員咆哮著，試圖沖破那不可見的瘋狂漩渦找出她的敵人。可更多子彈射入這破屋，體內狂厄席捲。</div></div>
        <div class="mb-3"><div class="message narration">加洛法諾早已離開，唯有調查員耳邊糾纏著那個女人纖弱的聲音。</div></div>
        <div class="mb-3"><div class="message-wrapper character2"><img src="img/dh/severo1.png" alt="Severo" class="avatar"><div class="message character-message w12">抱著那點堅持溺死在過去吧。</div></div></div>
      </div>
    `
  },
  {
    bg: "3bg.png",
    rolem: "3m.png",
    nocheck: "3.png",
    check: "3c.png",
    title: "3t.png",
    str: "能力者<br>X「君、ほんと自由に生きてるな。普通の人はこんな風にすぐ仇を討ったりしないよ。敵が増えるのを恐れ、身近な人まで巻き込まれるのを…復讐の代償に怯えるものだ。君は？そんなもの気にしない？君の部下はどうだい？」<br>L「仇を仇で返しあったらきりがないってことか？私に復讐しに来る奴も、復讐を頼む奴も、数え切れないほどいるよ。今さら君が大義を語るつもり？私が正直で善良で大人しくしてたら、私を放っておいてくれるわけ？違うだろ。君たちが遠慮するのは、私が来た奴を容赦なく殺すからだろう。<br>血の償いは血で返す。今から教えてやるよ、復讐の代償ってやつを！」",
    voice: "./mp3/role/3.mp3",
    image1: "3-1.png",
    image2: "3-2.png",
    dialogue: "" // 待补充
  },
  // 其他角色（4-10）数据省略，可按需补充
];

// 全局变量
let swipreCharacter;
let currentCharacterIndex = 0;
let isImage1 = true;

// 初始化角色显示
function showCharacter() {
  changeCharacter(2); // 默认显示角色2
}

// 切换角色
function changeCharacter(index) {
  currentCharacterIndex = index;
  isImage1 = true; // 重置图片状态
  const character = characterMsg[index];

  // 更新PC端角色信息
  $("#roleImg").attr("src", "img/L/role/" + character.image1).removeClass().addClass("animate__animated animate__fadeIn");
  $("#roleBg img:first-child").attr("src", "img/L/role/" + character.bg);
  $("#roleTitle").attr("src", "img/L/role/" + character.title).removeClass().addClass("characterFadeInRight");
  $("#roleStr").html(character.dialogue || character.str).removeClass().addClass("characterFadeInRight chat-wrapper");
  $("#roleMusic").attr("src", character.voice);
  $("#roleSwitch").show();
  $("#roleSwitching").hide();

  // 更新角色选择状态
  $(".character-left-role-l, .character-left-role-r").removeClass("characterChecked");
  $(`#role${index + 1}`).addClass("characterChecked");
}

// 切换角色图片
function switchCharacterImage() {
  const character = characterMsg[currentCharacterIndex];
  isImage1 = !isImage1;
  const newImage = isImage1 ? character.image1 : character.image2;
  $("#roleImg").attr("src", "img/L/role/" + newImage).removeClass().addClass("animate__animated animate__fadeIn");
  $("#roleSwitch").toggle();
  $("#roleSwitching").toggle();
}

// 刷新角色轮播
function refreshCharacterSwiper() {
  if (swipreCharacter) {
    swipreCharacter.destroy(true, true);
  }
  swipreCharacter = new Swiper("#characterpc", {
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 300,
    loop: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      slideChange: function () {
        const index = this.realIndex;
        changeCharacter(index);
      },
    },
  });
}

// 禁用/启用轮播
function changeAllSwipperAbled(type) {
  if (type === 1) {
    swipreCharacter.disable();
  } else {
    swipreCharacter.enable();
  }
}

// 存储角色状态
function characterStorage() {
  // 可根据需要实现本地存储逻辑
}

// 初始化
$(document).ready(function () {
  showCharacter();
  refreshCharacterSwiper();
});
```

     function changeCharacterMobile(index) {
       currentCharacterIndex = index;
       isImage1 = true;
       const character = characterMsg[index];
       $("#roleImgM").attr("src", "img/L/role/" + character.image1).removeClass().addClass("characterFadeInRight");
       $("#roleBgM img:first-child").attr("src", "img/L/role/" + character.bg);
       $("#roleTitleM").attr("src", "img/L/role/" + character.title).removeClass().addClass("characterFadeInRight");
       $("#roleStrM").html(character.dialogue || character.str).removeClass().addClass("animate__animated animate__fadeInLeft chat-wrapper");
       $("#roleMusicM").attr("src", character.voice);
       $("#roleSwitchM").show();
       $("#roleSwitchingM").hide();
       $(".character-left-role-l, .character-left-role-r").removeClass("characterChecked");
       $(`#roleM${index + 1}`).addClass("characterChecked");
     }