import React, { useCallback } from 'react';

import {
	MovieItemContainer,
	ImageContainer,
	TextContainer,
	Title,
	DateContainer
} from './movieItem.styles';

export interface MovieItemI {
	title: string;
	image: string;
	releaseDate: string;
}

export const MovieItem: React.FC<MovieItemI> = ({ title, image, releaseDate }) => {
	const getYear = useCallback((releaseDate) => {
		const data = new Date(releaseDate);
		return data.getFullYear();
	}, []);

	return (
		<MovieItemContainer>
			<ImageContainer>
				<img src={image} alt="" />
			</ImageContainer>
			<TextContainer>
				<Title>{title}</Title>
				<DateContainer>{getYear(releaseDate)}</DateContainer>
			</TextContainer>
		</MovieItemContainer>
	);
};
