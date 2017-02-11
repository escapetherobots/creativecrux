var tetris;
var ready;
var gs;

var $animation_elements = $(".animation-element");
var $window = $(window);

var all_listeners = "DOMMouseScroll MouseScrollEvent MozMousePixelScroll wheel scroll resize";

var myController, tween, scene;
console.log('first instance of scene', scene);

var sceneBuilder = function(){
	console.log('scene building');
	myController = new ScrollMagic.Controller();

		scene = new ScrollMagic.Scene({
			triggerElement: '#project03'
		})
		.setClassToggle('#project03', 'fade-inzzz')
		.addTo(myController);

	
};


ready = function() {
	//load tetris code
	if ($("#tetris").length > 0){
  	tetris();
	}
	
	sceneBuilder();
	
	

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