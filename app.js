"use strict";

const scores = {};

async function makeAndAddJokeDiv() {
    const jokeObj = await axios.get('https://icanhazdadjoke.com/', {headers: {Accept:'application/json'}});

    createHtml(jokeObj.data.joke);
}

function handleClickLike (evt) {
    if ($(evt.target).attr("class") === "like btn") {
        let scoreDiv = $(evt.target).siblings(".score");
        let score = Number(scoreDiv.text())+1;
        scoreDiv.text(score);
    }

}

function handleClickDislike (evt) {
    if ($(evt.target).attr("class") === "dislike btn") {
        let scoreDiv = $(evt.target).siblings(".score");
        let score = Number(scoreDiv.text())-1;
        scoreDiv.text(score);
    }

}

function createLike() {
    let likeBtn = $("<button></button").attr("class", "like btn")
                                       .on("click", handleClickLike)
                                       .text("Like");
    return likeBtn;
}

function createDislike() {
    let dislikeBtn = $("<button></button").attr("class", "dislike btn")
                                          .on("click", handleClickDislike)
                                          .text("Dislike");
    return dislikeBtn;
}

function createScore() {
    let scoreDiv = $("<div></div").text(0)
                                  .attr("class", "score");

    return scoreDiv;
}

function createHtml(joke) {


    const html = $("<div></div").text(joke)
                              .prepend(createScore())
                              .prepend(createLike())
                              .prepend(createDislike());


    $('.jokes').append(html);
}

for(let i = 0; i < 10; i++) {
    makeAndAddJokeDiv();
}
