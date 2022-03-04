import React, { useCallback } from 'react';
import Link from 'next/link';

import { ActorAvatar } from 'components/actorAvatar';

import { ActorItemContainer, ActorName, ActorAge } from './actorItem.styles';

export interface ActorItemI {
	id: number;
	image: string;
	name: string;
	birthday: string;
}

export const ActorItem: React.FC<ActorItemI> = ({ id, image, name, birthday }) => {
	const calcAge = useCallback((birthday) => {
		const todayDate = new Date();
		const birthdayDate = new Date(birthday);

		return todayDate.getFullYear() - birthdayDate.getFullYear();
	}, []);

	return (
		<Link href={`/actor-detail/${encodeURIComponent(id)}`} passHref>
			<ActorItemContainer>
				<ActorAvatar url={image} />
				<ActorName>{name}</ActorName>
				<ActorAge data-testid="actor-age">{calcAge(birthday)}</ActorAge>
			</ActorItemContainer>
		</Link>
	);
};
