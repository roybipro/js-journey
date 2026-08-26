
let firstCard = 10
let secondCard = 7
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""


let sumEl = document.getElementById("sum-el")

let messageEl = document.getElementById("message-el")
// let messageEl = document.querySelector("# message-el")
let cardsEl = document.getElementById("card-el")

function startGame() {
    
    renderGame()
}

function renderGame() {

    cardsEl.textContent = "Cards: " 
    for(let i=0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Youh ve got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
   
    messageEl.textContent = message
}

function newCard() {
let card = 6
sum+=card
cards.push(card)
renderGame()
}




