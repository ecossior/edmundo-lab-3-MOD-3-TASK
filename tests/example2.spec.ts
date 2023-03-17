import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await page.locator('.getStarted_Sjon').click();
    //await page.getByRole('link', { name: 'Get started' }).click();
    //await page.getByRole('button', { name: 'Search' }).click();
    //await page.getByPlaceholder('Search docs').click();
    //await page.getByPlaceholder('Search docs').fill('hi');
    //await page.getByRole('button', { name: 'Guides Docs Classes Assertions Playwright Test Test Reporter Migration See all 74 results Search by Algolia Enter key to select Arrow down Arrow up to navigate Escape key to close' }).click();  
    await page.waitForTimeout(5000);
});
