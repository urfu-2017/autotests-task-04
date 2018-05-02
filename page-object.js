// Здесь опиши используемые селекторы

module.exports = {
    github: {
        login: '#login_field',
        password: '#password',
        profileName: '.p-name',
        signInBtn: '[name=commit]',
        grantAccessButtonDisabled: '#js-oauth-authorize-btn:disabled',
        grantAccessButton: '#js-oauth-authorize-btn',
    },
	kilogram: {
		login: '.login-page__button',
		loader: '.loader-page',
		menu: '.header__menu.hamburger',
		profileItem: 'span=Профиль',
		loginBlock: '.profile__username',
		nameBlock: '.profile__input[placeholder=Имя]'
	}
};
