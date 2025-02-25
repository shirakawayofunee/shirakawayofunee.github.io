var musicTimer;
function muteMusic(num, action = true) {
  //console.log($("#bgm"));
  if (num == 1) {
    if (!action) return;
    $("#bgm")[0].pause();
    $(".imgMusicPlay").hide();
    $(".imgMusicStop").show();
  }
  if (num == 2) {
    $("#bgm")[0].play();
    $(".imgMusicPlay").show();
    $(".imgMusicStop").hide();
  }
}
function changeGalleryMusic(type) {
  // alert(type);
  if (type == "play") {
    // alert(globalObj.musicYoutubeVideoId);
    if (globalObj.media === "mobile") {
      showKvM(globalObj.musicYoutubeVideoId);
    } else {
      showKv(globalObj.musicYoutubeVideoId);
    }
    // muteMusic(1);
    $(".music-z").show();
    $(".music-pc").hide();
    // $("#allMusic")[0].play();
  }
  if (type == "stop") {
    $(".music-z").hide();
    $(".music-pc").show();
    // $("#allMusic")[0].pause();
  }
}
function changeMusicProgress() {
  //音乐结束
  if ($("#allMusic")[0].ended) {
    //console.log(777)
    $(".music-z").hide();
    $(".music-pc").show();
    return;
  }
}
