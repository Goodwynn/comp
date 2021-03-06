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
      if (!document.querySelector('.header-checkout')) {
        APP.Plugins.Menus.init();
      }
      APP.Plugins.CustomSelect.init();
      APP.Plugins.Validator.init();
      // APP.Plugins.Tabs.init();
      // APP.Plugins.Devtools.init();
    };

    app.initComponents = function () {
      if (document.querySelector('.banner')) {
        APP.Components.BannerMenu.init();
        APP.Components.BannerSlider.init();
      }
      if (document.querySelector('.subcategory-page') || document.querySelector('.search-page') || document.querySelector('.sale-page'))  {
        APP.Components.SearchFilter.init();
        APP.Components.Filter.init();
        APP.Components.Subcategory.init();
        APP.Components.SalesCounter.init();
      }
      if (document.querySelector('.sales-page')) {
        APP.Components.SalesSlider.init();
      }
      if (document.querySelector('.product-page-layout')) {
        APP.Components.ProductImages.init();
        APP.Components.ProductDescription.init();
        APP.Components.ProductPageReview.init('.product-review');
        APP.Components.GalleryModal.init();
      }
      if (document.querySelector('.order-page-layout')) {
        APP.Components.OrderPage.init();
      }
      if (document.querySelector('.account-page')) {
        APP.Components.Account.init();
        APP.Components.ProductPageReview.init('.user-reviews-list .ct-accordion');
        APP.Components.OrderPage.change();
      }
      if (!document.querySelector('.header-checkout')) {
        APP.Components.Search.init();
      }
      // if (document.querySelector('.news-list-page')) {
      //   APP.Components.NewsCard.init();
      // }
      APP.Components.ProductSales.init();
      APP.Components.BasketCounter.init();
      APP.Components.BasketTogether.init();
      APP.Components.GoogleSlider.init();
    };

    return app;
  };

  window.onload = function () {
    APP.Initilizer().init();
  }

})(window.APP);