const assert = require('assert');
const PO = require('../../page-object');

describe('Проверка профиля в Kilogram:', () => {
    it('должен получить информацию профиля', async function () {
        const browser = this.browser;

        await browser.url('https://k1logram.now.sh');
        await browser.waitForVisible(PO.kilogram.loader, 5000, true);
        await browser.click(PO.kilogram.loginButton);
        const pageUrl = await browser.getUrl();
        if (pageUrl.includes('github.com/login/oauth/authorize')) {
            await browser.waitForEnabled(PO.github.oauthAuthorizeBtn, 3000, true);
            await browser.click(PO.github.oauthAuthorizeBtn);
        }
        else if (pageUrl.includes('github.com/login')) {
            await browser.setValue(PO.github.login, process.env.GH_LOGIN);
            await browser.setValue(PO.github.password, process.env.GH_PWD);
            await browser.click(PO.github.signInBtn);
        }
        await browser.waitForVisible(PO.kilogram.loader, 5000, true);
        await browser.click(PO.kilogram.menuButton);
        await browser.click(PO.kilogram.profileInfo);

        const actualNickname = await browser.getText(PO.kilogram.profileLogin);
        assert.equal(actualNickname, '@' + process.env.GH_LOGIN.toLowerCase());
    });
});
