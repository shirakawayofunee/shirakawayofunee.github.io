if (!Number(localStorage.getItem("sl-cookie-pop"))) {
  createCookie();
} else {
  $(".cookie-cont").hide();
}
// 创建cookie提示
function createCookie() {
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
  $("body").append(globalObj.media === "pc" ? pcStr : mobileStr);
}
function closeCookie() {
  $(".cookie-cont").hide();
  localStorage.setItem("sl-cookie-pop", 1);
}
