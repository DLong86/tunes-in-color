// Select the small box element
const smallBox = document.querySelector(".small-box");

// Function to handle scroll event
function handleScroll() {
	// Check if screen width is less than 1000px
	if (window.innerWidth < 1000) {
		// Get the scroll position
		const scrollPosition = window.scrollY;

		// Calculate the opacity and size based on the scroll position
		const opacity = 1 - scrollPosition / window.innerHeight;
		const size = 350 - scrollPosition / 4;

		// Set the opacity and size of the small box
		smallBox.style.opacity = opacity;
		smallBox.style.width = size + "px";
		smallBox.style.height = size + "px";
	} else {
		// Reset the style if screen width is 1000px or more
		smallBox.style.opacity = 1;
		smallBox.style.width = "362px";
		smallBox.style.height = "362px";
	}
}

// Add scroll event listener
window.addEventListener("scroll", handleScroll);

// Add resize event listener to handle screen width changes
window.addEventListener("resize", handleScroll);

// Initial call to handleScroll function to apply initial styles
handleScroll();
