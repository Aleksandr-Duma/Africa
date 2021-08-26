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

//...................E-mail Ajax Send...................

    $("form").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            location.href = "thx.html";
        });
        return false;
    });
    
});

//...................For.You.tube...................

function r(f){/in/.test(document.readyState)?setTimeout('r('+f+')',9):f()}
r(function(){
    if (!document.getElementsByClassName) {
        // Поддержка IE8
        var getElementsByClassName = function(node, classname) {
            var a = [];
            var re = new RegExp('(^| )'+classname+'( |$)');
            var els = node.getElementsByTagName("*");
            for(var i=0,j=els.length; i < j; i++)
                if(re.test(els[i].className))a.push(els[i]);
            return a;
        }
        var videos = getElementsByClassName(document.body,"youtube");
    } else {
        var videos = document.getElementsByClassName("youtube");
    }
    var nb_videos = videos.length;
    for (var i=0; i < nb_videos; i++) {
        // Находим постер для видео, зная ID нашего видео
        videos[i].style.backgroundImage = 'url(https://i.ytimg.com/vi/' + videos[i].id + '/sddefault.jpg)';
        // Размещаем над постером кнопку Play, чтобы создать эффект плеера
        var play = document.createElement("div");
        play.setAttribute("class","button-play");
        videos[i].appendChild(play);
        videos[i].onclick = function() {
            // Создаем iFrame и сразу начинаем проигрывать видео, т.е. атрибут autoplay у видео в значении 1
            var iframe = document.createElement("iframe");
            var iframe_url = "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1";
            if (this.getAttribute("data-params")) iframe_url+='&'+this.getAttribute("data-params");
            iframe.setAttribute("src",iframe_url);
            iframe.setAttribute("frameborder",'0');
            // Высота и ширина iFrame будет как у элемента-родителя
            iframe.style.width  = this.style.width;
            iframe.style.height = this.style.height;
            // Заменяем начальное изображение (постер) на iFrame
            this.parentNode.replaceChild(iframe, this);
        }
    }
});