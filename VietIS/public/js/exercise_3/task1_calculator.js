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
        processingOperator = '+/-';
        displayElement.innerHTML = -(parseFloat(displayElement.innerHTML));
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

                    //send to server asynchronously
                    fetch('/exercise-3/task1/calculate', {
                        method: 'post',
                        headers: {
                        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
                        },
                        body: `operatorName=${processingOperator === '+' ? "plus" : processingOperator}&number1=${memory1}&number2=${memory2}`
                    })
                    .then(response => {
                        return response.json();
                    })
                    .then(data => {
                        console.log(data);
                        let result = data.result;
                        displayElement.innerHTML = result;
                        memory1 = result;
                        memory2 = 0;
                        processingOperator = operator;
                        isResetCalculatorIfPressNumber = false;
                        isBeginSecondOperand = true;
                    })
                    .catch(err => {
                        console.log(err);
                    })
                    
                }
                else{
                    memory1 = parseFloat(displayElement.innerHTML);
                    processingOperator = operator;
                    isResetCalculatorIfPressNumber = false;
                    isBeginSecondOperand = true;
                }
            }
            else if(operator === '='){
                isResetCalculatorIfPressNumber = true;
                if(processingOperator === '+' || processingOperator === '-' || processingOperator === 'x' || processingOperator === '/' || processingOperator === '%'){
                    memory2 = parseFloat(displayElement.innerHTML);
                    // console.log(memory1, memory2, processingOperator);
                    isResetCalculatorIfPressNumber = true;
                
                    //send to server asynchronously
                    fetch('/exercise-3/task1/calculate', {
                        method: 'post',
                        headers: {
                        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
                        },
                        body: `operatorName=${processingOperator === '+' ? "plus" : processingOperator}&number1=${memory1}&number2=${memory2}`
                    })
                    .then(response => {
                        return response.json();
                    })
                    .then(data => {
                        console.log(data);
                        result = data.result;
                        memory1 = result;
                        memory2 = 0;
                        displayElement.innerHTML = result;
                        processingOperator = null;
                    })
                    .catch(err => {
                        console.log(err);
                    })
                }

            }
        })
    }