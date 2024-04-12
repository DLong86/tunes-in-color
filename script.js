let currentIndex = 0;
const slides = document.querySelectorAll(".slider img");
const totalSlides = slides.length;

function showSlide(index) {
	slides.forEach((slide, i) => {
		slide.style.transform = `translateX(-${
			index * 100
		}%)`; /* Move to the correct position */
	});
}

function nextSlide() {
	currentIndex = (currentIndex + 1) % totalSlides;
	showSlide(currentIndex);
}

function prevSlide() {
	currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
	showSlide(currentIndex);
}

// Show the first slide initially
showSlide(currentIndex);
