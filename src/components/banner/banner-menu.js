(function (APP) {
  APP.Components.BannerMenu = {
    data: {
      bannerContent: document.querySelector('.banner .banner-content'),
      bannerMenu: document.querySelector('.banner .banner-menu'),
      menuBtn: document.querySelector('.banner .banner-menu .js-show-more'),
      openChecker: false
    },
    init: function () {
      this.generate();
      this.show();
      this.resize();
    },
    generate: function () {

      const contentHeight = this.data.bannerContent.clientHeight
      const menuHeight = this.data.bannerMenu.clientHeight
      
      if (contentHeight < menuHeight && window.innerWidth > 992) {
        this.data.bannerMenu.style.height = `${contentHeight}px`
        this.data.bannerMenu.style.overflowY = 'hidden'
        this.data.menuBtn.style.display = "block"
        this.data.openChecker = false
      } else {
        this.data.bannerMenu.style.height = 'auto'
        this.data.bannerMenu.style.overflow = 'auto'
        this.data.menuBtn.style.display = "none"
        this.data.openChecker = false
      }

    },
    show: function () {

      this.data.menuBtn.onclick = () => {
        if (this.data.openChecker == false) {
          this.data.openChecker = !this.data.openChecker
          this.data.bannerMenu.style.height = 'auto'
          this.data.menuBtn.style.position = 'relative'
          this.data.menuBtn.style.transform = 'rotate(180deg)'
        } else {
          this.data.openChecker = !this.data.openChecker
          this.data.bannerMenu.style.height = `${this.data.bannerContent.clientHeight}px`
          this.data.menuBtn.style.position = 'absolute'
          this.data.menuBtn.style.transform = 'none'
        }
      }

    },
    resize: function () {
      window.addEventListener('resize', debounce(this.generate.bind(this), 250))
    }
  };
})(window.APP);