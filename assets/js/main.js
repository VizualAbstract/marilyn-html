$(function() {
	var win = window;
	$(win).on('resize', function() {
		var height = $(this).height();
		$('.fullheight').height(height);
	}).resize();
});