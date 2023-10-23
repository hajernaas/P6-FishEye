//la classe Media représente la classe mère contenant les attributs communs de deux classe video et image

export default class Media {
	constructor(data) {
		this.id = data.id;
		this.photographerId = data.photographerId;
		this.title = data.title;
		this.likes = data.likes;
		this.date = data.date;
		this.price = data.price;
	}
}
