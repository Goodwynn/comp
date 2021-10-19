(function () {
  let btnOpen = document.querySelector('.usermenu-btn')
  let btnClose = document.querySelector('.usermenu-close')
  let usermenu = document.querySelector('.usermenu ')

  btnOpen.addEventListener('click', () => {
    if (document.querySelector('.megamenu').classList.contains('open')) {
      document.querySelector('.megamenu').classList.remove('open')
    }
    usermenu.classList.add('open')
    document.querySelector('body').classList.add('body-lock')
    document.querySelector('.page').classList.add('blur')
    document.querySelector('.header-up').classList.add('blur')
    document.querySelector('.header-functions').classList.add('blur')
  })

  btnClose.addEventListener('click', () => {
    usermenu.classList.remove('open')
    document.querySelector('body').classList.remove('body-lock')
    document.querySelector('.page').classList.remove('blur')
    document.querySelector('.header-up').classList.remove('blur')
    document.querySelector('.header-functions').classList.remove('blur')
  })
})();