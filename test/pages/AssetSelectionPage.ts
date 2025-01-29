import abstract from "../pages/abstractPage";
class AssetSelectionPage{
    // Page objects
    get dispositionAssetIssuer() {return $(`.issuer-bank-deal-selectors wso-searchable-options:first-of-type input`)}
    get dispositionAssetIssuerSelect() {return $(`span.mat-option-text`)}
    get dispositionAssetDeal() {return $(`.issuer-bank-deal-selectors wso-searchable-options:first-of-type input`)}
    get dispositionAssetDealSelect() {return $(`span.mat-option-text`)}
//     // Page actions
//     async assertOktaPageIsVisible(){
//    }

    async selectDispositionAssetIssuer(){
        (await this.dispositionAssetIssuer).setValue("PW_Issuer");
       await browser.setTimeout({ 'pageLoad': 15000 })
      //  await abstract.enterText(await this.dispositionAssetIssuer,"PW_Issuer");
      //  await abstract.click(await this.dispositionAssetIssuerSelect);
      await browser.pause(30000);
    }

    async selectDispositionAssetDeal(){
        await abstract.enterText(await this.dispositionAssetDeal,"PW_Loan");
        await abstract.click(await this.dispositionAssetDealSelect);
    }

    
}

export default new AssetSelectionPage();