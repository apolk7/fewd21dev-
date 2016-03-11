var images = ["images/animal2.jpg","images/animal3.jpg","images/animal4.jpg","images/animal5.jpg""images/animal6.jpg","images/animal7.jpg"]; 
var i = 0; 
var maxImages = images.length-1; 

//Function for the back button 
function previousImage(){
	//If the increment variable is greater than 0, increment back, else stay at max images, else increment image. To go back, use --. To go forward, use ++. 
	if(i > 0) {
		i--;
	} else {
		i = maxImages;
	} 
	changeImage(i);

}
//Function for the skip button 
function nextImage(){
	//If increment variable is less than max images, increment forward, else start at 0, else change image. 
	if(i < maxImages){
		i++;
	} else {
		i = 0; 
	}
	changeImage(i);
}
//Function to change the image 
function changeImage(){
	//Update img scr to the current image. 
	$("carousel-image").attr("src",images[i])

}

//Event listeners 

$(document).ready(function(){
//next image click
	$("#next").on("click", nextImage);
//previous image click 
	$("#back").on("click", previousImage);

});