import {by, element, ElementFinder} from "protractor";

export class login
{
    investigatorLogin: ElementFinder;
    username: ElementFinder;
    password: ElementFinder;
    loginBtn: ElementFinder;
    getResult: ElementFinder;


    constructor()
    {
        this.investigatorLogin = element(by.id("logintitinvest"));
        this.username = element(by.id("nameid"));
        this.password = element(by.id("passwordid"));
        this.loginBtn = element(by.id("submit_button"));
        this.getResult = element(by.id("investigatorcaselistmenutitmain"));
    }


}