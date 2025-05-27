import { test, expect } from '@playwright/test';
import HomePage from './pages/HomePage';
import SignUpLoginPage from './pages/SignUpLoginPage';
import SignUpPage from './pages/SignUpPage';

import Utils from './commons/Utils';

let homepage: HomePage;
let signUpLoginPage: SignUpLoginPage
let signUpPage: SignUpPage

let utils: Utils

//hook
test.beforeEach(async ({page})=>{
  homepage = new HomePage(page)
  signUpLoginPage = new SignUpLoginPage(page)

  utils=new Utils (page)
   
  await homepage.visit()
  await homepage.goToLoginAndSignUpPage();

})

test('CP1-Registro de usuario', async ({ page }) => {

  await expect(homepage.signUpHeader).toBeVisible()
  await signUpLoginPage.signNameInput.fill('Aurad')
  const randomNumber = Math.floor(Math.random() * (999 - 999999) + 10000);
  await signUpLoginPage.signEmailAdressInput.fill('aura' + randomNumber + '@prueba.com')
  await signUpLoginPage.signButton.click()
  await expect(page.getByText('Enter Account Information')).toBeVisible()

  await expect(page.getByText('Account Created!')).toBeVisible();

  await expect(page.getByText('Logged in as Aurad')).toBeVisible();
  await homepage.deleteAccountButton.click();

  await page.waitForLoadState();
  expect(page.url()).toBe('https://www.automationexercise.com/')
});

test('CP2-Inicio de sesion con datos correctos', async ({ page }) => {
  //Ir a la pagina principal
  await signUpLoginPage.login("aurams@prueba.com", "123")
  await homepage.checkUsername('Aura')
});

test('CP3-Inicio de sesion con datos Incorrectos', async ({ page }) => {
  await signUpLoginPage.checkLoginHeader();
  await signUpLoginPage.login("ahhh@prueba.com", "123")
  await utils.checkTextIsVisible('Your email or password is incorrect!')
});

test('CP4-Cerrar Session de usuario', async ({ page }) => {
  await signUpLoginPage.login("aurams@prueba.com", "123")
  await homepage.checkUsername('Aura')
  await homepage.logout()
  await utils.checkUrlContains('/login')

  // await page.waitForTimeout(3000);
});

test('CP5-Registro usuario con correo ya existente', async ({ page }) => {
  await signUpLoginPage.signUp('Aurad','aurams@prueba.com')
  await utils.checkTextIsVisible('Email Address already exist!')
  


});




