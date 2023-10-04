/********************************************************
 * Ce fichier contient toutes les fonctions nécessaires
 * pour créer un élément article contenant la photo
 * et les informations sur le photographe
 ****************************************************** */

function photographerTemplate(data) {
	console.log("appel photographerTemplate");
	const { name, portrait } = data;

	const picture = `assets/photographers/${portrait}`;
	console.log("picture", picture);

	function getUserCardDOM() {
		console.log("appel getUserCardDOM ");
		const article = document.createElement("article");
		const img = document.createElement("img");
		img.setAttribute("src", picture);
		const h2 = document.createElement("h2");
		h2.textContent = name;
		console.log("name", name);
		article.appendChild(img);
		article.appendChild(h2);
		return article;
		console.log("article:", article);
	}
	return { name, picture, getUserCardDOM };
}
