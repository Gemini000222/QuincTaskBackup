import {by, element, ElementFinder} from "protractor";

export class caseDetail{

    searchBar: ElementFinder;
    searchBtn: ElementFinder;
    getResult: ElementFinder;
    viewDataBtn: ElementFinder;


    constructor() {

        this.searchBar = element(by.id("searchBarInput"));
        this.searchBtn = element(by.id("searchBarSearchButton"));
        this.getResult = element(by.css("h2[class='investigatorsumm-heading']"));
        this.viewDataBtn = element(by.id("investigatorsummcontrollview"));

    }
}