$(document).ready(function(){

    // ++++++++++++++++++++++++++++++++
    // Navigation
    // ++++++++++++++++++++++++++++++++
    $('.nav__main').clone().appendTo('nav.desktop-nav').removeClass('mobile').addClass('desktop');

    navWidth = $('.nav__main.desktop').width();

    $('.desktop-nav .trigger').css({
        marginLeft : -Math.abs(navWidth)
    });

    $('.desktop-nav .trigger').click(function(event) {
        var effect = 'slide';
        var duration = 350;

        $(this).toggleClass('open');

        if ( $(this).hasClass('open') ) {
            $('.nav__main.desktop').toggle(effect, 'right', duration);
            $(this).animate({
                'marginLeft': '0',
            });
        } else {
            $('.nav__main.desktop').toggle(effect, 'left', duration);
            $(this).animate({
                'marginLeft': '-160px'
            });
        }
    });


    // ++++++++++++++++++++++++++++++++
    // Home Projects
    // ++++++++++++++++++++++++++++++++
    if ( $('body.page-home').length > 0 ) {
    	$('.projects article').hide();

        $('.item-wrap').mouseenter(function(){
        	$(this).children('article').show();
        }).mouseleave(function(){
        	$(this).children('article').hide();
        })
    }

    // ++++++++++++++++++++++++++++++++
    // Project Page
    // ++++++++++++++++++++++++++++++++
    if ( $('.body-content-wrapper.post').length > 0 ) {

        // For each of the lightbox images clone them into
        // Foundation reveal
        $('.image__wrapper').each(function(){
            var img = $(this).find('img');

            img.clone()
                .appendTo($(this).find('.reveal-modal'))
                .addClass('hi_res');
        })

        // Change the ending of the file source to be the
        // Hi-Res image
        $('img.hi_res').attr('src', function(index, attr){

            // Changes the ending of image to hi-res photo
            // Make sure that the image is a png or jpg
            var ext = fileName.split('.').pop();

            if ( ext === 'jpg' ) {
                return attr.replace('.jpg', '_hi-res.jpg');
            } else {
                return attr.replace('.png', '_hi-res.png');
            }
        });
    }

    // ++++++++++++++++++++++++++++++++
    // General Helpers
    // ++++++++++++++++++++++++++++++++
    $('a.link__removed').click(function(event) {
        event.preventDefault();
    });
});