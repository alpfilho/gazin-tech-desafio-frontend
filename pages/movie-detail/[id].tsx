import React from 'react';
import Head from 'next/head';

import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import type { MovieDetailData } from 'lib/types';

import { getApiConfiguration } from 'lib/getApiConfiguration';
import { getPopularMovies } from 'lib/getPopularMovies';
import { getComingSoonMovies } from 'lib/getComingSoonMovies';
import { getMovieDetail } from 'lib/getMovieDetail';
import { makePosterPath } from 'lib/utils/makePosterPath';
import { makeBackdropPath } from 'lib/utils/makeBackdropPath';

import { AppPage } from 'components/appPage';
import { Details } from 'components/details';

const MovieDetail: NextPage<{ movieDetail: MovieDetailData }> = ({ movieDetail }) => (
	<AppPage>
		<Head>
			<title>{`${
				movieDetail.title ? `${movieDetail.title} | ` : 'Não encontrado | '
			}GazinFilms`}</title>
		</Head>
		<Details type="movie" movie={movieDetail} />
	</AppPage>
);

export const getStaticPaths: GetStaticPaths = async () => {
	const popularMovies = await getPopularMovies(1);
	const upcomingMovies = await getComingSoonMovies(1);

	return {
		paths: [
			...popularMovies.map(({ id }) => ({ params: { id: id.toString() } })),
			...upcomingMovies.map(({ id }) => ({ params: { id: id.toString() } }))
		],
		fallback: 'blocking'
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	if (params && typeof params.id === 'string') {
		try {
			const {
				images: { base_url }
			} = await getApiConfiguration();

			const { id, title, poster_path, backdrop_path, overview, vote_average } =
				await getMovieDetail(params.id);

			const movieDetail = {
				id,
				title,
				poster: makePosterPath(poster_path, base_url),
				backdrop: makeBackdropPath(backdrop_path, base_url),
				overview,
				rating: vote_average
			} as MovieDetailData;

			return {
				props: {
					movieDetail
				},
				/* Refaz a página a cada 24 horas */
				revalidate: 24 * 60 * 60
			};
		} catch (error) {
			return {
				notFound: true
			};
		}
	}

	return {
		notFound: true
	};
};

export default MovieDetail;
