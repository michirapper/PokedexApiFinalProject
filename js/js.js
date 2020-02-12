var listElements = document.querySelector(".contenedor");
function fetchItems() {
    for (let i = 1; i <= 151; i++) {
        let request = new XMLHttpRequest();
        request.open('GET', `https://pokeapi.co/api/v2/pokemon/${i}`);
        request.responseType = 'json';
        request.onreadystatechange = function () {
            console.log('ReadyState: ' + request.readyState);
            console.log('Status: ' + request.status);
            if (request.readyState === 4 && request.status === 200) {
                console.log(request.response);
                const response = request.response;
                listElements.innerHTML += `
            <div class="PokemonContenedor">
            <span class="idPokemon">${response.id}.</span>
            <span class="nombre">${response.name}</span>
            <br>
            <img src="${response.sprites['front_default']}" alt="Smiley face" height="180px" width="">
            <br>
            <span>Types: ${response.types.map((type) => type.type.name).join(', ')}</span>
          </div>`;
            }
        };
        request.send();
    }
}
function ImprimirPokemon(urlPokemon) {
    let request = new XMLHttpRequest();
    request.open('GET', urlPokemon);
    request.responseType = 'json';
    request.onreadystatechange = function () {
        console.log('ReadyState: ' + request.readyState);
        console.log('Status: ' + request.status);
        if (request.readyState === 4 && request.status === 200) {
            console.log(request.response);
            const response = request.response;
            listElements.innerHTML += `
        <div class="PokemonContenedor">
        <span class="idPokemon">${response.id}.</span>
        <span class="nombre">${response.name}</span>
        <br>
        <img src="${response.sprites['front_default']}" alt="Smiley face" height="180px" width="">
        <br>
        <span>Types: ${response.types.map((type) => type.type.name).join(', ')}</span>
      </div>`;
        }
    };
    request.send();
}
function getPokemon(id){
        let request = new XMLHttpRequest();
        request.open('GET', `https://pokeapi.co/api/v2/type/${id}/`);
        request.responseType = 'json';
        request.onreadystatechange = function () {
            console.log('ReadyState: ' + request.readyState);
            console.log('Status: ' + request.status);
            if (request.readyState === 4 && request.status === 200) {
                console.log(request.response);
                const response = request.response;
                const idPokemon = response.pokemon;
                
                for (let i = 0; i < idPokemon.length; i++) {
                    console.log(idPokemon[i].pokemon.url);
                    ImprimirPokemon(idPokemon[i].pokemon.url);                    
                }
            }
        };
        request.send();
}

