import Media from "./Media.js";

/*cette classe représentant une image, héritant de la classe Media*/
export default class Image extends Media {
	constructor(data) {
		super(data);
		this.image = data.image;
	}
}
