module.exports = {
    sets: {
        desktop: {
            files: 'tests/desktop'
        }
    },

    browsers: {
        firefox: {
            desiredCapabilities: {
                browserName: 'firefox'
            }
        }
    },

    gridUrl: `http://${process.env.USERNAME}:${process.env.ACCESSKEY}@ondemand.saucelabs.com:80/wd/hub`
};
