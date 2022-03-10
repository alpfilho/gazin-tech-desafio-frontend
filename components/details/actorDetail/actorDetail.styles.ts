import styled from 'styled-components';

import { Title } from 'components/title';

export const ActorProfile = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	padding-top: 2em;
	color: ${({ theme }) => theme.text};

	@media screen and (max-width: 768px) {
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding-bottom: 1em;
	}
`;

export const ActorAvatarContainer = styled.div``;

export const ActorInfo = styled.div`
	padding-left: 2em;
	font-family: 'Roboto', sans-serif;

	@media screen and (max-width: 768px) {
		padding-top: 1em;
		padding-left: 0;
	}
`;

export const ActorName = styled(Title)`
	color: ${({ theme }) => theme.colors.yellow};
	font-family: 'Poppins', sans-serif;
	font-size: 2.125em;
`;

export const ActorBiography = styled.p`
	font-family: 'Roboto', sans-serif;
	font-size: 1.25em;
	padding-bottom: 2em;
	color: ${({ theme }) => theme.text};
`;

export const ActorInfoText = styled.div`
	font-family: 'Roboto', sans-serif;
	font-size: 1.25em;
`;
