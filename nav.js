function toggleNavigation() {
  const navigation = document.querySelector(".navigation");
  navigation.classList.toggle("show");

  const body = document.querySelector("body");
  body.classList.toggle("nav-open");
}

// Close navigation when clicking on the main content
document.querySelector(".main").addEventListener("click", function () {
  const navigation = document.querySelector(".navigation");
  navigation.classList.remove("show");

  const body = document.querySelector("body");
  body.classList.remove("nav-open");
});
