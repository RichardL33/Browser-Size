// Responsive JS - Get browser window width & height

var docSizeWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var docSizeHeight = window.innerHeight || window.outerHeight || document.documentElement.clientHeight || document.body.clientHeight;

$(window).resize(function() {

	
	if (docSizeWidth < 480) {
	// Execute if window is under 480px wide

	} else if (docSizeWidth < 960) {
	// Execute if window is under 960px wide

	} else {
	// Execute if window is 960px wide and up

	}

});
