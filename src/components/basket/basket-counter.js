(function (APP) {
  APP.Components.BasketCounter = {
    init: function () {
      const counter = document.querySelectorAll('.basket-counter')

      counter.forEach((item, index) => {
        let counterInput = item.querySelector('.basket-counter-input')
        const btnMinus = item.querySelector('.basket-counter-minus')
        const btnPlus = item.querySelector('.basket-counter-plus')

        btnPlus.addEventListener('click', (e) => {
          let inputValue = parseInt(counterInput.value)
          inputValue += 1
          counterInput.value = inputValue
        })

        btnMinus.addEventListener('click', (e) => {
          let inputValue = parseInt(counterInput.value)
          if (inputValue <= 1) {
            e.preventDefault()
          } else {
            inputValue -= 1
            counterInput.value = inputValue
          }
        })
      })

    },
  };
})(window.APP);
