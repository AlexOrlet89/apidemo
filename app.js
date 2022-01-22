// import functions
import { getPokedex } from './fetch.js';
// grab DOM elements
// console.log('app.js is working');

const template = document.querySelector('#template');
const list = document.querySelector('#list');
// const selectEl = document.querySelector('select');
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
    }
    console.log(pokemon, name, image);
    // console.log(pokedex);
}

loadPokedex();
// set event listeners 
    // get user input
    // use user input to update state 
    // update DOM to reflect the new state
