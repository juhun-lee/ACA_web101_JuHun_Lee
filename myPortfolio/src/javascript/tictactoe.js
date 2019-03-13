// Checking if javascript is working through Console.log //
console.log("My javascript is working!")

// Define variables //
var gameMarker = "X";  

// Creating onclick function //
function place(this_id){
     document.getElementById(this_id).innerHTML = gameMarker;

// These codes will change the mark to the other one, if it is X, it will be O. 
addEventListener("click", place);
 if (gameMarker === 'X') {
      gameMarker = 'O'
    } else {
      gameMarker = 'X'
    }
 }

 // The problems I faced were I could not make boxes freeze after the first click. I figured that it happens because of function conflicts.