export const pokeApi = {}

pokeApi.convertListPokemon = (pokemonDetails) => {
    
    const pokemon = new Pokemon();

    pokemon.name = pokemonDetails.name;
    pokemon.order = pokemonDetails.id;
    pokemon.photo = pokemonDetails.sprites.other.dream_world.front_default;
    pokemon.photo = pokemonDetails.sprites.other.dream_world.front_default;
    pokemon.types = pokemonDetails.types.map((typeSlot) => typeSlot.type.name);
    const [type] = pokemonDetails.types.map((typeSlot) => typeSlot.type.name);
    pokemon.type = type;

    return pokemon;
}

pokeApi.getPokemon = (pokemonDetails) =>{

    return fetch(pokemonDetails.url)
        .then((poke)=> poke.json())
        .then((pokemonComDetalhes)=> pokeApi.convertListPokemon(pokemonComDetalhes))
}


pokeApi.listPoke = (offseat = 0, limit= 5)=>{

    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offseat}&limit=${limit}`;

    return fetch(url)
    .then((ResponseUrl) => ResponseUrl.json())
    .then((ResponseJson) => ResponseJson.results)
    .then((pokemonDetails)=> pokemonDetails.map((x)=> pokeApi.getPokemon(x)))
    .then((pokePromisse)=> Promise.all(pokePromisse))
    .catch((error)=> console.error(error))
    
}































// pokeApi.listPoke = (offseat = 0, limit = 10)=>{

//     const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offseat}&limit=${limit}`;

//     return fetch(url)
//     .then((ResponseUrl) => ResponseUrl.json())
//     .then((ResponseJson) => ResponseJson.results)
//     .then((ResponseUrlDetails) => {
//            return Promise.all(
//                 ResponseUrlDetails.map((ResponseUrlDetails) => fetch(ResponseUrlDetails.url)
//                 .then((ReponseJsonDetails)=> ReponseJsonDetails.json()))
//             )
        
//     })
//     .catch((error)=> console.error(error))
    
// }



























































// export const pokeApi = {};

// pokeApi.listPoke = (offseat = 0, limit = 5)=>{
//     const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offseat}&limit=${limit}`;

//     return fetch(url)
//         .then((Response) => Response.json())
//         .then((JsonBody) => JsonBody.results)
//         .then((pokeUrl) => pokeUrl.map( (pokeUrl) => {
//             return fetch(pokeUrl.url).then((response)=> response.json())
//         }))
//         .then((Details)=> Promise.all(Details))
//         .then((pokemonDetails)=> console.log(pokemonDetails))
// }

