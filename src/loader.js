    // import * as fetch from 'fetch'
    import * as cheerio from 'cheerio'
    import { htmlToText } from "html-to-text"
    let headers = new Headers({
    "User-Agent"   : "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36",
    'Accept-Language' : 'en-US,en;q=0.8',
    'Accept-Encoding' : 'gzip, deflate, br',
    'Connection' : 'keep-alive',
    'Upgrade-Insecure-Requests' : '1'
    
    })
    async function load(url) {
        if(!url.startsWith('http://') &&  !url.startsWith('https://')) {
        url = 'https://' + url
        }
        const res = await fetch(url,{
            method: 'GET',
            headers: headers
        })
        if(res.ok) { return await res.text() } else throw error
        
    }

    export default load;