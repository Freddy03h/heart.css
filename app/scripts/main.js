/*global FastClick:false */
'use strict';

$(function() {
	FastClick.attach(document.body);
});

//Prevent iOS 7.1 bug on landscape with minimal-ui
window.addEventListener('orientationchange', function(){
	window.scrollTo(0,0);
}, true);

/////////

function doNavigation(fromPage, toPage, animation) {
	fromPage.on('webkitAnimationEnd animationend', function() {
		fromPage.off('webkitAnimationEnd animationend');
		fromPage.removeClass('current ' + animation + ' out');
		toPage.removeClass(animation + ' in');
	});

	toPage.addClass(animation + ' in current');
	fromPage.addClass(animation + ' out');
}

var animationPages = $('.layout-animation > div');
animationPages.on('click', '.animate', function(e){
	var page = $(e.delegateTarget);
	var targetedPage = $('#'+page.find('.page').prop('value'));
	doNavigation(page, targetedPage, page.find('.animation').prop('value'));
});

////////

var splitLayout = $('#layout-split');
var splitButton = $('#split-button');

splitButton.on('click', function(){
	splitLayout.toggleClass('open');
});


////////

var toggleButton = $('.toggle-button');

toggleButton.on('click', function(){
	$('#'+($(this).data('toggle'))).toggleClass('open');
});