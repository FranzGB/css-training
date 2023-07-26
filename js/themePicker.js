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
  if (themePickerMenu && themePickerButton) {
    themePickerMenu.classList.toggle("theme__menu--active");
    themePickerButton.classList.toggle("theme__button--inactive");
  }
}

if (themePickerButton) {
  themePickerButton.addEventListener("click", () => {
    toggleMenus();
  });
}

if (themePickerCloseButton) {
  themePickerCloseButton.addEventListener("click", () => {
    toggleMenus();
  });
}

if (redThemeButton) {
  redThemeButton.addEventListener("click", () => {
    setTheme("red");
    return toggleMenus();
  });
}

if (blueThemeButton) {
  blueThemeButton.addEventListener("click", () => {
    setTheme("blue");
    return toggleMenus();
  });
}

if (greenThemeButton) {
  greenThemeButton.addEventListener("click", () => {
    setTheme("green");
    return toggleMenus();
  });
}

if (darkThemeButton) {
  darkThemeButton.addEventListener("click", () => {
    setTheme("dark");
    return toggleMenus();
  });
}
