import { chromium, firefox, webkit } from '@playwright/test'

const browsers = [chromium, firefox, webkit],
      url = `file://${__dirname}/index.html`;

(async () => {

    browsers.map(async (singleBrowser) => {

        const browser = await singleBrowser.launch({ headless: false }),
              page = await browser.newPage()

        await page.goto(url);

        /**
         * tests
         */
        
        await browser.close()
    })




})();
