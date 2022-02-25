import styled from 'styled-components';
import { motion } from 'framer-motion';

export const RatingContainer = styled(motion.div)`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	user-select: none;
`;

export const SvgContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	svg {
		height: 100%;
		width: auto;
	}
`;

export const StarContainer = styled(SvgContainer)`
	height: 2em;
`;

export const Rating = styled.div`
	width: 4.125em;
	font-size: 1.75em;

	font-family: 'Poppins', sans-serif;
	font-weight: 700;

	display: flex;
	justify-content: center;
	align-items: center;
	word-break: keep-all;
	white-space: nowrap;
	text-align: center;
`;

export const ImbdLogoContainer = styled(SvgContainer)`
	height: 3em;
`;
