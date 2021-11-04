(function (APP) {
  APP.Components.Account = {
    data: {
      tabsNav: document.querySelectorAll('.account-tabs-nav-link'),
      tabsContent: document.querySelectorAll('.account-tabs-content-item')
    },
    init: function () {
      this.tabsInit();
      this.tabsChange();
      this.menuRebase();
      window.addEventListener('resize', debounce(this.menuRebase.bind(this), 250));
    },
    tabsInit: function () {
      this.data.tabsNav[0].classList.add('active')
      this.data.tabsContent[0].classList.add('active')
    },
    tabsChange: function () {
      this.data.tabsNav.forEach((item, index) => {
        item.addEventListener('click', () => {

          this.data.tabsNav.forEach(el => {
            el.classList.remove('active')
          })

          this.data.tabsContent.forEach(el => {
            el.classList.remove('active')
          })

          item.classList.add('active')
          this.data.tabsContent[index].classList.add('active')
        })
      })
    },
    menuRebase: function () {
      let accountMenu = document.querySelector('.account-tabs-nav')

      if ( window.innerWidth < 992 ) {
        accountMenu.remove()
        document.querySelector('.usermenu-login-accordion .ct-accordion-content').prepend(accountMenu)
      } else {
        accountMenu.remove()
        document.querySelector('.account-nav-container').prepend(accountMenu)
      }
    }
  };
})(window.APP);