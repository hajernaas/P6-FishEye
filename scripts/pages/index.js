/*********************************
 * Ce fichier contient toutes les fonctions nécessaires pour afficher les
 * photographes dans la page d'accueil.
 **********************/

async function getPhotographers() {
	console.log("appel getPhotographers");
	// Ceci est un exemple de données pour avoir un affichage de photographes de test dès le démarrage du projet,
	// mais il sera à remplacer avec une requête sur le fichier JSON en utilisant "fetch".

	// Récupération des pièces depuis le fichier JSON
	const reponse = await fetch("./data/photographers.json");
	const photographers = await reponse.json();
	console.log("aaa", photographers);
	return photographers;
	/*
	let photographers = [
		{
			name: "Ma data test",
			id: 1,
			city: "Paris",
			country: "France",
			tagline: "Ceci est ma data test",
			price: 400,
			portrait: "account.png",
		},
		{
			name: "Autre data test",
			id: 2,
			city: "Londres",
			country: "UK",
			tagline: "Ceci est ma data test 2",
			price: 500,
			portrait: "account.png",
		},
	];
	// et bien retourner le tableau photographers seulement une fois récupéré
	return {
		photographers: [...photographers, ...photographers, ...photographers],
	};


*/
}

async function displayData(photographers) {
	console.log("appel displayData");

	// Récupérer l'élément de photographer_section qui va contenir les cartes du photographe
	const photographersSection = document.querySelector(".photographer_section");
	//Parcourir le tableau des photographes et créer une carte pour chacun
	photographers.forEach((photographer) => {
		const photographerModel = photographerTemplate(photographer);
		const userCardDOM = photographerModel.getUserCardDOM();
		photographersSection.appendChild(userCardDOM);
	});
}

async function init() {
	// Récupèrer les datas des photographes pour les afficher sur la page d'accueil.
	const { photographers } = await getPhotographers();
	console.log("photographers", photographers);
	displayData(photographers);
}

init();
