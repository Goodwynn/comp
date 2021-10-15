(function () {

  new Swiper('.google-reviews .swiper-container', {
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction'
    }
  }) 

})();