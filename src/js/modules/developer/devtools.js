(function (APP) {
  APP.Plugins.Devtools = {
    init: function () {
      // this.clicks()
    },
    clicks: function () {
      window.addEventListener('click', (e) => {
        console.log(e.target)
      })
    }
  };
})(window.APP);