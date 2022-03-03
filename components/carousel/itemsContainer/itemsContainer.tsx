import React, { useRef } from 'react';

import type { ItemActorData, ItemMovieData } from 'lib/types';

import { ActorItem } from 'components/actorItem';
import { MovieItem } from 'components/movieItem';

import { Item } from './item';

import { Container, Content } from './itemsContainer.styles';

interface ItemsContainerI {
	type: 'actor' | 'movie';
	data: ItemActorData[] | ItemMovieData[];
	upcomingRelease?: boolean;
}

export const ItemsContainer: React.FC<ItemsContainerI> = ({ type, data, upcomingRelease }) => {
	const containerRef = useRef<HTMLDivElement>(null);

	const totalItems = data.length;

	return (
		<Content>
			{data.map((item) => {
				if (type === 'actor') {
					const { id, name, profile, birthday } = item as ItemActorData;

					return (
						<Item key={id}>
							<ActorItem id={id} name={name} image={profile} birthday={birthday} />
						</Item>
					);
				} else {
					const { id, title, poster, releaseDate } = item as ItemMovieData;

					return (
						<Item key={id}>
							<MovieItem
								id={id}
								title={title}
								image={poster}
								releaseDate={releaseDate}
								upcomingRelease={upcomingRelease}
							/>
						</Item>
					);
				}
			})}
		</Content>
	);
};
