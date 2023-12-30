const {Builder, Browser, By, Key, until} = require('selenium-webdriver');

(async function cartAdd(){
    
    const driver = await new Builder().forBrowser('chrome').build();
    driver.manage().window().maximize();
    try{
        await driver.get("http://localhost:3000/login");
        await driver.findElement(By.name("email")).sendKeys("ahmet.yilmaz0096@hotmail.com");
        await driver.findElement(By.name("password")).sendKeys("ahmet123");
        await driver.findElement(By.name("button-login")).click();
        await driver.findElement(By.name("product55-url")).click();
        await driver.findElement(By.name("quantity")).clear();
        await driver.findElement(By.name("quantity")).sendKeys(3);
        await driver.findElement(By.name("add-cart")).click();
        await driver.findElement(By.id("home")).click();
        await driver.findElement(By.name("product15-url")).click();
        await driver.findElement(By.name("quantity")).clear();
        await driver.findElement(By.name("quantity")).sendKeys(2);
        await driver.findElement(By.name("add-cart")).click();
    }
    finally{
        await driver.quit();
    }
})();