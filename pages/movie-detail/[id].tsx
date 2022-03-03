import React from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import type { ItemMovieData } from 'lib/types';

import { getApiConfiguration } from 'lib/getApiConfiguration';
import { getPopularMovies } from 'lib/getPopularMovies';
import { getComingSoonMovies } from 'lib/getComingSoonMovies';
import { getMovieDetail } from 'lib/getMovieDetail';
import { makePosterPath } from 'lib/utils/makePosterPath';

const MovieDetail: NextPage<{ movieDetail: ItemMovieData }> = ({ movieDetail }) => (
	<h1>{movieDetail.title}</h1>
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
		const apiConfig = await getApiConfiguration();
		const movieData = await getMovieDetail(params.id);

		const movieDetail = {
			id: movieData.id,
			title: movieData.title,
			poster: makePosterPath(movieData.poster_path, apiConfig.images.base_url),
			releaseDate: movieData.release_date
		} as ItemMovieData;

		return {
			props: {
				movieDetail
			}
		};
	}

	return {
		notFound: true
	};
};

export default MovieDetail;
