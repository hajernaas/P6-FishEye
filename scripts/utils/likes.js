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
		console.log("zzz", mediasList);

		/*on utilise un Event Listener pour cliquer sur l’une des icônes de cœur de l’un des médias*/
		allBtnLike.forEach((btn) => {
			console.log("yyy", btn);
			btn.addEventListener("click", () => {
				const media = mediasList.find((media) => media.id == btn.dataset.id);
				console.log("ddd", btn);
				console.log("xxx", media);

				// le cœur revient à son état initial et le compteur d’envies et le nombre total de likes diminue 1.
				if (btn.classList.contains("wished")) {
					btn.classList.remove("wished");
					this.WishListSubject.fire("DEC");
					media.likes--;
					console.log("mmm", media.likes);

					const likesElement = btn.previousElementSibling;
					console.log("iii", likesElement);

					likesElement.textContent = `${media.likes}`;
					console.log("pppp", likesElement.textContent);
				} else {
					// le cœur se remplit et le compteur d’envies et le nombre total de likes augmente à 1.
					btn.classList.add("wished");
					this.WishListSubject.fire("INC");
					media.likes++;
					console.log("uuu", media.likes);
					const likesElement = btn.previousElementSibling;
					console.log("iii", likesElement);
					likesElement.textContent = `${media.likes}`;
					console.log("ppoo", likesElement.textContent);
				}
			});
		});
	}
}
