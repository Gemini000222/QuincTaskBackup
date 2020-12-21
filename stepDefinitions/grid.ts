import {setDefaultTimeout, Then} from "cucumber";
import {grid} from "../pageObjects/grid";
import {browser, protractor} from "protractor";

setDefaultTimeout(60 * 1000);

let gridObj = new grid();
let EC = protractor.ExpectedConditions;

Then('I will observe that in Grid file count is "291"',async ()=> {

    await browser.wait(EC.visibilityOf(gridObj.filteredItems));
    await browser.sleep(5000);

    await gridObj.filteredItems.getText().then( (text)=> {

        console.log("Expected Count = '291' and Actual Count = " + text);
    })
})


Then('I will Right click in Grid > Click on "Toggle Ignorable" option against few filtered items' , async ()=> {

    await browser.actions().mouseMove(gridObj.gridRightClick).click(gridObj.gridRightClick, protractor.Button.RIGHT).perform();
    await gridObj.toggleIgnorable.click();

})

Then('I will Right click in Grid > Click on "Toggle Privileged" option against few filtered items' , async ()=> {

    await browser.actions().mouseMove(gridObj.gridRightClick).click(gridObj.gridRightClick, protractor.Button.RIGHT).perform();
    await gridObj.togglePrivileged.click();
})