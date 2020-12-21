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
const grid_1 = require("../pageObjects/grid");
const protractor_1 = require("protractor");
cucumber_1.setDefaultTimeout(60 * 1000);
let gridObj = new grid_1.grid();
let EC = protractor_1.protractor.ExpectedConditions;
cucumber_1.Then('I will observe that in Grid file count is "291"', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.wait(EC.visibilityOf(gridObj.filteredItems));
    yield protractor_1.browser.sleep(5000);
    yield gridObj.filteredItems.getText().then((text) => {
        console.log("Expected Count = '291' and Actual Count = " + text);
    });
}));
cucumber_1.Then('I will Right click in Grid > Click on "Toggle Ignorable" option against few filtered items', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.actions().mouseMove(gridObj.gridRightClick).click(gridObj.gridRightClick, protractor_1.protractor.Button.RIGHT).perform();
    yield gridObj.toggleIgnorable.click();
}));
cucumber_1.Then('I will Right click in Grid > Click on "Toggle Privileged" option against few filtered items', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.actions().mouseMove(gridObj.gridRightClick).click(gridObj.gridRightClick, protractor_1.protractor.Button.RIGHT).perform();
    yield gridObj.togglePrivileged.click();
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3N0ZXBEZWZpbml0aW9ucy9ncmlkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsdUNBQWlEO0FBQ2pELDhDQUF5QztBQUN6QywyQ0FBK0M7QUFFL0MsNEJBQWlCLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0FBRTdCLElBQUksT0FBTyxHQUFHLElBQUksV0FBSSxFQUFFLENBQUM7QUFDekIsSUFBSSxFQUFFLEdBQUcsdUJBQVUsQ0FBQyxrQkFBa0IsQ0FBQztBQUV2QyxlQUFJLENBQUMsaURBQWlELEVBQUMsR0FBUSxFQUFFO0lBRTdELE1BQU0sb0JBQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUMzRCxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRTFCLE1BQU0sT0FBTyxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUUsQ0FBQyxJQUFJLEVBQUMsRUFBRTtRQUVoRCxPQUFPLENBQUMsR0FBRyxDQUFDLDRDQUE0QyxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ3JFLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFBLENBQUMsQ0FBQTtBQUdGLGVBQUksQ0FBQyw0RkFBNEYsRUFBRyxHQUFRLEVBQUU7SUFFMUcsTUFBTSxvQkFBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsdUJBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDM0gsTUFBTSxPQUFPLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBRTFDLENBQUMsQ0FBQSxDQUFDLENBQUE7QUFFRixlQUFJLENBQUMsNkZBQTZGLEVBQUcsR0FBUSxFQUFFO0lBRTNHLE1BQU0sb0JBQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLHVCQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzNILE1BQU0sT0FBTyxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxDQUFDO0FBQzNDLENBQUMsQ0FBQSxDQUFDLENBQUEifQ==