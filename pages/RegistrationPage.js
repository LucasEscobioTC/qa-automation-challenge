class RegistrationPage {
  constructor(page) {
    this.page = page;

    this.nameInput = page.getByRole('textbox', { name: 'Nombre Completo' });
    this.emailInput = page.getByRole('textbox', { name: 'Email' });
    this.ageInput = page.getByRole('textbox', { name: 'Edad' });
    this.passwordInput = page.getByRole('textbox', { name: 'Contraseña' });
    this.confirmPasswordInput = page.getByRole('textbox', { name: 'Confirmar Contraseña' });

    this.submitButton = page.locator('button[type="submit"]');
  }

  async fillForm(data) {
    if (data.fullName) {
      await this.nameInput.fill(data.fullName);
    }

    if (data.email) {
      await this.emailInput.fill(data.email);
    }

    if (data.age) {
      await this.ageInput.fill(data.age);
    }

    if (data.password) {
      await this.passwordInput.fill(data.password);
    }

    if (data.confirmPassword) {
      await this.confirmPasswordInput.fill(data.confirmPassword);
    }
  }

  async submit() {
    await this.submitButton.click();
  }

  async isErrorVisible() {
    return await this.page.getByRole('alert').isVisible();
  }

  async isSuccessVisible() {
    return await this.page.getByRole('status').isVisible();
  }
}

export default RegistrationPage;