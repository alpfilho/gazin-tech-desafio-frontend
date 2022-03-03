import type { ApiConfiguration } from './types';

/**
 * Para construir as urls das imagens, é necessário utilizar a base_url disponível apenas na configuração da api:
 */
export const getApiConfiguration = async (): Promise<ApiConfiguration> => {
	return new Promise(async (resolve, reject) => {
		try {
			const apiConfigResponse = await fetch(
				`https://api.themoviedb.org/3/configuration?api_key=${process.env.TMDB_API_KEY}`
			);

			const apiConfig = await apiConfigResponse.json();

			resolve({
				images: apiConfig.images
			});
		} catch (error) {
			reject(error);
		}
	});
};
