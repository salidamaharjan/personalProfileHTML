let display = document.getElementsByClassName("numToDisplay")[0];

function btn1Click() {
    console.log(display.innerHTML);
    if(display.innerHTML == 0) {
        display.innerHTML = 1;
    } else {
        display.innerHTML = display.innerHTML + "1";
    }
}