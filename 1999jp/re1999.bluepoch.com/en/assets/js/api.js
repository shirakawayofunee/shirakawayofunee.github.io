let $downloadBox = $(".download-box");

//处理版本配置
function handleVersionConfig(data) {
  if (data) {
    $downloadBox.find(".box1 img").attr("src", data.qrCodeDownloadUrl);
    $downloadBox.find(".android").attr("href", data.androidDownloadUrl);
    $downloadBox.find(".appstore").attr("href", data.iOSDownloadUrl);
    $downloadBox.find(".pcDown").attr("href", data.doubleEndDownloadUrl);
    $downloadBox.find(".firstPv").attr("data-youtubeid", data.pvVideoId);
  }
  if (data && data.mediaConfigs) {
    handleFollowUs(data.mediaConfigs);
  }
}
//处理社交媒体
function handleFollowUs(mediaConfigs) {
  mediaConfigs.forEach(function (item) {
    if (item.url !== "") {
      $("." + item.code).attr("href", item.url);
    }
  });
}
//获取版本接口数据
function fetchVersionConfig() {
  $.ajax({
    url: `/activity/official/websites/version-page`,
    type: "post",
    data: JSON.stringify({
      gameId: 60001,
      pageVersion: "2.3",
    }),
    dataType: "json",
    contentType: "application/json; charset=utf-8",
    success: function (res) {
      console.log(res);
      handleVersionConfig(res.data);
      setTimeout(() => {
        initImg([]);
      }, 0);
    },
    error: function (err) {
      console.error(err);
    },
  });
}
fetchVersionConfig();
