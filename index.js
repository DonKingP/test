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