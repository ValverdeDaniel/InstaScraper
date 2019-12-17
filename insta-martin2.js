const request = require('request-promise');
const cheerio = require('cheerio');

(async () => {

  const BASE_URL = 'https://www.instagram.com/p/B6G1gislVyQ/';
  const igProfilePattern = /rel="canonical"[\s]+href="https:\/\/www.instagram.com\/([^/]+)\//i
  
  let response = await request(BASE_URL);
  //console.log(response)
  /* Initiate Cheerio with the response */
  let $ = cheerio.load(response);

  let script = $('script[rel="canonical"]').eq(0).html();
console.log=(script);
debugger;
  // console.log({ html })
  //const profile = html.match(igProfilePattern)[1]

  //console.log(profile)
})()