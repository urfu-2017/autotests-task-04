'use strict';

const assert = require('assert');

const KilogramPO = require('../../page-object/kilogram');

describe('Проверка профиля в K1logram:', () => {
    it('должен получить информацию профиля', async function () {
        const kilogramPO = new KilogramPO(this.browser);

        await kilogramPO.goToAuthPage();
        await kilogramPO.openProfile();

        const expectedUsername = process.env.GH_LOGIN;
        const actualUsername = await kilogramPO.getProfileUsername();

        assert.equal(actualUsername, expectedUsername);
    });
});
