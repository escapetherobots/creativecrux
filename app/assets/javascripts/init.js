window.CruxApp || (window.CruxApp = {});
CruxApp.init = function(){
	var all_listeners = "DOMMouseScroll MouseScrollEvent MozMousePixelScroll wheel scroll resize";
	this.toggler();
	this.sceneBuilder();
	this.sideNav();
}

//toggle effect
CruxApp.toggler = function(){
	$(document).off('click', '[data-test="toggle"]').on('click', '[data-test="toggle"]', function(){
  	$('[data-test="toggle-project-detail"]').fadeToggle();
  	
    	//$(this).fadeToggle();
    });
}

//Scene Builder - Image Magic
CruxApp.sceneBuilder = function(){
	var myController, tween, scene;
	var $animation_elements = $(".animation-element");
	var $window = $(window);
	var $mysvg = $('.svg-project');
	// Init Scroll Magic
	// Controller
	myController = new ScrollMagic.Controller();
	// Scene
	

		//loop through each project
		$mysvg.each(function(){
			var self = this;
			
			scene = new ScrollMagic.Scene({
				//options for scene settings
				// this => indicates that each element of class svg-project
				// self.children[0] this will reference the svg inside each svg-project node
				triggerElement: self.children[0], 
				duration: 180,
				offset: 100
				
				//triggerHook
			})
			// .addIndicators({
			// 	// options object for addIndicators
			// 	name: 'fade scene',
			// 	colorTrigger: 'red',
			// 	colorStart: '#75c695'
			// })
			.setClassToggle(self, 'fade-inzzz') // add class to #project03
			.addTo(myController);
		});
}

// Side Menu
CruxApp.sideNav = function(){
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
}



$(document).on("turbolinks:load", function(){
	return CruxApp.init();
});