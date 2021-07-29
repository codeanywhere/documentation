import runtime from '../../node_modules/regenerator-runtime/runtime'
import Fuse from '../../node_modules/fuse.js'

const initSearch = async () => {
  let closing = null
  const response = await fetch('/searchResultsPool.json')
  const data = await response.json()

  const fuse = new Fuse(data, {
    threshold: 0.4,
    includeScore: true,
    shouldSort: true,
    ignoreLocation: true,
    keys: [
      {
        name: 'section',
        weight: 0.1, //has to be pretty good match
      },
      {
        name: 'subsection',
        weight: 0.2,
      },
      {
        name: 'article',
        weight: 0.3,
      },
      {
        name: 'heading',
        weight: 0.5,
      },
    ],
  })

  const source = document.querySelector('[data-search="source"]')
  const output = document.querySelector('[data-search="output"]')

  const removeResults = () => {
    closing = setTimeout(
      () => output.classList.remove('search_preview__open'),
      500
    )
  }

  const createResults = value => {
    if (closing) clearTimeout(closing)

    output.classList.add('search_preview__open')
    const results = fuse.search(value)

    if (!results || results.length < 1) {
      output.innerHTML = `No results`
      return
    }

    const groups = results.slice(0, 8).reduce(
      (result, { item: { section, ...rest } }) => ({
        ...result,
        [section]: [...(result[section] || []), rest],
      }),
      {}
    )

    const html = `
            ${Object.keys(groups)
              .map(
                key => `
                <div class="search_section">${key.replace(
                  new RegExp(value, 'gi'),
                  innerValue =>
                    `<em class="search_highlight">${innerValue}</em>`
                )}</div>

                ${groups[key]
                  .map(({ article, heading, slug }) => {
                    if (!article) article = key //index search results
                    if (!heading) heading = article //article search results

                    return `
                    <a href="/${slug}" class="search_item" data-search="link"> 
                        <div class="search_page">${article.replace(
                          new RegExp(value, 'gi'),
                          innerValue =>
                            `<em class="search_highlight">${innerValue}</em>`
                        )}</div>
                        <div class="search_heading">${heading.replace(
                          new RegExp(value, 'gi'),
                          innerValue =>
                            `<em class="search_highlight">${innerValue}</em>`
                        )}</div>
                    </a>
                `
                  })
                  .join('')}
            `
              )
              .join('')}
        `

    output.innerHTML = html
  }

  source.addEventListener('blur', removeResults)
  output.addEventListener('click', console.log)

  source.addEventListener('input', ({ target: { value } }) => {
    if (value.length < 2) return removeResults()
    createResults(value)
  })

  source.addEventListener('focus', ({ target: { value } }) => {
    if (value.length < 2) return removeResults()
    createResults(value)
  })
}

initSearch()
