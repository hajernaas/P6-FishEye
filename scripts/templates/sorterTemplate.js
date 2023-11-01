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
	}

	// cette méthode permet d'appeler ProxyRatingSorter qui permet de récupérer le critére de tri et les medias triés
	async sorterMedias(sorter) {
		this.clearMediasWrapper();
		const sortedData = await this.ProxyRatingSorter.sorter(this.Medias, sorter);
		//Récupérer les medias triés
		const SortedMedias = sortedData.data;
		// Afficher les médias triés dans la section gallery
		SortedMedias.forEach((media) => {
			const TemplateMediaSorter = new MediaTemplate(media, this.photographer);
			console.log("templateMedia", TemplateMediaSorter);
			this.mediasWrapper.appendChild(TemplateMediaSorter.getMediaCardDOM());
		});

		const TemplateMediaSorter = new MediaTemplate(SortedMedias, this.photographer);
		showLightBox(TemplateMediaSorter);
		const wishList = new WishlistSubject();
		//Appeler le constructeur de l'observateur
		const WhishCounter = new WhishListCounter();
		//Récupérer le nombre total de likes
		WhishCounter.upadateNbTotalLikes();
		//Abonnement de l'observateur
		wishList.subscribe(WhishCounter);
		//Afficher et gérer les likes
		const like = new likes(wishList);
		like.handleSubmit();
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
