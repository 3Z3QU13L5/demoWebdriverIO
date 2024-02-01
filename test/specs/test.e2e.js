const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toContainEqual('You logged into a secure area!')
    })

    it('should logout from secure area', async () => {

        await SecurePage.logout()
        await expect(LoginPage.flashAlert).toBeExisting()
        await expect(LoginPage.flashAlert).toContainEqual('You logged out of the secure area!s')
    })

    it('should not login with invalid username credential', async () => {
        await LoginPage.open()

        await LoginPage.login('username', 'SuperSecretPassword!')
        await expect(LoginPage.flashAlert).toBeExisting()
        await expect(LoginPage.flashAlert).toContainEqual('Your username is invalid!')
    })

    it('should not login with invalid password credential', async () => {
        await LoginPage.open()

        await LoginPage.login('tomsmith', 'password!')
        await expect(LoginPage.flashAlert).toBeExisting()
        await expect(LoginPage.flashAlert).toContainEqual('Your password is invalid!')
    })

    it('should no access secure area without logging in', async () => {
        await SecurePage.open()

        await expect(LoginPage.flashAlert).toBeExisting()
        await expect(LoginPage.flashAlert).toContainEqual('You must login to view the secure area!')
    })
    
})


