const {Builder, Browser, By, Key, until} = require('selenium-webdriver');

(async function registerWrongEmail(){
    
    const driver = await new Builder().forBrowser('chrome').build();
    driver.manage().window().maximize();
    try{
        await driver.get("http://localhost:3000/register");
        await driver.findElement(By.name("name")).sendKeys("Ahmet");
        await driver.findElement(By.name("surname")).sendKeys("Yılmaz");
        await driver.findElement(By.name("address")).sendKeys("Acıbadem, Uskudar, No:24b");
        await driver.findElement(By.name("city")).sendKeys("Istanbul");
        await driver.findElement(By.name("country")).sendKeys("Turkey");
        await driver.findElement(By.name("postcode")).sendKeys("34670");
        await driver.findElement(By.name("phone")).sendKeys("05323423234");
        await driver.findElement(By.name("email")).sendKeys("ahmet.yilmaz0096@hotmail.com");
        await driver.findElement(By.name("password")).sendKeys("ahmet123");
        await driver.findElement(By.name("signup")).click();
    }
    finally{
        await driver.quit();
    }
})();