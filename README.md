# 📱 Mini Pokédex com JavaScript

Este projeto é uma **mini Pokédex interativa**, desenvolvida com **HTML, CSS e JavaScript**, que consome dados da [PokéAPI](https://pokeapi.co/). A aplicação permite pesquisar Pokémon pelo nome ou número, além de navegar entre eles usando botões de próxima e anterior.

## 🎯 Funcionalidades

- 🔍 Busca de Pokémon pelo nome ou número.
- 📸 Exibição do nome, número e sprite animado.
- ⬅️➡️ Navegação entre Pokémon anteriores e próximos.
- 🧪 Integração com API pública (PokéAPI).
- 📲 Design responsivo e simples.

## 🧠 Como Funciona

- Utiliza a função `fetch()` para buscar dados da API.
- Atualiza dinamicamente os elementos HTML com os dados recebidos.
- Utiliza `addEventListener` para interações com formulário e botões.
- Mostra mensagens como `Loading...` e `Not found` para melhor feedback do usuário.

## 📂 Estrutura do Código

- `searchPokemon`: armazena o ID do Pokémon atual.
- `fetchpokemon(pokemon)`: busca os dados da PokéAPI.
- `renderPokemon(pokemon)`: renderiza o Pokémon na tela.
- Eventos para:
  - Submissão do formulário (`submit`)
  - Clique nos botões de navegação (`btn-prev` e `btn-next`)

## 🚀 Como Usar

1. Clone o repositório:
   ```bash
   git clone https://github.com/SofiaAraki/Pokedex.git
   ```
2. Abra o `index.html` em um navegador.
3. Digite o nome ou número de um Pokémon no campo de busca ou use os botões para navegar.

## 💡 Sugestões de Melhorias

- Adicionar suporte a idiomas (ex: nomes em português).
- Exibir tipos, habilidades e estatísticas do Pokémon.
- Incluir uma animação de carregamento.
- Adicionar histórico de Pokémon pesquisados.

---

> Projeto criado com fins educativos, ideal para quem está iniciando com APIs e JavaScript assíncrono.
