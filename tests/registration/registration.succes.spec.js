import { test, expect } from '@playwright/test';
import RegistrationPage from '../../pages/RegistrationPage';

test.describe('Registration Success Tests', () => {
  let registrationPage;

test.beforeEach(async ({ page }) => {
  registrationPage = new RegistrationPage(page);
});

  test('Successful registration with valid data', async () => {
    await registrationPage.fillForm({
      fullName: 'Lucas Escobio',
      email: 'lescobio@telecentro.net.ar',
      age: '28',
      password: 'lucas123',
      confirmPassword: 'lucas123'
    });

    await registrationPage.submit();

    await expect(await registrationPage.isSuccessVisible()).toBeTruthy();
    await expect(await registrationPage.isErrorVisible()).toBeFalsy();
  });
});
