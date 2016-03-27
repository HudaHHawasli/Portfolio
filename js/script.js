/**
 * Created by Huda on 3/6/2016.
 */
jQuery(document).ready(function($){


    $( window ).scroll( function( ) {
        var loadHeight = jQuery( document ).height( ) - jQuery( window ).height();
        if( jQuery( window ).scrollTop() <= loadHeight  &&   jQuery( window ).scrollTop() > 1) {
            $('.content-container').css('visibility','visible');
        }else {
            $('.content-container').css('visibility','hidden');
        }
    } );

    // ======= skills

    // percent = 0.9;
    // add_width = (percent*$('.percentage').parent().width())+'px';
    // $('.percentage').animate({'width': '+='+add_width}, 3000,"linear");

    $(window).scroll(function(){
        if(checkVisible($(".content-skills"))){
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
       
    });
     
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
    },5000);

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

