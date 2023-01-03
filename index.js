const startBtn = document.getElementById('start');
let messageEl = document.getElementById('message_el');
let sumEl = document.getElementById('sum');
let cardsEl = document.getElementById('cards');
let newCardBtn = document.getElementById('new_card');
let startNewGameBtn = document.getElementById('start_new');
let playerEl = document.getElementById("player-el")

newCardBtn.style.display = "none"
startNewGameBtn.style.display = "none"


let hasBlackJack = false;
let isAlive = false;
let message = "";
let isDisabled = false
// Getting random whole numbers from 2 to 11
function getRandomCard(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);

}
// list of cards
let firstCard = getRandomCard (2,11);
let secondCard = getRandomCard(2,11);


// array of cards

    let cards = [
            firstCard ,
            secondCard
    ]

// Player's Object
    let player = {
        name: "Etienne",
        chips: 200
    } 

// operations    
    let sum = cards[0] + cards[1];
    playerEl.textContent = player.name + ": $"+ player.chips

// event listeners
startBtn.addEventListener('click', startGame);
newCardBtn.addEventListener('click', drawCard);
startNewGameBtn.addEventListener('click', startNewGame);

// calling the game

function renderGame(e){

    cardsEl.textContent = "Cards: ";
    sumEl.textContent = " Sum: " + sum;

    for(let i = 0; i < cards.length; i++) {

        cardsEl.textContent +=  cards[i] + " "
        
    }

    if (sum <= 20){
        message = "Do you want to draw a new card?";
        messageEl.textContent = message;
        newCardBtn.style.display = "block"
        startNewGameBtn.style.display = "none"
        startBtn.style.display = "none"
        
    }else if(sum === 21){
        message ="You've got Black Jack!";
        messageEl.textContent = message;
        newCardBtn.style.display = "none"
        startNewGameBtn.style.display = "block"
        
    
    }else{
        message ="You're out of the GAME!";
        messageEl.textContent = message;
        isAlive = false;
        newCardBtn.style.display = "none"
        startNewGameBtn.style.display = "block"
        startBtn.style.display = "none"

    }


    // e.preventDefault();
    
}

// changing the name of function from startGame() to renderGame() to give a clearer meaning to the code

function startGame(){
    renderGame()
}

//Drawing a new card

function drawCard(e){

    let extraCard = getRandomCard (2,11);
    sum += extraCard;
    messageEl.textContent = message;  
    cards.push(extraCard);
    renderGame();
    
    // e.preventDefault();

    if (sum >= 21 ){
        isDisabled  = !isDisabled;
        newCardBtn.disabled = isDisabled;
        startBtn.disabled = isDisabled;
    }else if ( message = " "){
        newCardBtn.disabled = isDisabled;
    }
}

function startNewGame(){
    location.reload();
}
