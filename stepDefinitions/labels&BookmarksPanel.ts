import {setDefaultTimeout, Then, When} from "cucumber";
import {labelsAndBookmarks} from "../pageObjects/labels&BookmarksPanel";
import {browser, protractor} from "protractor";

setDefaultTimeout(60 * 1000);
let labelsAndBookmarksObj = new labelsAndBookmarks();

When('I click on Labels & Bookmarks Panel' , async ()=> {

    await labelsAndBookmarksObj.labelsAndBookmarksBtn.click();

})


Then('From Labels Panel, right click > New Label> Enter name and save it' , async ()=> {

    await browser.actions().mouseMove(labelsAndBookmarksObj.labelHeader).click(labelsAndBookmarksObj.labelHeader, protractor.Button.RIGHT).perform();    //hovers mouse over the label text & right click on the label text
    await labelsAndBookmarksObj.newLabel.click();
    await labelsAndBookmarksObj.labelNameBar.click();
    await labelsAndBookmarksObj.labelNameBar.sendKeys("oneLabel");    //manually sending Label name
    await labelsAndBookmarksObj.createLabelBtn.click();
} )

Then('I will check All "17" files and check the created Label to apply it' , async ()=> {

    await browser.actions().mouseMove(labelsAndBookmarksObj.checkAllDocsBtn).click().perform();
    await browser.actions().mouseMove(labelsAndBookmarksObj.applyLabelBtn).click().perform();


} )

Then('I will Click on Bookmarks Panel >right on Shared > Enter Bookmark name and save it', async ()=> {

    await labelsAndBookmarksObj.bookmarksTab.click();
    await browser.actions().mouseMove(labelsAndBookmarksObj.sharedHeader).click(labelsAndBookmarksObj.sharedHeader, protractor.Button.RIGHT).perform();
    await labelsAndBookmarksObj.newBookmark.click();
    await labelsAndBookmarksObj.bookmarkNameBar.click();
    await labelsAndBookmarksObj.bookmarkNameBar.sendKeys("twoBookmark");       //manually sending bookmark name
    await labelsAndBookmarksObj.bookmarkEnterBtn.click()
})


Then('I will Check the created bookmark to apply it' , async ()=> {

    await browser.sleep(3000);
    await browser.actions().mouseMove(labelsAndBookmarksObj.applyBookmarkBtn).click().perform();

})