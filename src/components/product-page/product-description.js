(function (APP) {
  APP.Components.ProductDescription = {
    data: {
      prodDescr: document.querySelector('.product-description-content'),
      btnShowToggle: document.querySelector('.product-description .show-more'),
      descrLength: 0,
      maxLetters: 250,
      tabsNav: document.querySelectorAll('.product-page-tabs-link'),
      tabsContent: document.querySelectorAll('.product-page-tab')
    },
    init: function () {
      this.textHide();
      this.showText();
      this.tabsInit();
      this.tabsChange();
    },
    textHide: function () {

      Array.from(this.data.prodDescr.querySelectorAll('p')).forEach(item => {
        let text = item.innerHTML
        this.data.descrLength += parseInt(text.length)
        if (this.data.descrLength > this.data.maxLetters) {
          item.classList.add('d-none')
        }
      })

      if (this.data.descrLength < this.data.maxLetters) {
        this.data.btnShowToggle.classList.add('d-none')
      }

    },
    showText: function () {
      this.data.btnShowToggle.addEventListener('click', () => {
        if (this.data.descrLength > this.data.maxLetters) {
          Array.from(this.data.prodDescr.querySelectorAll('p')).forEach(item => {
            item.classList.remove('d-none')
          })
          this.data.descrLength = 0
        } else {
          this.textHide()
        }
      })
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
    }
  };
})(window.APP);