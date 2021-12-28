(function (APP) {
  APP.Components.GoogleSlider = {
    init: function () {
      new Swiper('.google-reviews .swiper-container', {
        // effect: 'fade',
        // fadeEffect: {
        //   crossFade: true
        // },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        },
        breakpoints: {
          375: {
            slidesPerView: 1.5,
            spaceBetween: 15,
            centeredSlides: true
          },
          992: {
            slidesPerView: 1,
            spaceBetween: 30
          }
        }
      }) 
    }
  };
})(window.APP);