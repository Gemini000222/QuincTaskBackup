import {loadCase} from "../pageObjects/loadcase";
import {setDefaultTimeout, Then, When} from "cucumber";
import {browser, protractor} from "protractor";


setDefaultTimeout(60 * 1000);

let loadCaseObj = new loadCase();



When('I will click on "Open" button against case', async ()=> {

    //let EC = protractor.ExpectedConditions;
    //await browser.wait(EC.visibilityOf(loadCaseObj.openBtn));
    await loadCaseObj.openBtn.click();

})