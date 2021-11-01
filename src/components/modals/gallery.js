(function (APP) {
  APP.Components.GalleryModal = {
    data: {
      swiper: document.querySelector('#gallery-modal .swiper-container')
    },
    init: function () {
      this.generate();
    },
    generate: function () {
      new Swiper(this.data.swiper, {
        observer: true,
        observeParents: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    }
  };
})(window.APP);