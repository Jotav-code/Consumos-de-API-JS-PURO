import { pokeApi } from "./poke-api.js";

// const pokemonTypesToLi = (poke)=>{
//     return poke.map((typos) => `<li class="type">${typos.type.name}</li>`)
// }
let offseat = 0
const limit = 5
const loadMoreItens = document.getElementById('loadMoreButton')
const maxPage = 151;

const pokemonList = document.getElementById('pokemonList')


function displayPokemonToHtml(pokemon){
    return `<li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.order}</span>
                <span class="name">${pokemon.name}</span>
                
                <div class="datail">
                    <ol class="types">
                       ${pokemon.types.map((typos) => `<li class="type ${typos}">${typos}</li>`).join('')}
                    </ol>
                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                </div>
            </li>`
}

// pokeApi.listPoke().then((pokemonLista = []) =>{

//     pokemonList.innerHTML = pokemonLista.map((pokemon)=> displayPokemonToHtml(pokemon)).join('')
// })

console.log(pokemonList)

function loadItens(offseat, limit){

        pokeApi.listPoke(offseat,limit).then((pokemonLista = []) => {

            console.log(offseat + ' ' + limit);
            pokemonList.innerHTML +=pokemonLista.map((pokemon) => displayPokemonToHtml(pokemon)).join('');

            // pokemonList.innerHTML +=newHtml;

            console.log(pokemonList)
    });
}


loadItens(offseat,limit)



// loadMoreItens.addEventListener('click', ()=>{
//     offseat += limit;
//     const qtPages = offseat + limit;

//     if(qtPages >= maxPage){
//         let newLimit = maxPage - offseat;
//             loadItens(offseat,newLimit)

//         loadMoreItens.parentElement.removeChild(loadMoreItens)

//     }
//     else{

//         loadItens(offseat,limit)
//     }

    
    
// })





















// pokeApi.listPoke().then((pokemonResults = []) =>{
    
//     pokemonList.innerHTML = pokemonResults.map(displayPokemonToHtml).join('')    
    
    
    
    // const novaLista = pokemonResults.map((pokemon)=> displayPokemonToHtml(pokemon));
    
    // const newHtml = novaLista.join('')

    // pokemonList.innerHTML += newHtml;
    
    
    // const listaPokemon = [];
    
    // for (let i = 0; i < pokemonResults.length; i++) {
    //     listaPokemon.push(pokemonResults[i]);
    //     pokemonList.innerHTML += `${(displayPokemonToHtml(pokemonResults[i]))}`;
    // }
// })

