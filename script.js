const timeleft = document.getElementById('time-left');

const startstopbtn = document.getElementById('start-stop-btn');

let currentTimerId = null;
let _studyCount = 0;
let _breakCount = 0;

let updateTimerDisplay = (minutes, seconds) => {
    timeleft.textContent = String(minutes).padStart(2, '0') + ":" + String(seconds).padStart(2, '0');
}

let startTimer = (duration) => {
    if (currentTimerId != null) {
        clearInterval(currentTimerId);
    }
    updateTimerDisplay(Math.trunc(duration/60), duration % 60); // immediately start timer
    currentTimerId = setInterval(() => {
        if (duration <= 0) { // handles stopping at 0
            clearInterval(currentTimerId);
            return;
        }
        
        duration--; // after 1s delay, decrement and update
        updateTimerDisplay(Math.trunc(duration/60), duration % 60);
      }, 1000);
    
      
}

const studybtn = document.getElementById('study-btn');
let startStudySession = () => {
    startTimer(1500);
    console.log("Study session started")
    document.getElementById('study-count').textContent = String(++_studyCount);
}
studybtn.addEventListener('click', startStudySession);

const breakbtn = document.getElementById('break-btn');
let startBreakSession = () => {
    startTimer(300);
    console.log("Break session started")
    document.getElementById('break-count').textContent = String(++_breakCount);
}
breakbtn.addEventListener('click', startBreakSession);

