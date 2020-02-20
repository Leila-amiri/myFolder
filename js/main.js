
$(function() {
	$("#carousel-first").on('mousewheel', function() {
		$("#carousel-first").slideUp('10000');
		$("#carousel-last").slideDown('10000');
		$('.dot2').css('backgroundColor', '#ff00cc');
		$('.dot1').css('backgroundColor', 'blue');
	});

	$('.dot1').on('click', function() {
		$('.dot2').css('backgroundColor', 'blue');
		$('.dot1').css('backgroundColor', '#ff00cc');
		$('#carousel-last').slideUp();
		$('#carousel-first').slideDown();
	});

	$('.dot2').on('click', function() {
		$('.dot1').css('backgroundColor', 'blue');
		$('.dot2').css('backgroundColor', '#ff00cc');
		$('#carousel-first').slideUp('5000');
		$('#carousel-last').slideDown('10000');
	}); 


	//Menu Bar
	$('#bar').on('click', function() {
		$('#sideNav').toggle();
	});


});