import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { ListResults } from '@components/listResults';

import { SearchPage } from './search.styles';

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
			<SearchPage>
				<h1>{`Resultados para: "${searchString}"`}</h1>
				<ListResults />
			</SearchPage>
		</>
	);
};

export default Search;
