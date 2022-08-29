$(function () {

    $('.reviews-slider').slick({
        infinite: true,
        centerMode: true,
        slidesToShow: 3,
        variableWidth: true,
        adaptiveHeight: true,
        dots: true,
        arrows: false
    });

    $('.menu__btn').on('click', function () {
        $('.menu__list').toggleClass('menu__list--active');
    });

});