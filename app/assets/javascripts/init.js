window.CruxApp || (window.CruxApp = {});
CruxApp.init = function(){
	
	$(document).off('click', '[data-test="toggle"]').on('click', '[data-test="toggle"]', function(){
  	$('[data-test="toggle-project-detail"]').fadeToggle();
  	
    	//$(this).fadeToggle();
    });
}

$(document).on("turbolinks:load", function(){
	return CruxApp.init();
});