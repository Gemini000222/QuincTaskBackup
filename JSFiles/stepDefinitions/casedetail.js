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
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const casedetail_1 = require("../pageObjects/casedetail");
cucumber_1.setDefaultTimeout(60 * 1000);
let caseDetailObj = new casedetail_1.caseDetail;
let EC = protractor_1.protractor.ExpectedConditions;
cucumber_1.Then('I will be taken to the Case Details page and I will enter "test" in search bar present on the Dashboard', () => __awaiter(void 0, void 0, void 0, function* () {
    protractor_1.browser.wait(EC.invisibilityOf(protractor_1.element(protractor_1.by.css("img[src='app/images/logo_spinner.gif']"))), 5000);
    yield caseDetailObj.getResult.getText().then((text) => __awaiter(void 0, void 0, void 0, function* () {
        console.log("Expect Result = 'Investigator' and Actual Result = " + text);
        yield caseDetailObj.searchBar.click();
        yield caseDetailObj.searchBar.sendKeys("test");
    }));
}));
cucumber_1.Then('I will click on Search button in front of search bar', () => __awaiter(void 0, void 0, void 0, function* () {
    yield caseDetailObj.searchBtn.click();
    //await browser.wait(EC.invisibilityOf(element(by.id("busySearching"))), 5000);
    yield protractor_1.browser.wait(EC.invisibilityOf(protractor_1.element(protractor_1.by.xpath("//*[name()=\"svg\"][@id=\"busySearching\"]"))), 8000);
}));
cucumber_1.When('I click on "View Data" button', () => __awaiter(void 0, void 0, void 0, function* () {
    yield caseDetailObj.viewDataBtn.click();
    //browser.sleep(6000);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FzZWRldGFpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3N0ZXBEZWZpbml0aW9ucy9jYXNlZGV0YWlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsdUNBQXVEO0FBQ3ZELDJDQUE0RDtBQUM1RCwwREFBcUQ7QUFHckQsNEJBQWlCLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0FBRTdCLElBQUksYUFBYSxHQUFHLElBQUksdUJBQVUsQ0FBQztBQUNuQyxJQUFJLEVBQUUsR0FBRyx1QkFBVSxDQUFDLGtCQUFrQixDQUFDO0FBRXZDLGVBQUksQ0FBQyx5R0FBeUcsRUFBRyxHQUFRLEVBQUU7SUFFdkgsb0JBQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsd0NBQXdDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFFakcsTUFBTSxhQUFhLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFPLElBQUksRUFBQyxFQUFFO1FBRXZELE9BQU8sQ0FBQyxHQUFHLENBQUMscURBQXFELEdBQUksSUFBSSxDQUFDLENBQUM7UUFDM0UsTUFBTSxhQUFhLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3RDLE1BQU0sYUFBYSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbkQsQ0FBQyxDQUFBLENBQUMsQ0FBQTtBQUVOLENBQUMsQ0FBQSxDQUFDLENBQUE7QUFHRixlQUFJLENBQUMsc0RBQXNELEVBQUUsR0FBUSxFQUFFO0lBRW5FLE1BQU0sYUFBYSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN0QywrRUFBK0U7SUFDL0UsTUFBTSxvQkFBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNqSCxDQUFDLENBQUEsQ0FBQyxDQUFBO0FBR0YsZUFBSSxDQUFDLCtCQUErQixFQUFFLEdBQVEsRUFBRTtJQUU1QyxNQUFNLGFBQWEsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDeEMsc0JBQXNCO0FBQzFCLENBQUMsQ0FBQSxDQUFDLENBQUEifQ==