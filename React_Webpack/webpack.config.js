module.exports = {
    entry: "./test1/app/app.jsx", // входная точка ‐ исходный файл
    output: {
        path: "test1", // путь к каталогу выходных файлов ‐ папка public
        filename: "webpack-bundle.js" // название создаваемого файла
    },
    resolve: {
        extensions: ["", ".js", ".jsx"] // расширения для загрузки модулей
    },
    module: {
        loaders: [ //загрузчики
            {
                test: /\.jsx?$/, // определяем тип файлов
                exclude: /(node_modules)/,
                loader: ["babel-loader"],
                query: {
                    presets: ["es2015", "react"]
                }
            }
        ]
    }
}