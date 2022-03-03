import type { BannerMovieData, ItemActorData, ItemMovieData } from './types';

import { getApiConfiguration } from './getApiConfiguration';
import { getBannerMovies } from './getBannerMovies';
import { getPopularMovies } from './getPopularMovies';
import { getComingSoonMovies } from './getComingSoonMovies';
import { getPopularActors } from './getPopularActors';
import { getActorDetail } from './getActorDetail';

import { makeBackdropPath } from './utils/makeBackdropPath';
import { makePosterPath } from './utils/makePosterPath';
import { makeProfilePath } from './utils/makeProfilePath';

interface HomeData {
	bannerMovies: BannerMovieData[];
	comingSoonMovies: ItemMovieData[];
	popularMovies: ItemMovieData[];
	popularActors: ItemActorData[];
}

export const getHomeData = async (): Promise<HomeData> => {
	return new Promise(async (resolve, reject) => {
		try {
			const apiConfig = await getApiConfiguration();
			const imageBaseUrl = apiConfig.images.base_url;

			/* Obtém os 10 filmes mais populares para o banner */
			const bannerMoviesData = await getBannerMovies();
			const bannerMovies = bannerMoviesData.map(
				({ id, title, overview, backdrop_path, vote_average }) => ({
					id,
					title,
					overview,
					backdrop: makeBackdropPath(backdrop_path, imageBaseUrl),
					rating: vote_average
				})
			);

			/* Obtém os próximos lançamentos, máximo 20 resultados */
			const comingSoonMoviesData = await getComingSoonMovies(1);
			const comingSoonMovies = comingSoonMoviesData.map(
				({ id, title, poster_path, release_date }) => ({
					id,
					title,
					poster: makePosterPath(poster_path, imageBaseUrl),
					releaseDate: release_date
				})
			);

			/* Obtém os filmes mais populares, máximo 20 resultados */
			const popularMoviesData = await getPopularMovies(1);
			const popularMovies = popularMoviesData.map(({ id, title, poster_path, release_date }) => ({
				id,
				title,
				poster: makePosterPath(poster_path, imageBaseUrl),
				releaseDate: release_date
			}));

			/* Obtém os atores mais populares, máximo 20 resultados */
			const popularActorsData = await getPopularActors(1);

			/*
				Por ter um filtro buscando apenas por atores,
				talvez a função não retorne 20 itens,
				então eu adiciono elementos da página 2 para completar
			*/
			if (popularActorsData.length < 20) {
				const itemsLeft = 20 - popularActorsData.length;
				if (itemsLeft > 0) {
					const actorsPage2 = await getPopularActors(2);

					for (let i = 0; i < itemsLeft; i++) {
						popularActorsData.push(actorsPage2[i]);
					}
				}
			}

			/*
				Para obter a data de nascimento dos atores,
				faço uma chamada para api para cada ator,
				é uma operação que em teoria é lenta,
				por isso o ideal é usar cache
			*/
			const popularActors = await Promise.all(
				popularActorsData.map(async ({ id }) => {
					const { name, birthday, profile_path } = await getActorDetail(id);

					return {
						id,
						name,
						birthday,
						profile: makeProfilePath(profile_path, imageBaseUrl)
					};
				})
			);

			resolve({
				bannerMovies,
				comingSoonMovies,
				popularMovies,
				popularActors
			});
		} catch (error) {
			reject(error);
		}
	});
};
