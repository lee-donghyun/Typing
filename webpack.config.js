const path = require('path');
const RefreshWebPackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
// process.env.NODE_ENV='priduction' //배포할 때는 이것도 써줘야 함

module.exports = {
    name: 'typing-app',
    mode: 'development',//배포시 production,, development
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.jsx', '.css']// 이거를 쓰면 entry/app에서 확장자를 알아서 찾아줌
    },

    //제일 중요한거 두개!!
    entry: {///입력, 여기서는 자바스크립트 파일 두개를 받아서
        app: ['./client']//,'./WordReplay.jsx'], -> client에서 받아오기 때문에 wordreokay는 굳이 안넣어도 됨
    },

    module: {
        rules: [
            {
                test: /\.jsx?/,
                loader: 'babel-loader',
                options: {
                    presets:
                        [
                            "@babel/preset-env",
                            '@babel/preset-react'
                        ],
                    plugins: [
                        ['react-refresh/babel'],
                    ],
                },
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader'],
            },
        ],
    },
    plugins: [
        new RefreshWebPackPlugin(),
    ],
    output: {//출력, 하나의 자바스크립트 파일로 출력해줌
        path: path.join(__dirname, 'dist'),
        filename: 'app.js',
        publicPath: '/dist/',
    },
    devServer: {
        publicPath: '/dist/',
        hot: true,
    },
}

