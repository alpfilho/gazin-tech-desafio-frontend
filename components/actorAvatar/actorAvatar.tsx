import React from 'react';

import { ActorAvatarContainer } from './actorAvatar.styles';

interface ActorAvatarI {
	url: string;
}

export const ActorAvatar: React.FC<ActorAvatarI> = () => {
	return <ActorAvatarContainer />;
};
