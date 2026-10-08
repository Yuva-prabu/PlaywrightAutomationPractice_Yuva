import { test, expect } from '@playwright/test';
import { getCustomerData } from '../data/Customer.data';

test('test', async ({ page }) => {
    await page.goto('');
    await page.getByRole('link', { name: 'Sign in' }).click();
    await page.locator('#email_create').fill(getCustomerData().email);
    await page.getByRole('button', { name: 'Create an account' }).click();
    await page.getByRole('radio', { name: 'Mr.' }).check();

    await page.getByRole('textbox', { name: 'First name *' }).fill(getCustomerData().firstName);


    await page.getByRole('textbox', { name: 'Last name *' }).fill(getCustomerData().lastName);

    await page.getByRole('textbox', { name: 'Email *' }).fill(getCustomerData().email);

    await page.getByRole('textbox', { name: 'Password *' }).fill(getCustomerData().password);
    await page.locator('#days').selectOption('16');
    await page.locator('#months').selectOption('3');
    await page.locator('#years').selectOption('2010');
    await page.getByRole('checkbox', { name: 'Sign up for our newsletter!' }).check();
    await page.getByRole('checkbox', { name: 'Receive special offers from' }).check();
    await page.getByRole('button', { name: 'Register ' }).click();
    await expect(page.getByText('Your account has been created.')).toBeVisible();
});