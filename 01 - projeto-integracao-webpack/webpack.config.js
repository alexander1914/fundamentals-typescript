//Para instalar o web é necessário fazer via npm
//Configuração para o webpack

const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
    mode: 'production',
    entry: './src/main.ts',
    devServer: {
        conteBase: path.join(__dirname, 'dist'),
        port: 9000,
        hot: true
    },
    output: {
        filename: 'app.min.js',
        path: path.join(__dirname, 'dist')
    },
    plugins: [
        new CopyPlugin([
            { from: 'public', to: 'bla' }
        ])
    ],
    resolve: {
        extensions: [ '.ts', '.js']
    },
    module: {
        rules: [{
            test: /\.ts$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    }
}