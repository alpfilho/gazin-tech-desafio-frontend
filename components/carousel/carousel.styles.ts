import styled from 'styled-components';
import { motion } from 'framer-motion';

export const CarouselContainer = styled.div`
	position: relative;
	width: 100%;
	/* background-color: red; */
	overflow: hidden;
`;

export const BackgroundGradient = styled(motion.div)`
	width: 6em;
	top: 0;
	bottom: 0;
	height: 100%;
	position: absolute;
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
