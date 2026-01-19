
function getComputerChoice() {
    let computerNumber = Math.floor(Math.random()* 3);
    let computerChoice = 0;
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

