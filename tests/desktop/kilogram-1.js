const assert = require('assert');
const PO = require('../../page-object');

describe('Проверка профиля в K1logram:', () => {
    it('должен получить информацию профиля', async function () {
        const browser = this.browser;

        await browser.url(PO.kilogram.url);

        await browser.click(PO.kilogram.signInBtn);

        const url = await browser.getUrl();
        if (url.includes(PO.github.loginUrl)) {
            await browser.setValue(PO.github.login, process.env.GH_LOGIN);
            await browser.setValue(PO.github.password, process.env.GH_PWD);
            await browser.click(PO.github.signInBtn);
        }
        if (url.includes(PO.github.loginOAuthUrl)) 
            await browser.click(PO.github.loginOAuthUrl);

        await browser.click(PO.kilogram.profile);
        const loginAndLink = await browser.getText(PO.kilogram.username);
        const actual = loginAndLink[0];

        assert.equal(actual, process.env.GH_LOGIN);
    });
});
