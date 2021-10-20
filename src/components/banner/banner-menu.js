(function (APP) {
  APP.Components.BannerMenu = {
    init: function () {
      this.generate();
      this.show();
    },
    generate: function () {
      let bannerContent = document.querySelector('.banner .banner-content')
      let bannerMenu = document.querySelector('.banner .banner-menu')
      let moreBtn = document.createElement('button')
      moreBtn.className = 'js-show-more'
      moreBtn.innerHTML = '<i class="bi bi-chevron-down"></i>'
    
      let contentHeight = parseInt(bannerContent.clientHeight);
      let menuHeight = parseInt(bannerMenu.clientHeight);
    
      if (contentHeight < menuHeight) {
        bannerMenu.style.height = `${contentHeight}px`
        bannerMenu.style.overflow = 'hidden'
        bannerMenu.append(moreBtn)
      }
    },
    show: function () {
      let bannerMenu = document.querySelector('.banner .banner-menu')
      bannerMenu.addEventListener('click', (e) => {
        if (e.target.className == 'js-show-more') {
          e.target.style.display = "none"
          bannerMenu.style.height = "auto"
        }
      })
    }
  };
})(window.APP);