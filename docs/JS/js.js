"use strict";
$(function () {
	$('.slider').slick({
		arrows: false,
		adaptiveHeight: true,
		speed: 700,
		cssEase: 'ease',
		autoplay: true,
		autoplaySpeed: 3000,
		infinite: true,
		initialSlide: 2,
		draggable: false,
		swipe: false,
		touchThreshold: 10,
		touchMove: true,
		waitForAnimate: true,
		centerMode: false,
		variableWidth: false,
		rows: 1,
		slidesPerRow: 1,
		vertical: false,
		verticalSwiping: false,
		fade: false,
	})
});