import { test, expect } from '@playwright/test';
import { email, password, username } from '../config';

test.describe('User login to Pinterest', () => {

    test('successful login with correct credentials', async ({ page }) => {
        await page.goto('https://www.pinterest.com/');
        await page.locator('[data-test-id="simple-login-button"]').getByRole('button', { name: 'Log in' }).click();
        await page.getByPlaceholder('Email').fill(email);
        await page.getByPlaceholder('Password').fill(password);
        await page.locator('[data-test-id="registerFormSubmitButton"]').getByRole('button', { name: 'Log in' }).click();
        await page.getByRole('link', { name: username }).click();

        await expect(page.locator('[data-test-id="profile-name"]')).toHaveText('Mjt');

    });

    test('unsuccessful login with incorrect email', async ({ page }) => {
        await page.goto('https://www.pinterest.com/');
        await page.locator('[data-test-id="simple-login-button"]').click();
        await page.getByPlaceholder('Email').fill('123');
        await page.getByPlaceholder('Password').fill('123');
        await page.locator('[data-test-id="registerFormSubmitButton"]').click();

        await expect(page.locator('[data-test-id="emailInputField"] div').filter({ hasText: 'That doesn\'t look like an' }).count()).resolves.toBeGreaterThan(0);

    });

    test('unsuccessful login with incorrect password', async ({ page }) => {
        await page.goto('https://www.pinterest.com/');
        await page.locator('[data-test-id="simple-login-button"]').click();
        await page.getByPlaceholder('Email').fill(email);
        await page.getByPlaceholder('Password').fill('123');
        await page.locator('[data-test-id="registerFormSubmitButton"]').click();
        await expect(page.locator('[data-test-id="passwordInputField"] div').filter({ hasText: 'The password you entered is' }).count()).resolves.toBeGreaterThan(0);
    });    


    test('closing the login popup', async ({ page }) => {
        await page.goto('https://www.pinterest.com/');
        await page.locator('[data-test-id="simple-login-button"]').click();
        await page.getByPlaceholder('Email').fill('email');
        await page.getByPlaceholder('Password').fill('123');
        await page.getByLabel('close').click();

        await expect(page.locator('[data-test-id="login-popup"]').count()).resolves.toBe(0);
    });
});
