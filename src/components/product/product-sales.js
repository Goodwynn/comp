(function (APP) {
  APP.Components.ProductSales = {
    init: function () {
      this.calcHeight(); 
      this.toggler();
      this.resize();
    },
    calcHeight: function () {
      const productGroup = document.querySelectorAll('.product-sales-group')

      productGroup.forEach(item => {

        const productLineHeight = item.querySelector('.product-sales-list').clientHeight
        const productListItems = []
        const productToggle = item.querySelector('.show-more.toggle')
        let elementHeight = 0

        Array.from(item.querySelectorAll('.product-card')).forEach(el => {
          productListItems.push(el.parentNode)
        })

        productListItems.forEach(item => {
          if (item.clientHeight >= elementHeight) {
            elementHeight = item.clientHeight
          }
        })

        let rows = Math.round(productLineHeight / elementHeight)
        
        productListItems.forEach((item, index) => {
          if ( (productListItems.length / rows) < (index + 1) ) {
            item.classList.add('d-none')
            item.classList.add('hidden')
          } else {
            item.classList.remove('d-none')
            item.classList.remove('hidden')
          }
        })

        if ( rows > 1 ) {
          productToggle.classList.remove('d-none')
        } else {
          productToggle.classList.add('d-none')
        }

      })
    },
    toggler: function () {
      const productGroup = document.querySelectorAll('.product-sales-group')
      
      productGroup.forEach(item => {

        const productToggle = item.querySelector('.show-more.toggle')
        
        productToggle.addEventListener('click', (e) => {
          e.preventDefault()
          productToggle.classList.toggle('open')
          productToggle.querySelector('span')
          Array.from(item.querySelectorAll('.hidden')).forEach(item => {
            item.classList.toggle('d-none')
          })
        })

      })
    },
    resize: function () {
      window.addEventListener('resize', debounce(this.calcHeight.bind(this), 250))
    }
  };
})(window.APP);