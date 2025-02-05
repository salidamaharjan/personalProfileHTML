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

let num1 = 0;
let num2;
let sum = 0;

function btn1Click() {
    num1 = sum;
    num2 = parseInt(one.innerHTML);
    console.log("num1: " + num1);
    console.log("num2: " + num2);

    // console.log(display.innerHTML);
    if(display.innerHTML == 0) {
        display.innerHTML = one.innerHTML;
    } else {
        display.innerHTML = display.innerHTML + one.innerHTML;
    }
}

function btn2Click() {
    num1 = sum;
    num2 = parseInt(two.innerHTML);
    console.log("num1: " + num1);
    console.log("num2: " + num2);

    if(display.innerHTML == 0) {
        display.innerHTML = two.innerHTML;
    } else {
        display.innerHTML = display.innerHTML + two.innerHTML;
    }
}

function btn3Click() {
    num1 = sum;
    num2 = parseInt(three.innerHTML);
    console.log("num1: " + num1);
    console.log("num2: " + num2);

    if(display.innerHTML == 0) {
        display.innerHTML = three.innerHTML;
    } else {
        display.innerHTML = display.innerHTML + three.innerHTML;
    }
}

function btn4Click() {
    num1 = sum;
    num2 = parseInt(four.innerHTML);
    console.log("num1: " + num1);
    console.log("num2: " + num2);

    if(display.innerHTML == 0) {
        display.innerHTML = four.innerHTML;
    } else {
        display.innerHTML = display.innerHTML + four.innerHTML;
    }
}

function btn5Click() {
    num1 = sum;
    num2 = parseInt(five.innerHTML);
    console.log("num1: " + num1);
    console.log("num2: " + num2);

    if(display.innerHTML == 0) {
        display.innerHTML = five.innerHTML;
    } else {
        display.innerHTML = display.innerHTML + five.innerHTML;
    }
}

function btn6Click() {
    num1 = sum;
    num2 = parseInt(six.innerHTML);
    console.log("num1: " + num1);
    console.log("num2: " + num2);

    if(display.innerHTML == 0) {
        display.innerHTML = six.innerHTML;
    } else {
        display.innerHTML = display.innerHTML + six.innerHTML;
    }
}

function btn7Click() {
    num1 = sum;
    num2 = parseInt(seven.innerHTML);
    console.log("num1: " + num1);
    console.log("num2: " + num2);

    if(display.innerHTML == 0) {
        display.innerHTML = seven.innerHTML;
    } else {
        display.innerHTML = display.innerHTML + seven.innerHTML;
    }
}

function btn8Click() {
    num1 = sum;
    num2 = parseInt(eight.innerHTML);
    console.log("num1: " + num1);
    console.log("num2: " + num2);

    if(display.innerHTML == 0) {
        display.innerHTML = eight.innerHTML;
    } else {
        display.innerHTML = display.innerHTML + eight.innerHTML;
    }
}

function btn9Click() {
    num1 = sum;
    num2 = parseInt(nine.innerHTML);
    console.log("num1: " + num1);
    console.log("num2: " + num2);

    if(display.innerHTML == 0) {
        display.innerHTML = nine.innerHTML;
    } else {
        display.innerHTML = display.innerHTML + nine.innerHTML;
    }
}

function btn0Click() {
    num1 = sum;
    num2 = parseInt(zero.innerHTML);
    console.log("num1: " + num1);
    console.log("num2: " + num2);

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
    let sum = add();
    display.innerHTML = sum;
}

function add() {
    sum = num1 + num2;
    console.log("sum: " + sum);

    display.innerHTML = display.innerHTML + " + ";

    num1 = sum;
    console.log("num1 after update: " + num1);

    return sum;
}