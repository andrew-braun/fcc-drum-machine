const drumpadClips = document.querySelectorAll(".clip");

if (window.location.href.includes("codepen")) {
	console.log("codepen!");
}

const drums = {
	snare1: {
		name: "snare-1",
		key: "A",
		url: "/assets/drumpad-sounds/snare-1.wav",
	},
};

function playAudio(clip) {
	clip.play();
}

function handleDrumpadEvent(event) {
	console.log(event.target);
	playAudio(event.target);
}

function handleKeyPress(event) {
	console.log(event);
}
// Add event listener to each drumpad button
for (element of drumpadClips) {
	element.addEventListener("click", handleDrumpadEvent);
}

console.log(drumpadClips);

window.addEventListener("keydown", handleKeyPress);
