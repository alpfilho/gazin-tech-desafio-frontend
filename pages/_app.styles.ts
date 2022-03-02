import styled from 'styled-components';

export const AppContainer = styled.div`
	height: auto;
	width: 100%;
	min-height: 100vh;
	background-color: ${(props) => props.theme.background};
	transition: background-color 250ms linear;

	display: flex;
	flex-direction: column;
`;

export const AppContent = styled.div`
	flex-grow: 1;
	color: ${(props) => props.theme.text};
	transition: color 250ms linear;
`;
