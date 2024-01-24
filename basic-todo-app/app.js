const mainButton = document.querySelector("main");
function getRandomNumber(maxValue) {
  return Math.floor(Math.random() * maxValue);
}

mainButton.addEventListener("click", () => {
  document.body.style.backgroundColor = `rgb(${getRandomNumber(
    255
  )}, ${getRandomNumber(255)}, ${getRandomNumber(255)})`;
});
