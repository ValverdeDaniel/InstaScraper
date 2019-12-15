const request = require('request-promise');
const cheerio = require('cheerio');
/* Create the base function to be ran */
(async () => {

  const igImgId = 'B6GOuCsAUkU';
  const BASE_URL = `https://www.instagram.com/p/${igImgId}/`;
  /* Send the request and get the html content */
  let response = await request(BASE_URL);
  //console.log(response)
  /* Initiate Cheerio with the response */
  let $ = cheerio.load(response);
  
  /* Get the proper script of the html page which contains the json */
  let script = $('script[type="application/ld+json"]').eq(0).html();
  //let script = $('script[type="text/javascript"]').eq(3).html();

  let igData = JSON.parse(script);

  console.log(igData);

  debugger;
})()    /* Here you replace the username with your actual instagram username that you want to check */
    //console.log(response);
