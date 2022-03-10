import styled from 'styled-components';

export const ActorItemContainer = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

export const ActorName = styled.div`
	padding-top: 1em;
	font-size: 1.25em;
	font-family: 'Poppins', sans-serif;
	color: ${({ theme }) => theme.text};
`;

export const ActorAge = styled.div`
	font-family: 'Roboto', sans-serif;
	color: ${({ theme }) => theme.text};
	font-size: 1.25em;
`;
