import { ActorAvatar } from 'components/actorAvatar';
import React from 'react';
import { ActorItemContainer } from './actorItem.styles';

export interface ActorItemI {
	image: string;
	name: string;
	age: number;
}

export const ActorItem: React.FC<ActorItemI> = ({ image, name, age }) => {
	return (
		<ActorItemContainer>
			<ActorAvatar url={image} />
			{name}
			{age}
		</ActorItemContainer>
	);
};
