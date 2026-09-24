const computerChoiceDisplay = document.getElementById('computerChoice');
const playChoiceDisplay= document.getElementById('playerChoice');
const displayResult= document.getElementById('result');
const displayHuman= document.getElementById('human');
const displayComputer= document.getElementById('computer');

let playChoice
let computerChoice
let humanScore = 0
let computerScore = 0
const possibleChoices = document.querySelectorAll('button');

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    playChoice = e.target.id
    playChoiceDisplay.innerHTML = playChoice
    // const content = element.innerHTML;
    generateComputerChoice()
    tallyresult(getResult())
}));


function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * (possibleChoices.length));

    if (randomNumber === 0){
        computerChoice = 'rock'
    }
    if (randomNumber === 1){
        computerChoice = 'paper'
    }
    if (randomNumber === 2){
        computerChoice = 'scissor'
    }

    computerChoiceDisplay.innerHTML = computerChoice

}

function getResult() {
    human = 0
    computer = 0
    if(computerChoice === playChoice) {
        result = "draw"
    }
    if(computerChoice === 'rock' && playChoice === 'scissor') {
        result = "lost"
        computer = 1
    }
    if(computerChoice === 'scissor' && playChoice === 'paper') {
        result = "lost"
        computer = 1
    }
    if(computerChoice === 'paper' && playChoice === 'rock') {
        result = "lost"
        computer = 1
    }
    if(computerChoice === 'scissor' && playChoice === 'rock') {
        result = "win"
        console.log("win")
        human = 1
    }
    if(computerChoice === 'paper' && playChoice === 'scissor') {
        result = "win"
        console.log("win")
        human = 1
    }
    if(computerChoice === 'rock' && playChoice === 'paper') {
        result = "win"
        console.log("win")
        human = 1
    }
    displayResult.innerHTML = result
    return [human, computer]

}

function tallyresult(outcome) {
    humanScore += outcome[0]
    computerScore += outcome[1]
    
    displayHuman.innerHTML = humanScore;
    displayComputer.innerHTML = computerScore;
}


