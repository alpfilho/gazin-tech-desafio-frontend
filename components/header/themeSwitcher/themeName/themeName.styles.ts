import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ThemeNameContainer = styled(motion.div)`
	white-space: nowrap;
	font-family: 'Poppins', sans-serif;
	padding: 0 0.5em 0 0.5em;
	color: ${({ theme }) => theme.text};
	transition: color 250ms linear;

	@media screen and (max-width: 992px) {
		display: none;
	}
`;
