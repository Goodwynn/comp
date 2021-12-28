(function (APP) {
  APP.Components.OrderPage = {
    init: function () {
      this.check();
      this.change();
      if (document.body.clientWidth < 576){
        this.summary();
      }
      this.rebase();
      window.addEventListener('resize', debounce(this.rebase.bind(this), 250));
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
    },
    rebase: function () {
      if (window.innerWidth < 992) {
        let item = document.querySelector('.order-summary-desctop .order-summary')
        document.querySelector('.order-summary-desctop .order-summary').remove()
        document.querySelector('.order-summary-mobile').append(item)
      } else {
        let item = document.querySelector('.order-summary-mobile .order-summary')
        document.querySelector('.order-summary-mobile .order-summary').remove()
        document.querySelector('.order-summary-desctop').append(item)
      }
    }
  };
})(window.APP);