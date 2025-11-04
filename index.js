import axios from "axios";

function generatePoem(event) {
	event.preventDefault();

	new Typewriter("#poem", {
		strings: "La tombe dit à la rose",
		autoStart: true,
		delay: 1,
		cursor: "",
	});
	poemElement.innerHTML = "La tombe dit à la rose";
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);

async function showAIResponse(response) {
	console.log(response.data);
}

const apiKey = import.meta.env.VITE_API_KEY;
const prompt = "who was the first president of the United States?";
const context =
	"Please only respond with their first and last name and the year of their first term";
const apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

axios.get(apiUrl).then(showAIResponse);
