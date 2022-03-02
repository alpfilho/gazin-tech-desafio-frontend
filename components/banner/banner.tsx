import React, { useCallback, useState } from 'react';
import { useTheme } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import type { ApiConfiguration, MovieData } from 'lib/types';
import { makeBackdropPath } from 'lib/utils/makeBackdropPath';

import { TmdbRating } from 'components/tmdbRating';
import { ContentContainer } from 'components/contentContainer';

import {
	BackgroundContainer,
	BackgroundContent,
	BackgroundImage,
	BackgroundOverlay,
	BannerContainer,
	BannerContent,
	RatingContainer,
	Synopsis,
	TextBackground,
	TextContainer,
	TextContent,
	Title
} from './banner.styles';
import { ControlButton } from './controlButton';

interface BannerI {
	apiConfig: ApiConfiguration;
	movies: MovieData[];
}

export const Banner: React.FC<BannerI> = ({ apiConfig, movies }) => {
	const [slideIndex, setSlideIndex] = useState(0);

	const goForwards = useCallback(() => {
		setSlideIndex((prevSlide) => {
			const nextSlide = prevSlide + 1;

			if (nextSlide > movies.length - 1) {
				return 0;
			}

			return nextSlide;
		});
	}, [movies.length]);

	const goBackwards = useCallback(() => {
		setSlideIndex((prevSlide) => {
			const nextSlide = prevSlide - 1;

			if (nextSlide < 0) {
				return movies.length - 1;
			}

			return nextSlide;
		});
	}, [movies.length]);

	return (
		<BannerContainer>
			<ControlButton type="left" controlFn={goBackwards} />

			<BannerContent>
				<ContentContainer>
					<RatingContainer>
						<TmdbRating rating={movies[slideIndex].vote_average} />
					</RatingContainer>
					<TextContainer>
						{movies.map(({ id, title, overview }) => {
							const match = movies[slideIndex].id === id;
							return (
								<TextContent
									key={id}
									initial={{
										x: match ? '0%' : '25%',
										opacity: match ? 1 : 0,
										zIndex: match ? 1 : 0
									}}
									animate={{
										x: match ? '0%' : '-25%',
										opacity: match ? 1 : 0,
										zIndex: match ? 1 : 0
									}}
									transition={{
										x: { type: 'spring', from: '25%' },
										opacity: {
											type: 'tween',
											duration: 0.75,
											ease: 'linear',
											delay: match ? 0 : 0.75
										}
									}}
								>
									<Title>{title}</Title>
									<Synopsis>{overview}</Synopsis>
								</TextContent>
							);
						})}
					</TextContainer>
				</ContentContainer>
			</BannerContent>

			<BackgroundContainer>
				<BackgroundContent>
					{movies.map(({ id, backdrop_path }) => {
						const match = movies[slideIndex].id === id;
						return (
							<BackgroundImage
								key={id}
								backgroundimage={makeBackdropPath(backdrop_path, apiConfig)}
								initial={{ opacity: match ? 1 : 0, zIndex: match ? 1 : 0 }}
								animate={{ opacity: match ? 1 : 0, zIndex: match ? 1 : 0 }}
								transition={{
									opacity: {
										type: 'tween',
										duration: 0.75,
										ease: 'linear',
										delay: match ? 0 : 0.75
									}
								}}
							/>
						);
					})}
					<BackgroundOverlay />
					<TextBackground />
				</BackgroundContent>
			</BackgroundContainer>

			<ControlButton type="right" controlFn={goForwards} />
		</BannerContainer>
	);
};
