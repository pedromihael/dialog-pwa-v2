const path = require('path')

module.exports = ({ config }) => {
    config.module.rules.push({
        test: /\.(ts|tsx)?$/,
        exclude: /node_modules/,
        include: [/stories/, /src/]
    })
    config.resolve.extensions.push('.ts', '.tsx')

    config.resolve.modules = [
        ...(config.resolve.modules || []),
        path.resolve('./')
    ]

    return config
}
