import getPhotographersById from "../pages/photographerPage.js";

export default class likes {
	constructor(WishListSubject) {
		this.WishListSubject = WishListSubject;
		this.article = document.querySelector(".gallery-card");
	}

	async handleSubmit() {
		const allBtnLike = document.querySelectorAll(".btn-like");
		const likesElement = document.querySelector(".photographer_likes_count");
		const mediaLikeCount = document.querySelector(".nbLike");
		const { mediasList } = await getPhotographersById();
		console.log("zzz", mediasList);

		allBtnLike.forEach((btn) => {
			console.log("yyy", btn);
			btn.addEventListener("click", () => {
				const media = mediasList.find((media) => media.id == btn.dataset.id);
				console.log("ddd", btn);
				console.log("xxx", media);

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
