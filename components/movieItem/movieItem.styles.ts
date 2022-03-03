import styled from 'styled-components';

export const MovieItemContainer = styled.a`
	display: flex;
	flex-direction: column;

	width: 192px;
	height: auto;

	border-radius: 0.5em;
	overflow: hidden;

	background-color: #050e12;
`;

export const ImageContainer = styled.div`
	position: relative;
	width: 192px;
	height: calc(192px * 1.48);

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center center;
	}
`;

export const TextContainer = styled.div`
	padding: 1em;
	color: #b6b6b6;
`;

export const Title = styled.div`
	font-family: 'Poppins', sans-serif;
	font-weight: 700;
	font-size: 1.125em;
	white-space: nowrap;
	color: #b6b6b6;
`;

export const DateContainer = styled.div`
	font-family: 'Roboto', sans-serif;
	font-size: 0.75em;
`;
