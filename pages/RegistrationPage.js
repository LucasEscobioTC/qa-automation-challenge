class RegistrationPage {
  constructor(page) {
    this.page = page;
    this.nameInput = page.getByRole('textbox', { name: 'Nombre Completo' });
    this.emailInput = page.getByRole('textbox', { name: 'Email' });
    this.ageInput = page.getByRole('spinbutton', { name: 'Edad' }); // number
    this.passwordInput = page.getByLabel('Contraseña', { exact: true });
    this.confirmPasswordInput = page.getByLabel('Confirmar Contraseña', { exact: true });
    this.submitButton = page.getByRole('button', { name: 'Registrarse' });
    this.errorMessage = page.getByRole('alert');
    this.successMessage = page.getByRole('status');
  }

  async fillForm(data) {
    if (data.fullName !== undefined) {
      await this.nameInput.fill(data.fullName);
    }

    if (data.email !== undefined) {
      await this.emailInput.fill(data.email);
    }

    if (data.age !== undefined) {
      await this.ageInput.fill(String(data.age));
    }

    if (data.password !== undefined) {
      await this.passwordInput.fill(data.password);
    }

    if (data.confirmPassword !== undefined) {
      await this.confirmPasswordInput.fill(data.confirmPassword);
    }
  }

  async submit() {
    await this.submitButton.click();
  }

  async isErrorVisible() {
    return await this.errorMessage.isVisible();
  }

  async isSuccessVisible() {
    return await this.successMessage.isVisible();
  }
}

export default RegistrationPage;
