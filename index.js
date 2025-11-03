import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY;
const prompt = "who was the first president of the United States?";
const context =
	"Please only respond with their first and last name and the year of their first term";
const apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
