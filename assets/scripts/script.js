$(document).ready(function(){

    // ++++++++++++++++++++++++++++++++
    // Navigation
    // ++++++++++++++++++++++++++++++++
    $('.nav__main').clone().appendTo('nav.desktop-nav').removeClass('mobile').addClass('desktop');

    $('.desktop-nav .trigger').click(function(event) {
        var navWidth = $('.nav__main.desktop').width();
        var effect = 'slide';
        var duration = 300;
        console.log(navWidth)

        event.preventDefault();
        $(this).toggleClass('triggered');

        if ( $(this).hasClass('triggered') ) {
            $('.nav__main.desktop').toggle(effect, 'left', duration);
            $(this).animate({
                'marginLeft': '-220px',
            });
        } else {
            $('.nav__main.desktop').toggle(effect, 'right', duration);
            $(this).animate({
                'marginLeft': 0,
            });
        }
    });


    // ++++++++++++++++++++++++++++++++
    // Home Projects
    // ++++++++++++++++++++++++++++++++
	$('.projects article').hide();

    $('.item-wrap').mouseenter(function(){
    	$(this).children('article').show();
    }).mouseleave(function(){
    	$(this).children('article').hide();
    })

});