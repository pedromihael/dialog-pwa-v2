const withImages = require('next-images')
const withCSS = require('@zeit/next-css')

module.exports = withImages({
    esModule: true
})

module.exports = withCSS()
