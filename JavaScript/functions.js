//variáveis

let countMont1 = 0;
let countPass1 = 0;
let countRas1 = 0;

let countVan1 = 0;
let countPun1 = 0;

let countMont2 = 0;
let countPass2 = 0;
let countRas2 = 0;

let countVan2 = 0;
let countPun2 = 0;


const addNumber = (number, add) => {
    return number+add;
}

const subtractNumber = (number, subtract) => {
    if (number <= 0){
        return 0
    }
    return number-subtract;
}

   //Atleta 1

//Montada

document.getElementById("amont").onclick = function() {
    countMont1 = addNumber(countMont1, 4)
    document.getElementById("pmont").innerHTML = countMont1;
    updateGlobalScore();
}

document.getElementById("dmont").onclick = function() {
    countMont1 = subtractNumber(countMont1, 4)
    document.getElementById("pmont").innerHTML = countMont1;
    updateGlobalScore();
}


//Passagem

document.getElementById("apass").onclick = function() {
    countPass1 = addNumber(countPass1, 3)
    document.getElementById("ppass").innerHTML = countPass1;
    updateGlobalScore();
}

document.getElementById("dpass").onclick = function() {
    countPass1 = subtractNumber(countPass1, 3)
    document.getElementById("ppass").innerHTML = countPass1;
    updateGlobalScore();
}


//Raspagem

document.getElementById("aras").onclick = function() {
    countRas1 = addNumber(countRas1, 2)
    document.getElementById("pras").innerHTML = countRas1;
    updateGlobalScore();
}

document.getElementById("dras").onclick = function() {
    countRas1 = subtractNumber(countRas1, 2)
    document.getElementById("pras").innerHTML = countRas1;
    updateGlobalScore();
}


//Vantagem


document.getElementById("avan").onclick = function() {
    countVan1 = addNumber(countVan1, 1)
    document.getElementById("pvan").innerHTML = countVan1;
    updateGlobalScore();
}

document.getElementById("dvan").onclick = function() {
    countVan1 = subtractNumber(countVan1, 1)
    document.getElementById("pvan").innerHTML = countVan1;
    updateGlobalScore();
}


//Punição

document.getElementById("apun").onclick = function() {
    countPun1 = addNumber(countPun1, 1)
    document.getElementById("ppun").innerHTML = countPun1;
    updateGlobalScore();
}

document.getElementById("dpun").onclick = function() {
    countPun1 = subtractNumber(countPun1, 1)
    document.getElementById("ppun").innerHTML = countPun1;
    updateGlobalScore();
}




   //Atleta 2

//Montada

document.getElementById("amont2").onclick = function() {
    countMont2 = addNumber(countMont2, 4)
    document.getElementById("pmont2").innerHTML = countMont2;
    updateGlobalScore();
}

document.getElementById("dmont2").onclick = function() {
    countMont2 = subtractNumber(countMont2, 4);
    document.getElementById("pmont2").innerHTML = countMont2;
    updateGlobalScore();
}


//Passagem

document.getElementById("apass2").onclick = function() {
    countPass2 = addNumber(countPass2, 3)
    document.getElementById("ppass2").innerHTML = countPass2;
    updateGlobalScore();
}

document.getElementById("dpass2").onclick = function() {
    countPass2 = subtractNumber(countPass2, 3)
    document.getElementById("ppass2").innerHTML = countPass2;
    updateGlobalScore();
}


//Raspagem

document.getElementById("aras2").onclick = function() {
    countRas2 = addNumber(countRas2, 2)
    document.getElementById("pras2").innerHTML = countRas2;
    updateGlobalScore();
}

document.getElementById("dras2").onclick = function() {
    countRas2 = subtractNumber(countRas2, 2);
    document.getElementById("pras2").innerHTML = countRas2;
    updateGlobalScore();
}


//Vantagem

document.getElementById("avan2").onclick = function() {
    countVan2 = addNumber(countVan2, 1)
    document.getElementById("pvan2").innerHTML = countVan2;
    updateGlobalScore();
}

document.getElementById("dvan2").onclick = function() {
    countVan2 = subtractNumber(countVan2, 1)
    document.getElementById("pvan2").innerHTML = countVan2;
    updateGlobalScore();
}


//Punição

document.getElementById("apun2").onclick = function() {
    countPun2 = addNumber(countPun2, 1)
    document.getElementById("ppun2").innerHTML = countPun2;
    updateGlobalScore();
}

document.getElementById("dpun2").onclick = function() {
    countPun2 = subtractNumber(countPun2, 1);
    document.getElementById("ppun2").innerHTML = countPun2;
    updateGlobalScore();
}



