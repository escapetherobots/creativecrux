
var ready;
ready = function() {

  $('#toggle-project-detail').click(function(){
  		console.log('click click boom');
    	$('#project-detail').fadeToggle();
    });
    
   

};

$(document).ready(ready);
$(document).on('page:load', ready);