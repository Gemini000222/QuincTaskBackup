"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.labelsAndBookmarks = void 0;
const protractor_1 = require("protractor");
class labelsAndBookmarks {
    constructor() {
        this.labelsAndBookmarksBtn = protractor_1.element(protractor_1.by.id("reviewsimplelabelopen"));
        this.labelHeader = protractor_1.element(protractor_1.by.xpath("//th[@data-title='Label']"));
        this.newLabel = protractor_1.element(protractor_1.by.id("viewerlabelscontextmenulabeltit"));
        this.labelNameBar = protractor_1.element(protractor_1.by.id("viewerlabelslabelinput"));
        this.createLabelBtn = protractor_1.element(protractor_1.by.id("viewerlabelslabelinputgo"));
        this.checkAllDocsBtn = protractor_1.element(protractor_1.by.id("gridcheckgrid"));
        this.applyLabelBtn = protractor_1.element(protractor_1.by.xpath("//div[@id='investigatorbodyfileexplorelabeltag']//table[@role='treegrid']//td[contains(text(),\"oneLabel\")]//preceding-sibling::td[@role='gridcell']"));
        this.bookmarksTab = protractor_1.element(protractor_1.by.xpath("//ul[@id='investigatorbodyfileexplorelabeldivtab']//span[contains(text(),\"Bookmarks\")]"));
        this.sharedHeader = protractor_1.element(protractor_1.by.xpath("//div[@id='viewerbookmarks']//td[contains(text(), \"Shared\")]"));
        this.newBookmark = protractor_1.element(protractor_1.by.xpath("//span[contains(text(), \"New Bookmark\")]//parent::span//parent::li[@id='viewerbookmarksmenubook']"));
        this.bookmarkNameBar = protractor_1.element(protractor_1.by.id("reviewbookmarknamelist"));
        this.bookmarkEnterBtn = protractor_1.element(protractor_1.by.id("reviewbookmarkcommententer"));
        this.applyBookmarkBtn = protractor_1.element(protractor_1.by.xpath("//td[contains(text(), 'twoBookmark')]//preceding-sibling::td/input[@type='checkbox']"));
    }
}
exports.labelsAndBookmarks = labelsAndBookmarks;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFiZWxzJkJvb2ttYXJrc1BhbmVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdHMvbGFiZWxzJkJvb2ttYXJrc1BhbmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUFzRDtBQUV0RCxNQUFhLGtCQUFrQjtJQWdCM0I7UUFFSSxJQUFJLENBQUMscUJBQXFCLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsV0FBVyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLFFBQVEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsaUNBQWlDLENBQUMsQ0FBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxZQUFZLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsY0FBYyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLGVBQWUsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsYUFBYSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyx1SkFBdUosQ0FBQyxDQUFDLENBQUM7UUFDcE0sSUFBSSxDQUFDLFlBQVksR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsMEZBQTBGLENBQUMsQ0FBQyxDQUFBO1FBQ2pJLElBQUksQ0FBQyxZQUFZLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGdFQUFnRSxDQUFDLENBQUMsQ0FBQztRQUN4RyxJQUFJLENBQUMsV0FBVyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxxR0FBcUcsQ0FBQyxDQUFDLENBQUM7UUFDNUksSUFBSSxDQUFDLGVBQWUsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsc0ZBQXNGLENBQUMsQ0FBQyxDQUFDO0lBRTFJLENBQUM7Q0FDSjtBQWpDRCxnREFpQ0MifQ==