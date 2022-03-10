import styled from 'styled-components';

import { Container, Content } from 'components/contentContainer';

export const FooterContainer = styled.footer`
	width: 100%;
	color: ${(props) => props.theme.text};
	background-color: ${(props) => props.theme.background};
	transition: color 250ms linear, background-color 250ms linear;
	box-shadow: 0 -1em 10em rgba(0, 0, 0, 0.33);
`;

export const LogosContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: flex-end;

	@media screen and (max-width: 992px) {
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
`;

export const LogoBox = styled.a`
	width: 50%;
	max-width: 16em;

	display: flex;
	justify-content: center;
	align-items: center;
	padding-top: 1.5em;
`;

export const TmdbLogoBox = styled(LogoBox)`
	flex-direction: column;

	font-family: 'Roboto', sans-serif;
	font-weight: 400;
	text-align: center;
	padding-top: 1.5em;

	span {
		transition: color 250ms linear;
		color: ${(props) => props.theme.text};
		font-size: 1em;
		padding-bottom: 0.5em;
	}
`;

export const SignatureContainer = styled.div`
	margin-top: 2em;
	width: 100%;
	color: ${(props) => props.theme.text};
	background-color: ${(props) => props.theme.background};
	box-shadow: -0.2em 0 2em rgba(0, 0, 0, 0.33);
	padding-top: 1em;
	padding-bottom: 1em;
	transition: color 250ms linear, background-color 250ms linear;

	${Container} {
		${Content} {
			display: flex;
			justify-content: center;
			align-items: center;
			white-space: pre;

			a {
				transition: color 250ms linear;
				color: ${(props) => props.theme.text};
			}
		}
	}
`;
