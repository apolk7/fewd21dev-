$(document).ready(function() {
  $('header div h1 span').click(function(){
    $(this).parent().toggleClass('slideDown');
  });
});