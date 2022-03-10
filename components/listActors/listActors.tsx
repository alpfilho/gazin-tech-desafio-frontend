import React from 'react';

import type { ActorItemData } from 'lib/types';

import { Carousel } from 'components/carousel';

import { ListActorsContainer } from './listActors.styles';

interface ListActorsI {
	actors: ActorItemData[];
}

export const ListActors: React.FC<ListActorsI> = ({ actors }) => {
	return (
		<ListActorsContainer>
			<Carousel type="actor" data={actors} />
		</ListActorsContainer>
	);
};
