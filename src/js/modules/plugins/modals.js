(function (APP) {
  APP.Plugins.Modal = {
    init: function () {
      this.effects();
      // this.openModal();
      this.closeModal();
    },
    openModal: function () {
      
      let openBtn = document.querySelectorAll('[data-modal-id]')

      openBtn.forEach(item => {
        item.addEventListener('click', e => {
          const modalName = item.getAttribute('data-modal-id')
          MicroModal.show(modalName)
          document.querySelector('.page').classList.add('blur')
          document.querySelector('.header-up').classList.add('blur')
          document.querySelector('.header-functions').classList.add('blur')
        })
      })
      
    },
    closeModalOld: function () {

      let closeBtn = document.querySelectorAll('[data-micromodal-close]')

      closeBtn.forEach(item => {
        item.addEventListener('click', e => {
          const modalName = item.closest('.micromodal').id
          MicroModal.close(modalName);
          document.querySelector('.page').classList.remove('blur')
          document.querySelector('.header-up').classList.remove('blur')
          document.querySelector('.header-functions').classList.remove('blur')
        })
      })

      let modalContainer = document.querySelectorAll('.micromodal-container')

      modalContainer.forEach(item => {
        item.addEventListener('click', e => {
          e.stopPropagation()
        })
      })
      
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
        debugMode: false,
        onShow: modal => {
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
    }
  };
})(window.APP);