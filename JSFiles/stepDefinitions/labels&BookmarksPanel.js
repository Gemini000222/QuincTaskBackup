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
const labels_BookmarksPanel_1 = require("../pageObjects/labels&BookmarksPanel");
const protractor_1 = require("protractor");
cucumber_1.setDefaultTimeout(60 * 1000);
let labelsAndBookmarksObj = new labels_BookmarksPanel_1.labelsAndBookmarks();
cucumber_1.When('I click on Labels & Bookmarks Panel', () => __awaiter(void 0, void 0, void 0, function* () {
    yield labelsAndBookmarksObj.labelsAndBookmarksBtn.click();
}));
cucumber_1.Then('From Labels Panel, right click > New Label> Enter name and save it', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.actions().mouseMove(labelsAndBookmarksObj.labelHeader).click(labelsAndBookmarksObj.labelHeader, protractor_1.protractor.Button.RIGHT).perform(); //hovers mouse over the label text & right click on the label text
    yield labelsAndBookmarksObj.newLabel.click();
    yield labelsAndBookmarksObj.labelNameBar.click();
    yield labelsAndBookmarksObj.labelNameBar.sendKeys("oneLabel"); //manually sending Label name
    yield labelsAndBookmarksObj.createLabelBtn.click();
}));
cucumber_1.Then('I will check All "17" files and check the created Label to apply it', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.actions().mouseMove(labelsAndBookmarksObj.checkAllDocsBtn).click().perform();
    yield protractor_1.browser.actions().mouseMove(labelsAndBookmarksObj.applyLabelBtn).click().perform();
}));
cucumber_1.Then('I will Click on Bookmarks Panel >right on Shared > Enter Bookmark name and save it', () => __awaiter(void 0, void 0, void 0, function* () {
    yield labelsAndBookmarksObj.bookmarksTab.click();
    yield protractor_1.browser.actions().mouseMove(labelsAndBookmarksObj.sharedHeader).click(labelsAndBookmarksObj.sharedHeader, protractor_1.protractor.Button.RIGHT).perform();
    yield labelsAndBookmarksObj.newBookmark.click();
    yield labelsAndBookmarksObj.bookmarkNameBar.click();
    yield labelsAndBookmarksObj.bookmarkNameBar.sendKeys("twoBookmark"); //manually sending bookmark name
    yield labelsAndBookmarksObj.bookmarkEnterBtn.click();
}));
cucumber_1.Then('I will Check the created bookmark to apply it', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(3000);
    yield protractor_1.browser.actions().mouseMove(labelsAndBookmarksObj.applyBookmarkBtn).click().perform();
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFiZWxzJkJvb2ttYXJrc1BhbmVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3RlcERlZmluaXRpb25zL2xhYmVscyZCb29rbWFya3NQYW5lbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHVDQUF1RDtBQUN2RCxnRkFBd0U7QUFDeEUsMkNBQStDO0FBRS9DLDRCQUFpQixDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztBQUM3QixJQUFJLHFCQUFxQixHQUFHLElBQUksMENBQWtCLEVBQUUsQ0FBQztBQUVyRCxlQUFJLENBQUMscUNBQXFDLEVBQUcsR0FBUSxFQUFFO0lBRW5ELE1BQU0scUJBQXFCLENBQUMscUJBQXFCLENBQUMsS0FBSyxFQUFFLENBQUM7QUFFOUQsQ0FBQyxDQUFBLENBQUMsQ0FBQTtBQUdGLGVBQUksQ0FBQyxvRUFBb0UsRUFBRyxHQUFRLEVBQUU7SUFFbEYsTUFBTSxvQkFBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUMsV0FBVyxFQUFFLHVCQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUksa0VBQWtFO0lBQ3ZOLE1BQU0scUJBQXFCLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzdDLE1BQU0scUJBQXFCLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2pELE1BQU0scUJBQXFCLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFJLDZCQUE2QjtJQUMvRixNQUFNLHFCQUFxQixDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUN2RCxDQUFDLENBQUEsQ0FBRSxDQUFBO0FBRUgsZUFBSSxDQUFDLHFFQUFxRSxFQUFHLEdBQVEsRUFBRTtJQUVuRixNQUFNLG9CQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUFDLHFCQUFxQixDQUFDLGVBQWUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzNGLE1BQU0sb0JBQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxTQUFTLENBQUMscUJBQXFCLENBQUMsYUFBYSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7QUFHN0YsQ0FBQyxDQUFBLENBQUUsQ0FBQTtBQUVILGVBQUksQ0FBQyxvRkFBb0YsRUFBRSxHQUFRLEVBQUU7SUFFakcsTUFBTSxxQkFBcUIsQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDakQsTUFBTSxvQkFBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FBQyxxQkFBcUIsQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUMsWUFBWSxFQUFFLHVCQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ25KLE1BQU0scUJBQXFCLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2hELE1BQU0scUJBQXFCLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3BELE1BQU0scUJBQXFCLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFPLGdDQUFnQztJQUMzRyxNQUFNLHFCQUFxQixDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxDQUFBO0FBQ3hELENBQUMsQ0FBQSxDQUFDLENBQUE7QUFHRixlQUFJLENBQUMsK0NBQStDLEVBQUcsR0FBUSxFQUFFO0lBRTdELE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsTUFBTSxvQkFBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FBQyxxQkFBcUIsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBRWhHLENBQUMsQ0FBQSxDQUFDLENBQUEifQ==