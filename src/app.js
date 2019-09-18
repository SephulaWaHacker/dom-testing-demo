// cards array holds all cards
let card = global.document.getElementsByClassName("card");
let cards = [...card];

// deck of all cards in game
const deck = global.document.getElementById("card-deck");

// declaring variable of matchedCards
let matchedCard = global.document.getElementsByClassName("match");

// close icon in modal
let closeIcon = global.document.querySelector(".close");

// declare modal
let modal = global.document.getElementById("popup1");

// array for opened cards
let openedCards = [];

//Fisher-Yates shuffles cards method. 
function shuffle(arr){
    let newPos, temp;
    for(let i = arr.length - 1; i > 0; i--) {
        newPos = Math.floor(Math.random() * (i+1));
        temp = arr[i];
        arr[i] = arr[newPos];
        arr[newPos] = temp;
        }
        return arr;
};

//function to start a new play
function startGame() {
    // empty the openCards array
    openedCards = [];

    // shuffle deck
    cards = shuffle(cards);

    // remove all existing classes from each card
    for (let i = 0; i < cards.length; i++) {
        deck.innerHTML = "";
        cards.forEach(function(item) {
            deck.appendChild(item);
        });
    }

}

// toggle open and show class to display cards
const displayCard = function() {
    this.classList.toggle("open");
    this.classList.toggle("show");
    this.classList.toggle("disabled");
    console.log('line 55 displayCard')
};

// add opened cards to OpenedCards list and check if cards are match or not
function cardOpen() {
    openedCards.push(this);
    if (openedCards.length === 2) {
        if (openedCards[0].type === openedCards[1].type) {
            matched();
        } else {
            unmatched();
        }
    }
}

// function when cards do match
function matched() {
    openedCards[0].classList.add("match", "disabled");
    openedCards[1].classList.add("match", "disabled");
    openedCards[0].classList.remove("show", "open", "no-event");
    openedCards[1].classList.remove("show", "open", "no-event");
    openedCards = [];
}

// function when cards don't match
function unmatched() {
    openedCards[0].classList.add("unmatched");
    openedCards[1].classList.add("unmatched");
    disable();
    setTimeout(function() {
        openedCards[0].classList.remove(
            "show",
            "open",
            "no-event",
            "unmatched"
        );
        openedCards[1].classList.remove(
            "show",
            "open",
            "no-event",
            "unmatched"
        );
        enable();
        openedCards = [];
    }, 1100);
}

// disable cards temporarily
function disable() {
    cards.filter(function(card) {
        card.classList.add("disabled");
    });
}

//  enable cards and disable matched cards
function enable() {
    cards.filter(function(card) {
        card.classList.remove("disabled");
        for (let i = 0; i < matchedCard.length; i++) {
            matchedCard[i].classList.add("disabled");
        }
    });
}

// congratulations when all cards match, show modal 
function congratulations() {
    if (matchedCard.length == 16) {
        // show congratulations modal
        modal.classList.add("show");

        //closeIcon on modal
        closeModal();
    }
}

//  close icon on modal
function closeModal() {
    closeIcon.addEventListener("click", function(e) {
        modal.classList.remove("show");
        startGame();
    });
}

// function for user to play Again
function playAgain() {
    modal.classList.remove("show");
    startGame();
}

// loop to add event listeners to each card
for (let i = 0; i < cards.length; i++) {
    card = cards[i];
    card.addEventListener("click", displayCard);
    card.addEventListener("click", cardOpen);
    card.addEventListener("click", congratulations);
}

module.exports = {
    playAgain,
    closeModal,
    congratulations,
    enable,
    disable,
    unmatched,
    matched,
    displayCard,
    startGame,
    shuffle,
    openedCards,
    cards
}