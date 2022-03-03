import styled from 'styled-components';

export const ActorAvatarContainer = styled.div`
	width: 14em;
	height: 14em;
	position: relative;
	background-color: ${({ theme }) => theme.background2};
	background-image: url('/images/no_poster_or_avatar_image.png');
	background-size: cover;
	background-position: center center;
	border-radius: 50%;
	overflow: hidden;
`;
