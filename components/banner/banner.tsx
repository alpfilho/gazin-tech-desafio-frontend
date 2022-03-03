import React, { useCallback, useState, useRef, useEffect } from 'react';
import { useMotionValue, animate } from 'framer-motion';

import type { ApiConfiguration, BannerMovieData } from 'lib/types';
import { makeBackdropPath } from 'lib/utils/makeBackdropPath';

import { TmdbRating } from 'components/tmdbRating';
import { ContentContainer } from 'components/contentContainer';

import { ControlButton } from './controlButton';
import { TextContent } from './textContent';

import {
	BackgroundContainer,
	BackgroundContent,
	BackgroundImage,
	BackgroundOverlay,
	BannerContainer,
	BannerContent,
	RatingContainer,
	TextBackground,
	TextContainer
} from './banner.styles';

interface BannerI {
	movies: BannerMovieData[];
}

const loopInterval = 4000;
const debounceTime = 400;

export const Banner: React.FC<BannerI> = ({ movies }) => {
	const prevIndexRef = useRef(0);
	const [slideIndex, setSlideIndex] = useState(0);

	const loopControlRef = useRef<{ timeoutID: NodeJS.Timeout | undefined; waitTime: number }>({
		timeoutID: undefined,
		waitTime: loopInterval
	});

	useEffect(() => {
		console.log(prevIndexRef.current, slideIndex);
	}, [slideIndex]);

	const goForwards = useCallback(() => {
		setSlideIndex((prevSlide) => {
			prevIndexRef.current = prevSlide;
			const nextSlide = prevSlide + 1;

			if (nextSlide > movies.length - 1) {
				return 0;
			}

			return nextSlide;
		});
	}, [movies.length]);

	const goBackwards = useCallback(() => {
		setSlideIndex((prevSlide) => {
			prevIndexRef.current = prevSlide;
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
						{movies[slideIndex] && <TmdbRating rating={movies[slideIndex].rating} />}
					</RatingContainer>
					<TextContainer>
						{movies.map(({ id, title, overview }, index) => {
							return (
								<TextContent
									key={id}
									itemIndex={index}
									title={title}
									overview={overview}
									slideIndex={slideIndex}
									prevIndexRef={prevIndexRef}
								/>
							);
						})}
					</TextContainer>
				</ContentContainer>
			</BannerContent>

			<BackgroundContainer>
				<BackgroundContent>
					{movies.map(({ id, backdrop }) => {
						const match = movies[slideIndex].id === id;
						return (
							<BackgroundImage
								key={id}
								backgroundimage={backdrop}
								initial={false}
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
