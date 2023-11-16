const themeButton = document.getElementById("theme-button");
const navbar = document.querySelector(".navbar");
const header = document.getElementsByTagName("header");
let isDarkMode = false;
const toggleDarkMode = () => {
  isDarkMode = !isDarkMode;
  if (isDarkMode) {
    document.body.classList.add("dark-mode");
    navbar.classList.add("dark-mode");
    themeButton.textContent = "Light Mode";
    header.className += " dark-mode";

  } else {
    document.body.classList.remove("dark-mode");
    navbar.classList.remove("dark-mode");
    themeButton.textContent = "Dark Mode";
    header.className.replace("dark-mode", "");

  }
};
themeButton.addEventListener("click", toggleDarkMode);

const sun = document.getElementById("sun");
const beach = document.getElementById("beach");
const fire = document.getElementById("fire");
const meteor = document.getElementById("meteor");
const welcome = document.getElementById("welcome");

let rates = {
  sun: 1,
  beach: .05,
  fire: .15,
  meteor: 1,
  welcome: 1
};
const handleScroll = () => {
  let scrollDistance = window.scrollY;

  sun.style.top = -scrollDistance * rates.sun + "px";
  beach.style.top = -scrollDistance * rates.beach + "px";
  fire.style.top = scrollDistance * rates.fire + "px";
  meteor.style.left = -scrollDistance * rates.meteor + "px";
  welcome.style.top = scrollDistance * rates.welcome + "px";

};
window.addEventListener('scroll', handleScroll);

let animation = {
  revealDistance: 150,
  initialOptacity: 0,
  transitionDelay: 0,
  transitionDuration: "2s",
  transitionProperty: "all",
  transitionTimingFunction: "ease"

};

/* index.js */
let revealableContainers = document.querySelectorAll(".revealable");

let reveal = () => {
  for (let i = 0; i < revealableContainers.length; i++) {
    let windowHeight = window.innerHeight;
    let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;

    if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
      revealableContainers[i].classList.add("active");
    } else {
      revealableContainers[i].classList.remove("active");
    }
  }
};

window.addEventListener('scroll', reveal);
