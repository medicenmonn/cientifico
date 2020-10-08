import router from './routes/';

// window me permite saber si esta en el contexto de la app

window.addEventListener('load', router);  // add event escucha ri la carga de la pag ha sucedido, cuando esten listos y cargados se ejecuta el codigo
                                // se le pasa una funcion --> router

window.addEventListener('hashchange', router) //escucha las rutas / hash donde me estoy moviendo
                    // el 1er valor que escucha es hashchange