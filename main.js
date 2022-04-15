const buttons = document.querySelector(".button-container");
const display = document.querySelector(".display");
const add = document.querySelector(".add");
const sub = document.querySelector(".sub");
const multi = document.querySelector(".multi");
const divi = document.querySelector(".divi");
const equals = document.querySelector(".equals");
const clear = document.querySelector(".clear");
buttons.addEventListener("click", numInput, false);
clear.addEventListener("click", clearFun, false);
add.addEventListener("click", addition, false);
equals.addEventListener("click", operate, false);
sub.addEventListener("click", subtract, false);
divi.addEventListener("click", divide, false);
multi.addEventListener("click", multiply, false);

let numValArr = [];
let operArr = [];
let val1 = 0;
let val2 = 0;
let result = 0;
let oper = 0;

function numInput(e) {
    if (e.target !== e.currentTarget && e.target.id == "num") {
        let clickedItem = e.target.className;
        numValArr.push(clickedItem);
        display.textContent = numValArr.join('');
        console.log(numValArr);
    }
}

function addition() {
   if (operArr.length === 0) {
        val1 = numValArr.join('');
        numValArr = [];
        operArr.push('add');
   } else {
        val2 = numValArr.join('');
        numValArr = [];
        operate();
   }
}

function subtract() {
    if (operArr.length === 0) {
         val1 = numValArr.join('');
         numValArr = [];
         operArr.push('sub');
    } else {
         val2 = numValArr.join('');
         numValArr = [];
         operate();
    }
 }

 function divide() {
    if (operArr.length === 0) {
         val1 = numValArr.join('');
         numValArr = [];
         operArr.push('divi');
    } else {
         val2 = numValArr.join('');
         numValArr = [];
         operate();
    }
 }

 function multiply() {
    if (operArr.length === 0) {
         val1 = numValArr.join('');
         numValArr = [];
         operArr.push('multi');
    } else {
         val2 = numValArr.join('');
         numValArr = [];
         operate();
    }
 }

function operate() {
    if (operArr[0] == 'add') {
        val2 = numValArr.join('');
        result = parseInt(val1) + parseInt(val2);
        display.textContent = result;
    } else if (operArr[0] == 'sub') {
        val2 = numValArr.join('');
        result = parseInt(val1) - parseInt(val2);
        display.textContent = result;
    } else if (operArr[0] == 'divi') {
        val2 = numValArr.join('');
        result = parseInt(val2) / parseInt(val2);
        display.textContent = result;
    } else if (operArr[0] == 'multi') {
        val2 = numValArr.join('');
        result = parseInt(val1) * parseInt(val2);
        display.textContent = result;
    }
}

function clearFun() {
    numValArr = [];
    operArr = [];
    sum = '';
    display.textContent = '0';
}

