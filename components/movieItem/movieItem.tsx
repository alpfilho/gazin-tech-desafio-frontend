import React, { useCallback } from 'react';
import Image from 'next/image';

import {
	MovieItemContainer,
	ImageContainer,
	TextContainer,
	Title,
	DateContainer
} from './movieItem.styles';
import Link from 'next/link';

export interface MovieItemI {
	id: number;
	title: string;
	image: string;
	releaseDate: string;
	upcomingRelease?: boolean;
}

export const MovieItem: React.FC<MovieItemI> = ({
	id,
	title,
	image,
	releaseDate,
	upcomingRelease
}) => {
	const releaseText = useCallback((releaseDate) => {
		const brazilDate = new Date(releaseDate).toLocaleString('pt-BR', {
			timeZone: 'America/Sao_Paulo'
		});

		return brazilDate.split(' ')[0];
	}, []);

	const getYear = useCallback((releaseDate) => {
		const data = new Date(releaseDate);
		return data.getFullYear();
	}, []);

	return (
		<Link href={`/movie-detail/${encodeURIComponent(id)}`} passHref>
			<MovieItemContainer>
				<ImageContainer>
					{image && <Image src={image} alt="Poster do Filme" layout="fill" />}
				</ImageContainer>
				<TextContainer>
					<Title>{title}</Title>
					<DateContainer>
						{upcomingRelease ? releaseText(releaseDate) : getYear(releaseDate)}
					</DateContainer>
				</TextContainer>
			</MovieItemContainer>
		</Link>
	);
};
