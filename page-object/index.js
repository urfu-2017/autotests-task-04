'use strict';

class PageObject {
    constructor(browser, homePageUrl) {
        this.browser = browser;
        this.homePageUrl = homePageUrl;
    }

    async goTo(pagePath) {
        await this.browser.url(`${this.homePageUrl}/${pagePath}`);
    }

    async getCurrentUrl() {
        const url = await this.browser.getUrl();

        return url.replace(/\/$/, '');
    }
}

module.exports = PageObject;
