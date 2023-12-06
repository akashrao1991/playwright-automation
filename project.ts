// import { chromium, devices } from 'playwright';
// import assert from 'node:assert';

var fs = require('fs'),
    request = require('request');

var download = function(uri, filename, callback){
  request.head(uri, function(err, res, body){
    console.log('content-type:', res.headers['content-type']);
    console.log('content-length:', res.headers['content-length']);

    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};

// download('https://www.google.com/images/srpr/logo3w.png', 'google.png', function(){
//   console.log('done');
// });

(async () => {
  // Setup
  const { chromium, devices } = await import("playwright");

  const BASE_URL = 'https://google.com/'
  const browser = await chromium.launch();
  const context = await browser.newContext(devices['Desktop Chrome']);
  const page = await context.newPage();

  // The actual interesting bit
//   await context.route('**.jpg', route => route.abort());
  await page.goto(BASE_URL);

//   assert(await page.title() === 'Example Domain'); // 👎 not a Web First assertion
    // console.log(page.url())
    // console.log(await page.title())
    const locator = await page.locator('xpath=/html/body/div[1]/div[2]/div/img')
    const img:string =  await locator.getAttribute('src')
    // const element = await page.locator('.lnXdpd').getAttribute('src')
    // console.log(img);

    download(`${BASE_URL}${img.substring(1)}`, 'google.png', function(){
  console.log('done');
});


    
    // const imageSrc = await page.$eval('.lnXdpd', (imgElement) => (imgElement as HTMLImageElement).src);
    // console.log(imageSrc)
  // Teardown
  await context.close();
  await browser.close();
})();
