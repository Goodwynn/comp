(function (APP) {
  APP.Components.ProductImages = {
    init: function () {
      this.generate();
    },
    generate: function () {
      let thumbsSwiper = new Swiper('.thumbs-swiper', {
        observer: true,
        observeParents: true,
        centeredSlides: true,
        centeredSlidesBounds: true,
        slidesPerView: 3,
        spaceBetween: 20,
        watchOverflow: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        breakpoints: {
          992: {
            direction: 'vertical',
            mousewheel: true,
          }
        }
      });

      let mainSwiper = new Swiper('.main-swiper', {
        observer: true,
        observeParents: true,
        spaceBetween: 10,
        thumbs: {
          swiper: thumbsSwiper
        }
      })
      
    },
  };
})(window.APP);