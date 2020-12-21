import {setDefaultTimeout, Then, When} from "cucumber";
import {browser, by, element, protractor} from "protractor";
import {caseDetail} from "../pageObjects/casedetail";


setDefaultTimeout(60 * 1000);

let caseDetailObj = new caseDetail;
let EC = protractor.ExpectedConditions;

Then('I will be taken to the Case Details page and I will enter "test" in search bar present on the Dashboard' , async ()=> {

    browser.wait(EC.invisibilityOf(element(by.css("img[src='app/images/logo_spinner.gif']"))), 5000);

    await caseDetailObj.getResult.getText().then(async (text)=> {

        console.log("Expect Result = 'Investigator' and Actual Result = " +  text);
        await caseDetailObj.searchBar.click();
        await caseDetailObj.searchBar.sendKeys("test");
    })

})


Then('I will click on Search button in front of search bar', async ()=> {

    await caseDetailObj.searchBtn.click();
    //await browser.wait(EC.invisibilityOf(element(by.id("busySearching"))), 5000);
    await browser.wait(EC.invisibilityOf(element(by.xpath("//*[name()=\"svg\"][@id=\"busySearching\"]"))), 8000);
})


When('I click on "View Data" button', async ()=> {

    await caseDetailObj.viewDataBtn.click();
    //browser.sleep(6000);
})
