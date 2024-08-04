//definindo variaveis constante (apenas leitura)
//'query' serve para pegar os elementos definidos no html e alterar o conteudo deles
//assim retornando os valores da API que ultilizamos neste projeto (https://pokeapi.co/) 'pokemons'
const pokemonName = document.querySelector('.pokemon_name');
const pokemonNumber = document.querySelector('.pokemon_number');
const pokemonImage = document.querySelector('.pokemon_image');

const form = document.querySelector('.form');
const input = document.querySelector('.input_search');
const buttonPrev = document.querySelector('.btn-prev');
const buttonNext = document.querySelector('.btn-next');

//definindo uma variavel let 'limitada'
//quando abrir a pokedex o pokemon que vai aparecer é o numero 1
let searchPokemon = 1;

//função para buscar o pokemon
const fetchpokemon = async (pokemon) => {
    //define uma variavel para retornar os dados da API
    //'fetch' serve para buscar dados de uma API
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    //o if é para verificar se o pokemon existe
    if (APIResponse.status === 200) {
        //se existir ele retorna os dados da API
        //aqui estamos pegando os dados da API e colocando dentro da variavel 'data'
        //json transforma os dados da API em um objeto javascript
        const data = await APIResponse.json();
        //aqui estamos retornando os dados da API que estão dentro da variavel 'data'
        return data; 
    }
}
//função para renderizar o pokemon
const renderPokemon = async (pokemon) => {
    //para saber que esta sendo feita a busca foi definido o pokemonName para 'Carregando...' enquanto a busca é feita
    pokemonName.innerHTML = 'Loading...';
    //a função fetchpokemon é chamada para buscar o pokemon
    const data = await fetchpokemon(pokemon);
    if (data) {
        //se o pokemon existir, ele vai ser renderizado na tela com os dados da API
        pokemonName.innerHTML = data.name;
        pokemonNumber.innerHTML = data.id;
        pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
        input.value = '';
        searchPokemon = data.id;   
    } else {
        //se o pokemon não existir, vai ser renderizado na tela a mensagem 'Não encontrado' ou 'not fond'
        pokemonImage.style.display = 'none';
        pokemonName.innerHTML = 'Not found';
        pokemonNumber.innerHTML = '';
    }
}

//aqui configura-se o formulario
form.addEventListener('submit', (event) => {
    //o evento preventDefault é definido para bloquear o comportamento padrão do formulario que é recarregar a pagina
    event.preventDefault();
    //a função renderPokemon é chamada e passamos como parâmetro 'toLowerCase' onde os valores inseridos são convertido para minúsculo
    renderPokemon(input.value.toLowerCase());
});

//aqui configura-se os botões de navegação da pokedex
buttonPrev.addEventListener('click', () => {
    if(searchPokemon > 1) {
        searchPokemon -= 1;
        //a função renderPokemon é chamada e o valor do searchPokemon é passado como parâmetro
        renderPokemon(searchPokemon);
    }
});
//o searchPokemon é incrementado ou decrementado de acordo com o botão clicado
buttonNext.addEventListener('click', () => {
    searchPokemon += 1;
    renderPokemon(searchPokemon);
});

//aqui chama a função renderPokemon e passa como parâmetro o valor do searchPokemon
renderPokemon(searchPokemon);