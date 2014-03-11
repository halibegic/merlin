function initNavigation() {

	var scrollSpeed = 750,
		scrollOffset = 50,
		easing = 'swing';
	
    $('#navigation ul.nav').onePageNav({
        currentClass: 'active',
        changeHash: false,
        scrollSpeed: scrollSpeed,
        scrollOffset: scrollOffset,
        scrollThreshold: 0.5,
        filter: ':not(.external)',
        easing: easing
    });
	
	// Custom fix for external nav links
	$('.go-to-by-scroll').click(function(e){
		e.preventDefault();
		$('html, body').stop().animate({scrollTop: $($(this).attr("href")).offset().top - scrollOffset}, scrollSpeed, easing);
	});
}
function initTooltip() {
    $('.tip').tooltip();
}
$(document).ready(function () {
    initNavigation();
    initTooltip();
});