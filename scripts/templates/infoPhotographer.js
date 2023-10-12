export default function infoPhotographer(name, picture, article) {
	//const sectionHeader = document.createElement("section");
	const profilePageHeader = document.querySelector(".photograph-header");

	const photographerProfil = document.createElement("div");
	photographerProfil.classList.add("photographer-profile-infos");

	const nameProfil = document.createElement("p");
	nameProfil.classList.add("photographer-name");
	const h1 = document.createElement("h1");
	h1.textContent = JSON.parse(name);

	const cityDiv = document.createElement("p");
	//cityDiv.classList.add("photographer-city");
	cityDiv.classList.add("photographer-city");
	const city = article.querySelector(".photographer-placeResidence");
	console.log("cc", city.firstChild.nodeValue);
	cityDiv.textContent = city.firstChild.nodeValue;

	const tagline = document.createElement("p");
	tagline.classList.add("photographer-tagline");
	const tag = article.querySelector(".photographer-slogan");
	tagline.textContent = tag.firstChild.nodeValue;

	const span = document.createElement("span");
	span.classList.add("portrait-Container");
	const img = document.createElement("img");
	img.classList.add("photographer-img");
	img.setAttribute("alt", JSON.parse(name));
	img.setAttribute("src", JSON.parse(picture));

	//const art = document.querySelector("article");
	//art.style.display = "block";
	/* var para = document.querySelector("p");
alert(para.firstChild.nodeValue);  // affiche le texte
para.firstChild.nodeValue = "nouveau texte !";*/
	span.appendChild(img);
	nameProfil.appendChild(h1);
	photographerProfil.append(nameProfil);
	photographerProfil.appendChild(cityDiv);
	photographerProfil.appendChild(tagline);

	profilePageHeader.appendChild(photographerProfil);

	profilePageHeader.appendChild(span);
	//sectionHeader.appendChild(profilePageHeader);

	//profilePageHeader.innerHTML = '';
}
