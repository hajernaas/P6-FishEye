import Video from "../models/Video.js";
import Image from "../models/Image.js";

// cette classe permet de créer les medias en distinguant les vidéos des photos.
export default class MediasFactory {
	constructor(data) {
		if (data.image) {
			// Si le type correspond à l'image, alors on retourne les infos de l'image
			return new Image(data);
		} else if (data.video) {
			// Si le type correspond au video, alors on retourne les infos du video
			return new Video(data);
		} else {
			//déclencher une erreur si le format n'est pas reconnu
			throw "Unknown type format";
		}
	}
}
