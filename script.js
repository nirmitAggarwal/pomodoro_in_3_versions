// script.js
let timer;
let countdown;
let isRunning = false;

const timerDisplay = document.getElementById("timer");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);

function startTimer() {
  if (isRunning) return;
  isRunning = true;
  let time = 25 * 60;
  countdown = setInterval(() => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    timerDisplay.textContent = `${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
    if (time <= 0) {
      clearInterval(countdown);
      isRunning = false;
      alert("Time's up!");
    }
    time--;
  }, 1000);
}

function stopTimer() {
  clearInterval(countdown);
  isRunning = false;
  timerDisplay.textContent = "25:00";
}
