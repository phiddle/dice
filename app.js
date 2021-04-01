const image = document.getElementById("dice-img");
const p = document.getElementById("alert");
const h2 = document.getElementById("score");
const roll = document.getElementById("roll");
const myButton = document.getElementById("winRefresh");
let totalScore = 0;

roll.addEventListener("click", () => {
  let randomNumber = Math.floor(Math.random() * 6) + 1;
  totalScore = randomNumber + totalScore;
  image.src = `dice${randomNumber}.png`;
  h2.innerHTML = totalScore;
  if (totalScore >= 20) {
    p.innerHTML = "Winner";
  } else if (randomNumber == 1) {
    p.innerHTML = "loser";
    totalScore = 0;
  } else {
    p.innerHTML = "Keep it up, get to 20!";
  }
});

myButton.addEventListener("click", () => {
  window.location.reload();
});
