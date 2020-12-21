"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.caseDetail = void 0;
const protractor_1 = require("protractor");
class caseDetail {
    constructor() {
        this.searchBar = protractor_1.element(protractor_1.by.id("searchBarInput"));
        this.searchBtn = protractor_1.element(protractor_1.by.id("searchBarSearchButton"));
        this.getResult = protractor_1.element(protractor_1.by.css("h2[class='investigatorsumm-heading']"));
        this.viewDataBtn = protractor_1.element(protractor_1.by.id("investigatorsummcontrollview"));
    }
}
exports.caseDetail = caseDetail;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FzZWRldGFpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmplY3RzL2Nhc2VkZXRhaWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQXNEO0FBRXRELE1BQWEsVUFBVTtJQVFuQjtRQUVJLElBQUksQ0FBQyxTQUFTLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsU0FBUyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLFNBQVMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsc0NBQXNDLENBQUMsQ0FBQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxXQUFXLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLDhCQUE4QixDQUFDLENBQUMsQ0FBQztJQUV0RSxDQUFDO0NBQ0o7QUFoQkQsZ0NBZ0JDIn0=