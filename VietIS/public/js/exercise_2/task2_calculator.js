class Operator {
    constructor(name) {
        this.name = name;
    }
}

class UnaryOperator extends Operator {
    constructor(name) {
        super(name);
    }

    calculateResult(number){
        if(this.name === '+/-'){
            return -number;
        }
    }
    
}

class BinaryOperator extends Operator {
    constructor(name) {
        super(name);
    }

    calculateResult(number1, number2){
        switch (this.name) {
            case '+':
                return number1 + number2;
            case '-':
                return number1 - number2;
            case 'x':
                return number1 * number2;
            case '/':
                return number1 / number2;
            case '%':
                return number1 % number2;
            default:
                break;
        }
    }
    
}

let memory1 = 0;
let memory2 = 0;
let processingOperator = null;
let isBeginSecondOperand = false;
let isResetCalculatorIfPressNumber = false;
let isRightAfterOperator = false;

let displayElement = document.getElementsByClassName('display')[0]

// set event handler to numbers button
let numberElements = document.getElementsByClassName('number');
for(let i=0; i<numberElements.length; i++){
    numberElements[i].addEventListener('click', () => {
        if(isBeginSecondOperand){
            displayElement.innerHTML = parseFloat(numberElements[i].innerHTML);
            isBeginSecondOperand = false;
        }
        else{
            if(isResetCalculatorIfPressNumber){
                isResetCalculatorIfPressNumber = false;
                displayElement.innerHTML = parseFloat(numberElements[i].innerHTML);
            }
            else{
                displayElement.innerHTML = parseFloat(displayElement.innerHTML + numberElements[i].innerHTML);
            }
        }
    })
}

//set event handler to dot button
let dotElement = document.getElementsByClassName('dot')[0];
dotElement.addEventListener('click', () => {
    if(isBeginSecondOperand){
            displayElement.innerHTML = 0 + dotElement.innerHTML;
            isBeginSecondOperand = false;
    }
    else{
        if(isResetCalculatorIfPressNumber){
            isResetCalculatorIfPressNumber = false;
            displayElement.innerHTML = 0 + dotElement.innerHTML;
        }
        else{
            displayElement.innerHTML = displayElement.innerHTML + dotElement.innerHTML;
        }
    }
})

//set event handler to clear button
let clearElement  = document.getElementsByClassName('clearBt')[0];
clearElement.addEventListener('click', () => {
    displayElement.innerHTML = 0;
    memory1 = 0;
    memory2 = 0;
    processingOperator = null;
    isBeginSecondOperand = false;
    isResetCalculatorIfPressNumber = false;
})

//set event handler to switch +/- button (the sign of number displayed on screen will
//  be reverted)
let revertElement = document.getElementsByClassName('revertBt')[0];
revertElement.addEventListener('click', () => {
    const revertOperator = new UnaryOperator('+/-');
    processingOperator = '+/-';
    displayElement.innerHTML = revertOperator.calculateResult(parseFloat(displayElement.innerHTML));
})

//set event handler to operator button
let operatorElements = document.getElementsByClassName('operator');
for(let i=0; i<operatorElements.length; i++){
    operatorElements[i].addEventListener('click', () => {
        let operator = operatorElements[i].innerHTML;
        isRightAfterOperator = true;
        // operatorElements[i].setAttribute('class', 'operator');
        if(operator === '+' || operator === '-' || operator === 'x' || operator === '/' || operator === '%'){
            if(processingOperator === '+' || processingOperator === '-' || processingOperator === 'x' || processingOperator === '/' || processingOperator === '%'){
                memory2 = parseFloat(displayElement.innerHTML);
                const binaryOperator = new BinaryOperator(processingOperator);
                let result = binaryOperator.calculateResult(memory1, memory2);
                displayElement.innerHTML = result;
                memory1 = result;
                memory2 = 0;
            }
            memory1 = parseFloat(displayElement.innerHTML);
            processingOperator = operator;
            isResetCalculatorIfPressNumber = false;
            isBeginSecondOperand = true;
        }
        else if(operator === '='){
            isResetCalculatorIfPressNumber = true;
            if(processingOperator === '+' || processingOperator === '-' || processingOperator === 'x' || processingOperator === '/' || processingOperator === '%'){
                memory2 = parseFloat(displayElement.innerHTML);
                // console.log(memory1, memory2);
                isResetCalculatorIfPressNumber = true;
                const binaryOperator = new BinaryOperator(processingOperator);
                let result = binaryOperator.calculateResult(memory1, memory2);
                memory1 = result;
                memory2 = 0;
                displayElement.innerHTML = result;
                processingOperator = null;
                }

        }
    })
}