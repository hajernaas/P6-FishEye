/********************************************************
 * Ce fichier contient toutes les fonctions nécessaires
 * pour créer un élément article contenant la photo
 * et les informations sur le photographe
 ****************************************************** */

export function photographerTemplate(data) {
	console.log("appel photographerTemplate");
	const { id, name, city, country, tagline, price, portrait } = data;

	const picture = `assets/photographers/${portrait}`;

	function getUserCardDOM() {
		console.log("appel getUserCardDOM ");
		// Récupération de l'élément du DOM qui accueillera lesphotographes
		const article = document.createElement("article");
		// Création d'un élément link pour rediriger vers page du photographe
		const link = document.createElement("a");
		link.setAttribute("href", `photographer.html?id=${id}`);
		link.setAttribute("aria-label", `lien vers le photographe ${name}`);
		link.classList.add("photographer-link");
		// Création d'un élément img pour la photo du photographe
		const span = document.createElement("span");
		span.classList.add("containerImg");
		const img = document.createElement("img");
		img.setAttribute("src", picture);
		img.setAttribute("alt", `photo de ${name}`);
		//Création d'un élément h2 pour le nom du photographe
		const h2 = document.createElement("h2");
		h2.textContent = name;
		//Création d'un élément p contenant la localisation du photographe
		const placeResidence = document.createElement("p");
		placeResidence.classList.add("photographer-placeResidence");
		placeResidence.textContent = `${city},${country}`;
		//Création d'un élément p contenant le slogan du photographe
		const slogan = document.createElement("p");
		slogan.classList.add("photographer-slogan");
		slogan.textContent = tagline;

		//Création d'un élément p contenant le prix d'une journée de travail

		const rate = document.createElement("p");
		rate.classList.add("photographer-rate");
		rate.textContent = `${price} € / jour`;

		// On rattache toutes les infos du photographe à la balise article
		span.appendChild(img);
		link.appendChild(span);
		link.appendChild(h2);
		article.appendChild(link);
		//article.appendChild(h2);
		article.appendChild(placeResidence);
		article.appendChild(slogan);
		article.appendChild(rate);
		return article;
	}
	return { name, picture, getUserCardDOM };
}
