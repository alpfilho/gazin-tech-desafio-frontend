import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import useSWR from 'swr';

import { fetcher } from 'lib/fetcher';

import { AppPage } from 'components/appPage';
import { Section } from 'components/section';
import { ContentContainer } from 'components/contentContainer';
import { Title } from 'components/title';
import { ListResults } from 'components/listResults';

const Search: NextPage = () => {
	const { query: urlQuery } = useRouter();
	const [searchString, setSearchString] = useState('');
	const { data } = useSWR(`/api/search?query=${searchString}`, fetcher);

	useEffect(() => {
		const { query } = urlQuery;

		if (typeof query === 'string') {
			const decodedSearch = decodeURIComponent(query);
			setSearchString(decodedSearch);
		}
	}, [urlQuery]);

	return (
		<AppPage>
			<Head>
				<title>Busca | GazinFilms</title>
			</Head>
			<Section>
				<ContentContainer>
					<Title>Resultados</Title>
				</ContentContainer>
			</Section>
			<ListResults results={data} search={searchString} />
		</AppPage>
	);
};

export default Search;
