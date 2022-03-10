import { Container, Content } from 'components/contentContainer';
import styled from 'styled-components';

const backdropSize = '30vh';

export const TitleContainer = styled.div`
	padding-top: ${backdropSize};
	padding-bottom: 3em;

	${Container} {
		${Content} {
			z-index: 1;
			padding-top: 75px;
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: center;
		}
	}
`;

export const PosterContainer = styled.div`
	width: 332px;
	flex-shrink: 0;
`;

export const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	padding-left: 2em;
`;

export const BackdropContainer = styled.div`
	position: absolute;
	z-index: 0;
	top: 0;
	left: 0;
	right: 0;
	bottom: auto;
	width: 100%;
	height: calc(${backdropSize} + 230px);
	background-image: url('/images/no_backdrop_image.png');
	background-size: cover;
	background-position: center center;
`;

export const BackdropContent = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	overflow: hidden;
`;
