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
const filterPanel_1 = require("../pageObjects/filterPanel");
const protractor_1 = require("protractor");
cucumber_1.setDefaultTimeout(60 * 1000);
let EC = protractor_1.protractor.ExpectedConditions;
let filterPanelObj = new filterPanel_1.filterPanel();
cucumber_1.When('I will click on "Filter" Icon to open Filter Panel', () => __awaiter(void 0, void 0, void 0, function* () {
    yield filterPanelObj.filterBtn.click();
}));
cucumber_1.Then('I will click on "Pin" icon of filter panel to make the Grid more visible', () => __awaiter(void 0, void 0, void 0, function* () {
    yield filterPanelObj.pin.click();
}));
cucumber_1.When('I will select "Non-Standard Documents=34"', () => __awaiter(void 0, void 0, void 0, function* () {
    yield filterPanelObj.docArrow.click();
    yield filterPanelObj.nonStandardDocCheckBox.click();
    yield protractor_1.browser.sleep(5000);
}));
cucumber_1.Then('I will apply filter of "txt" on Extension Column', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.actions().mouseMove(filterPanelObj.extensionDots).click().perform();
    yield protractor_1.browser.sleep(3000);
    yield filterPanelObj.txtCheckbox.click();
    yield filterPanelObj.extensionFilterBtn.click();
}));
cucumber_1.Then('I will verify that there are "17" filtered items in Viewer', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.wait(EC.textToBePresentInElement(filterPanelObj.filteredItems, "Filtered Items: 17"), 11000);
    yield filterPanelObj.filteredItems.getText().then((text) => __awaiter(void 0, void 0, void 0, function* () {
        console.log("Expected value = Filtered Items: 17  and  Actual value = " + text);
    }));
}));
cucumber_1.Then('I will select "Viewer" from Desktop Application Window', () => __awaiter(void 0, void 0, void 0, function* () {
    if (yield filterPanelObj.viewerTab.isPresent()) {
        yield console.log("The viewer is already opened");
    }
    else {
        yield filterPanelObj.desktopAppBtn.click();
        yield protractor_1.browser.actions().mouseMove(filterPanelObj.viewerBtn).click().perform();
    }
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyUGFuZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5pdGlvbnMvZmlsdGVyUGFuZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBdUQ7QUFDdkQsNERBQXVEO0FBQ3ZELDJDQUE0RDtBQUU1RCw0QkFBaUIsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7QUFDN0IsSUFBSSxFQUFFLEdBQUcsdUJBQVUsQ0FBQyxrQkFBa0IsQ0FBQztBQUd2QyxJQUFJLGNBQWMsR0FBRyxJQUFJLHlCQUFXLEVBQUUsQ0FBQztBQUd2QyxlQUFJLENBQUMsb0RBQW9ELEVBQUUsR0FBUSxFQUFFO0lBRWpFLE1BQU0sY0FBYyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUMzQyxDQUFDLENBQUEsQ0FBQyxDQUFBO0FBR0YsZUFBSSxDQUFDLDBFQUEwRSxFQUFFLEdBQVEsRUFBRTtJQUV2RixNQUFNLGNBQWMsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDckMsQ0FBQyxDQUFBLENBQUMsQ0FBQTtBQUVGLGVBQUksQ0FBQywyQ0FBMkMsRUFBRSxHQUFRLEVBQUU7SUFFeEQsTUFBTSxjQUFjLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3RDLE1BQU0sY0FBYyxDQUFDLHNCQUFzQixDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3BELE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFOUIsQ0FBQyxDQUFBLENBQUMsQ0FBQTtBQUdGLGVBQUksQ0FBQyxrREFBa0QsRUFBRSxHQUFRLEVBQUU7SUFFL0QsTUFBTSxvQkFBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7SUFFbEYsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUUxQixNQUFNLGNBQWMsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekMsTUFBTSxjQUFjLENBQUMsa0JBQWtCLENBQUMsS0FBSyxFQUFFLENBQUM7QUFFcEQsQ0FBQyxDQUFBLENBQUMsQ0FBQTtBQUdGLGVBQUksQ0FBQyw0REFBNEQsRUFBRSxHQUFRLEVBQUU7SUFFekUsTUFBTSxvQkFBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsd0JBQXdCLENBQUMsY0FBYyxDQUFDLGFBQWEsRUFBQyxvQkFBb0IsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzFHLE1BQU0sY0FBYyxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUUsQ0FBTyxJQUFJLEVBQUMsRUFBRTtRQUU3RCxPQUFPLENBQUMsR0FBRyxDQUFDLDJEQUEyRCxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ3BGLENBQUMsQ0FBQSxDQUFDLENBQUE7QUFFTixDQUFDLENBQUEsQ0FBQyxDQUFBO0FBRUYsZUFBSSxDQUFDLHdEQUF3RCxFQUFHLEdBQVEsRUFBRTtJQUV0RSxJQUFHLE1BQU0sY0FBYyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsRUFDN0M7UUFDSSxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLENBQUMsQ0FBQztLQUNyRDtTQUVEO1FBRUksTUFBTSxjQUFjLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzNDLE1BQU0sb0JBQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO0tBQ2pGO0FBRUwsQ0FBQyxDQUFBLENBQUMsQ0FBQSJ9