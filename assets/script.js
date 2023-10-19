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



const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? 'block' : 'none';
  });

  dots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add('dot_selected');
    } else {
      dot.classList.remove('dot_selected');
    }
  });
}

showSlide(currentSlide);

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentSlide = index;
    showSlide(currentSlide);
  });
});
