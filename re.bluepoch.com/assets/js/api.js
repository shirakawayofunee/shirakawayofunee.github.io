let $downloadBox = $(".download-box");
//获取url参数
function judgePosition(val) {
  //return new URL(window.location.href).searchParams.get("bpsrc");
  let include = false;
  window.location.href.split("?").map((v) => {
    if (v.includes(val)) {
      include = true;
    }
  });
  return include;
}
//处理版本配置
function handleVersionConfig(data) {
  if (judgePosition("bpsrc=baidusem")) {
    $downloadBox.find(".box1,.box3").hide(); //隐藏二维码下载和模拟器
    $downloadBox.find(".appstore").attr("href", data.iOSDownloadUrl);
    $downloadBox
      .find(".android")
      .attr(
        "href",
        "https://d.bluepoch.com/prepage/bdsem/reverse1999_bluepoch_bdsem_200401.apk"
      );
  } else {
    $downloadBox.find(".box1 img").attr("src", data.qrCodeDownloadUrl);
    $downloadBox.find(".android").attr("href", data.androidDownloadUrl);
    $downloadBox.find(".appstore").attr("href", data.iOSDownloadUrl);
    $downloadBox.find(".simulator").attr("href", data.simulatorDownloadUrl);
  }
  $(".firstPv").attr("data-src", data.pvVideoUrl);
  if (data.mediaConfigs) handleFollowUs(data.mediaConfigs);
}
//处理社交媒体
function handleFollowUs(mediaConfigs) {
  mediaConfigs.forEach(function (item) {
    $("." + item.code).attr("href", item.url);
  });
}
//获取版本接口数据
function fetchVersionConfig() {
  $.ajax({
    url: `/activity/official/websites/version-page`,
    type: "post",
    data: JSON.stringify({
      gameId: 50001,
      pageVersion: "2.5",
    }),
    dataType: "json",
    contentType: "application/json; charset=utf-8",
    success: function (res) {
      console.log(res);
      handleVersionConfig(res.data);
    },
    error: function (err) {
      console.error(err);
    },
  });
}
fetchVersionConfig();
function judgeSem() {
  // console.log(getQueryString("bpsrc" === "baidusem"),222222222)
  if (judgePosition("bpsrc=baidusem")) {
    $downloadBox.find(".box1,.box3").hide(); //隐藏二维码下载和模拟器
    $downloadBox
      .find(".android")
      .attr(
        "href",
        "https://d.bluepoch.com/prepage/bdsem/reverse1999_bluepoch_bdsem_200401.apk"
      );
    $("body").append(`
                <script type="text/javascript">
                    window._agl = window._agl || [];
                    (function () {
                    _agl.push(
                    ['production', '_f7L2XwGXjyszb4d1e2oxPybgD']
                    );
                    (function () {
                    var agl = document.createElement('script');
                    agl.type = 'text/javascript';
                    agl.async = true;
                    agl.src = 'https://fxgate.baidu.com/angelia/fcagl.js?production=_f7L2XwGXjyszb4d1e2oxPybgD';
                    var s = document.getElementsByTagName('script')[0];
                    s.parentNode.insertBefore(agl, s);
                    })();
                    })();
                </script>
            `);
  }
  if (judgePosition("bpsrc=wxgame")) {
    $("body").append(`
                <script>
                var _hmt = _hmt || [];
                (function() {
                  var hm = document.createElement("script");
                  hm.src = "https://hm.baidu.com/hm.js?5863aa5d2bff781d7cb8909d7af54658";
                  var s = document.getElementsByTagName("script")[0]; 
                  s.parentNode.insertBefore(hm, s);
                })();
                </script>

    `);
  }
}
judgeSem();
function alertShow(str) {
  if (str) {
    $(".allAlert-str").html(str);
  }
  $(".allAlert").show();
  setTimeout(() => {
    $(".allAlert").hide();
  }, 1000);
}
