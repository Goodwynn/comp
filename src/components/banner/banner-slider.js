(function (APP) {
  APP.Components.BannerSlider = {
    init: function () {
      new Swiper('.banner-slider .swiper-container', {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      }) 
    },
  };
})(window.APP);