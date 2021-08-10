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

// ...................For FAQ accordeon................

    const faqTitle = document.querySelectorAll('.faq__item-title');

    for(let i = 0; i < faqTitle.length; i++){
        let faqContent = faqTitle[i].nextElementSibling;

        faqTitle[i].addEventListener('click', function(){
            faqTitle[i].classList.toggle('open');
            faqContent.classList.toggle('active');
        });
    };

// ...................For button top....................

    const scrollBtn = document.querySelector('.button-up');

    window.onscroll = function(){
        if(window.scrollY > 600){
            scrollBtn.classList.remove('hiden');
        }else if(window.scrollY < 600){
            scrollBtn.classList.add('hiden');
        }
    }
    
});