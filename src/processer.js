import * as cheerio from 'cheerio'
import { htmlToText } from "html-to-text"

async function processOut(html) {
    const $ = cheerio.load(html)
    const links = $('a').toArray().map(el => ({
        text: $(el).text().trim(),
        href: $(el).attr('href')
        }))
    return {
        "title": $('title').text(),
        "paragraphs": $('p').text(),
        'a': links,
        "text": htmlToText(html)
    }
}
export default processOut