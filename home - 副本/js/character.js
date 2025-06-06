
let characterMsg=[
    {
        bg:"5bg.png",
        role:"5s.webm",
        rolem:"5m.png",
        gif:"5.webm",
        gifm:"5m.gif",
        nocheck:"5.png",
        check:"5c.png",
        title:"5t.png",
        str:"「個人の意思よりも命令。<br>…昔、そう教えられました」",
        voice:"./mp3/role/5.mp3"
    },
    {
        bg:"9bg.png",
        role:"9s.webm",
        rolem:"9m.png",
        gif:"9.webm",
        gifm:"9m.gif",
        nocheck:"9.png",
        check:"9c.png",
        title:"9t.png",
        str:"「う〜ん、回したい！<br>なにをって？ みて、あの太陽！<br>ピッカピカに光ってるレコードに見えない？」",
        voice:"./mp3/role/9.mp3"
    },
    {
        bg:"3bg.png",
        role:"3s.webm",
        rolem:"3m.png",
        gif:"3.webm",
        gifm:"3m.gif",
        nocheck:"3.png",
        check:"3c.png",
        title:"3t.png",
        str:"「時代の波は絶えず起伏し続け、<br>昼夜のように巡っては流れる。<br>永久に止まることはないでしょう」",
        voice:"./mp3/role/3.mp3"
    },
    {
        bg:"1bg.png",
/*         role:"1s.webm",
        rolem:"1m.png", */
        role:"1-1.png",
        rolem:"1-2.png",
        gif:"1-1.png",
        gifm:"1-2.png",
        nocheck:"1.png",
        check:"1c.png",
        title:"1t.png",
        str:"「新しいマシンの実験なんだけど――<br>えー、きみがいない場合のＢプランなんて<br>用意してないよ…」",
        voice:"./mp3/role/1.mp3"
    },
    {
        bg:"6bg.png",
        role:"6s.webm",
        rolem:"6m.png",
        gif:"6.webm",
        gifm:"6m.gif",
        nocheck:"6.png",
        check:"6c.png",
        title:"6t.png",
        str:"「野獣のうめき声か、地獄からの蹄の音か…わかりましたわ！<br>きっとナイトメアの足音ですわね！…はい？<br>エンジン音、ってなんですの？」",
        voice:"./mp3/role/6.mp3"
    },
    {
        bg:"8bg.png",
        role:"8s.webm",
        rolem:"8m.png",
        gif:"8.webm",
        gifm:"8m.gif",
        nocheck:"8.png",
        check:"8c.png",
        title:"8t.png",
        str:"「おはよう。今、剣先で皿を回す練習をしていた。<br>上手くバランスをとるのがコツだ」",
        voice:"./mp3/role/8.mp3"
    },
    {
        bg:"4bg.png",
        role:"4s.webm",
        rolem:"4m.png",
        gif:"4.webm",
        gifm:"4m.gif",
        nocheck:"4.png",
        check:"4c.png",
        title:"4t.png",
        str:"「需要続々、チャンス続々♪<br>死霊もぞくぞく、未来はワクワク♪」",
        voice:"./mp3/role/4.mp3"
    },
    {
        bg:"7bg.png",
        role:"7s.webm",
        rolem:"7m.png",
        gif:"7.webm",
        gifm:"7m.gif",
        nocheck:"7.png",
        check:"7c.png",
        title:"7t.png",
        str:"「——このトーストはオレがもらう。<br>おまえはもう一枚焼け。」",
        voice:"./mp3/role/7.mp3"
    },
    {
        bg:"2bg.png",
        role:"2s.webm",
        rolem:"2m.png",
        gif:"2.webm",
        gifm:"2m.gif",
        nocheck:"2.png",
        check:"2c.png",
        title:"2t.png",
        str:"「背中が痒くて木にこすりつけてたら、<br>引っかかって吊るされた人がいたんだ。<br>…救助隊に電話したのは私だってこと、<br>今でも気付いてないだろうなぁ。」",
        voice:"./mp3/role/2.mp3"
    },
    {
        bg:"10bg.png",
        role:"10s.webm",
        rolem:"10m.png",
        gif:"10.webm",
        gifm:"10m.gif",
        nocheck:"10.png",
        check:"10c.png",
        title:"10t.png",
        str:"「ハロー、ハロー、ココですヨ。<br>ウチュウからの訪問者、平和をアイするギベオンズアイデス。」",
        voice:"./mp3/role/10.mp3"
    }
];

