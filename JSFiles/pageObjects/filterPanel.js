"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterPanel = void 0;
const protractor_1 = require("protractor");
class filterPanel {
    //txtDocsNav: ElementFinder;
    constructor() {
        this.filterBtn = protractor_1.element(protractor_1.by.id("investigatorheaderfilter"));
        this.pin = protractor_1.element(protractor_1.by.id("facetinvestigatortreeseachinputppin"));
        this.docArrow = protractor_1.element(protractor_1.by.css("span[role='button']"));
        this.nonStandardDocCheckBox = protractor_1.element(protractor_1.by.xpath("//span[contains(text(),\"Non Standard Documents\")]//parent::span//span[@role=\"checkbox\"]"));
        // this.nonStandardDocCheckBox = element(by.xpath("//span[text()=\"Non Standard Documents (34)\"]//parent::span//span[@role=\"checkbox\"]"));
        //two ways for Relative xpath, we removed the 34 number for documents which could change for different cases
        this.extensionDots = protractor_1.element(protractor_1.by.xpath("//div[text()=\"Extension\"]//parent::a/a/span"));
        this.txtCheckbox = protractor_1.element(protractor_1.by.css("input[value='txt']"));
        this.extensionFilterBtn = protractor_1.element(protractor_1.by.buttonText("Filter"));
        this.filteredItems = protractor_1.element(protractor_1.by.id("search-count"));
        this.viewerTab = protractor_1.element(protractor_1.by.cssContainingText("h5[class='k-card-title']", "Viewer"));
        this.desktopAppBtn = protractor_1.element(protractor_1.by.id("investigatorheaderoptions"));
        this.viewerBtn = protractor_1.element(protractor_1.by.id("investigatorheaderoptionsmenurowimgwrapperviewer"));
        //this.txtDocsNav = element(by.css());
    }
}
exports.filterPanel = filterPanel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyUGFuZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlT2JqZWN0cy9maWx0ZXJQYW5lbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBc0Q7QUFHdEQsTUFBYSxXQUFXO0lBWXBCLDRCQUE0QjtJQUc1QjtRQUVJLElBQUksQ0FBQyxTQUFTLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsR0FBRyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLFFBQVEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxzQkFBc0IsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsNkZBQTZGLENBQUMsQ0FBQyxDQUFDO1FBQ2hKLDZJQUE2STtRQUM3SSw0R0FBNEc7UUFFM0csSUFBSSxDQUFDLGFBQWEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsK0NBQStDLENBQUMsQ0FBQyxDQUFDO1FBQ3hGLElBQUksQ0FBQyxXQUFXLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLGFBQWEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsU0FBUyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLGlCQUFpQixDQUFDLDBCQUEwQixFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDckYsSUFBSSxDQUFDLGFBQWEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxTQUFTLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLGtEQUFrRCxDQUFDLENBQUMsQ0FBQztRQUNwRixzQ0FBc0M7SUFFMUMsQ0FBQztDQUVKO0FBbkNELGtDQW1DQyJ9