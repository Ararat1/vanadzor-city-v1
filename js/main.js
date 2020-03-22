$(document).ready(function () {

    let header = new Headhesive('.header');

    $('._slider').slick({
        centerMode: true,
        centerPadding: 0,
        autoplay: true,
        cssEase: 'ease',
        autoplaySpeed: 3000,
        easing: 'linear',
        speed: 1250,
        prevArrow: '.arrow-prev',
        nextArrow: '.arrow-next',
    });

    $('a[data-target^="anchor"]').bind('click.smoothscroll', function () {
        let target = $(this).attr('href'),
            bl_top = $(target).offset().top - 90;
        $('body, html').animate({
            scrollTop: bl_top
        }, 700);
        return false;
    });


    const toSlide = n => {
        $(`.slider-${n}`).slick({
            centerMode: true,
            centerPadding: 0,
            prevArrow: `.arrow-prev-${n}`,
            nextArrow: `.arrow-next-${n}`,
        });
    };
    
    const cb = (f, n) => f(n);

    let block_1 = $('.gallery-0'),
        block_2 = $('.gallery-1'),
        block_3 = $('.gallery-2'),
        block_4 = $('.gallery-3'),
        block_5 = $('.gallery-4');

    block_1.on("click", function () {
        cb(toSlide, 0);
    });

    block_2.on("click", function () {
        cb(toSlide, 1);
    });

    block_3.on("click", function () {
        cb(toSlide, 2);
    });

    block_4.on("click", function () {
        cb(toSlide, 3);
    });

    block_5.on("click", function () {
        cb(toSlide, 4);
    });
});