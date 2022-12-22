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

let evaluation = [];

clearBtn.addEventListener('click', () => {
    evaluation = [];
    display.textContent = evaluation;
})

numberOne.addEventListener('click', () => {
    evaluation.push(1);
    const evaluationWithoutCommas = evaluation.join('');
    display.textContent = evaluationWithoutCommas;
})

numberTwo.addEventListener('click', () => {
    evaluation.push(2);
    const evaluationWithoutCommas = evaluation.join('');
    display.textContent = evaluationWithoutCommas;
})

numberThree.addEventListener('click', () => {
    evaluation.push(3);
    const evaluationWithoutCommas = evaluation.join('');
    display.textContent = evaluationWithoutCommas;
})

numberFour.addEventListener('click', () => {
    evaluation.push(4);
    const evaluationWithoutCommas = evaluation.join('');
    display.textContent = evaluationWithoutCommas;
})

numberFive.addEventListener('click', () => {
    evaluation.push(5);
    const evaluationWithoutCommas = evaluation.join('');
    display.textContent = evaluationWithoutCommas;
})