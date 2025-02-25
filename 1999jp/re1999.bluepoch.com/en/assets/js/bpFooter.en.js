var bpFooter = (function (r) {
  "use strict";
  class a {
    constructor() {
      (this.device = this.setupDevice()),
        (this.footer = document.querySelector("#bp-footer"));
    }
    setupInit() {
      const e = this;
      return new Promise(function (t, o) {
        e.device === "pc" ? e.setupPCStyle() : e.setupMobileStyle(),
          e.device === "pc" ? e.setupPCDom() : e.setupMobileDom(),
          e.setupEvent(),
          t();
      });
    }
    handleLanguageChange(lang) {
      window.open(`${window.location.origin}/${lang}`, "_blank");
    }
    setupPCStyle() {
      const e = document.createElement("style");
      (e.innerHTML = `
    #bp-footer {
        position: relative;
        height: 13.75rem;
        width: 100%;
        background-color: #000;
        padding: 2.1875rem;
        font-family: "Microsoft YaHei";
        box-sizing: border-box;
      }
      #bp-footer .footer-part1,
      #bp-footer .footer-part2 {
        position: relative;
        display: flex;
        justify-content: center;
        margin-left:5rem;
      }
      #bp-footer .footer-part2 {
        margin-top: 2.5rem
      }
      #bp-footer .pointer {
        cursor: pointer;
      }
      #bp-footer .official-media {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      #bp-footer .official-media a {
        margin: 0 1.25rem;
        width: 3rem;
        height: 3rem;
      }
      #bp-footer .official-media img {
        width: 100%;
        height: 100%;
        display: block;
      }
      #bp-footer .official-media .tw:hover {
        content: url(./assets/img/statement/-h-Twitter.png);
      }
      #bp-footer .official-media .fb:hover {
        content: url(./assets/img/statement/-h-Facebook.png);
      }
      #bp-footer .official-media .yt:hover {
        content: url(./assets/img/statement/-h-Youtube.png);
      }
      #bp-footer .official-media .dc:hover {
        content: url(./assets/img/statement/-h-Discord.png);
      }
      #bp-footer .official-media .rd:hover {
        content: url(./assets/img/statement/-h-Reddit.png);
      }
      #bp-footer .official-media .tt:hover {
        content: url(./assets/img/statement/-h-Tiktok.png);
      }
      #bp-footer .language-change {
        background: url(./assets/img/statement/切换语言.png) top/100% no-repeat;
        width: 8.4375rem;
        height: 1.9375rem;
        position: relative;
      }
      #bp-footer .language-choice {
        position: absolute;
        display: none;
        background: #000;
        width: 8.4375rem;
        height: 6.25rem;
        top: -7.5rem;
      }
      #bp-footer .on .language-choice {
        display: block;
      }
      #bp-footer .language-change .lang {
        width: 100%;
        height: 3.125rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.125rem;
        color: #fff;
        cursor: pointer;
        text-decoration: none;
      }
      #bp-footer .lang:hover {
        background: #a9a9a9;
      }
      #bp-footer .footer-logo {
        position: relative;
        width: 24.5rem;
        height: 4.6875rem;
        margin-right: 5rem;
      }
      #bp-footer .footer-logo img {
        width: 100%;
        height: 100%;
        display: block;
      }
      #bp-footer .footer-protocol {
        top: 0.3125rem;
        width: 31.25rem;
        height: 4.6875rem;
        position: relative;
      }
      #bp-footer .protocol {
        position: relative;
        width: 100%;
        display: flex;
        justify-content: space-between;
        color: #fff;
        font-size: 1rem;
      }
      #bp-footer .protocol a {
        text-decoration: none;
        color: #fff;
      }
      #bp-footer .copy-right {
        position: absolute;
        bottom: 0;
        color: #8c8d8c;
        width: 100%;
        font-size: 1rem;
        text-align: center;
      }
    `),
        document.head.appendChild(e);
    }
    setupPCDom() {
      this.footer.innerHTML = `
      <div class="footer-part2">
        <div class="footer-logo">
          <img src="./assets/img/statement/logo.png" alt="" class="footer-logo" />
        </div>
        <div class="footer-protocol">
          <div class="protocol">
            <a onclick="sendGA('Privacy')" href="https://re1999.bluepoch.com/en/bluepoch/privacy.html" target="_blank">Privacy Policy</a>
            <span>|</span>
            <a onclick="sendGA('Terms')" href="https://re1999.bluepoch.com/en/bluepoch/terms.html" target="_blank">Terms of Service</a>
            <span>|</span>
            <a onclick="sendGA('ContactUs')" href="mailto:re1999_gl_cs@bluepoch.com">Contact Us</a>
          </div>
          <div class="copy-right">© Bluepoch Co.,Ltd. All Rights Reserved.</div>
        </div>
        <div class="footer-part1">
          <div class="language-change pointer flex-start self-start">
            <div class="language-choice fadeInUpSelf">
              <a class="lang" onclick="footerRight.handleLanguageChange('/en')">English</a>
              <a class="lang" onclick="footerRight.handleLanguageChange('/jp')">日本語</a>
            </div>
          </div>
        </div>
      </div>
    `;
    }
    setupMobileStyle() {
      const e = document.createElement("style");
      (e.innerHTML = `
    #bp-footer {
        position: relative;
        border-top: 1px solid #4c723c;
        background-color: #000;
        height: 5.125rem;
        font-family: "Microsoft YaHei", sans-serif;
        transform: translate3d(0, 0, 0);
      }
      #bp-footer .footer-link {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 1rem;
        background-color: #292929;
      }
      #bp-footer .footer-link img {
        width: 100%;
        height: 100%;
        display: block;
      }
      #bp-footer .footer-link .link-item {
        margin: 0 1.875rem;
        width: 3.75rem;
        height: 3.75rem;
      }
      #bp-footer .language-change {
        position: relative;
        margin: 5.125rem auto;
        background: url(https://webres-hw.bluepoch.com/icp/en_m/change.png) top/100% no-repeat;
        width: 20rem;
        height: 5.625rem;
      }
      #bp-footer .language-choice {
        display: none;
        background: url(https://webres-hw.bluepoch.com/icp/en_m/language-item.png) top/100% no-repeat;
        width: 15rem;
        height: 10.625rem;
        position: absolute;
        top: 7.125rem;
        left: 2.875rem;
      }
      #bp-footer .language {
        width: 100%;
        height: 100%;
      }
      #bp-footer .choice-item {
        display: block;
        width: 100%;
        height: 50%;
      }
      #bp-footer .language-change.on .language-choice {
        display: block;
      }
      #bp-footer .logo-wrap img {
        width: 29.0625rem;
        display: block;
        margin: 4.25rem auto 0;
      }
      #bp-footer .text-wrap {
        text-align: center;
        font-size: 1.5rem;
        margin-top: 3.375rem;
      }
      #bp-footer .text-wrap .text {
        line-height: 3.75rem;
        display: block;
        color: #a9a9a9;
        text-decoration: none;
      }
      #bp-footer .text-wrap .text4 {
        margin-top: 2.25rem;
      }
      .fadeOutBottomSelf {
        animation-name: selfFadeOutBottom;
        animation-duration: 0.5s;
      }
      @keyframes selfFadeOutBottom {
        0% {
          opacity: 0;
          transform: translateY(-0.625rem);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `),
        document.head.appendChild(e);
    }
    setupMobileDom() {
      this.footer.innerHTML = `
    <div class="language-change ">
        <div class="language-choice fadeOutBottomSelf">
        <div class="choice-item lang goto-en"  onclick="footerRight.handleLanguageChange('/en')"></div>
        <div class="choice-item lang goto-jp"  onclick="footerRight.handleLanguageChange('/jp')"></div>
        </div>
    </div>
    <div class="logo-wrap">
        <img src="https://webres-hw.bluepoch.com/icp/en_m/logo.png" alt="" />
    </div>
    <div class="text-wrap">
        <a class="text text1" target="_blank" href="https://re1999.bluepoch.com/en/bluepoch/privacy.html">Privacy Policy</a>
        <a class="text text2" target="_blank" href="https://re1999.bluepoch.com/en/bluepoch/terms.html">Terms of Service</a>
        <a class="text text3" href="mailto:re1999_gl_cs@bluepoch.com">Contact Us</a>
        <a class="text text4" href="javascript:;">© Bluepoch Co.,Ltd. All Rights Reserved.</a>
    </div>
    `;
    }
    setupEvent() {
      const e = this;
      document
        .getElementsByClassName("language-change")[0]
        .addEventListener("click", function (t) {
          t.target.classList.toggle("on");
        });
      // document
      //   .getElementsByClassName("lang")[0]
      //   .addEventListener("click", function (t) {
      //     let o = t.target.getAttribute("data-lang");
      //     e.setupJump(o), t.stopPropagation();
      //   }),
      // document
      //   .getElementsByClassName("lang")[1]
      //   .addEventListener("click", function (t) {
      //     let o = t.target.getAttribute("data-lang");
      //     e.setupJump(o), t.stopPropagation();
      //   });
    }
    setupDevice() {
      return /iPhone|iPad|iPod|Android/gi.test(navigator.userAgent)
        ? "mobile"
        : "pc";
    }
    setupJump(e) {
      let t = window.location.href;
      t.indexOf("/en/") === -1 && t.indexOf("/jp/") === -1
        ? (window.location.href = t + e)
        : (window.location.href = t.replace("en/", "").replace("jp/", "") + e);
    }
  }
  return (
    (r.SetFooterRight = a),
    Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }),
    r
  );
})({});
