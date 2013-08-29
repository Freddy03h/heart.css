/*global FastClick:false */
'use strict';

$(function() {
	FastClick.attach(document.body);
});

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

var animationPageOne = $('#page1');
var animationPageTwo = $('#page2');
var animationPageOneButton = $('#page1-button');
var animationPageTwoButton = $('#page2-button');
var animationPageOneSelect = $('#page1-select');
var animationPageTwoSelect = $('#page2-select');

animationPageOneButton.on('click', function(){
	doNavigation(animationPageOne, animationPageTwo, animationPageOneSelect.prop('value'));
});

animationPageTwoButton.on('click', function(){
	doNavigation(animationPageTwo, animationPageOne, animationPageTwoSelect.prop('value'));
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