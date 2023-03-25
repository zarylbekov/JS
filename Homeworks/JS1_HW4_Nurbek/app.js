const counts = document.querySelector(".count");
const buttonIncrease = document.querySelector(".increase");
const buttonReset = document.querySelector(".reset");
const buttonDecrease = document.querySelector(".decrease");
var count = 0;
function colorText() {
  if (count > 0) {
    counts.style.color = "green";
  } else if (count < 0) {
    counts.style.color = "red";
  } else {
    counts.style.color = "grey";
  }
}
function increase() {
  count++;
  counts.textContent = count;
  colorText();
}
function reset() {
  count = 0;
  counts.textContent = count;
  colorText();
}
function decrease() {
  count--;
  counts.textContent = count;
  colorText();
}
buttonIncrease.addEventListener("click", increase);
buttonReset.addEventListener("click", reset);
buttonDecrease.addEventListener("click", decrease);