"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const protractor_1 = require("protractor");
class login {
    constructor() {
        this.investigatorLogin = protractor_1.element(protractor_1.by.id("logintitinvest"));
        this.username = protractor_1.element(protractor_1.by.id("nameid"));
        this.password = protractor_1.element(protractor_1.by.id("passwordid"));
        this.loginBtn = protractor_1.element(protractor_1.by.id("submit_button"));
        this.getResult = protractor_1.element(protractor_1.by.id("investigatorcaselistmenutitmain"));
    }
}
exports.login = login;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlT2JqZWN0cy9sb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBc0Q7QUFFdEQsTUFBYSxLQUFLO0lBU2Q7UUFFSSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsUUFBUSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxRQUFRLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsU0FBUyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDLENBQUM7SUFDdkUsQ0FBQztDQUdKO0FBbkJELHNCQW1CQyJ9