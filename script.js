// inicializo variables globales
let humanScore = 0;
let computerScore = 0;
let roundWinner = " "

// funcion para randomizar la elección de la computadora
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

// función para recoger elección humana
function getHumanChoice() {
    
    let humanChoice = prompt("Scrivi un'opzione. Sasso... Carta... Forbici...!");
    return humanChoice;
}

// función de partida: recoge elecciones y compara cual ana
function playRound(computerChoice, humanChoice){

    // convierte a lw para ser case insensitive
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

// función de juego completo: llama las otras funciones y debe repetir la partida 5 veces
    function playGame (){
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        playRound(computerChoice, humanChoice);
        console.log("Score Umano:", humanScore);
        console.log("Score Computer:", computerScore);
    }    

function gameOver(){
    
}
