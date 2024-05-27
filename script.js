const btnImage = document.querySelectorAll(".btn");
var hideButton = document.querySelector(".hide-button");
var navId = document.querySelector("#nav-id");
var showButton = document.querySelector(".show-button");

hideButton.addEventListener("click", () => {
  hideButton.style = "right: 50%";
  setTimeout(() => {
    navId.style = "left: -100%";
  }, 100);
});

showButton.addEventListener("click", () => {
  navId.style.position = "absolute";
  navId.style = "left: 0";
  hideButton.style = "right: 20px";
  setTimeout(() => {
    navId.style.position = "fixed";
  }, 300);
});

let topButton = document.querySelector(".top-button");
topButton.addEventListener("click", topFunction);

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function disableScrolling() {
  var x = window.scrollX;
  var y = window.scrollY;
  window.onscroll = function () {
    window.scrollTo(x, y);
  };
}

var end = new Date("06/15/2024 2:00 AM");

var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;
var timer;

function showRemaining() {
  var now = new Date();
  var distance = end - now;
  if (distance < 0) {
    clearInterval(timer);
    document.getElementById("countdown").innerHTML = "EXPIRED!";
    return;
  }
  var days = Math.floor(distance / _day);
  var hours = Math.floor((distance % _day) / _hour);
  var minutes = Math.floor((distance % _hour) / _minute);
  var seconds = Math.floor((distance % _minute) / _second);

  document.getElementById("countdown").innerHTML = days + " : ";
  document.getElementById("countdown").innerHTML += hours + " : ";
  document.getElementById("countdown").innerHTML += minutes + " : ";
  document.getElementById("countdown").innerHTML += seconds;
}
timer = setInterval(showRemaining, 1000);

var header = document.querySelector("#header");
header.classList.add("fixed");

if (window.scrollY == 0) {
  header.transition = "none";
}

window.addEventListener("scroll", () => {
  if (window.scrollY >= 70 || window.scrollY == 0) {
    setTimeout(() => {
      header.classList.add("fixed");
    }, 200);
  } else {
    header.classList.remove("fixed");
  }
});
