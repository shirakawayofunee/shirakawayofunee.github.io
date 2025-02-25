setTimeout(() => {
  $("[data-pre]").each(function () {
    let img = new Image();
    // console.log("预加载：" + $(this).data("pre"));
    img.src = $(this).data("pre");
  });
}, 2000);
