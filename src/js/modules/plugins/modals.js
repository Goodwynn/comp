(function (APP) {
  APP.Plugins.Modal = {
    data: {

    },
    init: function () {
      this.effects();
      // this.openModal();
      this.closeModal();
    },

    closeModal: function () {
      let closeBtn = document.querySelectorAll('.micromodal-close')

      closeBtn.forEach(item => {
        item.addEventListener('click', (e) => {
          e.preventDefault()
          const modalOverlay = item.closest('.micromodal-overlay')
          modalOverlay.click()
        })
      })

    },
    effects: function () {
      MicroModal.init({
        disableScroll: true,
        disableFocus: true,
        awaitOpenAnimation: false,
        awaitCloseAnimation: false,
        debugMode: true,
        onShow: modal => {
          if (document.querySelector('.usermenu').classList.contains('open') || document.querySelector('.megamenu').classList.contains('open')) {
            document.querySelector('.usermenu').classList.remove('open')
            document.querySelector('.megamenu').classList.remove('open')
            document.querySelector('body').classList.remove('body-lock')
          }
          document.querySelector('.page').classList.add('blur')
          document.querySelector('.header-up').classList.add('blur')
          document.querySelector('.header-functions').classList.add('blur')
          document.querySelector('.footer').classList.add('blur')
        },
        onClose: modal => {
          document.querySelector('.page').classList.remove('blur')
          document.querySelector('.header-up').classList.remove('blur')
          document.querySelector('.header-functions').classList.remove('blur')
          document.querySelector('.footer').classList.remove('blur')
        }
      })
    }
  };
})(window.APP);