import { Builder, By, WebDriver } from "selenium-webdriver";
import { createDriver, quitDriver } from "../core/config/driver-setup";
import { readFileSync } from "fs";
import * as path from "path";
import userregistration from "../core/page-objects/userregistration";



const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));


let driver: WebDriver;
let userregistrationPage: userregistration;


beforeAll(async () => {
    driver = await createDriver(testData.url.home_page);
    userregistrationPage = new userregistration(driver);

}, 50000 );


test("User registration", async () => {

    await userregistrationPage.clickCookies();
    await userregistrationPage.clickIconUser();
    await userregistrationPage.clickRegister();
    await userregistrationPage.fillemail();
    await userregistrationPage.fillpassword();
    await userregistrationPage.clickCheckbox();
    await userregistrationPage.clickCreate();


}, 50000 );


afterAll(async () => {
    await quitDriver(driver);
});
