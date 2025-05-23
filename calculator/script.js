const display = document.getElementById('output');
const operatorDisplay = document.getElementById('operator-display');

let firstNumber = 0;
let secondNumber = 0;
let operation = '';
let currentStep = 'first';
let shouldClearDisplay = false;

document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;
    
    if (value === 'C') {
      handleClearButton();
    } else if (!isNaN(value) || value === '.') {
      handleNumberButton(value);
    } else if (['+', '-', '*', '/', '%'].includes(value)) {
      handleOperatorButton(value);
    } else if (value === '=') {
      handleEqualsButton();
    }
  });
});

function handleClearButton() {
  display.value = '';
  operatorDisplay.textContent = '';
  firstNumber = 0;
  secondNumber = 0;
  operation = '';
  currentStep = 'first';
  shouldClearDisplay = false;
}

function handleNumberButton(value) {
  if (shouldClearDisplay) {
    display.value = '';
    shouldClearDisplay = false;
  }
  
  display.value += value;
  
  if (currentStep === 'first') {
    firstNumber = Number(display.value);
  } else if (currentStep === 'second') {
    secondNumber = Number(display.value);
    operatorDisplay.textContent = firstNumber + operation + display.value;
  }
}

function handleOperatorButton(value) {
  if (currentStep === 'second') {
    calculateResult();
  }
  
  firstNumber = Number(display.value);
  operation = value;
  operatorDisplay.textContent = display.value + value;
  currentStep = 'second';
  shouldClearDisplay = true;
}

function handleEqualsButton() {
  if (currentStep === 'second') {
    operatorDisplay.textContent = firstNumber + operation + display.value + '=';
  }
  calculateResult();
  shouldClearDisplay = true;
}

function calculateResult() {
  if (currentStep === 'first') {
    secondNumber = firstNumber;
  } else {
    secondNumber = Number(display.value);
  }
  
  let result = 0;
  
  if (operation === '+') {
    result = firstNumber + secondNumber;
  }
  if (operation === '-') {
    result = firstNumber - secondNumber;
  }
  if (operation === '*') {
    result = firstNumber * secondNumber;
  }
  if (operation === '/') {
    result = firstNumber / secondNumber;
  }
  if (operation === '%') {
    result = firstNumber % secondNumber;
  }
  
  display.value = result;
  firstNumber = result;
  currentStep = 'result';
}

display.value = '';
