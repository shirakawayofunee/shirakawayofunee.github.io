function paperShowBigM(e) {
  //console.log(e,6666)
  $("#papermaskDetailTop-zoom-mobile").prop("src", e.src);
  $(".papermaskMobileDetail").show();
  $(".papermaskMobileDetail").removeClass("animate__fadeOutDown");
  $(".papermaskMobileDetail").addClass("animate__fadeInUp");
}
function hidePaperBigM() {
  if (true) {
    $(".papermaskMobileDetail").removeClass("animate__fadeInUp");
    $(".papermaskMobileDetail").addClass("animate__fadeOutDown");
    setTimeout(() => {
      $(".papermaskMobileDetail").hide();
    }, 300);
  }
}

let isLoading = false;
// 渲染手机端图集
function paperRenderM() {
  let params = { current: 1, pageSize: 10 };
  // 请求接口
  getDataM(params);
  // 初始化滚动加载
  loadMore(
    {
      el: ".mobile .papermaskMobile", // 滚动元素
      scrollHeight: ".papermask-mid-mobile", // 网页总高度 默认window
      offset: 100, // 距离底部偏移量，达到即可触发
    },
    () => {
      params.current = params.current + 1;
      getDataM(params);
    }
  );
}

// 滚动底部加载
function loadMore(obj, fn) {
  if (!obj.scrollHeight) obj.scrollHeight = window;
  $(obj.el).scroll(function () {
    var scrollTop = $(this).scrollTop(); // 滚轮滚动的距离
    var windowHeight = $(this).height(); // 网页的显示区域的高度
    var scrollHeight = $(obj.scrollHeight).height(); // 网页的总高度
    // console.log(scrollTop, windowHeight, scrollHeight);
    if (scrollTop + windowHeight >= scrollHeight - obj.offset) {
      console.log("滚动到底部了");
      fn && !isLoading && fn();
    }
    if (scrollTop < 50) {
      console.log("滚动到顶部了");
      $(".indicator-arrow").fadeIn();
    } else {
      $(".indicator-arrow").fadeOut();
    }
  });
}

// 请求接口
function getDataM(params) {
  isLoading = true;
  let imgArr = [];
  getPictureList(params).then((res) => {
    if (res.pageData.length === 0) {
      isLoading1 = true;
      return;
    }
    res.pageData.map((v) => {
      imgArr.push(v);
    });
    imgArr.forEach((item) => {
      let coverUrl = ''
      if(item.pictureUrl){
        coverUrl = item.pictureUrl
      }else if(item.coverPictureUrl){
        coverUrl = item.coverPictureUrl
      }else if(item.mobilePictureUrl){
        coverUrl = item.mobilePictureUrl
      }
      let pcBtn = `<div class="down-picture"><img onclick='downloadPicture("${item.pictureUrl}","${item.title}")' src="./img/paperDetail/pc.png" alt=""></div>`;
      let mBtn = `<div class="down-picture"><img onclick='downloadPicture("${item.mobilePictureUrl}", "${item.title}")' src="./img/paperDetail/mobile.png" alt=""></div>`;
      let str = `
        <div class="picture-box">
        <div class="picture-box-img">
          <img
            class="picture-box-img-loading"
            src="./img/loading/load.gif"
            data-src="${coverUrl}"
            alt="">
        </div>
        <div class="space-around" style="margin-top: 0.625rem">
        ${item.pictureUrl === "" ? "" : pcBtn}
        ${item.mobilePictureUrl === "" ? "" : mBtn}
        </div>
      </div>     
      `;
      $(".papermask-mid-mobile").append(str);
    });
    isLoading = false;
    // lazyImage(".picture-box-img img"); // 懒加载
    new LazyImage({
      el: ".picture-box-img img", // 观测元素
      removeEl: "picture-box-img-loading", // 移除的loading占位类
    });
  });
}

// 点击箭头滚动一下
function clickArrow() {
  $(".mobile .papermaskMobile").animate({
    scrollTop: $(".picture-box").height(),
  });
}

// function downloadPicture(url, title) {
//   if (globalObj.media === "pc") {
//     fetch(url)
//       .then((response) => response.blob())
//       .then((blob) => {
//         const link = document.createElement("a");
//         link.href = URL.createObjectURL(blob);
//         link.target = "_blank";
//         link.download = title;
//         link.click();
//       });
//   } else {
//     const link = document.createElement("a");
//     link.href = url;
//     link.target = "_blank";
//     link.download = title;
//     link.click();
//   }
// }
