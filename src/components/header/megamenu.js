(function () {

  let button = document.querySelector('.catalog-btn');
  let megamenu = document.querySelector('.megamenu');

  button.addEventListener('click', () => {
    megamenu.classList.toggle('open');
    document.querySelector('body').classList.toggle('body-lock')
  })

})();