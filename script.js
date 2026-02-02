
let humanScore = 0;
let computerScore = 0;
let roundWinner = " "

function getComputerChoice() {
    let computerNumber = Math.floor(Math.random()* 3);
    let computerChoice = " ";
    switch (computerNumber) {
        case 0:
        computerChoice = "sasso";
        break;
        case 1:
        computerChoice = "carta";
        break;
        case 2:
        computerChoice = "forbici";
        break;
    }
    
    return computerChoice;
}

function getHumanChoice() {
    
    let humanChoice = prompt("Scrivi un'opzione. Sasso... Carta... Forbici...!").toLowerCase();
    return humanChoice;
}

function playGame(){

    getHumanChoice();
    getComputerChoice();

    function playRound(computerChoice, humanChoice){

        if (humanChoice === "forbici" && computerChoice === "carta" ||
            humanChoice === "carta" && computerChoice === "sasso" ||
            humanChoice === "sasso" && computerChoice === "forbici"
        ) {
            humanScore++;
            console.log("Hai Vinto!");
            
        }

        else {
            computerScore++;
            console.log("Il Computer Vince!");
        }

    }

    playRound();
}

function gameOver(){
    
}
