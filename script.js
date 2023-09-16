// const API= "http://www.omdbapi.com/?i=tt3896198&apikey=9eedefd4";
// script.js

const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const resultsContainer = document.getElementById('results-container');

searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.trim();
    if (searchTerm !== '') {
        searchMovies(searchTerm);
    }
});

// function searchMovies(query) {
    // Make an API request to OMDB using fetch or an AJAX library
    // Parse the JSON response and display results in the resultsContainer
    // Handle errors and edge cases
// }
function searchMovies(query) {
    const apiKey = "9eedefd4";
    let apiUrl = `https://www.omdbapi.com/?apikey=${apiKey}&s=${query}`;

    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            // Handle the data and display results
            console.log(data);
            displayResults(data.Search);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

function displayResults(movies) {
    resultsContainer.innerHTML = ''; // Clear previous results

    if (!movies || movies.length === 0) {
        resultsContainer.innerHTML = '<p>No results found.</p>';
        return;
    }

    movies.forEach((movie) => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        movieElement.innerHTML = `
        <img src="${movie.Poster}" alt="${movie.Title} Poster"> 
        <h2>${movie.Title}</h2>
            <p>${movie.Year}</p>
            
        `;
        resultsContainer.appendChild(movieElement);
    });
}
