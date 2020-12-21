import {by, element, ElementFinder} from "protractor";

export class grid{

    filteredItems: ElementFinder;
    filterIcon: ElementFinder;
    pin: ElementFinder;

    // Now last 2 steps of toggle going to write in grid file, because right click is done on grid section
    gridRightClick: ElementFinder;
    toggleIgnorable: ElementFinder;
    togglePrivileged: ElementFinder;


    constructor() {

        this.filteredItems = element(by.id("search-count"));
        this.filterIcon = element(by.id("investigatorheaderfilter"));
        this.pin = element(by.id("facetinvestigatortreeseachinputppin"));

        this.gridRightClick = element(by.xpath("//th[@data-field='ObjectFiles_Extension']"));
        this.toggleIgnorable = element(by.id("itemlisttoggleignorabletit"));
        this.togglePrivileged = element(by.id("itemlisttoggleprivilegetit"));
    }
}