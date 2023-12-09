(async () => {

    const { chromium, devices } = await import("playwright");

    // const BASE_URL = 'https://www.google.com/'
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext(devices['Desktop Chrome']);
    const page = await context.newPage();


    await page.goto('https://bukabantuan.bukalapak.com/form/175')

    // await new Promise(r => setTimeout(r, 2000));

    const name = await page.getByLabel('Nama (Name)')
    await name.fill('Akash Rao')

    // await new Promise(r => setTimeout(r, 2000));

    const email = page.getByLabel('Email', { exact: true })
    await email.fill('abc@xyz.com')

    // await new Promise(r => setTimeout(r, 2000));

    const intellectualProperty = await page.locator('//*[@id="app-container"]/div[1]/div[2]/div[2]/div[2]/div/div/span/form/div/div[3]/span/div/div/div[1]/div/input')
    await intellectualProperty.fill('Intellectual Property')

    const registrationNumber = await page.locator('//*[@id="app-container"]/div[1]/div[2]/div[2]/div[2]/div/div/span/form/div/div[4]/span/div/div/div[1]/div/input')
    await registrationNumber.fill('123456789')

    const ownerName = await page.locator('//*[@id="app-container"]/div[1]/div[2]/div[2]/div[2]/div/div/span/form/div/div[5]/span/div/div/div[1]/div/input')
    await ownerName.fill('Akash Rao')

    const ownerOfIntellectualPropertyRadioButton = await page.locator('//*[@id="app-container"]/div[1]/div[2]/div[2]/div[2]/div/div/span/form/div/div[6]/span/div/div/label[1]/input')
    await ownerOfIntellectualPropertyRadioButton.check()

    const relationshipWithOwner = await page.locator('//*[@id="app-container"]/div[1]/div[2]/div[2]/div[2]/div/div/span/form/div/div[7]/span/div/div/div[1]/div/input')
    await relationshipWithOwner.fill('Sibling')

    const reportingCompanyName = await page.locator('//*[@id="app-container"]/div[1]/div[2]/div[2]/div[2]/div/div/span/form/div/div[8]/span/div/div/div[1]/div/input')
    await reportingCompanyName.fill('ABC LLC')

    const website = await page.locator('//*[@id="app-container"]/div[1]/div[2]/div[2]/div[2]/div/div/span/form/div/div[9]/span/div/div/div[1]/div/input')
    await website.fill('www.abc.xyz')

    const address = await page.locator('//*[@id="app-container"]/div[1]/div[2]/div[2]/div[2]/div/div/span/form/div/div[10]/span/div/div/div[1]/div/input')
    await address.fill('123,street name,near landmark,city - 123456 , country')

    const emailAddress = await page.locator('//*[@id="app-container"]/div[1]/div[2]/div[2]/div[2]/div/div/span/form/div/div[11]/span/div/div/div[1]/div/input')
    await emailAddress.fill('abc@xyz.com')

    const phoneNumber = await page.locator('//*[@id="app-container"]/div[1]/div[2]/div[2]/div[2]/div/div/span/form/div/div[12]/span/div/div/div[1]/div/input')
    await phoneNumber.fill('1234567890')

    const productLink = await page.locator('//*[@id="app-container"]/div[1]/div[2]/div[2]/div[2]/div/div/span/form/div/div[13]/span/div/div/div[1]/div/input')
    await productLink.fill('www.google.com')

    const problemDetails = await page.locator('//*[@id="body"]')
    await problemDetails.fill('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')

    const linksList = await page.locator('//*[@id="link_barang_banyak"]')
    await linksList.setInputFiles("Laporan_Pelanggaran_Hak_Kekayaan_Intelektual.xlsx")

    const proofOfIntellectualProperty = page.locator('//*[@id="surat_kepemilikan_merek"]')
    await proofOfIntellectualProperty.setInputFiles('Task-DAE.pdf')

    const powerOfAttorney = await page.locator('//*[@id="bukti_surat_kuasa"]')
    await powerOfAttorney.setInputFiles('Task-DAE.pdf')

    const directSellingLicense = page.locator('//*[@id="bukti_surat_izin_usaha"]')
    await directSellingLicense.setInputFiles('Task-DAE.pdf')

    const termsAndConditions = page.locator('//*[@id="app-container"]/div[1]/div[2]/div[2]/div[2]/div/div/span/form/div/div[20]/div[3]/label/input')
    await termsAndConditions.check()

    // await new Promise(r => setTimeout(r, 20000));

    const submitButton = await page.locator('//*[@id="app-container"]/div[1]/div[2]/div[2]/div[2]/div/div/span/form/div/div[20]/button')
    await submitButton.click()

    await new Promise(r => setTimeout(r, 20000));

    await browser.close();
    console.log('--------------------- Testing Successful')

})()

