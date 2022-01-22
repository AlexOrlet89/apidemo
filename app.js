// import functions
import { getPokedex } from './fetch.js';
import { getStarWarsPeople } from './fetch.js';
// grab DOM elements
// console.log('app.js is working');

const template = document.querySelector('#template');
const list = document.querySelector('#list');
const selectEl = document.querySelector('select');
// not doing the select funciton.
console.log('dom', template);

async function loadPokedex() {
    const pokedex = await getPokedex();
    list.classList.add('pokemon');

    for (let pokemon of pokedex) {
        const clone = template.content.cloneNode(true);

        const name = clone.querySelector('h2');
        const image = clone.querySelector('img');
        const type = clone.querySelector('h6');
        // console.log(pokemon, name, image);

        name.textContent = 'Name: ' + pokemon.pokemon;
        type.textContent = 'Egg: ' + pokemon.egg_group_1;
        image.src = pokemon.url_image;
        image.alt = pokemon.pokedex;

        list.appendChild(clone);
    }
    // console.log(pokedex);
}

// loadPokedex();

async function loadStarWarsPeople() {
    const starWarsPeople = await getStarWarsPeople();
    console.log(starWarsPeople);
    //     // list.classList.add('name');

    for (let starWars of starWarsPeople) {
        // console.log(name);
        const clone = template.content.cloneNode(true);

        const name = clone.querySelector('h2');
        const height = clone.querySelector('h6');

        // console.log(name, height);

        name.textContent = 'Name: ' + starWars.name;
        height.textContent = 'Height: ' + starWars.height;

        list.appendChild(clone);
        
    }
}
loadStarWarsPeople();

selectEl.addEventListener('change', (e) => {
    console.log('user click');
});

        // set event listeners 
        // get user input
        // use user input to update state 
        // update DOM to reflect the new state