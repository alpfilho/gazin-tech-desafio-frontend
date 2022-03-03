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

export const Banner: React.FC<BannerI> = ({ movies }) => {
	const prevIndexRef = useRef(0);
	const [activeSlide, setSlideIndex] = useState(0);

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

	const loopControlRef = useRef<{ timeoutID: NodeJS.Timeout | undefined; waitTime: number }>({
		timeoutID: undefined,
		waitTime: loopInterval
	});

	/**
	 * Loop
	 */
	const startTimer = useCallback(() => {
		const loopControl = loopControlRef.current;

		if (loopControl.timeoutID) {
			clearTimeout(loopControl.timeoutID);
		}

		loopControl.timeoutID = setTimeout(() => {
			goForwards();
		}, loopInterval);
	}, [goForwards]);

	useEffect(() => {
		startTimer();

		const loopControl = loopControlRef.current;

		return () => {
			if (loopControl.timeoutID) {
				clearTimeout(loopControl.timeoutID);
			}
		};
	}, [activeSlide, startTimer]);

	return (
		<BannerContainer>
			<ControlButton type="left" controlFn={goBackwards} />

			<BannerContent>
				<ContentContainer>
					<RatingContainer>
						{movies[activeSlide] && <TmdbRating rating={movies[activeSlide].rating} />}
					</RatingContainer>
					<TextContainer>
						{movies.map(({ id, title, overview }, index) => {
							return (
								<TextContent
									key={id}
									itemIndex={index}
									title={title}
									overview={overview}
									activeSlide={activeSlide}
									slideLength={movies.length}
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
						const match = movies[activeSlide].id === id;
						return (
							<BackgroundImage
								key={id}
								backgroundimage={backdrop}
								initial={false}
								animate={{ opacity: match ? 1 : 0, zIndex: match ? 1 : 0 }}
								transition={{
									opacity: {
										type: 'tween',
										duration: 0.33,
										ease: 'linear',
										delay: match ? 0 : 0.33
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
