window.CruxApp || (window.CruxApp = {});
CruxApp.init = function(){
	var all_listeners = "DOMMouseScroll MouseScrollEvent MozMousePixelScroll wheel scroll resize";
	this.toggler();
	//this.fitTexter();
	this.sceneBuilder();
	this.sideNav();
	this.resume();
	//this.trig();
	//this.particleBg();

	if ( $('.z-uxContainer').length ) {
		this.snap();
		this.snap2();
		this.snap3();
	}

	if ( $('.z-projectPostsContainer #robot-svg').length ) {
		this.snap();
	}

	if ( $('.z-projectPostsContainer #robot2-svg').length ) {
		this.snap2();
	}

	if ( $('.z-projectPostsContainer #robot3-svg').length ) {
		this.snap3();
	}

	if( $('.projects').length ) {
		this.typeShuffler();
	}

	// if ( $('#myChart').parentsUntil('.cd-panel').css('visibility') != "hidden" ){
	// 	this.myChart();
	// }

	if ( $('#charts').length ) {
		this.myChart();
	}
	
		
}

CruxApp.resume = function(){
	
	$('#zd-btn').on('click', function(event){
		event.preventDefault();
		$('.cd-panel').addClass('is-visible');
	});
	//clode the lateral panel
	$('.cd-panel').on('click', function(event){
		if( $(event.target).is('.cd-panel') || $(event.target).is('.cd-panel-close') ) { 
			$('.cd-panel').removeClass('is-visible');
			event.preventDefault();
		}
	});
}

CruxApp.trig = function(){
	function fun1(x) {return Math.sin(x);}
	function fun2(x) {return Math.cos(6*x);}

	function draw() {
		var canvas = document.getElementById('myCanvas');
		if (null == canvas || !canvas.getContext) return;

		var axes = {},
			ctx = canvas.getContext('2d');

		axes.x0 = .5 + .5*canvas.width;

		axes.y0 = .5 + .5*canvas.height;
		axes.y1 = axes.y0 + .5;
		axes.scale = 100;
		axes.doNegativeX = true;

		showAxes(ctx, axes);
		funGraph(ctx, axes, fun1, "rgb(255,255,255)", 5);
		funGraph(ctx, axes, fun2, "rgb(0,0,0)", 2);
	}

	function funGraph (ctx,axes,func,color,thick) {
		 var xx, yy, dx=2, x0=axes.x0, y0=axes.y0, scale=axes.scale;
		 var iMax = Math.round((ctx.canvas.width-x0)/dx);
		 var iMin = axes.doNegativeX ? Math.round(-x0/dx) : 0;
		 ctx.beginPath();
		 ctx.lineWidth = thick;
		 ctx.strokeStyle = color;

		 for (var i=iMin;i<=iMax;i++) {
		  xx = dx*i; yy = scale*func(xx/scale);
		  if (i==iMin) ctx.moveTo(x0+xx,y0-yy);
		  else         ctx.lineTo(x0+xx,y0-yy);
		 }
		 ctx.stroke();
	}

		function showAxes(ctx,axes) {
		 var x0=axes.x0, canvasWidth=ctx.canvas.width;
		 var x1 = axes.x1;
		 var y0=axes.y0, h=ctx.canvas.height;
		 var xmin = axes.doNegativeX ? 0 : x0;
		 ctx.beginPath();
		 ctx.strokeStyle = "rgb(128,128,128)"; 
		 ctx.moveTo(xmin,y0 +1); ctx.lineTo(canvasWidth,y0+1);  // X axis
		 ctx.moveTo(x0, 0);    ctx.lineTo(x0,h);  // Y axis
		 ctx.stroke();
		 ctx.closePath();

		 ctx.beginPath();
		ctx.moveTo(canvasWidth / 2.5, h/2);
		ctx.lineTo(canvasWidth / 2.5, h);
		ctx.stroke();
		ctx.closePath();
		}

		draw();


} // end trig


//toggle effect
CruxApp.toggler = function(){
	$(document)
		.off('click', '[data-test]')
		.on('click', '[data-test]', function(){
			var that = $(this);
			if (that.hasClass('show-toggle')) {
				that.removeClass('show-toggle');
				that.text('SHOW DETAILS');
				that.next().slideToggle(500);
			} else {
				that.addClass('show-toggle'); 
				that.text('HIDE DETAILS');
				that.next().slideToggle(500);
			}
    	});
}


CruxApp.fitTexter = function(){
	//jQuery(".project-item--title h1").fitText(.145);
}

CruxApp.particleBg = function(){
	particleground(document.getElementById('particles'), {
    dotColor: '#666666',
    lineColor: '#666666',
    directionX: 'center',
    directionY: 'center',
    density: 6000,
    particleRadius: 3,
    lineWidth: 1.5
  });
  var intro = document.getElementById('intro');
  intro.style.marginTop = - intro.offsetHeight / 2 + 'px';

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

	$('.cd-nav-trigger2').on('click', function(event){
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