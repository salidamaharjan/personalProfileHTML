const placesVisited = document.getElementById("visited");

function confirmRedirection(){
   let result = confirm("Do you want to redirect to galleries?");
   console.log(result);
   if(result){
    placesVisited.setAttribute("href", "./galleries.html#placesVisited");

   } else {
    placesVisited.setAttribute("href", "./hobbies.html");
   }
}