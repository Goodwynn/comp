var APP = window.APP || {};
APP.Plugins = APP.Plugins || {};
APP.Components = APP.Components || {};

window.onbeforeunload = function () {
  window.scrollTo(0, 0)
};

(function (APP) {
  APP.Initilizer = function () {
    var app = {}

    app.init = function () {
      app.initPlugins();
      app.initComponents();
    };

    app.initPlugins = function () {
      APP.Plugins.Modal.init();
      APP.Plugins.Accordion.init();
      APP.Plugins.Menus.init();
    };

    app.initComponents = function () {
      APP.Components.BannerMenu.init();
      APP.Components.BannerSlider.init();
      APP.Components.BasketCounter.init();
      APP.Components.BasketTogether.init();
      APP.Components.Search.init();
      APP.Components.GoogleSlider.init();
    };

    return app;
  };

  // document.addEventListener('DOMContentLoaded', function () {
  //   console.log('page loaded')
  //   APP.Initilizer().init();
  // })

  window.onload = function () {
    console.log('page loaded')
    APP.Initilizer().init();
  }

})(window.APP);