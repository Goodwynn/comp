var APP = window.APP || {};
APP.Plugins = APP.Plugins || {};
APP.Components = APP.Components || {};

// window.onbeforeunload = function () {
//   window.scrollTo(0, 0)
// };

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
      APP.Plugins.CustomSelect.init();
      APP.Plugins.Devtools.init();
    };

    app.initComponents = function () {
      APP.Components.ProductSales.init();
      if (document.querySelector('.banner')) {
        APP.Components.BannerMenu.init();
      }
      APP.Components.BannerSlider.init();
      APP.Components.BasketCounter.init();
      APP.Components.BasketTogether.init();
      APP.Components.Search.init();
      APP.Components.GoogleSlider.init();
      APP.Components.Filter.init();
      APP.Components.Subcategory.init();
    };

    return app;
  };

  window.onload = function () {
    APP.Initilizer().init();
  }

})(window.APP);