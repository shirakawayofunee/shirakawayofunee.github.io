/*
 * @Author: DCBZ
 * @Date: 2025-02-25 08:45:50
 * @LastEditors: your name
 * @LastEditTime: 2025-07-20 07:10:49
 * @Description: 
 * @FilePath: \shirakawayofunee.github.io\home\js\gallery.js
 */

function openVideomask(){
    window.open(`${allPath}video.html`,'_blank')   
}
function openMusicmask(){
    window.open(`${allPath}detail.html#music`,'_blank')
}
function openPapermask(){ 
    window.open(`${allPath}detail.html#wallpaper`,'_blank')     
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