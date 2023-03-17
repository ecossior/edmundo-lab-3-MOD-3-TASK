import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://www.boa.bo/');
    await page.locator('#select_desde').selectOption('CBB');
    await page.locator('#select_hasta').selectOption('VVI');
    await page.locator('#picker_salida').click();
  //span[@class='ui-datepicker-month'][text()="March"]  
  //ancestor div padre
  //a[@class='ui-state-default'][text()='3']
    const day = 20;
    const month = "March";
    const departureDate = `//span[@class="ui-datepicker-month"][text()="${month}"]//ancestor::div[contains(@class,"ui-datepicker-group ui-datepicker-group")]//a[@class="ui-state-default"][text()="${day}"]`;  
    const day2 = 25;
    const month2 = "April";
    const departureDate2 = `//span[@class="ui-datepicker-month"][text()="${month2}"]//ancestor::div[contains(@class,"ui-datepicker-group ui-datepicker-group")]//a[@class="ui-state-default"][text()="${day2}"]`;
    await page.locator(departureDate).click();
    await page.locator('#picker_regreso').click();
    await page.locator(departureDate2).click();
    await page.getByText('Search').click();
});