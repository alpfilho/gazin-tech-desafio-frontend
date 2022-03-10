import React, { useCallback } from 'react';

import {
	MovieItemContainer,
	ImageContainer,
	TextContainer,
	Title,
	DateContainer
} from './movieItem.styles';
import Link from 'next/link';
import { MoviePoster } from 'components/moviePoster';

export interface MovieItemI {
	id: number;
	title: string;
	image: string;
	releaseDate: string | null;
}

export const MovieItem: React.FC<MovieItemI> = ({ id, title, image, releaseDate }) => {
	const getDate = useCallback((date) => {
		if (date) {
			const today = new Date();
			const release = new Date(date);

			if (today <= release) {
				const brazilDate = new Date(date).toLocaleString('pt-BR', {
					timeZone: 'America/Sao_Paulo'
				});

				return brazilDate.split(' ')[0];
			} else {
				return release.getFullYear();
			}
		}
		return '';
	}, []);

	return (
		<Link href={`/movie-detail/${encodeURIComponent(id)}`} passHref>
			<MovieItemContainer>
				<ImageContainer>
					<MoviePoster url={image} />
				</ImageContainer>
				<TextContainer>
					<Title title={title}>{title}</Title>
					<DateContainer>{getDate(releaseDate)}</DateContainer>
				</TextContainer>
			</MovieItemContainer>
		</Link>
	);
};
