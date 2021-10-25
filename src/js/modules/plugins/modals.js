(function (APP) {
  APP.Plugins.Modal = {
    init: function () {
      this.effects();
      // this.open();
      // this.close();
    },
    open: function () {
      let openBtn = document.querySelectorAll('[data-micromodal-trigger]')

      openBtn.forEach(item => {
        item.addEventListener('click', (e) => {
        })
      })

    },
    close: function () {
      let closeBtn = document.querySelectorAll('.micromodal-close');

      closeBtn.forEach(item => {
        item.addEventListener('click', (e) => {
          let modalName = e.target.closest('.micromodal').id
          MicroModal.close(modalName)
        })
      })

    },
    effects: function () {
      MicroModal.init({
        onShow: (modal) => {
          console.log(`${modal.id}`)
          document.querySelector('.megamenu').classList.remove('open')
          document.querySelector('.page').classList.add('blur')
          document.querySelector('.header-up').classList.add('blur')
          document.querySelector('.header-functions').classList.add('blur')
        },
        onClose: (modal) => {
          console.log(`${modal.id}`)
          document.querySelector('.page').classList.remove('blur')
          document.querySelector('.header-up').classList.remove('blur')
          document.querySelector('.header-functions').classList.remove('blur')
        }
      })
    }
  };
})(window.APP);