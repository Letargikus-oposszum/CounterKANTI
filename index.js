let counter = 0;
const counterDisplay = document.getElementById("counterDisplay");

function updateDisplay() {
  counterDisplay.textContent = counter;
}

function increment() {
  counter++;
  updateDisplay();
}
function decrement() {
  counter--;
  updateDisplay();
}
function incrementTen() {
  counter += 10;
  updateDisplay();
}
function decrementTen() {
  counter -= 10;
  updateDisplay();
}
