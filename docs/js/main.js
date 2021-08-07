$(function(){
// ....................Animate.js......................

    new WOW().init();

// ......................Scroll........................

    $('a[href^="#"]').click(function(){
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        },800);
    });
    
});