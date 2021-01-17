const drumpadButtons = document.querySelectorAll(".drum-pad");
const drumpadKeys = document.querySelectorAll(".clip");
const infoDisplay = document.querySelector("#display");

const drumpadButtonsArr = Array.from(drumpadButtons);
const drumpadKeysArr = Array.from(drumpadKeys);

if (window.location.href.includes("codepen")) {
	console.log("codepen!");
}

function playAudio(clip) {
	if (clip) {
		clip.currentTime = 0;
		clip.pause();
		clip.play();
	}
}

function renderDescription(id) {
	infoDisplay.innerText = id
		.split("-")
		.map((word) => word[0].toUpperCase() + word.slice(1))
		.join(" ");
}

function handleDrumpadEvent(event) {
	const audio = event.target.querySelector("audio");
	playAudio(audio);
	renderDescription(event.target.id);
}

function handleKeyPress(event) {
	const clip = drumpadKeysArr.find(
		(item) => item.id === event.key.toUpperCase()
	);
	if (clip) {
		playAudio(clip);
		renderDescription(clip.parentElement.id);
	}
}
// Add event listener to each drumpad button
for (element of drumpadButtonsArr) {
	element.addEventListener("click", handleDrumpadEvent);
}

console.log(drumpadButtonsArr);

window.addEventListener("keydown", handleKeyPress);
