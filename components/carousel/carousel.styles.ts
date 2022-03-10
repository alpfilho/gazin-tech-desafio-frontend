import styled from 'styled-components';
import { motion } from 'framer-motion';

export const CarouselContainer = styled.div`
	position: relative;
	width: 100%;
	max-width: 2100px;
	overflow: hidden;
`;

export const CarouselContent = styled(motion.div)`
	position: relative;
	z-index: 0;
	height: auto;
	width: auto;
	will-change: transform;
`;

export const BackgroundGradient = styled(motion.div)`
	z-index: 3;
	width: 6em;
	top: 0;
	bottom: 0;
	height: 100%;
	position: absolute;
	transition: 250ms linear;
	pointer-events: none;
	will-change: opacity;
`;

export const LeftGradient = styled(BackgroundGradient)`
	background: linear-gradient(
		90deg,
		${({ theme }) => theme.background} 0%,
		${({ theme }) => theme.background}00 100%
	);
	left: 0;
`;

export const RightGradient = styled(BackgroundGradient)`
	background: linear-gradient(
		-90deg,
		${({ theme }) => theme.background} 0%,
		${({ theme }) => theme.background}00 100%
	);
	right: 0;
`;
