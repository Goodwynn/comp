(function (APP) {
  APP.Components.Subcategory = {
    init: function () {
      this.start();
      this.change();
    },
    start: function () {
      let activeViewBtn = document.querySelector('.view.active');
      let layouts = document.querySelectorAll('[data-view-layout]');

      layouts.forEach(item => {
        if (item.getAttribute('data-view-layout') == activeViewBtn.getAttribute('data-view') ) {
          item.classList.remove('d-none')
        } else {
          item.classList.add('d-none')
        }

      })

    },
    change: function () {

      let viewBtns = document.querySelectorAll('.view');

      viewBtns.forEach(item => {
        item.addEventListener('click', () => {
          if (!item.classList.contains('active')) {
            viewBtns.forEach(el => {
              el.classList.remove('active')
            })
            item.classList.add('active')
          } else {
          }
          this.start();
        })
      })

    },
  };
})(window.APP);