// Récupération des infos sur les photographes depuis le fichier JSON

export async function getPhotographersApiData() {
	try {
		const url = "./data/photographers.json";
		const response = await fetch(url);
		const data = await response.json();
		return data;
	} catch (error) {
		console.error(error);
	}
}
