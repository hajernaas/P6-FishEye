//ce fichier contient toutes les fonctions nécessaires pour gérer les médias de la Lightbox

export default function showLightBox(mediasInfo) {
	//position (indice) de l'élement (image/video) actuel
	let currentItemPosition = 0;
	//Récupération des infos sur le photographe et les médias
	const photographer = mediasInfo.photographer;
	const mediasList = mediasInfo.medias;
	//Récupération des élements DOM
	const lightboxContainer = document.querySelector(".lightbox-container");
	const mediasListCard = [...document.querySelectorAll(".media-card")];
	const mediaLightbox = document.querySelector(".media-lightbox");
	const previous_btn = document.querySelector(".controls-left");
	const next_btn = document.querySelector(".controls-right");
	const btnCloseLightbox = document.querySelector(".btn-close-lightbox");
	const mainWrapper = document.getElementById("main");
	const headerWrapper = document.querySelector(".header-photographer");

	//Créer le template de lightbox
	function showMediaLightbox() {
		const currentMedia = mediasList[currentItemPosition];

		mediaLightbox.innerHTML = `${
			currentMedia.image
				? `<img src="./assets/images/${photographer.name}/${currentMedia.image}" alt="${currentMedia.title}">`
				: `<video controls aria-label="${currentMedia.title}"><source src="./assets/images/${photographer.name}/${currentMedia.video}" type="video/mp4"></video>`
		}
        <figcaption>${currentMedia.title}</figcaption> `;
	}

	//Media Suivant
	function next() {
		// Incrémenter l'indice de l'élément média
		currentItemPosition++;
		//Si l'élément média actuel est le dernier élément alors on affiche le premier élément
		if (currentItemPosition > mediasList.length - 1) {
			currentItemPosition = 0;
		}
		showMediaLightbox();
	}

	//Média Précédant
	function previous() {
		// décrémenter l'indice de l'élément média
		currentItemPosition--;
		//Si l'élément média actuel est le premier élément alors on affiche l'élément suivant (dernier élément)
		if (currentItemPosition < 0) {
			currentItemPosition = mediasList.length - 1;
		}
		showMediaLightbox();
	}

	// Fermer le lightbox en cachant son contenu et afficher la page .
	function closeLightbox() {
		lightboxContainer.style.display = "none";
		mainWrapper.setAttribute("aria-hidden", "false");
		headerWrapper.setAttribute("aria-hidden", "false");
		lightboxContainer.setAttribute("aria-hidden", "true");
	}

	// Déclencher un eventListener pour chaque photographie dans laquelle on peut défiler les autres photographies
	mediasListCard.forEach((media) => {
		media.addEventListener("click", () => {
			//lire la valeur de l'attribut data avec l'objet dataset et repérer la propriété avec la partie du nom de l'attribut qui suit le préfixe data-
			const media_Id = media.dataset.media;
			//Trouver l'indice de l'élément courant
			const currentMediaIndex = mediasList.findIndex((media) => media.id == media_Id);
			currentItemPosition = currentMediaIndex;
			//Afficher le lightbox (visible)
			lightboxContainer.style.display = "flex";
			lightboxContainer.setAttribute("aria-hidden", "false");
			btnCloseLightbox.focus();
			showMediaLightbox();
			//Masquer la page
			mainWrapper.setAttribute("aria-hidden", "true");
			headerWrapper.setAttribute("aria-hidden", "true");
		});
	});

	// Gérer  les contrôles avec la souris, en cliquant sur les flèches “suivante”,“précédente” et le bouton X ;
	previous_btn.addEventListener("click", () => previous());
	next_btn.addEventListener("click", () => next());
	btnCloseLightbox.addEventListener("click", () => closeLightbox());

	//Gérez les contrôles et l’état des éléments avec le clavier
	document.addEventListener("keydown", (e) => {
		// Utiliser les flèches du clavier “droite” et “gauche” pour le parcourir et "echap" pour fermer le lightbox
		if (e.key === "ArrowLeft" || e.key === 37) {
			previous();
		}
		if (e.key === "ArrowRight" || e.key === 39) {
			next();
		}
		if (e.key === "Escape" || e.key === 27) {
			closeLightbox();
		}
	});
}
