$(document).ready(function(){
    // when the line is clicked,scroll down to the "about"
    $('.moving-line').click(function(){
        $("html, body").animate({
            scrollTop: $("#about").offset().top 
            //  Smooth scroll keyframeEffect, 800ms duration
        },800);
});
})

