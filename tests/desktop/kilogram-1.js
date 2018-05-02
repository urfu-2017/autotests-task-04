const assert = require('assert');
const PO = require('../../page-object');

describe('Проверка профиля в K1logram:', () => {
    it('должен получить информацию профиля', async function () {
        const browser = this.browser;

        await browser.url('https://the-best-messenger.now.sh/');

        await browser.click(PO.kilogram.signInBtn);
        await browser.click(PO.kilogram.profile);
        const actual = await browser.getText(PO.kilogram.username);

        assert.equal(actual, process.env.GH_LOGIN);
    });
});
