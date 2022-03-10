import React, { useRef, useCallback, useEffect, Dispatch, SetStateAction } from 'react';

import type { ActorItemData, MovieItemData } from 'lib/types';

import { ActorItem } from 'components/actorItem';
import { MovieItem } from 'components/movieItem';

import { Item } from './item';

import { Content } from './itemsContainer.styles';

interface ItemsContainerI {
	type: 'actor' | 'movie';
	data: ActorItemData[] | MovieItemData[];
	setContentWidth: Dispatch<SetStateAction<number>>;
	setItemWidth: Dispatch<SetStateAction<number>>;
}

export const ItemsContainer: React.FC<ItemsContainerI> = ({
	type,
	data,
	setContentWidth,
	setItemWidth
}) => {
	const contentRef = useRef<HTMLDivElement>(null);

	const getContentSize = useCallback(() => {
		if (contentRef.current) {
			return contentRef.current.getBoundingClientRect();
		}
		return { width: 0, height: 0 };
	}, []);

	const updateContentSize = useCallback(() => {
		setContentWidth(getContentSize().width);
	}, [getContentSize, setContentWidth]);

	/**
	 * Iniciamos calculando o tamanho total disponível para os elementos
	 */
	useEffect(() => {
		updateContentSize();
	}, [updateContentSize]);

	/**
	 * Faço o cálculo novamente ao redimensionar a tela
	 */
	const onResize = useCallback(() => {
		updateContentSize();
	}, [updateContentSize]);

	useEffect(() => {
		window.addEventListener('resize', onResize, { passive: true });

		return () => {
			window.removeEventListener('resize', onResize);
		};
	}, [onResize]);

	return (
		<Content ref={contentRef}>
			{data.map((item, index) => {
				const isFirstItem = index === 0;

				if (type === 'actor') {
					const { id, name, profile, birthday } = item as ActorItemData;

					return (
						<Item key={id} setItemWidth={setItemWidth} isFirstItem={isFirstItem}>
							<ActorItem id={id} name={name} image={profile} birthday={birthday} />
						</Item>
					);
				} else {
					const { id, title, poster, releaseDate } = item as MovieItemData;

					return (
						<Item key={id} setItemWidth={setItemWidth} isFirstItem={isFirstItem}>
							<MovieItem id={id} title={title} image={poster} releaseDate={releaseDate} />
						</Item>
					);
				}
			})}
		</Content>
	);
};
