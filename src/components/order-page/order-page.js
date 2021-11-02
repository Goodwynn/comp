(function (APP) {
  APP.Components.OrderPage = {
    init: function () {
      this.check();
      this.change();
      if (document.body.clientWidth < 576){
        this.summary();
      }
    },
    check: function () {
      let orderRadio = document.querySelectorAll('.order-radio');

      orderRadio.forEach(item => {
        const input = item.querySelector('.order-radio-input')
        if (input.checked) {
          item.classList.add('active')
        } else {
          item.classList.remove('active')
        }
      })
    },
    change: function () {
      let orderRadio = document.querySelectorAll('.order-radio');

      orderRadio.forEach(item => {
        const input = item.querySelector('.order-radio-input');
        input.addEventListener('change', () => {
          this.check();
        })
      })
    },
    summary: function () {
      const summaryMini = document.querySelector('.order-summary-mini')
      // const pageHeight = document.body.clientHeight

      window.addEventListener('scroll', () => {
        if (window.pageYOffset > 1800) {
          summaryMini.classList.add('d-none')
        } else {
          summaryMini.classList.remove('d-none')
        }

      })
    }
  };
})(window.APP);