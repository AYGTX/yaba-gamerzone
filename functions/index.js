const functions = require("firebase-functions");
const cheerio = require('cheerio');
const getUrls = require('get-urls');
const fetch = require('node-fetch');
const cors = require('cors')({ origin: true});


const scrapeMetatags = (text) => {
    const urls = Array.from( getUrls(text) );
    const requests = urls.map(async url => {
        const res = await fetch(url);
        const html = await res.text();
        const $ = cheerio.load(html);
        let values = [];
        $('span.num').each(function (i, e) {
          values[i] = $(this).text();
      });
      return values
    });
    return Promise.all(requests);
}
/*
const scrape = (text) => {
    const urls = Array.from( getUrls(text) );
    const requests = urls.map(async url => {
        const res = await fetch(url);
        const html = await res.text();
        const $ = cheerio.load(html);
        return $('span.num').first().text();
    });
    return Promise.all(requests);
}
*/

function parseData(data) {
    try { JSON.parse(data);
    } catch (e) {
      return data;
    }
    return JSON.parse(data);
  }
  
  exports.scraper = functions.https.onRequest( async (request, response) => {
    cors(request, response, async () => {
      const body = parseData(request.body);
      const data = await scrapeMetatags(body.text);
      response.send(data);
      });
  });

  /*exports.scrapertwo = functions.https.onRequest( async (request, response) => {
    cors(request, response, async () => {
      const body = parseData(request.body);
      const data = await scrape(body.text);
      response.send(data);
      });
  });*/