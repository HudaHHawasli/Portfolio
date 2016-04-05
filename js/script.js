/**
 * Created by Huda on 3/6/2016.
 */
jQuery(document).ready(function($){

    // show header
    $('.header-container').animate({
        opacity: 1
    },3000);


    // if down arrow is clicked
    $(".down-arrow").click(function(){
        $('html,body').animate({
            scrollTop: $(".about").offset().top - 100
        },'slow');
    });

    $( window ).scroll( function( ) {

        // hide element 
        if($(window).scrollTop() == 0){
            $(".self-img").css('opacity',0);
            $(".about-text").css('opacity',0);
        }

        // if about box is visible
        if(checkVisible($(".about"))){
            $('.self-img').animate({
                opacity: 1,
                right:0
            },1000);
            $('.about-text').animate({
                opacity: 1,
                left:0
            },1000);
        }
        
        // if skills box is visible
        if(checkVisible($(".skills-content"))){
           $(".percentage-text").each(function(i,elem){
                percentage = $(elem).find('input').val();
                $({ Counter: 0 }).animate({ Counter: percentage}, {
                    duration: 3000,
                    easing: 'linear',
                    step: function () {
                        $(elem).text(Math.ceil(this.Counter));
                        add_width = (this.Counter*$(elem).parent().width()/100)+'px';
                        $(elem).parent().find('.percentage').css('width', add_width);
                    }
                }); 
            });
        }

        // if contace me box is visible
        if(checkVisible($(".contact-me"))){
             $('.left-content').animate({
                opacity: 1,
                right:25
            },1000);
            $('.right-content').animate({
                opacity: 1,
                left:25
            },1000);
        }

        
    } );

     
    function checkVisible( elm, eval ) {
        eval = eval || "visible";
        var vpH = $(window).height(), // Viewport Height
            st = $(window).scrollTop(), // Scroll Top
            y = $(elm).offset().top,
            elementHeight = $(elm).height();

        
        if (eval == "visible") return ((y < (vpH + st)) && (y > (st - elementHeight)));
        if (eval == "above") return ((y < (vpH + st)));
    }


    // ==== slider 

    // total margin 
    var margin = 0;
    // #of slides
    var slides_count =  $( ".slides-container .slide").length;
    // current slide
    var current_slide = 1;
    // the width of the margin 
    var margin_width = $(".slide").width();



    setInterval(function(){
        left_slide(current_slide); 
    },20000);

    function left_slide(slide){
        // if we didn't reach the last slide yet
        if(slide<slides_count){
            // decrease margin
            margin =  margin - margin_width;
            // increase current slide
            current_slide = slide + 1;
            // make the move
            $( ".slides-container" ).animate({
                "margin-left" : margin
            },800);
           
        }
        // return to the first slide
        else {
            margin = 0;
            current_slide = 1;
            $( ".slides-container" ).animate({
                "margin-left" : margin
            },800);
        }
    }

    function right_slide(slide){
        // if we are not in the first slide
        if(slide > 1){
            margin = margin + margin_width;
            current_slide = slide - 1;
            $( ".slides-container" ).animate({
                "margin-left" : margin
            },800);
        }
        else {
            margin = 0;
            $(".slides_container").css('margin-left','0');
        }

    }


    $(".left-arrow").click(function() {
        right_slide(current_slide);
    });

    $(".right-arrow").click(function() {
        if(current_slide < slides_count){
            left_slide(current_slide);
       }
    });
    

    
});

