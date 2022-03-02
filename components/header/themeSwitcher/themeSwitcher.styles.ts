import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SwitcherContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	margin: 1em;
`;

export const ThemeSwitcherContainer = styled.button`
	position: relative;
	width: 4.5em;
	height: 2.5em;
	border-radius: 1.25em;
	background-color: ${({ theme }) => theme.background2};
	transition: background-color 250ms linear;
	border: none;
	cursor: pointer;
	&:focus {
		outline: none;
		border: none;
	}

	padding: 0;
	margin: 0;

	padding-left: 0.25em;
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;

export const SwitcherContent = styled(motion.div)`
	border-radius: 1em;
	width: 2em;
	height: 2em;
	background-color: ${({ theme }) => theme.background3};
	position: relative;
	overflow: hidden;
`;

export const SwitcherIconContainer = styled(motion.div)`
	position: absolute;
	top: 50%;
	left: 50%;

	width: 1.5em;
	height: 1.5em;

	display: flex;
	justify-content: center;
	align-items: center;

	svg {
		width: 100%;
		height: auto;
	}
`;
