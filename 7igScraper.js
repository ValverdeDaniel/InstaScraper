const request = require('request-promise');

const { getMetadata } = require('page-metadata-parser');
const domino = require('domino');

const igImgId = 'B6GOuCsAUkU';
//const igImgId = 'B6GOuCsAUkU';
const BASE_URL = `https://www.instagram.com/p/${igImgId}/`;
// / Create the base function to be ran /
(async () => {

  let html = await request(BASE_URL);
  const doc = domino.createWindow(html).document;
  const metadata = getMetadata(doc, BASE_URL);
  if (metadata != null && metadata.description != null) {
    let username=metadata.description.match(/\(([^)]+)\)/)[1];
    console.log('metadata is', metadata.description.match(/\(([^)]+)\)/)[1]);
    console.log(username);
  } else {
    console.log('either metadata is undefined or it does not contains the description name')
  }
  debugger;
})() 