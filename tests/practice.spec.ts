import { test, expect} from '@playwright/test';

test('Locator practice',async ({page}) => {
    await page.goto('');
    const heading = await page.getByRole('heading',{name:'restful-booker'}).first();
    console.log(await heading.textContent());
});