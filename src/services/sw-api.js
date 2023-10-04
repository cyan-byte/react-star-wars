// This file contains the code for fetching data from the SWAPI

// Define the base URL for SWAPI
const BASE_URL = 'https://swapi.dev/api';

// Function to fetch all starships
export function getAllStarships() {
  return fetch(`${BASE_URL}/starships/`)
    .then((response) => response.json())
    .then((data) => data.results);
}