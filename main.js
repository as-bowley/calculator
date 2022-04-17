const buttons = document.querySelector(".button-container");
const display = document.querySelector(".display");
const add = document.querySelector("#addition");
const sub = document.querySelector("#subtract");
const multi = document.querySelector("#multiply");
const divi = document.querySelector("#divide");
const equals = document.querySelector("#equals");
const clear = document.querySelector(".clear");
buttons.addEventListener("click", input, false);
clear.addEventListener("click", clearFun, false);

let numValArr = [];
let operArr = [];
let prevOperand = "";
let currOperand = "";
let val1 = 0;
let val2 = 0;
let result = 0;

function input(e) {
    if (e.target !== e.currentTarget && e.target.className == "num") {
        let clickedItem = e.target.id;
        numValArr.push(clickedItem);
        display.textContent = numValArr.join('');
        console.log(numValArr);
    } else if (e.target !== e.currentTarget && e.target.className == "operand") {
        numCheck();
        if (prevOperand === "") {
            let clickedItem = e.target.textContent;
            prevOperand = clickedItem;
        } else {
            let clickedItem = e.target.textContent;
            console.log(clickedItem);
            currOperand = clickedItem;
            console.log(val2);
            operate(prevOperand, val1, val2);
        }
        console.log(prevOperand, currOperand);
    } else if (e.target !== e.currentTarget && e.target.className === "operate") {
        numCheck();
        operate(prevOperand, val1, val2);
    } else {
        return;
    }
}

function addition(num1, num2) {
    prevOperand = currOperand;
    currOperand = '';
    result = parseInt(num1) + parseInt(num2);
    display.textContent = result;
    val1 = parseInt(result);
    result = 0;
    val2 = 0;
}

function subtract(num1, num2) {
    prevOperand = currOperand;
    currOperand = '';
    result = parseInt(num1) - parseInt(num2);
    console.log(result);
    display.textContent = result;
    val1 = parseInt(result);
    result = 0;
    val2 = 0;
}

 function divide(num1, num2) {
    prevOperand = currOperand;
    currOperand = '';
    result = parseInt(num1) / parseInt(num2);
    display.textContent = result;
    val1 = parseInt(result);
    result = 0;
    val2 = 0;
 }

 function multiply(num1, num2) {
    prevOperand = currOperand;
    currOperand = '';
    result = parseInt(num1) * parseInt(num2);
    display.textContent = result;
    val1 = parseInt(result);
    result = 0;
    val2 = 0;
 }

 function numCheck() {
    if (val1 === 0) {
        val1 = numValArr.join('');
        numValArr = [];
        console.log(val1);
        return val1;
    } else {
        val2 = numValArr.join('');
        numValArr = [];
        console.log(val2);
        return val2;
 }
}

function operate(string, num1, num2) {
    console.log(num1, num2);
        switch (string) {
                case '+':
                    addition(num1, num2);
                    break;
                case '-':
                    subtract(num1, num2);
                    break;
                case '÷':
                    divide(num1, num2);
                    break;
                case 'x':
                    multiply(num1, num2);
                    break;
                default:
                    console.log(prevOperand);
                    break;
            }
}


function clearFun() {
    val1 = 0;
    val2 = 0;
    numValArr = [];
    prevOperand = '';
    currOperand = '';
    display.textContent = '0';
}

