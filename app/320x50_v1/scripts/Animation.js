var app = app || {};


app.Animation = (function () {

	var banner = document.getElementById('banner');
	var t = TweenMax;
	var tl1 = new TimelineMax();
	var tl2 = new TimelineMax();

	// --------------------------------------------------------------------------------------
	// set default properties
	function initialize() {
		// DO NOT EDIT: reveals banner once loaded
		t.set(banner, {opacity:1});

		
	}

	// --------------------------------------------------------------------------------------
	// Starts the animation
	function start() {
		tl1.to(txt1, .5, {autoAlpha:1})
		.to(txt1, .5, {autoAlpha:0}, "+=2")

		.to(txt2, .5, {autoAlpha:1})
		.to(txt2, .5, {autoAlpha:0}, "+=2")

		.to(txt3, .5, {autoAlpha:1});


		// t.to(img, 12, {scale:1.2, y:"+=10", ease: Sine.easeOut});
	}

	// --------------------------------------------------------------------------------------
	// Stops the animation
	function stop() {
		console.log("stopping animation");
	}

	// --------------------------------------------------------------------------------------
	// Publicly accessible methods and properties
	return {
		initialize:initialize,
		start:start,
		stop:stop
	}

})();
