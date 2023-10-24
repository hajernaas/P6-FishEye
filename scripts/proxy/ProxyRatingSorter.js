import RatingSorterApi from "../utils/RatingSorterApi.js";
// ce fichier contient la classe Proxy qui permet de gérer le systéme de cache,
//de stocker le résultat de tri afin de réduire le temps de réponse.
export default class ProxyRatingSorter {
	constructor() {
		// le résultat stocké dans notre cache
		this.cache = [];
	}
	// Méthode de tri
	async sorter(medias, sortBy) {
		//S’il y a de résultat caché
		const cachedResult = this.cache.find((elt) => elt.key === sortBy);
		if (cachedResult) {
			//résultat venant du cache
			console.log("get from cache");
			return cachedResult;
		}
		//si non stocker le résulat venant de RatingSorterApi dans le cache
		const data = await RatingSorterApi.sorter(medias, sortBy);
		this.cache.push(data);
		return data;
	}
}
