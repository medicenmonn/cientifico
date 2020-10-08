// funcion para saber que tipo de elem obtuvimos y hacia donde enviarlo
const resolveRoutes = (route) => {   //ruta obtenida ppr la func anterior
    if(route.length <= 3) {         // es un / , un id o una seccion
        let validRoute = route === '/' ? route : '/:id';
        return validRoute;
    }
    return `/${route}`
}

export default resolveRoutes;