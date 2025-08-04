const listaDePokemons = document.getElementById('lista-de-pokemons');
const displayPokemon = document.querySelector('.main')


function convertPrincipal(pokemon) {
    return `
        <div class="content-main">
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="">

                    <div class="especificacoes">
                        <h2 class="nome">bulbasaur</h2>
                        <span>Tipos </span>
                        <ol class="tipos">
                            <li>grass</li>
                            <li>poison</li>
                        </ol>
                    </div>
        </div>
        
    `

    return `
        <img src="${pokemon.imagem}" alt="">

                <div class="especificacoes">
                    <h2 class="${pokemon.nome}">${pokemon.nome}</h2>
                    <span>Tipos </span>
                    <ol class="tipos">
                        ${pokemon.tipos.map((x)=>{
                            return `<li>${x}</li>`
                        })}
                
                    </ol>
                </div>
        
    `
}


function convertLi(pokemon){
    return ` 
                <li class="pokemons" id="${pokemon.ordem}">
                    <div class="content">
                        <h2 class="nome">${pokemon.nome}</h2>
                        <span class="${pokemon.ordem}">#${pokemon.ordem}</span>
                    </div>
                    <img src="${pokemon.imagem}" alt="${pokemon.nome}">
                </li> 
            `
}

async function exibirPokemonPrincipal(id) {

    const dados = await pokeapi.getPokemonPrincipal(id)
    
}
async function ExibirPokemons (offset,limit){
    
    const dados =  await pokeapi.getPokemon(offset, limit);
    console.log(dados)
    const pokemons = dados.map((detalhes)=>{
       return convertLi(detalhes) 
    })
    const pokemonPrincipal = dados.map((detalhes)=>{
        return convertPrincipal(detalhes)
    })

    console.log(pokemons)
    listaDePokemons.innerHTML += pokemons.join('');
    displayPokemon.innerHTML = pokemonPrincipal.join('');
}
ExibirPokemons(0,5)