import { test, expect, Page } from '@playwright/test';

test.describe('All my test',()=>{

    let page: Page;

    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage();
        await page.goto('https://devexpress.github.io/testcafe/example/');
        await page.locator('//h1[.="Example"]').waitFor();
    });

    test('Scenario 1: Your name text', async () => {
        await page.getByTestId('name-input').click();
        await page.getByTestId('name-input').fill('hola');
    });

    test('Scenario 2: Populate button', async () => {
        await page.getByTestId('populate-button').click();
    });

    test('Scenario 3: Which features are important to you', async () => {
        let features = [
            "Support for testing on remote devices", 
            "Re-using existing JavaScript code for testing",
            "Running tests in background and/or in parallel in multiple browsers",
            "Easy embedding into a Continuous integration system",
            "Advanced traffic and markup analysis"
        ];
        for (let i = 0; i < features.length; i++) {
            await page.locator(`//label[.="${features[i]}"]`).click();    
        }
    });

    test('Scenario 4: What is your primary Operating System', async () => {
        let selectedSystem = "Linux";    
        await page.locator(`//label[.="${selectedSystem}"]`).click();       
    });

    test('Scenario 5: Which TestCafe interface do you use', async () => {
        let selectedInterface = "JavaScript API";   
        await page.getByTestId(`preferred-interface-select`).selectOption(selectedInterface)     
    });

    test.afterAll(async()=>{
        await page.close();
    })
})