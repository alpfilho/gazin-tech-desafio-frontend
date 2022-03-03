import styled from 'styled-components';
import { Container, Content } from 'components/contentContainer';

export const headerHeight = '6em';

export const HeaderContainer = styled.header`
	width: 100%;
	height: ${headerHeight};
	background-color: ${(props) => props.theme.background};
	transition: background-color 250ms linear;
`;

export const HeaderContent = styled.div`
	position: fixed;
	background-color: ${(props) => `${props.theme.background}f2`};
	transition: background-color 250ms linear;

	z-index: 10;
	width: 100%;
	height: ${headerHeight};

	box-shadow: 0 1em 10em rgba(0, 0, 0, 0.33);

	${Container} {
		height: 100%;
		width: 100%;
		/* background-color: red; */
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;

		${Content} {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;

			@media screen and (max-width: 768px) {
				justify-content: center;
			}
		}
	}
`;

export const LogoContainer = styled.a`
	display: block;
	height: auto;
	width: 100%;
	max-width: 20em;

	@media screen and (max-width: 920px) {
		max-width: 40%;
	}

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const RightContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;
