"use strict";

async function makeAndAddJokeDiv() {
    const jokeObj = await axios.get('https://icanhazdadjoke.com/', {headers: {Accept:'application/json'}});

    createHtml(jokeObj.data.joke);
}

function handleClickLike (evt) {
    console.log(evt.target);
}

function handleClickDislike (evt) {
    console.log(evt.target);
}

function createLike() {
    let likeBtn = $("<button></button").attr("class", "like")
                                       .attr("class", "btn")
                                       .on("click", handleClickLike)
                                       .text("Like");
    return likeBtn;
}

function createDislike() {
    let dislikeBtn = $("<button></button").attr("class", "dislike")
                                          .attr("class", "btn")
                                          .on("click", handleClickDislike)
                                          .text("Dislike");
    return dislikeBtn;
}

function createScore(id) {
    let scoreDiv = $("<div></div").text(`0 likes`)
                                  .attr("class", "score")
                                  .attr("id", id);

    return scoreDiv;
}

function createHtml(joke) {


    const html = $("<div></div").text(joke)
                              .prepend(createScore(0))
                              .prepend(createLike())
                              .prepend(createDislike());


    $('.jokes').append(html);
}

for(let i = 0; i < 10; i++) {
    makeAndAddJokeDiv();
}