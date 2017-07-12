window.CruxApp || (window.CruxApp = {});

CruxApp.typeShuffler = function(){

	// Quote Array
	var quoteArr = [
		'CREATIVE CRUX',
		'I move fast. I\'ve got my own thing going on here, Ricky Town. Population...Ricky.',
		'Without your space helmet, Dave? You\'re going to find that rather difficult.', 
		'He\'s a fellow Khaki Scout, and he needs our help. Are we man enough to give that, so part of his brain doesn\'t get removed out of him? ',
		'CRAFTING RICH USER EXPERIENCES THROUGH DEVELOPMENT &amp; DESIGN'
		];
	
	var getRandom = function(){
		console.log('random?');
			// Random generator
		var random = Math.random() * 10;

		var result = Math.round(random);

		switch(result){
			case 1:
			case 2:
				return quoteArr[0];
			case 3:
			case 4:
				return quoteArr[1];
			case 5:
			case 6:
				return quoteArr[2];
			case 7:
			case 8:
				return quoteArr[3];
			case 9:
			case 10:
				return quoteArr[4];
			default:
				return quoteArr[2];
		}
	};
	


	//========================	
	// container is the DOM element;
	// userText is the textbox
	var container = $(".ztitle-container")
		userText = $('#userText'); 
	
	// Shuffle the contents of container
	container.shuffleLetters();

	container.on('click', function(e){
		e.preventDefault();
		container.html(getRandom());
		container.shuffleLetters();
		
	});

	// Bind events
	userText.click(function () {
		
	  userText.val("");
	  
	}).bind('keypress',function(e){
		
		if(e.keyCode == 13){
			
			// The return key was pressed
			
			container.shuffleLetters({
				"text": userText.val()
			});
			
			userText.val("");
		}

	}).hide();

	// Leave a 4 second pause

	setTimeout(function(){
		
		// Shuffle the container with custom text
		container.shuffleLetters({
			"text": "THROUGH DESIGN &amp; DEVELOPMENT"
		});
		
		//userText.val("type anything and hit return..").fadeIn();
		
	},4000);
	

} // end typeShuffler