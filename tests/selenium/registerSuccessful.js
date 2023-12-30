const {Builder, Browser, By, Key, until} = require('selenium-webdriver');

(async function registerSuccesful(){
    
    const driver = await new Builder().forBrowser('chrome').build();
    driver.manage().window().maximize();
    try{
        await driver.get("http://localhost:3000/register");
        await driver.findElement(By.name("name")).sendKeys("Ayşe");
        await driver.findElement(By.name("surname")).sendKeys("Dinç");
        await driver.findElement(By.name("address")).sendKeys("Altunizade St. No:236");
        await driver.findElement(By.name("city")).sendKeys("Istanbul");
        await driver.findElement(By.name("country")).sendKeys("Turkey");
        await driver.findElement(By.name("postcode")).sendKeys("34676");
        await driver.findElement(By.name("phone")).sendKeys("05566328575");
        await driver.findElement(By.name("email")).sendKeys("ayse.dinc2001@gmail.com");
        await driver.findElement(By.name("password")).sendKeys("ayşe123");
        await driver.findElement(By.name("signup")).click();
    }
    finally{
        await driver.quit();
    }
})();