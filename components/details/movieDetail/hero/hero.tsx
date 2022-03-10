import React from 'react';
import Image from 'next/image';
import { Title } from 'components/title';

import { ContentContainer } from 'components/contentContainer';
import { MoviePoster } from 'components/moviePoster';
import { TmdbRating } from 'components/tmdbRating';

import {
	TitleContainer,
	TextContainer,
	BackdropContainer,
	PosterContainer,
	BackdropContent
} from './hero.styles';

export interface HeroI {
	title: string;
	backdrop?: string;
	poster?: string;
	rating?: number;
}

export const Hero: React.FC<HeroI> = ({ title, poster, backdrop, rating }) => (
	<>
		<TitleContainer>
			<ContentContainer>
				<PosterContainer>
					<MoviePoster url={poster} />
				</PosterContainer>
				<TextContainer>
					<Title>{title}</Title>
					{rating ? <TmdbRating rating={rating} /> : null}
				</TextContainer>
			</ContentContainer>
		</TitleContainer>
		<BackdropContainer>
			{backdrop ? (
				<BackdropContent>
					<Image
						src={backdrop}
						layout="fill"
						objectFit="cover"
						objectPosition="center center"
						alt=""
					/>
				</BackdropContent>
			) : null}
		</BackdropContainer>
	</>
);
