const assert = require('assert');
const PO = require('../../page-object');

describe('Проверка профиля в K1logram:', () => {
    it('должен получить информацию профиля', async function () {
        const browser = this.browser;
        const url = 'https://team7chat.now.sh/';

        await browser.url(url);

        const CurrentUrl = await browser.getUrl();
        if (CurrentUrl.startsWith('https://github.com/')) {
            await browser.waitForVisible(PO.kilogram.button, 5000);
            await browser.click(PO.kilogram.button);
        }

        await browser.click(PO.kilogram.showProfile);

        const nickname = await browser.getText(PO.kilogram.nickname);
        assert(nickname === process.env.GH_LOGIN);
    });
});
