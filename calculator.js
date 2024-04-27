let numberOne = 0;
let operation = '+';
let numberTwo = 0;
let currentNumber = 1;

function clickNine() {
    if (currentNumber === 1) {
        numberOne = numberOne * 10 + 9;
        console.log(numberOne)
    } else {
        numberTwo = numberTwo * 10 + 9;
        console.log(numberTwo)
    }
}

function clickEight() {
    if (currentNumber === 1) {
        numberOne = numberOne * 10 + 8;
        console.log(numberOne)
    } else {
        numberTwo = numberTwo * 10 + 8;
        console.log(numberTwo)
    }
}

function clickSeven() {
    if (currentNumber === 1) {
        numberOne = numberOne * 10 + 7;
        console.log(numberOne)
    } else {
        numberTwo = numberTwo * 10 + 7;
        console.log(numberTwo)
    }
}

function clickSix() {
    if (currentNumber === 1) {
        numberOne = numberOne * 10 + 6;
        console.log(numberOne)
    } else {
        numberTwo = numberTwo * 10 + 6;
        console.log(numberTwo)
    }
}

function clickFive() {
    if (currentNumber === 1) {
        numberOne = numberOne * 10 + 5;
        console.log(numberOne)
    } else {
        numberTwo = numberTwo * 10 + 5;
        console.log(numberTwo)
    }
}

function clickFour() {
    if (currentNumber === 1) {
        numberOne = numberOne * 10 + 4;
        console.log(numberOne)
    } else {
        numberTwo = numberTwo * 10 + 4;
        console.log(numberTwo)
    }
}

function clickThree() {
    if (currentNumber === 1) {
        numberOne = numberOne * 10 + 3;
        console.log(numberOne)
    } else {
        numberTwo = numberTwo * 10 + 3;
        console.log(numberTwo)
    }
}

function clickTwo() {
    if (currentNumber === 1) {
        numberOne = numberOne * 10 + 2;
        console.log(numberOne)
    } else {
        numberTwo = numberTwo * 10 + 2;
        console.log(numberTwo)
    }
}

function clickOne() {
    if (currentNumber === 1) {
        numberOne = numberOne * 10 + 1;
        console.log(numberOne)
    } else {
        numberTwo = numberTwo * 10 + 1;
        console.log(numberTwo)
    }
}

function clickZero() {
    if (currentNumber === 1) {
        numberOne = numberOne * 10 + 0;
        console.log(numberOne)
    } else {
        numberTwo = numberTwo * 10 + 0;
        console.log(numberTwo)
    }
}

function clickAddition() {
    operation = "+";
    if (currentNumber === 1) {
        currentNumber = 2;
    }
}

function clickSubstraction() {
    operation = "-";
    if (currentNumber === 1) {
        currentNumber = 2;
    }
}

function clickMultiplication() {
    operation = "*";
    if (currentNumber === 1) {
        currentNumber = 2;
    }
}

function clickDivision() {
    operation = "/";
    if (currentNumber === 1) {
        currentNumber = 2;
    }
}

function clickClear() {
    numberOne = 0;
    operation = '+';
    numberTwo = 0;
    currentNumber = 1;

    console.log("Number 1: " + numberOne);
    console.log("operation: " + operation);
    console.log("Number 2: " + numberTwo);
    console.log("currentNumber: " + currentNumber);
}

function calculate() {
    if (operation === '+') {
        console.log(numberOne + numberTwo);
    }

    if (operation === '-') {
        console.log(numberOne - numberTwo);
    }

    if (operation === '*') {
        console.log(numberOne * numberTwo);
    }

    if (operation === '/') {
        console.log(numberOne / numberTwo);
    }
}