import express from 'express'
import marked from 'marked'
import { promises as fs } from 'fs'
import path from 'path'
require('ejs')
require('dotenv').config()

const app = express()
app.use(express.static('static'))
app.use(express.static(__dirname + '/public'))
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')

marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: function (code) {
    return require('highlight.js').highlightAuto(code).value
  },
})

const getTree = async () =>
  JSON.parse(await fs.readFile('./sidebar.json', 'utf8'))

//TODO: correct res type
const render = async (
  res: any,
  section: string,
  subsection: string | null,
  article: string
) => {
  res.set(
    'Cache-Control',
    'public, max-age=600, stale-if-error=60, stale-while-revalidate=60'
  )
  res.locals.rendered = subsection
    ? await renderMarkdown(
        path.join(
          __dirname,
          'docs',
          'markdowns',
          section,
          subsection,
          article
        ) + '.md'
      )
    : await renderMarkdown(
        path.join(__dirname, 'docs', 'markdowns', section, article) + '.md'
      )

  const sidebarTree = await getTree()
  res.locals.sidebar = sidebarTree
  res.locals.active = subsection
    ? section + '/' + subsection + '/' + article
    : section + '/' + article

  const sectionObj = sidebarTree.find(
    (c: { slug: string }) => c.slug === section
  )
  const articleObj = subsection
    ? sectionObj.contents
        .find((c: { slug: string }) => c.slug === subsection)
        .contents.find((d: { slug: string }) => d.slug === article)
    : sectionObj.contents.find((c: { slug: string }) => c.slug === article)

  if (
    section === 'general' &&
    subsection === 'getting-started' &&
    article === 'what-is-codeanywhere'
  ) {
    // landing page gets a short title for search engine visibility
    res.locals.title = 'Codeanywhere Docs'
  } else {
    res.locals.title = `${sectionObj ? sectionObj.name : section} - ${
      articleObj ? articleObj.name : article
    } | Codeanywhere Docs`
  }
  res.render('index.ejs')
}

const renderMarkdown = async (path: string) => {
  const raw = await fs.readFile(path, 'utf8')
  return marked(raw)
}

app.get('/', (req, res) => {
  render(res, 'general', 'getting-started', 'what-is-codeanywhere')
})

app.get('/:section/:article', async (req, res) => {
  const { section, article } = req.params
  render(res, section, null, article).catch(err => {
    res.send(`<h1>Something went wrong!</h1>`)
  })
})

app.get('/:section/:subsection/:article', async (req, res) => {
  const { section, subsection, article } = req.params
  render(res, section, subsection, article).catch(err => {
    res.send(`<h1>Something went wrong!</h1>`)
  })
})

const port = process.env.PROCESS_PORT || 3000
app.listen(port, () => {
  console.log(`Docs running at port ${port}`)
})
