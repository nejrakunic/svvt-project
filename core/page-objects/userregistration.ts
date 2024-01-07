import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";



const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export default class userregistration extends BasePage {
    
    private cookies = By.xpath("/html/body/div[3]/div[2]/div/div/div[2]/button");
    private clickIcon = By.xpath("/html/body/div[2]/div/div/div[2]/header/div/div[1]/nav[2]/ul/li[3]/a");
    private regiser = By.xpath("/html/body/div[2]/div/div/div[6]/div[2]/section/form/div[2]/fieldset/div[5]/div/div/span/a");
    private email = By.xpath("/html/body/div[2]/div/div/div[6]/div[2]/form/div[4]/fieldset[1]/div[1]/div[1]/div/div/input");
    private password = By.xpath("/html/body/div[2]/div/div/div[6]/div[2]/form/div[4]/fieldset[1]/div[2]/div[1]/div/div/input");
    private checkbox = By.xpath("/html/body/div[2]/div/div/div[6]/div[2]/form/div[5]/div[1]/div/div/label");
    private create = By.xpath("/html/body/div[2]/div/div/div[6]/div[2]/form/div[5]/div[4]/div/div/button");

    async clickCookies() {
        await this.findElementAndClick(this.cookies);
    }

    async clickIconUser() {
        await this.findElementAndClick(this.clickIcon);
    }

    async clickRegister() {
        await this.findElementAndClick(this.regiser);
    }

    async fillemail() {
        await this.fillInputField(this.email, testData.credentials.email);
        }

    async fillpassword() {
        await this.fillInputField(this.password, testData.credentials.password);
        }

    async clickCheckbox() {
        await this.findElementAndClick(this.checkbox);
    }    

    async clickCreate() {
        await this.findElementAndClick(this.create);
    }    



}
