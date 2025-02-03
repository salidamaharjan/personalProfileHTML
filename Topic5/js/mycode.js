window.onload=initialize;
function initialize() {
    console.log("In initialize()");
    conditions();
}
function conditions() {
    let num1 = 10;
    let num2 = 5;
    let text1 = "Mark";
    let text2 = "Mary";

    if(num1 == num2) 
        console.log("Number 1 is equal to Number 2");
    else console.log("Number 1 is not equal to Number 2");

    if(num2 > num1) console.log("Number 2 is greater than Number 1");
    else if( num2 < num1) console.log("Number 2 is less than Number 1");
    else console.log("Number 2 is equal to Number 2");

    if(text1 == text2) console.log("Number 1 is equal to Number2");
    else console.log("Text 1 is not equal to Text 2");
    if(text1 >= text2) console.log("Text is greater than or equal to Text 2");
    else console.log("Text 1 is less than Text 2");

    switch(num2){
        case 0:
            console.log("Number 2 is equal to 0");
            break;
        case 1:
            console.log("Number 2 is equal to 1");
            break;
        case 2:
            console.log("Number 2 is equal to 2");
            break;
        case 3:
            console.log("Number 2 is equal to 3");
            break;
        case 4:
            console.log("Number 2 is equal to 4");
            break;
        case 5:
            console.log("Number 2 is equal to 5");
            break;
        default:
            console.log("Number 2 is unknown value");
            break;
    }
    num1 == num2 ? console.log("Using Ternary Operator - Number 1 is equal to Number 2") : console.log("Using Ternary Operator - Number 1 is not equal to Number 2");
}