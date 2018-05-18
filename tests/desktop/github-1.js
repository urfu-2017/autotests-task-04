'use strict';

const assert = require('assert');

const GithubPO = require('../../page-object/github');

describe('Проверка авторизации на Github:', () => {
    it('должен успешно авторизоваться', async function() {
        const githubPO = new GithubPO(this.browser);

        await githubPO.goToLoginPage();
        await githubPO.signIn();

        const actual = await githubPO.getCurrentUrl();
        const expected = githubPO.homePageUrl;

        assert.equal(actual, expected);
    });
});
