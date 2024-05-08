let displayValue = '0';
let pendingValue = '';
let operator = '';
let shouldResetDisplay = false;

function updateDisplay() {
    const display = document.getElementById('display');
    display.value = displayValue;
}

function appendNumber(num) {
    if (displayValue === '0' || shouldResetDisplay) {
        displayValue = num;
        shouldResetDisplay = false;
    } else {
        displayValue += num;
    }
    updateDisplay();
}

function appendOperator(op) {
    if (operator) {
        calculate();
    }
    pendingValue = displayValue;
    operator = op;
    shouldResetDisplay = true;
}

function appendDecimal() {
    if (!displayValue.includes('.')) {
        displayValue += '.';
        updateDisplay();
    }
}

function clearDisplay() {
    displayValue = '0';
    pendingValue = '';
    operator = '';
    shouldResetDisplay = false;
    updateDisplay();
}

function calculate() {
    const currentValue = parseFloat(displayValue);
    const pendingNum = parseFloat(pendingValue);
    let result;

    switch (operator) {
        case '+':
            result = pendingNum + currentValue;
            break;
        case '-':
            result = pendingNum - currentValue;
            break;
        case '*':
            result = pendingNum * currentValue;
            break;
        case '/':
            result = pendingNum / currentValue;
            break;
        default:
            return;
    }

    displayValue = result.toString();
    pendingValue = '';
    operator = '';
    shouldResetDisplay = true;
    updateDisplay();
}

updateDisplay();