var swipreCharacter = null;
function showCharacter(){
   swipreCharacter= new Swiper('#characterpc',{
            direction: 'vertical',
            slidesPerView:5,   //分组显示
            centeredSlides:true,  //页面居中
            observer:true,
            observeParents:false,
            slideToClickedSlide: true,
            freeMode: true,
            slidesOffsetBefore:-100, 
            loop:true,
            mousewheel: true,
            touchRatio : 0,
            on:{
                slideChange:function(e){
                    //e.update();
                    //切换人物立绘
                    //需要使用class选择器不能用id  qaq
                    //console.log(e,8888888888888888)
                    changeCharacter(e.realIndex);
                    
                },
                click(e){
                    
                },
                slideChangeTransitionStart: function(e){
                    //console.log(this,222222222)
                    this.enabled=false;
                
                },
                slideChangeTransitionEnd: function(){
                    //alert(this.activeIndex);//切换结束时，告诉我现在是第几个slide
                this.enabled=true;
                },
            }

        });
}

    function changeCharacter(num){
                    characterMsg.map((v,index)=>{
                        let id=`.role${index+1}`;
                        //console.log($(id))
                        $(id).attr("src",`./img/character/${v.nocheck}`);
                     })
                     $(".character-canvas").show();
                     $("#roleImg").hide();
                     let data=characterMsg[num];
                    // console.log(data,555)
                     let idM=`.role${num+1}`;
                     //changeSipneRole(num)
                     $(idM).attr("src",`./img/character/${data.check}`);
                     $(".character-canvas").removeClass("characterFadeInRight").addClass("characterFadeOutLeft");
                     $("#roleTitle").removeClass("characterFadeInRight").addClass("characterFadeOutLeft");
                     $("#roleStr").removeClass("characterFadeInRight").addClass("characterFadeOutLeft");
                     $("#roleBg").removeClass("animate__animated animate__fadeIn").addClass("animate__animated animate__fadeOut");
                     $("#roleMusic").prop("src",data.voice);
                     $("#roleLive").hide();
                     $("#roleLiveing").show();
                     $("#roleButton").removeClass("animate__fadeInUp").addClass("animate__fadeOutDown");

                     playCharacterVioce(2);
                     //jq设置的data不会在dom中显示
                     $("#roleLive").data("url",`./img/role/${data.gif}`);
                     $("#roleLive").data("oldUrl",`./img/role/${data.role}`);
                     //$("#roleVoice").data("url",`${data.voice}`);
                    //  console.log($("#roleVoice").data("url"),2222222222222)
                     setTimeout(() => {        
                        // context.height=context.height;
                        // context2.height=context2.height;
                        context.clearRect(0,0,canvas.width,canvas.height)
                        context2.clearRect(0,0,canvas2.width,canvas2.height)
                                    
                        $("#v1").prop("src",`./img/role/${data.gif}`);
                        $(".character-canvas").removeClass("characterFadeOutLeft").addClass("characterFadeInRight");
                        $("#roleTitle").prop("src",`./img/role/${data.title}`).removeClass("characterFadeOutLeft").addClass("characterFadeInRight");
                        $("#roleBg").css("background-image",`url(./img/role/${data.bg})`).removeClass("animate__animated animate__fadeOut").addClass("animate__animated animate__fadeIn");
                        $("#roleStr").html(data.str).removeClass("characterFadeOutLeft").addClass("characterFadeInRight");
                        $("#roleButton").removeClass("animate__fadeOutDown").addClass("animate__fadeInUp");
                     }, 450);
                     
    }
    function changeLive(num){
       // console.log(5555)
        if(num==1){
            let url=$("#roleLive").data("url");
            $("#v1").prop("src",url);
            video.play();
            $("#roleLive").hide();
            $("#roleLiveing").show();
            $(".character-canvas").show();
            $("#roleImg").hide();
        }
        if(num==2){
            context.height=context.height;
            context2.height=context2.height;  
            let url=$("#roleLive").data("oldUrl");
            // $("#roleImg").prop("src",url);
            // $(".character-canvas").removeClass("characterFadeInRight");
            // $(".character-canvas").hide();
            $("#roleLive").show();
            $("#roleLiveing").hide();
            // $("#roleImg").show();
            $("#v1").prop("src",url);
        }
    }
  
    function playCharacterVioce(num){
        if(num==1){
            $("#roleMusic")[0].play();
            $("#roleVoiceing").show();
            $("#roleVoice").hide();
            //muteMusic(1);
        }
        if(num==2){
            $("#roleMusic")[0].pause();
            $("#roleVoiceing").hide();
            $("#roleVoice").show();
        }
    }
    $("#roleMusic")[0].addEventListener("ended", function() {
			playCharacterVioce(2)
	})
    function changeAllSwipperAbled(num){
        if(num==1){
          swiperAll.allowSlideNext=false;
          swiperAll.allowSlidePrev=false;
        }
        if(num==2){
          swiperAll.allowSlideNext=true;
          swiperAll.allowSlidePrev=true;
        }
       
    }
    //缓存角色图片
    
    function characterStorage(){
        characterMsg.map((v,index)=>{
            var x = document.createElement("VIDEO");
            var Img=new Image();
            Img.src=`./img/role/${v.bg}`;
            x.setAttribute("src", `./img/role/${v.gif}`);
            //console.log("timestart",imgRoleAll) 
        })    
    }
    
    ////spine渲染

