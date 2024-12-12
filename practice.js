const rule = document.getElementById("rule")
const pScore = document.getElementById("pScore")
const cScore = document.getElementById("cScore")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")
const result = document.getElementById("result")

let textAdded = false;

rule.addEventListener("click", ()=>{
    if(!textAdded){
        rule.innerHTML += `<p>You will be playing against the computer.<br>

    You can choose between Rock, Paper, and Scissors.<br>
    
    The first one to three points wins.<br>
    
    Here are the rules to getting a point in the game:<br>
    
    Rock beats Scissors<br>
    Scissors beats Paper<br>
    Paper beats Rock<br>
    If the player and computer choose the same option (Ex. Paper and Paper),
     then no one gets the point.</p>
`
  textAdded = true;
    }else if(textAdded){
        rule.innerHTML = `<i class="fa-solid fa-play"></i>Rules to the game`
        textAdded = false;
    }
})
let playerScore = 0;
let computerScore = 0;
let games = ["Rock","Paper","Scissors"];

function playerPlay(value){
    let random = Math.floor(Math.random() * games.length)
if(value === games[random]){
    result.innerText = `It is a Tie. Both chose ${value}!`
}else if((value === "Rock" && games[random] === "Scissors")||
         (value === "Paper" && games[random] === "Rock") ||
         (value === "Scissors" && games[random] === "Paper")
        ){
        playerScore++;
        result.innerText = `You Won! ${value} beats ${games[random]}`
        pScore.innerText = playerScore;
       
        
    }else if((value === "Rock" && games[random] === "Paper")||
    (value === "Paper" && games[random] === "Scissors") ||
    (value === "Scissors" && games[random] === "Rock")
   ){
   computerScore++;
   result.innerText = `Computer Won!  ${games[random]} beats ${value} `
   cScore.innerText = computerScore;
}
    playAgain();

}

let again = document.getElementById("again")
let oh = document.getElementById("oh")
function playAgain(){

    if(computerScore === 3 || playerScore === 3){
    again.style.display = "block";
    oh.style.display = "none";
    }
    
}
