import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";



const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));


export class AddToCart extends BasePage {

private size = By.xpath("/html/body/div[2]/div/div/div[2]/main/div/section/section/section[1]/div[2]/section/div/div[1]/div[4]/div[1]/ul/li[1]/button");
private addToCart = By.xpath("/html/body/div[2]/div/div/div[2]/main/div/section/section/section[1]/div[2]/section/div/div[1]/div[5]/div/div[1]/div/div/button");    


async clickSize() {
    await this.findElementAndClick(this.size);
}

async clickAddToCart() {
    await this.findElementAndClick(this.addToCart);

}
}