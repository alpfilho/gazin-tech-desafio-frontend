import React from 'react';
import Head from 'next/head';

import type { GetStaticProps, NextPage } from 'next';
import type { ActorData, ApiConfiguration, MovieData } from 'lib/types';

import { getApiConfiguration } from 'lib/getApiConfiguration';
import { getBannerMovies } from 'lib/getBannerMovies';
import { getPopularMovies } from 'lib/getPopularMovies';
import { getComingSoonMovies } from 'lib/getComingSoonMovies';
import { getPopularActors } from 'lib/getPopularActors';

import { AppPage } from 'components/appPage';
import { Banner } from 'components/banner';
import { Section } from 'components/section';
import { Title } from 'components/title';
import { ListFilms } from 'components/listFilms';
import { ListActors } from 'components/listActors';

const Home: NextPage<{
	apiConfig: ApiConfiguration;
	bannerMoviesData: MovieData[];
	popularMoviesInitialData: MovieData[];
	comingSoonMoviesInitialData: MovieData[];
	popularActorsInitialData: ActorData[];
}> = ({
	apiConfig,
	bannerMoviesData,
	popularMoviesInitialData,
	comingSoonMoviesInitialData,
	popularActorsInitialData
}) => {
	return (
		<AppPage>
			<Head>
				<title>GazinFilms</title>
			</Head>
			<Banner apiConfig={apiConfig} movies={bannerMoviesData} />
			<Section>
				<Title>Próximos Lançamentos</Title>
				<ListFilms initialData={comingSoonMoviesInitialData} />
			</Section>
			<Section>
				<Title>Filmes Populares</Title>
				<ListFilms initialData={popularMoviesInitialData} />
			</Section>
			<Section>
				<Title>Atores Populares</Title>
				<ListActors initialData={popularActorsInitialData} />
			</Section>
		</AppPage>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const apiConfig = await getApiConfiguration();
	const bannerMoviesData = await getBannerMovies();
	const popularMoviesInitialData = await getPopularMovies();
	const comingSoonMoviesInitialData = await getComingSoonMovies();
	const popularActorsInitialData = await getPopularActors();

	return {
		props: {
			apiConfig,
			bannerMoviesData,
			popularMoviesInitialData,
			comingSoonMoviesInitialData,
			popularActorsInitialData
		},
		/* Refaz a página a cada 24 horas */
		revalidate: 24 * 60 * 60
	};
};

export default Home;
