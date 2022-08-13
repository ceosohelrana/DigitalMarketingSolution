$(function () {
    //  Stykey Header  
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > 200) {
            $('.navbar').addClass('sticky_header');
        } else {
            $('.navbar').removeClass('sticky_header');
        }
    });
    // sticky Header part end

    // up to top part start

    //==== Back-to-top button
    $(window).on('scroll', function (event) {
        if ($(this).scrollTop() > 600) {
            $('.up_to_top').fadeIn(200)
        } else {
            $('.up_to_top').fadeOut(200)
        }
    });
    //==== Animate the scroll to top
    $('.up_to_top').on('click', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 1000);
    });
    // up to top part end


    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    new WOW().init();


})