import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { AppPage } from '@components/appPage';

const SearchPage: NextPage = () => {
	const { query } = useRouter();
	const { search } = query;

	return (
		<>
			<Head>
				<title>Busca | GazinFilms</title>
			</Head>
			<AppPage>
				<h1>Busca: {search}</h1>
			</AppPage>
		</>
	);
};

export default SearchPage;
