// Javascript Entry Point
import $ from 'jquery';
	

$('.banner2').on('click', function(event) {
	$('.slide2top').addClass('slide2bottom');

	var $banner2 = $(banner2);
	$banner2.parent().removeClass('slide2bottom');

});

	

$('.banner3').on('click', function(event) {
	$('.slide3top').addClass('slide3bottom');

	var $banner3 = $(banner3);
	$banner3.parent().removeClass('slide3bottom');
});

