import axios from "axios";
let instructionsInput = document.querySelector("#user-instructions");

function showAIResponse(response) {
	new Typewriter("#poem", {
		strings: response.data.answer,
		autoStart: true,
		delay: 1,
		cursor: "",
	});
	instructionsInput.value = "";
}

function generatePoem(event) {
	event.preventDefault();

	const apiKey = import.meta.env.VITE_API_KEY;
	const prompt = `User instructions are: Generate a poem in English about ${instructionsInput.value}`;
	const context =
		"You are a romantic poem expert and love to write short poems. Your mission is to generate a four line poem and seperate each line with a <br />.Do not include a title. Make sure to follow the user instructions.";
	const apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

	let poemElement = document.querySelector("#poem");
	poemElement.classList.remove("hidden");
	poemElement.innerHTML = `<div class="blink">Generating poem about "${instructionsInput.value}" ⏳</div>`;

	axios.get(apiUrl).then(showAIResponse);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
