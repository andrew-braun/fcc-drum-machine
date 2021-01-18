const drumpadButtons = document.querySelectorAll(".drum-pad");
const drumpadKeys = document.querySelectorAll(".clip");
const infoDisplay = document.querySelector("#display");

const drumpadButtonsArr = Array.from(drumpadButtons);
const drumpadKeysArr = Array.from(drumpadKeys);

// Stop target audio element and start it again.
function playAudio(clip) {
	if (clip) {
		clip.currentTime = 0;
		clip.pause();
		clip.play();
	}
}

// Use audio element ID to create display description
function renderDescription(id) {
	infoDisplay.innerText = id
		.split("-")
		.map((word) => word[0].toUpperCase() + word.slice(1))
		.join(" ");
}

// Add animation to drumheads on click or keypress
function animateDrumhead(target) {
	target.classList.add("active-drumhead");
	target.onanimationend = () => target.classList.remove("active-drumhead");
}

// Using audio container div, play audio and render changes to DOM
function activateDrumhead(target) {
	const audio = target.querySelector("audio");
	playAudio(audio);
	renderDescription(target.id);
	animateDrumhead(target);
}

function handleDrumpadEvent(event) {
	activateDrumhead(event.target);
}

function handleKeyPress(event) {
	const clip = drumpadKeysArr.find(
		(item) => item.id === event.key.toUpperCase()
	);
	if (clip) {
		activateDrumhead(clip.parentElement);
	}
}
// Add event listener to each drumpad button
for (element of drumpadButtonsArr) {
	element.addEventListener("click", handleDrumpadEvent);
}

window.addEventListener("keydown", handleKeyPress);
