var gameUrl = "/activity";
var gameModelData = {
  current: 1,
  pageSize: 10,
  gameId: 60001,
};
//游戏信息
function gameMsg(params) {
  params.gameId = 60001;
  return new Promise((resolve, reject) => {
    $.ajax({
      url: `${gameUrl}/official/websites/game/query`,
      type: "post",
      data: JSON.stringify(params),
      dataType: "json",
      contentType: "application/json; charset=utf-8",
      success: function (res) {
        resolve(res.data);
      },
      error: function (err) {
        reject(err);
      },
    });
  });
}

window.onload = gameMsg(gameModelData).then((data) => {
  if (data && data.pageData) {
    $("#iosDownload").attr("href", data.pageData[0].iOSDownloadUrl);
    $("#androidDownload").prop("href", data.pageData[0].androidDownloadUrl);
    globalObj.youtubeVideoId = data.pageData[0].youtubeVideoId; // youtubeId
    $("#imgQR").prop("src", data.pageData[0].qrcodeUrl);
    $("#icon").prop("href", data.pageData[0].iconUrl);
    if (data.pageData[0].mumuDownloadUrl) {
      $("#is_blue").show();
      $("#mumuDownload").prop("href", data.pageData[0].mumuDownloadUrl || "");
      $("#pcDownload_small").prop("href", data.pageData[0].doubleEndUrl);
    } else {
      $("#no_blue").show();
      $("#pcDownload").prop("href", data.pageData[0].doubleEndUrl);
    }
    // 动态赋值底部声明按钮-跟首页按钮地址一致

    if (data.pageData[0].doubleEndUrl) {
      globalObj.downloadMap.pc = data.pageData[0].doubleEndUrl;
    }

    if (data.pageData[0].iOSDownloadUrl) {
      globalObj.downloadMap.ios = data.pageData[0].iOSDownloadUrl;
    }

    if (data.pageData[0].androidDownloadUrl) {
      globalObj.downloadMap.and = data.pageData[0].androidDownloadUrl;
    }

    console.log(globalObj.media, 123);
    // if (globalObj.media === "pc") {
    //   $("#videoDetail").prop("src", data.pageData[0].pvVideoUrl);
    // } else {
    //   $("#videoDetailM").prop("src", data.pageData[0].pvVideoUrl);
    // }

    if (data.pageData[0].isGray) {
      $("#all").addClass("grayAll");
    }
    if (data.pageData[0].yuyueBtnOpen) {
      $(".first-4").hide();
      $(".mobile-allDown").hide();
    } else {
      $(".first-4").show();
      $(".mobile-allDown").show();
    }
  }
});

//获取资讯title
function getAllTitle(num) {
  let apple = gameModelData;
  apple.type = num;
  return new Promise((resolve, reject) => {
    $.ajax({
      url: `${gameUrl}/official/websites/collection/query`,
      type: "post",
      data: JSON.stringify(apple),
      dataType: "json",
      contentType: "application/json; charset=utf-8",
      success: function (res) {
        resolve(res.data);
      },
      error: function (err) {
        reject(err);
      },
    });
  });
}
//获取资讯列表
function getNewsList(params) {
  params.gameId = 60001;
  return new Promise((resolve, reject) => {
    $.ajax({
      url: `${gameUrl}/official/websites/information/query`,
      type: "post",
      data: JSON.stringify(params),
      dataType: "json",
      contentType: "application/json; charset=utf-8",
      success: function (res) {
        resolve(res.data);
      },
      error: function (err) {
        reject(err);
      },
    });
  });
}
//获取资讯轮播图
function getNewsImg(params) {
  params.gameId = 60001;
  return new Promise((resolve, reject) => {
    $.ajax({
      url: `${gameUrl}/official/websites/picture/banner/query`,
      type: "post",
      data: JSON.stringify(params),
      dataType: "json",
      contentType: "application/json; charset=utf-8",
      success: function (res) {
        resolve(res.data);
      },
      error: function (err) {
        reject(err);
      },
    });
  });
}
//获取视频列表
function getVideoList(params) {
  params.gameId = 60001;
  return new Promise((resolve, reject) => {
    $.ajax({
      url: `${gameUrl}/official/websites/video/query`,
      type: "post",
      data: JSON.stringify(params),
      dataType: "json",
      contentType: "application/json; charset=utf-8",
      success: function (res) {
        resolve(res.data);
      },
      error: function (err) {
        reject(err);
      },
    });
  });
}
//获取音乐列表
function getMusicList(params) {
  params.gameId = 60001;
  return new Promise((resolve, reject) => {
    $.ajax({
      url: `${gameUrl}/official/websites/music/query`,
      type: "post",
      data: JSON.stringify(params),
      dataType: "json",
      contentType: "application/json; charset=utf-8",
      success: function (res) {
        resolve(res.data);
      },
      error: function (err) {
        reject(err);
      },
    });
  });
}
//图集列表
function getPictureList(params) {
  params.gameId = 60001;
  return new Promise((resolve, reject) => {
    $.ajax({
      url: `${gameUrl}/official/websites/picture/query`,
      type: "post",
      data: JSON.stringify(params),
      dataType: "json",
      contentType: "application/json; charset=utf-8",
      success: function (res) {
        resolve(res.data);
      },
      error: function (err) {
        reject(err);
      },
    });
  });
}
