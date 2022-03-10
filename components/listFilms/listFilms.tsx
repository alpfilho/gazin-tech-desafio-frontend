import React from 'react';

import type { MovieItemData } from 'lib/types';

import { Carousel } from 'components/carousel';

import { ListFilmsContainer } from './listFilms.styles';

interface ListFilmsI {
	movies: MovieItemData[];
}

export const ListFilms: React.FC<ListFilmsI> = ({ movies }) => {
	return (
		<ListFilmsContainer>
			<Carousel type="movie" data={movies} />
		</ListFilmsContainer>
	);
};
