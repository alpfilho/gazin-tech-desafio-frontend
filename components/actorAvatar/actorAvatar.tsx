import React from 'react';
import Image from 'next/image';

import { ActorAvatarContainer } from './actorAvatar.styles';

interface ActorAvatarI {
	url: string | null;
}

/**
 * Componente que renderiza a imagem arredondada de perfil de um ator
 */
export const ActorAvatar: React.FC<ActorAvatarI> = ({ url }) => {
	return (
		<ActorAvatarContainer>
			{url && (
				<Image
					src={url}
					alt="Foto do ator"
					layout="fill"
					objectFit="cover"
					objectPosition="center center"
				/>
			)}
		</ActorAvatarContainer>
	);
};
