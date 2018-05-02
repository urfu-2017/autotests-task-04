const assert = require('assert');
const PO = require('../../page-object');
// require('dotenv').config();

describe('Проверка профиля в K1logram:', () => {
    it('должен получить информацию профиля', async function () {
        const browser = this.browser;
        const URL = 'https://team7chat.now.sh/';

        await browser.url(URL);

        const CurrentUrl = await browser.getUrl();
        if (CurrentUrl.startsWith('https://github.com/')) {
            await browser.waitForVisible(PO.kilogram.idStrangeButton, 10000);
            await browser.click(PO.kilogram.idStrangeButton);
        }

        await browser.click(PO.kilogram.showProfileClick);

        const name = await browser.getText(PO.kilogram.nickname);
        assert(name === process.env.GH_LOGIN);
    });
});
