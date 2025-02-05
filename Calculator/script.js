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

let num1 = display.innerHTML;
function btn1Click() {
    // console.log(display.innerHTML);
    if(display.innerHTML == 0) {
        display.innerHTML = one.innerHTML;
    } else {
        display.innerHTML = display.innerHTML + one.innerHTML;
    }
}

function btn2Click() {
    // console.log(display.innerHTML);
    if(display.innerHTML == 0) {
        display.innerHTML = two.innerHTML;
    } else {
        display.innerHTML = display.innerHTML + two.innerHTML;
    }
}

function btn3Click() {
    // console.log(display.innerHTML);
    if(display.innerHTML == 0) {
        display.innerHTML = three.innerHTML;
    } else {
        display.innerHTML = display.innerHTML + three.innerHTML;
    }
}

function btn4Click() {
    // console.log(display.innerHTML);
    if(display.innerHTML == 0) {
        display.innerHTML = four.innerHTML;
    } else {
        display.innerHTML = display.innerHTML + four.innerHTML;
    }
}

function btn5Click() {
    // console.log(display.innerHTML);
    if(display.innerHTML == 0) {
        display.innerHTML = five;
    } else {
        display.innerHTML = display.innerHTML + five.innerHTML;
    }
}

function btn6Click() {
    // console.log(display.innerHTML);
    if(display.innerHTML == 0) {
        display.innerHTML = six.innerHTML;
    } else {
        display.innerHTML = display.innerHTML + six.innerHTML;
    }
}

function btn7Click() {
    // console.log(display.innerHTML);
    if(display.innerHTML == 0) {
        display.innerHTML = seven.innerHTML;
    } else {
        display.innerHTML = display.innerHTML + seven.innerHTML;
    }
}

function btn8Click() {
    // console.log(display.innerHTML);
    if(display.innerHTML == 0) {
        display.innerHTML = eight.innerHTML;
    } else {
        display.innerHTML = display.innerHTML + eight.innerHTML;
    }
}

function btn9Click() {
    // console.log(display.innerHTML);
    if(display.innerHTML == 0) {
        display.innerHTML = nine.innerHTML;
    } else {
        display.innerHTML = display.innerHTML + nine.innerHTML;
    }
}

function btn0Click() {
    // console.log(display.innerHTML);
    if(display.innerHTML == 0) {
        display.innerHTML = zero;
    } else {
        display.innerHTML = display.innerHTML + zero.innerHTML;
    }
}

function btnDotClick() {
    display.innerHTML = display.innerHTML + ".";
}

function btnEqlClick() {
    display.innerHTML = display.innerHTML;
}

function add() {
    console.log("num1: " + num1);
    let sum = parseInt(display.innerHTML);
    let num2 = parseInt(display.innerHTML[display.innerHTML.length-1]);
    sum = sum + num2;
    num1 = num2;
    console.log("num1 after update: " + num1);
    console.log("num2: " + num2);
    console.log("sum: " + sum);
    display.innerHTML = display.innerHTML + " + ";
}