import { createCharacterCard } from "./components/CharacterCard/CharacterCard.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 1;
const page = 1;
const searchQuery = "";

async function fetchCharacters(url) {
  //fetch data from API
  const response = await fetch(url); //returns promise
  const data = await response.json(); //take response and convert it from json to object
  const { results: characters } = data; // characters contains an array[] of objects {} where each object is ONE character with properties (key, value...) from the TV series
  console.log(characters);

  let characterList = "";

  for (const character of characters) {
    const card = createCharacterCard(character);
    characterList = characterList + card;
  }

  cardContainer.innerHTML = characterList;

  return data;
}

//fetching object and saving key results only in a new variable
const { results: characters } = await fetchCharacters(
  "https://rickandmortyapi.com/api/character"
);

/*const { results: locations } = await fetchCharacters(
  "https://rickandmortyapi.com/api/location"
);
const { results: episodes } = await fetchCharacters(
  "https://rickandmortyapi.com/api/episode"
); */

//console.log(characters, locations, episodes);
