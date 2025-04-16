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

async function fetchData(url) {
  //fetch data from API
  const response = await fetch(url); //returns promise
  const data = await response.json(); //take response and convert it from json to object
  return data;
}

//fetching object and saving key results only in a new variable
const { results: characters } = await fetchData(
  "https://rickandmortyapi.com/api/character"
);
const { results: locations } = await fetchData(
  "https://rickandmortyapi.com/api/location"
);
const { results: episodes } = await fetchData(
  "https://rickandmortyapi.com/api/episode"
);

console.log(characters, locations, episodes);
