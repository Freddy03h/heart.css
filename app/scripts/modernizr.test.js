
Modernizr.addTest("overflowscrolling",function(){
  return Modernizr.testAllProps("overflowScrolling");
});

/* modernizr-test_position_fixed_ios.js
* Original by Daniel Ott (https://gist.github.com/1333800)
* 3 March 2011
* Updated by Philipp Söhnlein 3 November 2011
* Custom Tests using Modernizr's addTest API
*/

/* iOS
* There may be times when we need a quick way to reference whether iOS is in play or not.
* While a primative means, will be helpful for that.
*/
Modernizr.addTest('ipad', function () {
  return !!navigator.userAgent.match(/iPad/i);
});

Modernizr.addTest('iphone', function () {
  return !!navigator.userAgent.match(/iPhone|iPod/i);
});

/*Modernizr.addTest('ipod', function () {
  return !!navigator.userAgent.match(/iPod/i);
});*/

Modernizr.addTest('appleios', function () {
  return (Modernizr.ipad /*|| Modernizr.ipod*/ || Modernizr.iphone);
});

Modernizr.addTest('safari', function () {
  return !!navigator.userAgent.match(/Safari/i);
});

/* CSS position:fixed
* Not supported in older IE browsers, nor on Apple's iOS devices.
* Actually the token example on the Modernizr docs. http://www.modernizr.com/docs/
*/
Modernizr.addTest('positionfixed', function () {
    var test = document.createElement('div'),
        control = test.cloneNode(false),
        fake = false,
        root = document.body || (function () {
            fake = true;
            return document.documentElement.appendChild(document.createElement('body'));
        }());

    var oldCssText = root.style.cssText;
    root.style.cssText = 'padding:0;margin:0';
    test.style.cssText = 'position:fixed;top:42px';
    root.appendChild(test);
    root.appendChild(control);

    var ret = test.offsetTop !== control.offsetTop;

    root.removeChild(test);
    root.removeChild(control);
    root.style.cssText = oldCssText;

    if (fake) {
        document.documentElement.removeChild(root);
    }

    /* Uh-oh. iOS < 5 would return a false positive here.
    * If it's about to return true, we'll explicitly test for known iOS User Agent strings.
    * "UA Sniffing is bad practice" you say. Agreeable, but sadly this feature has made it to
    * Modernizr's list of undectables, so we're reduced to having to use this. */
    navigator.userAgent.match(/OS (\d)/i);
    return ret && (!Modernizr.appleios || (Modernizr.appleios && RegExp.$1 >= 5));
});