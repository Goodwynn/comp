(function (APP) {
  APP.Plugins.Modal = {
    init: function () {
      MicroModal.init({
        onShow: modal => {
          document.querySelector('.megamenu').classList.remove('open')
          document.querySelector('.page').classList.add('blur')
          document.querySelector('.header-up').classList.add('blur')
          document.querySelector('.header-functions').classList.add('blur')
        },
        onClose: modal => {
          document.querySelector('.page').classList.remove('blur')
          document.querySelector('.header-up').classList.remove('blur')
          document.querySelector('.header-functions').classList.remove('blur')
        }
      })

      this.events()
    },
    events: function () {
      let closeBtn = document.querySelectorAll('.micromodal-close');

      closeBtn.forEach(item => {
        item.addEventListener('click', (e) => {
          let modalName = e.target.closest('.micromodal').id
          MicroModal.close(modalName)
        })
      })

    }
  };
})(window.APP);