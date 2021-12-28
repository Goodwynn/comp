(function (APP) {
  APP.Plugins.Validator = {
    init: function () {
      this.forms()
    },
    forms: function () { 
      const forms = document.querySelectorAll('form')

      forms.forEach(form => {

        Array.from(form.querySelectorAll('input')).forEach(input => {
          input.oninvalid = () => {
            if (!input.classList.contains('error')) {
              let message = document.createElement('span')
              message.classList.add('error-message')
              message.innerHTML = 'Error message'
              input.parentNode.append(message)
              input.classList.add('error')
            }
          }
        })

        form.onsubmit = () => {
          Array.from(form.querySelectorAll('input')).forEach(input => {
            input.classList.remove('error')
            let message = input.parentNode.querySelector('.error-message')
            if (message) {
              message.remove()
            }
          })
        }
      })

    }
  };
})(window.APP);