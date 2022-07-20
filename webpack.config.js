const path = require('path');
const { mainModule } = require('process');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'inline-source-map',
    output : {
       path: path.resolve(__dirname, 'dist'),
       filename: "main.js",
    },
}