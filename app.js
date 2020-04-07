
// timer API - built in Library in browser.

let startBtn = document.querySelector(".start-btn");
let pauseBtn = document.querySelector(".pause-btn");
let resetBtn = document.querySelector(".reset-btn");
let displayTimer = document.querySelector(".display-timer");

let timerId = null;
let seconds = 0;

let tick = function () {
    seconds++;
    displayTimer.textContent = seconds;
}


let handleStart = function () {
    if (timerId) {
        return;
    }
    timerId = setInterval(tick, 1000);
}

let handleReset = function () {
    clearInterval(timerId);
    displayTimer.textContent = 0;
    seconds = 0;
    timerId = null;
}

let handlePause = function () {
    clearInterval(timerId);
    timerId = null;
};


startBtn.addEventListener('click', handleStart);
pauseBtn.addEventListener('click', handlePause)
resetBtn.addEventListener('click', handleReset)
