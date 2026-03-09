import boxen from 'boxen'
import processOut from './src/processer.js'
import load from './src/loader.js'
import chalk from 'chalk'
async function main() {
let url = 'example.com'
let html = await load(url)
html = await processOut(html)
const links = html.a
  .map((l, i) => `[${i + 1}] ${l.text} -> ${l.href}`)
  .join("\n")
console.log(chalk.blue(`Links found on ${url}:` + '\n' + chalk.green(links)))
return console.log(boxen(html.text, {padding: 1, title: chalk.red(html.title)}, {}))
}
main()