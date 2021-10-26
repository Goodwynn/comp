(function (APP) {
  APP.Plugins.Accordion = {
    init: function () {

      let accordion = document.querySelectorAll('.ct-accordion-title');

      accordion.forEach((item, index) => {
        item.addEventListener('click', () => {
          item.parentNode.classList.toggle('open')
        })
      })

    }
  };
})(window.APP);