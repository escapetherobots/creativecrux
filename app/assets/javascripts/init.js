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
	myController = new ScrollMagic.Controller();

	scene = new ScrollMagic.Scene({
		triggerElement: '#project03'
	})
		.setClassToggle('#project03', 'fade-inzzz')
		.addTo(myController);
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