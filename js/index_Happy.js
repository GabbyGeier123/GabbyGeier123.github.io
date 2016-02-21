$(document).ready(function() {

var images = ["images/32.JPG", 
			"images/33.JPG", 
			"images/34.JPG",
			"images/1.jpg", 
			"images/2.jpg", 
			"images/3.jpg", 
			"images/4.jpg", 
			"images/6.JPG",
			"images/7.JPG", 
			"images/8.JPG",
			"images/9.JPG", 
			"images/10.JPG", 
			"images/11.JPG", 
			"images/12.JPG", 
			"images/13.JPG",
			"images/14.JPG",
			"images/15.JPG", 
			"images/16.JPG",
			"images/17.JPG", 
			"images/18.JPG", 
			"images/20.JPG",
			"images/21.JPG",
			"images/22.JPG", 
			"images/23.JPG",
			"images/24.JPG", 
			"images/25.JPG", 
			"images/26.JPG", 
			"images/27.JPG",
			"images/29.JPG", 
			"images/30.JPG",
			"images/31.JPG", 
			"images/35.JPG",
			"images/36.JPG", 
			"images/37.JPG",
			"images/38.JPG",  
			"images/40.JPG", 
			"images/41.JPG",
			"images/42.JPG",
			"images/43.JPG", 
			"images/44.JPG",
			"images/45.JPG", 
			"images/46.JPG",
			];

			var currentImage = 0;
		
$("#next").click(function() {
	currentImage = currentImage + 1;
	if (currentImage == images.length) {
		currentImage = 0;
	}
	$("#image").attr("src",images[currentImage]);
});

$('#back').click(function(){
	currentImage = currentImage - 1;
	if (currentImage < 0) {
		currentImage = images.length - 1;
	}
	$("#image").attr("src",images[currentImage]);
});
});