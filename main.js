$(document).ready(function() {
    $('.menu').on('click', function() {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

    $('.top-nav .nav-link').on('click', function() {
        $('.menu').removeClass('open');
        $('.top-nav').removeClass('open');
    });

    $('nav a[href*="#"]').on('click', function() {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 50
        }, 1500);
    });

    $('#up').on('click', function() {
        $('html, body').animate({
            scrollTop: 0}, 1000);
    });

    AOS.init({
        easing: 'ease',
        duration: 2000,
        once: true
    })

});