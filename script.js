let timer;
let workTime=25*60;
let isRunning = false;
let currentTime = workTime;

function updateDisplayTime(minutes, seconds){
  document.getElementById('timer').textContent =
  
  //converts the minutes and seconds to a string
  `${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`;
}

function startTimer(){
  if(isRunning) return;
  isRunning=true;
  timer=setInterval(()=>{
    if (currentTime<=0){
      clearInterval(timer);
      alert('Time is up!Take a break.');
      resetTimer();
    }else{
      currentTime--;
      //converts the current time in seconds to minute and round them up
      const minutes = Math.floor(currentTime/60);
      const seconds = currentTime%60;
      updateDisplayTime(minutes,seconds)
    }

  },1000);

}

function resetTimer(){
  console.log('reset button');
  clearInterval(timer);
  isRunning=false;
  currentTime=workTime;
  updateDisplayTime(25,0);
}