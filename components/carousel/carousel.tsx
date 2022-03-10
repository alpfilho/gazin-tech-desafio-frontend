import React, { useCallback, useState, useEffect } from 'react';

import type { ActorItemData, MovieItemData } from 'lib/types';

import { SliderControl } from 'components/sliderControl';

import { ItemsContainer } from './itemsContainer';

import { CarouselContainer, CarouselContent, LeftGradient, RightGradient } from './carousel.styles';

interface CarouselI {
	type: 'movie' | 'actor';
	data: ActorItemData[] | MovieItemData[];
}

/**
 * Carousel genérico para exibir filmes e atores
 */
export const Carousel: React.FC<CarouselI> = ({ type, data }) => {
	const [contentWidth, setContentWidth] = useState(0);
	const [itemWidth, setItemWidth] = useState(0);
	const [visibleItems, setVisibleItems] = useState(0);
	const [firstItemIndex, setFirstItemIndex] = useState(0);

	const goBackwards = useCallback(() => {
		setFirstItemIndex((prevItem) => {
			if (prevItem > 0) {
				return prevItem - 1;
			}
			return prevItem;
		});
	}, []);

	const goForwards = useCallback(() => {
		setFirstItemIndex((prevItem) => {
			if (prevItem < data.length - 1) {
				return prevItem + 1;
			}
			return prevItem;
		});
	}, [data.length]);

	const isFirstItem = firstItemIndex === 0;
	const isLastItem = firstItemIndex === data.length - visibleItems;

	useEffect(() => {
		/* removo um da quantidade final para espaço de margem */
		setVisibleItems(Math.round(contentWidth / itemWidth) - 1);
	}, [contentWidth, itemWidth]);

	const calcOffset = useCallback(() => {
		// margem lateral menos metade do tamanho do botão
		const margin = 128 - 40;

		let x;

		if (isFirstItem) {
			x = margin;
		} else if (isLastItem) {
			x = -(itemWidth * (data.length - visibleItems)) + margin;
		} else {
			x = -(firstItemIndex * itemWidth) + margin;
		}

		return x;
	}, [data.length, firstItemIndex, isFirstItem, isLastItem, itemWidth, visibleItems]);

	const offset = calcOffset();
	const needsPagination = visibleItems > 0 && data.length > visibleItems;

	return (
		<CarouselContainer>
			<LeftGradient animate={{ opacity: !isFirstItem ? 1 : 0 }} />

			<SliderControl
				type="left"
				controlFn={goBackwards}
				color="yellow"
				show={needsPagination && !isFirstItem}
			/>

			<CarouselContent
				initial={false}
				animate={{ x: offset }}
				transition={{ type: 'spring', stiffness: 300, damping: 50 }}
			>
				<ItemsContainer
					type={type}
					data={data}
					setItemWidth={setItemWidth}
					setContentWidth={setContentWidth}
				/>
			</CarouselContent>

			<SliderControl
				type="right"
				controlFn={goForwards}
				color="yellow"
				show={needsPagination && !isLastItem}
			/>
			<RightGradient animate={{ opacity: !isLastItem ? 1 : 0 }} />
		</CarouselContainer>
	);
};
