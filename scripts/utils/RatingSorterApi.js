// Ce fichier contient l'algorithme de tri où les médias sont triés par popularité , par titre ou  par date.

export default class RatingSorterApi {
	static async sorter(data, sortBy) {
		console.log("Get from compute");

		if (sortBy === "popularity") {
			const result = {
				key: sortBy,
				data: Array.from(data).sort((a, b) => b.likes - a.likes),
			};

			return result;
		} else if (sortBy === "date") {
			const result = {
				key: sortBy,
				data: Array.from(data).sort((a, b) => new Date(b.date) - new Date(a.date)),
			};

			return result;
		} else if (sortBy === "title") {
			const result = {
				key: sortBy,
				data: Array.from(data).sort((a, b) => a.title.localeCompare(b.title)),
			};

			return result;
		} else {
			throw "unknow orderBy type";
		}
	}
}
