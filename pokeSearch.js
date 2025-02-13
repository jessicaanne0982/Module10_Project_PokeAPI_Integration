async function fetchPokemonByName(pokemonName) {

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

    if (!response.ok) {
        console.log("Error: Issue with request or Pokemon not found");
        return null;
    }

    const pokemonData = await response.json();
    console.log("Response Status: ", response.status); 
    return pokemonData;
}

async function searchPokemon() {
    // pulling the name the user enters on the search form, trims extra spaces, and converts to lower case
    const pokemonNameInput = document.getElementById("pokemonName").value.trim().toLowerCase();
    if (pokemonNameInput === "") {
        alert("Please enter a Pokémon name or ID");
        return;
    }

    const pokemon = await fetchPokemonByName(pokemonNameInput);
    
    if (pokemon) {
        const pokemonInfoElement = document.getElementById("pokeReturnSearch");

        // General information about the Pokemon searched... A button is given to allow the user to view more details
        pokemonInfoElement.innerHTML = `
        <img src="${pokemon.sprites.other["official-artwork"].front_default}" alt="${pokemon.name}" class="img-fluid" style="height: 150px;">
        <h4>Name: ${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h4>
        <p class="lead">Type: ${pokemon.types.map(type => `${type.type.name}`)}</p>

        <button id="detailButton" type="button" class="btn btn-lg btn-danger" data-bs-toggle="popover" data-bs-title="${pokemon.name}" 
                data-bs-content="Loading...)}">
                Click for more details
        </button>
        `;

        // These details are displayed in a popover when the user presses the 'Click for more Details' button
        const popoverDetails = `
            <div>
                <img src="${pokemon.sprites.other["official-artwork"].front_default}" alt="${pokemon.name}" class="img-fluid">
                <h5>Types:</h5>
                <p>${pokemon.types.map(type => `${type.type.name}`).join(', ')}</p>
                <h5>Abilities:</h5>
                <ul>
                ${pokemon.abilities.map(ability => `<li>${ability.ability.name}</li>`).join('')}                 
                </ul>

                <h5>Stats:</h5>
                <ul>
                ${pokemon.stats.map(stat => `<li>${stat.stat.name}: ${stat.base_stat}</li>`).join('')}                 
                </ul>
            </div>
            `;

        // Initialize the Popover
        const popoverElement = new bootstrap.Popover(document.getElementById('detailButton'), {
            trigger: 'click',
            content: popoverDetails,
            html: true
        });
        
    // Should alert the user if no pokemon were found with the name they entered 
    } else {
        console.log('No pokemon found')
        alert('Error! Pokémon Not Found')
        document.getElementById('pokeReturnSearch').innerHTML = "";
    }

// Prevents default submission of the form
const pokeForm = document.querySelector('form');
pokeForm.addEventListener('submit', (event) => {
    event.preventDefault();
    searchPokemon();
    });

}