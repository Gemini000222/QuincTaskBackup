import {by, element, ElementFinder} from "protractor";

export class labelsAndBookmarks{

    labelsAndBookmarksBtn: ElementFinder;
    labelHeader: ElementFinder;
    newLabel: ElementFinder;
    labelNameBar: ElementFinder;
    createLabelBtn: ElementFinder;
    checkAllDocsBtn: ElementFinder;
    applyLabelBtn: ElementFinder;
    bookmarksTab: ElementFinder;
    sharedHeader: ElementFinder;
    newBookmark: ElementFinder;
    bookmarkNameBar: ElementFinder;
    bookmarkEnterBtn: ElementFinder;
    applyBookmarkBtn: ElementFinder;

    constructor() {

        this.labelsAndBookmarksBtn = element(by.id("reviewsimplelabelopen"));
        this.labelHeader = element(by.xpath("//th[@data-title='Label']"));
        this.newLabel = element(by.id("viewerlabelscontextmenulabeltit"));
        this.labelNameBar = element(by.id("viewerlabelslabelinput"));
        this.createLabelBtn = element(by.id("viewerlabelslabelinputgo"));
        this.checkAllDocsBtn = element(by.id("gridcheckgrid"));
            this.applyLabelBtn = element(by.xpath("//div[@id='investigatorbodyfileexplorelabeltag']//table[@role='treegrid']//td[contains(text(),\"oneLabel\")]//preceding-sibling::td[@role='gridcell']"));
        this.bookmarksTab = element(by.xpath("//ul[@id='investigatorbodyfileexplorelabeldivtab']//span[contains(text(),\"Bookmarks\")]"))
        this.sharedHeader = element(by.xpath("//div[@id='viewerbookmarks']//td[contains(text(), \"Shared\")]"));
        this.newBookmark = element(by.xpath("//span[contains(text(), \"New Bookmark\")]//parent::span//parent::li[@id='viewerbookmarksmenubook']"));
        this.bookmarkNameBar = element(by.id("reviewbookmarknamelist"));
        this.bookmarkEnterBtn = element(by.id("reviewbookmarkcommententer"));
            this.applyBookmarkBtn = element(by.xpath("//td[contains(text(), 'twoBookmark')]//preceding-sibling::td/input[@type='checkbox']"));

    }
}