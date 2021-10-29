(function (APP) {
  APP.Components.BasketTogether = {
    data: {
      container: document.querySelectorAll('.basket-together .swiper-container')
    },
    init: function () {

      this.data.container.forEach(item => {
        const prevBtn = item.parentNode.querySelector('.swiper-button-prev')
        const nextBtn = item.parentNode.querySelector('.swiper-button-next')
        
        new Swiper(item, {
          slidesPerView: 1,
          spaceBetween: 30,
          observer: true,
          observeParents: true,
          navigation: {
            nextEl: nextBtn,
            prevEl: prevBtn,
          },
        })

      })
    },
  };
})(window.APP);