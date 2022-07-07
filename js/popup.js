$(document).ready(function () {

	let overlayVisible = false;

	$(".overlay-trigger").on("click", function() {
		if(overlayVisible == false) {
			$(".overlay").addClass("overlay_status_visible");
			overlayVisible = true;
		}
	});

	$(".closeicon").on("click", function() {
		if(overlayVisible == true) {
			$(".overlay").removeClass("overlay_status_visible");
			overlayVisible = false;
		}
	});


});