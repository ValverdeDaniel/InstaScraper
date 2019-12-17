    // pl-scraper.js

    const axios = require('axios');
    const cheerio = require('cheerio');

    const url = 'https://www.instagram.com/p/B52sqJzA6lS/';

    axios(url)
      .then(response => {
        const html = response.data;
        const $ = cheerio.load(html);
        const postHeader = $('link');
        console.log(postHeader.html());
      })
      .catch(console.error);