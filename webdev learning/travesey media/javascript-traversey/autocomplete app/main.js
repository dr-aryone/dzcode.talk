const search = document.getElementById('search')
const searchList = document.getElementById('match-list')
const outputHtml = matches => {
  if (matches.length > 0) {
    const html = matches
      .map(
        match => `
  <div class="card card-body mb-1">
  <h4>
  ${match.name}(${match.abbr}) <span class="text-primary">${
          match.capital
        }</span>
  </h4>
  <small> lat : ${match.lat} / long : ${match.long}</small>
  </div>
  `
      )
      .join('')
    searchList.innerHTML = html
  }
}

const searchItems = async searchText => {
  const res = await fetch('data.json')
  const data = await res.json()
  let matches = data.filter(state => {
    const regex = new RegExp(`^${searchText}`, 'gi')
    return state.name.match(regex) || state.abbr.match(regex)
  })
  if (searchText.length === 0) {
    matches = []
    searchList.innerHTML = ''
  }

  outputHtml(matches)
}

search.addEventListener('input', () => searchItems(search.value))
