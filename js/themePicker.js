const themePickerButton = document.querySelector(".theme__button");
const themePickerMenu = document.querySelector(".theme__menu");
const themePickerCloseButton = document.querySelector(".theme__close");
const redThemeButton = document.getElementById("red-theme-button");
const blueThemeButton = document.getElementById("blue-theme-button");
const greenThemeButton = document.getElementById("green-theme-button");
const darkThemeButton = document.getElementById("dark-theme-button");

function isOn(themeName) {
  return document.documentElement.getAttribute("data-theme") === themeName;
}

function setTheme(themeName) {
  if (!isOn(themeName)) {
    return document.documentElement.setAttribute("data-theme", themeName);
  }
  return document.documentElement.setAttribute("data-theme", "main");
}

function toggleMenus() {
  themePickerMenu.classList.toggle("theme__menu--active");
  themePickerButton.classList.toggle("theme__button--inactive");
}

themePickerButton.addEventListener("click", () => {
  toggleMenus();
});

themePickerCloseButton.addEventListener("click", () => {
  toggleMenus();
});

redThemeButton.addEventListener("click", () => {
  setTheme("red");
  return toggleMenus();
});

blueThemeButton.addEventListener("click", () => {
  setTheme("blue");
  return toggleMenus();
});

greenThemeButton.addEventListener("click", () => {
  setTheme("green");
  return toggleMenus();
});

darkThemeButton.addEventListener("click", () => {
  setTheme("dark");
  return toggleMenus();
});
