
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
    
    let humanChoice = prompt("Scrivi un'opzione. Sasso... Carta... Forbici...!");
    return humanChoice;
}


function playRound(computerChoice, humanChoice){

    computerChoice = computerChoice.toLowerCase();
    humanChoice = humanChoice.toLowerCase();

        if (humanChoice === computerChoice) {
        roundWinner = "Pareggio";
        console.log("Pareggio!");
        return;
        }

        if (humanChoice === "forbici" && computerChoice === "carta" ||
            humanChoice === "carta" && computerChoice === "sasso" ||
            humanChoice === "sasso" && computerChoice === "forbici"
        ) {
            humanScore++;
            console.log("Hai Vinto! " + humanChoice + " batte la/le " + computerChoice);
            roundWinner = "Umano";
            
        }

        else {
            computerScore++;
            console.log("Il Computer Vince! " + computerChoice + " batte la/le " + humanChoice );
            roundWinner = "Computer";
        }

    }

    function playGame (){
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        playRound(computerChoice, humanChoice);
        console.log("Score Umano:", humanScore);
        console.log("Score Computer:", computerScore);
    }    

function gameOver(){
    
}
