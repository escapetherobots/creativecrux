window.CruxApp || (window.CruxApp = {});

//toggle effect
CruxApp.snap = function(){
	var theRobot = '#robot-svg';
	var s = Snap(theRobot);
	
	
	var armBack = s.select("#arm-back"),
		armFront = s.select("#arm-front"),
		body = s.select("#body"),
		eye1 = s.select("#eye1"),
		eye2 = s.select("#eye2"),
		legs = s.select("#legs"),
		shadow = s.select("#shadow");

	var eyeGroup = s.group(eye1, eye2);
	var bodyGroup = s.group(body, eyeGroup);
	var g = s.group(shadow, armBack, legs, bodyGroup, armFront);
	
	

	var bodyFunc = function() {
		body.animate({transform: 't0, 6'}, 200, mina.linear, function(){
			resetBodyFunc();
		} );
	}

	var resetBodyFunc = function() {
		body.animate({transform: 't0, 0'}, 200, mina.linear);
	}

	var armsFunc = function() {
		var zArmFront = $('#arm-front'), zArmBack = $('#arm-back');
		var armFrontx = zArmFront.attr('x'),
			armFronty = zArmFront.attr('y'),
			armBackx = zArmBack.attr('x'),
			armBacky = zArmBack.attr('y');

		armBack.animate({transform: 't0 0 r-5 100 50'}, 200, mina.linear);
		armFront.animate({transform: 't7 5 r5 50 30'}, 200, mina.linear, function(){
			armFront.animate({transform: 't0 0 r0 50 30'}, 200, mina.linear);
			armBack.animate({transform: 't0 0 r0 100 50'}, 200, mina.linear);
		});
		
	}

	var eyeFunc = function() {
		var zEye1 = $('#eye1 ellipse'), zEye2 = $('#eye2 ellipse');
		var eye1x = zEye1.attr('cx'),
			eye1y = zEye1.attr('cy'),
			eye2x = zEye2.attr('cx'),
			eye2y = zEye2.attr('cy');

		var transformString1 = 't-5 0 s1.4 ' + eye1x + ' ' + eye1y;
		var transformString2 = 't2 0 s1.3 ' + eye2x + ' ' + eye2y;	

		eye1.animate({transform: transformString1}, 300, mina.easein);
		eye2.animate({transform: transformString2}, 400, mina.easein, function(){
			resetEyeFunc('t0 0 s1',eye1x, eye1y, eye2x, eye2y);
		});
	}

	var resetEyeFunc = function(scale, e1x, e1y, e2x, e2y) {
		var transformString1 = scale + ' ' + e1x + ' ' + e1y;
		var transformString2 = scale + ' ' + e2x + ' ' + e2y;

		eye1.animate({transform: transformString1}, 500, mina.easein);
		eye2.animate({transform: transformString2}, 500, mina.easein);
	}

	//g.drag();
	
	// s.click( function() {
	// 	bodyFunc();
	// 	eyeFunc();
	// 	armsFunc();
	// });

	s.hover( function() {
		bodyFunc();
		eyeFunc();
		armsFunc();
	});

	s.mouseup(function(e){

        if (e.type === 'touchend') {
            // Stop propagation : on touch devices the first click will be used and not the second.
            e.stopPropagation();
            e.preventDefault();

            bodyFunc();
			eyeFunc();
			armsFunc();

        }

        bodyFunc();
		eyeFunc();
		armsFunc();
    });


	//robotFunc(armBack, bodyGroup, arm)

	//g.hover( robotFunc );
	//g.click( robotFunc );

	// Click handlers can be later removed using the Element.unclick() method.

//var hoverover = function() { robot.animate({ transform: 's2r45,150,150' }, 1000, mina.bounce ) };
//var hoverout = function() { robot.animate({ transform: 's1r0,150,150' }, 1000, mina.bounce ) };


	
}

