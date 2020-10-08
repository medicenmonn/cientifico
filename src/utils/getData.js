const API = 'https://rickandmortyapi.com/api/character/'   //const para crear el valor de la api

// funcion get data, que llama la api y trae los datos para hacer render
const getData = async (id) => {
    const apiURL = id ? `${API}${id}` : API;  // si if existe, then retornar una estructura nueva que trae a api
    try {
        const response = await fetch(apiURL)
        const data = await response.json()
        return data;
    } catch (error) {
        console.log('Fetch Error', error)
    };
}

export default getData;