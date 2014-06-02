$('.parallax').scrolly({bgParallax: true});

$(function() {
	var $navigation = $('.navigation'),
			$openButton = $navigation.find('.button'),
			$menu = $navigation.find('nav');

	function openMenu() {
		$openButton.addClass('open');

		$navigation
			.stop()
			.animate({
				height: '678px'
			});

			$menu
				.stop()
				.fadeIn();
	};

	function closeMenu(callback) {
		$openButton.removeClass('open');

		$navigation
			.stop()
			.animate({
				height: '100px'
			});

			$menu
				.stop()
				.fadeOut();

		if(callback !== undefined) {
			callback(578);
		}
	};

	$menu.find('ul li a').on('click', function(event) {
		event.preventDefault();

		var $target = $(this).attr('href');

		closeMenu(function(y) {
			$('html, body').stop().animate({
			   scrollTop: ($($target).offset().top - y + 'px')
			}, 300);
		});
	});

	$openButton.on('click', function(event) {
		event.stopPropagation();

		if ($(this).hasClass('open')) {
			closeMenu();
		} else {
			openMenu();

			$(window).scroll(function() {
				var $y = $(this).scrollTop();
				if($y == 300) {
					closeMenu();
				}
			});
		}
	});
});