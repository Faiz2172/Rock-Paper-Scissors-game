let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScore1=document.querySelector("#user-score");
const compScore2=document.querySelector("#comp-score");

const drawGame = () => {
    console.log("Game was Drawn");
    msg.innerText="Game drawn! Play Again!";
    msg.style.backgroundColor ="#081b31";
}


const showWinner = (userWin,userChoiceId,compChoice) => {
    if (userWin) {
        userScore++;
        userScore1.innerText=userScore;
        console.log("YOU WIN");
        msg.innerText="You Win!";
        msg.style.backgroundColor ="green";

    }
    else {
        compScore++;
        compScore2.innerText=compScore;
        console.log("You Lose");
        msg.innerText="You Lose!";
        msg.style.backgroundColor ="red";
    }

}


const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomidx = Math.floor(Math.random() * 3);
    return options[randomidx];
}


const playGame = (userChoiceId) => {
    console.log(`User choice =${userChoiceId}`);
    const compChoice = genCompChoice();
    console.log(`comp choice =${compChoice}`);

    if (userChoiceId === compChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoiceId === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoiceId === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        }
        else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoiceId,compChoice);
    }
}


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoiceId = choice.getAttribute("id");
        playGame(userChoiceId);
    })
})