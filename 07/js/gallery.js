
function openVideomask(){
    window.open('../duihua0721.html','_blank')   
}

function openMusicmask(){
    window.open('../duihua0722.html','_blank')   
}
function openPapermask(){ 
    window.open('../SL.html','_blank')
}
// 添加图片切换逻辑
document.querySelectorAll('.gallery-top-bg').forEach(img => {
    img.addEventListener('mouseover', function() {
        const hoverSrc = this.getAttribute('data-img');
        if (hoverSrc) {
            this.setAttribute('data-original-src', this.src); // 保存原始图片路径
            this.src = hoverSrc; // 切换到悬停图片
        }
    });

    img.addEventListener('mouseout', function() {
        const originalSrc = this.getAttribute('data-original-src');
        if (originalSrc) {
            this.src = originalSrc; // 恢复原始图片
        }
    });
});