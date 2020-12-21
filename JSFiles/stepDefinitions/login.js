"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const login_1 = require("../pageObjects/login");
const cucumber_1 = require("cucumber");
cucumber_1.setDefaultTimeout(60 * 1000);
let loginObj = new login_1.login();
// @ts-ignore
cucumber_1.Given('I landed on QuinC-Investigator login page', () => __awaiter(void 0, void 0, void 0, function* () {
    protractor_1.browser.ignoreSynchronization = true;
    //browser.waitForAngularEnabled(false);
    yield protractor_1.browser.get("http://desktop-b8bh7td:4443/login_investigation.html");
    yield protractor_1.browser.driver.manage().window().maximize();
}));
// @ts-ignore
cucumber_1.When('I will enter "username", "password" and click on login button', () => __awaiter(void 0, void 0, void 0, function* () {
    yield loginObj.investigatorLogin.click();
    yield loginObj.username.sendKeys("abd");
    yield loginObj.password.sendKeys("abc123");
    yield loginObj.loginBtn.click();
}));
// @ts-ignore
cucumber_1.Then('I will be taken to load case page', () => __awaiter(void 0, void 0, void 0, function* () {
    let EC = protractor_1.protractor.ExpectedConditions; // Waits for the element with id 'abc' to be no longer visible on the dom.
    protractor_1.browser.wait(EC.invisibilityOf(protractor_1.element(protractor_1.by.css("img[src='app/images/logo_spinner.gif']"))), 5000);
    yield loginObj.getResult.getText().then(function (text) {
        console.log("Expect Result = 'Case List' and Actual Result = " + text);
    });
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5pdGlvbnMvbG9naW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBNEQ7QUFDNUQsZ0RBQTJDO0FBQzNDLHVDQUE4RDtBQUU5RCw0QkFBaUIsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7QUFLN0IsSUFBSSxRQUFRLEdBQUcsSUFBSSxhQUFLLEVBQUUsQ0FBQztBQUUzQixhQUFhO0FBQ2IsZ0JBQUssQ0FBQywyQ0FBMkMsRUFBRSxHQUFRLEVBQUU7SUFFekQsb0JBQU8sQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUM7SUFDckMsdUNBQXVDO0lBRXZDLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsc0RBQXNELENBQUMsQ0FBQztJQUMxRSxNQUFNLG9CQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBRXRELENBQUMsQ0FBQSxDQUFDLENBQUE7QUFFRixhQUFhO0FBQ2IsZUFBSSxDQUFDLCtEQUErRCxFQUFFLEdBQVEsRUFBRTtJQUU1RSxNQUFNLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6QyxNQUFNLFFBQVEsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLE1BQU0sUUFBUSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0MsTUFBTSxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBR3BDLENBQUMsQ0FBQSxDQUFDLENBQUE7QUFFRixhQUFhO0FBQ2IsZUFBSSxDQUFDLG1DQUFtQyxFQUFDLEdBQVEsRUFBRTtJQUUvQyxJQUFJLEVBQUUsR0FBRyx1QkFBVSxDQUFDLGtCQUFrQixDQUFDLENBQUUsMEVBQTBFO0lBQ25ILG9CQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHdDQUF3QyxDQUFDLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxDQUFDO0lBRWhHLE1BQU0sUUFBUSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJO1FBRWxELE9BQU8sQ0FBQyxHQUFHLENBQUMsa0RBQWtELEdBQUksSUFBSSxDQUFDLENBQUM7SUFDNUUsQ0FBQyxDQUFDLENBQUE7QUFFTixDQUFDLENBQUEsQ0FBQyxDQUFBIn0=