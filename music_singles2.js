// Select the small box element
const smallBox = document.querySelector(".small-box");

// Function to handle scroll event
function handleScroll() {
  // Get the scroll position
  const scrollPosition = window.scrollY;

  // Calculate the opacity and size based on the scroll position
  const opacity = 1 - scrollPosition / window.innerHeight;
  const size = 200 - scrollPosition / 5;

  // Set the opacity and size of the small box
  smallBox.style.opacity = opacity;
  smallBox.style.width = size + "px";
  smallBox.style.height = size + "px";
}

// Add scroll event listener
window.addEventListener("scroll", handleScroll);
