import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";



const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));


export class pwchange  extends BasePage {

private forgotpassword = By.xpath('//a[@href="/ba/logon.html?screen=forgot-password"]');
private fillemail = By.xpath("/html/body/div[2]/div/div/div[6]/div[2]/div/form/div[2]/fieldset/div[2]/div/div/div/input");
private ponovopostavi = By.xpath("/html/body/div[2]/div/div/div[6]/div[2]/div/form/div[2]/fieldset/div[3]/div/div/button");


async clickforgotpassword() {
    await this.findElementAndClick(this.forgotpassword);
}

async fillEmail() {
    await this.fillInputField(this.fillemail, testData.credentials.email);
    }

async clickponovopostavi() {
    await this.findElementAndClick(this.ponovopostavi);
}


}