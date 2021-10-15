(function () {
  let accordion = document.querySelectorAll('.ct-accordion');

  // accordion.forEach(function (item, index) {
  //   item.classList.add('open')
  // })

  accordion.forEach((item, index) => {
    item.addEventListener('click', () => {
      item.classList.toggle('open')
    })
  })

})();