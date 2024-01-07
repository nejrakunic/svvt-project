import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";



const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class UserLogin  extends BasePage {
    
    private cookies = By.xpath("/html/body/div[3]/div[2]/div/div/div[2]/button");
    private clickIcon = By.xpath("/html/body/div[2]/div/div/div[2]/header/div/div[1]/nav[2]/ul/li[3]/a");
    private email = By.xpath("/html/body/div[2]/div/div/div[6]/div[2]/section/form/div[2]/fieldset/div[1]/div/div/div/input");
    private password = By.xpath("/html/body/div[2]/div/div/div[6]/div[2]/section/form/div[2]/fieldset/div[2]/div/div/div/input");
    private login = By.xpath("/html/body/div[2]/div/div/div[6]/div[2]/section/form/div[2]/fieldset/div[4]/div/div/button");




    async clickCookies() {
        await this.findElementAndClick(this.cookies);
    }

    async clickIconUser() {
        await this.findElementAndClick(this.clickIcon);
    }

    async fillemail() {
        await this.fillInputField(this.email, testData.credentials.email);
        }

    async fillpassword() {
        await this.fillInputField(this.password, testData.credentials.password);
        }

    async clickLogin() {
        await this.waitAndClick(this.login, 4000);
    }    





}