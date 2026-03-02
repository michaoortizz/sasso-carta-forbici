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
        console.log("🤝 Pareggio! Entrambi hanno scelto " + humanChoice);
        return;
        }

        if (humanChoice === "forbici" && computerChoice === "carta" ||
            humanChoice === "carta" && computerChoice === "sasso" ||
            humanChoice === "sasso" && computerChoice === "forbici"
        ) {
            humanScore++;
            console.log("🤸‍♀️ Hai Vinto! " + humanChoice + " batte " + computerChoice);
            roundWinner = "Umano";
            
        }

        else {
            computerScore++;
            console.log("💻 Il Computer Vince! " + computerChoice + " batte " + humanChoice );
            roundWinner = "Computer";
        }

    }

// función de juego completo: llama las otras funciones y debe repetir la partida 5 veces
    function playGame (){
        alert("Benvenuti a Sasso, Carta & Forbici!");
        alert("Gioca finché tu o il computer non vincete 5 round!");
        alert("Cominiciamo :)!");

        console.clear();
        while (humanScore < 5 && computerScore <5) {
           const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        playRound(computerChoice, humanChoice);
        console.log("Score Umano:", humanScore);
        console.log("Score Computer:", computerScore); 
        console.log("------------------------");
        }
            gameOver();
    }    

    // funcion de terminar juego: mensajes de finalizacin y opcion de volver a jugar
function gameOver(){
        let mensajes = ["🎉 Hai vinto la partita! Congratulazioni!", "💀 Hai perso... La prossima volta sarai più fortunato."];
        if (humanScore > computerScore){
            console.log(mensajes[0]);
        } else {
            console.log(mensajes[1]);
        }

        let restart = confirm("Vuoi giocare di nuovo?");
            if(restart){
                humanScore = 0;
                computerScore = 0;
                console.Clear();
                playGame();
            } else {
                console.log("Grazie per aver giocato! Ciao!");
            }
}

window.onload = function() {
    playGame();
};
