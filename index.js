let homeScore = 0
let guestScore = 0

let homeScoreEl = document.getElementById('home-score')
let guestScoreEl = document.getElementById('guest-score')

function plusOnePointHome() {
  homeScore += 1
  homeScoreEl.textContent = homeScore
}
function plusTwoPointHome() {
  homeScore += 2
  homeScoreEl.textContent = homeScore
}
function plusThreePointHome() {
  homeScore += 3
  homeScoreEl.textContent = homeScore
}

function plusOnePointGuest() {
  guestScore += 1
  guestScoreEl.textContent = guestScore
}
function plusTwoPointGuest() {
  guestScore += 2
  guestScoreEl.textContent = guestScore
}
function plusThreePointGuest() {
  guestScore += 3
  guestScoreEl.textContent = guestScore
}
