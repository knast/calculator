function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

function subtract(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
}
function operate(operator,firstNumber, secondNumber) {
    let sum;
    let subtraction;
    let multiplication;
    let divideNum;
    if(operator == '+') {
        sum = add(firstNumber,secondNumber);
        return sum;
    } else if(operator == '-') {
        subtraction = subtract(firstNumber,secondNumber);
        return subtraction;
    } else if(operator == '*') {
        multiplication = multiply(firstNumber,secondNumber);
        return multiplication;
    } else if(operator == '/') {
        divideNum = divide(firstNumber, secondNumber);
        return divideNum;
    }
}

const display = document.querySelector('.display-number');


const oneBtn = document.querySelector('.one');
const twoBtn = document.querySelector('.two');
const threeBtn = document.querySelector('.three');
const fourBtn = document.querySelector('.four');
const fiveBtn = document.querySelector('.five');
const sixBtn = document.querySelector('.six');
const sevenBtn = document.querySelector('.seven');
const eightBtn = document.querySelector('.eight');
const nineBtn = document.querySelector('.nine');

const clearBtn = document.querySelector('.clear');
const equalsBtn = document.querySelector('.equals');

const plusBtn = document.querySelector('.plus');
const subtractBtn = document.querySelector('.subtract');
const multiplyBtn = document.querySelector('.multiply');
const divideBtn = document.querySelector('.divide');

const calcHistory = document.querySelector('.calc-history');

const calculator = {
    firstNum: 0,
    secondNum: 0,
    operatorSign: 'none',
    waitingForSecondOperand: false,
    didTheCalc: false,
}

let forFirstNum = [];
let forSecondNum = [];
let forFirstNumStr;
let forSecondNumStr;
let forSecondOperand = calculator.waitingForSecondOperand;
let evaluation;


oneBtn.addEventListener('click', () => {
    if(forSecondOperand === false) {
        forFirstNum.push(1);
        forFirstNumStr = forFirstNum.join('');
        display.textContent = forFirstNumStr;

    } else if (forSecondOperand === true) {
        forSecondNum.push(1);
        forSecondNumStr = forSecondNum.join('');
        display.textContent = forSecondNumStr;
    }
    
})

twoBtn.addEventListener('click', () => {
    if(forSecondOperand === false) {
        forFirstNum.push(2);
        forFirstNumStr = forFirstNum.join('');
        display.textContent = forFirstNumStr;
    } else if(forSecondOperand === true) {
        forSecondNum.push(2);
        forSecondNumStr = forSecondNum.join('');
        display.textContent = forSecondNumStr;
    }
})

threeBtn.addEventListener('click', () => {
    if(forSecondOperand === false) {
        forFirstNum.push(3);
        forFirstNumStr = forFirstNum.join('');
        display.textContent = forFirstNumStr;
    } else if (forSecondOperand === true) {
        forSecondNum.push(3);
        forSecondNumStr = forSecondNum.join('');
        display.textContent = forSecondNumStr;
    }
})

fourBtn.addEventListener('click', () => {
    if(forSecondOperand === false) {
        forFirstNum.push(4);
        forFirstNumStr = forFirstNum.join('');
        display.textContent = forFirstNumStr;
    } else if (forSecondOperand === true) {
        forSecondNum.push(4);
        forSecondNumStr = forSecondNum.join('');
        display.textContent = forSecondNumStr;
    }
})

fiveBtn.addEventListener('click', () => {
    if(forSecondOperand === false) {
        forFirstNum.push(5);
        forFirstNumStr = forFirstNum.join('');
        display.textContent = forFirstNumStr;
    } else if (forSecondOperand === true) {
        forSecondNum.push(5);
        forSecondNumStr = forSecondNum.join('');
        display.textContent = forSecondNumStr;
    }
})

sixBtn.addEventListener('click', () => {
    if(forSecondOperand === false) {
        forFirstNum.push(6);
        forFirstNumStr = forFirstNum.join('');
        display.textContent = forFirstNumStr;
    } else if (forSecondOperand === true) {
        forSecondNum.push(6);
        forSecondNumStr = forSecondNum.join('');
        display.textContent = forSecondNumStr;
    }
})

sevenBtn.addEventListener('click', () => {
    if(forSecondOperand === false) {
        forFirstNum.push(7);
        forFirstNumStr = forFirstNum.join('');
        display.textContent = forFirstNumStr;
    } else if (forSecondOperand === true) {
        forSecondNum.push(7);
        forSecondNumStr = forSecondNum.join('');
        display.textContent = forSecondNumStr;
    }
})

eightBtn.addEventListener('click', () => {
    if(forSecondOperand === false) {
        forFirstNum.push(8);
        forFirstNumStr = forFirstNum.join('');
        display.textContent = forFirstNumStr;
    } else if (forSecondOperand === true) {
        forSecondNum.push(8);
        forSecondNumStr = forSecondNum.join('');
        display.textContent = forSecondNumStr;
    }
})

nineBtn.addEventListener('click', () => {
    if(forSecondOperand === false) {
        forFirstNum.push(9);
        forFirstNumStr = forFirstNum.join('');
        display.textContent = forFirstNumStr;
    } else if (forSecondOperand === true) {
        forSecondNum.push(9);
        forSecondNumStr = forSecondNum.join('');
        display.textContent = forSecondNumStr;
    }
})



plusBtn.addEventListener('click', () => {
    display.textContent = '';
    calculator.firstNum = Number(forFirstNumStr);
    calculator.operatorSign = '+';
    forFirstNum = [];
    forSecondOperand = true;
    if(didTheCalc === 'true') {
        calculator.operatorSign = '+';
        calculator.firstNum = Number(evaluation);
        forSecondOperand = true;
        
    }

    
})

subtractBtn.addEventListener('click', () => {
    display.textContent = '';
    calculator.firstNum = Number(forFirstNumStr);
    calculator.operatorSign = '-';
    forFirstNum = [];
    forSecondOperand = true;
    if(didTheCalc === 'true') {
        calculator.operatorSign = '-';
        calculator.firstNum = Number(evaluation);
        forSecondOperand = true;
        
    }
})

multiplyBtn.addEventListener('click', () => {
    display.textContent = '';
    calculator.firstNum = Number(forFirstNumStr);
    calculator.operatorSign = '*';
    forFirstNum = [];
    forSecondOperand = true;
    if(didTheCalc === 'true') {
        calculator.operatorSign = '*';
        calculator.firstNum = Number(evaluation);
        forSecondOperand = true;
        
    }
})

divideBtn.addEventListener('click', () => {
    display.textContent = '';
    calculator.firstNum = Number(forFirstNumStr);
    calculator.operatorSign = '/';
    forFirstNum = [];
    forSecondOperand = true;
    if(didTheCalc === 'true') {
        calculator.operatorSign = '/';
        calculator.firstNum = Number(evaluation);
        forSecondOperand = true;
        
    }
})

clearBtn.addEventListener('click', () => {
    forFirstNum = [];
    forSecondNum = [];
    calculator.firstNum = 0;
    calculator.secondNum = 0;
    display.textContent = ''
    calcHistory.textContent = ``;
    evaluation = 0;
})

equalsBtn.addEventListener('click', () => {
    calculator.secondNum = Number(forSecondNumStr);
    evaluation = operate(calculator.operatorSign, calculator.firstNum, calculator.secondNum);
    calculator.didTheCalc = true;
    forSecondOperand = false;
    forFirstNum = [];
    forSecondNum = [];
    forFirstNumStr = evaluation.toString();
    display.textContent = forFirstNumStr;
    
    
    
})










