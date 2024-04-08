document.addEventListener("DOMContentLoaded", function () {
	const playlistItems = document.querySelectorAll(".play-list li");

	playlistItems.forEach((item) => {
		item.addEventListener("click", function () {
			const embedCode = item.getAttribute("data-embed-code");
			const iframe = document.querySelector(".youtube-box2 iframe");
			iframe.src = embedCode;
		});
	});
});

document.addEventListener("DOMContentLoaded", function () {
	const playlistItems = document.querySelectorAll(".play-list li");

	playlistItems.forEach((item) => {
		item.addEventListener("click", function () {
			// Remove the 'active' class from all playlist items
			playlistItems.forEach((item) => {
				item.classList.remove("active");
				item.querySelector("i").className = "fa-solid fa-play";
			});

			// Add the 'active' class to the clicked playlist item
			this.classList.add("active");
			this.querySelector("i").className = "fa-solid fa-pause";

			const embedCode = decodeURIComponent(
				this.getAttribute("data-embed-code")
			);
			const iframe = document.querySelector(".youtube-box2 iframe");
			iframe.src = embedCode;
		});
	});
});
