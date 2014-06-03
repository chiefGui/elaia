define(function(require) {
	var $ = require('jquery'),
			scrolly = require('scrolly');

	$('.parallax').scrolly({bgParallax: true});

	$(function() {
		tiles = $('.hide');
		$(window).scroll(function(x, y) {
				tiles.each(function(i) {
	        a = $(this).offset().top + $(this).height();
	        b = $(window).scrollTop() + $(window).height();
	        if (a < b) {
	        	$(this)
	        		.slideDown('slow')
	        		.animate({
	        			opacity: 1,
	        			queue: false,
	        			duration: 'slow'
	        		})
	        };
	    });
		});
	})

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
					if($y >= 300) {
						closeMenu();
					}
				});
			}
		});
	});

	require('UI');

	var UI = new UI;
	UI.renderAuthors();
});