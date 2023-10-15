class WhishListCounter {
	constructor(nbTotalLikes) {
		this._count = nbTotalLikes;
		this._$wishCount = document.querySelector(".photographer_likes_count");
	}

	update(action) {
		if (action === "INC") {
			this._count += 1;
		} else if (action === "DEC") {
			this._count -= 1;
		} else {
			throw "Unknow action";
		}

		this._$wishCount.innerHTML = this._count;
	}
}
