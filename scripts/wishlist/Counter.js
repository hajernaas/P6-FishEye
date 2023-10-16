export default class WhishListCounter {
	constructor() {
		this.count = 0;
		this.wishCount = document.querySelector(".photographer_likes_count");
	}

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

	upadateNbTotalLikes() {
		const mediaLikeCount = document.querySelectorAll(".nbLike");
		let totalMediaLikeCount = 0;

		mediaLikeCount.forEach((like) => {
			totalMediaLikeCount += Number(like.textContent);
			console.log("eee", totalMediaLikeCount);

			console.log("rrr", Number(like.textContent));
		});

		this.count = totalMediaLikeCount;

		console.log("ope", this.count);
		this.wishCount.innerHTML = this.count;
		return this.count;
	}
}
