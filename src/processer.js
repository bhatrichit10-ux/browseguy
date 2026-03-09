import * as cheerio from 'cheerio'
import { htmlToText } from "html-to-text"

async function processOut(html) {
    const $ = cheerio.load(html)
    return {
        "title": $('title').text(),
        "paragraphs": $('p').text(),
        'a': $('a').attr('href'),
        "text": htmlToText(html)
    }
}
export default processOut