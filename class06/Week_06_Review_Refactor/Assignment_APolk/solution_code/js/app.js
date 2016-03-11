// Create variable "cities" and get the value of the 5 cities listed in css
var cities = ["NYC", "SF", "LA", "ATX", "SYD"];

//Wait for the DOM elements to load before executing
//If the user inputs 

// Create a function that runs whenever the user changes the input of the drop down field
$(document).ready(function() {
  for(i=0;i<cities.length;i++) {
    $('#city-type').append('<option value="' + cities[i] + '">' + cities[i] + '</option>');
  }

//Create a function that runs whenever the user changes the input of the drop down field
//Drop down field is listening for "#city-type"
//If the input of the drop down changes, then the background image changes by updating the class
//Use if/else conditionals to ensure the proper city is showing per the drop down selection
//Use .attr to change the class of the body to change the background image 
  $('form').on('change', '#city-type',function(){
    var city = $('#city-type').val();
    if(city == 'NYC') {
      $('body').attr('class','nyc');
    }
    else if (city == 'SF') {
      $('body').attr('class','sf');
    }
    else if (city == 'LA') {
      $('body').attr('class','la');
    }
    else if (city == 'ATX') {
      $('body').attr('class','austin');
    }
    else if (city == 'SYD') {
      $('body').attr('class','sydney');
    }
  });
});


- Use $.append() in your iteration on the drop-down menu 
- Get the value of user input using ```$.val()```
- Use the ```$.change``` event handler to capture user actions

####Bonus

- [Read](http://bavotasan.com/2011/style-select-box-using-only-css/) [up](https://css-tricks.com/dropdown-default-styling/) on your own and incorporate some more styles on the drop down menu
- While the dropdown menu should update the page in the same way it did after your work last week, take a look at what your final product should look like with a dropdown menu:
