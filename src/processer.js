import * as cheerio from 'cheerio'
import { htmlToText } from "html-to-text"
import { format } from './formatter.js'

async function processOut(html) {
    let $ = cheerio.load(html)
    $('script').remove()
    $('style').remove()
    const links = $('a').toArray().map(el => ({
        text: $(el).text().trim(),
        href: $(el).attr('href')
        }))
    format($)
    return {
        "title": $('title').text(),
        "paragraphs": $('p').text(),
        'a': links,
        "text": htmlToText($.html())
}}
export default processOut