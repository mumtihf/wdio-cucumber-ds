import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import LoginPage from '../pageobjects/login.page.js';
import HomePage from '../pageobjects/home.page.js';
import CartPage from '../pageobjects/cart.page.js';

Given(/^user is on Login page$/, async () => {
    await LoginPage.open()
})

Then(/^user should be redirect to homepage$/, async () => {
    await HomePage.validateOnHomePage()
})

Then(/^user input "([^"]*)" as username$/, async (username) =>{
    await LoginPage.inputUsername(username)
})

Then(/^user input "([^"]*)" as password$/, async (password) =>{
    await LoginPage.inputPassword(password)
})

When(/^user click login button$/, async () => {
    await LoginPage.clickLoginBtn()
})

When(/^user add item to cart$/, async () => {
    await HomePage.addItemToCart()
})

Then(/^user should see error message$/, async () => {
    await LoginPage.validateWrongPassword()
})

Then(/^user should see item added to cart$/, async () => {
    await CartPage.validateSuccessAddItemToCart()
})