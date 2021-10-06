import * as fs from 'fs-extra'
import { kebabCase, flatten } from 'lodash'

type SearchResult = {
  section: string
  subsection: string | null
  article: string
  heading: string | null
  slug: string
}

type ArticleGrandparent = {
  name: string
  slug: string
  contents: ArticleParent[]
}

type ArticleParent = {
  name: string
  slug: string
  contents: Article[]
}

type Article = {
  name: string
  slug: string
}

const isSubsection = (child: ArticleParent | Article) => {
  return (child as ArticleParent).contents !== undefined
}

const updateSearch = async () => {
  const sidebarAsString = await fs.readFile('./sidebar.json', 'utf-8')
  const sidebar: (ArticleGrandparent | ArticleParent)[] = JSON.parse(sidebarAsString)

  //reduce sections to an array of search results
  const searchResults: SearchResult[] = flatten(await Promise.all(sidebar.map(async section => {
    //map every section child (subsection or article) into a Promise that resolves to an array of search results
    const sectionChildrenPromises: Promise<SearchResult[]>[] = section.contents.map(
      async (child: Article | ArticleParent) => {
        //check if section has subsections
        if (isSubsection(child)) {
          const subsection = child as ArticleParent

          //map every article into a Promise that resolves to an array of search results (it may be arrays with one element)
          const subsectionChildrenPromises: Promise<SearchResult[]>[] = subsection.contents.map(
            async ({ name, slug }) => {
              const contentsAsString: string = await fs.readFile(
                `src/docs/markdowns/${section.slug}/${child.slug}/${slug}.md`,
                'utf-8'
              )
              //find headings in article
              const headingsArray: string[] = (contentsAsString.match(/^###.+$/gm) || [])
                .map((match: string) => match.replace(/#\s?/g, ''))
                .map((heading: string) => heading.replace(/\[/, ''))
                .map((heading: string) => heading.replace(/\].+/, ''))
                .map((heading: string) => heading.replace(/\*/g, ''))
                .map((heading: string) => heading.replace(/_/g, ''))
                .map((heading: string) => heading.replace(/<\/?[^>]+(>|$)/g, ''))

              return [
                {
                  section: section.name,
                  subsection: subsection.name,
                  article: name,
                  heading: null,
                  slug: `${section.slug}/${subsection.slug}/${slug}`,
                },
                ...headingsArray.map(
                  (heading: string): SearchResult => ({
                    section: section.name,
                    subsection: subsection.name,
                    article: name,
                    heading,
                    slug: `${section.slug}/${subsection.slug}/${slug}#${kebabCase(heading)}`,
                  })
                ),
              ]
            }
          )

          //subsection is mapped to a resolved subsection search results as a flattend array
          const subsectionSearchResults = await Promise.all(subsectionChildrenPromises)
          const flattendSubsectionSearchResults: SearchResult[] = [].concat(...subsectionSearchResults)

          return flattendSubsectionSearchResults
        }

        //section children are articles
        else {
          const contentsAsString: string = await fs.readFile(
            `src/docs/markdowns/${section.slug}/${child.slug}.md`,
            'utf-8'
          )
          //find headings in the article
          const headingsArray: string[] = (contentsAsString.match(/^###.+$/gm) || [])
            .map((match: string) => match.replace(/#\s?/g, ''))
            .map((heading: string) => heading.replace(/\[/, ''))
            .map((heading: string) => heading.replace(/\].+/, ''))
            .map((heading: string) => heading.replace(/\*/g, ''))
            .map((heading: string) => heading.replace(/_/g, ''))
            .map((heading: string) => heading.replace(/<\/?[^>]+(>|$)/g, ''))

          //article is mapped to a search results array
          return [
            {
              section: section.name,
              subsection: null,
              article: child.name,
              heading: null,
              slug: `${section.slug}/${child.slug}`,
            },
            ...headingsArray.map(
              (heading: string): SearchResult => ({
                section: section.name,
                subsection: null,
                article: child.name,
                heading,
                slug: `${section.slug}/${child.slug}#${kebabCase(heading)}`,
              })
            ),
          ]
        }
      }
    )

    return flatten(await Promise.all(sectionChildrenPromises))
  })))

  const sectionsIndexHeadings = flatten(await Promise.all(sidebar.map(async (section: ArticleParent | ArticleGrandparent) => {
    const contentsAsString: string = await fs.readFile(`src/docs/markdowns/${section.slug}/index.md`, 'utf-8')
    const headingsArray: string[] = (contentsAsString.match(/^###.+$/gm) || [])
      .map((match: string) => match.replace(/#\s?/g, ''))
      .map((heading: string) => heading.replace(/\[/, ''))
      .map((heading: string) => heading.replace(/\].+/, ''))
      .map((heading: string) => heading.replace(/\*/g, ''))
      .map((heading: string) => heading.replace(/_/g, ''))
      .map((heading: string) => heading.replace(/<\/?[^>]+(>|$)/g, ''))

    return headingsArray.map(
      (heading: string): SearchResult => ({
        section: section.name,
        subsection: null,
        article: null,
        heading,
        slug: `${section.slug}#${kebabCase(heading)}`,
      })
    )
  })))

  searchResults.push(...sectionsIndexHeadings)

  await fs.outputFile('dist/searchResultsPool.json', JSON.stringify(flatten(searchResults), null, 2), 'utf-8')
}

(async () => {
  await updateSearch()
})()
