    // traversy-scraper.js

    const request = require('request')
    const cheerio = require('cheerio');

    const url = 'https://www.instagram.com/p/B58vxIyAzGd/';

    request(url, (error, response, html) => {
      if(!error && response.statusCode == 200) {
        const $ = cheerio.load(html);

        const profileName = $('.o-MQd');

        console.log(profileName)
      }
    })