'use strict';

class PageObject {
    constructor(browser, homePageUrl) {
        this.browser = browser;
        this.homePageUrl = homePageUrl;
    }

    async goTo(destinationUrl) {
        await this.browser.url(`${this.homePageUrl}/${destinationUrl}`);
    }

    async getCurrentUrl() {
        const url = await this.browser.getUrl();

        return url.replace(/\/$/, '');
    }
}

module.exports = PageObject;
