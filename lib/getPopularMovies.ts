import { MovieData } from './types';

/**
 * Retorna os filmes populares. Cada página da API tem o tamanho fixo de 20 resultados. Paginamos de forma independente no front-end.
 */
export const getPopularMovies = async (page = 1): Promise<MovieData[]> => {
	return new Promise(async (resolve, reject) => {
		try {
			const moviesDataResponse = await fetch(
				`https://api.themoviedb.org/3/movie/popular?language=pt-BR&api_key=${process.env.TMDB_API_KEY}&page=${page}&region=BR`
			);
			const moviesDataJson = await moviesDataResponse.json();
			const moviesData = moviesDataJson.results.map(
				({ id, title, poster_path, release_date }: MovieData) => ({
					id,
					title,
					poster_path,
					release_date
				})
			);
			resolve(moviesData);
		} catch (error) {
			reject(error);
		}
	});
};
