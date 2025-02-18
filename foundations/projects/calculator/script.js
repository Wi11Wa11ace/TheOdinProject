function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, b, op) {
    switch(op) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case 'x':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            return 0;
    }
}

function updateDisplay(num) {
    if(document.querySelector(".display-content").textContent === '0' && document.querySelector(".display-content").textContent.length === 1) {
        document.querySelector(".display-content").textContent = num;
        return;
    }

    document.querySelector(".display-content").textContent += num;
}

function clearDisplay() {
    document.querySelector(".display-content").textContent = 0;
}

function operatorButton(op) {
    num1 = parseFloat(document.querySelector(".display-content").textContent);
    clearDisplay();
    return num1, op;
}

let num1, num2, operator;

// Number buttons (and clear)

document.querySelector("#clear").addEventListener("click", () => {
    clearDisplay();
    num1 = 0, num2 = 0;
});

document.querySelector("#zero").addEventListener("click", () => {
    updateDisplay('0');
});

document.querySelector("#one").addEventListener("click", () => {
    updateDisplay('1');
});

document.querySelector("#two").addEventListener("click", () => {
    updateDisplay('2');
});

document.querySelector("#three").addEventListener("click", () => {
    updateDisplay('3');
});

document.querySelector("#four").addEventListener("click", () => {
    updateDisplay('4');
});

document.querySelector("#five").addEventListener("click", () => {
    updateDisplay('5');
});

document.querySelector("#six").addEventListener("click", () => {
    updateDisplay('6');
});

document.querySelector("#seven").addEventListener("click", () => {
    updateDisplay('7');
});

document.querySelector("#eight").addEventListener("click", () => {
    updateDisplay('8');
});

document.querySelector("#nine").addEventListener("click", () => {
    updateDisplay('9');
});

// Operator buttons

document.querySelector("#plus").addEventListener("click", () => {
    num1, operator = operatorButton('+');
});

document.querySelector("#minus").addEventListener("click", () => {
    num1, operator = operatorButton('-');
});

document.querySelector("#times").addEventListener("click", () => {
    num1, operator = operatorButton('x');
});

document.querySelector("#divide").addEventListener("click", () => {
    num1, operator = operatorButton('/');
});

document.querySelector("#equals").addEventListener("click", () => {
    if(!num1 || !operator) return;

    num2 = parseFloat(document.querySelector(".display-content").textContent);
    document.querySelector(".display-content").textContent = operate(num1, num2, operator);
});