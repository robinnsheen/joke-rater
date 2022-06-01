"use strict"

async function getAndAddJoke() {
    const joke = await axios.get('https://icanhazdadjoke.com/', {headers: {Accept:'application/json'}});
    addJoke(joke.data);
    return joke.data;
}

function addJoke(joke) { 
    let html = createHtml(joke);
    $('#jokes').append(html);
}

function createHtml(joke) {
    let html = `<div>${joke.joke}</div><br>`
    return html;
}
for(let i = 0; i < 10; i++) {
    getAndAddJoke();
}