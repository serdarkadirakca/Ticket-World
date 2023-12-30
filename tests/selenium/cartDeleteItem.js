const {Builder, Browser, By, Key, until} = require('selenium-webdriver');

(async function cartDeleteItem(){
    
    const driver = await new Builder().forBrowser('chrome').build();
    driver.manage().window().maximize();
    try{
        await driver.get("http://localhost:3000/login");
        await driver.findElement(By.name("email")).sendKeys("ahmet.yilmaz0096@hotmail.com");
        await driver.findElement(By.name("password")).sendKeys("ahmet123");
        await driver.findElement(By.name("button-login")).click();
        await driver.findElement(By.name("cart")).click();
        await driver.findElement(By.id("55")).click();
    }
    finally{
        await driver.quit();
    }
})();