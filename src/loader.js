    // import * as fetch from 'fetch'
    import * as cheerio from 'cheerio'
    import { htmlToText } from "html-to-text"

    async function load(url) {
        if(!url.startsWith('http://') &&  !url.startsWith('https://')) {
        url = 'https://' + url
        }
        const res = await fetch(url)
        if(res.ok) { return await res.text() } else throw error
        
    }

    export default load;