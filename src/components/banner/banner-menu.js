(function (APP) {
  APP.Components.BannerMenu = {
    init: function () {
      this.generate();
      this.show();
      this.resize();
    },
    generate: function () {
      
      let bannerContent = document.querySelector('.banner .banner-content')
      let bannerMenu = document.querySelector('.banner .banner-menu')
      let menuBtn = document.querySelector('.banner .banner-menu button')
      
      if (menuBtn) {
        menuBtn.remove()
        bannerMenu.style.height = 'auto'
      }
      
      let moreBtn = document.createElement('button')
      moreBtn.className = 'js-show-more'
      moreBtn.innerHTML = '<i class="bi bi-chevron-down"></i>'
      
      let contentHeight = parseInt(bannerContent.clientHeight);
      let menuHeight = parseInt(bannerMenu.clientHeight);
      
      if (contentHeight < menuHeight) {
        bannerMenu.style.height = `${contentHeight}px`
        bannerMenu.style.overflowY = 'hidden'
        bannerMenu.append(moreBtn)
      } else {
        bannerMenu.style.height = 'auto'
        bannerMenu.style.overflow = 'auto'
      }
    },
    show: function () {
      let bannerMenu = document.querySelector('.banner .banner-menu')
      bannerMenu.addEventListener('click', (e) => {
        if (e.target.className == 'js-show-more') {
          e.target.remove()
          bannerMenu.style.height = "auto"
        }
      })
    },
    resize: function () {
      window.addEventListener('resize', debounce(this.generate.bind(this), 250))
    }
  };
})(window.APP);