import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { AppPage } from 'components/appPage';
import { ListResults } from 'components/listResults';
import { Section } from 'components/section';
import { Title } from 'components/title';

const Search: NextPage = () => {
	const { query: urlQuery } = useRouter();
	const [searchString, setSearchString] = useState('');

	useEffect(() => {
		const { query } = urlQuery;

		if (typeof query === 'string') {
			const decodedSearch = decodeURIComponent(query);
			setSearchString(decodedSearch);
		}
	}, [urlQuery]);

	return (
		<>
			<Head>
				<title>Busca | GazinFilms</title>
			</Head>
			<AppPage>
				<Section>
					<Title>Resultados</Title>
				</Section>
				<h1>{searchString}</h1>
				<ListResults />
			</AppPage>
		</>
	);
};

export default Search;
