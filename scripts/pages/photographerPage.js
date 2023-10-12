//Mettre le code JavaScript lié à la page photographer.html

import { getPhotographersApiData } from "../api/Api.js";
import MediasFactory from "../factories/MediasFactory.js";

import Photographer from "../models/Photographer.js";
import infoPhotographer from "../templates/infoPhotographer.js";

import { photographerTemplate } from "../templates/photographerTemplate.js";

const params = new URL(document.location).searchParams;
const photographerId = parseInt(params.get("id"));

console.log("fff", photographerId);

export async function getPhotographersById() {
	const { media, photographers } = await getPhotographersApiData();

	const photographer = photographers
		.map((p) => new Photographer(p))
		.find((p) => p.id == photographerId);

	const mediasList = media
		.filter((m) => m.photographerId == photographerId)
		.map((m) => new MediasFactory(m));

	return { photographer, mediasList };
}

const { photographer, mediasList } = await getPhotographersById();
console.log(photographer);
console.log(mediasList);

async function displayData(photographer, mediaList) {
	const photographersSection = document.querySelector(".mediaSection");

	const { name, picture, getUserCardDOM } = photographerTemplate(photographer);

	console.log("rrr", JSON.stringify(name));
	console.log("rr", JSON.stringify(picture));
	console.log("r", getUserCardDOM());
	// infoPhotographer(JSON.stringify(name), JSON.stringify(picture), getUserCardDOM());
	infoPhotographer(JSON.stringify(name), JSON.stringify(picture), getUserCardDOM());

	//Parcourir le tableau des photographes et créer une carte pour chacun

	/*mediaList.forEach((media) => {
		const mediaModel = MediaTemplate(media, photographer);
		const mediaCardDOM = mediaModel.getMediaCardDOM();
		mediaSection.appendChild(mediaCardDOM);
	});*/
}

async function init() {
	const { photographer, mediasList } = await getPhotographersById();

	displayData(photographer, mediasList);
}

init();
