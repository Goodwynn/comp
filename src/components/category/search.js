(function (APP) {
  APP.Components.SearchFilter = {
    init: function () {
      this.start();
      this.show();
    },
    start: function () {
      let searchGroup = document.querySelectorAll('.search-menu-group')

      searchGroup.forEach(item => {
        let links = item.querySelectorAll('.search-menu-link');

        links.forEach((link, index) => {
          if (index > 1) {
            link.classList.add('d-none')
            link.classList.add('js-hidden')
          } 
        })

        if (links.length > 1) {
          let moreBtn = document.createElement('button')
          moreBtn.className = 'js-show-more'
          moreBtn.innerHTML = 'Еще<i class="bi bi-chevron-down"></i>'
          item.querySelector('.search-menu-content').append(moreBtn)
        }

      })
    },
    show: function () {
      let searchGroup = document.querySelectorAll('.search-menu-group')

      searchGroup.forEach(item => {
        item.addEventListener('click', e => {

          if (e.target.className == 'js-show-more') {
            e.target.classList.add('open')
            e.target.innerHTML = 'Свернуть<i class="bi bi-chevron-down"></i>'
            Array.from(item.querySelectorAll('.js-hidden')).forEach(link => {
              link.classList.remove('d-none')
            })
          } else if (e.target.className == 'js-show-more open') {
            e.target.classList.remove('open')
            e.target.innerHTML = 'Еще<i class="bi bi-chevron-down"></i>'
            Array.from(item.querySelectorAll('.js-hidden')).forEach(link => {
              link.classList.add('d-none')
            })
          }

        })
      })
    }
  };
})(window.APP);