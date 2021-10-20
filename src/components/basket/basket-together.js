(function (APP) {
  APP.Components.BasketTogether = {
    init: function () {
      const container = document.querySelector('.basket-together .swiper-container');
      const nextBtn = container.parentNode.querySelector('.swiper-button-next')
      const prevBtn = container.parentNode.querySelector('.swiper-button-prev')
    
      new Swiper(container, {
        slidesPerView: 1,
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        navigation: {
          nextEl: nextBtn,
          prevEl: prevBtn,
        },
      })
    },
  };
})(window.APP);