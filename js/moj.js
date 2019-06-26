
AOS.init();

$('.dropdown-toggle a').on('click', function (e) {
  e.preventDefault()
  $(this).tab('show')
})     

$(document).ready(function(){
$('#slider1').carousel();
});

$('#slider2.carousel-slider').carousel({
fullWidth: true,
indicators:true
});
autoplay();
function autoplay(){
$('#slider2').carousel('next');
setTimeout(autoplay,4000);
}
  
$(function() {
    $('.pop').on('click', function() {
        $('.image').attr('src', $(this).find('img').attr('src'));
        $('.modal').modal('show');   
    });     
});
       
$(document).ready(function(){
  $('.materialboxed').materialbox();
});