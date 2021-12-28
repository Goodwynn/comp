(function (APP) {
  APP.Components.ProductPageReview = {
    init: function (item) {
      this.toggle(item)
    },
    toggle: function (item) {
      const productReview = document.querySelectorAll(item)

      productReview.forEach(item => {
        const toggleBtn = item.querySelector('.product-review-answer-toggler')
        
        toggleBtn.addEventListener('click', () => {
          toggleBtn.classList.toggle('open')
          Array.from(item.querySelectorAll('.product-review-answer')).forEach(el => {
            el.classList.toggle('d-none')
          })
        })
      })
    }
  };
})(window.APP);
