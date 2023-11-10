import getPhotographersById from "../pages/photographerPage.js";
/* cette classe permet d'ajouter ou de supprimer un media à une liste d'envies */
export default class likes {
	constructor(WishListSubject) {
		this.WishListSubject = WishListSubject;
		this.article = document.querySelector(".gallery-card");
	}

	async handleSubmit() {
		const allBtnLike = document.querySelectorAll(".btn-like");
		const { mediasList } = await getPhotographersById();

		/*on utilise un Event Listener pour cliquer sur l’une des icônes de cœur de l’un des médias*/
		allBtnLike.forEach((btn) => {
			btn.addEventListener("click", () => {
				//renvoie la valeur du premier élément trouvé qui respecte la condition donnée par la fonction de test.
				//comparer la valeur de l'attribut data en utilisant l'objet dataset avec id du media
				const media = mediasList.find((media) => media.id == btn.dataset.id);

				// le cœur revient à son état initial et le compteur d’envies et le nombre total de likes diminue 1.
				if (btn.classList.contains("wished")) {
					btn.classList.remove("wished");
					this.WishListSubject.fire("DEC");
					media.likes--;
					const likesElement = btn.previousElementSibling;
					likesElement.textContent = `${media.likes}`;
				} else {
					// le cœur se remplit et le compteur d’envies et le nombre total de likes augmente à 1.
					btn.classList.add("wished");
					this.WishListSubject.fire("INC");
					media.likes++;
					const likesElement = btn.previousElementSibling;
					likesElement.textContent = `${media.likes}`;
				}
			});
		});
	}
}
