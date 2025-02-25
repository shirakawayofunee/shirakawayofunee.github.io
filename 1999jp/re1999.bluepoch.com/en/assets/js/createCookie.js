if (!Number(localStorage.getItem("sl-cookie-pop"))) {
  createCookieStyle();
  createCookie("pc");
} else {
  $(".cookie-cont").hide();
}
// 创建cookie样式
function createCookieStyle() {
  const sty = document.createElement("style");
  let str = `
  .sl-cookie-pop {
    position: fixed;
    box-sizing: border-box;
    bottom: 1.5rem;
    left: 0;
    right: 0;
    margin: 0 13.125rem;
    max-width: 93.75rem;
    min-width: 57rem;
    z-index: 9999;
    font-family: back;
  }
  
  .sl-cookie-pop .cookie-pop-cover {
    background-color: #fff;
    opacity: 0.8;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  
  .sl-cookie-pop .cookie-pop-content {
    position: relative;
    box-sizing: border-box;
    height: 100%;
    padding: 1.25rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .sl-cookie-pop .pop-content-left {
    color: #464646;
    font-size: 1.125rem;
    text-indent: 2.5rem;
  }
  
  .sl-cookie-pop .pop-content-left .learn-more {
    color: #c66030;
    text-decoration: underline;
    margin-left: 0.3125rem;
  }
  
  .sl-cookie-pop .pop-content-right {
    position: relative;
    display: flex;
    align-items: center;
  }
  
  .sl-cookie-pop .pop-content-right .accept-btn {
    background: url("./assets/cookie-accept.png") no-repeat;
    width: 9.625rem;
    height: 3.125rem;
    transition: filter 0.3s;
    background-size: cover;
  }
  .sl-cookie-pop .pop-content-right .accept-btn:hover {
    filter: brightness(0.8);
    cursor: pointer;
  }
  
  .sl-cookie-pop .pop-content-right .close-btn {
    width: 3.125rem;
    height: 3.125rem;
    background: url("./assets/cookie-close.png") center no-repeat;
    margin-left: 2rem;
    transition: transform 0.5s;
    background-size: 1.4375rem 1.4375rem;
    transform-origin: center center;
    cursor: pointer;
  }
  .sl-cookie-pop .pop-content-right .close-btn:hover {
    cursor: pointer;
    transform: rotate(180deg);
  }
  /* mobile */
  .cookies-tips {
    display: flex;
    flex-direction: column;
    position: fixed;
    z-index: 999;
    bottom: 3.125rem;
    left: 50%;
    transform: translateX(-50%);
    align-items: center;
    color: #333;
    background-color: rgba(255, 255, 255, 0.9);
    width: 80%;
    padding: 0.9375rem 1.875rem;
    opacity: 1;
    border-radius: 4px;
    transform: opacity 0.8s cubic-bezier(0.32, 0.94, 0.6, 1);
    font-size: 0.75rem;
  }
  .cookies-tips-more {
    color: #c55f30;
    flex-shrink: 1;
    text-decoration: underline;
  }
  
  .cookies-tips-button {
    margin-top: 0.625rem;
    border-radius: 4px;
    padding: 0.3125rem 0.625rem;
    color: #fff;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    letter-spacing: 2px;
    background-color: #c55f30;
  }
  
  `;
  sty.innerHTML = str;
  $("body").append(sty);
}
// 创建cookie提示
function createCookie(media) {
  let pcStr = `
    <div class="sl-cookie-pop cookie-cont">
        <div class="cookie-pop-cover"></div>
        <div class="cookie-pop-content" data-mouse="mid">
            <div class="pop-content-left">This website uses cookies to improve your browsing experience.<a target="_blank" href="https://re1999.bluepoch.com/en/bluepoch/cookie.html" class="learn-more" data-mouse="none">  Learn more</a></div>
            <div class="pop-content-right">
                <div class="accept-btn cookie-btn" onclick="closeCookie()"></div>
                <div class="close-btn cookie-btn" onclick="closeCookie()" data-mouse="none"></div>
            </div>
        </div>
    </div>`;
  let mobileStr = `
<div class="cookie-cont cookies-tips">
    <div class="text">
      <span>This website uses cookies to improve your browsing experience.</span>
      <a href="https://re1999.bluepoch.com/en/bluepoch/cookie.html" target="_blank">
        <span class="cookies-tips-more">Learn more</span>
      </a>
    </div>
    <div class="cookies-tips-button" onclick="closeCookie()">Accept</div>
  </div>
  `;
  $("body").append(media === "pc" ? pcStr : mobileStr);
}
function closeCookie() {
  $(".cookie-cont").hide();
  localStorage.setItem("sl-cookie-pop", 1);
}
