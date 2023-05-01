const guestScoreEl = document.getElementById("guest-score");
const homeScoreEl = document.getElementById("home-score");

let guestScore = 0;
let homeScore = 0;

guestScoreEl.textContent = guestScore;
homeScoreEl.textContent = homeScore;

function increaseScore(side, score) {
  if (side === "home") {
    homeScore += score;
    homeScoreEl.textContent = homeScore;
  }

  if (side === "guest") {
    guestScore += score;
    guestScoreEl.textContent = guestScore;
  }
}
