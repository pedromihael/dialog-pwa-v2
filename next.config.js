const withImages = require('next-images')

module.exports = withImages({
    esModule: true
})

module.exports = {
    webpack: (config, { webpack }) => {
        config.plugins.push(
            new webpack.IgnorePlugin(
                /[^\/]+\/stor(?ies|ybook)\/?(?:[^\/]+\/?)*$/gm,
                /^[^\/]+\/tests\/?(?:[^\/]+\/?)*$/gm
            )
        )

        return config
    }
}
