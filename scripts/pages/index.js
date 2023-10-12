/*********************************
 * Ce fichier contient toutes les fonctions nécessaires pour afficher les
 * photographes dans la page d'accueil.
 **********************/
import { photographerTemplate } from "../templates/photographerTemplate.js";
import { getPhotographersApiData } from "../api/Api.js";

async function displayData(photographers) {
	// Récupérer l'élément de photographer_section qui va contenir les cartes du photographe
	const photographersSection = document.querySelector(".photographer_section");

	// const photographers = photographersData.photographers;

	//Parcourir le tableau des photographes et créer une carte pour chacun
	photographers.forEach((photographer) => {
		const photographerModel = photographerTemplate(photographer);
		const userCardDOM = photographerModel.getUserCardDOM();
		photographersSection.appendChild(userCardDOM);
	});
}

async function init() {
	// Récupèrer les datas des photographes pour les afficher sur la page d'accueil.
	const { photographers } = await getPhotographersApiData();
	displayData(photographers);
}

//appel à la fonction init()
init();
