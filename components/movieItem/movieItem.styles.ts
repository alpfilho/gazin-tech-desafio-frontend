import styled from 'styled-components';

export const MovieItemContainer = styled.a`
	display: flex;
	flex-direction: column;

	width: 216px;
	height: auto;

	border-radius: 1.5em;
	overflow: hidden;

	background-color: ${({ theme }) => theme.background2};
`;

export const ImageContainer = styled.div`
	position: relative;
	width: 100%;
	padding: 0.5em;
`;

export const TextContainer = styled.div`
	padding: 0.25em 1em 1em 1em;
	color: ${({ theme }) => theme.text};
`;

export const Title = styled.div`
	font-family: 'Poppins', sans-serif;
	font-weight: 700;
	font-size: 1.125em;

	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;

	color: ${({ theme }) => theme.text};
`;

export const DateContainer = styled.div`
	font-family: 'Roboto', sans-serif;
	font-size: 0.75em;
`;
