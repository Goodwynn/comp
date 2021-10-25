(function (APP) {
  APP.Components.Search = {
    init: function () {
      this.desctop();
      this.mobile();
    },
    desctop: function () {
      const searchField = document.querySelector('.header-functions .search-block .ct-input');
      const searchResults = document.querySelector('.header-functions .search-block')
    
      searchField.addEventListener('focus', () => {
        searchResults.classList.add('open')
        document.querySelector('.page').classList.add('blur')
      })
    
      document.addEventListener('click', (event) => {
        let clickInside = searchResults.contains(event.target)
    
        if (!clickInside && searchResults.classList.contains('open')) {
          searchResults.classList.remove('open')
          document.querySelector('.page').classList.remove('blur')
        }
      })
    },
    mobile: function () {
      const searchField = document.querySelector('.micromodal .search-block .ct-input');
      const searchResults = document.querySelector('.micromodal .search-block');

      searchField.addEventListener('focus', () => {
        searchResults.classList.add('open')
      })
    }
  };
})(window.APP);