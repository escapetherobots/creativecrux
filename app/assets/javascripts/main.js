var ready;
var gs;


gs = function(){


}


ready = function() {

  $('#toggle-project-detail').click(function(){
  		console.log('click click boom');
    	$('#project-detail').fadeToggle();
    });

  $('#svgWrapper').mouseleave(function(){
    $(this).removeClass('clicked');
  }).click(function(){
    $(this).addClass('clicked').html($(this).html());
  });




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

$(document).ready(ready);
$(document).on('page:load', ready);