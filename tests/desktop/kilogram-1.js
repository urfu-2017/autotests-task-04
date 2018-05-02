const assert = require('assert');

describe('Проверка профиля в K1logram:', () => {
    it('должен получить информацию профиля', async function () {
        const browser = this.browser;

        await browser.url('https://k1logram.now.sh');
        await browser.waitForVisible('.loader-page__spinner', 5000, true);
        await browser.click('.login-page__button');
        const pageUrl = await browser.getUrl();
        if (pageUrl.indexOf('https://github.com/login/oauth/authorize') + 1) {
            await browser.waitForEnabled('#js-oauth-authorize-btn', 3000, true);
            await browser.click('#js-oauth-authorize-btn');
        }
        await browser.waitForVisible('.loader-page__spinner', 5000, true);
        await browser.click('.hamburger__box');
        await browser.click('.menu .menu__item:nth-child(2)');

        const actualNickname = await browser.getText('.profile__username');
        assert.equal(actualNickname, '@' + process.env.GH_LOGIN.toLowerCase());
    });
});
