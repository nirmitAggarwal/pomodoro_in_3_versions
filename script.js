let countdown;
let isRunning = false;
let remainingTime = 25 * 60; // Time in seconds
const timerDisplay = document.getElementById("timer");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);

let endTime;

function startTimer() {
  if (isRunning) return;
  isRunning = true;
  endTime = Date.now() + remainingTime * 1000;

  countdown = setInterval(() => {
    const now = Date.now();
    remainingTime = Math.round((endTime - now) / 1000);

    if (remainingTime <= 0) {
      clearInterval(countdown);
      isRunning = false;
      remainingTime = 0;
      alert("Time's up!");
    }

    updateTimerDisplay(remainingTime);
  }, 1000);
}

function stopTimer() {
  clearInterval(countdown);
  isRunning = false;
  remainingTime = 25 * 60; // Reset to initial time
  updateTimerDisplay(remainingTime);
}

function updateTimerDisplay(time) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  timerDisplay.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

document.addEventListener("visibilitychange", () => {
  if (!document.hidden && isRunning) {
    clearInterval(countdown);
    startTimer();
  }
});

updateTimerDisplay(remainingTime);
