function initNavbar() {

    var scrollSpeed = 750,
        scrollOffset = 50,
        easing = 'swing';

    $('#navbar-top .navbar-default ul.nav').onePageNav({
        currentClass: 'active',
        changeHash: false,
        scrollSpeed: scrollSpeed,
        scrollOffset: scrollOffset,
        scrollThreshold: 0.5,
        filter: ':not(.external)',
        easing: easing
    });

    // Custom fix for external nav links
    $('.nav-external').click(function (e) {
        e.preventDefault();
        $('html, body').stop().animate({
            scrollTop: $($(this).attr("href")).offset().top - scrollOffset
        }, scrollSpeed, easing);
    });

    // Stick nav
    $('#navbar-top .navbar-default').affix({
        offset: {
            top: $('#home').height()
        }
    });
}

function initTooltip() {
    $('.tip').tooltip();
}
$(document).ready(function () {
    initNavbar();
    initTooltip();
});
$(window).load(function() { 
	$(".loader .fading-line").delay(500).fadeOut(); 
	$(".loader").delay(1000).fadeOut("slow");
});
