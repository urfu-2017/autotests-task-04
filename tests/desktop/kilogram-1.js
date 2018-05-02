const assert = require('assert');
const PO = require('../../page-object');

describe('Проверка профиля в K1logram:', () => {
    it('должен получить информацию профиля', async function() {
        const browser = this.browser;

        await browser.url('https://team3.now.sh/');
        await browser.click(PO.kilogram.signInBtn);
        await browser.click(PO.kilogram.profileBtn);

        const actual = await browser.getText(PO.kilogram.profileNickname);

        assert.equal(actual.toLowerCase(), process.env.GH_LOGIN.toLowerCase());
    });
});
