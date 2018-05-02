const assert = require('assert');
const PO = require('../../page-object');

describe('Проверка чата:', () => {
    it('логин в чате должен быть таким же, как и в гитхабе', async function () {
        const browser = this.browser;
        await browser.url('https://k1logram.now.sh');
        await browser.waitForVisible(PO.kilogram.loader, 5000, true);
        await browser.click(PO.kilogram.login_button);
        await browser.waitForVisible(PO.kilogram.loader, 5000, true);
        await browser.click(PO.kilogram.menu);
        await browser.click(PO.kilogram.profile);
        const actual = await browser.getText(PO.kilogram.name);
        assert.equal(actual, "@"+process.env.GH_LOGIN);
    });
});
