import {by, element, ElementFinder} from "protractor";


export class filterPanel{
    filterBtn: ElementFinder;
    pin: ElementFinder;
    docArrow: ElementFinder;
    nonStandardDocCheckBox: ElementFinder;
    extensionDots: ElementFinder;
    txtCheckbox: ElementFinder;
    extensionFilterBtn: ElementFinder;
    filteredItems: ElementFinder;
    viewerTab: ElementFinder;
    desktopAppBtn: ElementFinder;
    viewerBtn: ElementFinder;
    //txtDocsNav: ElementFinder;


    constructor() {

        this.filterBtn = element(by.id("investigatorheaderfilter"));
        this.pin = element(by.id("facetinvestigatortreeseachinputppin"));
        this.docArrow = element(by.css("span[role='button']"));
        this.nonStandardDocCheckBox = element(by.xpath("//span[contains(text(),\"Non Standard Documents\")]//parent::span//span[@role=\"checkbox\"]"));
       // this.nonStandardDocCheckBox = element(by.xpath("//span[text()=\"Non Standard Documents (34)\"]//parent::span//span[@role=\"checkbox\"]"));
       //two ways for Relative xpath, we removed the 34 number for documents which could change for different cases

        this.extensionDots = element(by.xpath("//div[text()=\"Extension\"]//parent::a/a/span"));
        this.txtCheckbox = element(by.css("input[value='txt']"));
        this.extensionFilterBtn = element(by.buttonText("Filter"));
        this.filteredItems = element(by.id("search-count"));
        this.viewerTab = element(by.cssContainingText("h5[class='k-card-title']", "Viewer"));
        this.desktopAppBtn = element(by.id("investigatorheaderoptions"));
        this.viewerBtn = element(by.id("investigatorheaderoptionsmenurowimgwrapperviewer"));
        //this.txtDocsNav = element(by.css());

    }

}