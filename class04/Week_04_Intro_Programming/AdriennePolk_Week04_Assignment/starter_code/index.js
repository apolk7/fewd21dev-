$(document).ready(function() {

$('.readmore').click(function(){
	$('#show-this-on-click').slideDown();
	$('.readless').show();
	$('.readmore').hide();
 event.preventDefault();
});

$('.readless').click(function(hide){
	$('#show-this-on-click').slideUp();
	$('.readmore').show();
	$('.readless').hide();
 event.preventDefault();
});

$('.learnmore').click(function(){
	$('#learnmoretext').slideDown();
	$('.learnmore').hide();
 event.preventDefault();
});

});


