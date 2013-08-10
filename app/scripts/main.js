'use strict';

/////////

function doNavigation(fromPage, toPage, animation) {
	console.log(animation);
	//fromPage.addEventListener('webkitAnimationEnd animationend', navigationEndHandler);
	fromPage.on('webkitAnimationEnd animationend', function() {
		//fromPage.removedEventListener('webkitAnimationEnd animationend');
		console.dir(fromPage);
		console.log('ANIMATION END');
		fromPage.off('webkitAnimationEnd animationend');
		fromPage.removeClass('current ' + animation + ' out');
		toPage.removeClass(animation + ' in');
	});

	//toPage.classList.add(animation + ' in current');
	toPage.addClass(animation + ' in current');
	//fromPage.classList.add(animation + ' out');
	fromPage.addClass(animation + ' out');
}

var animationPageOne = $('#page1');
var animationPageTwo = $('#page2');
var animationPageOneButton = $('#page1-button');
var animationPageTwoButton = $('#page2-button');

animationPageOneButton.on('click', function(){
	doNavigation(animationPageOne, animationPageTwo, 'slideleft');
});

animationPageTwoButton.on('click', function(){
	doNavigation(animationPageTwo, animationPageOne, 'slideright');
});

////////

var splitLayout = $('#split-layout');
var splitButton = $('#split-button');

splitButton.on('click', function(){
	splitLayout.toggleClass('open');
});