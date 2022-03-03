import React, { useCallback } from 'react';

import { ItemActorData, ItemMovieData } from 'lib/types';

import { SliderControl } from 'components/sliderControl';

import { ItemsContainer } from './itemsContainer';

import { CarouselContainer, LeftGradient, RightGradient } from './carousel.styles';

interface CarouselI {
	type: 'movie' | 'actor';
	data: ItemActorData[] | ItemMovieData[];
	upcomingRelease?: boolean;
}

export const Carousel: React.FC<CarouselI> = ({ type, data, upcomingRelease }) => {
	const goBackwards = useCallback(() => {
		console.log('<<');
	}, []);

	const goForwards = useCallback(() => {
		console.log('>>');
	}, []);

	return (
		<CarouselContainer>
			<LeftGradient />
			<SliderControl type="left" controlFn={goBackwards} />
			<ItemsContainer type={type} data={data} upcomingRelease={upcomingRelease} />
			<SliderControl type="right" controlFn={goForwards} />
			<RightGradient />
		</CarouselContainer>
	);
};
