// Ce fichier contient l'algorithme de tri où les médias sont triés par popularité , par titre ou  par date.

/*export default class RatingSorterApi {
	static async sorter(data, sortBy) {
		try {
			console.log("Get from compute");
			const result = await SortByCriteria(data, sortBy);
			return result;
		} catch (error) {
			console.log(error);
		}
	}
}

export async function SortByCriteria(data, sortBy) {
	if (sortBy === "popularity") {
		const result = {
			key: sortBy,
			data: Array.from(data).sort((a, b) => b.likes - a.likes),
		};
		console.log("datasortPopularité", result);
		return result;
	} else if (sortBy === "date") {
		const result = {
			key: sortBy,
			data: Array.from(data).sort((a, b) => new Date(b.date) - new Date(a.date)),
		};
		console.log("datasortdate", result);
		return result;
	} else if (sortBy === "title") {
		const result = {
			key: sortBy,
			data: Array.from(data).sort((a, b) => a.title.localeCompare(b.title)),
		};
		console.log("datasorttitre", result);
		return result;
	} else {
		throw "unknow orderBy type";
	}
}*/

/*export default class RatingSorterApi {
	static async sorter(data, sortBy) {
		console.log("Get from compute");
		//Un objet Promise est instancié en lui fournissant en argument la fonction asynchrone setTimeout à
		//exécuter  qui prend elle-même en arguments la fonction callback à exécuter en cas de succès
		//(resolve) et  un message d'érreur à afficher en cas d'échec.
		if (sortBy === "popularity") {
				return new Promise((resolve) => {
				// la méthode setTimeout prend à chaque fois une seconde pour trier les films.
				setTimeout(() => {
					const result = {
						key: sortBy,
						data: Array.from(data).sort((a, b) => b.likes - a.likes),
					};

					console.log("datasortPopularité", result);
					resolve(result);
				}, 1000);
			});
            

			
		} else if (sortBy === "date") {
			return new Promise((resolve) => {
				setTimeout(() => {
					const result = {
						key: sortBy,
						data: Array.from(data).sort((a, b) => new Date(b.date) - new Date(a.date)),
					};
					console.log("datasortdate", result);
					resolve(result);
				}, 1000);
			});
		} else if (sortBy === "title") {
			return new Promise((resolve) => {
				setTimeout(() => {
					const result = {
						key: sortBy,
						data: Array.from(data).sort((a, b) => a.title.localeCompare(b.title)),
					};
					console.log("datasorttitre", result);
					resolve(result);
				}, 1000);
			});
		} else {
			throw "unknow orderBy type";
		}
	}
}
*/

export default class RatingSorterApi {
	static async sorter(data, sortBy) {
		console.log("Get from compute");
		//Un objet Promise est instancié en lui fournissant en argument la fonction asynchrone setTimeout à
		//exécuter  qui prend elle-même en arguments la fonction callback à exécuter en cas de succès
		//(resolve) et  un message d'érreur à afficher en cas d'échec.
		if (sortBy === "popularity") {
			const result = {
				key: sortBy,
				data: Array.from(data).sort((a, b) => b.likes - a.likes),
			};

			console.log("datasortPopularité", result);
			return result;
		} else if (sortBy === "date") {
			const result = {
				key: sortBy,
				data: Array.from(data).sort((a, b) => new Date(b.date) - new Date(a.date)),
			};
			console.log("datasortdate", result);
			return result;
		} else if (sortBy === "title") {
			const result = {
				key: sortBy,
				data: Array.from(data).sort((a, b) => a.title.localeCompare(b.title)),
			};
			console.log("datasorttitre", result);
			return result;
		} else {
			throw "unknow orderBy type";
		}
	}
}
