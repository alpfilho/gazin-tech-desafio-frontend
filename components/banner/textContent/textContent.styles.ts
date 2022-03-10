import styled from 'styled-components';
import { motion } from 'framer-motion';

import { Title as TitleComponent } from 'components/title';

export const TextContentContainer = styled(motion.div)`
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	top: 0;
	width: 100%;
	height: 100%;
	will-change: transform, opacity;
`;

export const Title = styled(TitleComponent)`
	font-size: 4em;
	padding-bottom: 0.125em;

	width: 100%;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	color: ${({ theme }) => theme.colors.white};

	@media screen and (max-width: 1100px) {
		font-size: 4em;
	}

	@media screen and (max-width: 768px) {
		text-align: center;
		font-size: 2.5em;
	}
`;

export const Synopsis = styled.p`
	display: -webkit-box;
	font-family: 'Roboto', sans-serif;
	max-width: 62ch;
	font-size: 1.5em;
	line-height: 120%;
	padding: 0;
	margin: 0;
	overflow: hidden;
	-webkit-line-clamp: 4;
	-webkit-box-orient: vertical;
	color: ${({ theme }) => theme.colors.white};

	@media screen and (max-width: 768px) {
		display: none;
	}

	@media screen and (max-height: 720px) {
		display: none;
	}
`;
