/**importar los templates y pags que creamos y crear el manejo de rutas
  y generamos el manejo de rutas y como les vamos  hacer rende ren la app**/
  
import Header from '../templates/Header';   //se puede no poner la extension, en la funcion se da por entendido
import Home from '../pages/Home';           // js lo identifica por medio de babel
import Character from '../pages/Character';
import Error404 from '../pages/Error404';

/** crear las rutas que vamos a manejar **/

// generamos un objeto y dentro establecemos las rutas y de que van a hacer render
const routes = {
    '/': Home,  // la primera es el path inicial / y hace render de Home
    '/:id': Character, //se establece asi porque el id va a ser un valor dinamico, segun regrese la ruta
    '/contact': 'Contact',  //seccion que llamaremos contact
}


/** creamos el manejador ROUTER ---> empuja el header a  mi app
 * que se encarga de mostrar los elem segun la logica que vamos a establecer */

 const router = async () => {   // async pq queremos esperar a que algo suceda para seguir con nuestro bloque
   const header = null || document.getElementById('header')  //busca el id header
   const content = null || document.getElementById('content')  //tenemos 2 elem hacia donde puedo hacer render

   header.innerHTML = await Header();  //para ver que vfunciona, envia el template de header a la vista previa de html
 }

 export default router;