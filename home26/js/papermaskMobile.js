function paperShowBigM(e){
    //console.log(e,6666)
    $("#papermaskDetailTop-zoom-mobile").prop("src",e.src);
    $(".papermaskMobileDetail").show();
    $(".papermaskMobileDetail").removeClass("animate__fadeOutDown");
    $(".papermaskMobileDetail").addClass("animate__fadeInUp");
}
function hidePaperBigM(){
     if(true){
        $(".papermaskMobileDetail").removeClass("animate__fadeInUp");
        $(".papermaskMobileDetail").addClass("animate__fadeOutDown");
    setTimeout(()=>{
        $(".papermaskMobileDetail").hide();
    },300)
    }
}
function paperRenderM(){
    paperData.map((v,index)=>{
        let str=`
         <div class="papermask-mid-list-mobile animate__animated animate__fadeInUp">
                <img src="${v}" alt="" onclick="paperShowBigM(this)">
                </div>`;
       // $(".papermask-mid-mobile").append(str);
       if(index<6){
            if(index%2){
                $(".papermask-mid-mobile-r").append(str);
            }else{
                $(".papermask-mid-mobile-l").append(str);
            }
       }          
    })
    setTimeout(()=>{
            imgLoadM()
    },1000) 
}
function getShortM(){
    var height0=$(".papermask-mid-mobile-l").height();
    var height1=$(".papermask-mid-mobile-r").height();
    switch (Math.min(height0,height1)) {
        case height0:
          return 'papermask-mid-mobile-l'
          break
        case height1:
          return 'papermask-mid-mobile-r'
          break
      }
}
var currentImgM=6;
function imgLoadM(){
    let img=new Image();
    if(currentImgM<paperData.length){
        let imgTu=`
                <div class="papermask-mid-list-mobile animate__animated animate__fadeInUp">
                    <img src="${paperData[currentImgM]}" alt="" onclick="paperShowBigM(this)">
                </div>
            `;
        img.onload=()=>{
            $(`.${getShortM()}`).append(imgTu)
            imgLoadM()
        }
        img.onerror=()=>{
            $(`.${getShortM()}`).append(imgTu)
            imgLoadM()
        }
        img.src=paperData[currentImgM];
        currentImgM++;
    }else{
        return
    }
    
}