(function (APP) {
  APP.Plugins.Menus = {
    init: function () {
      this.megamenu();
      this.usermenu();
    },
    megamenu: function () {
      let button = document.querySelectorAll('.catalog-btn')
      let megamenu = document.querySelector('.megamenu')

      button.forEach(item => {
        item.onclick = (e) => {
          e.stopPropagation();
          megamenu.classList.toggle('open')
          document.querySelector('body').classList.toggle('body-lock')
          document.querySelector('.page').classList.toggle('blur')
          document.querySelector('.footer').classList.toggle('blur')
        }
      })
      
      document.addEventListener('click', () => {
        if (megamenu.classList.contains('open') && !megamenu.querySelector('.container').contains(event.target)) {
          megamenu.classList.remove('open')
          document.querySelector('body').classList.remove('body-lock')
          document.querySelector('.page').classList.remove('blur')
          document.querySelector('.footer').classList.remove('blur')
        }
      })

    },
    usermenu: function () {
      let btnOpen = document.querySelectorAll('.usermenu-btn')
      let btnClose = document.querySelector('.usermenu-close')
      let usermenu = document.querySelector('.usermenu')

      btnOpen.forEach(item => {
        item.onclick = (e) => {
          e.stopPropagation()
          if (document.querySelector('.megamenu').classList.contains('open')) {
            document.querySelector('.megamenu').classList.remove('open')
          }
          usermenu.classList.add('open')
          document.querySelector('body').classList.add('body-lock')
          document.querySelector('.page').classList.add('blur')
          document.querySelector('.header-up').classList.add('blur')
          document.querySelector('.header-functions').classList.add('blur')
          document.querySelector('.footer').classList.add('blur')
        }
      })

      btnClose.onclick = () => {
        usermenu.classList.remove('open')
        document.querySelector('body').classList.remove('body-lock')
        document.querySelector('.page').classList.remove('blur')
        document.querySelector('.header-up').classList.remove('blur')
        document.querySelector('.header-functions').classList.remove('blur')
        document.querySelector('.footer').classList.remove('blur')
      }

      document.addEventListener('click', () => {
        if (usermenu.classList.contains('open') && !usermenu.contains(event.target)) {
          usermenu.classList.remove('open')
          document.querySelector('body').classList.remove('body-lock')
          document.querySelector('.page').classList.remove('blur')
          document.querySelector('.header-up').classList.remove('blur')
          document.querySelector('.header-functions').classList.remove('blur')
          document.querySelector('.footer').classList.remove('blur')
        }
      })
      
    }
  };
})(window.APP);