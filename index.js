// $ is equivalent to jQuery()
$("button").click(function(){
    $("h1").css("color","purple");
})

$("button").on("click",function(){
    // $("h1").toggle();   // h1 is hide or seen in an instant way
    // $("h1").fadeToggle(); // h1 is fade animation is applied
    // $("h1").slideToggle();   // h1 hide in sliding animation
    // $("h1").animate({opacity:0.50}); 
    // $("h1").animate({margin:"30%"});   // Opacity is done
    $("h1").slideUp().slideDown().animate({opacity:0.50}); 
})