const path = require('path')

module.exports = {
    mode: 'development',
    entry: './Registration/index.js',
    output: {
        path: path.resolve(__dirname, 'login'),
        filename: 'bundle.js'
    },
    watch: true
}