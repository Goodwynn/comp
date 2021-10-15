(function () {
  let btnOpen = document.querySelector('.usermenu-btn')
  let btnClose = document.querySelector('.usermenu-close')
  let usermenu = document.querySelector('.usermenu ')

  btnOpen.addEventListener('click', () => {
    usermenu.classList.add('open')
    document.querySelector('body').classList.add('body-lock')
  })

  btnClose.addEventListener('click', () => {
    usermenu.classList.remove('open')
    document.querySelector('body').classList.remove('body-lock')
  })
})();