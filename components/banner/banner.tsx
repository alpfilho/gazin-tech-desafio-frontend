import React, { useCallback, useState, useRef, useEffect } from 'react';
import Link from 'next/link';

import type { BannerMovieData } from 'lib/types';

import { SliderControl } from 'components/sliderControl';
import { ContentContainer } from 'components/contentContainer';
import { TmdbRating } from 'components/tmdbRating';

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

const loopInterval = 4000;

export const Banner: React.FC<{
	movies: BannerMovieData[];
}> = ({ movies }) => {
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
			<SliderControl type="left" controlFn={goBackwards} color="white" show={true} />

			<BannerContent>
				<ContentContainer>
					<RatingContainer>
						{movies[activeSlide] && <TmdbRating rating={movies[activeSlide].rating} />}
					</RatingContainer>
					<Link href={`/movie-detail/${movies[activeSlide].id}`} passHref>
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
					</Link>
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

			<SliderControl type="right" controlFn={goForwards} color="white" show={true} />
		</BannerContainer>
	);
};
