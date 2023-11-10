//le code JavaScript lié à la page photographer.html

/***importer les fichiers js nécessaires pour l'affichage de la page du photographe */
import { getPhotographersApiData } from "../api/Api.js";
import { photographerTemplate } from "../templates/photographerTemplate.js";
import MediasFactory from "../factories/MediasFactory.js";
import Photographer from "../models/Photographer.js";
import infoPhotographer from "../templates/infoPhotographer.js";
import MediaTemplate from "../templates/MediaTemplate.js";
import SorterTemplate from "../templates/sorterTemplate.js";

/*Retourner un objet params permettant d'accéder aux arguments décodés de la requête GET contenue dans l'URL pour 
extraire le paramètre 'id' */
const params = new URL(document.location).searchParams;
const photographerId = parseInt(params.get("id"));

/* cette fonction permet de Rechercher les informations d'un photographe (Media+identité) à partir des données JSON par son identifiant*/

export default async function getPhotographersById() {
	/* Appeler la fonction getPhotographersApiData() pour récupérer l'objet photographe et média à partir des données JSON*/
	const { media, photographers } = await getPhotographersApiData();

	/*Recherche l'objet photographe et medialist dans le tableau photographes et media avec l'identifiant correspondant*/
	const photographer = photographers
		.map((p) => new Photographer(p))
		.find((p) => p.id == photographerId);

	const mediasList = media
		.map((m) => new MediasFactory(m))
		.filter((m) => m.photographerId == photographerId);

	return { photographer, mediasList };
}

/* cette fonction permet d'afficher le contenu de la page photographe */
function displayDataMediaPhotographer(photographer, mediaList) {
	const { name, picture, getUserCardDOM } = photographerTemplate(photographer);

	//Afficher l'dentité du photograohe
	infoPhotographer(JSON.stringify(name), JSON.stringify(picture), getUserCardDOM());

	//Afficher les media triés par popularité
	const sorterBy = "popularity";
	const sorterMedia = new SorterTemplate(mediaList, photographer);
	sorterMedia.sorterMedias(sorterBy);

	// Afficher le tarif journalier de la photographe affiché et le nombre total de likes. */
	const photographerLikePrice = new MediaTemplate(mediaList, photographer);
	photographerLikePrice.getFooterPhotographer();
}

async function initMediaPhotographer() {
	const { photographer, mediasList } = await getPhotographersById();
	displayDataMediaPhotographer(photographer, mediasList);

	const Sorter = new SorterTemplate(mediasList, photographer);
	Sorter.render();
}

//Appel de la fonction initMediaPhotographer() qui sert à faire l'affichage
initMediaPhotographer();
