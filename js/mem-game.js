const cardArray = [
    {
        name: 'fries',
        img: 'images/mem-game/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/mem-game/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/mem-game/hotdog.png'
    },
    {
        name: 'blank',
        img: 'images/mem-game/blank.png'
    },
    {
        name: 'ice-cream',
        img: 'images/mem-game/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/mem-game/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/mem-game/pizza.png'
    },
    {
        name: 'white',
        img: 'images/mem-game/white.png'
    },
    {
        name: 'fries',
        img: 'images/mem-game/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/mem-game/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/mem-game/hotdog.png'
    },
    {
        name: 'blank',
        img: 'images/mem-game/blank.png'
    },
    {
        name: 'ice-cream',
        img: 'images/mem-game/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/mem-game/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/mem-game/pizza.png'
    },
    {
        name: 'white',
        img: 'images/mem-game/white.png'
    }
    
]

cardArray.sort(() => 0.5 - Math.random())   // sorts the array randomly - refer to bottom of document for explanation 

const gridDisplay = document.querySelector('#grid')  // the hashtag means its looking for an ID
const scoreDisplay = document.querySelector('#result')

let cardsChosen = []
let cardsChosenId = []
const cardsWon = []


function createBoard () {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/mem-game/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)   //if program doesn't work, change to flipCard
        gridDisplay.appendChild(card)
    }
}

createBoard()


function checkMath() {
    const cards = document.querySelectorAll('#grid img')  // query selector looks for all images in the id of 'grid'
    console.log('checking for a match')

    const cardOneId = cardsChosenId[0]
    const cardtwoId = cardsChosenId[1]
    let repeating = false;
    
    if (cardOneId === cardtwoId) {                          // in the same of clicking the same card twice
        alert("You clicked on the same card")
        repeating = true
    }

    if (cardsChosen[0] == cardsChosen[1] && repeating != true){
        alert("You found matching cards!")
        cards[cardOneId].setAttribute('src','images/mem-game/white.png')   // image card turns white once a match is found.
        cards[cardtwoId].setAttribute('src','images/mem-game/white.png')
        cards[cardOneId].removeEventListener('click', flipCard)
        cards[cardtwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else {                                            // if no match, then images clicked reverse to cover img 'blank.png'
        cards[cardOneId].setAttribute('src','images/mem-game/blank.png')
        cards[cardtwoId].setAttribute('src','images/mem-game/blank.png')
    }
    cardsChosen = []
    cardsChosenId = []

    scoreDisplay.textContent = cardsWon.length       // displays the realtime score of the game


    // winning condition 
    if (cardsWon.length == (cardArray.length/2)) {
        scoreDisplay.textContent = 'Congrats You Win!!!'
    }
}

function flipCard() {
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)        //pushes the NAME (only) of the card clicked into the const variable created called "cardsChosen"

    cardsChosenId.push(cardId)
    console.log(cardsChosenId)
    console.log(cardsChosen)

    this.setAttribute('src', cardArray[cardId].img)


    if (cardsChosen.length === 2) { 
        setTimeout(checkMath, 500)
    }
}


// explanation by C. Code for cardArray.sort(() => 0.5 - Math.random())
/*
What sort() does:
sort() takes a comparison function that returns: 
a negative number (which will cause the first item to come before the second)
a positive number (which will cause the first item to come AFTER the second)

What this code does:
Math.random() generates a decimal between 0 and 1. So 0.5 - Math.random() gives you:
A negative number roughly half the time (when Math.random() is > 0.5)
A positive number roughly half the time (when Math.random() is < 0.5)

It's a hacky shuffle — not a perfect algorithm (the randomness isn't evenly distributed), but good enough for casual shuffling like card games.

For true random shuffling use the Fisher-Yates shuffle instead
*/

/*
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
*/