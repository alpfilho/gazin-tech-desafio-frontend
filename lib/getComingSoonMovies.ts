import { MovieData } from './types';

/**
 * Retorna os próximos filmes que serão lançados a partir da data da requisição. Cada página da API tem o tamanho fixo de 20 resultados. Paginamos de forma independente no front-end.
 */
export const getComingSoonMovies = async (page = 1): Promise<MovieData[]> => {
	return new Promise(async (resolve, reject) => {
		try {
			const brazilDate = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
			const parsedDate = brazilDate.split(' ')[0].split('/');

			const day = parsedDate[0];
			const month = parsedDate[1];
			const year = parsedDate[2];

			const initialDate = `${year}-${month}-${day}`;
			const finalDate = `${parseInt(year) + 1}-${month}-${day}`;

			const moviesDataResponse = await fetch(
				`https://api.themoviedb.org/3/discover/movie?language=pt-BR&api_key=${process.env.TMDB_API_KEY}&page=${page}&region=BR&sort_by=primary_release_date.asc&include_adult=false&primary_release_date.gte=${initialDate}&primary_release_date.lte=${finalDate}&with_release_type=2|3`
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
