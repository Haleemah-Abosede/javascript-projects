const displayDay = document.querySelector(".day");
const displayClock = document.querySelector(".time");

function ShowTime() {
  let todayTime = new Date();

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = daysOfWeek[todayTime.getDay()];

  let hour = todayTime.getHours();
  let mins = todayTime.getMinutes();
  let secs = todayTime.getSeconds();
  dayTime = "AM";

  if (hour >= 12) {
    if (hour > 12) hour -= 12;
    dayTime = "PM";
  } else if (hour == 0) {
    dayTime = "AM";
  }

  hour = hour < 10 ? "0" + hour : hour;
  mins = mins < 10 ? "0" + mins : mins;
  secs = secs < 10 ? "0" + secs : secs;

  let currentTime = hour + " : " + mins + " : " + secs + " " + dayTime;

  displayClock.innerHTML = currentTime;
  displayDay.innerHTML = day + ",";
}

setInterval(ShowTime, 1000);
ShowTime();
