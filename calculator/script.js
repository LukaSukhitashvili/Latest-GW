const display = document.getElementById('output');

let firstNumber = 0;
let secondNumber = 0;
let operation = '';
let currentStep = 'first';

document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;
    
    if (value === 'C') {
      display.value = '';
      firstNumber = 0;
      secondNumber = 0;
      operation = '';
      currentStep = 'first';
    }
    
    if (!isNaN(value) || value === '.') {
      if (currentStep === 'result' || display.value === '0') {
        display.value = '';
        currentStep = 'first';
      }
      
      display.value += value;
      
      if (currentStep === 'first') {
        firstNumber = Number(display.value);
      } else if (currentStep === 'second') {
        secondNumber = Number(display.value);
      }
    }
    
    if (['+', '-', '*', '/', '%'].includes(value)) {
      if (currentStep === 'second') {
        calculateResult();
      }
      
      operation = value;
      currentStep = 'second';
      display.value = '';
    }
    
    if (value === '=') {
      calculateResult();
    }
  });
});

function calculateResult() {
  if (currentStep === 'first') {
    secondNumber = firstNumber;
  } else {
    secondNumber = Number(display.value);
  }
  
  let result = 0;
  
  if (operation === '+') result = firstNumber + secondNumber;
  if (operation === '-') result = firstNumber - secondNumber;
  if (operation === '*') result = firstNumber * secondNumber;
  if (operation === '/') result = firstNumber / secondNumber;
  if (operation === '%') result = firstNumber % secondNumber;
  
  display.value = result;
  firstNumber = result;
  currentStep = 'result';
}

display.value = '';