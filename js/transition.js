// js/transition.js
(function() {
    // 配置：选择你的动画类型 'shutters' (百叶窗) | 'tiles' (方块破碎) | 'curtain' (幕布)
    const TRANSITION_TYPE = 'shutters'; 

    // 初始化：插入遮罩层结构
    function initTransition() {
        const overlay = document.createElement('div');
        overlay.id = 'transition-overlay';
        overlay.className = `transition-${TRANSITION_TYPE}`;
        
        // 根据不同类型生成内部结构
        if (TRANSITION_TYPE === 'shutters') {
            // 生成 5 个竖条
            for (let i = 0; i < 5; i++) {
                let bar = document.createElement('div');
                bar.className = 'transition-bar';
                overlay.appendChild(bar);
            }
        } else if (TRANSITION_TYPE === 'tiles') {
            // 生成网格方块
            for (let i = 0; i < 20; i++) { 
                let tile = document.createElement('div');
                tile.className = 'transition-tile';
                overlay.appendChild(tile);
            }
        } else {
            // 普通幕布
            let layer = document.createElement('div');
            layer.className = 'transition-layer';
            overlay.appendChild(layer);
        }

        document.body.appendChild(overlay);

        // 页面加载进场动画
        setTimeout(() => {
            document.body.classList.add('transition-in-end');
        }, 50);
    }

    // 执行跳转逻辑
    window.goToPage = function(url) {
        // 1. 移除“进场结束”的状态，重置动画
        document.body.classList.remove('transition-in-end');
        
        // 2. 添加“准备离场”的状态，触发遮罩出现动画
        document.body.classList.add('transition-out-start');

        // 3. 等待动画播放完毕后跳转 (根据 CSS 时间调整，这里设为 800ms)
        setTimeout(() => {
            window.location.href = url;
        }, 800);
    }

    // 拦截 A 标签点击
    document.addEventListener('click', function(e) {
        const link = e.target.closest('a');
        if (!link || link.target === '_blank' || link.href.includes('#') || link.href.startsWith('javascript')) return;
        
        e.preventDefault();
        window.goToPage(link.href);
    });

    // 解决浏览器后退缓存问题
    window.addEventListener('pageshow', function(event) {
        if (event.persisted) {
            document.body.classList.remove('transition-out-start');
            document.body.classList.add('transition-in-end');
        }
    });

    // 启动
    initTransition();
})();

window.goToPage = function(url) {
    // 遮罩变黑
    document.body.classList.remove('page-loaded');
    document.body.classList.add('page-exiting');
    
    // 等待 600ms 后跳转
    setTimeout(() => {
        window.location.href = url;
    }, 600);
}