import { ActorData } from './types';

/**
 * Retorna os atores populares. Cada página da API tem o tamanho fixo de 20 resultados. Paginamos de forma independente no front-end.
 */
export const getPopularActors = async (page = 1): Promise<ActorData[]> => {
	return new Promise(async (resolve, reject) => {
		try {
			const actorsDataResponse = await fetch(
				`https://api.themoviedb.org/3/person/popular?language=pt-BR&api_key=${process.env.TMDB_API_KEY}&page=${page}`
			);
			const actorsDataJson = await actorsDataResponse.json();
			const actorsData = actorsDataJson.results.map(({ id, name, profile_path }: ActorData) => ({
				id,
				name,
				profile_path
			}));
			resolve(actorsData);
		} catch (error) {
			reject(error);
		}
	});
};
