import { MovieApiData } from './types';

export const getMovieDetail = async (id: number | string): Promise<MovieApiData> => {
	return new Promise(async (resolve, reject) => {
		try {
			const movieDataResponse = await fetch(
				`https://api.themoviedb.org/3/movie/${id}?language=pt-BR&api_key=${process.env.TMDB_API_KEY}`
			);
			const movieDataJson = await movieDataResponse.json();

			resolve(movieDataJson);
		} catch (error) {
			reject(error);
		}
	});
};
