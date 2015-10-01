$(document).ready(function(){
	console.log('main.js is working')

	/* load header footer */
	$('#header-container').load('template/header.html', function(){
		$('#side-menu').mmenu({
			slidingSubmenus: false,
		});
		$('#side-menu').find('.mm-next').each(function(){
			$(this).next('a[href="#"]').attr('href', 'javascript:void(0)')
			$(this).next('a[href="javascript:void(0)"]').click(function(event){
				event.preventDefault();
				$(this).prev('.mm-next').trigger('click');
			})
		})

	});
	$('#footer-container').load('template/footer.html');

	/* detect side menu overflow */


	/* home page */
	if ($('html').hasClass('homepage')) {
		$(window).resize(function(){
			var winHeight = $(window).height();
			$('#section01').css('height', winHeight);
		});
		$(window).trigger('resize');
	}

	/* back to top */
	var backTop = '<a href="javascript:void(0)" id="back-to-top" title="Back to top"><i class="fa fa-caret-up"></i></a>';
	$('body').append(backTop);
	if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
	}


});