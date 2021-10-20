(function (APP) {
  APP.Plugins.Accordion = {
    init: function () {

      let accordion = document.querySelectorAll('.ct-accordion');

      accordion.forEach((item, index) => {
        item.addEventListener('click', () => {
          item.classList.toggle('open')
        })
      })

    }
  };
})(window.APP);