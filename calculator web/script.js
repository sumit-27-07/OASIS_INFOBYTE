let screen = document.getElementById('screen');

function appendToScreen(value) {
  screen.value += value;
}

function clearScreen() {
  screen.value = '';
}

function deleteCharacter() {
  screen.value = screen.value.slice(0, -1);
}

function calculate() {
  try {
    screen.value = eval(screen.value);
  } catch (error) {
    screen.value
  }
}