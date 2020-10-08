/** generar una funcion que se encargue de obtener el hash --> cuando nos movamos
 * a un personaje, manipulamos y obtenemos el id de cada uno*/
const getHash = () => 
location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';  //cuando retornamos olo un elem no es necesario usar brackets
                                            // slice elimina el 1er elem que es el #
                                            // split de ese string lo convertimos a un arreglo, elimina los slash
export default getHash;