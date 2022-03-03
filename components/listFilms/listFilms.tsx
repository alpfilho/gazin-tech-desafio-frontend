import React from 'react';

import type { ItemMovieData } from 'lib/types';

import { Carousel } from 'components/carousel';

interface ListFilmsI {
	movies: ItemMovieData[];
	upcomingRelease?: boolean;
}

export const ListFilms: React.FC<ListFilmsI> = ({ movies, upcomingRelease }) => {
	return <Carousel type="movie" data={movies} upcomingRelease={upcomingRelease} />;
};
