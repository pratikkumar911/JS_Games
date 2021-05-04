var userScore=0;
var compScore=0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getCompChoice(){
    const choices=['r','p','s'];
    const compChoice=choices[Math.floor(Math.random() * choices.length)];
    return compChoice;
}

function convertToWord(letter){
    if(letter==="r") return "Rock";
    if(letter==="p") return "Paper";
    if(letter==="s") return "Scissors";
}


function win(user,comp){
    const userChoice= user;
    userScore++;
    userScore_span.innerHTML=userScore;
    compScore_span.innerHTML=compScore;
    user=convertToWord(user);
    comp=convertToWord(comp);
    result_p.innerHTML=user + "(U) beats " + comp + " (C) . You win!";
    setTimeout(() => {
        document.getElementById(userChoice).classList.add('green-glow');
    }, 200);
}
function lost(user,comp){
    compScore++;
    compScore_span.innerHTML=compScore;
    userScore_span.innerHTML=userScore;
    user=convertToWord(user);
    comp=convertToWord(comp);
    result_p.innerHTML=comp + "(C) beats " + user + " (U) . You lost!";
}
function draw(user,comp){
    compScore_span.innerHTML=compScore;
    userScore_span.innerHTML=userScore;
    user=convertToWord(user);
    comp=convertToWord(comp);
    result_p.innerHTML=user + "(U) equals " + comp + " (C) . Match draw!";
}


function game(userChoice){
    const compChoice = getCompChoice();
    console.log(userChoice);
    console.log(compChoice);
    switch(userChoice + compChoice){
        case "rs":
        case "pr":
        case "sp":
            console.log("USER WINS");
            win(userChoice, compChoice);
            break;
        case "ps":
        case "rp":
        case "sr":
            console.log("COMPUTER WINS");
            lost(userChoice, compChoice);
            break;
        case "pp":
        case "rr":
        case "ss":
            console.log("MATCH DRAW");
            draw(userChoice, compChoice);
            break;
    }

}

function main(){
    rock_div.addEventListener("click",()=>{
        game("r");
    })
    paper_div.addEventListener("click",()=>{
        game("p");
    })
    scissor_div.addEventListener("click",()=>{
        game("s");
    })
}

main();
