import { By, WebDriver, until, Actions } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";


const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class logout extends BasePage {

    private ikona = By.xpath('//a[@href="/ba/user-orders.html"]');
    private logoutButton: By = By.xpath('/html/body/div[2]/div/div/div[1]/main/div/section/div[1]/div/button/span');



    async clickIconUser() {
        await this.findElementAndClick(this.ikona);
    }
     
    async clicklogout() {
        await this.findElementAndClick(this.logoutButton);
    }
}

