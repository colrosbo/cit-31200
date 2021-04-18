var clicked = false;

$("a").click(function(){
    var idVal = $(this).attr("href");
    $("html, body").animate(keyframes, {
        'scrollTop':$(idVal+"Section").offset().top
    }, option,500);
});

$(".dropDownMenu").click(function(){
    $(".navWrapper").toggleClass("toggle");
    clicked=!clicked;
});

$(window).resize(function(){
    if(window.innerWidth>=600&&$(".navWrapper").hasClass("toggle")){
        $(".navWrapper").removeClass("toggle")
    }else if(window.innerWidth>=600&&clicked){
        $(".navWrapper").addClass("toggle");
    }
});