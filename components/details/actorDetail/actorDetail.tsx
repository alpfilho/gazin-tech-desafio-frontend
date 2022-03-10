import React, { useCallback } from 'react';

import type { MovieItemData } from 'lib/types';
import {
	ActorAvatarContainer,
	ActorInfo,
	ActorProfile,
	ActorName,
	ActorInfoText,
	ActorBiography
} from './actorDetail.styles';
import { ActorAvatar } from 'components/actorAvatar';
import { ContentContainer } from 'components/contentContainer';
import { Title } from 'components/title';
import { ListFilms } from 'components/listFilms';

interface ActorDetailI {
	avatar: string;
	name: string;
	birthday: string;
	placeOfBirth: string;
	biography: string;
	filmography: MovieItemData[];
}

export const ActorDetail: React.FC<ActorDetailI> = ({
	avatar,
	name,
	birthday,
	placeOfBirth,
	biography,
	filmography
}) => {
	const getAge = useCallback((birthdate: string) => {
		const todayYear = new Date().getFullYear();
		const birthYear = new Date(birthdate).getFullYear();

		return todayYear - birthYear;
	}, []);

	return (
		<>
			<ContentContainer>
				<ActorProfile>
					<ActorAvatarContainer>
						<ActorAvatar url={avatar} />
					</ActorAvatarContainer>
					<ActorInfo>
						<ActorName>{name}</ActorName>
						<ActorInfoText>{`${getAge(birthday)} anos`}</ActorInfoText>
						<ActorInfoText>{placeOfBirth}</ActorInfoText>
					</ActorInfo>
				</ActorProfile>
			</ContentContainer>
			<ContentContainer>
				<Title>Biografia</Title>
			</ContentContainer>
			<ContentContainer>
				<ActorBiography>
					{biography ? biography : 'Não encontramos a biografia deste ator 🙁'}
				</ActorBiography>
			</ContentContainer>
			<ContentContainer>
				<Title>Filmografia</Title>
			</ContentContainer>
			<ListFilms movies={filmography} />
		</>
	);
};
