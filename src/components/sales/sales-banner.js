(function (APP) {
  APP.Components.SalesCounter = {
    init: function () {
      this.counter()
    },
    counter: function () {

      const second = 1000,
            minute = second * 60,
            hour = minute * 60, 
            day = hour * 24;
            
      const salesEnd = new Date(2022, 10, 7, 0, 0, 0) //YY, MM, DD, hh, mm, ss
      const counter = document.querySelector('.sales-banner-timer-counter')

      setInterval(() => {
        const currentDate = Date.now();

        const diff = salesEnd - currentDate

        const dd = counter.querySelector('.days'),
              hh = counter.querySelector('.hours'),
              mm = counter.querySelector('.minutes'),
              ss = counter.querySelector('.seconds');
              
        dd.innerHTML = Math.floor( diff / day )
        hh.innerHTML = Math.floor( (diff / hour) %24 )
        mm.innerHTML = Math.floor( (diff / minute) %60 )
        ss.innerHTML = Math.floor( (diff / second) %60 )
      

      }, second)

    }
  };
})(window.APP);