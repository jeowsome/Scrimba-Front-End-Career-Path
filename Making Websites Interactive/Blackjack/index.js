const cardArray = [];
const player = {
  name: "Jeomar",
  chips: "500",
};
let hasBlackJack = false;
let isAlive = false;
let message = "";
let sum = 0;
const messageEl = document.getElementById("message-el");
const sumEl = document.getElementById("sum-el");
const cardsEl = document.getElementById("cards-el");
const playerEl = document.getElementById("player-el");

playerEl.textContent = player.name + ": $" + player.chips;

function startGame() {
  isAlive = true;
  cardArray.push(getRandomCard());
  cardArray.push(getRandomCard());
  renderGame();
}

function getRandomCard() {
  let value = Math.floor(Math.random() * 13 + 1);

  if (value === 1) {
    return 11;
  } else if (value > 10) {
    return 10;
  }
  return value;
}

function renderGame() {
  sum = cardArray.reduce((acc, e) => (acc += e), 1);
  if (sum <= 20) {
    message = "Do you want to draw a new card? 🙂";
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳";
    hasBlackJack = true;
  } else {
    message = "You're out of the game! 😭";
    isAlive = false;
  }
  messageEl.textContent = message;
  sumEl.textContent = "Sum: " + sum;
  cardsEl.textContent = "Cards: " + cardArray.join(" ");
}

function newCard() {
  if (isAlive && !hasBlackJack) {
    let newCard = getRandomCard();
    cardArray.push(newCard);
    sum += newCard;
    renderGame();
  }
}
