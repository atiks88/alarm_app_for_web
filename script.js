const hh = document.getElementById("hoursInput");
const mm = document.getElementById("minutesInput");
const ss = document.getElementById("secondsInput");
const timerstart = document.getElementById("timerstart");
const audio = document.getElementById("audio");

const section3 = document.getElementById("Youhavenotimer");

function setBtn(event) {
  section3.style.display = "none";
  const timer = document.createElement("div");
  timer.id = "timer";
  timerstart.appendChild(timer);

  //time left  ka  code
  const timeLeft = document.createElement("div");
  timeLeft.id = "timeLeft";
  timer.appendChild(timeLeft);
  timeLeft.innerText = "Time Left :";

  //hour minut and second ka code
  const hour = document.createElement("div");
  const minute = document.createElement("div");
  const second = document.createElement("div");
  const label1 = document.createElement("div");
  const label2 = document.createElement("div");

  label1.innerText = ":";
  label2.innerText = ":";

  hour.innerText = "00";
  hour.id = "hour";

  minute.innerText = "00";
  minute.id = "minute";

  second.innerText = "00";
  second.id = "second";

  timer.appendChild(hour);
  timer.appendChild(label1);
  timer.appendChild(minute);
  timer.appendChild(label2);
  timer.appendChild(second);

  var deletebtn = document.createElement("button");
  deletebtn.id = "deletebtn";
  deletebtn.innerText = "Delete";
  timer.appendChild(deletebtn);

  // Delete button code
  deletebtn.addEventListener("click", function (event) {
    var targetElement = event.target;
    targetElement.parentNode.remove();
  });

  let Timerhours = parseInt(hh.value) || 0;
  let Timerminutes = parseInt(mm.value) || 0;
  let Timerseconds = parseInt(ss.value) || 0;

  let totalTimeInSec = Timerhours * 3600 + Timerminutes * 60 + Timerseconds;

// timer is up ka code 

let timerisUP = document.createElement("div");
timerisUP.id="timerUP";
timerisUP.innerText="Timer Is Up !";
// const timerUP = document.getElementById("timerUP");
timerisUP.style.paddingLeft = "6ch";
timerisUP.style.paddingRight = "6ch";

  const intervalId = setInterval(function () {
    if (totalTimeInSec > 0) {
      totalTimeInSec = totalTimeInSec - 1;

      hour.innerText = Math.floor(totalTimeInSec / 3600);
      minute.innerText = Math.floor((totalTimeInSec % 3600) / 60);
      second.innerText = totalTimeInSec % 60;
    } else {
      clearInterval(intervalId);

      hour.style.display = "none";
      label1.style.display = "none";
      minute.style.display = "none";
      label2.style.display = "none";
      second.style.display = "none";
      timeLeft.style.display = "none";
      deletebtn.innerText = "Stop!";
      deletebtn.style.backgroundColor= "#34344A";
      deletebtn.style.color="white";
      audio.play();
      timer.insertBefore(timerisUP, timer.firstChild);
      timer.style.backgroundColor="#F0F757";
      timer.style.color = "#34344A";
      timer.style.fontSize = "3vw";
    }
  }, 1000);
}
