import Media from "./Media.js";
/*cette classe video hérite de la classe Media*/
export default class Video extends Media {
	constructor(data) {
		super(data);
		this.video = data.video;
	}
}
