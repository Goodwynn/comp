(function (APP) {
  APP.Components.ProductPageReview = {
    init: function () {
      this.toggle()
    },
    toggle: function () {
      const productReview = document.querySelectorAll('.product-review')

      productReview.forEach(item => {
        const toggleBtn = item.querySelector('.product-review-answer-toggler')
        
        toggleBtn.addEventListener('click', () => {
          Array.from(item.querySelectorAll('.product-review-answer')).forEach(el => {
            el.classList.toggle('d-none')
          })
        })
      })
    }
  };
})(window.APP);
