const requestURL = "https://pokeapi.co/api/v2/pokemon/";

fetch(requestURL)
.then(function(response) {
  return response.json();
})
.then(function(jsonObject){
//console.table(jsonObject);
  const pokemon = jsonObject['results'];

  pokemon.forEach(pokemon => {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
 
    h2.textContent = `${pokemon.name}`;

    card.appendChild(h2);

    document.querySelector('div.cards').appendChild(card);
    
  });
});


const URL = "https://swapi.dev/api/people";

fetch(URL)
.then(function(response) {
  return response.json();
})
.then(function(jsonObject){
//console.table(jsonObject);
  const sw = jsonObject['results'];

  sw.forEach(sw => {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');

    h2.textContent = `${sw.name}`;

    card.appendChild(h2);

    document.querySelector('div.stars').appendChild(card);
    
  });
});