import { Given, When, Then} from '@cucumber/cucumber';
const assetSelection = require("../pages/AssetSelectionPage");
Given(/^Im on restructures page$/, async () => {
   
    await browser.url("")
    await console.log("url :",browser.getUrl)
    await browser.setTimeout({ 'pageLoad': 50000 })
    await browser.maximizeWindow()

await assetSelection.selectDispositionAssetIssuer();
await assetSelection.selectDispositionAssetDeal();
})
