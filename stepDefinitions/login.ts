import {browser, by, element, protractor} from "protractor";
import {login} from "../pageObjects/login";
import {Given, setDefaultTimeout, Then, When} from "cucumber";

setDefaultTimeout(60 * 1000);




let loginObj = new login();

// @ts-ignore
Given('I landed on QuinC-Investigator login page', async ()=>{

    browser.ignoreSynchronization = true;
    //browser.waitForAngularEnabled(false);

    await browser.get("http://desktop-b8bh7td:4443/login_investigation.html");
    await browser.driver.manage().window().maximize();

})

// @ts-ignore
When('I will enter "username", "password" and click on login button', async ()=>{

    await loginObj.investigatorLogin.click();
    await loginObj.username.sendKeys("abd");
    await loginObj.password.sendKeys("abc123");
    await loginObj.loginBtn.click();


})

// @ts-ignore
Then('I will be taken to load case page',async ()=> {

    let EC = protractor.ExpectedConditions;  // Waits for the element with id 'abc' to be no longer visible on the dom.
    browser.wait(EC.invisibilityOf(element(by.css("img[src='app/images/logo_spinner.gif']"))),5000);

    await loginObj.getResult.getText().then(function (text) {

        console.log("Expect Result = 'Case List' and Actual Result = " +  text);
    })

})

