const drumpadButtons = document.querySelectorAll(".drum-pad");
const drumpadKeys = document.querySelectorAll(".clip");

const drumpadButtonsArr = Array.from(drumpadButtons);
const drumpadKeysArr = Array.from(drumpadKeys);

if (window.location.href.includes("codepen")) {
	console.log("codepen!");
}

function playAudio(clip) {
	clip.currentTime = 0;
	clip.pause();
	clip.play();
}

function handleDrumpadEvent(event) {
	const audio = event.target.querySelector("audio");
	playAudio(audio);
}

function handleKeyPress(event) {
	const clip = drumpadKeysArr.find(
		(item) => item.id === event.key.toUpperCase()
	);
	clip ? playAudio(clip) : null;
}
// Add event listener to each drumpad button
for (element of drumpadButtonsArr) {
	element.addEventListener("click", handleDrumpadEvent);
}

console.log(drumpadButtonsArr);

window.addEventListener("keydown", handleKeyPress);
