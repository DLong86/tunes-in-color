// Function to add selectewd embed code for the youtube vids
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

// Function to add remove ".active" class and add/ remove the font awesome "play" / "Pause" icons
document.addEventListener("DOMContentLoaded", function () {
	const playlistItems = document.querySelectorAll(".play-list li");

	playlistItems.forEach((item) => {
		item.addEventListener("click", function () {
			// Removing the 'active' class from all playlists
			playlistItems.forEach((item) => {
				item.classList.remove("active");
				item.querySelector("i").className = "fa-solid fa-play";
			});

			// Adding 'active' class to the clicked playlit
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
