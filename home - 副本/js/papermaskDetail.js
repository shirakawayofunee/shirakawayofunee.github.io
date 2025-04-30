var papermaskZoom=1;
var paperData=[
    "./some/page/1.jpg",
    "./some/page/2.jpg",
    "./some/page/3.jpg",
    "./some/page/7.jpg",
    "./some/page/8.jpg",
    "./some/page/9.jpg",
    "./some/page/4.jpg",
    "./some/page/5.jpg",
    "./some/page/6.jpg",
]
function papermaskDetailChange(num){
    if(num==1){
        papermaskZoom+=0.1
    }
    if(num==-1){
        papermaskZoom-=0.1
    }
    if(num==0){
        papermaskZoom=1;
    }
    if(papermaskZoom>2){
        papermaskZoom=2;
    }
    if(papermaskZoom<0.1){
        papermaskZoom=0.1;
    }
    $(".papermaskDetailTop-zoom").css("transform",`scale(${papermaskZoom})`)
}
function papermaskDetailDown(){
    var a = document.createElement("a");
    a.href = $(".papermaskDetailTop-zoom")[0].src; 
    a.download = `重返未来`;
    a.style.display = "none"; 
    a.click(); 
    //console.log($(".papermaskDetailTop-zoom")[0].src)
}
function paperShowBig(e,str){
    if(str){
        $("#papermaskDetailTop-zoom").prop("src",`./img/backstory/${str}`);
    }else{
        $("#papermaskDetailTop-zoom").prop("src",e.src);
    }
    papermaskZoom=1;
    $("#papermaskDetail").show();
}
function paperShowHide(){
    papermaskZoom=1;
    $(".papermaskDetail").removeClass("animate__fadeInUp");
    $(".papermaskDetail").addClass("animate__fadeOutDown");
    setTimeout(()=>{
        $(".papermaskDetail").addClass("animate__fadeInUp");
        $(".papermaskDetail").removeClass("animate__fadeOutDown");
        $("#papermaskDetail").hide();
    },300)  
}
function paperRender(){
    paperData.map((v,index)=>{
        let img=`
                <img src="${v}" alt="" data-mouse="mid" onclick="paperShowBig(this)" class="holder-img">
            `;
        if(index<5){
            $(`.p-${index%5}`).append(img);
        }
    })
    setTimeout(()=>{
        imgLoad()
    },1000) 
}
function getShort(){
    var height0=$(".p-0").height();
    var height1=$(".p-1").height();
    var height2=$(".p-2").height();
    var height3=$(".p-3").height();
    var height4=$(".p-4").height();
    switch (Math.min(height0,height1, height2, height3, height4)) {
        case height0:
          return 'p-0'
          break
        case height1:
          return 'p-1'
          break
        case height2:
          return 'p-2'
          break
        case height3:
          return 'p-3'
        case height4:
          return 'p-4'
          break
      }


}
var currentImg=5;
function imgLoad(){
    let img=new Image();
    if(currentImg<paperData.length){
        let imgTu=`
                <img src="${paperData[currentImg]}" alt="" data-mouse="mid" onclick="paperShowBig(this)" class="holder-img">
            `;
        img.onload=()=>{
            $(`.${getShort()}`).append(imgTu)
            imgLoad()
        }
        img.onerror=()=>{
            $(`.${getShort()}`).append(imgTu)
            imgLoad()
        }
        img.src=paperData[currentImg];
        currentImg++;
    }else{
        return
    }
    
}
