(function ($) {
  var App = function () {
    //获取dom
    this.$version_tab = $("#J_version_tab");
    this.$information_tab = $("#J_information_tab");
    this.$feature_tab = $("#J_feature_tab");
    this.$rookie = $("#J_rookie");
    this.$pop = $(".pop");
    this.$footer = $("#J_footer");
    this.$audio = $("#J_audio");
    this.$pop_video = $(".pop-video");
    this.$video = $(".J_video");
    this.$pvVideo = $(".pvVideo");
    //全局标量
    this.audio = $("#J_audio")[0]; //音频对象
    this.versionSwiper = null; //版本活动swiper
    this.informationSwiper = null; //更多信息swiper
    this.featureSwiper = null; //游戏特色swiper
    this.rookieFlag = 0; //当前角色下标
    this.rookieData = [
      {
        index: 0,
        rookie1: "./assets/img/second/1-1.png",
        rookie2: "./assets/img/second/1-2.png",
        text: "./assets/img/second/1t.png",
        name: "./assets/img/second/1d.png",
        audioEnglish: "./assets/media/1e.mp3",
        video: "Ntj5arWdC7Q",
      },
      {
        index: 1,
        rookie1: "./assets/img/second/2-1.png",
        rookie2: "./assets/img/second/2-2.png",
        text: "./assets/img/second/2t.png",
        name: "./assets/img/second/2d.png",
        audioEnglish: "./assets/media/2e.mp3",
        video: "",
      },
      {
        index: 2,
        rookie1: "./assets/img/second/3-1.png",
        rookie2: "./assets/img/second/3-2.png",
        text: "./assets/img/second/3t.png",
        name: "./assets/img/second/3d.png",
        audioEnglish: "./assets/media/3e.mp3",
        video: "",
      },
    ];
  };

  $.extend(App.prototype, {
    //初始化需要执行函数
    init: function () {
      this.initSwiper();
      this.bindEvent();
    },
    //事件绑定
    bindEvent: function () {
      this.$version_tab.on(
        "click",
        ".tab",
        $.proxy(
          this.handleTabClick,
          this,
          this.$version_tab,
          this.versionSwiper
        )
      );
      this.$information_tab.on(
        "click",
        ".tab",
        $.proxy(
          this.handleTabClick,
          this,
          this.$information_tab,
          this.informationSwiper
        )
      );
      this.$feature_tab.on(
        "click",
        ".tab",
        $.proxy(
          this.handleTabClick,
          this,
          this.$feature_tab,
          this.featureSwiper
        )
      );
      this.$pop.on("click", ".pop-cover", $.proxy(this.handleClickCover, this));
      this.$rookie.on("click", ".switch", $.proxy(this.handleSwitch, this));
      this.$rookie.on("click", ".tab", $.proxy(this.handleRookieSwitch, this));
      this.$rookie.on(
        "click",
        ".media-audio",
        $.proxy(this.handlePlayAudio, this)
      );
      this.$video.on("click", $.proxy(this.handlePlayVideo, this));
      this.$pvVideo.on("click", $.proxy(this.hideKv, this));
    },
    //播放视频
    handlePlayVideo: function (event) {
      var id = event.target.dataset.youtubeid;
      console.log(id, "播放的id");
      $(".pvVideo").show(); //显示视频
      $(".pvVideo").html(
        `
        <iframe width="1280" height="720" src="https://www.youtube.com/embed/${id}" title="【Reverse: 1999】Official Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        `
      );
      $(".wrapper").addClass("overflow-hidden");
      $("body").css({
        overflow: "hidden",
      });
    },
    //播放音乐
    handlePlayAudio: function (event) {
      var target = event.target || event.srcElement;
      var type = $(target).data("type");
      var src = this.rookieData[this.rookieFlag][type];
      if ($(target).hasClass("curr")) {
        this.audio.pause(); /*暂停*/
      } else {
        /*如果已经暂停*/
        this.$audio.attr("src", src);
        this.audio.play(); /*播放*/
      }
      $(target).toggleClass("curr").siblings().removeClass("curr");
      this.endRoleVoice();
    },
    //语音停止
    endRoleVoice: function () {
      this.$audio.bind("ended", function () {
        $(".media-audio").removeClass("curr");
      });
    },
    // 新秀切换
    handleRookieSwitch: function (event) {
      console.log(event.target, event.srcElement, 777);
      var target = event.target || event.srcElement;
      if (this.rookieFlag === $(target).data("flag")) {
        return;
      } else {
        this.rookieFlag = $(target).data("flag");
        var data = this.rookieData[this.rookieFlag];
        this.$rookie.attr("class", `part-content rookie-name-${data.index}`);
        $(target).addClass("curr").siblings().removeClass("curr");
        // this.$rookie.find(".wrap-rookie img").attr("src", data["rookie1"]);
        this.$rookie
          .find(".wrap-rookie")
          .css("background-image", `url(${data["rookie1"]})`);
        this.$rookie.find(".rookie1-text").attr("src", data["text"]);
        this.$rookie.find(".rookie1-name").attr("src", data["name"]);
        this.$rookie.find(".media-video").data("src", data["video"]);
        this.$rookie
          .find(".media-video")
          .removeClass()
          .addClass(`media-video media-video${this.rookieFlag + 1} `);
        $(`.media-video${this.rookieFlag + 1}`).attr(
          "data-youtubeid",
          data["video"]
        );
        if (!data["video"]) {
          $(`.media-video${this.rookieFlag + 1}`).css({
            visibility: "hidden",
          });
        } else {
          $(`.media-video${this.rookieFlag + 1}`).css({
            visibility: "visible",
          });
        }
        this.$rookie.find(".wrap-switch .switch1").addClass("curr");
        this.$rookie.find(".wrap-switch .switch2").removeClass("curr");
        this.audio.pause();
        $(".media-audio").removeClass("curr");
      }
    },
    //形象切换
    handleSwitch: function (event) {
      var target = event.target || event.srcElement;
      var flag = $(target).data("flag");
      $(target).addClass("curr").siblings().removeClass("curr");
      //切换
      var src = this.rookieData[this.rookieFlag][flag];
      // this.$rookie.find(".wrap-rookie img").attr("src", src);
      console.log(src, 7788);
      this.$rookie.find(".wrap-rookie").css("background-image", `url(${src})`);
    },
    //关闭弹窗
    handleClickCover: function (event) {
      var target = event.target || event.srcElement;
      this.$pop_video.find("video")[0].pause();
      $(target).parent(".pop").fadeOut();
    },
    // tab切换
    handleCurrTab: function (target, current) {
      target
        .find(".tab")
        .eq(current)
        .addClass("curr")
        .siblings()
        .removeClass("curr");
    },
    //点击tab导航
    handleTabClick: function (tabTarget, swiperTarget, event) {
      var target = event.target || event.srcElement;
      var current = $(target).data("current");
      this.handleCurrTab(tabTarget, current);
      swiperTarget.slideTo(current, 300, false);
    },
    //初始化swiper
    initSwiper: function () {
      const that = this;
      this.versionSwiper = new Swiper("#versionSwiper", {
        effect: "fade",
        fadeEffect: {
          crossFade: true,
        },
        speed: 300,
        on: {
          slideChange: function () {
            that.handleCurrTab(that.$version_tab, this.activeIndex);
          },
        },
      });
      this.informationSwiper = new Swiper("#informationSwiper", {
        effect: "fade",
        fadeEffect: {
          crossFade: true,
        },
        speed: 300,
        on: {
          slideChange: function () {
            that.handleCurrTab(that.$information_tab, this.activeIndex);
          },
        },
      });
    },
    hideKv(event) {
      if (event.target.nodeName != "IFRAME") {
        $(".pvVideo").hide();
        $(".pvVideo").empty();
        $(".wrapper").removeClass("overflow-hidden");
        $("body").css({
          overflow: "auto",
        });
      }
    },
  });

  $(document).ready(function () {
    new App().init();
  });
})(jQuery);
function changeWan(num){
  console.log(5555)
   if(num==1){
      $(`.partwan-left-img1`).hide();
      $(`.partwan-left-img2`).show();
      $(`.partwan-left-img1c`).show();
      $(`.partwan-left-img2c`).hide(); 
      $(`.partwan-right-1`).show();
      $(`.partwan-right-2`).hide(); 
   }else{
      $(`.partwan-left-img1`).show();
      $(`.partwan-left-img2`).hide();
      $(`.partwan-left-img1c`).hide();
      $(`.partwan-left-img2c`).show(); 
      $(`.partwan-right-1`).hide();
      $(`.partwan-right-2`).show(); 
   }
}