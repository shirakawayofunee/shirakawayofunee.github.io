// transition.js

(function() {
    // 1. 自动插入遮罩层 HTML
    const curtain = document.createElement('div');
    curtain.className = 'page-transition-curtain';
    document.body.appendChild(curtain);

    // 2. 页面加载后的“进场动画”
    // 使用 setTimeout 稍微延迟一点，确保浏览器渲染完黑底再开始变透明
    setTimeout(() => {
        document.body.classList.add('page-loaded');
    }, 50);

    // 3. 处理点击链接的“离场动画”
    // 监听所有的 A 标签点击
    document.addEventListener('click', function(e) {
        // 查找最近的 A 标签或带有 data-link 的元素
        const link = e.target.closest('a') || e.target.closest('[onclick*="location.href"]');
        
        // 如果没点到链接，或者点了在新窗口打开的链接，就不处理
        if (!link) return;
        if (link.tagName === 'A' && (link.target === '_blank' || link.href.includes('#'))) return;

        // 获取目标 URL
        let targetUrl = '';
        if (link.tagName === 'A') {
            targetUrl = link.href;
            e.preventDefault(); // 阻止浏览器默认的立即跳转
        } else {
            // 处理你代码里那种 div onclick="window.location.href=..." 的写法
            // 这种稍微麻烦点，建议给这些 div 加个 class 比如 'js-link' 并用 data-href 存地址
            // 但为了兼容你现在的代码，我们尝试解析 onclick
            const onclickStr = link.getAttribute('onclick');
            if(onclickStr) {
                const match = onclickStr.match(/location\.href=['"]([^'"]+)['"]/);
                if(match) {
                    targetUrl = match[1];
                    // 阻止原有的 onclick 执行（这一步比较难，建议改 HTML 结构，见下文）
                    link.removeAttribute('onclick'); 
                }
            }
        }

        if (targetUrl) {
            // 执行离场动画
            document.body.classList.remove('page-loaded'); // 遮罩重新变黑
            document.body.classList.add('page-exiting');

            // 等待 CSS 动画播放完 (600ms) 再真正跳转
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 600);
        }
    });

    // 4. 解决“浏览器后退按钮”的 BUG
    // 如果用户按后退键回来，页面可能还盖着黑布，需要强制移除
    window.addEventListener('pageshow', function(event) {
        if (event.persisted) {
            document.body.classList.add('page-loaded');
            document.body.classList.remove('page-exiting');
        }
    });
})();