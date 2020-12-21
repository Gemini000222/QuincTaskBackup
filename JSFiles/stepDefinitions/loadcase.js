"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const loadcase_1 = require("../pageObjects/loadcase");
const cucumber_1 = require("cucumber");
cucumber_1.setDefaultTimeout(60 * 1000);
let loadCaseObj = new loadcase_1.loadCase();
cucumber_1.When('I will click on "Open" button against case', () => __awaiter(void 0, void 0, void 0, function* () {
    //let EC = protractor.ExpectedConditions;
    //await browser.wait(EC.visibilityOf(loadCaseObj.openBtn));
    yield loadCaseObj.openBtn.click();
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGNhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5pdGlvbnMvbG9hZGNhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzREFBaUQ7QUFDakQsdUNBQXVEO0FBSXZELDRCQUFpQixDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztBQUU3QixJQUFJLFdBQVcsR0FBRyxJQUFJLG1CQUFRLEVBQUUsQ0FBQztBQUlqQyxlQUFJLENBQUMsNENBQTRDLEVBQUUsR0FBUSxFQUFFO0lBRXpELHlDQUF5QztJQUN6QywyREFBMkQ7SUFDM0QsTUFBTSxXQUFXLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBRXRDLENBQUMsQ0FBQSxDQUFDLENBQUEifQ==