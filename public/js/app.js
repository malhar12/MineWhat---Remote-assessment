(function(){


	var app = angular.module('MainModule', []);

	app.controller('DivController', function(){
		
		this.sources = sourceAcquisition;
		this.gallery = galleryArray;
	});
	//Custom filer to apply percentage sign at the end of a value
	app.filter('percentage', ['$filter', function ($filter) {
	  return function (input, decimals) {
	    return $filter('number')(input, decimals) + '%';
	  };
	}]);

	//Data for Source-Revenue table
	var sourceAcquisition = [
		{
			name: 'FACEBOOK.COM',
			value : 6090
		}, 

		{
			name: 'QUORA.COM',
			value : 3045
		}, 

		{
			name: 'TWITTER.COM',
			value : 2284
		}, 

		{
			name: 'EMAIL',
			value : 1675
		}, 

		{
			name: 'ORGANIC',
			value : 1370
		}, 

		{
			name: 'DIRECT',
			value : 1370
		}
	];

	//product gallery data
	var galleryArray = [

		{ view: 10989,
		  purchase: 8909,
		  conversion_rate: 3.5,
		  revenue: 54274, 
		  img: './images/boot.jpg',
		  name: 'TWISTED BOOTS',
		  viewCount: 154,
		  daysCount: 2,
		  count: 1
		} ,

		{ view: 10989,
		  purchase: 8909,
		  conversion_rate: 3.5,
		  revenue: 54274, 
		  img: './images/boot.jpg',
		  name: 'TWISTED BOOTS',
		  viewCount: 154,
		  daysCount: 2,
		  count: 2
		},

		{ view: 10989,
		  purchase: 8909,
		  conversion_rate: 3.5,
		  revenue: 54274, 
		  img: './images/boot.jpg',
		  name: 'TWISTED BOOTS',
		  viewCount: 154,
		  daysCount: 2,
		  count: 3
		},

		{ view: 10989,
		  purchase: 8909,
		  conversion_rate: 3.5,
		  revenue: 54274, 
		  img: './images/boot.jpg',
		  name: 'TWISTED BOOTS',
		  viewCount: 154,
		  daysCount: 2,
		  count: 4
		}
	];

	//Adding Chart to the html
	$(document).ready(function(){
			var chart = document.getElementById("doughnut");
			var doughnutChart = new Chart(chart, {
				type: 'doughnut',
				responsive: true,
				data: {
					labels: ["IPAD", "DESKTOP", "MOBILE"],
					datasets: [
						{
							data: [35, 16, 49],
							backgroundColor:['#8DD199', '#FD7E80', '#FFB378']
						}
					]
							
				}, 
				options:{
					responsive: true,
					legend: false
				}
			});
			
			var innerHTMLEle = doughnutChart.generateLegend();
			
			var splitEle2 = innerHTMLEle.substring(21, innerHTMLEle.length);
			var splitEle1 = "<ul style=\"list-style:none\">";
			innerHTMLEle = splitEle1+splitEle2;

			document.getElementById('chartLegend').innerHTML = innerHTMLEle;
	});	
})();