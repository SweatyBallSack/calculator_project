function add(a , b) {
    //console.log(a);
    return (a + b);
}

function subtract(a , b) {
    return (a - b);
}

function multiply(a , b) {
    return (a * b);
}

function divide(a , b) {
    return (a / b);
}

let firstNumber = 0;
let secondNumber = 0;
let operator = "";

function operate(firstNumber, secondNumber, operator) {
    if(operator == "+") {
        operator = "";
        firstNumber = add(firstNumber, secondNumber);
        return firstNumber;
    }
    else if(operator == "-") {
        operator = "";
        firstNumber = subtract(firstNumber, secondNumber);
        return firstNumber;
    }
    else if(operator == "*") {
        operator = "";
        firstNumber = multiply(firstNumber, secondNumber);
        return firstNumber;
    }
    else { // else if(operator == "/")
        operator = "";
        firstNumber = divide(firstNumber, secondNumber);
        return firstNumber;
    }

    
}

const display = document.querySelector("#display");
// const displayValue = document.createElement("div");
// display.appendChild(displayValue);
const result = document.createElement("div");
result.textContent = "0";
display.setAttribute("style", "display: flex; justify-content: end");
display.appendChild(result);

const leftSide = document.querySelector(".left-side");
leftSide.addEventListener("click", (event) => {
    let target = event.target;
    
    switch(target.textContent) {
        case('0'): {
            if(result.textContent != '0') {
                result.textContent = result.textContent + "0";
            }
            (operator) ? secondNumber = secondNumber * 10 : firstNumber = firstNumber * 10;

            break;
        }
        case('1'): {
            result.textContent = result.textContent + "1";

            (operator) ? secondNumber = secondNumber * 10 + 1 : firstNumber = firstNumber * 10 + 1;
            break;
        }
        case('2'): {
            result.textContent = result.textContent + "2";

            (operator) ? secondNumber = secondNumber * 10 + 2 : firstNumber = firstNumber * 10 + 2;
            break;
        }
        case('3'): {
            result.textContent = result.textContent + "3";

            (operator) ? secondNumber = secondNumber * 10 + 3 : firstNumber = firstNumber * 10 + 3;
            break;
        }
        case('4'): {
            result.textContent = result.textContent + "4";

            (operator) ? secondNumber = secondNumber * 10 + 4 : firstNumber = firstNumber * 10 + 4;
            break;
        }
        case('5'): {
            result.textContent = result.textContent + "5";

            (operator) ? secondNumber = secondNumber * 10 + 5 : firstNumber = firstNumber * 10 + 5;
            break;
        }
        case('6'): {
            result.textContent = result.textContent + "6";

            (operator) ? secondNumber = secondNumber * 10 + 6 : firstNumber = firstNumber * 10 + 6;
            break;
        }
        case('7'): {
            result.textContent = result.textContent + "7";

            (operator) ? secondNumber = secondNumber * 10 + 7 : firstNumber = firstNumber * 10 + 7;
            break;
        }
        case('8'): {
            result.textContent = result.textContent + "8";

            (operator) ? secondNumber = secondNumber * 10 + 8 : firstNumber = firstNumber * 10 + 8;
            break;
        }
        case('9'): {
            result.textContent = result.textContent + "9";

            (operator) ? secondNumber = secondNumber * 10 + 9 : firstNumber = firstNumber * 10 + 9;
            break;
        }
        case('.'): { // Doesn't work
            if(!result.textContent.includes(".")) {
                result.textContent = result.textContent + ".";

                // if(operator) {
                //     secondNumber = 
                // }
            }
            break;
        }
        case('='): {
            if((operator) && result.textContent.substring((result.textContent.indexOf(operator) + 1) != "")) {
                firstNumber = operate(firstNumber, secondNumber, operator);
                secondNumber = 0;
                operator = "";
                result.textContent = Math.round(firstNumber * 10000000)/10000000;
            }
            break;
        }
        default: {
            return NaN;
        }
    }
})

const rightSide = document.querySelector(".right-side");
rightSide.addEventListener("click", (event) => {
    let target = event.target; 

    switch(target.textContent) {
        case("+"): {
            if((operator) && (result.textContent.substring(-1) != operator)) {
                firstNumber = operate(firstNumber, secondNumber, operator);
                secondNumber = 0;
                result.textContent = `${Math.round(firstNumber * 10000000)/10000000}+`;
                operator = "+";
            }
            else if(!operator) {
                result.textContent = `${firstNumber}+`;
                operator = "+";
            }

            break;
        }
        case("-"): {
            if((operator) && (result.textContent.substring(-1) != operator)) {
                firstNumber = operate(firstNumber, secondNumber, operator);
                secondNumber = 0;
                result.textContent = `${Math.round(firstNumber * 10000000)/10000000}-`;
                operator = "-";
            }
            else if(!operator) {
                result.textContent = `${firstNumber}-`;
                operator = "-";
            }

            break;
        }
        case("*"): {
            if((operator) && (result.textContent.substring(-1) != operator)) {
                firstNumber = operate(firstNumber, secondNumber, operator);
                secondNumber = 0;
                result.textContent = `${Math.round(firstNumber * 10000000)/10000000}*`;
                operator = "*";
            }
            else if(!operator) {
                result.textContent = `${firstNumber}*`;
                operator = "*";
            }
            
            break;
        }
        case("/"): {
            if((operator) && (result.textContent.substring(-1) != operator)) {
                firstNumber = operate(firstNumber, secondNumber, operator);
                secondNumber = 0;
                result.textContent = `${Math.round(firstNumber * 10000000)/10000000}/`;
                operator = "/";
            }
            else if(!operator) {
                result.textContent = `${firstNumber}/`;
                operator = "/";
            }

            break;
        }
    }
})

const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", (event)=> {
    firstNumber = 0;
    secondNumber = 0;
    operator = "";
    result.textContent = "0";
})

const deleteBtn = document.querySelector(".delete");
deleteBtn.addEventListener("click", (event)=> {
    if(result.textContent) {
        result.textContent = result.textContent.slice(0, -1);

        let operatorIndex = result.textContent.indexOf(operator);

        if((operator) && (result.textContent.indexOf(operator) != result.textContent.length)) {
            secondNumber = parseFloat(result.textContent.substring(operatorIndex + 1));
        }
        else if(!(operator)){
            firstNumber = parseFloat(result.textContent.slice(0));
        }
        else { // Case where the operator is deleted
            operator = "";
        }
    }


    console.log(firstNumber);
})