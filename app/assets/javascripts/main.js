var ready;
var gs;
var $window = $(window),
	win_height_padded = $window.height() *1.1,
	isTouch = Modernizr.touch;

var allTheBindings = 'DOMMouseScroll MouseScrollEvent MozMousePixelScroll wheel scroll';

var	checkScroll = function(elem) {

		var docViewTop = $window.scrollTop();
		var docViewBottom = docViewTop + $window.height();

		var elemTop = $(elem).offset().top;
		var elemBottom = elemTop + $(elem).height();
		var elemMiddle = elemBottom * 2;
		console.log('scrolling' + ' scrolltop: ' + docViewTop + ' window height: ' + docViewBottom);
		console.log(elemMiddle);
		return ((elemMiddle <= docViewBottom) && (elemTop >= docViewTop));
	};

var scrollify = function() {
	$(".revealOnScroll").each(function(){
		if (checkScroll(this) === true) {
			$(this).addClass('zzz');
		} else {
			$(this).removeClass('zzz');
		}
	})
}




ready = function() {
	// Effect on scroll


	$('html, body').bind(allTheBindings, scrollify);

	


	// Side Menu
	var isLateralNavAnimating = false;
	
	//open/close lateral navigation
	$('.cd-nav-trigger').on('click', function(event){
		event.preventDefault();
		//stop if nav animation is running 
		if( !isLateralNavAnimating ) {
			if($(this).parents('.csstransitions').length > 0 ) isLateralNavAnimating = true; 
			
			$('body').toggleClass('navigation-is-open');
			$('.cd-navigation-wrapper').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				//animation is over
				isLateralNavAnimating = false;
			});
		}
	});
	
  $(document).off('click', '[data-test="toggle"]').on('click', '[data-test="toggle"]', function(){
  	$('[data-test="toggle-project-detail"]').fadeToggle();
  	
    	//$(this).fadeToggle();
    });

  $('#svgWrapper').mouseleave(function(){
    $(this).removeClass('clicked');
  }).click(function(){
    $(this).addClass('clicked').html($(this).html());
  });

  $(document).off('click', '[data-resume="start"]').on('click', '[data-resume="start"]', function(){})

  $('#stage').addClass("svgLoaded");


	// TweenMax.to("#cruxlogo", 2, {
	// 	left:300
	// });

	TweenMax.to("#crux-logo", 2, {
		left:240,
		top: 130
	})

	// TweenMax.to("#cruxlogo", 2, {
	// 	left:20,
	// 	top: 20
	// })

	var t1 = new TimelineMax();
	// t1.staggerTo("#crux-logo--zzz", 3, {
	// 	attr: {
	// 		cy: 0
	// 	},
	// 	repeat: -1
	// }, 0.1)

	// t1.to("#crux-logo--zzz", 2, {x:50, y:50})
}


$(document).on('turbolinks:load', ready);