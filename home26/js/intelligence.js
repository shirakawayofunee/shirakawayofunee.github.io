
  $(document).ready(() => {
    $('.intelligence-event').on('click', function() {
      const modal = $('.intelligence-modal');
      modal.show();
      setTimeout(() => {
        modal.find('.intelligence-modal-mask').show().css('opacity', 1);
        modal.find('.intelligence-modal-animated-div').css({
          opacity: 1,
          transform: 'translate3d(0, 0, 0) scale(1)'
        });
      }, 10);
    });

    $('.intelligence-modal-mask-click').on('click', function() {
      const modal = $('.intelligence-modal');
      modal.find('.intelligence-modal-animated-div').css({
        opacity: 0,
        transform: 'translate3d(0, -50px, 0) scale(1)'
      });
      modal.find('.intelligence-modal-mask').css('opacity', 0);
      setTimeout(() => {
        modal.hide();
        modal.find('.intelligence-modal-mask').hide();
      }, 300);
    });
  });