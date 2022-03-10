import { Container, Content } from 'components/contentContainer';
import styled from 'styled-components';

import { Title } from 'components/title';

const backdropSize = '30vh';

export const TitleContainer = styled.div`
	padding-top: ${backdropSize};
	padding-bottom: 3em;

	${Container} {
		${Content} {
			z-index: 1;
			padding-top: 3.5em;
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: center;

			@media screen and (max-width: 768px) {
				flex-direction: column;
				text-align: center;
			}
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
	flex-grow: 1;

	${Title} {
		padding-top: 0.5em;
		display: inline-block;
		position: relative;
		width: 100%;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	@media screen and (max-width: 768px) {
		padding-left: 0em;
	}
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
