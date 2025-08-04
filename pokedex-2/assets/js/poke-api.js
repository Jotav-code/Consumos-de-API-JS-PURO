let offset = 0
let limit = 5;
const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`
const pokeapi = {}


function convertPokemon(detalhes){
    const pokemon = new Pokemon();

    pokemon.nome = detalhes.name;
    pokemon.ordem = detalhes.id;
    pokemon.tipos = detalhes.types.map((tipos)=>{
        return  tipos.type.name
    })
    pokemon.imagem = detalhes.sprites.other.dream_world.front_default;

    return pokemon;
}
 

pokeapi.getPokemon = (async (offset = 0, limit = 5)=>{

    
    try {
        const resposta = await fetch(url)
        const primeiraCamada = await resposta.json()
        // console.log(primeiraCamada)
        const details = await Promise.all(
            primeiraCamada.results.map(async (resposta)=>{
                const detalhes =  await fetch(resposta.url)
                const json = await detalhes.json()
                return json
            })
        )
        // console.log(details)
        const pokemons = details.map((detalhes)=>{
            return convertPokemon(detalhes);
        })
        
        return pokemons
        
    } catch (error) {
        
    }

})

pokeapi.getPokemonId = (async (id) => {
    
})