//Placar Global

const updateGlobalScore = () => {

    let scoreAtleta1 = countMont1 + countPass1 + countRas1;
    let scoreAtleta2 = countMont2 + countPass2 + countRas2;

    scoreAtleta1 += Math.floor(countPun2 / 3) * 2;
    scoreAtleta2 += Math.floor(countPun1 / 3) * 2;
    
    document.getElementById("pont1").innerHTML = scoreAtleta1;
    document.getElementById("pont2").innerHTML = scoreAtleta2;
}





//Timer

const btnStart = document.getElementById('start');
const btnPauseResume = document.getElementById('pauseResume');
const btnRestart = document.getElementById('restart');
let intervalView;
let intervalFloating;
let duration;
let remainingTimeView = 0;
let remainingTimeFloating = 0;
let isPausedView = false;
let isPausedFloating = false;
let displayView;
let displayFloating;

btnStart.addEventListener('click', () => {
  const minutes = document.getElementById('minute');
  const seconds = document.getElementById('second');

  duration = (parseInt(minutes.value) * 60) + parseInt(seconds.value);

  displayView = document.getElementById('timer');
  displayFloating = document.getElementById('timer-floating');

  startTimer('view', displayView, intervalView, remainingTimeView);
  startTimer('floating', displayFloating, intervalFloating, remainingTimeFloating);

  btnStart.disabled = true;
  
  togglePauseResumeButton('view');
  togglePauseResumeButton('floating');

 
});

btnPauseResume.addEventListener('click', () => {
  togglePauseResume('view', displayView, intervalView, remainingTimeView, isPausedView);
  togglePauseResume('floating', displayFloating, intervalFloating, remainingTimeFloating, isPausedFloating);
});

function startTimer(timerType, display, remainingTime) {
    let timerValue = remainingTime || duration;
  
    const interval = setInterval(() => {
      let minutes = Math.floor(timerValue / 60);
      let seconds = Math.floor(timerValue % 60);
      updateDisplay(display, minutes, seconds);
  
      if ((timerType === 'view' && !isPausedView) || (timerType === 'floating' && !isPausedFloating)) {
        timerValue -= 1;
      }
  
      if (timerValue < 0) {
        clearInterval(interval);
        btnStart.disabled = false;
      } else {
        if (timerType === 'view') {
          remainingTimeView = timerValue;
        } else if (timerType === 'floating') {
          remainingTimeFloating = timerValue;
        }
      }
    }, 1000);
  
    return interval;  
  }

  btnRestart.addEventListener('click', () => {
    location.reload();
});
  
  function togglePauseResume(timerType, display, interval, isPaused) {
    if (isPaused) {
      clearInterval(interval);
      remainingTime = timerType === 'view' ? remainingTimeView : remainingTimeFloating;
      updateDisplay(display, Math.floor(remainingTime / 60), Math.floor(remainingTime % 60));
      if (timerType === 'view') {
        intervalView = startTimer(timerType, display, remainingTime);
      } else if (timerType === 'floating') {
        intervalFloating = startTimer(timerType, display, remainingTime);
      }
    } else {
      clearInterval(interval);
      if (timerType === 'view') {
        remainingTimeView = remainingTime;
      } else if (timerType === 'floating') {
        remainingTimeFloating = remainingTime;
      }
    }
  
    if (timerType === 'view') {
      isPausedView = !isPausedView;
      togglePauseResumeButton('view');
    } else if (timerType === 'floating') {
      isPausedFloating = !isPausedFloating;
      togglePauseResumeButton('floating');
    }
  }
  
  

function togglePauseResumeButton(timerType) {
  const iconPauseResume = document.getElementById('iconPauseResume');

  if (timerType === 'view') {
    if (isPausedView) {
      iconPauseResume.classList.remove('bx-pause');
      iconPauseResume.classList.add('bx-play');
    } else {
      iconPauseResume.classList.remove('bx-play');
      iconPauseResume.classList.add('bx-pause');
    }
  } else if (timerType === 'floating') {
    const iconPauseResumeFloating = document.getElementById('iconPauseResume-floating');
    if (isPausedFloating) {
      iconPauseResumeFloating.classList.remove('bx-pause');
      iconPauseResumeFloating.classList.add('bx-play');
    } else {
      iconPauseResumeFloating.classList.remove('bx-play');
      iconPauseResumeFloating.classList.add('bx-pause');
    }
  }
}

function updateDisplay(display, minutes, seconds) {
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  display.innerHTML = `${minutes}:${seconds}`;
}
