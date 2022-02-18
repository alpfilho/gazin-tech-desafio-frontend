import styled from 'styled-components';

export const AppContainer = styled.div`
	height: auto;
	width: 100%;
	min-height: 100vh;
	background-color: ${(props) => props.theme.colors.primaryBlack};

	display: flex;
	flex-direction: column;
`;

export const AppContent = styled.main`
	flex-grow: 1;

	color: ${(props) => props.theme.colors.white};
`;
