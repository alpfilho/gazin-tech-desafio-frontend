import styled from 'styled-components';
import { Container, Content } from '@components/contentContainer';

export const HeaderContainer = styled.header`
	width: 100%;
	background-color: ${(props) => props.theme.colors.primaryBlack};

	${Container} {
		padding-top: 2em;
		padding-bottom: 2em;

		${Content} {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
		}
	}
`;

export const HeaderContent = styled.div``;

export const LogoContainer = styled.a`
	display: block;
	height: auto;
	width: 100%;
	max-width: 312px;
`;

export const SearchContainer = styled.div`
	width: 30%;
	max-width: 312px;
`;
