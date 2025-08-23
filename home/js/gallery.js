
function openVideomask(){
    window.open('duihua0721.html','_blank')   
}

function openMusicmask(){
    window.open('duihua0722.html','_blank')   
}
function openPapermask(){ 
    window.open('../SL.html','_blank')
}
/* function openEventmask(){
    window.open('duihua0722.html#conversation2','_blank')   
} */

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


function openEventmask(chapterId) {
    // 根据 chapterId 生成目标 URL
    const urlMap = {
      'chapter0-2': 'duihua0722.html#conversation2',
      'chapter0-4': 'duihua0722.html#conversation4',
      'chapter0-6': 'duihua0722.html#conversation6',
      // 大章节1
      'chapter1-1': 'duihua0722.html#conversation8',
      'chapter1-2': 'duihua0722.html#conversation9',
      'chapter1-3': 'duihua0722.html#conversation11',
      'chapter1-4': 'duihua0722.html#conversation12',
      'chapter1-5': 'duihua0722.html#conversation13',
      // 大章节2
      'chapter2-1': 'duihua0722.html#conversation14',
      'chapter2-2': 'duihua0722.html#conversation15',
      'chapter2-3': 'duihua0722.html#conversation16',
      'chapter2-4': 'duihua0722.html#conversation17',
      'chapter2-5': 'duihua0722.html#conversation18',
      'chapter2-6': 'duihua0722.html#conversation19',
      // 大章节3
      'chapter3-1': 'duihua0722.html#conversation20',
      'chapter3-2': 'duihua0722.html#conversation21',
      'chapter3-3': 'duihua0722.html#conversation22',
      'chapter3-4': 'duihua0722.html#conversation23',
      'chapter3-5': 'duihua0722.html#conversation24',
      'chapter3-6': 'duihua0722.html#conversation25',
      'chapter3-1': 'duihua0722.html#conversation26',
      'chapter3-2': 'duihua0722.html#conversation27',
      // 大章节4
      'chapter4-1': 'duihua0722.html#conversation28',
      'chapter4-2': 'duihua0722.html#conversation29',
      'chapter4-3': 'duihua0722.html#conversation30',
      'chapter4-4': 'duihua0722.html#conversation31',
      'chapter4-5': 'duihua0722.html#conversation32'
    };
    const targetUrl = urlMap[chapterId] || 'duihua0722.html#default';
    window.open(targetUrl, '_blank');
  }