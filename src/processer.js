import * as cheerio from 'cheerio'
import { htmlToText } from "html-to-text"
import { format } from './formatter.js'

async function processOut(html) {
    const seen = new Set()
    let $ = cheerio.load(html)
    $('script').remove()
    $('style').remove()
    const links = $('a').toArray()
  .map(el => ({
    text: $(el).text().trim(),
    href: $(el).attr('href')
  }))
  .filter(link => {
   
    if (!link.href) return false
    if (link.href.startsWith('#')) return false
    if (link.href.startsWith('/#')) return false
    if (seen.has(link.href)) return false
    seen.add(link.href)
    return true
  })
    format($)
    return {
        "title": $('title').text(),
        "paragraphs": $('p').text(),
        'a': links,
        "text": htmlToText($.html())
}}
export default processOut