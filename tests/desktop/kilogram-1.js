const assert = require('assert');
const PO = require('../../page-object');

describe('Проверка профиля в K1logram:', () => {
    it('должен получить информацию профиля', async function () {
        const browser = this.browser;
        const url = 'https://team7chat.now.sh/';
        await browser.url(url);
        await browser.setValue(PO.github.login, process.env.GH_LOGIN);
        await browser.setValue(PO.github.password, process.env.GH_PWD);
        await browser.click(PO.github.signInBtn);
        await browser.click(PO.kilogram.showProfile);
        const nickname = await browser.getText(PO.kilogram.nickname);
        assert(nickname === process.env.GH_LOGIN);
    });
});


