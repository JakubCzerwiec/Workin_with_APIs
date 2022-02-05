const img = document.querySelector('img');
const btn = document.querySelector('.btn');
const category = document.querySelector('#category');
const form = document.querySelector('form');

let current = 'cats';



// Fetching first gif
fetch(`https://api.giphy.com/v1/gifs/translate?api_key=0NOHxAcxsQEhAcDUdg4xA1bU20pusQw4&s=${current}`, {mode: 'cors'})
.then(function(response) {
    return response.json()
})
.then(function(response) {
    img.src = response.data.images.original.url;
})
.catch((error) => {
    console.error('Error:', error);
    });




// Button to search for a new gif
btn.addEventListener('click', (e) => {
    e.preventDefault();

    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=0NOHxAcxsQEhAcDUdg4xA1bU20pusQw4&s=${current}`, {mode: 'cors'})
    .then(function(response) {
        return response.json()
    })
    .then(function(response) {
        img.src = response.data.images.original.url;
    })
    .catch((error) => {
        console.error('Error:', error);
      });
})

// Form to search for a new category
form.addEventListener('submit', (e) => {
    e.preventDefault();
    current = category.value;

    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=0NOHxAcxsQEhAcDUdg4xA1bU20pusQw4&s=${current}`, {mode: 'cors'})
    .then(function(response) {
        return response.json()
    })
    .then(function(response) {
        img.src = response.data.images.original.url;
    })
    .catch((error) => {
        console.error('Error:', error);
      });

})




