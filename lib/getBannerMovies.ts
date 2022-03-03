import type { MovieApiData } from './types';

/**
 * No banner, é exibido os 10 primeiros filmes mais populares da semana.
 */
export const getBannerMovies = async (): Promise<MovieApiData[]> => {
	return new Promise(async (resolve, reject) => {
		try {
			const moviesDataResponse = await fetch(
				`https://api.themoviedb.org/3/trending/movie/week?language=pt-BR&api_key=${process.env.TMDB_API_KEY}&page=1`
			);
			const moviesDataJson = await moviesDataResponse.json();
			resolve(moviesDataJson.results.slice(0, 10));
		} catch (error) {
			reject(error);
		}
	});
};
