const {Builder, Browser, By, Key, until} = require('selenium-webdriver');

(async function resetPasswordWrong(){
    
    const driver = await new Builder().forBrowser('chrome').build();
    driver.manage().window().maximize();
    try{
        await driver.get("http://localhost:3000/reset");
        await driver.findElement(By.name("email")).sendKeys("ahmet.yilmaz@hotmail.com");
        await driver.findElement(By.name("reset")).click();
    }
    finally{
        await driver.quit();
    }
})();