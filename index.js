const switchButton = document.querySelector("#switch-button");

function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");
}

switchButton.addEventListener("click", toggleMode);