var spineData=0;
var rJson=[
    {},
    {
        jsonUrl:"./JSON/300301_hujisheng_p.json",
        atlasUrl:"./JSON/300301_hujisheng_p.atlas",
        animation:"aisibi"
    },
    {
        jsonUrl:"./JSON/300701_weixiukai_p.json",
        atlasUrl:"./JSON/300701_weixiukai_p.atlas",
        animation:"aisibi"
    },
    {
        jsonUrl:"./JSON/300901_sufubi_p.json",
        atlasUrl:"./JSON/300901_sufubi_p.atlas",
        animation:"aisibi"
    },
    {
        jsonUrl:"./JSON/301001_x_p.json",
        atlasUrl:"./JSON/301001_x_p.atlas",
        animation:"aisibi"
    },
    {
        jsonUrl:"./JSON/302001_bolinyidong_p.json",
        atlasUrl:"./JSON/302001_bolinyidong_p.atlas",
        animation:"aisibi"
    },
    {
        jsonUrl:"./JSON/302301_shisihangshi_p.json",
        atlasUrl:"./JSON/302301_shisihangshi_p.atlas",
        animation:"aisibi"
    },
    {
        jsonUrl:"./JSON/303401_xingzhiyan_p.json",
        atlasUrl:"./JSON/303401_xingzhiyan_p.atlas",
        animation:"aisibi"
    },
    {
        jsonUrl:"./JSON/500501_xingti2hao_p.json",
        atlasUrl:"./JSON/500501_xingti2hao_p.atlas",
        animation:"aisibi"
    }
];    
// rJson.map((v,index)=>{
//   var varname="spine"+index;
//   window[varname]=null;
// })
// function changeSipneRole(data){
//     if(window[`spine${data-1}`]){
//         window[`spine${data-1}`].dispose();
//     }
//     //console.log(rJson[data],555)
//     $("#player-container").empty();
//     if(!data){
//         return
//     }
//     var spineM=new spine.SpinePlayer("player-container", {
//         jsonUrl: rJson[data].jsonUrl,
//         atlasUrl: rJson[data].atlasUrl,
//         showControls: false,
//         alpha: true, 
//         backgroundColor: "#00000000",
//         transitionTime: 1,
//         animation: rJson[data].animation,
//         viewport: {
            
//         }
//     });
//     console.log(spineM,555)
// }
