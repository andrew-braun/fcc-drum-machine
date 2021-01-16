const drumpadClips = document.querySelectorAll(".clip");

const drumpadClipsArr = Array.from(drumpadClips);

if (window.location.href.includes("codepen")) {
	console.log("codepen!");
}

function playAudio(clip) {
	clip.currentTime = 0;
	clip.pause();
	clip.play();
}

function handleDrumpadEvent(event) {
	playAudio(event.target);
}

function handleKeyPress(event) {
	const clip = drumpadClipsArr.find(
		(item) => item.id === event.key.toUpperCase()
	);
	clip ? playAudio(clip) : null;
}
// Add event listener to each drumpad button
for (element of drumpadClips) {
	element.addEventListener("click", handleDrumpadEvent);
}

console.log(drumpadClips);

window.addEventListener("keydown", handleKeyPress);
