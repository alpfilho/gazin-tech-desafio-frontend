import React from 'react';
import Head from 'next/head';

import type { GetStaticProps, NextPage } from 'next';
import type { BannerMovieData, ItemActorData, ItemMovieData } from 'lib/types';

import { getHomeData } from 'lib/getHomeData';

import { AppPage } from 'components/appPage';
import { Banner } from 'components/banner';
import { Section } from 'components/section';
import { Title } from 'components/title';
import { ListFilms } from 'components/listFilms';
import { ListActors } from 'components/listActors';
import { ContentContainer } from 'components/contentContainer';

const Home: NextPage<{
	bannerMovies: BannerMovieData[];
	popularMovies: ItemMovieData[];
	comingSoonMovies: ItemMovieData[];
	popularActors: ItemActorData[];
}> = ({ bannerMovies, popularMovies, comingSoonMovies, popularActors }) => (
	<AppPage>
		<Head>
			<title>GazinFilms</title>
		</Head>
		<Banner movies={bannerMovies} />
		<Section>
			<ContentContainer>
				<Title>Próximos Lançamentos</Title>
			</ContentContainer>
			<ListFilms movies={comingSoonMovies} upcomingRelease />
		</Section>
		<Section>
			<ContentContainer>
				<Title>Filmes Populares</Title>
			</ContentContainer>
			<ListFilms movies={popularMovies} />
		</Section>
		<Section>
			<ContentContainer>
				<Title>Atores Populares</Title>
			</ContentContainer>
			<ListActors actors={popularActors} />
		</Section>
	</AppPage>
);

export const getStaticProps: GetStaticProps = async () => {
	const { bannerMovies, popularMovies, comingSoonMovies, popularActors } = await getHomeData();

	return {
		props: {
			bannerMovies,
			popularMovies,
			comingSoonMovies,
			popularActors
		},
		/* Refaz a página a cada 24 horas */
		revalidate: 24 * 60 * 60
	};
};

export default Home;
