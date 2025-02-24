function Custody(){
    this.bannerIndex=1;
}
Custody.prototype.changeTab=function(index){
    this.bannerIndex=index;
    $(".body-con-img").each((v,item)=>{
        console.log(v,item);
        let src=`./custody/img/${v+1}.png`;
        item.src=src;
        if(v==index-1){
            let src=`./custody/img/${v+1}c.png`;
            item.src=src;
        }
    })
    $(".bannerM-checkno").each((v,item)=>{
        item.className="bannerM-checkno"
        if(v==index-1){
            item.className="bannerM-check bannerM-checkno"
        }
    })
    this.changeCon(index)
}
Custody.prototype.changeCon=function(num){
    console.log(num,222)
    $(".con").each((v,item)=>{
        $(`.con${v+1}`).hide()
        $(`.con${num}`).show()
    })
    $(".conM").each((v,item)=>{
        $(`.conM${v+1}`).hide()
        $(`.conM${num}`).show()
    })
}
var custody=new Custody();
custody.changeTab(1);
console.log(custody)