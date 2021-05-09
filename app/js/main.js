$(function () {
    $('.curators__inner').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button class="slick-arrow slick-prev"><img src="images/curators/slide-left.svg" alt=""></button>',
        nextArrow: '<button class="slick-arrow slick-next"><img src="images/curators/slide-right.svg" alt=""></button>',
        responsive: [
            {
                breakpoint: 911,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 681,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 460,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]

    });
    $('.album__inner').slick({
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000,
        asNavFor: '.thumbs',
        prevArrow: '<button class="slick-arrow slick-prev"><img src="images/curators/slide-left.svg" alt=""></button>',
        nextArrow: '<button class="slick-arrow slick-next"><img src="images/curators/slide-right.svg" alt=""></button>',
    });
    $('.thumbs').slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        asNavFor: '.album__inner',
        focusOnSelect: true,

    });
    // Перевод SVG в Inline
    $('img.download-svg').each(function () {
        var $img = $(this);
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');
        $.get(imgURL, function (data) {
            var $svg = $(data).find('svg');
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
            }
            $svg = $svg.removeAttr('xmlns:a');
            if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            }
            $img.replaceWith($svg);
        }, 'xml');
    });

    $('[data-fancybox="gallery"]').fancybox({
        animationEffect: "zoom",
        transitionEffect: "fade",
        buttons: [
            "zoom",
            "slideShow",
            "fullScreen",
            "thumbs",
            "close"
        ],
    });
    let header = $('.header');
    let hederHeight = header.height(); // вычисляем высоту шапки

    $(window).scroll(function () {
        if ($(this).scrollTop() > 1) {
            header.addClass('header_fixed');
            $('body').css({
                'paddingTop': hederHeight + 'px' // делаем отступ у body, равный высоте шапки
            });
        } else {
            header.removeClass('header_fixed');
            $('body').css({
                'paddingTop': 0 // удаляю отступ у body, равный высоте шапки
            })
        }
    });

});