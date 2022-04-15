const input = document.querySelector(".guess");

const check = document.querySelector(".check");

const show = document.querySelector(".number");

const message = document.querySelector(".message");

let score = Number(document.querySelector(".score").value);

let showHighScore = document.querySelector(".highscore");
const secretNumber = Math.trunc(Math.random() * 20 + 1);

let highestScore = 0;
console.log(secretNumber);

check.addEventListener("click", function () {
  if (!input.value) {
    showmessage("No Input");
  } else if (input.value == secretNumber) {
    body.style.backgroundColor = "green";
    showmessage("Yes You Are Correct🥳🥳🥳");
    show.textContent = secretNumber;
  } else if (input.value != secretNumber) {
    if (input.value > secretNumber) {
      score--;
      highestScore.textContent = score;

      showmessage("To More");
    } else if (input.value < secretNumber) {
      score--;
      showHighScore.textContent = score;
      showmessage("Too Less");
    }
  }
});

function showmessage(msg) {
  message.textContent = msg;
}
