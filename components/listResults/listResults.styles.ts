import styled from 'styled-components';
import { Container, Content } from 'components/contentContainer';

export const ListResultsContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	padding-top: 2em;

	${Container} {
		${Content} {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;
			flex-wrap: wrap;
		}
	}
`;

export const ResultContainer = styled.div`
	padding: 0.5em;
`;

export const ResultText = styled.div`
	font-family: 'Roboto', sans-serif;
	font-size: 1.5em;
	color: ${({ theme }) => theme.text};
	transition: color 250ms linear;
`;
