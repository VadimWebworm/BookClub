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
                breakpoint: 1230,
                settings: {
                    slidesToShow: 2,
                    // autoplay: false
                }
            },
            {
                breakpoint: 530,
                settings: {
                    slidesToShow: 1,
                    // autoplay: false
                }
            }
        ]

    });
    $('.album__inner').slick({
        fade: true,
        autoplay: false,
        autoplaySpeed: 4000,
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
    //static_header
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
    $('.header__menu-btn').on('click', function (e) {
        e.preventDefault();
        $('.header__menu-btn').toggleClass('menu__btn-active');
        $('.header__menu').toggleClass('menu_active');
        $('.content').toggleClass('content_active');


    })
    //live_search
    $('#filters-search-input').keydown(function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();
            return false;
        }
    });

    $(document).ready(function () {
        $('#filters-search-input').hideseek({
            nodata: 'Результаты не найдены'
        });
    });

    var mixer = mixitup('.book__wrapper');

    //animate_to_scroll
    // $(window).scroll(function (){
    //     $('.mov').each(function (){
    //         var imagePos = $(this).offset().top;
    //         var topOfWindow = $(window).scrollTop();
    //         if (imagePos < topOfWindow+400) {
    //             $(this).removeClass('mov');
    //         }
    //     });
    // });
    // var id="x";

    // $('promo__inner').append('<style>body {overflow-x: hidden;}#allrecords {overflow: visible !important;}#t-header,#t-footer {position: relative;z-index: 2;} .t-rec {position: relative;z-index: 1;}'+id+' { position: -webkit-sticky; position: sticky; top: 0; z-index: 0;}</style>');
    
    // $(window).on('load resize', function(){
    //     $(id).each(function(){
    //         var topPosition = $(window).height() - $(this).height();
    //         if (topPosition < 0) {
    //             $(this).css('top',topPosition)
    //         } else {
    //             $(this).css('top',0)
    //         }
    //     });
    // });
});