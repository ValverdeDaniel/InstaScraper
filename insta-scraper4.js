//https://www.instagram.com/p/B58vxIyAzGd/


    // pl-scraper.js

    const axios = require('axios');

    const url = 'https://www.instagram.com/p/B58vxIyAzGd/';

    axios(url)
      .then(response => {
        const html = response.data;
        var meta = document.getElementsByTagName('meta')
        //console.log(html);
        //console.log(url);
        console.log(meta)
      })
      .catch(console.error);