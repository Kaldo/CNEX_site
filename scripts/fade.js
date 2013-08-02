$(document).ready(function() {
	$('.fadeTL').append('<span class="hoverTL"></span>').each(function () {
	  var $span = $('> span.hoverTL', this).css('opacity', 0);
	  $(this).hover(function () {
		$span.stop().fadeTo(500, 1);
	  }, function () {
		$span.stop().fadeTo(500, 0);
	  });
	});
});

$(document).ready(function() {
	$('.fadeBL').append('<span class="hoverBL"></span>').each(function () {
	  var $span = $('> span.hoverBL', this).css('opacity', 0);
	  $(this).hover(function () {
		$span.stop().fadeTo(500, 1);
	  }, function () {
		$span.stop().fadeTo(500, 0);
	  });
	});
});

$(document).ready(function() {
	$('.fadeTR').append('<span class="hoverTR"></span>').each(function () {
	  var $span = $('> span.hoverTR', this).css('opacity', 0);
	  $(this).hover(function () {
		$span.stop().fadeTo(500, 1);
	  }, function () {
		$span.stop().fadeTo(500, 0);
	  });
	});
});

$(document).ready(function() {
	$('.fadeBR').append('<span class="hoverBR"></span>').each(function () {
	  var $span = $('> span.hoverBR', this).css('opacity', 0);
	  $(this).hover(function () {
		$span.stop().fadeTo(500, 1);
	  }, function () {
		$span.stop().fadeTo(500, 0);
	  });
	});
});