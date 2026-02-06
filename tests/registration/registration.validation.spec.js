import { test, expect } from '@playwright/test';
import RegistrationPage from '../../pages/RegistrationPage';

test.describe('Registration Validation Tests', () => {
  let registrationPage;

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000');
  registrationPage = new RegistrationPage(page);
});

  test('Should show error for invalid email', async () => {
    await registrationPage.fillForm({
      fullName: 'Juan Test',
      email: 'email-invalido',
      age: '30',
      password: 'password123',
      confirmPassword: 'password123'
    });

    await registrationPage.submit();

    await expect(await registrationPage.isErrorVisible()).toBeTruthy();
    await expect(await registrationPage.isSuccessVisible()).toBeFalsy();
  });

  test('Should show error when passwords do not match', async () => {
    await registrationPage.fillForm({
      fullName: 'Juan Test',
      email: 'juan@test.com',
      age: '30',
      password: 'password123',
      confirmPassword: 'password456'
    });

    await registrationPage.submit();

    await expect(await registrationPage.isErrorVisible()).toBeTruthy();
    await expect(await registrationPage.isSuccessVisible()).toBeFalsy();
  });
});
