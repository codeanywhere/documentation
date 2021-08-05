const ejs = require('ejs')
const fs = require('fs')

const template = fs.readFileSync('src/views/index.ejs').toString()
const test = ejs.render(template, { sidebar: [],title: '', active: '', rendered: '', filename: "src/views/index.ejs" })

console.log(test)
