const listaDePokemons = document.getElementById('lista-de-pokemons');
const displayPokemon = document.querySelector('.main')


function convertPrincipal(pokemon) {
    return `
        <div class="content-main">
                        <img src="${pokemon.imagem}" alt="">

                    <div class="especificacoes">
                        <h2 class="nome">${pokemon.nome}</h2>
                        <span>Tipos </span>
                        <ol class="tipos">
                            ${pokemon.tipos.map((tipo)=>{
                                return `<li>${tipo.join('')}</li>`
                            })}
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

async function ExibirPokemons (offset,limit){
    
    const dados =  await pokeapi.getPokemon(offset, limit);
    // console.log(dados)
    const pokemons = dados.map((detalhes)=>{
       return convertLi(detalhes) 
    })

    // console.log(pokemons)
    listaDePokemons.innerHTML += pokemons.join('');
    // displayPokemon.innerHTML = pokemonPrincipal.join('');
}
ExibirPokemons(0,5)



async function exibirPokemonPrincipal(name) {
    
    const dados = await pokeapi.getPokemonName(name);
    
    const display = convertPrincipal(dados)
    

    displayPokemon.innerHTML = display;
    
}

exibirPokemonPrincipal("venusaur")