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
    this.$part6 = $(".part6-content-1");
    //全局标量
    this.audio = $("#J_audio")[0]; //音频对象
    this.versionSwiper = null; //版本活动swiper
    this.informationSwiper = null; //更多信息swiper
    this.featureSwiper = null; //游戏特色swiper
    this.rookieFlag = 0; //当前角色下标
    this.rookieData = [
      {
        rookie1: "./assets/img/second/1-1.png",
        rookie2: "./assets/img/second/1-2.png",
        text: "./assets/img/second/1t.png",
        audioChinese: "./assets/media/1c.mp3",
        audioEnglish: "./assets/media/1e.mp3",
        video: "./assets/media/role1.mp4",
      },
      {
        rookie1: "./assets/img/second/2-1.png",
        rookie2: "./assets/img/second/2-2.png",
        text: "./assets/img/second/2t.png",
        audioChinese: "./assets/media/2c.mp3",
        audioEnglish: "./assets/media/2e.mp3",
        video: "",
      },
      {
        rookie1: "./assets/img/second/3-1.png",
        rookie2: "./assets/img/second/3-2.png",
        text: "./assets/img/second/3t.png",
        audioChinese: "./assets/media/3c.mp3",
        audioEnglish: "./assets/media/3e.mp3",
        video: "",
      },
      {
        rookie1: "./assets/img/second/4-1.png",
        rookie2: "./assets/img/second/4-2.png",
        text: "./assets/img/second/4t.png",
        audioChinese: "./assets/media/4c.mp3",
        audioEnglish: "./assets/media/4e.mp3",
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
      this.$footer.on("click", ".footer-tips", $.proxy(this.handleTips, this));
      this.$rookie.on("click", ".switch", $.proxy(this.handleSwitch, this));
      this.$rookie.on("click", ".tab", $.proxy(this.handleRookieSwitch, this));
      this.$rookie.on(
        "click",
        ".media-audio",
        $.proxy(this.handlePlayAudio, this)
      );
      this.$video.on("click", $.proxy(this.handlePlayVideo, this));
      this.$part6.on("click", ".tab", $.proxy(this.changePart6, this));
    },
    changePart6: (name) => {
      let n = $(".part6-content-1").children();

      n.each((v, e) => {
        $(e).removeClass("curr");
      });
      $(name.currentTarget).addClass("curr");
      //console.log($(name.currentTarget).data(`index`))
      let str = `part6-content-2-${$(name.currentTarget).data(`index`)}`;
      $(".part6-bg").removeClass().addClass(`${str} part6-bg`);
    },
    //播放视频
    handlePlayVideo: function (event) {
      var target = event.target || event.srcElement;
      var src = $(target).data("src");
      if (!src) {
        alertShow("敬请期待");
        return;
      }
      if (!this.audio.paused) {
        this.audio.pause(); /*暂停*/
        this.$rookie.find(".media-audio").removeClass("curr");
      }
      this.$pop_video.find("video").attr("src", src);
      this.$pop_video.fadeIn();
      this.$pop_video.find("video")[0].play();
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
    //新秀切换
    handleRookieSwitch: function (event) {
      console.log(555)
      var target = event.target || event.srcElement;
      if (this.rookieFlag === $(target).data("flag")) {
        return;
      } else {
        this.rookieFlag = $(target).data("flag");
        $(`.part2 .wrap-rookie`).css("background-size", "contain");
        var data = this.rookieData[this.rookieFlag];
        $(target).addClass("curr").siblings().removeClass("curr");
        this.$rookie
          .find(".wrap-rookie")
          .css("background-image", `url(${data["rookie1"]})`);
        this.$rookie.find(".rookie1-text").attr("src", data["text"]);
        this.$rookie.find(".media-video").data("src", data["video"]);
        this.$rookie
          .find(".media-video")
          .removeClass()
          .addClass(`media-video media-video${this.rookieFlag + 1} `);
        this.$rookie.find(".wrap-switch .switch1").addClass("curr");
        this.$rookie.find(".wrap-switch .switch2").removeClass("curr");
        this.audio.pause();
        $(".media-audio").removeClass("curr");
        console.log(data)
        // if(data.text =='./assets/img/second/3t.png'){
        //   $(`.part2 .wrap-media`).css(`right`,'11.5rem');
        //   $(`.part2 .wrap-media`).css(`top`,'31rem');
        // }
        // if(data.text =='./assets/img/second/4t.png'){
        //   $(`.part2 .wrap-media`).css(`right`,'13.5rem');
        //   $(`.part2 .wrap-media`).css(`top`,'27rem');
        //   $(`.wrap-rookie`).css(`background-size`,`35%`)
        // }else{
        //   $(`.wrap-rookie`).css(`background-size`,`contain`)
        // }
        // if(data.text =='./assets/img/second/1t.png'||data.text =='./assets/img/second/2t.png'){
        //   $(`.part2 .wrap-media`).css(`right`,'16.5rem');
        //   $(`.part2 .wrap-media`).css(`top`,'30rem');
        // }
      }
    },
    //形象切换
    handleSwitch: function (event) {
      var target = event.target || event.srcElement;
      var flag = $(target).data("flag");
      $(target).addClass("curr").siblings().removeClass("curr");
      //切换
      var src = this.rookieData[this.rookieFlag][flag];
      console.log(src);

      this.$rookie.find(".wrap-rookie").css("background-image", `url(${src})`);
    },
    //适龄弹窗
    handleTips: function () {
      $(".pop-tips").fadeIn();
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
      // this.featureSwiper = new Swiper("#featureSwiper", {
      //   speed: 300,
      //   autoplay: {
      //     stopOnLastSlide: false,
      //   },
      //   navigation: {
      //     nextEl: ".feature-next",
      //     prevEl: ".feature-prev",
      //   },
      //   on: {
      //     slideChange: function () {
      //       that.handleCurrTab(that.$feature_tab, this.activeIndex);
      //     },
      //   },
      // });
    },
  });

  $(document).ready(function () {
    new App().init();
  });
})(jQuery);
function changeWan(num) {
  console.log(5555)
  if (num == 1) {
    $(`.partwan-left-img1`).hide();
    $(`.partwan-left-img2`).show();
    $(`.partwan-left-img1c`).show();
    $(`.partwan-left-img2c`).hide();
    $(`.partwan-right-1`).show();
    $(`.partwan-right-2`).hide();
  } else {
    $(`.partwan-left-img1`).show();
    $(`.partwan-left-img2`).hide();
    $(`.partwan-left-img1c`).hide();
    $(`.partwan-left-img2c`).show();
    $(`.partwan-right-1`).hide();
    $(`.partwan-right-2`).show();
  }
}