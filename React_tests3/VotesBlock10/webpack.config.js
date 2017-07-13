module.exports = { 
    entry: "./js/app.js", // основной файл приложения
    output:{ 
        path: "D:\\WORK\\Курсы\\FD3-prepare\\React_tests3\\VotesBlock10", // путь к каталогу выходных файлов
        filename: "bundle.js"  // название создаваемого файла 
    }, 
    resolve:{    
        extensions: [".js", ".jsx"] // расширения модулей
    }, 
    module:{ 
        loaders:[   //загрузчики 
            { 
                test: /\.jsx?$/, // какие файлы обрабатывать
                exclude: /(node_modules)/, // какие файлы пропускать
                loader: ["babel‐loader"], 
                query:{ 
                    presets:["es2015", "react"] 
                } 
            } 
        ] 
    } 
}