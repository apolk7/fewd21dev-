//Wait for the DOM elements to load before executing
//Create a function that runs any time the update button is clicked 
//Prevent the update button from refreshing the page
		//`event.preventDefault()`
		//I still don't feel like I understand the prevent event thing
//Create a variable called city-type
//Sumiting var "city-type" will dictate which background image to display 

//Bonus
//Remove extra spaces or new lines that users or the browser might add before or after their input 

$(document).ready(function(){

$("#submit-btn").click(function(){
event.preventDefault();

var city = $('#city-type').val(); 
    $('#city-type').val('');
    console.log(city);
//resets the input
    //val means go in and get the text input of whatever is in city type
    //input has to have an id

city = city.toLowerCase().trim();
console.log("The value of city after .toLowerCase is " +  city);

//adding and substracting classes
// if the user inputs New York City / NYC / new york change the CSS class to 'nyc'
     if(city == "new york city" || city == "nyc" || city == "new york" ){
        $('body').attr('class', 'nyc');
     }
// if the user inputs Los Angeles / LA change the CSS class to 'la'
     else if(city == "los angeles" || city == "la" || city == "lax"){
        $('body').attr('class', 'la');
        console.log('LA');
     }
// if the user inputs Austin / ATX change the CSS class to 'austin'
     else if(city == "austin" || city == "atx" ){
        $('body').attr('class', 'austin');
     }  
// if the user inputs San Francisco / SF / Bay Area change the CSS class to 'sf'
     else if(city == "san francisco" || city == "sf" || city == "bay area" ){
        $('body').attr('class', 'sf');
     }
// if the user inputs Sydney / Syd change the CSS class to 'sydney'
     else if(city == "sydney" || city == "syd" ){
        $('body').attr('class', 'sydney');
     }

});
 //this closes the submit-btn function

});
 //this closes the doc ready 