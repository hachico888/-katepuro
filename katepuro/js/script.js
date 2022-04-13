$(function () {
    $(window).scroll(function () {
        $('.fade-in').each(function () {
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 150) {
                $(this).addClass('scroll-in');
            }
        });
    });
});