"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.grid = void 0;
const protractor_1 = require("protractor");
class grid {
    constructor() {
        this.filteredItems = protractor_1.element(protractor_1.by.id("search-count"));
        this.filterIcon = protractor_1.element(protractor_1.by.id("investigatorheaderfilter"));
        this.pin = protractor_1.element(protractor_1.by.id("facetinvestigatortreeseachinputppin"));
        this.gridRightClick = protractor_1.element(protractor_1.by.xpath("//th[@data-field='ObjectFiles_Extension']"));
        this.toggleIgnorable = protractor_1.element(protractor_1.by.id("itemlisttoggleignorabletit"));
        this.togglePrivileged = protractor_1.element(protractor_1.by.id("itemlisttoggleprivilegetit"));
    }
}
exports.grid = grid;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmplY3RzL2dyaWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQXNEO0FBRXRELE1BQWEsSUFBSTtJQVliO1FBRUksSUFBSSxDQUFDLGFBQWEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsVUFBVSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLEdBQUcsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMscUNBQXFDLENBQUMsQ0FBQyxDQUFDO1FBRWpFLElBQUksQ0FBQyxjQUFjLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDJDQUEyQyxDQUFDLENBQUMsQ0FBQztRQUNyRixJQUFJLENBQUMsZUFBZSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLGdCQUFnQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLENBQUM7SUFDekUsQ0FBQztDQUNKO0FBdEJELG9CQXNCQyJ9