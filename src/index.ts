import express from 'express'
import marked from 'marked'
import { promises as fs } from 'fs'
import path from 'path'
require('ejs')

const app = express()
app.use(express.static('static'))
app.use(express.static(__dirname + "/public"))
app.set('views', __dirname + '/views');
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
const render = async (res: any, category: string, slug: string) => {
  res.set(
    'Cache-Control',
    'public, max-age=600, stale-if-error=60, stale-while-revalidate=60'
  )
  res.locals.rendered = await renderMarkdown(
    path.join(__dirname, 'docs', 'markdowns', category, slug) + '.md'
  )
  const t = await getTree()
  res.locals.sidebar = t
  res.locals.active = category + '/' + slug

  const cobj = t.find((c: { slug: string }) => c.slug === category)
  const dobj = cobj.contents.find((d: { slug: string }) => d.slug === slug)

  if (category === 'getting-started' && slug === 'what-is-codeanywhere') {
    // landing page gets a short title for search engine visibility
    res.locals.title = 'Codeanywhere Docs'
  } else {
    res.locals.title = `Codeanywhere Docs - ${dobj ? dobj.name : slug}`
  }
  res.render('index.ejs')
}

const renderMarkdown = async (path: string) => {
  const raw = await fs.readFile(path, 'utf8')
  return marked(raw)
}

app.get('/', (req, res) => {
  render(res, 'getting-started', 'what-is-codeanywhere')
})

app.get('/:category/:slug', async (req, res) => {
  const { category, slug } = req.params
  render(res, category, slug).catch(err => {
    res.send(`
      <h1>Something went wrong!</h1>
`)
  })
})

app.listen(3000, () => {
  console.log('Docs running at port 3000')
})
