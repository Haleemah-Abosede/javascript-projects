const Day = document.querySelector(".day");
const Hour = document.querySelector(".Hr");
const Min = document.querySelector(".Min");
const Secs = document.querySelector(".secs");

const newYear = new Date("January 1, 2024 00:00:00").getTime();

function countdown() {
  const today = new Date().getTime();
  let timeBetween = newYear - today;
  let oneMin = 60 * 1000;
  let oneHr = 60 * oneMin;
  let oneDay = 24 * oneHr;

  let makeTwoDigit = (num) => (num < 10 ? ` 0${num} ` : num);

  if (newYear < today) {
    clearInterval(i);
    document.querySelector(
      ".comment"
    ).innerHTML = `<h1>Countdown has expired</h1>`;
  } else {
    let daysLeft = Math.floor(timeBetween / oneDay);
    let hrsLeft = Math.floor((timeBetween % oneDay) / oneHr);
    let minLeft = Math.floor((timeBetween % oneHr) / oneMin);
    let secsLeft = Math.floor((timeBetween % oneMin) / 1000);

    let displayDay = makeTwoDigit(daysLeft);
    let displayHour = makeTwoDigit(hrsLeft);
    let displayMin = makeTwoDigit(minLeft);
    let displaySecs = makeTwoDigit(secsLeft);

    Day.innerHTML = displayDay + "<span> Days </span>";
    Hour.innerHTML = displayHour + " <span>Hours</span>";
    Min.innerHTML = displayMin + "<span> Mins</span>";
    Secs.innerHTML = displaySecs + "<span> Secs</span>";
  }
}
let i = setInterval(countdown, 1000);
countdown();
