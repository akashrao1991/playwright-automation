(async () => {

    const { chromium, devices } = await import("playwright");

    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext(devices['Desktop Chrome']);
    const page = await context.newPage();
    const URL = 'https://bukabantuan.bukalapak.com/form/175'


    await page.goto(URL)

    const name = page.getByLabel('Nama (Name)')
    await name.fill('Akash Rao')
    console.log('Filled Name')

    const email = page.getByLabel('Email', { exact: true })
    await email.fill('abc@xyz.com')
    console.log('Filled Email ID')

    // await new Promise(r => setTimeout(r, 2000));

    const intellectualProperty = page.locator('//*[@id="app-container"]/div[1]/div[2]/div[2]/div[2]/div/div/span/form/div/div[3]/span/div/div/div[1]/div/input')
    await intellectualProperty.fill('Intellectual Property')
    console.log('Filled Intellectual Property')

    const registrationNumber = page.locator('//*[@id="app-container"]/div[1]/div[2]/div[2]/div[2]/div/div/span/form/div/div[4]/span/div/div/div[1]/div/input')
    await registrationNumber.fill('123456789')
    console.log('Filled registrationNumber')

    const ownerName = page.locator('//*[@id="app-container"]/div[1]/div[2]/div[2]/div[2]/div/div/span/form/div/div[5]/span/div/div/div[1]/div/input')
    await ownerName.fill('Akash Rao')
    console.log('Filled ownerName')

    const ownerOfIntellectualPropertyRadioButton = page.locator('//*[@id="app-container"]/div[1]/div[2]/div[2]/div[2]/div/div/span/form/div/div[6]/span/div/div/label[1]/input')
    await ownerOfIntellectualPropertyRadioButton.check()
    console.log('Filled ownerOfIntellectualPropertyRadioButton')    

    const relationshipWithOwner = page.locator('//*[@id="app-container"]/div[1]/div[2]/div[2]/div[2]/div/div/span/form/div/div[7]/span/div/div/div[1]/div/input')
    await relationshipWithOwner.fill('Sibling')
    console.log('Filled relationshipWithOwner')    

    const reportingCompanyName = page.locator('//*[@id="app-container"]/div[1]/div[2]/div[2]/div[2]/div/div/span/form/div/div[8]/span/div/div/div[1]/div/input')
    await reportingCompanyName.fill('ABC LLC')
    console.log('Filled reportingCompanyName')    

    const website = page.locator('//*[@id="app-container"]/div[1]/div[2]/div[2]/div[2]/div/div/span/form/div/div[9]/span/div/div/div[1]/div/input')
    await website.fill('www.abc.xyz')
    console.log('Filled website')    

    const address = page.locator('//*[@id="app-container"]/div[1]/div[2]/div[2]/div[2]/div/div/span/form/div/div[10]/span/div/div/div[1]/div/input')
    await address.fill('123,street name,near landmark,city - 123456 , country')
    console.log('Filled address')    

    const emailAddress = page.locator('//*[@id="app-container"]/div[1]/div[2]/div[2]/div[2]/div/div/span/form/div/div[11]/span/div/div/div[1]/div/input')
    await emailAddress.fill('abc@xyz.com')
    console.log('Filled emailAddress')    

    const phoneNumber = page.locator('//*[@id="app-container"]/div[1]/div[2]/div[2]/div[2]/div/div/span/form/div/div[12]/span/div/div/div[1]/div/input')
    await phoneNumber.fill('1234567890')
    console.log('Filled phoneNumber')    

    const productLink = page.locator('//*[@id="app-container"]/div[1]/div[2]/div[2]/div[2]/div/div/span/form/div/div[13]/span/div/div/div[1]/div/input')
    await productLink.fill('www.google.com')
    console.log('Filled productLink')    

    const problemDetails = page.locator('//*[@id="body"]')
    await problemDetails.fill('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')
    console.log('Filled problemDetails')    

    const linksList = page.locator('//*[@id="link_barang_banyak"]')
    await linksList.setInputFiles("Laporan_Pelanggaran_Hak_Kekayaan_Intelektual.xlsx")
    console.log('Filled linksList')    

    const proofOfIntellectualProperty = page.locator('//*[@id="surat_kepemilikan_merek"]')
    await proofOfIntellectualProperty.setInputFiles('Task-DAE.pdf')
    console.log('Filled proofOfIntellectualProperty')    

    const powerOfAttorney = await page.locator('//*[@id="bukti_surat_kuasa"]')
    await powerOfAttorney.setInputFiles('Task-DAE.pdf')
    console.log('Filled powerOfAttorney')    

    const directSellingLicense = page.locator('//*[@id="bukti_surat_izin_usaha"]')
    await directSellingLicense.setInputFiles('Task-DAE.pdf')
    console.log('Filled directSellingLicense')    

    const termsAndConditions = page.locator('//*[@id="app-container"]/div[1]/div[2]/div[2]/div[2]/div/div/span/form/div/div[20]/div[3]/label/input')
    await termsAndConditions.check()
    console.log('Filled termsAndConditions')    

    // await new Promise(r => setTimeout(r, 20000));

    const submitButton = await page.locator('//*[@id="app-container"]/div[1]/div[2]/div[2]/div[2]/div/div/span/form/div/div[20]/button')
    await submitButton.click()
    console.log('Clicked submitButton')    


    console.log('started waiting for 20s before shutdown')    
    await new Promise(r => setTimeout(r, 20000));
    console.log('done waiting for 20s')    

    await browser.close();
    console.log('Shutting Down....')

})()

