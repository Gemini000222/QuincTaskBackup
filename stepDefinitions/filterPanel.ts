import {setDefaultTimeout, Then, When} from "cucumber";
import {filterPanel} from "../pageObjects/filterPanel";
import {browser, by, element, protractor} from "protractor";

setDefaultTimeout(60 * 1000);
let EC = protractor.ExpectedConditions;


let filterPanelObj = new filterPanel();


When('I will click on "Filter" Icon to open Filter Panel', async ()=>{

    await filterPanelObj.filterBtn.click();
})


Then('I will click on "Pin" icon of filter panel to make the Grid more visible', async ()=> {

    await filterPanelObj.pin.click();
})

When('I will select "Non-Standard Documents=34"', async ()=> {

    await filterPanelObj.docArrow.click();
    await filterPanelObj.nonStandardDocCheckBox.click();
    await browser.sleep(5000);

})


Then('I will apply filter of "txt" on Extension Column', async ()=> {

    await browser.actions().mouseMove(filterPanelObj.extensionDots).click().perform();

    await browser.sleep(3000);

    await filterPanelObj.txtCheckbox.click();
    await filterPanelObj.extensionFilterBtn.click();

})


Then('I will verify that there are "17" filtered items in Viewer', async ()=> {

    await browser.wait(EC.textToBePresentInElement(filterPanelObj.filteredItems,"Filtered Items: 17"), 11000);
    await filterPanelObj.filteredItems.getText().then( async (text)=> {

        console.log("Expected value = Filtered Items: 17  and  Actual value = " + text);
    })

})

Then('I will select "Viewer" from Desktop Application Window' , async ()=> {

    if(await filterPanelObj.viewerTab.isPresent())
    {
        await console.log("The viewer is already opened");
    }
    else
    {

        await filterPanelObj.desktopAppBtn.click();
        await browser.actions().mouseMove(filterPanelObj.viewerBtn).click().perform();
    }

})
