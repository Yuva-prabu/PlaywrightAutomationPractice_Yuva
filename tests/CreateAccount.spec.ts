import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('');
    await page.getByRole('link', { name: 'Sign in' }).click();
    await page.locator('#email_create').fill('yuvaprabu50@gmail.com');
    await page.getByRole('button', { name: 'Create an account' }).click();
    await page.getByRole('radio', { name: 'Mr.' }).check();

    await page.getByRole('textbox', { name: 'First name *' }).fill('yuva');


    await page.getByRole('textbox', { name: 'Last name *' }).fill('prabu');

    await page.getByRole('textbox', { name: 'Email *' }).fill('yuvaprabu50@gmail.com');

    await page.getByRole('textbox', { name: 'Password *' }).fill('qweqwe123!!');
    await page.locator('#days').selectOption('16');
    await page.locator('#months').selectOption('3');
    await page.locator('#years').selectOption('2010');
    await page.getByRole('checkbox', { name: 'Sign up for our newsletter!' }).check();
    await page.getByRole('checkbox', { name: 'Receive special offers from' }).check();
    await page.getByRole('button', { name: 'Register ' }).click();
    await expect(page.getByText('Your account has been created.')).toBeVisible();
});