CruxApp.snap2 = function(){
	var theRobot = '#robot2-svg';
	var s = Snap(theRobot);

	var armBack = s.select("#arm-left"),
		armFront = s.select("#arm-right"),
		body = s.select("#body"),
		brain = s.select("#brain"),
		eye1 = s.select("#eye1"),
		eye2 = s.select("#eye2"),
		legs = s.select("#legs"),
		shadow = s.select("#shadow");
		
	eye1.transform('t0,12');
	eye2.transform('t0,8');
	armBack.transform('t8 -50r20 116 170');
	armFront.transform('t2 0r-10 116 170');

	var eyeGroup = s.group(eye1, eye2);
	var bodyGroup = s.group(body, armBack, armFront, eyeGroup, brain);
	var g = s.group(shadow, legs, bodyGroup );

	var bodyFunc = function() {
		bodyGroup.animate({transform: 't0 2r1 0 0'}, 200, mina.linear, function(){
			bodyGroup.animate({transform: 't0 0r-.5 0 0'}, 300, mina.linear, function(){
				bodyGroup.animate({transform: 't0 0r0 0 0'}, 200, mina.linear);
			});
		} );
	}

	var brainFunc = function() {
		brain.animate({transform: 't11 -3r10 200 66'}, 500, mina.linear, function(){
			brain.animate({transform: 't-15 -2r-9 200 66'}, 600, mina.linear, function(){
				brain.animate({transform: 't0 0, r12 200 66'}, 700, mina.linear, function(){
					brain.animate({transform: 't0 0, r0 200 66'}, 800, mina.linear);
				});
			})
		})
	}


	var armsFunc = function() {
		var zArmFront = $('#arm-front'), zArmBack = $('#arm-back');
		var armFrontx = zArmFront.attr('x'),
			armFronty = zArmFront.attr('y'),
			armBackx = zArmBack.attr('x'),
			armBacky = zArmBack.attr('y');

		armBack.animate({transform: 't0 7 r-4 116 170'}, 200, mina.linear);
		armFront.animate({transform: 't1 2 r11 116 160'}, 200, mina.linear);
		setTimeout(function() {
			armFront.animate({transform: 't2 0r-10 116 170'}, 200, mina.linear);
			armBack.animate({transform: 't8 -50r20 116 170'}, 200, mina.linear);
		}, 1400, mina.backout);


		// var city_w = Snap('#path119');
		 //  setTimeout(function() {
		 //    city_w.animate({
		 //      opacity: 0
		 //    }, 3000, mina.backout);
		 //  }, 3000);
		
	}

	var eyeFunc = function() {
		eye1.animate({transform: 't0 0 s1.2 180 180'}, 500, mina.easein);
		eye2.animate({transform: 't0 0 s1.1 221 176'}, 500, mina.easein);
		setTimeout(function() {
			eye1.animate({transform: 't0 12 s1'}, 400, mina.easein);
			eye2.animate({transform: 't0 8 s1'}, 400, mina.easein);
		}, 800, mina.linear);
	}



	//g.drag();
	
	// s.click( function() {
	// 	bodyFunc();
	// 	eyeFunc();
	// 	armsFunc();
	// });

	s.hover( function() {
		bodyFunc();
		eyeFunc();
		armsFunc();
		brainFunc();
	});

	s.mouseup(function(e){

        if (e.type === 'touchend') {
            // Stop propagation : on touch devices the first click will be used and not the second.
            e.stopPropagation();
            e.preventDefault();

            bodyFunc();
			eyeFunc();
			armsFunc();
			brainFunc();
        }

        bodyFunc();
		eyeFunc();
		armsFunc();
		brainFunc();
    });



}

CruxApp.snap3 = function(){
	console.log('snap3');
	var s = Snap("#ux-icons");

	// iconDesign = s.select('#ux-icons #design path');
	
	// iconDesign.transform('t8 -50r20 0 0');
	// s.click(function(e){
	// 	console.log(e);
	// });

	//iconDesign.animate({ transform: 'r40 0 0' }, 400, mina.bounce);

	$('#z-hexContainer--diagram .zhexLink').on('click', function(e){
		e.preventDefault();

		var el = $(this);
		if( el.find('.ux-icon-btn').css('display') != 'none' ) {
			el.find('.ux-icon-btn').hide(500, 'swing', function(){
				el.find('.zhex-content-info-text').show(500, 'swing');
			});
		} else {
			el.find('.zhex-content-info-text').hide(500, 'swing', function(){
				el.find('.ux-icon-btn').show(500, 'swing');
			});
		}

		
		
		
		
		//iconDesign.animate({transform: 't0 12 s1 0 0'}, 400, mina.easein);
		// var myBtn = $(this).find('.ux-icon-btn path');
		// console.log($(myBtn));
		// iconBtn = s.select( myBtn.selector);
		// console.log(iconBtn);
		// iconBtn.animate({ transform: 'r40 0 0' });

		
		

	});

	
		
	
	
	
	

}



CruxApp.snap4 = function(){
	var s = Snap("#svg-area");
	
	
	Snap.load("assets/robot.svg", function(data){
		s.append(data);

		var myRect= s.circle(50,50,0).attr({fill: '#ffffff'});
		var wholeRobot = s.select('#my-svg-robot');
		var body = s.select('#body');
		var shadow = s.select('#shadow');
		var legs = s.select('#legs');
		var armFront = s.select('#arm-front');

		var button = s.circle(20,300,30).attr({fill: "#00ff00"});
		var buttonGroup = s.group(button).attr({class: 'zsnap'});
		var g = s.group(shadow, legs, body, armFront);
		
		g.attr({mask: myRect});

		

		buttonGroup.click(function(){
			if(myRect.attr("r") < 1) {
				myRect.attr({r: 1}).animate({transform: 's150,50,50'}, 700, mina.bounce, function(){
					$('.zsnap').append('<text">hello</text>');
					$('.zsnap').children().eq(1).attr(
						{
							x: 0, 
							y: 300, 
							transform: 'rotate(30 20,40)',
							style: 'fill: black'
						}
					);
				});
			} else {
				myRect.animate({transform: 's1,50,50'}, 700, mina.bounce, function(){
					myRect.attr({r: 0});
					
				});
			}
			
		})
		


	})


	$('#svg-area').width('200px').height('400px');
	

}
