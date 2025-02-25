var maskType = false;
window.onload = function () {
  //console.log(window.location)
  let hash = window.location.hash;
  let media = globalObj.media;
  if (hash == "#0") {
    //咨询页
    media === "pc" && changeBanner(0);
    media === "mobile" && changeBannerMobile(0);
  }
  if (hash == "#1") {
    //咨询页
    media === "pc" && changeBanner(1);
    media === "mobile" && changeBannerMobile(1);
  }
  if (hash == "#2") {
    //咨询页
    media === "pc" && changeBanner(2);
    media === "mobile" && changeBannerMobile(2);
  }
  if (hash == "#3") {
    //咨询页
    media === "pc" && changeBanner(3);
    media === "mobile" && changeBannerMobile(3);
  }
  if (hash == "#4") {
    //咨询页
    media === "pc" && changeBanner(4);
    media === "mobile" && changeBannerMobile(4);
  }
};
