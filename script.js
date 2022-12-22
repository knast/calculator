const numberOne = document.querySelector('.one');
const numberTwo = document.querySelector('.two');
const numberThree = document.querySelector('.three');
const numberFour = document.querySelector('.four');
const numberFive = document.querySelector('.five');
const numberSix = document.querySelector('.six');
const numberSeven = document.querySelector('.seven');
const numberEight = document.querySelector('.eight');
const numberNine = document.querySelector('.nine');

const clearBtn = document.querySelector('.clear');
const equalsBtn = document.querySelector('.equals');

const plusBtn = document.querySelector('.plus');
const subtractBtn = document.querySelector('.subtract');
const multiplyBtn = document.querySelector('.multiply');
const divideBtn = document.querySelector('.divide');

const display = document.querySelector('.display-number');



function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

function subtract(firstNumber, secondNumber) {
    if(firstNumber > secondNumber) {
        return firstNumber - secondNumber;
    } else if(firstNumber < secondNumber) {
        return secondNumber - firstNumber;
    }
}

function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber) {
    return firstNumber/secondNumber;
}

function operate(operator,firstNumber, secondNumber) {
    let sum;
    let subtraction;
    let multiplication;
    let divide;
    if(operator == '+') {
        sum = add(firstNumber+secondNumber);
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

let firstNumber = [];

clearBtn.addEventListener('click', () => {
    firstNumber = [];
    display.textContent = firstNumber;
})

numberOne.addEventListener('click', () => {
    firstNumber.push(1);
    const firstNumberWithoutCommas = firstNumber.join('');
    display.textContent = firstNumberWithoutCommas;
})

numberTwo.addEventListener('click', () => {
    firstNumber.push(2);
    const firstNumberWithoutCommas = firstNumber.join('');
    display.textContent = firstNumberWithoutCommas;
})

numberThree.addEventListener('click', () => {
    firstNumber.push(3);
    const firstNumberWithoutCommas = firstNumber.join('');
    display.textContent = firstNumberWithoutCommas;
})

numberFour.addEventListener('click', () => {
    firstNumber.push(4);
    const firstNumberWithoutCommas = firstNumber.join('');
    display.textContent = firstNumberWithoutCommas;
})

numberFive.addEventListener('click', () => {
    firstNumber.push(5);
    const firstNumberWithoutCommas = firstNumber.join('');
    display.textContent = firstNumberWithoutCommas;
})

numberSix.addEventListener('click', () => {
    firstNumber.push(6);
    const firstNumberWithoutCommas = firstNumber.join('');
    display.textContent = firstNumberWithoutCommas;
})

numberSeven.addEventListener('click', () => {
    firstNumber.push(7);
    const firstNumberWithoutCommas = firstNumber.join('');
    display.textContent = firstNumberWithoutCommas;
})

numberEight.addEventListener('click', () => {
    firstNumber.push(8);
    const firstNumberWithoutCommas = firstNumber.join('');
    display.textContent = firstNumberWithoutCommas;
})

numberNine.addEventListener('click', () => {
    firstNumber.push(9);
    const firstNumberWithoutCommas = firstNumber.join('');
    display.textContent = firstNumberWithoutCommas;
})

