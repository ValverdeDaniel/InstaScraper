//https://www.instagram.com/p/B58vxIyAzGd/

// "ProfilePage","@id":"https:\/\/www.instagram.com\/beyondsouthbeach\/"
    // pl-scraper.js

    const axios = require('axios');

    const url = 'https://www.instagram.com/p/B6GOuCsAUkU/';
    const igProfilePattern = /rel="canonical"[\s]+href="https:\/\/www.instagram.com\/([^/]+)\//i

    axios(url)
      .then(response => {
        const html = response.data;
        //console.log(html);
        console.log(igProfilePattern)
        //console.log(url);
        //console.log(meta)
      })
      .catch(console.error);