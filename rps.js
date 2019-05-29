let p1Score = 0;
let p2Score = 0;
const p1Score_span = document.getElementById("score-p1");
const p1Score_span = document.getElementById("score-p2");
const scoreBoard_div = document.getquerySelector("score-board");
const resault_div = document.getquerySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getPlayer2Choice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = (Math.floor(Math.random() * 3));
    return choises[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    if (letter === "s") return "Scissors";
}

function win(Player1, Player2) {
    const Player1Choice_div = document.getElementById(Player1);
    p1Score++

    p1Score_span.innerHTML = p1Score;
    p2Score_span.innerHTML = p2Score;

    result_div.innerHTML = `${convertToWord(Player1)} beats ${convertToWord(Player2)}. You win! `
    setTimeOut(() => Player1Choice_div.classList.remove('green-glow'), 500);
}

function lose(Player1, Player2) {
    const Player1Choice_div = document.getElementById(Player1);
    p2Score++

    p1Score_span.innerHTML = p1Score;
    p2Score_span.innerHTML = p2Score;
    result_div.innerHTML = `${convertToWord(Player2)} beats ${convertToWord(Player1)}. You suck... `
}

function draw(Player1, Player2) {
    const Player1Choice_div = document.getElementById(Player1);
    result_div.innerHTML = `${convertToWord(Player1)} equals ${convertToWord(Player2)}. Its a draw... `
}

function game(Player1Choice) {
    const Player2Choice = getPlayer2Choice();
    switch (Player1Choice + Player2Choice) {
        case "rs":
        case "sp":
        case "pr":
            win(Player1Choice, Player2Choice);
            break;
        case "sr":
        case "ps":
        case "rp":
            lose(Player1Choice, Player2Choice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(Player1Choice, Player2Choice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', ()=> game("r"))
    paper_div.addEventListener('click', ()=> game("p"))
    scissors_div.addEventListener('click', ()=> game("s"))
}
