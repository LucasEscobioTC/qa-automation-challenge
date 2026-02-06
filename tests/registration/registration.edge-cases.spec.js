import { test, expect } from '@playwright/test';
import RegistrationPage from '../../pages/RegistrationPage';

test.describe('Registration Edge Case Tests', () => {
  let registrationPage;

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000');
  registrationPage = new RegistrationPage(page);
});

  test('Should show errors when submitting empty form', async () => {
    await registrationPage.submit();

    await expect(await registrationPage.isErrorVisible()).toBeTruthy();
    await expect(await registrationPage.isSuccessVisible()).toBeFalsy();
  });

  test('Should show error for negative age value', async () => {
    await registrationPage.fillForm({
      fullName: 'Edge Case User',
      email: 'edge@test.com',
      age: '-5',
      password: 'password123',
      confirmPassword: 'password123'
    });

    await registrationPage.submit();

    await expect(await registrationPage.isErrorVisible()).toBeTruthy();
    await expect(await registrationPage.isSuccessVisible()).toBeFalsy();
  });
});
