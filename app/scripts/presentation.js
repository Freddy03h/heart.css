'use strict';

hljs.initHighlightingOnLoad();

var phoneViewportButton = $('.button-vp-phone');
var tabletteViewportButton = $('.button-vp-tablette');

var bodyEl = $(document.body);

phoneViewportButton.on('click', function(){
	bodyEl.removeClass('viewport-tablette');
});

tabletteViewportButton.on('click', function(){
	bodyEl.addClass('viewport-tablette');
});