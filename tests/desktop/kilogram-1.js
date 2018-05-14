const assert = require('assert');
const PO = require('../../page-object');
const profile = require('../../profile');

describe('Проверка профиля в K1logram:', () => {
    it('должен получить информацию профиля', async function () {
        const browser = this.browser;
		const onLoginPage = () => {
			return browser.getUrl().includes('login?');
		};
		const onOauthPage = () => {
			return browser.getUrl().includes('oauth');
		};

        await browser.url('https://k1logram.now.sh/');
		await browser.waitForVisible(PO.kilogram.loader, 5000, true);
		await browser.click(PO.kilogram.login);
		browser.waitUntil(function () {
            return onLoginPage() || onOauthPage();
		});
		if (onLoginPage()) {
			await browser.setValue(PO.github.login, process.env.GH_LOGIN);
            await browser.setValue(PO.github.password, process.env.GH_PWD);
            await browser.click(PO.github.signInBtn);
		}
		await browser.waitForVisible(PO.github.grantAccessButtonDisabled, 5000, true);
		await browser.pause(2000);
		
		const currentUrl = await browser.getUrl();
		if (currentUrl.includes('github')) {
		    await browser.click(PO.github.grantAccessButton);
		    browser.waitUntil(function () {
                return browser.getUrl().includes('k1logram.now.sh');
		    });
		}
		
		await browser.waitForVisible(PO.kilogram.loader, 5000, true);
		await browser.click(PO.kilogram.menu);
		await browser.click(PO.kilogram.profileItem);
		const login = await browser.getText(PO.kilogram.loginBlock);
		const name = await browser.getValue(PO.kilogram.nameBlock);
		
		assert.equal(login, '@' + process.env.GH_LOGIN);
		assert.equal(name, profile.name);
    });
});
