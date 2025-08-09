const interacao = {}
const prev = document.getElementById('prev');
const next = document.getElementById('next');
let ofset = 0;
const LIMIT = 5;
const maxPokemon = 151;
let operacao = 0;





let pokeButton = [];



interacao.getList = (() => {
  document.addEventListener('pokemonsCarregados', () => {

    pokeButton = document.querySelectorAll('.pokemons');

    pokeButton.forEach((button) => {
      button.addEventListener('click', () => {
        const nome = button.querySelector('h2').textContent
        exibirPokemonPrincipal(nome);
      })
    })
  })
})
interacao.getList();


prev.addEventListener('click', () => {
  operacao -= LIMIT;
  if (operacao < 0) {
    operacao = 0;
  }
  ExibirPokemons(operacao, LIMIT);
});

next.addEventListener('click', () => {
  operacao += LIMIT;
  console.log(operacao)
  if (operacao > maxPokemon - LIMIT) {
    operacao = maxPokemon - LIMIT;
    console.log(operacao)
  }
  ExibirPokemons(operacao, LIMIT);
});

