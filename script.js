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
    if(firstNumber == 0) {
        return alert('ERROR');
    } else {    
        return firstNumber/secondNumber;
    }
}
function operate(operator,firstNumber, secondNumber) {
    let sum;
    let subtraction;
    let multiplication;
    let divide;
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
        divide = divide(firstNumber, secondNumber);
        return divide;
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

const calculator = {
    firstNum: 0,
    secondNum: 0,
    operatorSign: 'none'
}

let forNumber = [];
let forNumToStr;




oneBtn.addEventListener('click', () => {
    forNumber.push(1);
    forNumToStr = forNumber.join('');
    display.textContent = forNumToStr;
})

twoBtn.addEventListener('click', () => {
    forNumber.push(2);
    forNumToStr = forNumber.join('');
    display.textContent = forNumToStr;
})

threeBtn.addEventListener('click', () => {
    forNumber.push(3);
    forNumToStr = forNumber.join('');
    display.textContent = forNumToStr;
})

fourBtn.addEventListener('click', () => {
    forNumber.push(4);
    forNumToStr = forNumber.join('');
    display.textContent = forNumToStr;
})

fiveBtn.addEventListener('click', () => {
    forNumber.push(5);
    forNumToStr = forNumber.join('');
    display.textContent = forNumToStr;
})

sixBtn.addEventListener('click', () => {
    forNumber.push(6);
    forNumToStr = forNumber.join('');
    display.textContent = forNumToStr;
})

sevenBtn.addEventListener('click', () => {
    forNumber.push(7);
    forNumToStr = forNumber.join('');
    display.textContent = forNumToStr;
})

eightBtn.addEventListener('click', () => {
    forNumber.push(8);
    forNumToStr = forNumber.join('');
    display.textContent = forNumToStr;
})

nineBtn.addEventListener('click', () => {
    forNumber.push(9);
    forNumToStr = forNumber.join('');
    display.textContent = forNumToStr;
})



plusBtn.addEventListener('click', () => {
    calculator.firstNum = Number(forNumToStr);
    forNumber = [];
    calculator.operatorSign = '+';
    display.textContent = [];
    
})

subtractBtn.addEventListener('click', () => {
    calculator.firstNum = Number(forNumToStr);
    forNumber = [];
    calculator.operatorSign = '-';
    display.textContent = [];
})

multiplyBtn.addEventListener('click', () => {
    calculator.firstNum = Number(forNumToStr);
    forNumber = [];
    calculator.operatorSign = '*';
    display.textContent = [];
})

divideBtn.addEventListener('click', () => {
    calculator.firstNum = Number(forNumToStr);
    forNumber = [];
    calculator.operatorSign = '/';
    display.textContent = [];
})



equalsBtn.addEventListener('click', () => {
    calculator.secondNum = Number(forNumToStr);

    let evaluation = operate(calculator.operatorSign, calculator.firstNum, calculator.secondNum);
    
    display.textContent = evaluation;
    
    
})










