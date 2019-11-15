const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const VueLoaderPlugin = require("vue-loader/lib/plugin")
const StyleLintPlugin = require("stylelint-webpack-plugin")
const SpritesmithPlugin = require("webpack-spritesmith")

module.exports = {
    entry: {
        app: "./src/app.js"
    },
    output:{
        filename: "[name].js",
        path: path.resolve(__dirname,'dist')
    },
    devtool: 'eval-source-map',
    devServer:{
        contentBase: path.join(__dirname,"dist"),
        port: 5000,
        proxy:{
            "/api":"http://localhost:8081"
        },
        hot: true,

    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use:["style-loader","css-loader"]
            },
            {
                test: /\.scss/,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options:{
                            plugins:[require('postcss-preset-env')()]
                        }
                    },
                    "sass-loader"
                ]
            },
            {
                test:/\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use:[
                    {
                        loader: "url-loader",
                        options:{
                            limit:8092,
                            name:"img/[hash:7].[ext]"
                        }
                    }
                ]
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 8092,
                            name: "media/[hash:7].[ext]"
                        }
                    }
                ]
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 8092,
                            name: "font/[hash:7].[ext]"
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test:/\.vue$/,
                loader: "vue-loader"
            },
            {
                test:/\.(js|vue)$/,
                exclude: /node_modules/,
                enforce: "pre",
                options: {
                    formatter: require("eslint-friendly-formatter")
                }, 
                loader: "eslint-loader"
            }
        ]
    },
    resolve:{
        modules: ["node_modules","assets/generated"]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './public/index.html',
            title: "项目模板"
        }),
        // 它的作用是将其它规则复制并应用到 .vue 文件里相应语言的块中。例如，如果我们有一条匹配 /.js\$/ 的规则，那么它会应用到 .vue 文件里的 <script> 块。
        new VueLoaderPlugin(),
        new StyleLintPlugin({
            files: ["src/**/*.{vue,css,scss,sass}"]
        }),
        new SpritesmithPlugin({
            src:{

            },
            target:{

            },
            apiOptions:{
                
            }
        })
    ],

}