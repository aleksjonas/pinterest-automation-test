import { test, expect } from '@playwright/test';
import { email, password } from '../config';


test.describe('User login to Pinterest', () => {

    test('successful login with correct credentials', async ({ page }) => {
        await page.goto('https://www.pinterest.com/');
        await page.locator('[data-test-id="simple-login-button"]').getByRole('button', { name: 'Log in' }).click();
        await page.getByPlaceholder('Email').fill(email);
        await page.getByPlaceholder('Password').fill(password);
        await page.locator('[data-test-id="registerFormSubmitButton"]').getByRole('button', { name: 'Log in' }).click();

        await page.goto('https://pl.pinterest.com/pin/2040762326044567/');
        await page.locator('[data-test-id="PinBetterSaveButton"]').getByRole('button', { name: 'Save' }).click()

        const saveButton = await page.locator('[data-test-id="PinBetterSaveButton"]').getByText('Saved').first();
        expect(await saveButton.isVisible()).toBe(true);

    });

});