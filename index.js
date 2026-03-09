
import * as cheerio from 'cheerio'
import { htmlToText } from "html-to-text"
import processOut from './src/processer.js'
import load from './src/loader.js'
async function main() {
let url = 'example.com'
let html = await load(url)
console.log(await processOut(html))
}
main()