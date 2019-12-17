//https://www.instagram.com/p/B58vxIyAzGd/


    // pl-scraper.js

    const axios = require('axios');
    //thenaughty fork
    const url = 'https://www.instagram.com/p/B6G_44_nVrt/';
//the tinychef show
   //const url = 'https://www.instagram.com/p/B52sqJzA6lS/';    

    
    //kylie jenner
    //const url = 'https://www.instagram.com/p/B6JLGIBne2P/';
    //cobywhite
   // const url = 'https://www.instagram.com/p/B6G1gislVyQ/';

    //const url = 'https://www.instagram.com/p/B6GOuCsAUkU/';

    axios(url)
      .then(response => {
        const html = response.data;
        console.log(html);
        //console.log(url);
        //console.log(meta)
      })
      .catch(console.error);