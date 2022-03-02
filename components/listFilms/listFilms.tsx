import React, { useEffect } from 'react';

import { MovieData } from 'lib/types';

import { ListFilmsContainer, MovieList } from './listFilms.styles';
import { Carousel } from 'components/carousel';
import { MovieItem } from 'components/movieItem';

interface ListFilmsI {
	initialData: MovieData[];
}

export const ListFilms: React.FC<ListFilmsI> = ({ initialData }) => {
	useEffect(() => {
		// console.log(initialData);
	}, [initialData]);

	return (
		<ListFilmsContainer>
			<MovieList>
				<Carousel initialData={initialData} itemElement={MovieItem} />
			</MovieList>
		</ListFilmsContainer>
	);
};
