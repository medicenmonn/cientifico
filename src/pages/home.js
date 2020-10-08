import getData from '../utils/getData'  //importar la funcion

const Home = async () => {  //funcion async
    const characters = await getData();  //espera hasta que get data retorne algo
    const view = `
    <div class="Characters">  
    ${characters.results.map(character => `  
    <article class="Character-item">
    <a href="#/${character.id}/">
      <img src="${character.image}" alt="${character.name}">
      <h2>${character.name}</h2>
    </a>
    </article>
    `).join('')}      
</div>
    `;              //el metodo map permite return un nuevo array con la estructura que le estoy pasando
    return view;     // itero cada personaje que recibo
}

export default Home;