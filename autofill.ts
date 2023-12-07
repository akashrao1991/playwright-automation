(async ()=>{

    const { chromium, devices } = await import("playwright");

    // const BASE_URL = 'https://www.google.com/'
    const browser = await chromium.launch({ headless: false});
    const context = await browser.newContext(devices['Desktop Chrome']);
    const page = await context.newPage();
  
    
    await page.goto('https://bukabantuan.bukalapak.com/form/175')

const name = await page.getByLabel('Nama (Name)') 
name.fill('Akash Rao')

const email = page.getByLabel('Email', { exact: true })
email.fill('akashrao1991@gmail.com')

const intellectualProperty = await page.locator('//*[@id="app-container"]/div[1]/div[2]/div[2]/div[2]/div/div/span/form/div/div[3]/span/div/div/div[1]/div/input')
intellectualProperty.fill('Intellectual Property')

const registrationNumber = await page.locator('//*[@id="app-container"]/div[1]/div[2]/div[2]/div[2]/div/div/span/form/div/div[4]/span/div/div/div[1]/div/input')
registrationNumber.fill('123456789')


})()

