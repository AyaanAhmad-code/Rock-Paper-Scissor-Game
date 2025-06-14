let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('.msg');

const userScoreDisplay = document.querySelector('#user-score');
const computerScoreDisplay = document.querySelector('#computer-score');

const genCompChoice = () => {
    const options = ['rock', 'paper', 'scissors'];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    msg.innerText = "It's a draw!";
    msg.style.backgroundColor = "#081b31"; 
}

const showWinner = (userWin, userChoice, computerChoice) => {
    if(userWin){
        userScore++;
        userScoreDisplay.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        computerScore++;
        computerScoreDisplay.innerText = computerScore;
        msg.innerText = `You lost. ${computerChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}
const playGame = (userChoice) => {
    const computerChoice = genCompChoice();  

if (userChoice === computerChoice) {
        drawGame();
        console.log("Your score: " + userScore + ", Computer score: " + computerScore);
    }else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = computerChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            userWin = computerChoice === "scissors" ? false : true;
        }else {
            userWin = computerChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, computerChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute('id');
        playGame(userChoice);
    });
});


