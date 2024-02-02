//suyog javascript for home page
const topBar = document.querySelector(".top");
const cross = document.querySelector(".cross");

cross.addEventListener("click", function () {
  topBar.style.display = "none";
});

const slider = document.querySelector(".slider");
const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");
var sectionIndex = 0;
rightArrow.addEventListener("click", function () {
  sectionIndex = sectionIndex < 3 ? sectionIndex + 1 : 3;
  slider.style.transform = "translate(" + sectionIndex * -25 + "%)";
});
leftArrow.addEventListener("click", function () {
  sectionIndex = sectionIndex > 0 ? sectionIndex - 1 : 0;
  slider.style.transform = "translate(" + sectionIndex * -25 + "%)";
});
//  count down js starts
let dayBox = document.getElementById("day-box");
let hourBox = document.getElementById("hour-box");
let minBox = document.getElementById("min-box");
let secBox = document.getElementById("sec-box");
let endDate = new Date(2024, 1, 5, 0);
let endTime = endDate.getTime();

function countdown() {
  let todayDate = new Date();
  let todayTime = todayDate.getTime();
  let remainingTime = endTime - todayTime;
  let oneMin = 60 * 1000;
  let oneHr = 60 * oneMin;
  let oneDay = 24 * oneHr;
  let addZeroes = (num) => (num < 10 ? `0${num}` : num);

  if (endTime < todayDate) {
    clearInterval(i);
    document.querySelector(
      ".timer-text"
    ).innerHTML = `<h1>Countdown has expired!</h1>`;
  } else {
    let daysleft = Math.floor(remainingTime / oneDay);
    let hrsLeft = Math.floor((remainingTime % oneDay) / oneHr);
    let minutesLeft = Math.floor((remainingTime % oneHr) / oneMin);
    let secsLeft = Math.floor((remainingTime % oneMin) / 1000);
    dayBox.textContent = addZeroes(daysleft);
    hourBox.textContent = addZeroes(hrsLeft);
    minBox.textContent = addZeroes(minutesLeft);
    secBox.textContent = addZeroes(secsLeft);
  }
}
let i = setInterval(countdown, 1000);
countdown();
//  count down js ends

// ad js starts

window.addEventListener("scroll", function () {
  let sideAd = document.getElementById("slide-popup");
  let topButton = document.querySelector(".to-top-btn");
  let scrollY = window.scrollY || window.pageXOffset;

  if (scrollY > 500) {
    sideAd.style.left = "-30px";
    sideAd.style.bottom = "-30px";
    sideAd.style.visibility = "visible";
  } else {
    sideAd.style.left = "-400px";
  }
  if (scrollY > 1500) {
    topButton.style.visibility = "visible";
    topButton.style.opacity = "1";
  } else {
    topButton.style.visibility = "hidden";
    topButton.style.opacity = "0";
  }
});
// ad js ends

let crossPopup = document.querySelector(".cross-popup");
let sideAd = document.getElementById("slide-popup");

crossPopup.addEventListener("click", function () {
  sideAd.style.display = "none";
});

let topButton = document.querySelector(".to-top-btn");

topButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

let scrolldownbtn = document.querySelectorAll(".scroll-down");
scrolldownbtn.forEach((button) => {
  button.addEventListener("click", function () {
    window.scrollTo({
      top: 2480,
      behavior: "smooth",
    });
  });
});

// header js starts
window.addEventListener("scroll", function () {
  let headerBar = document.querySelector("header");
  let slidedown = document.querySelector(".slide-down-navbar");

  let scrollY = window.scrollY || window.pageYOffset;
  if (scrollY > 200) {
    headerBar.classList.add("slide-down-navbar");
    headerBar.classList.remove("header-default");
  } else {
    headerBar.classList.remove("slide-down-navbar");
    headerBar.classList.add("header-default");
  }
});
// header js ends
