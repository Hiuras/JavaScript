const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

function displayDate() {
	const currentDate = new Date();
	console.log("Date actuelle : " + currentDate);
  }
  

document.getElementById("banner").addEventListener("click", displayDate);

document.getElementById("banner").addEventListener("mousedown", function(event) {
	if (event.button === 0) {
	  // Clic gauche
	  console.log("Clic gauche détecté");
	} else if (event.button === 2) {
	  // Clic droit
	  console.log("Clic droit détecté");
	}
  });
  

console.log (addEventListener)

document.addEventListener("DOMContentLoaded", function() {
	var images = document.querySelectorAll(".banner-img");
	var currentImageIndex = 0;
	var totalImages = images.length;
	var dots = document.querySelectorAll(".dot");

	function showImage(index) {
		for (var i = 0; i < totalImages; i++) {
			images[i].classList.remove("current");
		}
		images[index].classList.add("current");

		for (var i = 0; i < totalImages; i++) {
			dots[i].classList.remove("dot_selected");
		}
		dots[index].classList.add("dot_selected");
	}

	showImage(currentImageIndex);

	document.querySelector(".arrow_left").addEventListener("click", function() {
		currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
		showImage(currentImageIndex);
	});

	document.querySelector(".arrow_right").addEventListener("click", function() {
		currentImageIndex = (currentImageIndex + 1) % totalImages;
		showImage(currentImageIndex);
	});
});
