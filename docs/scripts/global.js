// Initialize Modal
function initModal() {

	// Open Modal
	$("#icons .icon").click(function() {

		$("#icons .icon").removeClass("active")
						 .not($(this));

		$(this).addClass("active")
			   .find("*")
			   .clone()
			   .appendTo("#modal .icon");

		$("body").css("overflow", "hidden");

		$("#modal").fadeIn();

		return false;

	});

	// Close Modal
	$(".close-modal").click(function() {

		$("#icons .icon").removeClass("active");

		$("#modal .icon").empty();

		$("body").css("overflow", "inherit");

		$("#modal").fadeOut();

		return false;

	});

}

// Document Ready Function
$(document).ready(function() {

	initModal();

});
