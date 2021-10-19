(function () {
  const searchField = document.querySelector('.search-block .ct-input');
  const searchResults = document.querySelector('.search-block')

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
})();