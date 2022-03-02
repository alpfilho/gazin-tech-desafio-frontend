import React, { useCallback, useState } from 'react';
import { useTheme } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { MovieItemI } from 'components/movieItem';
import { ActorItemI } from 'components/actorItem';

import { useViewport } from 'hooks/useViewport';

import { ActorData, MovieData } from 'lib/types';

import {
	CarouselContainer,
	ItemsContainer,
	NavIconContainer,
	NavLeft,
	NavRight
} from './carousel.styles';

interface CarouselI {
	initialData: MovieData[] | ActorData[];
	itemElement: React.FC<MovieItemI> | React.FC<ActorItemI>;
}

export const Carousel: React.FC<CarouselI> = ({ itemElement: Item }) => {
	const { device } = useViewport();

	const showQty = device === 'desktop' ? 6 : 2;
	const [pageIndex, setPageIndex] = useState(0);

	const { colors } = useTheme();

	const goForwards = useCallback(() => {
		console.log('forwards >>');
	}, []);

	const goBackwards = useCallback(() => {
		console.log('<< backwards');
	}, []);

	return (
		<CarouselContainer>
			<NavLeft onClick={goBackwards}>
				<NavIconContainer>
					<FontAwesomeIcon icon={faChevronLeft} color="#FFB800" />
				</NavIconContainer>
			</NavLeft>
			<ItemsContainer></ItemsContainer>
			<NavRight onClick={goForwards}>
				<NavIconContainer>
					<FontAwesomeIcon icon={faChevronRight} color="#FFB800" />
				</NavIconContainer>
			</NavRight>
		</CarouselContainer>
	);
};
