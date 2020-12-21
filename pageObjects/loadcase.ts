import {by, element, ElementFinder} from "protractor";

export class loadCase{

    openBtn: ElementFinder;


    constructor() {

        this.openBtn = element(by.css("button[class='investigatorcaselistopen']"));
    }

}