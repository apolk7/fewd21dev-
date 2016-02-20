$(document).ready(function() {

$('#stopButton').click(illuminateRed);

$('#slowButton').click(illuminateYellow);

$('#goButton').click(illuminateGreen);

function illuminateRed(){
  clearLights();
  $('#stopLight').css("background-color","red"); 
  console.log("red light!")
}

function illuminateYellow() {
  clearLights();
  $('#slowLight').css("background-color","yellow"); 
  console.log("yellow light!")
}

function illuminateGreen() {
  clearLights();
  $('#goLight').css("background-color","green"); 
  console.log("green light!")
}

function clearLights() {
$(".bulb").css("background-color","black");
console.log("black");
}
});

//how do you do clearlights in one line?


//THIS IS THE FULL JAVASCRIPT 

// document.getElementById('stopButton').onclick = illuminateRed;

// document.getElementById('slowButton').onclick = illuminateYellow;

// document.getElementById('goButton').onclick = illuminateGreen;

// function illuminateGreen() {
//   clearLights();
//   document.getElementById('goLight').style.backgroundColor = "green";
// }

// function illuminateRed() {
//   clearLights();
//   document.getElementById('stopLight').style.backgroundColor = "red";
// }

// function illuminateYellow() {
//   clearLights();
//   document.getElementById('slowLight').style.backgroundColor = "yellow";
// }

// function clearLights() {
//   document.getElementById('stopLight').style.backgroundColor = "black";
//   document.getElementById('slowLight').style.backgroundColor = "black";
//   document.getElementById('goLight').style.backgroundColor = "black";
// }