(function (APP) {
  APP.Components.NewsCard = {
    init: function () {
      this.titleHeight();
    },
    titleHeight: function () {
      const cards = document.querySelectorAll('.news-list-card .news-list-card-title')

      cards.forEach(item => {
        console.log(item.offsetHeight)
      })
    },
  };
})(window.APP);