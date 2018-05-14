const assert = require('assert');
const PO = require('../../page-object');
const profile = require('../../profile');

describe('Проверка авторизации на Github:', () => {
    beforeEach(() =>  {
        if (!(process.env.GH_LOGIN && process.env.GH_PWD)) {
            throw Error('В переменных окружения нет логина или пароля от Гитхаб')
        }
    });

    it('должен успешно авторизоваться', async function() {
        const browser = this.browser;

        await browser.url('https://github.com/login');
        await browser.setValue(PO.github.login, process.env.GH_LOGIN);
        await browser.setValue(PO.github.password, process.env.GH_PWD);
        await browser.click(PO.github.signInBtn);

        const actual = await browser.getUrl();

        assert.equal(actual, 'https://github.com/');
		
		await browser.url('https://github.com/' + process.env.GH_LOGIN);
		const name = await browser.getText(PO.github.profileName);
		profile.name = name;
    });
});
