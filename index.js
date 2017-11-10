// Enter search term
searchTerm = 'github',
// Enter full or partial URL to find position of
searchWebsite = 'github.com',

chromedriver = require('chromedriver'),
webdriver = require('selenium-webdriver'),
By = webdriver.By,
until = webdriver.until,
chrome = require("selenium-webdriver/chrome"),
driver = new webdriver.Builder()
    .forBrowser('chrome')
    // Uncomment for Chrome headless
    // .setChromeOptions(new chrome.Options().headless())
    .build();
driver.get('http://www.google.co.uk');
var element = driver.findElement(webdriver.By.name('q'));
element.sendKeys(searchTerm);
element.submit();
var i = 1;
checkPage();
function checkPage() {
    var isPresent = driver.findElements(By.xpath(`//cite[contains(text(), '${searchWebsite}')]`));
    isPresent.then(function(foundString) {
        if (foundString.length === 0) {
            i += 10;
            driver.findElement(By.id('pnnext')).click();
            checkPage();
        } else {
            var websiteResult = driver.findElement(By.xpath(`//*[contains(text(), '${searchWebsite}')]`));
            websiteResult.getText().then(function(websiteResultText) {
                getPosition(websiteResultText);
            });
        };
    });     
};
function getPosition(websiteResultText) {
    driver.findElements(By.tagName("cite")).then(function(elements) {
        elements.forEach(function(element) {
            element.getText().then(function(text){
                if(text === websiteResultText) {
                    console.log(`'${text}' is approximately number ${i} in Google when '${searchTerm}' is the search term`);
                } else {
                    i++;
                };
            });
        });
    });
};
driver.quit();