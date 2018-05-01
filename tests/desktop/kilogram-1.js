const assert = require('assert')
const PO = require('../../page-object')

describe('Проверка профиля в K1logram:', () => {
    it('должен получить информацию профиля', async function () {
        const browser = this.browser

        await browser.url(PO.kilogram.loginUrl)
        await browser.url(PO.kilogram.profileUrl)

        await browser.waitForExist(PO.kilogram.profileNickname, 5000)

        const actual = await browser.getText(PO.kilogram.profileNickname)
        assert.equal(actual, process.env.GH_LOGIN)
    })
})
