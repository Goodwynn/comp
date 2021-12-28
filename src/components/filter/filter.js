 (function (APP) {
  APP.Components.Filter = {
    init: function () {
      this.generate();
      this.show();
      this.close();
      // this.price();
      this.pricev2();
    },
    pricev2: function () {
      let priceContainer = document.querySelectorAll('.filter')

      priceContainer.forEach(item => {
        let priceFilter = item.querySelector('.filter-price-item')

        let priceValues = [
          item.querySelector('.filter-price-min'),
          item.querySelector('.filter-price-max')
        ]

        noUiSlider.create(priceFilter, {
          start: [0, 1000],
          connect: true,
          range: {
            'min': [0],
            'max': [1000]
          },
          step: 1
        })

        priceFilter.noUiSlider.on('update', (values, handle) => {
          priceValues[handle].value = values[handle]
        })

        priceValues.forEach((item, handle) => {
          item.addEventListener('change', () => {
            priceFilter.noUiSlider.setHandle(handle, item.value)
          })
        })
      })

    },
    price: function () {
      let priceFilter = document.querySelector('.filter-price-item')
      let priceValues = [
        document.querySelector('.filter-price-min'),
        document.querySelector('.filter-price-max')
      ]

      noUiSlider.create(priceFilter, {
        start: [0, 1000],
        connect: true,
        range: {
          'min': [0],
          'max': [1000]
        },
        step: 1
      })

      priceFilter.noUiSlider.on('update', (values, handle) => {
        priceValues[handle].value = values[handle]
      })

      priceValues.forEach((item, handle) => {
        item.addEventListener('change', () => {
          priceFilter.noUiSlider.setHandle(handle, item.value)
        })
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
            e.target.innerHTML = 'Свернуть'
            item.querySelectorAll('.hidden').forEach((el) => {
              el.classList.remove('hidden')
              el.classList.add('showed')
            })
            setTimeout(() => {
              e.target.classList.add('open')
            })
          }
        })
      })
    },
    close: function () {
      let filterGroup = document.querySelectorAll('.filter .ct-accordion .ct-accordion-content ');

      filterGroup.forEach(item => {
        item.addEventListener('click', (e) => {
          if (e.target.className == 'js-show-more open') {
            e.target.innerHTML = 'Показать всё'
            e.target.classList.remove('open')
            item.querySelectorAll('.showed').forEach((el) => {
              el.classList.remove('showed')
              el.classList.add('hidden')
            })
          }
        })
      })

    }
  };
})(window.APP);