import ProxyRatingSorter from "../proxy/ProxyRatingSorter.js";
import MediaTemplate from "../templates/MediaTemplate.js";
import likes from "../utils/likes.js";
import showLightBox from "../utils/lightbox.js";

import WhishListCounter from "../wishlist/Counter.js";
import WishlistSubject from "../wishlist/Subject.js";

//Ce fichier permet d'afficher le formulaire de tri et qui appelle le proxy
export default class SorterTemplate {
	//Constructeur du classe SorterForm
	constructor(Medias, photographer) {
		//Objets du classe
		this.Medias = Medias;
		this.photographer = photographer;
		//Objets DOM
		this.wrapper = document.createElement("div");
		this.sorterFormWrapper = document.querySelector(".sorter-form-wrapper");
		this.mediasWrapper = document.querySelector(".gallery");
		// Instanciation de l’objet ProxyRatingSorter
		this.ProxyRatingSorter = new ProxyRatingSorter();
		let TemplateMedia;
	}

	// cette méthode permet d'appeler ProxyRatingSorter qui permet de récupérer le critére de tri et les medias triés
	async sorterMedias(sorter) {
		this.clearMediasWrapper();
		//if (!!sorter) {
		const sortedData = await this.ProxyRatingSorter.sorter(this.Medias, sorter);
		console.log("sortedData", sortedData);
		//Récupérer les medias triés
		const SortedMedias = sortedData.data;
		console.log("SortedMedias", SortedMedias);
		// Afficher les médias triés dans la section gallery
		SortedMedias.forEach((media) => {
			const TemplateMediaSorter = new MediaTemplate(media, this.photographer);
			console.log("templateMedia", TemplateMediaSorter);
			this.mediasWrapper.appendChild(TemplateMediaSorter.getMediaCardDOM());
			const TemplateMedia = TemplateMediaSorter;

			//return TemplateMediaSorter;
			//showLightBox(TemplateMedia);
		});

		const TemplateMediaSorter = new MediaTemplate(SortedMedias, this.photographer);
		console.log("TemplateMediaSorter", TemplateMediaSorter);
		showLightBox(TemplateMediaSorter);
		const wishList = new WishlistSubject();
		//Appeler le constructeur de l'observateur
		const WhishCounter = new WhishListCounter();
		//Récupérer le nombre total de likes
		const counterLikes = WhishCounter.upadateNbTotalLikes();
		//Abonnement de l'observateur
		wishList.subscribe(WhishCounter);
		const like = new likes(wishList);
		like.handleSubmit();

		//return TemplateMediaSorter;

		//console.log("TemplateMediaSorter", TemplateMediaSorter);

		/*} else {
			this.medias.forEach((media) => {
				const Template = new MediaTemplate(media, this.photographer);
				this.mediasWrapper.appendChild(Template.getMediaCardDOM());
			});
		}*/
	}

	//Écouter un événement "change" avec addEventListener sur le formulaire de tri
	onChangeSorter() {
		this.wrapper.querySelector("form").addEventListener("change", (e) => {
			//Récupérer le critère de tri
			const sorter = e.target.value;
			//Appeler la méthode de tri
			this.sorterMedias(sorter);
		});
	}

	// Effacer le contenu de la balise gallery (les médias) pour faire le tri
	clearMediasWrapper() {
		this.mediasWrapper.innerHTML = "";
	}
	// Créer le template pour le formulaire de tri
	render() {
		const sorterForm = `
            <form action="#" class="sorter-form">
                <label for="sorter-select" class="Title-select">Trier par : </label>
				<select  class="sort-menu " name="select-sorter" id="sorter-select" aria-label="Sort Menu">
				<option  class="option-select" value="popularity">Popularité</option>
				<option class="option-select" value="date">Date</option>
				<option class="option-select" value="title">Titre</option>
				</select>
				
            </form>
        `;
		// <option value="">Aucun tri</option>
		this.wrapper.innerHTML = sorterForm;
		//Appeler l'évenement change sur la liste déroulante
		this.onChangeSorter();
		//Rattacher le résultat de tri à la section sorter-form-wrapper
		this.sorterFormWrapper.appendChild(this.wrapper);
	}
}
