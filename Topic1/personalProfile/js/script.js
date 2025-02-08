const placesVisited = document.getElementById("visited");
const videosCreated = document.getElementById("videos");

function redirectToPlaces(){
   let result = confirm("Do you want to go galleries to see places visited?");
   if(result){
    placesVisited.setAttribute("href", "./galleries.html#placesVisited");
   } else {
    placesVisited.setAttribute("href", "./hobbies.html");
   }
}
function redirectToVideos(){
   let result = confirm("Do you want to go galleries to see videos created?");
   if(result){
    videosCreated.setAttribute("href", "./galleries.html#videosCreated");
   } else {
    videosCreated.setAttribute("href", "./hobbies.html");
   }
}