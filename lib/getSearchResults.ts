import { getApiConfiguration } from './getApiConfiguration';
import type { MovieApiData, MovieItemData } from './types';
import { makePosterPath } from './utils/makePosterPath';

export const getSearchResults = async (query: string, page = 1): Promise<MovieItemData[]> => {
	return new Promise(async (resolve, reject) => {
		try {
			const {
				images: { base_url }
			} = await getApiConfiguration();
			const searchDataResponse = await fetch(
				`https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&language=pt-BR&query=${query}&page=${page}&include_adult=false`
			);
			const searchDataJson = await searchDataResponse.json();
			const searchData = searchDataJson.results.map(
				({ id, title, poster_path, release_date }: MovieApiData) => ({
					id,
					poster: makePosterPath(poster_path, base_url),
					title,
					releaseDate: release_date
				})
			);

			resolve(searchData);
		} catch (error) {
			reject(error);
		}
	});
};
