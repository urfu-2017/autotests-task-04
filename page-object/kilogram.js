'use strict';

const PageObject = require('.');

const selectors = {
    hamburger: '.hamburger',
    profileItem: '//*[text() = "Профиль"]',
    username: '.profile__username'
};

class Kilogram extends PageObject {
    constructor(browser) {
        super(browser, 'https://k1logram.now.sh');
    }

    async goToAuthPage() {
        await this.goTo('auth')
    }

    async openProfile() {
        await this.browser.waitForExist(selectors.hamburger, 2000);
        await this.browser.click(selectors.hamburger);
        await this.browser.click(selectors.profileItem);
    }

    async getProfileUsername() {
        const username = await this.browser.getText(selectors.username);

        return username.slice(1);
    }
}

module.exports = Kilogram;
