import styled from 'styled-components';
import { motion } from 'framer-motion';

import { Title as TitleComponent } from 'components/title';
import { Container, Content } from 'components/contentContainer';

import { Rating } from 'components/tmdbRating/tmdbRating.styles';
import { headerHeight } from 'components/header/header.styles';

export const BannerContainer = styled.section`
	width: 100%;
	height: calc(100vh - ${headerHeight});

	position: relative;
	isolation: isolate;

	background-image: url('/images/no_backdrop_image.png');
	background-size: cover;
	background-position-y: center;
	background-position-x: center;
`;

export const BannerContent = styled.div`
	position: relative;
	z-index: 1;
	width: 100%;
	height: 100%;

	${Container} {
		width: 100%;
		height: 100%;
		padding-left: 14em;
		padding-right: 14em;

		${Content} {
			width: 100%;
			height: 100%;

			display: flex;
			flex-direction: column;
			justify-content: flex-start;
		}
	}
`;

export const RatingContainer = styled.div`
	padding-top: 4em;
	display: flex;
	justify-content: flex-end;
	align-items: flex-start;

	height: 60%;

	${Rating} {
		color: ${({ theme }) => theme.colors.white};
	}
`;

export const TextContainer = styled.div`
	position: relative;
	isolation: isolate;
	overflow: hidden;
	height: 40%;
	/* background-color: red; */
	padding-top: 2em;
	padding-bottom: 2em;
	width: 100%;
	filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.33));
	color: ${({ theme }) => theme.colors.white};
`;

export const TextContent = styled(motion.div)`
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	top: 0;
	width: 100%;
	height: 100%;
`;
export const Title = styled(TitleComponent)`
	font-size: 4em;
	/* height: 78px; */
	white-space: nowrap;
	overflow: hidden;
	padding-bottom: 0.125em;
`;

export const Synopsis = styled.p`
	display: block;
	font-family: 'Roboto', sans-serif;
	font-size: 1.5em;
	max-width: 62ch;
	line-height: 120%;
	/* height: 300px; */
	overflow: hidden;
	padding: 0;
	margin: 0;
`;

export const BackgroundContainer = styled.div`
	position: absolute;
	z-index: 0;

	left: 0;
	right: 0;
	bottom: 0;
	top: 0;
`;

export const BackgroundContent = styled.div`
	isolation: isolate;
	position: relative;
	width: 100%;
	height: 100%;
	overflow: hidden;
`;

export const BackgroundImage = styled(motion.img)<{ backgroundimage: string }>`
	position: absolute;

	// por algum motivo as imagens sempre são retornadas com uma borda branca
	// fiz esta "gambiarra" para não aparecer
	left: -2px;
	right: -2px;
	bottom: -2px;
	top: -2px;
	width: calc(100% + 4px);
	height: calc(100% + 4px);

	background-image: url(${(props) => props.backgroundimage});
	background-size: cover;
	background-position-y: center;
	background-position-x: center;

	will-change: opacity;
`;

export const BackgroundOverlay = styled.div`
	position: absolute;
	z-index: 2;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.33);
`;

export const TextBackground = styled.div`
	position: absolute;
	z-index: 3;
	bottom: 0;
	top: auto;
	left: 0;
	right: 0;
	width: 100%;
	height: 66%;
	background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);
`;
