const buttons = document.querySelector(".button-container");
const display = document.querySelector(".display");
const add = document.querySelector(".add");
const subtract = document.querySelector(".subtract");
const multiply = document.querySelector(".multiply");
const divide = document.querySelector(".divide");
const equals = document.querySelector(".equals");
buttons.addEventListener("click", numInput, false);

const numValArr = [];

function numInput(e) {
    if (e.target !== e.currentTarget && e.target.id == "num") {
        let clickedItem = e.target.className;
        numValArr.push(clickedItem);
        display.textContent = numValArr.join('');
        console.log(numValArr);
    }
}

function addFun(val1, val2) {
    const sum = val1 + val2;
    return sum;
}

function subtractFun(val1, val2) {
    const sum = val1 - val2;
    return sum;
}

function multiplyFun(val1, val2) {
    const sum = val1 * val2;
    return sum;
}

function divideFun(val1, val2) {
    const sum = val1 / val2;
    return sum;
}

function operate(oper, val1, val2) {

}

function clear() {
    display.textContent = 0;
}