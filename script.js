let result = document.getElementById('result');

function appendValue(value) {
  result.value += value;
}

function clearResult() {
  result.value = '';
}

function calculateResult() {
  try {
    result.value = eval(result.value); // Use eval for simplicity here, but be cautious in production!
  } catch (error) {
    result.value = 'Error';
  }
}


