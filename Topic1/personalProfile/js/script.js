// selecting the element and store in a variable
const placesVisited = document.getElementById("visited");
const videosCreated = document.getElementById("videos");
const pokharaD = document.getElementById("pokhara");
const banffD = document.getElementById("banff");
const aspenD = document.getElementById("aspen");
const newYorkD = document.getElementById("newYork");
const vegasD = document.getElementById("vegas");
const mackinawD = document.getElementById("mackinaw");

// create function to redirect to the places visited section on galleries page if the user clicks ok
function redirectToPlaces(){
    placesVisited.setAttribute("href", "./galleries.html#placesVisited");
}

// create function to redirect to the videos created section on galleries page if the user clicks ok
function redirectToVideos(){
   let result = confirm("Do you want to go galleries to see videos created?");
   if(result){
    videosCreated.setAttribute("href", "./galleries.html#videosCreated");
   } else {
    videosCreated.setAttribute("href", "./hobbies.html");
   }
}

// set external link for the detail of places which opens on the new tab
function pokharaDetail() {
   pokharaD.setAttribute("href", "https://en.wikipedia.org/wiki/Pokhara");
   pokharaD.setAttribute("target", "_blank");
}

function banffDetail() {
   banffD.setAttribute("href", "https://en.wikipedia.org/wiki/Banff,_Alberta");
   banffD.setAttribute("target", "_blank");
}

function aspenDetail() {
   aspenD.setAttribute("href", "https://en.wikipedia.org/wiki/Aspen,_Colorado");
   aspenD.setAttribute("target", "_blank");
}

function newYorkDetail() {
   newYorkD.setAttribute("href", "https://en.wikipedia.org/wiki/New_York_City");
   newYorkD.setAttribute("target", "_blank");
}

function vegasDetail() {
   vegasD.setAttribute("href", "https://en.wikipedia.org/wiki/Las_Vegas");
   vegasD.setAttribute("target", "_blank");
}

function mackinawDetail() {
   mackinawD.setAttribute("href", "https://en.wikipedia.org/wiki/Mackinac_Island");
   mackinawD.setAttribute("target", "_blank");
}

// change color to red
function changeColor(element) {
   element.style.color =  "red";
}

// reset back the color
function resetColor(element) {
   element.style.color =  "purple";
}
