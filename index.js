import boxen from 'boxen'
import processOut from './src/processer.js'
import load from './src/loader.js'
import chalk from 'chalk'
async function main() {
let url = 'example.com'
let html = await load(url)
html = await processOut(html)
let atags = html.a

return console.log(boxen(html.text, {padding: 1}, {title: chalk.red(html.title)}))
}
main()