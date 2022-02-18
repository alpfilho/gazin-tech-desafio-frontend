import styled from 'styled-components';

export const HeaderContainer = styled.header`
	width: 100%;
	height: auto;
	padding: 2em 4em 2em 4em;
	background-color: ${(props) => props.theme.colors.primaryBlack};
`;

export const LogoContainer = styled.a`
	display: block;
	height: auto;
	max-width: 312px;
`;
