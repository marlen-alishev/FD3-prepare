const path = require('path');

module.exports = { 
    entry: "./js/app.js", // основной файл приложения
    output:{ 
        path: __dirname, // путь к каталогу выходных файлов
        filename: "bundle.js"  // название создаваемого файла 
    }, 
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    module:{ 
        loaders:[   //загрузчики 
            { 
                test: /\.jsx?$/, // какие файлы обрабатывать
                exclude: /node_modules/, // какие файлы пропускать
                loader: "babel-loader"
            } 
        ] 
    } 
}