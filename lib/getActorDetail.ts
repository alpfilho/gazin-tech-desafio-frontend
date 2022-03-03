import { ActorDetailApiData } from './types';

/**
 * Retorna os detalhes de um ator.
 */
export const getActorDetail = async (
	id: number | string,
	appendMovies = false
): Promise<ActorDetailApiData> => {
	return new Promise(async (resolve, reject) => {
		try {
			let fetchUrl;

			if (appendMovies) {
				fetchUrl = `https://api.themoviedb.org/3/person/${id}?language=pt-BR&api_key=${process.env.TMDB_API_KEY}&append_to_response=movie_credits`;
			} else {
				fetchUrl = `https://api.themoviedb.org/3/person/${id}?language=pt-BR&api_key=${process.env.TMDB_API_KEY}`;
			}

			const actorDataResponse = await fetch(fetchUrl);
			const actorsDataJson = await actorDataResponse.json();

			resolve(actorsDataJson);
		} catch (error) {
			reject(error);
		}
	});
};
