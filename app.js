"use strict";

const SCORE_REGEX = "[0-9]+";

function handleClickLike (evt) {
    if ($(evt.target).hasClass("like")) {
        let scoreDiv = $(evt.target).siblings(".score");
        let score = Number(scoreDiv.text().match(SCORE_REGEX));
        scoreDiv.text(`${score+1} Likes`);
    }

}

function handleClickDislike (evt) {
    if ($(evt.target).hasClass("dislike")) {
        let scoreDiv = $(evt.target).siblings(".score");
        let score = Number(scoreDiv.text().match(SCORE_REGEX));
        if (score > 0) scoreDiv.text(`${score-1} Likes`);
    }

}

function createLike() {
    let likeBtn = $("<button></button").attr("class", "like btn btn-primary mx-1")
                                       .on("click", handleClickLike)
                                       .text("Like");
    return likeBtn;
}

function createDislike() {
    let dislikeBtn = $("<button></button").attr("class", "dislike btn btn-danger mx-1")
                                          .on("click", handleClickDislike)
                                          .text("Dislike");
    return dislikeBtn;
}

function createScore() {
    let scoreDiv = $("<div></div").text(0+" Likes")
                                  .attr("class", "score");

    return scoreDiv;
}

function createHtml(joke) {

    let jokeText = $(`<div>${joke}</div>`).attr("class", "joketext mb-3");


    const html = $("<div></div")
                              .prepend(createScore())
                              .prepend(createDislike())
                              .prepend(createLike())
                              .prepend(jokeText)
                              .attr("class", "jokediv border rounded border-3 p-4");


    $('.jokes').append(html);
}

async function makeAndAddJokeDiv() {
    const jokeObj = await axios.get('https://icanhazdadjoke.com/', {headers: {Accept:'application/json'}});

    createHtml(jokeObj.data.joke);
}


for(let i = 0; i < 10; i++) {
    makeAndAddJokeDiv();
}
