$(function(){
    // when clicked on nav item add class active
    $(".navbar-nav .nav-link").click(function(){
        $(this).addClass("active").parent().siblings().find("a").removeClass("active");
    });

    // toggle sound on video
    $("video").prop('muted', true);

    $("#mute-video").click(function () {
        if ($("video").prop('muted')) {
            $("video").prop('muted', false);
        } else {
            $("video").prop('muted', true);
        }

        $("#mute").toggleClass("fa-volume-up  fa-volume-mute");
    });


    $(window).scroll(function(){
        var navbar = $(".navbar");
        $(window).scrollTop() > $(".navbar").height() ? navbar.addClass("scrolled") : navbar.removeClass("scrolled");
    });

});

new WOW().init();