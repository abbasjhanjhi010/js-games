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

function getResult(human, computer) {
    var resultData = [];
    if(computerChoice === playChoice) {
        result = "draw"
        return resultData 
    }
    if(computerChoice === 'rock' && playChoice === 'scissor') {
        result = "lost"
        return resultData[1] = 1
    }
    if(computerChoice === 'scissor' && playChoice === 'paper') {
        result = "lost"
        return resultData[1] = 1
    }
    if(computerChoice === 'paper' && playChoice === 'rock') {
        result = "lost"
        return resultData[1] = 1
    }
    if(computerChoice === 'scissor' && playChoice === 'rock') {
        result = "win"
        return resultData[0] = 1
    }
    if(computerChoice === 'paper' && playChoice === 'scissor') {
        result = "win"
        return resultData[0] = 1
    }
    if(computerChoice === 'rock' && playChoice === 'paper') {
        result = "win"
        return resultData[0] = 1
    }
    displayResult.innerHTML = result

}

function tallyresult(humanOutcome, computerOutcome) {
    humanScore += humanOutcome
    computerScore += computerOutcome
    displayHuman.innerHTML = humanScore
    displayComputer.innerHTML = computerScore
}


