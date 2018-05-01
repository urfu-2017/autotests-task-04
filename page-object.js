// Здесь опиши используемые селекторы

const buildUrl = (baseUrl, path) => `${baseUrl}/${path}/`.replace(/\/+$/, '/')

module.exports = {
    github: {
        baseUrl: 'https://github.com',
        login: '#login_field',
        password: '#password',
        signInBtn: '[name=commit]',

        getRelativeUrl (path) {
            return buildUrl(this.baseUrl, path)
        },

        get homeUrl () {
            return this.getRelativeUrl('')
        },

        get loginUrl () {
            return this.getRelativeUrl('login')
        }
    },

    kilogram: {
        baseUrl: 'https://team3.now.sh',
        profileNickname: '.profile__nickname',

        getRelativeUrl (path) {
            return buildUrl(this.baseUrl, path)
        },

        get loginUrl () {
            return this.getRelativeUrl('login')
        },

        get profileUrl () {
            return this.getRelativeUrl('profile')
        }
    }
}
