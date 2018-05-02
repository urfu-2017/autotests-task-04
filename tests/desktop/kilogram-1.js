const assert = require('assert');
const PO = require('../../page-object');


describe('Проверка профиля в K1logram:', () => {
    const urlKilogram = 'https://kilogram-team2.now.sh/';

    beforeEach(() =>  {
        if (!(process.env.GH_LOGIN && process.env.GH_PWD)) {
            throw Error('В переменных окружения нет логина или пароля от Гитхаб')
        }
    });

    it.skip('должен успешно авторизоваться', async function () {

        const browser = this.browser;
        await browser.url(urlKilogram);
        await browser.waitForVisible(PO.github.login, 7000);
        await browser.setValue(PO.github.login, process.env.GH_LOGIN);
        await browser.setValue(PO.github.password, process.env.GH_PWD);
        await browser.click(PO.github.signInBtn);
        const actual = await browser.getUrl();

        assert.equal(actual, urlKilogram);
    });

    it('должен получить информацию профиля', async function () {
        const browser = this.browser;
        // Авторизация
        {
            await browser.url(urlKilogram);
            await browser.waitForVisible(PO.github.login, 7000);
            await browser.setValue(PO.github.login, process.env.GH_LOGIN);
            await browser.setValue(PO.github.password, process.env.GH_PWD);
            await browser.click(PO.github.signInBtn);
        }
        // Реавторизация, если слишком много запросов
        {
            const url = await browser.getUrl();
            if (url.startsWith('https://github.com/login/oauth/authorize?')) {
                await browser.waitForVisible(PO.github.reauthorization, 10000);
                await browser.click(PO.github.reauthorization);
            }
        }
        // Проверка логина
        {
            await browser.waitForVisible(PO.kilogram.nickname, 20000);
            setTimeout(() => { throw new Error('Слишком долго с помощью ajax не подгружается логин')}, 20000);
            let login = '@';
            while (login === '@') {
                login = await browser.getText(PO.kilogram.nickname);
            }
            assert.equal(`@${process.env.GH_LOGIN}`, login);
        }
    });
});
