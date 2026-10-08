import { test, expect } from '@playwright/test';
import { getUserData } from '../data/userdata';

test('test', async ({ page }) => {
  await page.goto('');
  await page.getByRole('link', { name: 'Sign in' }).click();
 // await page.locator('#email').click();
  await page.locator('#email').fill(getUserData().email);
  //await page.locator('#email').press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill(getUserData().password);
  await page.getByRole('button', { name: ' Sign in' }).click();
  await expect(page.getByRole('link', { name: 'Jatin Shharma' })).toBeVisible();
});