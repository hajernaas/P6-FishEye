//  cette fonction permet de créer la section liée à l'identité de photographe

export default function infoPhotographer(name, picture, article) {
	//  Récupération des élements du DOM
	const profilePageHeader = document.querySelector(".photograph-header");
	const photographerProfil = document.createElement("div");
	photographerProfil.classList.add("photographer-profile-infos");

	// Création du nom de photographe
	const nameProfil = document.createElement("p");
	nameProfil.classList.add("photographer-name");
	const h1 = document.createElement("h1");
	h1.textContent = JSON.parse(name);
	h1.setAttribute("tabindex", "0");
	console.log("hh", h1.textContent);

	// Récuperer le nom de photographe et l'afficher sur le modal
	const photographerNameModal = document.querySelector(".modal-name-photographer");
	photographerNameModal.textContent = JSON.parse(name);

	// Création de la ville du photographe
	const cityDiv = document.createElement("p");
	cityDiv.classList.add("photographer-city");
	const city = article.querySelector(".photographer-placeResidence");
	cityDiv.textContent = city.firstChild.nodeValue;

	// Création du slogan de photographe
	const tagline = document.createElement("p");
	tagline.classList.add("photographer-tagline");
	const tag = article.querySelector(".photographer-slogan");
	tagline.textContent = tag.firstChild.nodeValue;

	// Création de la photo
	const span = document.createElement("span");
	span.classList.add("portrait-Container");
	const img = document.createElement("img");
	img.classList.add("photographer-img");
	img.setAttribute("alt", JSON.parse(name));
	img.setAttribute("src", JSON.parse(picture));

	// Rattacher tous les élements à la section photograph-header
	span.appendChild(img);
	nameProfil.appendChild(h1);
	photographerProfil.append(nameProfil);
	photographerProfil.appendChild(cityDiv);
	photographerProfil.appendChild(tagline);
	profilePageHeader.appendChild(photographerProfil);
	profilePageHeader.appendChild(span);
}
