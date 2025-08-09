let offset = 0
let limit = 5;

const pokeapi = {}


function convertPokemon(detalhes) {
    const pokemon = new Pokemon();

    pokemon.nome = detalhes.name;
    pokemon.ordem = detalhes.id;
    pokemon.tipos = detalhes.types.map((tipos) => {
        return tipos.type.name
    })
    pokemon.imagem = detalhes.sprites.other.dream_world.front_default;

    return pokemon;
}

function converterPokemonPrincipal(pokemon) {
    const pokemonPrincipal = new PokemonPrincipal();

    pokemonPrincipal.imagem = pokemon.sprites.other.dream_world.front_default;
    pokemonPrincipal.nome = pokemon.name;
    pokemonPrincipal.ordem = pokemon.id;
    pokemonPrincipal.tipos = pokemon.types.map((tipo) => {
        return tipo.type.name;
    })


    // console.log(PokemonPrincipal.tipos)
    return pokemonPrincipal
}


pokeapi.getPokemon = (async (offset, limit) => {

    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`

    try {
        const resposta = await fetch(url)
        const primeiraCamada = await resposta.json()
        // console.log(primeiraCamada)
        const details = await Promise.all(
            primeiraCamada.results.map(async (resposta) => {
                const detalhes = await fetch(resposta.url)
                const json = await detalhes.json()
                return json
            })
        )
        // console.log(details)
        const pokemons = details.map((detalhes) => {
            return convertPokemon(detalhes);
        })

        return pokemons

    } catch (error) {

    }

})

pokeapi.getPokemonName = (async (name) => {

    const urlPokemon = `https://pokeapi.co/api/v2/pokemon/${name}/`

    try {
        const pokemon = await fetch(urlPokemon)
        const json = await pokemon.json()
        const convertPokemon = converterPokemonPrincipal(json);
        return convertPokemon;
        // console.log(convertPokemon)

    } catch (error) {
        console.error(error);
    }

})

// pokeapi.getPokemonName();
