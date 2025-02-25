(function (global, factory) {
  typeof exports === "object" && typeof module !== "undefined"
    ? (module.exports = factory())
    : typeof define === "function" && define.amd
    ? define(factory)
    : ((global =
        typeof globalThis !== "undefined" ? globalThis : global || self),
      (global.globalObj = factory()));
})(this, function () {
  "use strict";

  // 分享枚举
  const shareEnum = {
    tw: "https://reverse1999.onelink.me/Rh0f/we5y8jxi",
    yu: "https://www.youtube.com/@Reverse1999",
    fb: "https://www.facebook.com/reverse1999global",
    ga: "https://bit.ly/reverse1999", // discord
    gb: "https://www.reddit.com/r/Reverse1999", // reddit
    tt: "https://www.tiktok.com/@reverse1999_official",
    ins: "https://www.instagram.com/reverse_1999_official/",
  };

  // 底部声明枚举
  const statementEnum = {
    privacy: {
      gaKey: "Privacy",
      url: "https://re1999.bluepoch.com/en/bluepoch/privacy.html",
    },
    terms: {
      gaKey: "Terms",
      url: "https://re1999.bluepoch.com/en/bluepoch/terms.html",
    },
    contact: {
      gaKey: "ContactUs",
      url: "mailto:re1999_gl_cs@bluepoch.com",
    },
  };

  // 谷歌埋点枚举
  const gaEnum = {
    tw: {
      ga_top_key: "SNS_top_twitter",
      ga_m_key: "SNS_m_twitter",
      ga_down_Key: "SNS_down_twitter",
      url: shareEnum.tw,
      className: "tw",
      alias: "tw",
    },
    fb: {
      ga_top_key: "SNS_top_facebook",
      ga_m_key: "SNS_m_facebook",
      ga_down_Key: "SNS_down_facebook",
      url: shareEnum.fb,
      className: "fb",
      alias: "fb",
    },
    YouTube: {
      ga_top_key: "SNS_top_youtube",
      ga_m_key: "SNS_m_youtube",
      ga_down_Key: "SNS_down_youtube",
      url: shareEnum.yu,
      className: "yt",
      alias: "yu",
    },
    discord: {
      ga_top_key: "SNS_top_discord",
      ga_m_key: "SNS_m_discord",
      ga_down_Key: "SNS_down_discord",
      url: shareEnum.ga,
      className: "dc",
      alias: "ga",
    },
    reddit: {
      ga_top_key: "SNS_top_reddit",
      ga_m_key: "SNS_m_reddit",
      ga_down_Key: "SNS_down_reddit",
      url: shareEnum.gb,
      className: "rd",
      alias: "gb",
    },
    tiktok: {
      ga_top_key: "SNS_top_tiktok",
      ga_m_key: "SNS_m_tiktok",
      ga_down_Key: "SNS_down_tiktok",
      url: shareEnum.tt,
      className: "tik",
      alias: "tt",
    },
    instagram: {
      ga_top_key: "SNS_top_instagram",
      ga_m_key: "SNS_m_instagram",
      ga_down_Key: "SNS_down_instagram",
      url: shareEnum.ins,
      className: "ins",
      alias: "ins",
    },
  };

  // 下载枚举
  const downloadEnum = {
    ios: "https://reverse1999.onelink.me/Rh0f/o8b6chbd",
    and: "https://reverse1999.onelink.me/Rh0f/ujn2ppo2",
    pc: "https://reverse1999.onelink.me/Rh0f/lici3rai",
    m: "https://reverse1999.onelink.me/Rh0f/qjc6jq6c",
  };

  // 官网枚举
  const siteUrlEnum = {
    zh: "https://re.bluepoch.com/home/",
    en: "https://re1999.bluepoch.com/en/home/",
    jp: "https://re1999.bluepoch.com/jp/home/",
  };

  // 生成器
  class GenerateUrl {
    constructor(media) {
      // 媒体类型 pc|mobile
      this.media = media;
      // 分享枚举
      this.shareMap = shareEnum;
      // 底部声明枚举
      this.statementMap = statementEnum;
      // 下载枚举
      this.downloadMap = downloadEnum;
      // 官网外链
      this.siteUrlMap = siteUrlEnum;
      // 底部埋点枚举
      this.gaMap = gaEnum;
    }

    static initInstance() {
      if (!GenerateUrl.instance) {
        GenerateUrl.instance = new GenerateUrl(getMedia());
        if (GenerateUrl.instance.media === "pc") {
          GenerateUrl.instance.initShare(".share-content.pc");
          GenerateUrl.instance.initStatement(".statement.pc");
        } else {
          GenerateUrl.instance.initShare(".mobile.h-con-bottom");
          GenerateUrl.instance.initStatement(".statementMobile.mobile");
        }
      }
      GenerateUrl.instance.downloadClick = downloadClick;
      GenerateUrl.instance.sendGA = sendGA;
      GenerateUrl.instance.goUrl = goUrl;
      return GenerateUrl.instance;
    }
    // 初始化分享
    initShare(el) {
      if ($(el).children().length !== 0) return;
      let str = "";

      if (this.media === "pc") {
        // pc
        Object.keys(this.gaMap).forEach((key) => {
          // console.log(this.gaMap[key].alias, 3445);
          str += `
          <div class="share-content-item" data-type="share" data-mouse="none">
            <a onclick="globalObj.sendGA('${this.gaMap[key].ga_top_key}')" class="share-content-${this.gaMap[key].alias}" data-mouse="none" data-type="share" href="${this.gaMap[key].url}" target="_blank">
            </a>
          </div>`;
        });
      } else {
        // mobile
        Object.keys(this.gaMap).forEach((key) => {
          str += `
          <a onclick="globalObj.sendGA('${this.gaMap[key].ga_m_key}')" class="share-content-${this.gaMap[key].alias}" data-type="share" href="${this.gaMap[key].url}" target="_blank">
            <img src="./img/mobile/${this.gaMap[key].alias}.png" style="width:3.125rem" />
          </a>`;
        });
      }
      $(el).append(str);
    }
    // 初始化底部声明
    initStatement(el) {
      if ($(el).children().length !== 0) return;
      let str = "";
      let iconMap = [
        "tw",
        "fb",
        "YouTube",
        "discord",
        "reddit",
        "tiktok",
        "instagram",
      ];
      let iconElement = "";
      iconMap.forEach((item) => {
        iconElement += `
        <img src="./img/statement/${item}.png" alt="" onclick="globalObj.sendGA('${this.gaMap[item].ga_down_Key}');globalObj.goUrl('${this.gaMap[item].url}')" class="pointer ${this.gaMap[item].className}">
        `;
      });
      // pc
      if (this.media === "pc") {
        str = `
        <div class="statement-icon">
          ${iconElement}
        </div>
        <div class="statement-la pointer" onclick="showLang()">
          <img src="./img/statement/切换语言.png" alt="">
        </div>
        <div class="statement-choice fadeInUpSelf" style="display: none;">
          <div onclick="globalObj.goUrl('${this.siteUrlMap.en}')">
            English
          </div>
          <div onclick="globalObj.goUrl('${this.siteUrlMap.jp}')">
            日本語
          </div>
        </div>
        <div class="statement-bottom">
          <img src="./img/statement/logo.png" alt="" class="statement-logo">
          <div class="statement-us">
            <div class="statement-a">
              <a onclick="globalObj.sendGA('${this.statementMap.privacy.gaKey}')" href="${this.statementMap.privacy.url}"
                target="_blank">Privacy Policy</a>
              <span>|</span>
              <a onclick="globalObj.sendGA('${this.statementMap.terms.gaKey}')" href="${this.statementMap.terms.url}" target="_blank">Terms
                of Service</a>
              <span>|</span>
              <a onclick="globalObj.sendGA('${this.statementMap.contact.gaKey}')" href="${this.statementMap.contact.url}">Contact Us</a>
            </div>
            <div class="statement-i">
              © Bluepoch Co.,Ltd. All Rights Reserved.
            </div>
          </div>
        </div>
        <a href="https://re1999.bluepoch.com/countdown/en/" target="_blank" class="box-egg"> <img  src="./img/xiang.png" /></a>
      `;
      } else {
        // mobile
        str = `
        <div class="statement-icon">
          ${iconElement}
        </div>
        <div class="flex-center">
          <div class="statement-la pointer flex-align" onclick="showLang()"><img src="./img/statement/lang.png" alt="">
          </div>
        </div>
        <div class="statement-choice fadeInUpSelf" style="display: none;">
          <div onclick="globalObj.goUrl('${this.siteUrlMap.en}')">
            English
          </div>
          <div onclick="globalObj.goUrl('${this.siteUrlMap.jp}')">
            日本語
          </div>
        </div>
        <div class="statement-bottom">
          <div class="" style="margin: 0.625rem 0;text-align:center">
            <img class="statement-logo" src="./img/statement/logo.png" alt="" />
          </div>
          <div class="statement-us">
            <div class="statement-a flex-center">
              <a onclick="globalObj.sendGA('${this.statementMap.privacy.gaKey}')" href="${this.statementMap.privacy.url}"
                target="_blank">Privacy Policy</a>
              <span style="margin: 0.625rem  1.25rem;">|</span>
              <a onclick="globalObj.sendGA('${this.statementMap.terms.gaKey}')" href="${this.statementMap.terms.url}" target="_blank">Terms
                of Service</a>
              <span style="margin: 0.625rem 1.25rem;">|</span>
              <a onclick="globalObj.sendGA('${this.statementMap.contact.gaKey}')" href="${this.statementMap.contact.url}">Contact Us</a>
            </div>
            <div class="statement-i flex-center">
              © Bluepoch Co.,Ltd. All Rights Reserved.
            </div>
          </div>
        </div>
        <a href="https://re1999.bluepoch.com/countdown/en/" target="_blank" class="box-egg-mobile"> <img  src="./img/xiang.png" /></a>`;
      }
      $(el).append(str);
    }
  }
  // 获取媒体类型
  function getMedia() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    // 对于iPad，可能使用的是移动设备的user agent，因此需要检查
    if (/iPad|Macintosh/.test(userAgent) && "ontouchend" in document) {
      return "mobile";
    }
    // 检查是否为PC
    if (/Windows|Macintosh/.test(userAgent)) {
      return "pc";
    }
    // 默认返回移动设备
    return "mobile";
  }
  // 下载
  function downloadClick(media) {
    window.open(downloadEnum[media], "_blank");
  }
  // 外链
  function goUrl(url) {
    window.open(url, "_blank");
  }
  // 发送ga埋点
  function sendGA(key) {
    // alert("发送埋点：" + key);
    console.log("发送埋点1：" + key);
    gtag("event", key);
  }
  return GenerateUrl.initInstance();
});
