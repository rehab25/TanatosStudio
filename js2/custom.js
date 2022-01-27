/*global $, alert, console */
$(function () {
    "use strict";
    
   // $("html").niceScroll();
    
    //$(".header").height($(window).height());
    
    // scroll To Features
    $(".header .arrow i").click(function () {
        $("body").animate({
            scrollTop: $(".features").offset().top
        }, 1000);
    });
    
    // show hidden Items in ourWork
    $(".showMore").click(function () {
        $(".ourWork .hidden").fadeIn(1000);
    });
    
    var leftArrow = $(".Testimonials .fa-chevron-left"),
        rightArrow = $(".Testimonials .fa-chevron-right");
        
        
    function checkClient() {
        if ($(".client:first").hasClass("active")) {
            leftArrow.fadeOut();
        } else {
            leftArrow.fadeIn();
        }
        
        if ($(".client:last").hasClass("active")) {
            rightArrow.fadeOut();
        } else {
            rightArrow.fadeIn();
        }
    }
    checkClient();
    
    
    $(".Testimonials i").click(function () {
        if ($(this).hasClass("fa-chevron-right")) {
            $(".Testimonials .active").fadeOut(100, function () {
                $(this).removeClass("active").next(".client").addClass("active").fadeIn();
                checkClient();
                
            });
        } else {
            $(".Testimonials .active").fadeOut(100, function () {
                $(this).removeClass("active").prev(".client").addClass("active").fadeIn();
                checkClient();
                
            });
            
        }
        
    });
});



$(".ourWorks").click(function () {
    "use strict";
    $("body").animate({
        scrollTop: $(".ourWork").offset().top
    }, 1000);
});

$(".hire").click(function () {
    "use strict";
    $("body").animate({
        scrollTop: $(".ourTeam").offset().top
    }, 1000);
});
