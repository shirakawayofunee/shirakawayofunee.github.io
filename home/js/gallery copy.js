// 万能切换函数（支持无限个）
$('.partwan-left .wan-tab').on('click', function () {
    const index = $(this).data('index');
    
    // 左侧高亮切换
    $('.partwan-left .wan-tab').removeClass('active');
    $(this).addClass('active');
    
    // 右侧内容切换（只显示对应的）
    $('.partwan-right .wan-content').removeClass('active');
    $('.partwan-right .wan-content').eq(index).addClass('active');
  });