import { test, expect } from '@playwright/test';
import { email, password, username } from '../config';

test.describe('Profile editing', () => {
    test('change description', async ({ page }) => {

        let description: string = 'A fan of good cars and even greater sport';

        await page.goto('https://www.pinterest.com/');
        await page.locator('[data-test-id="simple-login-button"]').getByRole('button', { name: 'Log in' }).click();
        await page.getByPlaceholder('Email').fill(email);
        await page.getByPlaceholder('Password').fill(password);
        await page.locator('[data-test-id="registerFormSubmitButton"]').getByRole('button', { name: 'Log in' }).click();
        await page.getByRole('link', { name: 'Mjt' }).click();

        await page.getByRole('button', { name: 'Edit profile' }).click();
        
        await page.getByPlaceholder('Tell your story').fill(description);
        await page.getByRole('button', { name: 'Save' }).click();
        
        const aboutElementHandle = await page.$('#about');
        const textContentPromise = aboutElementHandle ? aboutElementHandle.textContent() : Promise.resolve(null);
        await expect(textContentPromise).resolves.toBe(description);

        await page.getByRole('link', { name: username }).click();

        const profileHeaderElement = await page.$('div[data-test-id="profile-header"].Jea');
        const textContent = profileHeaderElement ? await profileHeaderElement.textContent() : null;
        await expect(textContent).toContain(description);
    });
});
