(function (APP) {
  APP.Components.SalesSlider = {
    init: function () {
      this.slider();      
    },
    slider: function () {
      const slider = document.querySelector('.sales-slider .swiper-container')

      new Swiper(slider, {
        slidesPerView: 1,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      })

    }
  };
})(window.APP);
