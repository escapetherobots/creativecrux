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

	// $('.fade-in').each(function(){
	// 	//build tween
	// 	tween = TweenMax.from($(this), 0.3, {autoAlpha: 0, scale: 0.7, ease:Linear.easeNone});
	// 	//build scene
	// 		scene = new ScrollMagic.Scene({triggerElement: this})
	// 		.setTween(tween)
	// 		.addTo(myController);

		scene = new ScrollMagic.Scene({
			triggerElement: '#project03'
		})
		.setClassToggle('#project03', 'fade-inzzz')
		.addTo(myController);

		


	// var animateElem = document.getElementById("animate2");
	// var scene = new ScrollMagic.Scene({triggerElement: "#trigger2", duration: 200})
	// 				.on("enter", function () {
	// 					// trigger animation by changing inline style.
	// 					animateElem.style.backgroundColor = "orange";
	// 				})
	// 				.on("leave", function () {
	// 					// reset style
	// 					animateElem.style.backgroundColor = "";
	// 				})
	// 				//.addIndicators({name: "2 - change inline style"}) // add indicators (requires plugin)
	// 				.addTo(controller);
};





var runSceneBuilder = function(){
	//check if mobile or not
	// console.log('the mobile display prop is: ', $('.crux-diagram--mobile').css('display'));
	// if ($('.crux-diagram--mobile').css('display') == 'block') {
	// 	console.log('run builder');
	// 	// this is the mobile
	// 	//check if controller already exists
	// 	if (typeof myController === 'undefined'){
	// 		console.log('the controller has no object', myController);
	// 		sceneBuilder();
	// 		console.log('the controller now has an object', myController);
	// 		console.log('status of scene: ', scene);
	// 	} else {
	// 		console.log('the controller already exists', myController);
	// 		console.log('status of scene: ', scene);
	// 	}
		
	// } else {
	// 	if (typeof myController === 'undefined') {
	// 		console.log('no need to run destroyer', myController);
	// 		console.log('status of scene: ', scene);
	// 	} else {
	// 		console.log('need to run the destroyer', myController);
	// 		sceneDestroyer();
	// 		console.log('status of scene: ', scene);
	// 		console.log('status of myController: ', myController);
	// 	}
	// }
};


ready = function() {
	//load tetris code
	if ($("#tetris").length > 0){
  	tetris();
	}
	
	sceneBuilder();
	// build scene
	// runSceneBuilder();
	// $window.on('resize', runSceneBuilder);
	//$window.trigger('scroll');
	
	

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