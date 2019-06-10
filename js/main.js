const baseUrl = 'https://pokeapi.co/api/v2/';
const regions = document.querySelector("#regions");
const locations = document.querySelector('#locations');
const areas = document.querySelector('#areas');
const exploreBtn = document.querySelector('#explore');
const encounteredPokemon = document.querySelector('.encountered-pokemon');
const pokemonStats = document.querySelector('.con3-information');
const pokemonName = document.querySelector('.pokemon-name');
const captureBtn = document.querySelector('.capture-button');
const capturedPokemon = document.querySelector('.captured-pokemon');
var regionArr = [];
var capturedList = [];




fetch(`${baseUrl}region`)
    .then(response => response.json()) 
    .then(function(region) {
        region = region.results;
        regionArr.push(...region);
        displayRegions(regionArr);
    })


regions.addEventListener('select', function () {
        getLocations();
})

function displayRegions(regionArr){
    let regionList = regionArr.map(regions => {
        return `<option value="${regions.url}">${regions.name}</option>`;
    })
    regions.innerHTML = regionList;
    getLocations();
}

function getLocations(){
    fetch(regions.value)
    .then(response => response.json()) 
    .then(function(location) {
        location = location.locations;
        displayLocation([...location])
    })
}

function displayLocation(locationArr){
    let locationList = locationArr.map(locations => {
        return `<option value="${locations.url}">${locations.name}</option>`;
    })
    locations.innerHTML = locationList;
    getAreas();
}

function getAreas(){
    fetch(locations.value)
    .then(response => response.json()) 
    .then(function(area) {
        area = area.areas;
        displayArea([...area])
    })
    
}

function displayArea(areaArr){
    let areaList = areaArr.map(areas => {
        return `<option value="${areas.url}">${areas.name}</option>`;
    })
    areas.innerHTML = areaList;
    getAreas();
}

exploreBtn.addEventListener('click', function() {
        fetch(areas.value)
        .then(response => response.json()) 
        .then(function(pokemon) {
        pokemon = pokemon.pokemon_encounters;
        getPokemons([...pokemon]);
        
    })
})


function getPokemons(pokemonArr){
    let id = Math.floor(Math.random() * pokemonArr.length);
    getPokemon(pokemonArr[id].pokemon.url);
}

function getPokemon(pokemonData){
    fetch(pokemonData)
    .then(response => response.json())
    .then(function(pokemon) {
        getStats([...pokemon.stats]);
        capturePokemon(pokemon.name, pokemon.sprites.front_default)
        pokemonName.innerHTML = `<span>${pokemon.name.toUpperCase()}</span>`
        encounteredPokemon.innerHTML = `<img src="${pokemon.sprites.front_default}" name="${pokemon.name}" height="250"/>`
        captureBtn.innerHTML = `<button class="capture button1">CAPTURE</button>`
        
    })
    
}

function getStats(statsArr){
    let statsList = statsArr.map(stats => {
        return `<span>${stats.stat.name} :  ${stats.base_stat}</span><br/>`;
    }).join('');
    pokemonStats.innerHTML = statsList;
}
    





function capturePokemon(name, picture){
    captureBtn.addEventListener('click', function() {

        capturedList.push({name, picture});
        console.log(capturedList)

        //capturedPokemon.append(<div><img src="${picture}" name="${name}" height="250"/></div><span>${name.toUpperCase()}</span>);
    })
}

























