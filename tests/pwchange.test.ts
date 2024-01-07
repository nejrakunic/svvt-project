import { Builder, By, WebDriver } from "selenium-webdriver";
import { createDriver, quitDriver } from "../core/config/driver-setup";
import { readFileSync } from "fs";
import * as path from "path";
import { UserLogin } from "../core/page-objects/userlogin";
import { pwchange } from "../core/page-objects/pwchange";



const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));


let driver: WebDriver;
let userloginPage: UserLogin;
let pwchangePage: pwchange;


beforeAll(async () => {
    driver = await createDriver(testData.url.home_page);
    userloginPage = new UserLogin(driver);
    pwchangePage = new pwchange(driver);

}, 50000 );


test("pass change", async () => {
    
        await userloginPage.clickCookies();
        await userloginPage.clickIconUser();
        await pwchangePage.clickforgotpassword();
        await pwchangePage.fillEmail();
        await pwchangePage.clickponovopostavi();




}, 50000 );