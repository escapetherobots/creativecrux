window.CruxApp || (window.CruxApp = {});

CruxApp.myChart = function(){

	//radar chart data
	var radarData = {
		labels : ["Javascript","Ruby on Rails","Python","C++","PHP","HTML/CSS","Angular"],
		datasets: [
	        
	        {
	            label: "My Second dataset",
	            backgroundColor: "rgba(255,99,132,0.2)",
	            borderColor: "rgba(255,99,132,1)",
	            pointBackgroundColor: "rgba(255,99,132,1)",
	            pointBorderColor: "#fff",
	            pointHoverBackgroundColor: "#fff",
	            pointHoverBorderColor: "rgba(255,99,132,1)",
	            data: [28, 48, 40, 19, 96, 27, 100]
	        },
	        {
	            label: "My First dataset",
	            backgroundColor: "rgba(179,181,198,0.2)",
	            borderColor: "rgba(179,181,198,1)",
	            pointBackgroundColor: "rgba(179,181,198,1)",
	            pointBorderColor: "#fff",
	            pointHoverBackgroundColor: "#fff",
	            pointHoverBorderColor: "rgba(179,181,198,1)",
	            data: [50, 50, 20, 35, 50, 90, 20]
	        }
	        
	    ]
	}


	var data = {
	  labels: [
	    "Ruby on Rails",
	    "Javascript",
	    "C++"
	  ],
	  datasets: [
	    {
	      data: [300, 50, 100],
	      backgroundColor: [
	        "#00AFB7",
	        "#88C440",
	        "#f4b006"
	      ],
	      label: 'My Dataset', //for legend
	      hoverBackgroundColor: [
	        "#cccccc",
	        "#cccccc",
	        "#cccccc"
	      ]
	    }],
	  options: {
			elements: {
				center: {
					// the longest text that could appear in the center
					maxText: '100%',
					text: '90%',
					fontColor: '#36A2EB',
					fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
					fontStyle: 'normal',
					// fontSize: 12,
					// if a fontSize is NOT specified, we will scale (within the below limits) maxText to take up the maximum space in the center
					// if these are not specified either, we default to 1 and 256
					minFontSize: 1,
					maxFontSize: 256,
				}
			}
		}
	};

	var data2 = {
	  labels: [
	    "Ruby on Rails",
	    "Javascript",
	    "C++"
	  ],
	  datasets: [
	    {
	      data: [300, 50, 100],
	      backgroundColor: [
	        "#00AFB7",
	        "#88C440",
	        "#f4b006"
	      ],
	      label: 'My Dataset', //for legend
	      hoverBackgroundColor: [
	        "#cccccc",
	        "#cccccc",
	        "#cccccc"
	      ]
	    }]
	};

	var radar1 = {
	type: 'radar',
	data: radarData,
	responsive: true,
	    pointDot: true,
	    showTooltips: true,
	    scaleOverride: false,
	    scaleSteps: 4,
	    scaleStepWidth: 5,
	    scaleStartValue: 0
	}

	var canvas= document.getElementById("myChartCanvas").getContext("2d");
	var canvas2= document.getElementById("myChartCanvas2").getContext("2d");
	
	var ctx = document.getElementById("radarCanvas").getContext("2d");
	


	var chartOptions1 = {
	  type: 'doughnut',
	  data: data,
	  percentageInnerCutout : 50,
	  options: {
	  	animateScale : true,
	  	animationSteps: 100,
 		animationEasing: 'easeInOutQuart',
	  	responsive: true,
	    legend: {
	      display: true
	    },
	    elements: {
            center: {
					// the longest text that could appear in the center
					maxText: '100%',
					text: '90%',
					fontColor: '#36A2EB',
					fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
					fontStyle: 'normal',
					// fontSize: 12,
					// if a fontSize is NOT specified, we will scale (within the below limits) maxText to take up the maximum space in the center
					// if these are not specified either, we default to 1 and 256
					minFontSize: 1,
					maxFontSize: 256,
				}
        }
	  }
	};

	var chartOptions2 = {
	  type: 'doughnut',
	  data: data2,
	  options: {
	  	cutoutPercentage : 50,
	  	animateScale : true,
	  	responsive: true,
	    legend: {
	      display: true
	    },
	    elements: {
            arc: {
                
            }
        }
	  }
	};


	zConfig = {
	  beforeDraw: function(chart) {
	    var width = chart.chart.width,
	        height = chart.chart.height,
	        ctx = chart.chart.ctx;

	    ctx.restore();
	    var fontSize = (height / 114).toFixed(2);
	    ctx.font = fontSize + "em sans-serif";
	    ctx.textBaseline = "middle";

	    
	    ctx.save();
	  }
	}

	//Chart.pluginService.register(zConfig);



	$('#myChartCanvas').on('inview', function(event, isInView) {
  		if (isInView) {
    // element is now visible in the viewport
    	var chart1 = new Chart(canvas, chartOptions1);
  		}
	});

	$('#myChartCanvas2').on('inview', function(event, isInView) {
  		if (isInView) {
    // element is now visible in the viewport
    		var chart2 = new Chart(canvas2, chartOptions2);
  		}
	});

	$('#radarCanvas').on('inview', function(event, isInView) {
  		if (isInView) {
    // element is now visible in the viewport
    		var myRadar = new Chart(ctx, radar1);
    		
  		}
	});



} // end myCharts