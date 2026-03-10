import boxen from 'boxen'
import processOut from './src/processer.js'
import load from './src/loader.js'
import chalk from 'chalk'
import inquirer from "inquirer"
// import { format } from './src/formatter.js'

async function main(url) {
  process.stdout.write('\x1Bc')
let html = await load(url)

html = await processOut(html)

const links = html.a
  .filter(l => l.href && l.text && l.text.trim().length > 1)
  .map((l, i) => `[${i + 1}] ${l.text} -> ${l.href}`)
  .join("\n")


 console.log(boxen(html.text, {padding: 1, title: chalk.red(html.title + '- ' + url), titleAlignment: 'center', borderColor: 'blue'}))

if(links.length != 0) {
    console.log(chalk.blue(`Links found on ${url}:` + '\n' + chalk.green(links)))
    const choices = html.a.map(link => ({
  name: link.text,
  value: link.href
}))

const { selectedLink } = await inquirer.prompt([
  {
    type: 'list',
    name: 'selectedLink',
    message: 'Select a link to visit:',
    choices
  }
])
console.log(chalk.blue(`You selected: ${selectedLink}`))
if(selectedLink.startsWith('/')) {
  
   process.stdout.write('\x1Bc')
    main(new URL(selectedLink, 'https://' + url).toString())
}
else {
   process.stdout.write('\x1Bc')
    main(selectedLink)
}
} else {
   process.stdout.write('\x1Bc')
    let gugugaga = await inquirer.prompt([
  {
    type: 'input',
    name: 'url',
    message: 'Enter a URL to browse:'
  }
])
    main(gugugaga.url)
}
}
let gugugaga = await inquirer.prompt([
  {
    type: 'input',
    name: 'url',
    message: 'Enter a URL to browse:'
  }
])
main(gugugaga.url)