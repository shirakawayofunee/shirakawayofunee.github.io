var papermaskZoom = 1;
function papermaskDetailChange(num) {
  if (num == 1) {
    papermaskZoom += 0.1;
  }
  if (num == -1) {
    papermaskZoom -= 0.1;
  }
  if (num == 0) {
    papermaskZoom = 1;
  }
  if (papermaskZoom > 2) {
    papermaskZoom = 2;
  }
  if (papermaskZoom < 0.1) {
    papermaskZoom = 0.1;
  }
  $(".papermaskDetailTop-zoom").css("transform", `scale(${papermaskZoom})`);
}
function papermaskDetailDown() {
  var a = document.createElement("a");
  a.href = $(".papermaskDetailTop-zoom")[0].src;
  a.download = `1`;
  a.style.display = "none";
  a.click();
  //console.log($(".papermaskDetailTop-zoom")[0].src)
}
function paperShowBig(e, str) {
  if (str) {
    $("#papermaskDetailTop-zoom").prop("src", `./img/backstory/${str}`);
  } else {
    $("#papermaskDetailTop-zoom").prop("src", e.src);
  }
  papermaskZoom = 1;
  $("#papermaskDetail").show();
}
function paperShowHide() {
  papermaskZoom = 1;
  $(".papermaskDetail").removeClass("animate__fadeInUp");
  $(".papermaskDetail").addClass("animate__fadeOutDown");
  setTimeout(() => {
    $(".papermaskDetail").addClass("animate__fadeInUp");
    $(".papermaskDetail").removeClass("animate__fadeOutDown");
    $("#papermaskDetail").hide();
  }, 300);
}

let isLoading1 = false;
// 渲染pc图集
function paperRender() {
  let params = { current: 1, pageSize: 10 };
  // 请求接口
  getDataPc(params);
  // 初始化滚动加载
  loadMore1(
    {
      el: ".pc .papermask", // 滚动元素
      scrollHeight: ".papermask-mid", // 网页总高度 默认window
      offset: 100, // 距离底部偏移量，达到即可触发
    },
    () => {
      params.current = params.current + 1;
      getDataPc(params);
    }
  );
}

// 滚动底部加载
function loadMore1(obj, fn) {
  if (!obj.scrollHeight) obj.scrollHeight = window;
  $(obj.el).scroll(function () {
    var scrollTop = $(this).scrollTop(); // 滚轮滚动的距离
    var windowHeight = $(this).height(); // 网页的显示区域的高度
    var scrollHeight = $(obj.scrollHeight).height(); // 网页的总高度
    // console.log(scrollTop, windowHeight, scrollHeight);
    if (scrollTop + windowHeight >= scrollHeight - obj.offset) {
      console.log("滚动到底部了");
      fn && !isLoading1 && fn();
    }
    if (scrollTop === 0) {
      console.log("滚动到顶部了");
      $(".indicator-arrow").fadeIn();
    } else {
      $(".indicator-arrow").fadeOut();
    }
  });
}

// 请求接口
function getDataPc(params) {
  isLoading1 = true;
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
      let pcBtn = `<img onclick='downloadPicture("${item.pictureUrl}","${
        item.title || "image"
      }")' src="./img/paperDetail/pc.png" alt="" style="width: 18.3125rem;height: 6.125rem;">`;
      let mBtn = `<img onclick='downloadPicture("${item.mobilePictureUrl}", "${
        item.title || "image"
      }")' src="./img/paperDetail/mobile.png" alt="" style="width: 18.3125rem;height: 6.125rem;margin-top: 20px;">`;
      let str = `
      <div class="flex-row papermask-mid-box">
        <div class="papermask-mid-list" style="flex:3">
          <img
            class="picture-box-img-loading"
            data-src="${coverUrl}"
            src="./img/loading/load.gif"
            alt="">
        </div>
        <div style="margin: 0 0 5% 20px;flex:1" class="self-end">
          ${item.pictureUrl === "" ? "" : pcBtn}
          ${item.mobilePictureUrl === "" ? "" : mBtn}
        </div>
      </div>
      `;
      $(".papermask-mid").append(str);
    });

    isLoading1 = false;
    // lazyImage1(".papermask-mid-list img"); // 懒加载
    new LazyImage({
      el: ".papermask-mid-list img", // 观测元素
      removeEl: "picture-box-img-loading", // 移除的loading占位类
    });
  });
}

// 点击箭头滚动一下
function clickArrow1() {
  $(".pc .papermask").animate({
    scrollTop: $(".papermask-mid-box").height(),
  });
}

// 防抖函数
function debounce(func, wait) {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      func.apply(context, args);
    }, wait);
  };
}

var downloadPictureDebounced = debounce(function (url, title) {
  fetch(url)
    .then((response) => response.blob())
    .then((blob) => {
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.target = "_blank";
      link.download = title || "image";
      link.click();
    });
}, 500); // 防抖时间间隔，单位是毫秒

// 下载图片
function downloadPicture(url, title) {
  if (globalObj.media === "pc") {
    downloadPictureDebounced(url, title);
  } else {
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.download = title || "image";
    link.click();
  }
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
