'use strict';

const PageObject = require('.');

const selectors = {
    login: '#login_field',
    password: '#password',
    signInButton: '[name=commit]'
};

class Github extends PageObject {
    constructor(browser) {
        super(browser, 'https://github.com');
    }

    async goToLoginPage() {
        await this.goTo('login');
    }

    async signIn(login = process.env.GH_LOGIN, password = process.env.GH_PWD) {
        if (!login || !password) {
            throw Error('Login or password is empty.')
        }

        await this.browser.setValue(selectors.login, login);
        await this.browser.setValue(selectors.password, password);
        await this.browser.click(selectors.signInButton);
    }
}

module.exports = Github;
