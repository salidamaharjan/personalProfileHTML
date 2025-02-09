let display = document.getElementsByClassName("numToDisplay")[0];
let one = document.getElementsByClassName("one")[0];
let two = document.getElementsByClassName("two")[0];
let three = document.getElementsByClassName("three")[0];
let four = document.getElementsByClassName("four")[0];
let five = document.getElementsByClassName("five")[0];
let six = document.getElementsByClassName("six")[0];
let seven = document.getElementsByClassName("seven")[0];
let eight = document.getElementsByClassName("eight")[0];
let nine = document.getElementsByClassName("nine")[0];
let zero = document.getElementsByClassName("zero")[0];
let num1;
let num2;
function btn1Click() {
    // console.log(display.innerHTML);
    if(display.innerHTML == 0) {
        display.innerHTML = one.innerHTML;
    } else {
        display.innerHTML = display.innerHTML + one.innerHTML;
    }
}

function btn2Click() {
    if(display.innerHTML == 0) {
        display.innerHTML = two.innerHTML;
    } else {
        display.innerHTML = display.innerHTML + two.innerHTML;
    }
}

function btn3Click() {
    if(display.innerHTML == 0) {
        display.innerHTML = three.innerHTML;
    } else {
        display.innerHTML = display.innerHTML + three.innerHTML;
    }
}

function btn4Click() {   
    if(display.innerHTML == 0) {
        display.innerHTML = four.innerHTML;
    } else {
        display.innerHTML = display.innerHTML + four.innerHTML;
    }
}

function btn5Click() {   
    if(display.innerHTML == 0) {
        display.innerHTML = five.innerHTML;
    } else {
        display.innerHTML = display.innerHTML + five.innerHTML;
    }
}

function btn6Click() {   
    if(display.innerHTML == 0) {
        display.innerHTML = six.innerHTML;
    } else {
        display.innerHTML = display.innerHTML + six.innerHTML;
    }
}

function btn7Click() {   
    if(display.innerHTML == 0) {
        display.innerHTML = seven.innerHTML;
    } else {
        display.innerHTML = display.innerHTML + seven.innerHTML;
    }
}

function btn8Click() {   
    if(display.innerHTML == 0) {
        display.innerHTML = eight.innerHTML;
    } else {
        display.innerHTML = display.innerHTML + eight.innerHTML;
    }
}

function btn9Click() {    
    if(display.innerHTML == 0) {
        display.innerHTML = nine.innerHTML;
    } else {
        display.innerHTML = display.innerHTML + nine.innerHTML;
    }
}

function btn0Click() {    
    if(display.innerHTML == 0) {
        display.innerHTML = zero.innerHTML;
    } else {
        display.innerHTML = display.innerHTML + zero.innerHTML;
    }
}

function btnDotClick() {
    display.innerHTML = display.innerHTML + ".";
}

function ac() {
    display.innerHTML = 0;
}

function addSym () {
    if(display.innerHTML.includes("+") || display.innerHTML.includes("-")|| display.innerHTML.includes("*") ||display.innerHTML.includes("/")){
        display.innerHTML = btnEqlClick();
        // console.log("display.innerHTML", display.innerHTML);
    }
    display.innerHTML = display.innerHTML + "+";
}

function minusSym() {
    if(display.innerHTML.includes("+") || display.innerHTML.includes("-")||display.innerHTML.includes("*") || display.innerHTML.includes("/")){
        display.innerHTML = btnEqlClick();
        // console.log("display.innerHTML", display.innerHTML);
    }
    display.innerHTML = display.innerHTML + "-";
}

function timesSym() {
    if(display.innerHTML.includes("+") || display.innerHTML.includes("-")||display.innerHTML.includes("*") || display.innerHTML.includes("/")){
        display.innerHTML = btnEqlClick();
        // console.log("display.innerHTML", display.innerHTML);
    }
    display.innerHTML = display.innerHTML + "*";
}

function divideSym() {
    if(display.innerHTML.includes("+") || display.innerHTML.includes("-")|| display.innerHTML.includes("*") ||display.innerHTML.includes("/")){
        display.innerHTML = btnEqlClick();
        // console.log("display.innerHTML", display.innerHTML);
    }
    display.innerHTML = display.innerHTML + "/";
}

function btnEqlClick() {
    let expression = display.innerHTML;

    if (expression.includes("+")) {
         return display.innerHTML = add();
    } else if (expression.includes("-")) {
        return display.innerHTML = minus();
    } else if (expression.includes("*")) {
        return display.innerHTML = times();
    } else if (expression.includes("/")) {
        return display.innerHTML = divide();
    }
}
  
function add() {
    if(display.innerHTML != 0) {
    display.innerHTML = display.innerHTML + "+";
    num1 = display.innerHTML[0].toString();
    for (let i = 1; i <= display.innerHTML.length-2; i++){
        let num = display.innerHTML[i].toString();
        // console.log("num", num);
        num1 = num1 + num;
    }
    // console.log("num1 after update: " + num1);

    const indexOfOperator = display.innerHTML.indexOf("+");
    // console.log(indexOfOperator);
    num2 = display.innerHTML[display.innerHTML.length],toString();
    for(let i = display.innerHTML.length-1; i > indexOfOperator; i--){
    let num = display.innerHTML[i].toString();
    num2 = num + num2;
    }
    return parseFloat(num1) + parseFloat(num2);
}
}

function minus() {
    if(display.innerHTML == 0){
        display.innerHTML = "-";
    } else {
        display.innerHTML = display.innerHTML + "-";
        }
    num1 = display.innerHTML[0].toString();
    for (let i = 1; i <= display.innerHTML.length-2; i++){
        let num = display.innerHTML[i].toString();
        // console.log("num", num);
        num1 = num1 + num;
    }
    // console.log("num1 after update: " + num1);

    const indexOfOperator = display.innerHTML.indexOf("-");
    // console.log(indexOfOperator);
    num2 = display.innerHTML[display.innerHTML.length],toString();
    for(let i = display.innerHTML.length-1; i > indexOfOperator; i--){
    let num = display.innerHTML[i].toString();
    num2 = num + num2;
    }
    return parseFloat(num1) - parseFloat(num2);
}

function times() {
    display.innerHTML = display.innerHTML + "*";
    num1 = display.innerHTML[0].toString();
    for (let i = 1; i <= display.innerHTML.length-2; i++){
        let num = display.innerHTML[i].toString();
        // console.log("num", num);
        num1 = num1 + num;
    }
    // console.log("num1 after update: " + num1);

    const indexOfOperator = display.innerHTML.indexOf("*");
    // console.log(indexOfOperator);
    num2 = display.innerHTML[display.innerHTML.length],toString();
    for(let i = display.innerHTML.length-1; i > indexOfOperator; i--){
    let num = display.innerHTML[i].toString();
    num2 = num + num2;
    }
    return parseFloat(num1) * parseFloat(num2);
}

function divide() {
    display.innerHTML = display.innerHTML + "/";
    num1 = display.innerHTML[0].toString();
    for (let i = 1; i <= display.innerHTML.length-2; i++){
        let num = display.innerHTML[i].toString();
        // console.log("num", num);
        num1 = num1 + num;
    }
    // console.log("num1 after update: " + num1);

    const indexOfOperator = display.innerHTML.indexOf("/");
    // console.log(indexOfOperator);
    num2 = display.innerHTML[display.innerHTML.length],toString();
    for(let i = display.innerHTML.length-1; i > indexOfOperator; i--){
    let num = display.innerHTML[i].toString();
    num2 = num + num2;
    }
    return parseFloat(num1) / parseFloat(num2);
}

