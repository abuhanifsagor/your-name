let number = document.getElementById("rateNum");
let counter = 0;

setInterval(() => {
  if (counter >= 8.3) {
    clearInterval(); // Stop when the counter reaches 8.5
  } else {
    counter += 0.1; // Increment by 0.1
    number.innerHTML = counter.toFixed(1); // Display the number with one decimal point
  }
}, 25);

document.addEventListener("DOMContentLoaded", () => {
const video = document.getElementById("myVideo");
const toggleSound = document.getElementById("toggleSound");

// Toggle sound on/off
toggleSound.addEventListener("click", () => {
if (video.muted) {
video.muted = false; // Unmute the video
toggleSound.textContent = "🔊 "; // Update button text
} else {
video.muted = true; // Mute the video
toggleSound.textContent = "🔈 "; // Update button text
}
});
});
// Wait for all resources to load
window.addEventListener("load", function () {
  // Hide preloader
  const preloader = document.getElementById("preloader");
  preloader.style.display = "none";

});
