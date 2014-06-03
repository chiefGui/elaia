require.config({
	baseUrl: 'js',
	paths: {
		jquery: 'vendor/jquery-2.1.1.min',
		modernizr: 'vendor/modernizr-2.6.2.min',
		scrolly: 'vendor/jquery.scrolly',
		masonry: 'vendor/masonry.pkgd.min'
	},
	shim: {
		'scrolly': {
			deps: ['jquery'],
			exports: 'scrolly'
		}
	}
});

require(['main']);