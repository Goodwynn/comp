(function (APP) {
  APP.Components.Filter = {
    init: function () {
      this.generate();
      this.show();
      this.price();
    },
    price: function () {
      let priceFilter = document.querySelector('.filter-price-item')

      noUiSlider.create(priceFilter, {
        start: 0,
        range: {
          'min': [0],
          'max': [1000]
        }
      })
    },
    generate: function () {
      let filterGroup = document.querySelectorAll('.filter .ct-accordion .ct-accordion-content ');

      filterGroup.forEach(item => {
        item.querySelectorAll('.filter-checkbox').forEach((el, index) => {
          if (index > 3) {
            el.classList.add('hidden')
          }
        })
        if ( item.querySelectorAll('.filter-checkbox').length > 3 ) {
          let moreBtn = document.createElement('button');
          moreBtn.className = 'js-show-more'
          moreBtn.innerHTML = 'Показать все'
          item.append(moreBtn)
        }
      })
    },
    show: function () {
      let filterGroup = document.querySelectorAll('.filter .ct-accordion .ct-accordion-content ');

      filterGroup.forEach(item => {
        item.addEventListener('click', (e) => {
          if ( e.target.className == 'js-show-more' ) {
            e.target.remove() 
            item.querySelectorAll('.hidden').forEach((el) => {
              el.classList.remove('hidden')
            })
          }
        })
      })

    }
  };
})(window.APP);