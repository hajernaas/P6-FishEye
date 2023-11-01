/* cette classe contient l'Observer qui souhaite etre informé de toutes les modifiations apporteés au sujet */

export default class WhishListCounter {
	constructor() {
		this.count = 0;
		this.wishCount = document.querySelector(".photographer-likes-count");
	}

	/* cette fonction permet de modifier le compteur d'envies*/
	update(action) {
		if (action === "INC") {
			this.count += 1;
		} else if (action === "DEC") {
			this.count -= 1;
		} else {
			throw "Unknow action";
		}

		this.wishCount.innerHTML = this.count;
	}

	/* cette fonction permet de calcuer le nombre total de likes et de l'afficher  */
	upadateNbTotalLikes() {
		const mediaLikeCount = document.querySelectorAll(".nbLike");
		let totalMediaLikeCount = 0;

		mediaLikeCount.forEach((like) => {
			totalMediaLikeCount += Number(like.textContent);
		});

		this.count = totalMediaLikeCount;

		this.wishCount.innerHTML = this.count;
		return this.count;
	}
}
