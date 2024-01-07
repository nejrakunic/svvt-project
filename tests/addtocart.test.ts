import { HomePage } from '../core/page-objects/home-page';
import { AddToCart } from '../core/page-objects/addtocart';
import { Builder, By, WebDriver } from "selenium-webdriver";
import { createDriver, quitDriver } from "../core/config/driver-setup";
import { readFileSync } from "fs";
import * as path from "path";


const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));


let driver: WebDriver;
let homePage: HomePage;
let addToCart: AddToCart;


beforeAll(async () => {
    driver = await createDriver(testData.url.home_page);
    homePage = new HomePage(driver);
    addToCart = new AddToCart(driver);
  
}, 50000 );


test("User login", async () => {
    
        await homePage.clickCookies();
        await homePage.clickKaputi();
        await homePage.clickKaput();
        await addToCart.clickSize();
        await addToCart.clickAddToCart();
    
    }, 50000 );


afterAll(async () => {

    await quitDriver(driver);
} );
