/*
 * @Author: DCBZ
 * @Date: 2025-02-25 08:45:50
 * @LastEditors: your name
 * @LastEditTime: 2025-07-22 21:06:12
 * @Description: 
 * @FilePath: \shirakawayofunee.github.io\home\js\backstoryMobile.js
 */
function backstoryMobileChange(num){
    //console.log(num,6666)
    //console.log($("#backstoryMobileImg").data("index"));
    let index=$("#backstoryMobileImg").data("index");
    let data=index*1+num;
    if(data<1){
        data=10;
    }
    if(data>10){
        data=1;
    }
    let str=`./img/backstoryM/${data}.png`;
    let str2=`./img/backstoryM/t${data}.png`;
    $("#backstoryMobileImg").hide().removeClass("animate__animated animate__fadeInRight");
    $("#backstoryMobileTitle").hide().removeClass("animate__animated animate__fadeInUp");
    $("#backstoryMobileStr").html("").removeClass("animate__animated animate__fadeInUp");
    setTimeout(() => {
            $("#backstoryMobileTitle").addClass("animate__animated animate__fadeInUp");
            $("#backstoryMobileImg").addClass("animate__animated animate__fadeInRight");
            $("#backstoryMobileStr").addClass("animate__animated animate__fadeInUp");
            $("#backstoryMobileImg").show().prop("src",str).data("index",data);
            $("#backstoryMobileTitle").show().prop("src",str2);
            $("#backstoryMobileStr").html(backstoryStr[data-1]);   
        }, 10);
}
function showBigBackstory(e){
    let index=$("#backstoryMobileImg").data("index");
    let url={
        src:`./img/backstory/p${index}d.jpg`
    };
    $("#papermaskDetailTop-zoom-mobile").prop("src",url);
    paperShowBigM(url);
}

// 触摸滑动（移动端）
/* function enableTouchScroll(elementId) {
    const element = document.getElementById(elementId);
    let startY, scrollTop;
  
    element.addEventListener('touchstart', (e) => {
        startY = e.touches[0].pageY;
        scrollTop = element.scrollTop;
    });
  
    element.addEventListener('touchmove', (e) => {
        const y = e.touches[0].pageY;
        const walk = (startY - y) * 1.5;
        element.scrollTop = scrollTop + walk;
        e.stopPropagation();
    });
  } */
  
  // 启用拖拽和触摸滚动
/*   enableDragScroll('backstoryStr'); */
/*   enableTouchScroll('backstoryStr');
  
  document.getElementById('backstoryStr').addEventListener('wheel', (event) => {
    event.stopPropagation();
  }); */

/*   function enableTouchScroll(elementId) {
    const element = document.getElementById(elementId);
    element.style.overflowY = 'auto';
}
 */
document.getElementById('backstoryStr').addEventListener('wheel', (event) => {
    event.stopPropagation();
});