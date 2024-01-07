import { By, WebDriver, until, Actions } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";


const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));


export class HomePage extends BasePage {

    private cookies = By.xpath("/html/body/div[3]/div[2]/div/div/div[2]/button");
    private kaputi = By.xpath("/html/body/div[2]/div/div/div[2]/main/div/div/section/div[1]/div/figure[1]/a");
    private kaput = By.xpath("/html/body/div[2]/div/div/div[2]/main/div/div/div/div[2]/section[1]/div/ul/li[1]/div/a");


    async clickCookies() {
        await this.findElementAndClick(this.cookies);
    }

    async clickKaputi() {
        await this.findElementAndClick(this.kaputi);
    }

    async clickKaput() {
        await this.findElementAndClick(this.kaput);
    }
}

