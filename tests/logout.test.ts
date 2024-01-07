import { Builder, By, WebDriver } from "selenium-webdriver";
import { createDriver, quitDriver } from "../core/config/driver-setup";
import { readFileSync } from "fs";
import * as path from "path";
import { UserLogin } from "../core/page-objects/userlogin";
import { logout } from "../core/page-objects/logout";



const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));


let driver: WebDriver;
let userloginPage: UserLogin;
let logoutPage: logout;

beforeAll(async () => {
    driver = await createDriver(testData.url.home_page);
    userloginPage = new UserLogin(driver);
    logoutPage = new logout(driver);

}, 50000 );


test("User logout", async () => {

    await userloginPage.clickCookies();
    await userloginPage.clickIconUser();
    await userloginPage.fillemail();
    await userloginPage.fillpassword();
    await userloginPage.clickLogin();
    await logoutPage.clickIconUser();
    await logoutPage.clicklogout();


}, 50000 );


afterAll(async () => {

    await quitDriver(driver);
} );