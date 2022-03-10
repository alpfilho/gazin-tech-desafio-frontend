import React from 'react';

import { MovieOverview } from './movieDetail.styles';
import { Hero } from './hero';

import { Title } from 'components/title';
import { ContentContainer } from 'components/contentContainer';

interface MovieDetailI {
	title: string;
	overview?: string;
	poster?: string;
	backdrop?: string;
	rating?: number;
}

export const MovieDetail: React.FC<MovieDetailI> = ({
	title,
	poster,
	backdrop,
	overview,
	rating
}) => (
	<>
		<Hero title={title} poster={poster} backdrop={backdrop} rating={rating} />
		<ContentContainer>
			<Title>Visão Geral</Title>
		</ContentContainer>
		<ContentContainer>
			{overview ? (
				<MovieOverview>{overview}</MovieOverview>
			) : (
				<MovieOverview> ainda não temos a sinopse para este filme 🙁</MovieOverview>
			)}
		</ContentContainer>
	</>
);
