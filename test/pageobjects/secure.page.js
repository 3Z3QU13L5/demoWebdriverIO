const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get flashAlert () { return $('#flash'); }
    get h2 () { return $('.example h2')}
    get logoutBtn() { return $(`.button`)}

    
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async logout () {
        await this.logoutBtn.waitForDisplayed()
        await this.logoutBtn.click();
    }
    
    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('secure');
    }
}

module.exports = new SecurePage();
