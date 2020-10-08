const path = require('path'); //permite acceder hacia donde estoy en la carpeta o a donde me muevo
const HtmlWebpackPlugin = require('html-webpack-plugin'); // archivo mecesario par< trabajar con html

module.exports = { // aqui se encuentra toda la config de lo que va a suceder. Modulo para exportar
    entry: './src/index.js', //punto de entrada con su dirección. Aqui vive el cofdigo de desarrollo, de aqui a produccion
    output: {  // donde se envia el proyecto estructurado y compilado, ready para producción
        path: path.resolve(__dirname, 'dist'), //crearmos lugar donde se exportará el proyecto
        filename: 'main.js' //nombre del archivo final para produccion
    },
    resolve: {
        extensions: ['.js'],  //extension que vamos a utiliar
    },
    module: {  //crear un modulo con las reglas necesarias a utilizar
        rules: [ //reglas
            {
                test: /\.js?$/, //nos permite identificar los archivos con esa extension segun estén en el entorno
                exclude: /node_modules/, //excluimos la carpeta de node modules
                use: {
                    loader: 'babel-loader', //usar un loader con una config establecida
                }
            }
        ]
    },
    plugins: [  //establecemos los plugins que vamos a utilizar
        new HtmlWebpackPlugin([  //allow trabajar con los archivos html
            {
                inject: true, // como vamos a inyectar un valor a un archivo html
                template: './public/index.html',  // doreccion donde se encuentra el template principal
                filename: './index.html'  // el nombre que tendrá el archivo
            }
        ])
    ]
}
