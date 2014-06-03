define(function(require) {
	'use strict';

	var $ = require('jquery'),
			masonry = require('masonry');

	function UI () {
		if(!(this instanceof UI)) {
			throw new TypeError('UI constructor cannot be called as a function.');
		};
	};

	UI.renderAuthors = function () {
		
	};

	return UI;
});