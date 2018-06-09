//Nos traemos los elementos que usaremos y creamos una let
const form = document.getElementById('search-form');
const searchField = document.getElementById('search-keyword');
const responseContainer = document.getElementById('response-container');
let searchedForxText;

// Agregamos un evento submit y las instrucciones a ejecutar
form.addEventListener('submit', function (e) {
    e.preventDefault();
    responseContainer.innerHTML = '';
    searchedForxText = searchField.value;
    //Invocando la funccion getNews para ello creamo la funcion
    getNews();

});

function getNews() {
    //Creamos nuestro Objeto
    const articleRequest = new XMLHttpRequest();
    articleRequest.open('GET', `https://api.nytimes.com/svc/search/v2/articlesearch.json?q${searchedForxText}&api-key-<ff7c85d7a41e435b995fdccabd899a58>`);
    //La funcion onload se le asigna la funcion addNEws
    articleRequest.onload = addNews;
    //La funcion onerror tiene asignado la funcion handleError 
    articleRequest.onerror = handleError;
    articleRequest.send();
}

function handleError() {
    console.log('Se ha presentado un error');
}

function addNews() {
    const data = JSON.parse(this.responseText);
    //La propiedad response 
    const article = data.response.docs[0];
    const title = article.headline.main;
    const snippet = article.snippet;

    let li = document.createElement('li');
    //li.className = 'articleClass';
    li.innerText = snippet;
    responseContainer.appendChild(li);


}
