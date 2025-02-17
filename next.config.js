const withNextra = require('nextra')('nextra-theme-blog', './theme.config.js')
module.exports = withNextra({
    webpack: (config, options) => {
        // KAITO: see https://webpack.js.org/guides/asset-modules/
        config.module.rules.push({
            test: /\.(mp4)$/i,
            type: 'asset/resource',
        })

        return config
    },
})
