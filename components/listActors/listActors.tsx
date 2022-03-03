import React from 'react';

import type { ItemActorData } from 'lib/types';

import { Carousel } from 'components/carousel';

interface ListActorsI {
	actors: ItemActorData[];
}

export const ListActors: React.FC<ListActorsI> = ({ actors }) => {
	return <Carousel type="actor" data={actors} />;
};
