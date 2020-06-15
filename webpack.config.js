const webpack = require('webpack');
const path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    resolve: {
        alias: {
            '@components': path.resolve(__dirname, './src/components'),
            '@styles': path.resolve(__dirname, './src/styles'),
            types: path.resolve(__dirname, './@types'),
        },
    },
    plugins: [
        new webpack.ProvidePlugin({
            _: 'lodash',
        }),
    ],
};
