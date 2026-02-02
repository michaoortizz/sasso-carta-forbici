
let humanScore = 0;
let computerScore = 0;
let roundWinner = " "

function getComputerChoice() {
    let computerNumber = Math.floor(Math.random()* 3);
    let computerChoice = " ";
    switch (computerNumber) {
        case 0:
        computerChoice = "Sasso";
        break;
        case 1:
        computerChoice = "Carta";
        break;
        case 2:
        computerChoice = "Forbici";
        break;
    }

    return computerChoice;
}

let humanChoice = "";

function getHumanChoice() {
    
    humanChoice = prompt("Escribe una opcion. Sasso... Carta... Forbici!");

}

function playGame(){

    function playRound(computerChoice, humanChoice){
        if (computerChoice === humanChoice) {
            console.log("È Un Pareggio!");
        }

        if (humanChoice === "Forbici" && computerChoice === "Carta" ||
            humanChoice === "Carta" && computerChoice === "Sasso" ||
            humanChoice === "Sasso" && computerChoice === "Forbici"
        ) {
            humanScore++;
            console.log("Hai Vinto!");
            roundWinner = ""
            
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
