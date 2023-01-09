function initializeParallax() {
	// Select the card and image elements
	const card = document.querySelector(".card");
	const image = document.querySelector(".card__img");

	// Initialize variables to track the mouse position and image position
	let isHovering = false;
	let currentX = 0;
	let currentY = 0;
	let initialX = 0;
	let initialY = 0;
	let xDiff = 0;
	let yDiff = 0;

	// Get the maximum amount that the image can move based on the size of the card
	const maxXDiff = card.offsetWidth / 2;
	const maxYDiff = card.offsetHeight / 2;

	// Add event listeners to track when the mouse enters and leaves the card, and to track mouse movement
	card.addEventListener("mouseenter", () => {
		isHovering = true;
		initialX = currentX;
		initialY = currentY;
	});
	card.addEventListener("mouseleave", () => {
		isHovering = false;
	});
	card.addEventListener("mousemove", (event) => {
		if (isHovering) {
			// Update the current mouse position
			currentX = event.pageX;
			currentY = event.pageY;

			// Calculate the new background position based on the mouse position
			let xPos = 50 - (currentX - maxXDiff) * 0.01;
			let yPos = 50 - (currentY - maxYDiff) * 0.01;
			let bgPos = `${xPos}% ${yPos}%`;

			// Set the new background position on the image element
			card.style.backgroundImage = `url(${image.src})`;
			card.style.backgroundPosition = bgPos;
		}
	});
}

document.addEventListener("DOMContentLoaded", initializeParallax);
