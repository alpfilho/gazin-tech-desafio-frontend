import React from 'react';

import type { ActorDetailData, MovieDetailData } from 'lib/types';

import { ActorDetail } from './actorDetail';
import { MovieDetail } from './movieDetail';

interface DetailsI {
	type: 'movie' | 'actor';
	movie?: MovieDetailData;
	actor?: ActorDetailData;
}

export const Details: React.FC<DetailsI> = ({ type, actor, movie }) => {
	if (type === 'actor' && actor) {
		return (
			<ActorDetail
				avatar={actor.profile}
				name={actor.name}
				birthday={actor.birthday}
				placeOfBirth={actor.placeOfBirth}
				biography={actor.biography}
				filmography={actor.filmography}
			/>
		);
	}

	if (type === 'movie' && movie) {
		return (
			<MovieDetail
				poster={movie.poster}
				title={movie.title}
				overview={movie.overview}
				backdrop={movie.backdrop}
				rating={movie.rating}
			/>
		);
	}

	return null;
};
