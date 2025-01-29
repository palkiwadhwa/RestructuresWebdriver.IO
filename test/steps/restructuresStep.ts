import { Given, When, Then } from "@wdio/cucumber-framework";
import assetSelection from "../pages/AssetSelectionPage";
Given(/^I'm on restructures page$/, async () => {
   
    await browser.url("")
    await console.log("url :",browser.getUrl)
    await browser.setTimeout({ 'pageLoad': 50000 })
    await browser.maximizeWindow()

await assetSelection.selectDispositionAssetIssuer();
await assetSelection.selectDispositionAssetDeal();
})
