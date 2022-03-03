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
