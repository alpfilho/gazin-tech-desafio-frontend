import React, { useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

import { Banner } from '@components/banner';
import { Section } from '@components/section';
import { ListFilms } from '@components/listFilms';
import { ListNextReleases } from '@components/listNextReleases';
import { ListActors } from '@components/listActors';

import { HomePage } from './home.styles';

const Home: NextPage = () => {
	const [popularMoviesList] = useState([]);
	const [comingSoonList] = useState([]);
	const [popularActorsList] = useState([]);

	return (
		<HomePage>
			<Head>
				<title>GazinFilms</title>
			</Head>
			<Banner />
			<Section>
				<ListFilms list={popularMoviesList} />
			</Section>
			<Section>
				<ListNextReleases list={comingSoonList} />
			</Section>
			<Section>
				<ListActors list={popularActorsList} />
			</Section>
		</HomePage>
	);
};

export default Home;
