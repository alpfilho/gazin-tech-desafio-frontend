import React from 'react';

import type { NextPage } from 'next';
import Head from 'next/head';

import { AppPage } from '@components/appPage';

const Home: NextPage = () => (
	<>
		<Head>
			<title>GazinFilms</title>
		</Head>
		<AppPage>
			<h1>Início</h1>
		</AppPage>
	</>
);

export default Home;
